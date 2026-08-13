#!/usr/bin/env python3
"""Draft registry entries for packages no entry currently matches.

Turns a blank page into a form. For each unrepresented package that looks like
an integration, it writes a candidate entry with the mechanical parts filled in
and the judgement left out:

  filled in    id, name, vendor, matchMode, matchRules, and the evidence a
               human needs to decide (hosts, LAN primitives, tags, category)
  LEFT OUT     dependencies, and therefore runtimeCriticality

That omission is the whole design. A discovered package supports match rules
mechanically; it does not tell you whether a cloud is RUNTIME or SETUP_ONLY.
Meross authenticates against its cloud then controls over the LAN, so losing
the internet means you cannot re-pair the device but it still works. Tuya cloud
integrations stop entirely. The source evidence for both looks the same.

A wrong RUNTIME is invisible until someone's internet drops and the map told
them they would be fine. So this script will not guess it, and an entry it
produces is NOT usable until a person adds the dependency.

Output goes to registry_candidates_draft.json and is NEVER merged into the
registry automatically. Review, complete, move across by hand.

    python draft_candidates.py [--limit N]
"""

import argparse
import json
import pathlib
import re
import sys

import crawl_hpm

INDEX = pathlib.Path('hpm_package_index.json')
REGISTRY = pathlib.Path(crawl_hpm.REGISTRY)
OUT = pathlib.Path('registry_candidates_draft.json')

# Only these are worth drafting. A Zigbee lamp driver has no external
# dependency to declare, and drafting one would be noise.
CANDIDATE_TAGS = {'lan', 'cloud'}
CANDIDATE_CATEGORIES = {'integrations'}

# Hosts that appear in source but are never a dependency: icons, source
# downloads, documentation links. Seen in nearly every package.
NOISE_HOSTS = {
    'raw.githubusercontent.com', 'github.com', 'www.github.com',
    'gist.githubusercontent.com', 'community.hubitat.com', 'docs.hubitat.com',
    'docs2.hubitat.com', 'www.apache.org', 'opensource.org', 'creativecommons.org',
    'www.paypal.com', 'paypal.me', 'ko-fi.com', 'buymeacoffee.com',
}

LAN_TYPES = {'LAN_PROTOCOL', 'UDP_PROTOCOL', 'HUB_ACTION', 'SEND_HUB_COMMAND', 'LAN_PARSE'}


def slug(name):
    s = re.sub(r'[^a-z0-9]+', '-', (name or '').lower()).strip('-')
    return s or 'unnamed'


def is_candidate(pkg):
    tags = {str(t).lower() for t in (pkg.get('tags') or [])}
    cat = str(pkg.get('category') or '').lower()
    return bool(tags & CANDIDATE_TAGS) or cat in CANDIDATE_CATEGORIES


def components(pkg):
    return list(pkg.get('apps') or []) + list(pkg.get('drivers') or [])


def evidence_for(pkg):
    hosts, lan, http = set(), set(), 0
    for c in components(pkg):
        for o in (c.get('observations') or []):
            t = o.get('type')
            if t == 'NETWORK_URL_LITERAL':
                h = ((o.get('value') or {}).get('host') or '').lower()
                if h and h not in NOISE_HOSTS:
                    hosts.add(h)
            elif t in LAN_TYPES:
                lan.add(t)
            elif t == 'HTTP_CALL':
                http += 1
    return sorted(hosts), sorted(lan), http


def match_rules(pkg):
    """Prefer the name the SOURCE declares, because that is what a hub reports.

    The manifest name is what the developer typed into packageManifest.json and
    the two do not always agree. Matching the wrong one is how a rule ends up
    silently matching nothing.
    """
    rules, seen = [], set()
    for c in pkg.get('apps') or []:
        for name in (c.get('definitionName'), c.get('manifestName')):
            if name and name not in seen:
                seen.add(name)
                rules.append({'field': 'appName', 'operator': 'equals',
                              'value': name, 'confidence': 100 if name == c.get('definitionName') else 90})
                break
    for c in pkg.get('drivers') or []:
        for name in (c.get('definitionName'), c.get('manifestName')):
            if name and name not in seen:
                seen.add(name)
                rules.append({'field': 'driverName', 'operator': 'equals',
                              'value': name, 'confidence': 100 if name == c.get('definitionName') else 90})
                break
    return rules


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--limit', type=int, default=0, help='draft at most N candidates')
    args = ap.parse_args()

    index = json.loads(INDEX.read_text('utf-8'))
    registry = json.loads(REGISTRY.read_text('utf-8'))
    entries = registry.get('entries', [])

    # Reuse the crawler's own matcher so "unrepresented" means exactly what the
    # validation report means by it.
    targets, by_package = crawl_hpm.rule_targets(index)
    matched = set()
    for pi, vals in enumerate(by_package):
        for e in entries:
            if crawl_hpm.entry_state(e, vals) == 'MATCH':
                matched.add(pi)
                break

    existing_ids = {str(e.get('id')) for e in entries}
    drafts = []
    for pi, pkg in enumerate(index.get('packages', [])):
        if pi in matched or not is_candidate(pkg):
            continue
        rules = match_rules(pkg)
        if not rules:
            continue
        hosts, lan, http = evidence_for(pkg)

        ident = slug(pkg.get('packageName'))
        n = 2
        while ident in existing_ids:
            ident, n = f"{slug(pkg.get('packageName'))}-{n}", n + 1
        existing_ids.add(ident)

        drafts.append({
            'id': ident,
            'name': pkg.get('packageName'),
            'vendor': pkg.get('author'),
            'origin': 'COMMUNITY',
            'status': 'NEEDS_CLASSIFICATION',
            'matchMode': 'ANY',
            'matchRules': rules,
            # Deliberately empty. See the module docstring: this script will not
            # invent a dependency, and an entry is unusable until one is added
            # by a person who knows whether it is RUNTIME or SETUP_ONLY.
            'dependencies': [],
            'draftEvidence': {
                'category': pkg.get('category'),
                'tags': pkg.get('tags') or [],
                'externalHosts': hosts,
                'lanPrimitives': lan,
                'httpCallSites': http,
                'manifestUrl': pkg.get('manifestUrl'),
                'documentationLink': pkg.get('documentationLink'),
                'communityLink': pkg.get('communityLink'),
                'hint': hint(hosts, lan, http),
            },
        })

    drafts.sort(key=lambda d: (str(d['name'] or '').lower(), d['id']))
    if args.limit:
        drafts = drafts[:args.limit]

    OUT.write_text(json.dumps({
        'note': ('Drafts only. dependencies[] is intentionally empty and runtimeCriticality '
                 'is intentionally absent; neither can be derived from a crawl. Complete an '
                 'entry by hand before moving it into the registry.'),
        'generatedFrom': {'index': str(INDEX), 'registry': str(REGISTRY)},
        'candidateCount': len(drafts),
        'candidates': drafts,
    }, indent=2, ensure_ascii=False, sort_keys=False) + '\n', encoding='utf-8', newline='\n')

    print(f'{len(drafts)} candidate(s) drafted -> {OUT}')
    with_hosts = sum(1 for d in drafts if d['draftEvidence']['externalHosts'])
    lan_only = sum(1 for d in drafts if d['draftEvidence']['lanPrimitives'] and not d['draftEvidence']['externalHosts'])
    print(f'  {with_hosts} have external hosts in source, {lan_only} look LAN-only, '
          f'{len(drafts) - with_hosts - lan_only} have neither')


def hint(hosts, lan, http):
    """A sentence for the reviewer. Never a classification."""
    if hosts and lan:
        return ('Both external hosts and LAN primitives found. Likely more than one '
                'dependency at different criticality; check whether the cloud is needed to '
                'run or only to set up.')
    if hosts:
        return 'External hosts found, no LAN primitives. Check whether every host is a real endpoint.'
    if lan:
        return 'LAN primitives only, no external hosts. Likely a local dependency.'
    return 'No network evidence found in source. May need no external dependency at all.'


if __name__ == '__main__':
    sys.exit(main())
