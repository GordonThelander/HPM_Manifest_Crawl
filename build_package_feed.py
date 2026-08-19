#!/usr/bin/env python3
"""Build a durable HPM package-change feed from community datasets.

This is a downstream community data product. It deliberately reads only the
public community projections and has no dependency on either Automation Map
registry. The comparison state is written last, after every public output has
been rendered successfully, so an incomplete run cannot advance the baseline.
"""

import argparse
import collections
import datetime as dt
import hashlib
import html
import json
import pathlib
import subprocess
import tempfile
import xml.etree.ElementTree as ET

import build_community_datasets as community_builder


PACKAGES = pathlib.Path('community_packages.json')
DEFINITIONS = pathlib.Path('definitions.json')
HEALTH = pathlib.Path('package_health.json')
STATE = pathlib.Path('package_feed_state.json')
CHANGES = pathlib.Path('package_changes.json')
ATOM = pathlib.Path('package_changes.atom')
DIGEST = pathlib.Path('package_changes_weekly.md')
SITE = pathlib.Path('site/package-feed/index.html')
SITE_CHANGES = pathlib.Path('site/package-feed/data/package_changes.json')
SITE_ATOM = pathlib.Path('site/package-feed/data/package_changes.atom')
SITE_DIGEST = pathlib.Path('site/package-feed/data/package_changes_weekly.md')
SCHEMA_VERSION = '1.0'
MAX_EVENTS = 2000
REPOSITORY_URL = 'https://github.com/GordonThelander/HPM_Manifest_Crawl'
SITE_URL = REPOSITORY_URL + '/tree/main/site/package-feed'
CHANGES_URL = REPOSITORY_URL + '/blob/main/package_changes.json'
ATOM_URL = REPOSITORY_URL + '/raw/main/package_changes.atom'


class UnsafeSnapshot(ValueError):
    """Raised when current inputs must not replace the successful baseline."""


def serialise(value):
    return json.dumps(value, indent=2, ensure_ascii=False, sort_keys=True) + '\n'


def compact_serialise(value):
    return json.dumps(
        value, ensure_ascii=False, sort_keys=True, separators=(',', ':')
    ) + '\n'


def site_safe(value):
    if isinstance(value, str):
        return value.replace('\u2014', '-')
    if isinstance(value, list):
        return [site_safe(item) for item in value]
    if isinstance(value, dict):
        return {key: site_safe(item) for key, item in value.items()}
    return value


def stable_hash(value):
    encoded = json.dumps(value, ensure_ascii=False, sort_keys=True,
                         separators=(',', ':')).encode('utf-8')
    return hashlib.sha256(encoded).hexdigest()


def load_json(path):
    return json.loads(path.read_text('utf-8'))


def parse_time(value):
    if not value:
        raise UnsafeSnapshot('snapshotGenerated is missing')
    text = str(value).replace('Z', '+00:00')
    try:
        parsed = dt.datetime.fromisoformat(text)
    except ValueError as error:
        raise UnsafeSnapshot(f'invalid snapshotGenerated: {value}') from error
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=dt.timezone.utc)
    return parsed.astimezone(dt.timezone.utc)


def atom_time(value):
    return parse_time(value).isoformat(timespec='seconds').replace('+00:00', 'Z')


def validate_inputs(packages, definitions, health):
    documents = (packages, definitions, health)
    snapshots = {document.get('snapshotGenerated') for document in documents}
    if len(snapshots) != 1:
        raise UnsafeSnapshot('public inputs do not describe the same snapshot')
    snapshot = next(iter(snapshots))
    parse_time(snapshot)
    for document in documents:
        source = document.get('source') or {}
        if source.get('sourcePassCompleted') is not True:
            raise UnsafeSnapshot(
                f'{document.get("dataset") or "input"} source pass is incomplete'
            )
        if document.get('schemaVersion') != SCHEMA_VERSION:
            raise UnsafeSnapshot(
                f'{document.get("dataset") or "input"} schema is not {SCHEMA_VERSION}'
            )

    package_rows = packages.get('packages') or []
    health_rows = health.get('packages') or []
    definition_rows = definitions.get('definitions') or []
    if not package_rows:
        raise UnsafeSnapshot('package snapshot is empty')
    if packages.get('packageCount') != len(package_rows):
        raise UnsafeSnapshot('community package count is inconsistent')
    if health.get('packageCount') != len(health_rows):
        raise UnsafeSnapshot('health package count is inconsistent')
    if definitions.get('definitionCount') != len(definition_rows):
        raise UnsafeSnapshot('definition count is inconsistent')

    package_ids = [row.get('id') for row in package_rows]
    health_ids = [row.get('packageId') for row in health_rows]
    if None in package_ids or len(package_ids) != len(set(package_ids)):
        raise UnsafeSnapshot('community package IDs are missing or duplicated')
    if None in health_ids or len(health_ids) != len(set(health_ids)):
        raise UnsafeSnapshot('health package IDs are missing or duplicated')
    if set(package_ids) != set(health_ids):
        raise UnsafeSnapshot('package and health IDs do not agree')
    if any(row.get('packageId') not in set(package_ids) for row in definition_rows):
        raise UnsafeSnapshot('a definition refers to an unknown package')
    return snapshot


def broken_status(health):
    checks = health.get('checks') or {}
    manifest = (checks.get('manifestFetch') or {}).get('status')
    sources = (checks.get('sourceFetch') or {}).get('status')
    broken = manifest == 'FAIL' or sources == 'FAIL'
    reasons = []
    if manifest == 'FAIL':
        reasons.append('manifest fetch failed')
    if sources == 'FAIL':
        reasons.append('all declared source fetches failed')
    return {'broken': broken, 'reasons': reasons}


def definition_view(row):
    return {
        'kind': row.get('kind'),
        'manifestIdentity': row.get('manifestIdentity'),
        'sourceIdentity': row.get('sourceIdentity'),
        'source': {
            'url': (row.get('source') or {}).get('url'),
            'sha256': (row.get('source') or {}).get('sha256'),
        },
    }


def build_snapshot(packages, definitions, health):
    definitions_by_package = collections.defaultdict(list)
    for row in definitions.get('definitions') or []:
        definitions_by_package[row['packageId']].append(definition_view(row))
    health_by_package = {
        row['packageId']: row for row in health.get('packages') or []
    }
    result = {}
    for package in packages.get('packages') or []:
        package_id = package['id']
        package_definitions = sorted(
            definitions_by_package[package_id], key=lambda row: stable_hash(row)
        )
        record = {
            'package': package,
            'definitions': package_definitions,
            'health': broken_status(health_by_package[package_id]),
        }
        record['fingerprint'] = stable_hash(record)
        result[package_id] = record
    return result


def evidence_links(record):
    if not record:
        return []
    package = record.get('package') or {}
    candidates = [
        ('Manifest', (package.get('manifest') or {}).get('url')),
        ('Repository', (package.get('repository') or {}).get('url')),
    ]
    seen = set()
    links = []
    for label, url in candidates:
        if url and url not in seen:
            seen.add(url)
            links.append({'label': label, 'url': url})
    return links


def comparable_package(package):
    return {
        key: package.get(key) for key in (
            'name', 'author', 'category', 'description', 'tags', 'version',
            'dateReleased', 'links'
        )
    }


def source_locations(record):
    package = record.get('package') or {}
    return {
        'repository': (package.get('repository') or {}).get('url'),
        'definitions': sorted(
            (definition.get('source') or {}).get('url') or ''
            for definition in record.get('definitions') or []
        ),
    }


def declared_definitions(record):
    return sorted(({
        'kind': definition.get('kind'),
        'manifestIdentity': definition.get('manifestIdentity'),
        'sourceIdentity': definition.get('sourceIdentity'),
    } for definition in record.get('definitions') or []), key=stable_hash)


def change_types(previous, current):
    if previous is None:
        types = ['ADDED']
        if current['health']['broken']:
            types.append('BROKEN')
        return types
    if current is None:
        return ['REMOVED']
    types = []
    if comparable_package(previous['package']) != comparable_package(current['package']):
        types.append('UPDATED')
    if (previous['package'].get('manifest') or {}).get('url') != (
            current['package'].get('manifest') or {}).get('url'):
        types.append('MANIFEST_CHANGED')
    if source_locations(previous) != source_locations(current):
        types.append('SOURCE_LOCATION_CHANGED')
    if declared_definitions(previous) != declared_definitions(current):
        types.append('DECLARED_DEFINITIONS_CHANGED')
    was_broken = previous['health']['broken']
    is_broken = current['health']['broken']
    if not was_broken and is_broken:
        types.append('BROKEN')
    elif was_broken and not is_broken:
        types.append('RESTORED')
    return types


def event_summary(name, types):
    friendly = {
        'ADDED': 'added', 'REMOVED': 'removed', 'UPDATED': 'updated',
        'BROKEN': 'became unavailable', 'RESTORED': 'was restored',
        'MANIFEST_CHANGED': 'changed manifest location',
        'SOURCE_LOCATION_CHANGED': 'changed source location',
        'DECLARED_DEFINITIONS_CHANGED': 'changed declared definitions',
    }
    return f'{name}: ' + ', '.join(friendly[value] for value in types) + '.'


def event_detail(previous, current, types):
    before = (previous or {}).get('package') or {}
    after = (current or {}).get('package') or {}
    old_version = before.get('version')
    new_version = after.get('version')
    details = []
    if 'ADDED' in types:
        details.append(
            f'Entered the catalogue at version {new_version}.' if new_version
            else 'Entered the catalogue.'
        )
    elif 'REMOVED' in types:
        details.append(
            f'Left the catalogue after version {old_version}.' if old_version
            else 'Left the catalogue.'
        )
    elif old_version != new_version and (old_version or new_version):
        details.append(f'Version {old_version or "not declared"} to {new_version or "not declared"}.')
    elif 'UPDATED' in types:
        details.append('Declared package metadata changed.')
    if 'MANIFEST_CHANGED' in types:
        details.append('Manifest location changed.')
    if 'SOURCE_LOCATION_CHANGED' in types:
        details.append('One or more source locations changed.')
    if 'DECLARED_DEFINITIONS_CHANGED' in types:
        details.append('The declared app or driver set changed.')
    if 'BROKEN' in types:
        details.append('The manifest or every declared source could not be fetched.')
    if 'RESTORED' in types:
        details.append('Previously unavailable package evidence is reachable again.')
    return ' '.join(details)


def make_event(snapshot_generated, package_id, previous, current, types, commit=None):
    active = current or previous
    package = active.get('package') or {}
    event_key = [snapshot_generated, package_id, types, previous, current]
    event = {
        'id': 'change:' + stable_hash(event_key)[:24],
        'observedAt': snapshot_generated,
        'packageId': package_id,
        'packageName': package.get('name') or package_id,
        'changeTypes': types,
        'summary': event_summary(package.get('name') or package_id, types),
        'detail': event_detail(previous, current, types),
        'currentPackage': current.get('package') if current else None,
        'previousPackage': previous.get('package') if previous else None,
        'health': (current or previous).get('health'),
        'evidence': evidence_links(current or previous),
    }
    if commit:
        event['observedCommit'] = commit
        event['evidence'].append({
            'label': 'Observed snapshot',
            'url': f'{REPOSITORY_URL}/commit/{commit}',
        })
    return event


def compare(snapshot_generated, previous_packages, current_packages, commit=None):
    events = []
    for package_id in sorted(set(previous_packages) | set(current_packages)):
        previous = previous_packages.get(package_id)
        current = current_packages.get(package_id)
        if previous and current and previous.get('fingerprint') == current.get('fingerprint'):
            continue
        types = change_types(previous, current)
        if types:
            events.append(make_event(
                snapshot_generated, package_id, previous, current, types, commit
            ))
    return events


def refresh_evidence(event):
    record = {'package': event.get('currentPackage') or event.get('previousPackage')}
    evidence = evidence_links(record)
    if event.get('observedCommit'):
        evidence.append({
            'label': 'Observed snapshot',
            'url': f'{REPOSITORY_URL}/commit/{event["observedCommit"]}',
        })
    event['evidence'] = evidence
    return event


def history_document(snapshot_generated, prior_history, new_events, baseline):
    existing = list((prior_history or {}).get('events') or [])
    by_id = {event['id']: event for event in existing if event.get('id')}
    for event in new_events:
        by_id[event['id']] = event
    for event in by_id.values():
        refresh_evidence(event)
    events = sorted(by_id.values(), key=lambda event: (
        event.get('observedAt') or '', event.get('packageName') or '', event.get('id') or ''
    ), reverse=True)[:MAX_EVENTS]
    updated_at = max(
        [snapshot_generated] + [event['observedAt'] for event in events],
        key=parse_time,
    )
    return {
        'schemaVersion': SCHEMA_VERSION,
        'dataset': 'package-changes',
        'snapshotGenerated': snapshot_generated,
        'updatedAt': updated_at,
        'baselineEstablished': baseline,
        'eventCount': len(events),
        'events': events,
    }


def render_atom(history):
    ET.register_namespace('', 'http://www.w3.org/2005/Atom')
    ns = 'http://www.w3.org/2005/Atom'
    feed = ET.Element(f'{{{ns}}}feed')
    ET.SubElement(feed, f'{{{ns}}}id').text = CHANGES_URL
    ET.SubElement(feed, f'{{{ns}}}title').text = 'HPM package changes'
    ET.SubElement(feed, f'{{{ns}}}updated').text = atom_time(history['updatedAt'])
    ET.SubElement(feed, f'{{{ns}}}link', {'rel': 'self', 'href': ATOM_URL})
    ET.SubElement(feed, f'{{{ns}}}link', {'rel': 'alternate', 'href': SITE_URL})
    for event in history['events']:
        entry = ET.SubElement(feed, f'{{{ns}}}entry')
        ET.SubElement(entry, f'{{{ns}}}id').text = event['id']
        ET.SubElement(entry, f'{{{ns}}}title').text = event['summary']
        ET.SubElement(entry, f'{{{ns}}}updated').text = atom_time(event['observedAt'])
        ET.SubElement(entry, f'{{{ns}}}link', {'href': SITE_URL + '#' + event['id']})
        ET.SubElement(entry, f'{{{ns}}}summary').text = (
            ', '.join(event['changeTypes']) + ' Evidence: ' +
            ', '.join(link['url'] for link in event['evidence'])
        )
    ET.indent(feed, space='  ')
    return '<?xml version="1.0" encoding="utf-8"?>\n' + ET.tostring(
        feed, encoding='unicode', short_empty_elements=True
    ) + '\n'


def recent_events(history, days=7):
    cutoff = parse_time(history['updatedAt']) - dt.timedelta(days=days)
    return [event for event in history['events']
            if parse_time(event['observedAt']) >= cutoff]


def render_digest(history):
    events = recent_events(history)
    lines = [
        '# HPM package changes - weekly digest', '',
        f'Latest observation: `{history["updatedAt"]}`.', '',
    ]
    if not events:
        lines.extend(['No package changes were detected in this seven-day window.', ''])
        return '\n'.join(lines)
    counts = collections.Counter(
        change for event in events for change in event['changeTypes']
    )
    lines.extend([
        f'**{len(events)} package change(s):** ' + ', '.join(
            f'{key.lower().replace("_", " ")} {counts[key]}' for key in sorted(counts)
        ), ''
    ])
    for event in events:
        evidence = event['evidence'][0]['url'] if event['evidence'] else CHANGES_URL
        lines.append(f'- [{event["summary"]}]({evidence})')
    lines.extend(['', f'[Browse the complete changelog]({SITE_URL})', ''])
    return '\n'.join(lines)


def human_time(value):
    parsed = parse_time(value)
    return f'{parsed.day} {parsed.strftime("%b %Y, %H:%M UTC")}'


def render_site(history):
    events = history['events']
    counts = collections.Counter(
        change for event in events for change in event['changeTypes']
    )
    cards = []
    for event in events:
        badges = ''.join(
            f'<span class="badge badge-{html.escape(value.lower())}">{html.escape(value.replace("_", " ").title())}</span>'
            for value in event['changeTypes']
        )
        links = ''.join(
            f'<a href="{html.escape(link["url"], quote=True)}" target="_blank" rel="noopener noreferrer">{html.escape(link["label"])}</a>'
            for link in event['evidence']
        )
        package = event.get('currentPackage') or event.get('previousPackage') or {}
        components = package.get('components') or {}
        app_count = len(components.get('apps') or [])
        driver_count = len(components.get('drivers') or [])
        meta_bits = [package.get('author'), package.get('version'), package.get('category')]
        if app_count:
            meta_bits.append(f'{app_count} app' + ('s' if app_count != 1 else ''))
        if driver_count:
            meta_bits.append(f'{driver_count} driver' + ('s' if driver_count != 1 else ''))
        meta = ' · '.join(str(value) for value in meta_bits if value)
        search = ' '.join([
            event['packageName'], str(package.get('author') or ''),
            str(package.get('category') or ''), *event['changeTypes'],
        ]).casefold()
        cards.append(f'''<article class="event" id="{html.escape(event['id'], quote=True)}" data-types="{' '.join(event['changeTypes'])}" data-search="{html.escape(search, quote=True)}">
  <div class="event-top"><time datetime="{html.escape(event['observedAt'], quote=True)}">{human_time(event['observedAt'])}</time><div class="badges">{badges}</div></div>
  <h3>{html.escape(event['packageName'])}</h3>
  <p class="meta">{html.escape(meta)}</p>
  <p class="summary">{html.escape(event.get('detail') or event['summary'])}</p>
  <nav aria-label="Evidence for {html.escape(event['packageName'], quote=True)}">{links}</nav>
</article>''')
    if cards:
        content = '\n'.join(cards)
    else:
        content = '''<section class="empty"><h3>No evidenced changes yet</h3><p>The next successful crawl will be compared with the retained baseline.</p></section>'''

    recent = recent_events(history)
    digest_items = ''.join(
        f'<li><strong>{html.escape(event["packageName"])}</strong> - '
        f'{html.escape(event.get("detail") or ", ".join(value.replace("_", " ").lower() for value in event["changeTypes"]))}</li>'
        for event in recent[:20]
    ) or '<li>No evidenced changes in this seven-day window.</li>'
    type_options = [
        ('ALL', 'All changes'), ('ADDED', 'Added'), ('UPDATED', 'Updated'),
        ('BROKEN', 'Broken'), ('RESTORED', 'Restored'), ('REMOVED', 'Removed'),
    ]
    filters = ''.join(
        f'<button type="button" data-filter="{value}" class="filter{' active' if value == 'ALL' else ''}">{label}<span>{len(events) if value == "ALL" else counts[value]}</span></button>'
        for value, label in type_options if value == 'ALL' or counts[value]
    )
    return f'''<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Evidence-backed changes observed across the Hubitat Package Manager catalogue.">
  <title>HPM package changes</title>
  <link rel="alternate" type="application/atom+xml" title="HPM package changes" href="data/package_changes.atom">
  <style>
    :root{{--ink:#142019;--muted:#59685f;--paper:#f4f3eb;--card:#fffdf8;--line:#cbd4cc;--green:#09644a;--deep:#073d30;--amber:#a65d00;--red:#a22d2d;--blue:#1f628f}}
    *{{box-sizing:border-box}} html{{scroll-behavior:smooth}} body{{margin:0;color:var(--ink);background:linear-gradient(140deg,#e9f2ec 0,#f4f3eb 35%,#f8f5ed 100%);font:16px/1.55 system-ui,sans-serif}}
    a{{color:var(--green);font-weight:750}} main{{width:min(1160px,calc(100% - 32px));margin:auto;padding:48px 0 72px}}
    .hero{{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(280px,.65fr);gap:38px;align-items:end;padding:26px 0 42px;border-bottom:1px solid var(--line)}}
    .eyebrow{{margin:0;color:var(--green);font-weight:850;letter-spacing:.14em;text-transform:uppercase}} h1{{max-width:760px;margin:.25em 0 .2em;font:clamp(2.8rem,6vw,5.5rem)/.96 Georgia,serif;letter-spacing:-.045em}}
    .lede{{max-width:700px;margin:0;color:var(--muted);font-size:1.13rem}} .updated{{margin:0 0 8px;color:var(--muted);font-size:.86rem;text-transform:uppercase;letter-spacing:.08em}}
    .hero-stats{{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}} .stat{{padding:17px;border:1px solid var(--line);border-radius:13px;background:#ffffffa6}} .stat strong{{display:block;font:700 2rem/1 Georgia,serif}} .stat span{{color:var(--muted);font-size:.85rem}}
    .section-head{{display:flex;justify-content:space-between;gap:20px;align-items:end;margin:42px 0 18px}} h2{{margin:0;font:700 2rem/1.1 Georgia,serif}} .section-head p{{margin:0;color:var(--muted)}}
    .tools{{display:flex;gap:12px;flex-wrap:wrap;margin:0 0 20px}} .search{{flex:1 1 260px;min-width:0;padding:11px 14px;border:1px solid var(--line);border-radius:10px;background:var(--card);font:inherit}}
    .filters{{display:flex;gap:7px;flex-wrap:wrap}} button{{border:1px solid var(--line);border-radius:999px;padding:9px 12px;background:var(--card);color:var(--ink);font:700 .86rem system-ui;cursor:pointer}} button span{{margin-left:7px;color:var(--muted)}} button.active{{background:var(--deep);border-color:var(--deep);color:white}} button.active span{{color:#cce7dc}}
    .grid{{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}} .event,.empty{{padding:22px;border:1px solid var(--line);border-radius:15px;background:var(--card);box-shadow:0 10px 28px #173c2417}}
    .event[hidden]{{display:none}} .event-top{{display:flex;justify-content:space-between;gap:12px;align-items:start}} time{{color:var(--muted);font-size:.82rem}} .event h3,.empty h3{{margin:.7rem 0 .15rem;font:700 1.45rem Georgia,serif}} .meta{{margin:.2rem 0;color:var(--muted);font-size:.92rem}} .summary{{margin:.8rem 0}}
    .badges{{display:flex;justify-content:flex-end;gap:6px;flex-wrap:wrap}} .badge{{padding:3px 7px;border-radius:999px;background:#e4eee8;color:var(--green);font-size:.67rem;font-weight:850;letter-spacing:.035em}}
    .badge-broken,.badge-removed{{background:#f9e1df;color:var(--red)}} .badge-updated,.badge-manifest_changed,.badge-source_location_changed,.badge-declared_definitions_changed{{background:#ffefd0;color:var(--amber)}} .badge-restored{{background:#dff3e8;color:var(--green)}}
    nav{{display:flex;gap:11px;flex-wrap:wrap}} nav a{{font-size:.86rem}} .lower{{display:grid;grid-template-columns:1.2fr .8fr;gap:18px;margin-top:44px}} .panel{{padding:24px;border:1px solid var(--line);border-radius:15px;background:#ffffff8f}} .panel h2{{font-size:1.55rem}} .panel li{{margin:.45rem 0}}
    details{{margin-top:16px}} summary{{cursor:pointer;font-weight:800}} .data-links{{display:flex;gap:12px;flex-wrap:wrap;margin-top:14px}} footer{{margin-top:38px;color:var(--muted);font-size:.87rem}}
    @media(max-width:780px){{main{{padding-top:24px}}.hero,.lower{{grid-template-columns:1fr}}.hero-stats{{grid-template-columns:repeat(4,1fr)}}.grid{{grid-template-columns:1fr}}.section-head{{display:block}}}}
    @media(max-width:520px){{.hero-stats{{grid-template-columns:repeat(2,1fr)}}.event-top{{display:block}}.badges{{justify-content:flex-start;margin-top:8px}}}}
  </style>
  <link rel="stylesheet" href="../shared/hubitat.css">
</head>
<body class="package-feed">
<nav class="utility-nav" aria-label="Community utilities">
  <a class="utility-brand" href="../">Community Utilities</a>
  <div class="utility-links"><a href="../start-here/">Start Here</a><a href="../package-explorer/">Package Explorer</a><a href="../identity-resolver/">General Search</a><a href="../taxonomy/">Taxonomy</a><a href="../feature-tracker/">Update Tracker</a><a href="../manifest-validator/">Manifest Builder</a><a href="../network-guide/">Network Guide</a><a href="../package-feed/" aria-current="page">Package Feed</a><a href="../recovery-inventory/">Recovery Inventory</a><a href="../contributors/">Contributors</a><a href="../glossary/">Glossary</a><a href="../about/">About</a></div>
</nav>
<main>
  <header class="hero"><div><p class="eyebrow">HPM Manifest Crawl</p><h1>Package changes worth knowing about.</h1><p class="lede">New releases, catalogue additions, removals and availability changes - each tied back to the snapshot and upstream evidence that supports it.</p></div>
  <div><p class="updated">Latest observation<br><strong>{human_time(history['updatedAt'])}</strong></p><div class="hero-stats"><div class="stat"><strong>{len(events)}</strong><span>package changes</span></div><div class="stat"><strong>{counts['ADDED']}</strong><span>added</span></div><div class="stat"><strong>{counts['UPDATED']}</strong><span>updated</span></div><div class="stat"><strong>{counts['BROKEN'] + counts['RESTORED']}</strong><span>availability</span></div></div></div></header>
  <section aria-labelledby="changes-title"><div class="section-head"><div><h2 id="changes-title">Observed changes</h2><p id="result-count">Showing {len(events)} evidence-backed change(s).</p></div><p>Oldest retained baseline: {human_time(history['snapshotGenerated'])}</p></div>
  <div class="tools"><label class="search"><span hidden>Search packages or authors</span><input id="search" aria-label="Search packages or authors" placeholder="Search package, author or category" style="all:unset;width:100%"></label><div class="filters" aria-label="Filter changes">{filters}</div></div>
  <div class="grid" id="events">{content}</div></section>
  <section class="lower"><div class="panel"><h2>This week's digest</h2><p>A readable summary of the latest seven-day window.</p><ul>{digest_items}</ul></div>
  <div class="panel"><h2>Follow the data</h2><p>The changelog is built only from successful snapshots. Failed crawls cannot replace the baseline.</p><details><summary>Downloads and subscriptions</summary><div class="data-links"><a href="data/package_changes.atom">Atom feed</a><a href="data/package_changes_weekly.md" download>Markdown digest</a><a href="data/package_changes.json">JSON data</a></div></details></div></section>
  <footer>Change labels describe observed catalogue evidence, not code quality, popularity or endorsement.</footer>
</main>
<script>
  const cards=[...document.querySelectorAll('.event')], buttons=[...document.querySelectorAll('[data-filter]')], search=document.querySelector('#search'), count=document.querySelector('#result-count'); let active='ALL';
  function apply(){{const query=search.value.trim().toLowerCase();let shown=0;cards.forEach(card=>{{const type=active==='ALL'||card.dataset.types.split(' ').includes(active);const text=!query||card.dataset.search.includes(query);card.hidden=!(type&&text);if(!card.hidden)shown++;}});count.textContent=`Showing ${{shown}} evidence-backed change(s).`;}}
  buttons.forEach(button=>button.addEventListener('click',()=>{{active=button.dataset.filter;buttons.forEach(item=>item.classList.toggle('active',item===button));apply();}})); search.addEventListener('input',apply);
</script>
<!-- Cloudflare Web Analytics --><script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{{"token": "4f12063038634bc29a4820bbe7523693"}}'></script><!-- End Cloudflare Web Analytics -->
</body></html>
'''


def state_document(snapshot_generated, packages):
    return {
        'schemaVersion': SCHEMA_VERSION,
        'dataset': 'package-feed-state',
        'snapshotGenerated': snapshot_generated,
        'successfulBaseline': True,
        'packageCount': len(packages),
        'packages': packages,
    }


def git_snapshots():
    """Yield valid historical public projections, oldest first."""
    try:
        listing = subprocess.check_output([
            'git', 'log', '--reverse', '--format=%H%x09%cI', '--all', '--',
            community_builder.INDEX.name,
        ], text=True, encoding='utf-8')
    except (OSError, subprocess.CalledProcessError) as error:
        raise UnsafeSnapshot('Git history is unavailable for backfill') from error
    for line in listing.splitlines():
        if not line.strip():
            continue
        commit, committed_at = line.split('\t', 1)
        try:
            raw = subprocess.check_output([
                'git', 'show', f'{commit}:{community_builder.INDEX.name}'
            ])
            index = json.loads(raw.decode('utf-8'))
        except (subprocess.CalledProcessError, UnicodeDecodeError, json.JSONDecodeError):
            continue
        if index.get('sourcePassCompleted') is not True:
            continue
        documents = community_builder.build_all(index)
        try:
            validate_inputs(
                documents['packages'], documents['definitions'], documents['health']
            )
        except UnsafeSnapshot:
            continue
        yield {
            'commit': commit,
            'committedAt': committed_at,
            'packages': build_snapshot(
                documents['packages'], documents['definitions'], documents['health']
            ),
        }


def render_documents(history, state):
    changes = serialise(history)
    atom = render_atom(history)
    digest = render_digest(history)
    site_history = site_safe(history)
    return {
        CHANGES: changes,
        ATOM: atom,
        DIGEST: digest,
        SITE: render_site(site_history),
        SITE_CHANGES: serialise(site_history),
        SITE_ATOM: render_atom(site_history),
        SITE_DIGEST: render_digest(site_history),
        STATE: compact_serialise(state),
    }


def backfill_documents(packages, definitions, health):
    snapshot_generated = validate_inputs(packages, definitions, health)
    current = build_snapshot(packages, definitions, health)
    previous = None
    events = []
    snapshots_used = 0
    for historical in git_snapshots():
        if previous is not None:
            events.extend(compare(
                historical['committedAt'], previous, historical['packages'],
                historical['commit'],
            ))
        previous = historical['packages']
        snapshots_used += 1
    if previous is not None:
        events.extend(compare(snapshot_generated, previous, current))
    history = history_document(snapshot_generated, None, events, baseline=True)
    history['historySource'] = 'completed Git crawl snapshots'
    history['historicalSnapshotsCompared'] = snapshots_used
    state = state_document(snapshot_generated, current)
    return render_documents(history, state), events


def atomic_write(path, content):
    path.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(
            'w', encoding='utf-8', newline='\n', dir=path.parent,
            prefix=path.name + '.', suffix='.tmp', delete=False) as handle:
        handle.write(content)
        temporary = pathlib.Path(handle.name)
    temporary.replace(path)


def build_documents(packages, definitions, health, prior_state=None, prior_history=None):
    snapshot_generated = validate_inputs(packages, definitions, health)
    current = build_snapshot(packages, definitions, health)
    has_baseline = bool(
        prior_state and prior_state.get('successfulBaseline') is True and
        isinstance(prior_state.get('packages'), dict)
    )
    previous = prior_state['packages'] if has_baseline else {}
    new_events = compare(snapshot_generated, previous, current) if has_baseline else []
    history = history_document(
        snapshot_generated, prior_history, new_events, baseline=True
    )
    if prior_history and prior_history.get('historySource'):
        history['historySource'] = prior_history['historySource']
        history['historicalSnapshotsCompared'] = prior_history.get(
            'historicalSnapshotsCompared', 0
        )
    state = state_document(snapshot_generated, current)
    return render_documents(history, state), new_events


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true',
                        help='fail when committed feed outputs are missing or stale')
    parser.add_argument('--backfill-from-git', action='store_true',
                        help='rebuild retained history from completed Git crawl snapshots')
    args = parser.parse_args()
    packages = load_json(PACKAGES)
    definitions = load_json(DEFINITIONS)
    health = load_json(HEALTH)
    if args.backfill_from_git:
        documents, new_events = backfill_documents(packages, definitions, health)
    else:
        prior_state = load_json(STATE) if STATE.exists() else None
        prior_history = load_json(CHANGES) if CHANGES.exists() else None
        documents, new_events = build_documents(
            packages, definitions, health, prior_state, prior_history
        )
    failures = []
    if args.check:
        for path, content in documents.items():
            if not path.exists():
                failures.append(f'{path} is missing')
            elif path.read_text('utf-8') != content:
                failures.append(f'{path} is stale')
        if failures:
            for failure in failures:
                print(f'FAIL: {failure}. Run build_package_feed.py.')
            return 1
        print('Package feed outputs are current.')
        return 0

    # Public outputs are replaced first. The successful baseline is last.
    for path in (CHANGES, ATOM, DIGEST, SITE, SITE_CHANGES, SITE_ATOM, SITE_DIGEST):
        atomic_write(path, documents[path])
        print(f'Wrote {path}')
    atomic_write(STATE, documents[STATE])
    print(f'Promoted successful baseline {packages["snapshotGenerated"]}; '
          f'{len(new_events)} new package change(s).')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
