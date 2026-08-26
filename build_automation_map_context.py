#!/usr/bin/env python3
"""Build the small, static Community Context index consumed by Automation Map."""

import argparse
import json
import pathlib
import tempfile


DEFINITIONS = pathlib.Path('definitions.json')
PACKAGES = pathlib.Path('community_packages.json')
OFFICIAL_DOCS = pathlib.Path('hubitat_official_docs_index.json')
REVIEWED_PROJECTS = pathlib.Path('reviewed_community_projects.json')
COMMUNITY_APPS = pathlib.Path('community_apps.json')
PACKAGE_HEALTH = pathlib.Path('package_health.json')
NETWORK_EVIDENCE = pathlib.Path('network_evidence.json')
OUTPUT = pathlib.Path('site/integrations/automation-map/community_context_index.json')
SCHEMA = pathlib.Path('docs/schemas/automation-map-community-context.schema.json')
PUBLIC_SCHEMA = pathlib.Path('site/integrations/automation-map/community_context_schema.json')
SCHEMA_VERSION = '1.0'
DATASET = 'automation-map-community-context'
MAX_BYTES = 750 * 1024
MAX_SUMMARY = 300
NETWORK_CLASSES = {'LAN', 'CLOUD', 'BOTH', 'INSUFFICIENT'}
HEALTH_CHECKS = (
    'manifestFetch', 'sourceFetch', 'definitionIdentity',
    'documentationLink', 'communityLink', 'httpsTransport',
)


def clean(value):
    text = str(value or '').strip()
    return text or None


def https(value):
    value = clean(value)
    return value if value and value.lower().startswith('https://') else None


def bounded(value, limit=MAX_SUMMARY):
    value = clean(value)
    return value[:limit] if value else None


def identities(definitions):
    result = []
    seen = set()
    for definition in definitions:
        for basis in ('sourceIdentity', 'manifestIdentity'):
            identity = definition.get(basis) or {}
            name = clean(identity.get('name'))
            namespace = clean(identity.get('namespace'))
            marker = ((name or '').casefold(), (namespace or '').casefold())
            if name and marker not in seen:
                seen.add(marker)
                result.append({'name': name, 'namespace': namespace, 'basis': basis})
    return sorted(result, key=lambda row: (
        row['name'].casefold(), (row['namespace'] or '').casefold(), row['basis']))


def evidence_checks(row):
    checks = row.get('checks') if row else {}
    return {name: clean((checks.get(name) or {}).get('status')) or 'UNKNOWN'
            for name in HEALTH_CHECKS}


def quality_flags(row):
    checks = evidence_checks(row)
    return ['IDENTITY_MISMATCH'] if checks.get('definitionIdentity') == 'MISMATCH' else []


def links(**values):
    result = {name: https(value) for name, value in values.items()}
    return {name: value for name, value in result.items() if value}


def build_index(definitions_doc, packages_doc, official_doc, reviewed_doc,
                community_apps_doc, health_doc, network_doc):
    definitions_by_package = {}
    for definition in definitions_doc.get('definitions') or []:
        if definition.get('kind') == 'APP':
            definitions_by_package.setdefault(definition.get('packageId'), []).append(definition)
    health = {row.get('packageId'): row for row in health_doc.get('packages') or []}
    network = {row.get('id'): row for row in network_doc.get('packages') or []}
    records = []

    for package in packages_doc.get('packages') or []:
        package_id = package.get('id')
        app_definitions = definitions_by_package.get(package_id) or []
        if not app_definitions:
            continue
        package_links = package.get('links') or {}
        source_urls = sorted({https((row.get('source') or {}).get('url'))
                              for row in app_definitions
                              if https((row.get('source') or {}).get('url'))})
        network_row = network.get(package_id) or {}
        classification = clean(network_row.get('classification')) or 'INSUFFICIENT'
        if classification not in NETWORK_CLASSES:
            classification = 'INSUFFICIENT'
        records.append({
            'id': package_id,
            'authority': 'HPM_PACKAGE',
            'kind': 'APP',
            'definitionIdentities': identities(app_definitions),
            'displayName': clean(package.get('name')),
            'packageName': clean(package.get('name')),
            'author': clean(package.get('author')),
            'summary': bounded(package.get('description')),
            'evidenceChecks': evidence_checks(health.get(package_id)),
            'qualityFlags': quality_flags(health.get(package_id)),
            'lifecycleFlags': [],
            'networkEvidence': {
                'classification': classification,
                'reviewed': bool(network_row.get('reviewed')),
            },
            'links': links(
                documentation=package_links.get('documentation'),
                community=package_links.get('community'),
                source=(source_urls[0] if len(source_urls) == 1 else None),
            ),
        })

    for match in official_doc.get('matches') or []:
        names = sorted({clean(match.get(field)) for field in
                        ('entryName', 'docTitle', 'matchedBy') if clean(match.get(field))},
                       key=str.casefold)
        if not names:
            continue
        records.append({
            'id': f"builtin:{match.get('entryId')}",
            'authority': 'HUBITAT_BUILT_IN',
            'kind': 'APP',
            'definitionIdentities': [
                {'name': name, 'namespace': None, 'basis': 'officialDocumentation'}
                for name in names
            ],
            'displayName': clean(match.get('entryName')) or names[0],
            'packageName': None,
            'author': 'Hubitat',
            'summary': None,
            'evidenceChecks': None,
            'qualityFlags': [],
            'lifecycleFlags': [],
            'networkEvidence': None,
            'links': links(documentation=match.get('url')),
        })

    for project in reviewed_doc.get('projects') or []:
        if project.get('kind') != 'APP':
            continue
        records.append({
            'id': project.get('id'),
            'authority': 'REVIEWED_MANUAL_PROJECT',
            'kind': 'APP',
            'definitionIdentities': [{
                'name': clean(project.get('name')),
                'namespace': clean(project.get('namespace')),
                'basis': 'reviewedSourceIdentity',
            }],
            'displayName': clean(project.get('name')),
            'packageName': None,
            'author': clean(project.get('author')),
            'summary': None,
            'evidenceChecks': None,
            'qualityFlags': [],
            'lifecycleFlags': [],
            'networkEvidence': None,
            'links': links(
                documentation=project.get('documentationUrl'),
                community=project.get('communityUrl'),
                source=project.get('sourceUrl'),
            ),
        })

    for app in community_apps_doc.get('records') or []:
        name = clean(app.get('name'))
        if not name:
            continue
        app_links = [https(value) for value in app.get('links') or []]
        app_links = [value for value in app_links if value]
        records.append({
            'id': app.get('id'),
            'authority': 'COMMUNITY_CATALOGUE_LISTING',
            'kind': 'APP',
            'definitionIdentities': [{
                'name': name, 'namespace': None, 'basis': 'communityCatalogueName',
            }],
            'displayName': name,
            'packageName': None,
            'author': None,
            'summary': bounded(app.get('section')),
            'evidenceChecks': None,
            'qualityFlags': [],
            'lifecycleFlags': sorted(set(app.get('lifecycleFlags') or [])),
            'networkEvidence': None,
            'links': links(community=(app_links[0] if app_links else None)),
        })

    records.sort(key=lambda row: (row['authority'], str(row['id'])))
    return {
        'schemaVersion': SCHEMA_VERSION,
        'dataset': DATASET,
        'snapshotGenerated': definitions_doc.get('snapshotGenerated'),
        'recordCount': len(records),
        'privacy': {'browserOnly': True, 'uploadsHubInventory': False},
        'records': records,
    }


def validate(document, encoded=None):
    if document.get('schemaVersion') != SCHEMA_VERSION or document.get('dataset') != DATASET:
        raise ValueError('unexpected schemaVersion or dataset')
    records = document.get('records')
    if not isinstance(records, list) or document.get('recordCount') != len(records):
        raise ValueError('recordCount does not match records')
    if len({row.get('id') for row in records}) != len(records):
        raise ValueError('record IDs must be unique')
    for row in records:
        if row.get('kind') != 'APP' or not row.get('definitionIdentities'):
            raise ValueError(f'invalid app record {row.get("id")}')
        for value in (row.get('links') or {}).values():
            if not https(value):
                raise ValueError(f'unsafe link in {row.get("id")}')
        evidence = row.get('networkEvidence')
        if evidence and evidence.get('classification') not in NETWORK_CLASSES:
            raise ValueError(f'invalid network classification in {row.get("id")}')
    encoded = encoded if encoded is not None else (
        json.dumps(document, ensure_ascii=False, sort_keys=True) + '\n').encode('utf-8')
    if len(encoded) > MAX_BYTES:
        raise ValueError(f'output is {len(encoded)} bytes, above {MAX_BYTES}')


def site_safe(value):
    if isinstance(value, str):
        return value.replace('\u2014', '-')
    if isinstance(value, list):
        return [site_safe(item) for item in value]
    if isinstance(value, dict):
        return {name: site_safe(item) for name, item in value.items()}
    return value


def serialise(document):
    return (json.dumps(site_safe(document), indent=2, ensure_ascii=False, sort_keys=True) +
            '\n').encode('utf-8')


def atomic_write(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(dir=path.parent, delete=False) as handle:
        temporary = pathlib.Path(handle.name)
        handle.write(data)
    temporary.replace(path)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--check', action='store_true')
    parser.add_argument('--out', type=pathlib.Path, default=OUTPUT)
    args = parser.parse_args()
    if args.check:
        document = json.loads(args.out.read_text('utf-8'))
        encoded = serialise(document)
        validate(document, encoded)
        if args.out.read_bytes() != encoded:
            raise ValueError('output is not canonical or is stale')
        if PUBLIC_SCHEMA.read_bytes() != SCHEMA.read_bytes():
            raise ValueError('published Community Context schema is stale')
        print(f'Automation Map Community Context passes checks: '
              f'{document["recordCount"]} records, {len(encoded)} bytes.')
        return 0
    document = build_index(
        json.loads(DEFINITIONS.read_text('utf-8')),
        json.loads(PACKAGES.read_text('utf-8')),
        json.loads(OFFICIAL_DOCS.read_text('utf-8')),
        json.loads(REVIEWED_PROJECTS.read_text('utf-8')),
        json.loads(COMMUNITY_APPS.read_text('utf-8')),
        json.loads(PACKAGE_HEALTH.read_text('utf-8')),
        json.loads(NETWORK_EVIDENCE.read_text('utf-8')),
    )
    encoded = serialise(document)
    validate(document, encoded)
    atomic_write(args.out, encoded)
    atomic_write(PUBLIC_SCHEMA, SCHEMA.read_bytes())
    print(f'Wrote {args.out}: {document["recordCount"]} records, {len(encoded)} bytes.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
