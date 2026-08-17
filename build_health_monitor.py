#!/usr/bin/env python3
"""Build a historical, evidence-first view of HPM package health.

This consumes public community projections only. It cannot read or write either
Automation Map registry. Network failures remain observations, never conclusions
about maintenance or abandonment.
"""

import argparse
import collections
import json
import pathlib
import sys


HEALTH = pathlib.Path('package_health.json')
PACKAGES = pathlib.Path('community_packages.json')
OUTPUT = pathlib.Path('health_monitor.json')
SUMMARY = pathlib.Path('health_summary.md')
SCHEMA_VERSION = '1.0'
FAILURE_STATES = {'FAIL', 'MISMATCH'}


def load(path):
    return json.loads(path.read_text('utf-8'))


def classify_reason(reason):
    text = (reason or '').casefold()
    if 'non-https' in text:
        return 'HTTP_ONLY'
    if any(marker in text for marker in ('timed out', 'timeout', 'temporary', '429', '503')):
        return 'TRANSIENT_FAILURE'
    return 'FETCH_FAILURE'


def check_state(check):
    status = check.get('status')
    if status in FAILURE_STATES:
        return 'FAILING'
    if status in {'PASS', 'MATCH'}:
        return 'PASSING'
    if status in {'PARTIAL', 'WARN'}:
        return 'WARNING'
    return 'INFORMATIONAL'


def transition(previous, current):
    if previous is None:
        return 'BASELINE'
    if current == 'FAILING' and previous != 'FAILING':
        return 'NEW_FAILURE'
    if current == 'FAILING' and previous == 'FAILING':
        return 'PERSISTENT_FAILURE'
    if current != 'FAILING' and previous == 'FAILING':
        return 'RESTORED'
    return 'UNCHANGED'


def evidence_for(package, health):
    result = []
    for name in sorted(health.get('checks') or {}):
        check = health['checks'][name]
        state = check_state(check)
        result.append({
            'check': name,
            'state': state,
            'status': check.get('status'),
            'url': check.get('url'),
            'details': {key: value for key, value in sorted(check.items())
                        if key not in {'status', 'url'}},
            'remediation': remediation(name, state, check),
        })
    for error in health.get('crawlErrors') or []:
        result.append({
            'check': f"crawl:{error.get('level') or 'unknown'}",
            'state': 'FAILING',
            'status': classify_reason(error.get('reason')),
            'url': error.get('url'),
            'details': {'reason': error.get('reason')},
            'remediation': 'Open the evidence URL and correct the fetch, redirect, or parse failure.',
        })
    return result


def remediation(name, state, check):
    if state != 'FAILING':
        return None
    if name == 'manifestFetch':
        return 'Open the manifest URL and correct its availability or JSON structure.'
    if name == 'sourceFetch':
        return 'Review component source URLs; the fetched count shows the affected scope.'
    if name == 'definitionIdentity':
        return 'Compare manifest name/namespace values with the literal Groovy definition.'
    return 'Review the linked evidence and the individual check status.'


def build(packages_doc, health_doc, previous=None):
    identities = {row['id']: row for row in packages_doc.get('packages') or []}
    previous_rows = {row['packageId']: row for row in (previous or {}).get('packages') or []}
    rows = []
    transitions = collections.Counter()
    states = collections.Counter()
    for health in health_doc.get('packages') or []:
        package_id = health['packageId']
        package = identities.get(package_id, {})
        evidence = evidence_for(package, health)
        current = 'FAILING' if any(item['state'] == 'FAILING' for item in evidence) else (
            'WARNING' if any(item['state'] == 'WARNING' for item in evidence) else 'PASSING'
        )
        old = previous_rows.get(package_id, {}).get('state')
        change = transition(old, current)
        transitions[change] += 1
        states[current] += 1
        rows.append({
            'packageId': package_id,
            'name': package.get('name'),
            'author': package.get('author'),
            'state': current,
            'transition': change,
            'evidence': evidence,
            'links': package.get('links') or {},
            'manifestUrl': (package.get('manifest') or {}).get('url'),
            'repositoryUrl': (package.get('repository') or {}).get('url'),
        })
    rows.sort(key=lambda row: row['packageId'])
    return {
        'schemaVersion': SCHEMA_VERSION,
        'dataset': 'health-monitor',
        'snapshotGenerated': health_doc.get('snapshotGenerated'),
        'previousSnapshot': (previous or {}).get('snapshotGenerated'),
        'method': {
            'networkFailuresAreObservations': True,
            'opaqueScore': False,
            'sourceFiles': [PACKAGES.name, HEALTH.name],
        },
        'summary': {
            'packageCount': len(rows),
            'states': {key: states[key] for key in sorted(states)},
            'transitions': {key: transitions[key] for key in sorted(transitions)},
        },
        'packages': rows,
    }


def markdown(document):
    summary = document['summary']
    lines = [
        '# HPM package health summary', '',
        f"Snapshot: `{document.get('snapshotGenerated') or 'unknown'}`", '',
        'These are factual crawl observations, not package quality, safety, or abandonment scores.', '',
        '## Current observations', '',
    ]
    for key, value in summary['states'].items():
        lines.append(f'- {key.replace("_", " ").title()}: **{value}**')
    lines.extend(['', '## Changes since the previous successful snapshot', ''])
    if document.get('previousSnapshot'):
        for key, value in summary['transitions'].items():
            lines.append(f'- {key.replace("_", " ").title()}: **{value}**')
    else:
        lines.append('- No prior health-monitor snapshot was available; all results form the baseline.')
    changed = [row for row in document['packages']
               if row['transition'] in {'NEW_FAILURE', 'RESTORED'}]
    if changed:
        lines.extend(['', '## Introduced and resolved failures', '',
                      '| Change | Package | Author | Evidence |',
                      '| --- | --- | --- | --- |'])
        for row in changed:
            failing = [item for item in row['evidence'] if item['state'] == 'FAILING']
            evidence = ', '.join(item['check'] for item in failing) or 'No current failure'
            lines.append(f"| {row['transition']} | {row['name'] or row['packageId']} | "
                         f"{row['author'] or ''} | {evidence} |")
    lines.extend(['', 'A request failure can be transient. Persistent status means the same package was '
                  'observed failing in consecutive successful snapshots; it does not prove that the '
                  'project is unmaintained.', ''])
    return '\n'.join(lines)


def validate(document):
    if document.get('schemaVersion') != SCHEMA_VERSION or document.get('dataset') != 'health-monitor':
        raise ValueError('unexpected health monitor schema or dataset')
    rows = document.get('packages')
    if not isinstance(rows, list):
        raise ValueError('packages must be an array')
    ids = [row.get('packageId') for row in rows]
    if any(not value for value in ids) or len(ids) != len(set(ids)):
        raise ValueError('package IDs must be present and unique')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--check', action='store_true')
    parser.add_argument('--previous', type=pathlib.Path,
                        help='previous successful health_monitor.json; defaults to current output')
    parser.add_argument('--out', type=pathlib.Path, default=OUTPUT)
    parser.add_argument('--summary', type=pathlib.Path, default=SUMMARY)
    args = parser.parse_args()
    if args.check:
        try:
            validate(load(args.out))
        except (OSError, ValueError, json.JSONDecodeError) as exc:
            print(f'FAIL: {exc}', file=sys.stderr)
            return 1
        print('Health monitor output passes offline checks.')
        return 0
    previous_path = args.previous or (args.out if args.out.exists() else None)
    previous = load(previous_path) if previous_path and previous_path.exists() else None
    health = load(HEALTH)
    # A local retry or repeated CI run for the same successful crawl must be a
    # byte-stable no-op, not reinterpret the output as a second observation.
    if (previous and previous.get('snapshotGenerated') == health.get('snapshotGenerated')
            and args.previous is None):
        document = previous
    else:
        document = build(load(PACKAGES), health, previous)
    validate(document)
    args.out.write_text(json.dumps(document, indent=2, ensure_ascii=False,
                                   sort_keys=True) + '\n', encoding='utf-8', newline='\n')
    args.summary.write_text(markdown(document), encoding='utf-8', newline='\n')
    print(f'Wrote {args.out} and {args.summary}.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
