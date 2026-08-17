#!/usr/bin/env python3
"""Build and query a browser-safe app/driver identity resolver index."""

import argparse
import json
import pathlib
import re
import sys


DEFINITIONS = pathlib.Path('definitions.json')
PACKAGES = pathlib.Path('community_packages.json')
OFFICIAL_DOCS = pathlib.Path('hubitat_official_docs_index.json')
REVIEWED_PROJECTS = pathlib.Path('reviewed_community_projects.json')
OUTPUT = pathlib.Path('site/identity-resolver/data/identity_index.json')
SCRIPT_OUTPUT = pathlib.Path('site/identity-resolver/data/identity_index.js')
SCHEMA_VERSION = '1.0'


def clean(value):
    text = str(value or '').strip()
    return text or None


def key(value):
    return (clean(value) or '').casefold()


def fuzzy_key(value):
    return ' '.join(re.findall(r'[a-z0-9]+', key(value)))


def similarity(left, right):
    left, right = fuzzy_key(left), fuzzy_key(right)
    if left == right:
        return 1.0
    if not left or not right:
        return 0.0
    left_pairs = [left[index:index + 2] for index in range(len(left) - 1)]
    right_counts = {}
    for index in range(len(right) - 1):
        pair = right[index:index + 2]
        right_counts[pair] = right_counts.get(pair, 0) + 1
    overlap = 0
    for pair in left_pairs:
        if right_counts.get(pair, 0):
            overlap += 1
            right_counts[pair] -= 1
    return 2 * overlap / (len(left_pairs) + max(0, len(right) - 1) or 1)


def identity_variants(definition):
    values = []
    for basis in ('sourceIdentity', 'manifestIdentity'):
        identity = definition.get(basis) or {}
        name, namespace = clean(identity.get('name')), clean(identity.get('namespace'))
        if name and (key(name), key(namespace)) not in {
                (key(row['name']), key(row['namespace'])) for row in values}:
            values.append({'name': name, 'namespace': namespace, 'basis': basis})
    return values


def build_index(definitions_doc, packages_doc, official_doc, reviewed_doc=None):
    packages = {row['id']: row for row in packages_doc.get('packages') or []}
    records = []
    for definition in definitions_doc.get('definitions') or []:
        package = packages.get(definition['packageId'], {})
        records.append({
            'id': definition['id'], 'kind': definition['kind'],
            'identities': identity_variants(definition),
            'sourceUrl': (definition.get('source') or {}).get('url'),
            'package': {
                'id': definition['packageId'], 'name': package.get('name'),
                'author': package.get('author'),
                'manifestUrl': (package.get('manifest') or {}).get('url'),
                'documentationUrl': (package.get('links') or {}).get('documentation'),
                'communityUrl': (package.get('links') or {}).get('community'),
            },
        })
    records.sort(key=lambda row: (row['kind'], row['id']))
    builtins = []
    for match in official_doc.get('matches') or []:
        aliases = sorted({clean(match.get(field)) for field in
                          ('entryName', 'docTitle', 'matchedBy') if clean(match.get(field))},
                         key=str.casefold)
        builtins.append({
            'id': match.get('entryId'), 'kind': 'APP', 'names': aliases,
            'documentationUrl': match.get('url'),
            'evidence': 'OFFICIAL_DOCUMENTATION',
        })
    builtins.sort(key=lambda row: row['id'])
    manual = []
    for project in (reviewed_doc or {}).get('projects') or []:
        manual.append({
            'id': project['id'], 'kind': project['kind'], 'name': project['name'],
            'namespace': project['namespace'], 'author': project.get('author'),
            'installMethod': project['installMethod'],
            'sourceUrl': project.get('sourceUrl'),
            'documentationUrl': project.get('documentationUrl'),
            'communityUrl': project.get('communityUrl'),
            'evidence': sorted(project.get('evidence') or []),
        })
    manual.sort(key=lambda row: row['id'])
    return {
        'schemaVersion': SCHEMA_VERSION, 'dataset': 'identity-resolver',
        'snapshotGenerated': definitions_doc.get('snapshotGenerated'),
        'privacy': {'browserOnly': True, 'uploadsHubInventory': False},
        'matching': {
            'exact': 'case-insensitive trimmed name and namespace equality',
            'suggestionThreshold': 0.82,
            'suggestionsAreConclusions': False,
        },
        'definitionCount': len(records), 'definitions': records,
        'builtInCount': len(builtins), 'builtIns': builtins,
        'manualProjectCount': len(manual), 'manualProjects': manual,
    }


def resolve(index, name, namespace=None, kind=None, threshold=0.82):
    query_name, query_namespace = key(name), key(namespace)
    kind = key(kind).upper() or None
    exact, name_matches, related, suggestions = [], [], [], []
    for definition in index.get('definitions') or []:
        if kind and definition['kind'] != kind:
            continue
        exact_bases, name_bases = [], []
        best = 0.0
        best_identity = None
        for identity in definition['identities']:
            same_name = key(identity['name']) == query_name
            same_namespace = key(identity['namespace']) == query_namespace
            if same_name:
                name_bases.append(identity['basis'])
            if same_name and same_namespace and query_namespace:
                exact_bases.append(identity['basis'])
            if query_namespace and not same_namespace:
                continue
            score = similarity(name, identity['name'])
            if score > best:
                best, best_identity = score, identity
        if exact_bases:
            exact.append({'matchType': 'EXACT', 'basis': sorted(exact_bases),
                          'definition': definition})
        elif name_bases:
            name_matches.append({'matchType': 'NAME_EXACT', 'basis': sorted(name_bases),
                                 'namespaceConfirmed': False,
                                 'definition': definition})
        elif (len(fuzzy_key(name)) >= 3 and best_identity and
              fuzzy_key(name) in fuzzy_key(best_identity['name'])):
            related.append({'matchType': 'RELATED_NAME', 'basis': best_identity['basis'],
                            'definition': definition})
        elif best_identity and best >= threshold:
            suggestions.append({'matchType': 'SUGGESTED', 'score': round(best, 3),
                                'basis': best_identity['basis'],
                                'definition': definition})
    builtins, builtin_suggestions = [], []
    if not kind or kind == 'APP':
        for builtin in index.get('builtIns') or []:
            if any(key(alias) == query_name for alias in builtin['names']):
                builtins.append({'matchType': 'BUILT_IN_CANDIDATE', 'definition': builtin})
            elif len(fuzzy_key(name)) >= 3 and any(
                    fuzzy_key(name) in fuzzy_key(alias) for alias in builtin['names']):
                builtin_suggestions.append({
                    'matchType': 'BUILT_IN_RELATED', 'definition': builtin})
    manual_exact, manual_name_matches, manual_related = [], [], []
    for project in index.get('manualProjects') or []:
        if kind and project['kind'] != kind:
            continue
        same_name = key(project['name']) == query_name
        same_namespace = key(project['namespace']) == query_namespace
        if same_name and same_namespace and query_namespace:
            manual_exact.append({'matchType': 'MANUAL_EXACT', 'definition': project})
        elif same_name:
            manual_name_matches.append({'matchType': 'MANUAL_NAME_EXACT',
                                        'definition': project})
        elif len(fuzzy_key(name)) >= 3 and fuzzy_key(name) in fuzzy_key(project['name']):
            manual_related.append({'matchType': 'MANUAL_RELATED', 'definition': project})
    exact.sort(key=lambda row: (row['definition']['package']['name'] or '',
                                row['definition']['id']))
    suggestions.sort(key=lambda row: (-row['score'], row['definition']['id']))
    name_matches.sort(key=lambda row: row['definition']['id'])
    related.sort(key=lambda row: row['definition']['id'])
    return {'exact': exact, 'nameMatches': name_matches, 'builtIns': builtins,
            'related': related[:20], 'builtInSuggestions': builtin_suggestions,
            'suggestions': suggestions[:10],
            'manualExact': manual_exact, 'manualNameMatches': manual_name_matches,
            'manualRelated': manual_related,
            'ambiguous': (len(exact) + len(name_matches) + len(builtins) +
                          len(manual_exact) + len(manual_name_matches)) > 1,
            'needsNamespace': not query_namespace and bool(name_matches or manual_name_matches)}


def validate(document):
    if document.get('schemaVersion') != SCHEMA_VERSION or document.get('dataset') != 'identity-resolver':
        raise ValueError('unexpected resolver schema or dataset')
    definitions = document.get('definitions')
    if not isinstance(definitions, list) or document.get('definitionCount') != len(definitions):
        raise ValueError('definitionCount does not match definitions')
    if document.get('builtInCount') != len(document.get('builtIns') or []):
        raise ValueError('builtInCount does not match builtIns')
    if document.get('manualProjectCount') != len(document.get('manualProjects') or []):
        raise ValueError('manualProjectCount does not match manualProjects')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--check', action='store_true')
    parser.add_argument('--out', type=pathlib.Path, default=OUTPUT)
    parser.add_argument('--script-out', type=pathlib.Path, default=SCRIPT_OUTPUT)
    parser.add_argument('--name')
    parser.add_argument('--namespace')
    parser.add_argument('--kind', choices=['APP', 'DRIVER'])
    args = parser.parse_args()
    if args.check:
        try:
            validate(json.loads(args.out.read_text('utf-8')))
            script = args.script_out.read_text('utf-8')
            if not script.startswith('window.IDENTITY_INDEX = ') or not script.endswith(';\n'):
                raise ValueError('browser identity script is missing or malformed')
        except (OSError, ValueError, json.JSONDecodeError) as exc:
            print(f'FAIL: {exc}', file=sys.stderr)
            return 1
        print('Identity resolver output passes offline checks.')
        return 0
    index = build_index(json.loads(DEFINITIONS.read_text('utf-8')),
                        json.loads(PACKAGES.read_text('utf-8')),
                        json.loads(OFFICIAL_DOCS.read_text('utf-8')),
                        json.loads(REVIEWED_PROJECTS.read_text('utf-8')))
    if args.name:
        print(json.dumps(resolve(index, args.name, args.namespace, args.kind),
                         indent=2, ensure_ascii=False))
        return 0
    validate(index)
    args.out.parent.mkdir(parents=True, exist_ok=True)
    serialised = json.dumps(index, indent=2, ensure_ascii=False, sort_keys=True)
    args.out.write_text(serialised + '\n', encoding='utf-8', newline='\n')
    args.script_out.write_text('window.IDENTITY_INDEX = ' + serialised + ';\n',
                               encoding='utf-8', newline='\n')
    print(f'Wrote {args.out} and {args.script_out}: {index["definitionCount"]} definitions and '
          f'{index["builtInCount"]} documented built-ins and '
          f'{index["manualProjectCount"]} reviewed manual projects.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
