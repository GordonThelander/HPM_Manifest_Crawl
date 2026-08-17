#!/usr/bin/env python3
"""Build a read-only network-evidence guide without changing reviewed registries."""

import argparse
import ipaddress
import json
import pathlib
import re
import urllib.parse


HPM_INDEX = pathlib.Path('hpm_package_index.json')
PACKAGES = pathlib.Path('community_packages.json')
REVIEWED_REGISTRY = pathlib.Path('hubitat_automation_map_app_integration_registry.json')
OUTPUT = pathlib.Path('network_evidence.json')
SCRIPT_OUTPUT = pathlib.Path('site/network-guide/data/network_evidence.js')
SCHEMA_VERSION = '1.0'
LAN_PRIMITIVES = {
    'HUB_ACTION', 'SEND_HUB_COMMAND', 'PARSE_LAN_MESSAGE',
    'LAN_PROTOCOL', 'UDP_PROTOCOL',
}
NON_RUNTIME_HOSTS = {
    'raw.githubusercontent.com', 'github.com', 'www.github.com',
    'community.hubitat.com', 'docs2.hubitat.com', 'hubitat.com',
    'www.apache.org', 'opensource.org', 'spdx.org',
}
LOCAL_DEPENDENCY_CLASSES = {'LOCAL_DEVICE', 'LOCAL_BRIDGE', 'LOCAL_SERVICE'}
EXTERNAL_DEPENDENCY_CLASSES = {'EXTERNAL_SERVICE', 'EXTERNAL_PLATFORM'}


def clean(value):
    text = str(value or '').strip()
    return text or None


def key(value):
    return (clean(value) or '').casefold()


def external_host(value):
    host = clean(value)
    if not host:
        return None
    host = host.casefold().rstrip('.')
    if (not re.fullmatch(r'[a-z0-9.-]+', host) or '.' not in host or
            any(label and set(label) == {'x'} for label in host.split('.'))):
        return None
    if host in NON_RUNTIME_HOSTS or host == 'localhost' or host.endswith(('.local', '.lan')):
        return None
    try:
        address = ipaddress.ip_address(host.strip('[]'))
        if not address.is_global:
            return None
    except ValueError:
        pass
    return host


def identity_values(package):
    values = {'appName': [], 'parentAppName': [], 'driverName': [], 'namespace': []}
    for component in package.get('apps') or []:
        name = clean(component.get('definitionName') or component.get('manifestName'))
        namespace = clean(component.get('definitionNamespace') or component.get('manifestNamespace'))
        if name:
            values['appName'].append(name)
            values['parentAppName'].append(name)
        if namespace:
            values['namespace'].append(namespace)
    for component in package.get('drivers') or []:
        name = clean(component.get('definitionName') or component.get('manifestName'))
        namespace = clean(component.get('definitionNamespace') or component.get('manifestNamespace'))
        if name:
            values['driverName'].append(name)
        if namespace:
            values['namespace'].append(namespace)
    return values


def rule_matches(rule, values):
    field = rule.get('field')
    if field not in values:
        return False
    expected = key(rule.get('value'))
    operator = rule.get('operator')
    for actual in values[field]:
        actual_key = key(actual)
        if operator == 'equals' and actual_key == expected:
            return True
        if operator == 'contains' and expected and expected in actual_key:
            return True
    return False


def matched_reviews(package, registry):
    values = identity_values(package)
    matches = []
    for entry in registry.get('entries') or []:
        rules = entry.get('matchRules') or []
        outcomes = [rule_matches(rule, values) for rule in rules]
        matched = all(outcomes) if entry.get('matchMode') == 'ALL' else any(outcomes)
        if not rules or not matched:
            continue
        dependencies = []
        for dependency in entry.get('dependencies') or []:
            dependencies.append({
                field: dependency.get(field)
                for field in ('name', 'class', 'transport', 'runtimeCriticality')
                if dependency.get(field) is not None
            })
        documentation = []
        for evidence in entry.get('documentationEvidence') or []:
            if clean(evidence.get('url')):
                documentation.append({
                    'title': clean(evidence.get('title')) or entry.get('name'),
                    'url': evidence['url'],
                    'sourceType': evidence.get('sourceType'),
                })
        matches.append({
            'id': entry.get('id'), 'name': entry.get('name'),
            'status': entry.get('status'), 'dependencies': dependencies,
            'documentation': documentation,
        })
    return matches


def observed_evidence(package):
    hosts = set()
    primitives = set()
    files = 0
    url_literals = 0
    for kind in ('apps', 'drivers'):
        for component in package.get(kind) or []:
            if not component.get('sourceFetched'):
                continue
            files += 1
            definition_line = component.get('definitionLine') or 0
            for observation in component.get('observations') or []:
                observation_type = observation.get('type')
                if observation_type in LAN_PRIMITIVES:
                    primitives.add(observation_type)
                if observation_type == 'NETWORK_URL_LITERAL':
                    url_literals += 1
                    if (observation.get('line') or 0) < definition_line:
                        continue
                    value = observation.get('value') or {}
                    host = external_host(value.get('host') if isinstance(value, dict) else None)
                    if host:
                        hosts.add(host)
    return {
        'sourceFilesAnalysed': files,
        'urlLiteralCount': url_literals,
        'externalHosts': sorted(hosts),
        'lanPrimitives': sorted(primitives),
    }


def build_document(packages_doc, index_doc, registry_doc):
    source_by_id = {}
    source_by_manifest = {}
    for package in index_doc.get('packages') or []:
        if clean(package.get('packageId')):
            source_by_id[clean(package['packageId'])] = package
        if clean(package.get('manifestUrl')):
            source_by_manifest[clean(package['manifestUrl'])] = package
    records = []
    for package in packages_doc.get('packages') or []:
        source = (source_by_id.get(clean(package.get('hpmPackageId'))) or
                  source_by_manifest.get(clean((package.get('manifest') or {}).get('url'))) or {})
        declared_tags = sorted(set(package.get('tags') or []), key=str.casefold)
        observed = observed_evidence(source)
        reviews = matched_reviews(source, registry_doc) if source else []
        reviewed_local = any(
            dependency.get('class') in LOCAL_DEPENDENCY_CLASSES
            for review in reviews for dependency in review['dependencies']
        )
        reviewed_cloud = any(
            dependency.get('class') in EXTERNAL_DEPENDENCY_CLASSES
            for review in reviews for dependency in review['dependencies']
        )
        lan_evidence = ('LAN' in declared_tags or bool(observed['lanPrimitives']) or
                        reviewed_local)
        cloud_evidence = ('Cloud' in declared_tags or bool(observed['externalHosts']) or
                          reviewed_cloud)
        classification = ('BOTH' if lan_evidence and cloud_evidence else
                          'LAN' if lan_evidence else 'CLOUD' if cloud_evidence else
                          'INSUFFICIENT')
        records.append({
            'id': package.get('id'), 'name': package.get('name'),
            'author': package.get('author'), 'description': package.get('description'),
            'category': package.get('category'), 'tags': declared_tags,
            'manifestUrl': (package.get('manifest') or {}).get('url'),
            'documentationUrl': (package.get('links') or {}).get('documentation'),
            'communityUrl': (package.get('links') or {}).get('community'),
            'declared': {'lanTag': 'LAN' in declared_tags, 'cloudTag': 'Cloud' in declared_tags},
            'observed': observed,
            'reviewed': reviews,
            'classification': classification,
        })
    records.sort(key=lambda row: (key(row.get('name')), key(row.get('author')), row.get('id') or ''))
    counts = {value: sum(row['classification'] == value for row in records)
              for value in ('LAN', 'CLOUD', 'BOTH', 'INSUFFICIENT')}
    return {
        'schemaVersion': SCHEMA_VERSION,
        'dataset': 'network-evidence-guide',
        'snapshotGenerated': packages_doc.get('snapshotGenerated'),
        'method': {
            'declared': 'HPM publisher-supplied LAN and Cloud tags',
            'observed': 'literal external hosts after a source definition and Hubitat LAN primitives found by bounded static analysis',
            'documented': 'official documentation links attached to reviewed Automation Map entries',
            'reviewed': 'Automation Map dependency conclusions matched using its reviewed rules',
            'absenceMeans': 'insufficient evidence, not offline or local-only',
        },
        'packageCount': len(records), 'counts': counts, 'packages': records,
    }


def validate(document):
    if document.get('schemaVersion') != SCHEMA_VERSION or document.get('dataset') != 'network-evidence-guide':
        raise ValueError('unexpected network evidence schema or dataset')
    packages = document.get('packages')
    if not isinstance(packages, list) or document.get('packageCount') != len(packages):
        raise ValueError('packageCount does not match packages')
    if any(row.get('classification') not in {'LAN', 'CLOUD', 'BOTH', 'INSUFFICIENT'}
           for row in packages):
        raise ValueError('invalid evidence classification')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    if args.check:
        document = json.loads(OUTPUT.read_text('utf-8'))
        validate(document)
        expected = 'window.NETWORK_EVIDENCE = ' + json.dumps(
            document, indent=2, ensure_ascii=False, sort_keys=True) + ';\n'
        if SCRIPT_OUTPUT.read_text('utf-8') != expected:
            raise ValueError('browser network evidence script is stale')
        print('Network evidence guide outputs pass offline checks.')
        return 0
    document = build_document(
        json.loads(PACKAGES.read_text('utf-8')),
        json.loads(HPM_INDEX.read_text('utf-8')),
        json.loads(REVIEWED_REGISTRY.read_text('utf-8')),
    )
    validate(document)
    serialised = json.dumps(document, indent=2, ensure_ascii=False, sort_keys=True)
    OUTPUT.write_text(serialised + '\n', encoding='utf-8', newline='\n')
    SCRIPT_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    SCRIPT_OUTPUT.write_text('window.NETWORK_EVIDENCE = ' + serialised + ';\n', encoding='utf-8', newline='\n')
    print(f'Wrote {OUTPUT} and {SCRIPT_OUTPUT}: {document["packageCount"]} packages')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
