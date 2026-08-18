#!/usr/bin/env python3
"""Build authoritative HPM taxonomy settings and package-usage metrics.

This projection is independent of both Automation Map registries. Remote settings are
parsed as bounded JSON, validated, and never executed.
"""

import argparse
import datetime
import hashlib
import json
import pathlib
from urllib.request import Request, urlopen


SCHEMA_VERSION = '1.0'
SETTINGS_URL = (
    'https://raw.githubusercontent.com/HubitatCommunity/'
    'hubitat-packagerepositories/master/settings.json'
)
PACKAGES = pathlib.Path('community_packages.json')
FALLBACK = pathlib.Path('hpm_taxonomy_fallback.json')
OUTPUT = pathlib.Path('hpm_taxonomy.json')
SITE_OUTPUT = pathlib.Path('site/taxonomy/data/hpm_taxonomy.json')
SCRIPT_OUTPUT = pathlib.Path('site/taxonomy/data/hpm_taxonomy.js')
MAX_FETCH_BYTES = 64 * 1024
USER_AGENT = (
    'HPM-Manifest-Crawl/1.0 '
    '(+https://github.com/GordonThelander/HPM_Manifest_Crawl)'
)


def load(path):
    return json.loads(path.read_text('utf-8'))


def utc_now():
    return datetime.datetime.now(datetime.timezone.utc).replace(
        microsecond=0
    ).isoformat().replace('+00:00', 'Z')


def validate_settings(document):
    if not isinstance(document, dict):
        raise ValueError('taxonomy settings must be a JSON object')
    cleaned = {}
    limits = {'categories': (1, 20), 'tags': (1, 200)}
    for field, (minimum, maximum) in limits.items():
        values = document.get(field)
        if not isinstance(values, list) or not minimum <= len(values) <= maximum:
            raise ValueError(f'{field} must contain between {minimum} and {maximum} values')
        if any(not isinstance(value, str) or not value.strip() or len(value) > 100
               for value in values):
            raise ValueError(f'{field} contains an invalid value')
        values = [value.strip() for value in values]
        if len(values) != len(set(values)):
            raise ValueError(f'{field} contains duplicate values')
        cleaned[field] = values
    return cleaned


def settings_hash(settings):
    encoded = json.dumps(
        settings, ensure_ascii=False, sort_keys=True, separators=(',', ':')
    ).encode('utf-8')
    return hashlib.sha256(encoded).hexdigest()


def taxonomy_changes(previous, current):
    previous = validate_settings(previous)
    current = validate_settings(current)
    changes = {}
    for field in ('categories', 'tags'):
        before = set(previous[field])
        after = set(current[field])
        changes[f'{field}Added'] = sorted(after - before, key=str.casefold)
        changes[f'{field}Removed'] = sorted(before - after, key=str.casefold)
    changes['changed'] = any(changes[field] for field in (
        'categoriesAdded', 'categoriesRemoved', 'tagsAdded', 'tagsRemoved'
    ))
    return changes


def fetch_settings():
    request = Request(
        SETTINGS_URL,
        headers={'User-Agent': USER_AGENT, 'Accept': 'application/json'},
    )
    with urlopen(request, timeout=30) as response:
        body = response.read(MAX_FETCH_BYTES + 1)
        if len(body) > MAX_FETCH_BYTES:
            raise ValueError(f'taxonomy response exceeded {MAX_FETCH_BYTES} bytes')
        document = json.loads(body.decode('utf-8'))
        return validate_settings(document), response.headers.get('Last-Modified')


def metric_rows(values, packages, field):
    total = len(packages)
    counts = {}
    for value in values:
        matching = []
        for package in packages:
            present = package.get(field) == value if field == 'category' else value in set(
                package.get('tags') or []
            )
            if present:
                matching.append(package)
        app_count = sum(bool((row.get('components') or {}).get('apps')) for row in matching)
        driver_count = sum(bool((row.get('components') or {}).get('drivers')) for row in matching)
        both_count = sum(
            bool((row.get('components') or {}).get('apps'))
            and bool((row.get('components') or {}).get('drivers'))
            for row in matching
        )
        counts[value] = {
            'name': value,
            'packageCount': len(matching),
            'percent': round((len(matching) * 100 / total), 2) if total else 0.0,
            'appPackageCount': app_count,
            'driverPackageCount': driver_count,
            'mixedPackageCount': both_count,
            'unused': not matching,
        }
    ordered = sorted(counts.values(), key=lambda row: (-row['packageCount'], row['name'].casefold()))
    previous_count = None
    rank = 0
    for index, row in enumerate(ordered, start=1):
        if row['packageCount'] != previous_count:
            rank = index
            previous_count = row['packageCount']
        row['rank'] = rank
    return [counts[value] for value in values]


def unknown_rows(packages, field, valid_values):
    valid = set(valid_values)
    counts = {}
    for package in packages:
        values = [package.get(field)] if field == 'category' else package.get('tags') or []
        for value in set(values):
            if isinstance(value, str) and value and value not in valid:
                counts[value] = counts.get(value, 0) + 1
    return [
        {'name': name, 'packageCount': count}
        for name, count in sorted(counts.items(), key=lambda item: (-item[1], item[0].casefold()))
    ]


def build_document(settings, packages_document, source):
    settings = validate_settings(settings)
    packages = packages_document.get('packages') or []
    if packages_document.get('packageCount') != len(packages):
        raise ValueError('community package count does not match package records')
    return {
        'schemaVersion': SCHEMA_VERSION,
        'dataset': 'hpm-taxonomy',
        'snapshotGenerated': packages_document.get('snapshotGenerated'),
        'packageCount': len(packages),
        'source': source,
        'taxonomy': settings,
        'metrics': {
            'categories': metric_rows(settings['categories'], packages, 'category'),
            'tags': metric_rows(settings['tags'], packages, 'tags'),
            'unknownCategories': unknown_rows(packages, 'category', settings['categories']),
            'unknownTags': unknown_rows(packages, 'tags', settings['tags']),
        },
        'history': [],
        'method': {
            'packageUnit': 'Each current HPM package is counted at most once per term.',
            'percentageDenominator': len(packages),
            'definitionsDoNotInflateCounts': True,
            'remoteContentExecuted': False,
            'automationMapIndependent': True,
        },
    }


def validate(document):
    if document.get('schemaVersion') != SCHEMA_VERSION:
        raise ValueError('unexpected taxonomy schema version')
    if document.get('dataset') != 'hpm-taxonomy':
        raise ValueError('unexpected taxonomy dataset')
    taxonomy = validate_settings(document.get('taxonomy'))
    if document.get('method', {}).get('automationMapIndependent') is not True:
        raise ValueError('Automation Map independence must be explicit')
    if document.get('method', {}).get('definitionsDoNotInflateCounts') is not True:
        raise ValueError('definition-count protection must be explicit')
    for field in ('categories', 'tags'):
        rows = document.get('metrics', {}).get(field)
        if not isinstance(rows, list) or [row.get('name') for row in rows] != taxonomy[field]:
            raise ValueError(f'{field} metrics do not match authoritative taxonomy order')
        for row in rows:
            if not isinstance(row.get('packageCount'), int) or row['packageCount'] < 0:
                raise ValueError(f'{field} contains an invalid package count')
            if row['packageCount'] > document.get('packageCount', -1):
                raise ValueError(f'{field} package count exceeds catalogue size')
            if not isinstance(row.get('rank'), int) or row['rank'] < 1:
                raise ValueError(f'{field} contains an invalid rank')
    return document


def serialise(document):
    return json.dumps(document, indent=2, ensure_ascii=False, sort_keys=True) + '\n'


def script_serialise(document):
    return (
        'window.HPM_TAXONOMY = '
        + json.dumps(document, ensure_ascii=False, sort_keys=True, separators=(',', ':'))
        + ';\n'
    )


def fallback_document(settings, retrieved_at):
    return {
        'schemaVersion': SCHEMA_VERSION,
        'source': SETTINGS_URL,
        'retrievedAt': retrieved_at,
        'categories': settings['categories'],
        'tags': settings['tags'],
    }


def write_outputs(document):
    rendered = serialise(document)
    script = script_serialise(document)
    for path in (OUTPUT, SITE_OUTPUT):
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(rendered, encoding='utf-8', newline='\n')
    SCRIPT_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    SCRIPT_OUTPUT.write_text(script, encoding='utf-8', newline='\n')


def check_outputs(packages_document):
    document = load(OUTPUT)
    validate(document)
    expected = build_document(document['taxonomy'], packages_document, document['source'])
    validate(expected)
    rendered = serialise(expected)
    script = script_serialise(expected)
    if OUTPUT.read_text('utf-8') != rendered:
        raise ValueError('root taxonomy output is stale')
    if SITE_OUTPUT.read_text('utf-8') != rendered:
        raise ValueError('site taxonomy JSON output is stale')
    if SCRIPT_OUTPUT.read_text('utf-8') != script:
        raise ValueError('site taxonomy script output is stale')
    print(
        f'HPM taxonomy PASS: {len(document["taxonomy"]["categories"])} categories, '
        f'{len(document["taxonomy"]["tags"])} tags, '
        f'{document["packageCount"]} packages.'
    )


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    parser.add_argument('--offline', action='store_true')
    parser.add_argument('--settings', type=pathlib.Path)
    args = parser.parse_args()
    packages_document = load(PACKAGES)
    if args.check:
        check_outputs(packages_document)
        return 0

    retrieved_at = utc_now()
    previous_settings = validate_settings(load(FALLBACK))
    last_modified = None
    if args.settings:
        settings = validate_settings(load(args.settings))
        mode = 'file'
    elif args.offline:
        settings = validate_settings(load(FALLBACK))
        mode = 'fallback'
    else:
        try:
            settings, last_modified = fetch_settings()
            mode = 'live'
            FALLBACK.write_text(
                json.dumps(
                    fallback_document(settings, retrieved_at),
                    indent=2,
                    ensure_ascii=False,
                    sort_keys=True,
                ) + '\n',
                encoding='utf-8',
                newline='\n',
            )
        except Exception as error:
            print(f'WARNING: live HPM taxonomy fetch failed; using fallback: {error}')
            fallback = load(FALLBACK)
            settings = validate_settings(fallback)
            retrieved_at = fallback.get('retrievedAt')
            mode = 'fallback'

    source = {
        'url': SETTINGS_URL,
        'mode': mode,
        'retrievedAt': retrieved_at,
        'lastModified': last_modified,
        'sha256': settings_hash(settings),
        'fallbackAvailable': FALLBACK.is_file(),
        'changes': taxonomy_changes(previous_settings, settings),
    }
    document = build_document(settings, packages_document, source)
    validate(document)
    write_outputs(document)
    print(
        f'Wrote HPM taxonomy: {len(settings["categories"])} categories, '
        f'{len(settings["tags"])} tags, {len(packages_document.get("packages") or [])} '
        f'packages, source={mode}.'
    )
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
