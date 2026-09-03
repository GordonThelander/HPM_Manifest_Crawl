#!/usr/bin/env python3
"""Build the static unified package explorer projection."""

import argparse
import json
import pathlib
import urllib.parse


PACKAGES = pathlib.Path('community_packages.json')
DEFINITIONS = pathlib.Path('definitions.json')
HEALTH = pathlib.Path('package_health.json')
NETWORK = pathlib.Path('network_evidence.json')
OFFICIAL_DEVICES = pathlib.Path('official_devices.json')
COMMUNITY_DRIVERS = pathlib.Path('community_drivers.json')
COMMUNITY_APPS = pathlib.Path('community_apps.json')
OUTPUT = pathlib.Path('site/package-explorer/data/explorer_index.json')
SCRIPT_OUTPUT = pathlib.Path('site/package-explorer/data/explorer_index.js')
SCHEMA_VERSION = '1.0'


def load(path):
    return json.loads(path.read_text('utf-8'))


def site_safe(value):
    if isinstance(value, str):
        return value.replace('\u2014', '-')
    if isinstance(value, list):
        return [site_safe(item) for item in value]
    if isinstance(value, dict):
        return {key: site_safe(item) for key, item in value.items()}
    return value


def repository_home(url):
    if not url:
        return None
    parsed = urllib.parse.urlparse(url)
    host = parsed.netloc.lower()
    parts = [urllib.parse.unquote(part) for part in parsed.path.split('/') if part]
    if host == 'raw.githubusercontent.com' and len(parts) >= 2:
        return f'https://github.com/{parts[0]}/{parts[1]}'
    if host in {'github.com', 'www.github.com'} and len(parts) >= 2:
        return f'https://github.com/{parts[0]}/{parts[1].removesuffix(".git")}'
    return None


def link_map(package, definitions):
    links = package.get('links') or {}
    manifest = package.get('manifest') or {}
    repository = None
    for url in [row.get('sourceUrl') for row in definitions] + [manifest.get('url')]:
        repository = repository_home(url)
        if repository:
            break
    return {
        'manifest': manifest.get('url'),
        'repository': repository,
        'documentation': links.get('documentation'),
        'community': links.get('community'),
    }


def health_summary(row):
    if not row:
        return {'classification': 'UNKNOWN', 'checks': []}
    checks = []
    attention = {'FAIL', 'ERROR', 'UNREACHABLE', 'MISMATCH', 'BROKEN'}
    for name, detail in sorted((row.get('checks') or {}).items()):
        status = str((detail or {}).get('status') or 'UNKNOWN')
        checks.append({'name': name, 'status': status})
    classification = 'ATTENTION' if any(item['status'] in attention for item in checks) else 'PASS'
    return {'classification': classification, 'checks': checks}


def package_record(package, definitions, health, network):
    package_definitions = []
    kinds = set()
    for definition_id in (package.get('components') or {}).get('apps', []) + (package.get('components') or {}).get('drivers', []):
        definition = definitions.get(definition_id)
        if not definition:
            continue
        identity = definition.get('sourceIdentity') or definition.get('manifestIdentity') or {}
        kind = definition.get('kind') or 'UNKNOWN'
        kinds.add(kind)
        package_definitions.append({
            'id': definition.get('id'),
            'kind': kind,
            'name': identity.get('name'),
            'namespace': identity.get('namespace'),
            'sourceUrl': (definition.get('source') or {}).get('url'),
            'identityEvidence': 'SOURCE_IDENTITY' if definition.get('sourceIdentity') else 'MANIFEST_IDENTITY',
        })
    network_row = network.get(package.get('id')) or {}
    links = link_map(package, package_definitions)
    return {
        'id': package.get('id'),
        'recordType': 'HPM_PACKAGE',
        'classification': 'HPM_PACKAGE_AVAILABLE',
        'name': package.get('name'),
        'description': package.get('description'),
        'author': package.get('author'),
        'category': package.get('category'),
        'tags': package.get('tags') or [],
        'version': package.get('version'),
        'dateReleased': package.get('dateReleased'),
        'kinds': sorted(kinds),
        'definitions': sorted(package_definitions, key=lambda row: (row['kind'], row.get('name') or '', row.get('id') or '')),
        'links': links,
        'hasDocumentation': bool(links.get('documentation')),
        'health': health_summary(health.get(package.get('id'))),
        'network': {
            'classification': network_row.get('classification') or 'INSUFFICIENT',
            'declared': network_row.get('declared') or {},
            'externalHosts': (network_row.get('observed') or {}).get('externalHosts') or [],
            'reviewed': network_row.get('reviewed') or [],
        },
        'evidence': [
            {'label': 'HPM metadata', 'classification': 'HPM_PACKAGE_AVAILABLE'},
            {'label': 'Source identity', 'classification': 'SOURCE_IDENTITY_MATCH'}
            if any(row['identityEvidence'] == 'SOURCE_IDENTITY' for row in package_definitions)
            else {'label': 'Manifest identity', 'classification': 'MANIFEST_IDENTITY'},
        ],
    }


def official_record(row):
    return {
        'id': row.get('id'),
        'recordType': 'OFFICIAL_DEVICE',
        'classification': 'OFFICIAL_LISTED',
        'name': row.get('device'),
        'manufacturer': row.get('manufacturer'),
        'productNumber': row.get('productNumber'),
        'category': row.get('deviceType'),
        'protocol': row.get('protocol'),
        'recommendedDriverOrApp': row.get('recommendedDriverOrApp'),
        'kinds': ['DEVICE'],
        'links': {'source': (row.get('source') or {}).get('url')},
        'evidence': [{'label': 'Official Hubitat catalogue', 'classification': 'OFFICIAL_LISTED'}],
    }


def driver_record_name(row):
    name = row.get('device') or row.get('driverOrApp')
    if name:
        return name
    # The wiki row carried no device or driver/app name at all (both were the
    # "-" placeholder). Rather than an empty title, say plainly that the name
    # is a stand-in built from whatever context the row did have.
    if row.get('manufacturer'):
        return f"Inferred: {row['manufacturer']}"
    if row.get('section'):
        return f"Inferred: {row['section']} listing"
    return None


def driver_record(row):
    return {
        'id': row.get('id'),
        'recordType': 'COMMUNITY_DRIVER',
        'classification': 'COMMUNITY_DRIVER_LISTED',
        'name': driver_record_name(row),
        'manufacturer': row.get('manufacturer'),
        'productNumber': row.get('productNumber'),
        'category': row.get('section'),
        'driverOrApp': row.get('driverOrApp'),
        'kinds': ['DRIVER', 'DEVICE'],
        'hpmMatches': row.get('hpmMatches') or [],
        'lifecycleFlags': row.get('lifecycleFlags') or [],
        'links': {'source': (row.get('source') or {}).get('url'), 'related': row.get('links') or []},
        'evidence': [{'label': 'Community Drivers Wiki', 'classification': 'COMMUNITY_DRIVER_LISTED'}],
    }


def app_record(row):
    return {
        'id': row.get('id'),
        'recordType': 'COMMUNITY_APP',
        'classification': 'COMMUNITY_APP_LISTED',
        'name': row.get('name'),
        'category': row.get('section'),
        'kinds': ['APP'],
        'hpmMatches': row.get('hpmMatches') or [],
        'lifecycleFlags': row.get('lifecycleFlags') or [],
        'links': {'source': (row.get('source') or {}).get('url'), 'related': row.get('links') or []},
        'evidence': [{'label': 'Community Apps Wiki', 'classification': 'COMMUNITY_APP_LISTED'}],
    }


def build_document(packages, definitions, health, network, official, drivers, apps):
    definition_map = {row['id']: row for row in definitions.get('definitions') or []}
    health_map = {row['packageId']: row for row in health.get('packages') or []}
    network_map = {row['id']: row for row in network.get('packages') or []}
    records = [package_record(row, definition_map, health_map, network_map) for row in packages.get('packages') or []]
    records.extend(official_record(row) for row in official.get('records') or [])
    records.extend(driver_record(row) for row in drivers.get('records') or [])
    records.extend(app_record(row) for row in apps.get('records') or [])
    records.sort(key=lambda row: (row['recordType'], str(row.get('name') or '').casefold(), row['id']))
    counts = {}
    for row in records:
        counts[row['recordType']] = counts.get(row['recordType'], 0) + 1
    return site_safe({
        'schemaVersion': SCHEMA_VERSION,
        'dataset': 'package-explorer',
        'snapshotGenerated': packages.get('snapshotGenerated'),
        'recordCount': len(records),
        'counts': counts,
        'records': records,
        'method': {
            'automationMapIndependent': True,
            'remoteContentRenderedAsText': True,
            'claimBoundaries': 'Official, community, HPM, source and network evidence remain separately labelled.',
        },
    })


def validate(document):
    if document.get('schemaVersion') != SCHEMA_VERSION or document.get('dataset') != 'package-explorer':
        raise ValueError('unexpected package explorer schema or dataset')
    records = document.get('records')
    if not isinstance(records, list) or document.get('recordCount') != len(records):
        raise ValueError('recordCount does not match records')
    if document.get('method', {}).get('automationMapIndependent') is not True:
        raise ValueError('Automation Map independence must be explicit')
    allowed = {'HPM_PACKAGE', 'OFFICIAL_DEVICE', 'COMMUNITY_DRIVER', 'COMMUNITY_APP'}
    if any(row.get('recordType') not in allowed for row in records):
        raise ValueError('unknown explorer record type')


def serialise(document):
    return json.dumps(document, indent=2, ensure_ascii=False, sort_keys=True) + '\n'


def script_serialise(document):
    return json.dumps(document, ensure_ascii=False, sort_keys=True, separators=(',', ':'))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    document = build_document(
        load(PACKAGES), load(DEFINITIONS), load(HEALTH), load(NETWORK),
        load(OFFICIAL_DEVICES), load(COMMUNITY_DRIVERS), load(COMMUNITY_APPS),
    )
    validate(document)
    rendered = serialise(document)
    script = 'window.PACKAGE_EXPLORER = ' + script_serialise(document) + ';\n'
    if args.check:
        if OUTPUT.read_text('utf-8') != rendered or SCRIPT_OUTPUT.read_text('utf-8') != script:
            raise ValueError('package explorer outputs are stale')
        print('Package explorer outputs pass offline checks.')
        return 0
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(rendered, encoding='utf-8', newline='\n')
    SCRIPT_OUTPUT.write_text(script, encoding='utf-8', newline='\n')
    print(f'Wrote package explorer data: {document["recordCount"]} records')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
