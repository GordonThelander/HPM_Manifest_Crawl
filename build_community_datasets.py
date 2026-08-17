#!/usr/bin/env python3
"""Build stable public projections from the internal HPM crawl index.

These outputs are independent community data products. This script has no code
path that reads or writes either Automation Map registry.
"""

import argparse
import collections
import hashlib
import json
import pathlib
import sys


INDEX = pathlib.Path('hpm_package_index.json')
SCHEMA_VERSION = '1.0'
OUTPUTS = {
    'packages': pathlib.Path('community_packages.json'),
    'definitions': pathlib.Path('definitions.json'),
    'health': pathlib.Path('package_health.json'),
}


def clean(value):
    if value is None:
        return None
    text = str(value).strip()
    return text or None


def bounded(value, limit=500):
    text = clean(value)
    if text is None or len(text) <= limit:
        return text
    return text[:limit - 1].rstrip() + '…'


def stable_hash(*parts):
    material = '\x1f'.join(clean(part) or '' for part in parts)
    return hashlib.sha256(material.encode('utf-8')).hexdigest()[:20]


def package_id(package, declared_id_counts=None):
    declared = clean(package.get('packageId'))
    if declared:
        if declared_id_counts and declared_id_counts[declared] > 1:
            return f'hpm:{declared}:{stable_hash(package.get("manifestUrl"))}'
        return f'hpm:{declared}'
    return 'manifest:' + stable_hash(
        package.get('manifestUrl'), package.get('repoUrl'), package.get('packageName')
    )


def sorted_strings(values):
    return sorted({str(value).strip() for value in values or [] if str(value).strip()},
                  key=lambda value: value.casefold())


def source_identity(component):
    return {
        'url': clean(component.get('sourceUrl')),
        'fetched': bool(component.get('sourceFetched')),
        'sha256': clean(component.get('sourceSha256')),
        'bytes': component.get('sourceBytes'),
        'definitionLine': component.get('definitionLine'),
    }


def observation_summary(component):
    counts = collections.Counter()
    for observation in component.get('observations') or []:
        if isinstance(observation, dict) and clean(observation.get('type')):
            counts[str(observation['type'])] += 1
    return {key: counts[key] for key in sorted(counts)}


def component_records(package, public_package_id):
    records = []
    occurrences = collections.Counter()
    for kind, key in (('APP', 'apps'), ('DRIVER', 'drivers')):
        for component in package.get(key) or []:
            if not isinstance(component, dict):
                continue
            identity_key = stable_hash(
                public_package_id, kind, component.get('sourceUrl'),
                component.get('manifestName'), component.get('manifestNamespace'),
                component.get('definitionName'), component.get('definitionNamespace'),
            )
            occurrences[identity_key] += 1
            occurrence = occurrences[identity_key]
            component_id = f'definition:{identity_key}'
            if occurrence > 1:
                component_id += f':{occurrence}'
            records.append({
                'id': component_id,
                'packageId': public_package_id,
                'kind': kind,
                'manifestIdentity': {
                    'name': clean(component.get('manifestName')),
                    'namespace': clean(component.get('manifestNamespace')),
                },
                'sourceIdentity': {
                    'name': clean(component.get('definitionName')),
                    'namespace': clean(component.get('definitionNamespace')),
                },
                'source': source_identity(component),
                'observationCounts': observation_summary(component),
            })
    return records


def package_record(package, public_package_id, definitions):
    return {
        'id': public_package_id,
        'hpmPackageId': clean(package.get('packageId')),
        'name': clean(package.get('packageName')),
        'author': clean(package.get('author')),
        'category': clean(package.get('category')),
        'description': clean(package.get('description')),
        'tags': sorted_strings(package.get('tags')),
        'version': clean(package.get('version')),
        'dateReleased': clean(package.get('dateReleased')),
        'repository': {
            'name': clean(package.get('repoName')),
            'author': clean(package.get('repoAuthor')),
            'url': clean(package.get('repoUrl')),
        },
        'manifest': {
            'url': clean(package.get('manifestUrl')),
            'fetched': bool(package.get('manifestFetched')),
        },
        'links': {
            'documentation': clean(package.get('documentationLink')),
            'community': clean(package.get('communityLink')),
        },
        'components': {
            'apps': [record['id'] for record in definitions if record['kind'] == 'APP'],
            'drivers': [record['id'] for record in definitions if record['kind'] == 'DRIVER'],
        },
    }


def identity_status(component):
    manifest = component['manifestIdentity']
    source = component['sourceIdentity']
    pairs = []
    for field in ('name', 'namespace'):
        if manifest[field] is not None and source[field] is not None:
            pairs.append(manifest[field].strip().casefold() == source[field].strip().casefold())
    if not pairs:
        return 'NOT_AVAILABLE'
    if all(pairs) and all(source[field] is not None for field in ('name', 'namespace')):
        return 'MATCH'
    if not all(pairs):
        return 'MISMATCH'
    return 'PARTIAL'


def package_health_record(package, public_package_id, definitions, errors_by_url):
    source_states = [record['source']['fetched'] for record in definitions]
    if not source_states:
        source_status = 'NOT_APPLICABLE'
    elif all(source_states):
        source_status = 'PASS'
    elif any(source_states):
        source_status = 'PARTIAL'
    else:
        source_status = 'FAIL'

    identity_states = [identity_status(record) for record in definitions]
    if not identity_states or all(state == 'NOT_AVAILABLE' for state in identity_states):
        identity_summary = 'NOT_AVAILABLE'
    elif any(state == 'MISMATCH' for state in identity_states):
        identity_summary = 'MISMATCH'
    elif all(state == 'MATCH' for state in identity_states):
        identity_summary = 'MATCH'
    else:
        identity_summary = 'PARTIAL'

    urls = [
        clean(package.get('repoUrl')), clean(package.get('manifestUrl')),
        clean(package.get('documentationLink')), clean(package.get('communityLink')),
    ] + [record['source']['url'] for record in definitions]
    urls = sorted({url for url in urls if url})
    non_https = [url for url in urls if not url.lower().startswith('https://')]

    related_errors = []
    for url in urls:
        related_errors.extend(errors_by_url.get(url, []))
    related_errors.sort(key=lambda error: (
        str(error.get('level') or ''), str(error.get('url') or ''),
        str(error.get('reason') or ''),
    ))

    return {
        'packageId': public_package_id,
        'checks': {
            'manifestFetch': {
                'status': 'PASS' if package.get('manifestFetched') else 'FAIL',
                'url': clean(package.get('manifestUrl')),
            },
            'sourceFetch': {
                'status': source_status,
                'components': len(source_states),
                'fetched': sum(1 for state in source_states if state),
            },
            'definitionIdentity': {
                'status': identity_summary,
                'components': collections.Counter(identity_states),
            },
            'documentationLink': {
                'status': 'PRESENT' if clean(package.get('documentationLink')) else 'MISSING',
                'url': clean(package.get('documentationLink')),
            },
            'communityLink': {
                'status': 'PRESENT' if clean(package.get('communityLink')) else 'MISSING',
                'url': clean(package.get('communityLink')),
            },
            'httpsTransport': {
                'status': 'PASS' if not non_https else 'WARN',
                'nonHttpsUrls': non_https,
            },
        },
        'crawlErrors': related_errors,
    }


def envelope(name, index, records, count_name, records_name):
    return {
        'schemaVersion': SCHEMA_VERSION,
        'dataset': name,
        'snapshotGenerated': index.get('snapshotGenerated'),
        'source': {
            'file': INDEX.name,
            'schemaVersion': index.get('schemaVersion'),
            'sourcePassCompleted': bool(index.get('sourcePassCompleted')),
        },
        count_name: len(records),
        records_name: records,
    }


def build_all(index):
    package_rows = []
    definition_rows = []
    health_rows = []
    errors_by_url = collections.defaultdict(list)
    for error in index.get('errors') or []:
        if isinstance(error, dict) and clean(error.get('url')):
            errors_by_url[str(error['url'])].append({
                'level': clean(error.get('level')),
                'url': clean(error.get('url')),
                'reason': bounded(error.get('reason')),
            })

    packages = sorted(
        (package for package in index.get('packages') or [] if isinstance(package, dict)),
        key=lambda package: (
            clean(package.get('repoName')) or '', clean(package.get('packageName')) or '',
            clean(package.get('manifestUrl')) or '',
        ),
    )
    declared_id_counts = collections.Counter(
        clean(package.get('packageId')) for package in packages
        if clean(package.get('packageId'))
    )
    for package in packages:
        public_package_id = package_id(package, declared_id_counts)
        definitions = component_records(package, public_package_id)
        definitions.sort(key=lambda record: (record['kind'], record['id']))
        definition_rows.extend(definitions)
        package_rows.append(package_record(package, public_package_id, definitions))
        health_rows.append(package_health_record(
            package, public_package_id, definitions, errors_by_url
        ))

    definition_rows.sort(key=lambda record: (record['packageId'], record['kind'], record['id']))
    package_rows.sort(key=lambda record: record['id'])
    health_rows.sort(key=lambda record: record['packageId'])

    attributed_error_keys = {
        (error['level'], error['url'], error['reason'])
        for row in health_rows for error in row['crawlErrors']
    }
    unattributed_errors = []
    for errors in errors_by_url.values():
        for error in errors:
            key = (error['level'], error['url'], error['reason'])
            if key not in attributed_error_keys:
                unattributed_errors.append(error)
    unattributed_errors.sort(key=lambda error: (
        error['level'] or '', error['url'] or '', error['reason'] or ''
    ))

    packages_doc = envelope(
        'community-packages', index, package_rows, 'packageCount', 'packages'
    )
    definitions_doc = envelope(
        'definitions', index, definition_rows, 'definitionCount', 'definitions'
    )
    health_doc = envelope(
        'package-health', index, health_rows, 'packageCount', 'packages'
    )
    health_doc['unattributedCrawlErrors'] = unattributed_errors
    return {
        'packages': packages_doc,
        'definitions': definitions_doc,
        'health': health_doc,
    }


def serialise(document):
    return json.dumps(document, indent=2, ensure_ascii=False, sort_keys=True) + '\n'


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--check', action='store_true',
                        help='fail if committed projections are missing or stale')
    parser.add_argument('--out-dir', type=pathlib.Path, default=pathlib.Path('.'))
    args = parser.parse_args()

    index = json.loads(INDEX.read_text('utf-8'))
    documents = build_all(index)
    failures = []
    for key, relative_path in OUTPUTS.items():
        path = args.out_dir / relative_path
        text = serialise(documents[key])
        if args.check:
            if not path.exists():
                failures.append(f'{path} is missing')
            elif path.read_text('utf-8') != text:
                failures.append(f'{path} is stale')
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(text, encoding='utf-8', newline='\n')
            print(f'Wrote {path} ({len(text.encode("utf-8"))} bytes)')
    if failures:
        for failure in failures:
            print(f'FAIL: {failure}. Run build_community_datasets.py.', file=sys.stderr)
        return 1
    if args.check:
        print('Community datasets are current.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
