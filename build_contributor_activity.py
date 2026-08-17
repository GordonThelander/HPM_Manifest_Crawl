#!/usr/bin/env python3
"""Build contributor portfolio and crawl-activity projections.

Contributor identity is the exact, trimmed author string declared by HPM package
metadata. The builder deliberately does not merge aliases and reads only community
datasets. It has no Automation Map registry input or output path.
"""

import argparse
import collections
import hashlib
import json
import pathlib


PACKAGES = pathlib.Path('community_packages.json')
DEFINITIONS = pathlib.Path('definitions.json')
CHANGES = pathlib.Path('package_changes.json')
OUTPUT = pathlib.Path('contributor_activity.json')
SCRIPT_OUTPUT = pathlib.Path('site/contributors/data/contributor_activity.js')
SCHEMA_VERSION = '1.0'
REPOSITORY_URL = 'https://github.com/GordonThelander/HPM_Manifest_Crawl'


def clean(value):
    text = str(value or '').strip()
    return text or None


def contributor_id(author):
    digest = hashlib.sha256(author.encode('utf-8')).hexdigest()[:20]
    return f'contributor:{digest}'


def safe_url(value):
    value = clean(value)
    return value if value and value.lower().startswith(('https://', 'http://')) else None


def package_view(package, definitions_by_package):
    definitions = definitions_by_package.get(package.get('id'), [])
    app_count = sum(row.get('kind') == 'APP' for row in definitions)
    driver_count = sum(row.get('kind') == 'DRIVER' for row in definitions)
    return {
        'id': package.get('id'),
        'name': clean(package.get('name')) or 'Unnamed package',
        'category': clean(package.get('category')) or 'Uncategorised',
        'version': clean(package.get('version')),
        'publisherDate': clean(package.get('dateReleased')),
        'appCount': app_count,
        'driverCount': driver_count,
        'manifestUrl': safe_url((package.get('manifest') or {}).get('url')),
        'repositoryUrl': safe_url((package.get('repository') or {}).get('url')),
        'documentationUrl': safe_url((package.get('links') or {}).get('documentation')),
        'communityUrl': safe_url((package.get('links') or {}).get('community')),
    }


def event_authors(event):
    """Return each exact author declaration relevant to a retained event."""
    current = clean((event.get('currentPackage') or {}).get('author'))
    previous = clean((event.get('previousPackage') or {}).get('author'))
    values = []
    if current:
        values.append((current, 'CURRENT_DECLARATION', event.get('currentPackage') or {}))
    if previous and previous != current:
        values.append((previous, 'PREVIOUS_DECLARATION', event.get('previousPackage') or {}))
    if not values and previous:
        values.append((previous, 'PREVIOUS_DECLARATION', event.get('previousPackage') or {}))
    return values


def event_view(event, role, package):
    evidence_url = None
    for evidence in event.get('evidence') or []:
        if evidence.get('label') == 'Observed snapshot':
            evidence_url = safe_url(evidence.get('url'))
            break
    commit = clean(event.get('observedCommit'))
    if not evidence_url and commit:
        evidence_url = f'{REPOSITORY_URL}/commit/{commit}'
    return {
        'id': event.get('id'),
        'observedAt': clean(event.get('observedAt')),
        'observedCommit': commit,
        'declarationRole': role,
        'packageId': event.get('packageId'),
        'packageName': clean(event.get('packageName')) or clean(package.get('name')) or 'Unnamed package',
        'category': clean(package.get('category')) or 'Uncategorised',
        'changeTypes': sorted(set(event.get('changeTypes') or [])),
        'summary': clean(event.get('summary')),
        'evidenceUrl': evidence_url,
    }


def build_document(packages_doc, definitions_doc, changes_doc):
    definitions_by_package = collections.defaultdict(list)
    for definition in definitions_doc.get('definitions') or []:
        definitions_by_package[definition.get('packageId')].append(definition)

    packages_by_author = collections.defaultdict(list)
    undeclared_author_packages = 0
    for package in packages_doc.get('packages') or []:
        author = clean(package.get('author'))
        if not author:
            undeclared_author_packages += 1
            continue
        packages_by_author[author].append(package_view(package, definitions_by_package))

    events_by_author = collections.defaultdict(list)
    for event in changes_doc.get('events') or []:
        for author, role, package in event_authors(event):
            events_by_author[author].append(event_view(event, role, package))

    all_authors = set(packages_by_author) | set(events_by_author)
    contributors = []
    for author in all_authors:
        packages = sorted(
            packages_by_author.get(author, []),
            key=lambda row: (row['name'].casefold(), row.get('id') or ''),
        )
        events = sorted(
            events_by_author.get(author, []),
            key=lambda row: (row.get('observedAt') or '', row.get('id') or ''),
        )
        categories = collections.Counter(row['category'] for row in packages)
        contributors.append({
            'id': contributor_id(author),
            'name': author,
            'currentPackageCount': len(packages),
            'appCount': sum(row['appCount'] for row in packages),
            'driverCount': sum(row['driverCount'] for row in packages),
            'categories': [
                {'name': name, 'packageCount': count}
                for name, count in sorted(categories.items(), key=lambda item: item[0].casefold())
            ],
            'packages': packages,
            'observedActivityCount': len(events),
            'activity': events,
        })

    contributors.sort(key=lambda row: (
        -row['currentPackageCount'], row['name'].casefold(), row['name']
    ))
    rank = 0
    for contributor in contributors:
        if contributor['currentPackageCount']:
            rank += 1
            contributor['currentRank'] = rank
        else:
            contributor['currentRank'] = None

    observed_times = sorted(
        event['observedAt'] for contributor in contributors
        for event in contributor['activity'] if event.get('observedAt')
    )
    current_contributors = sum(bool(row['currentPackageCount']) for row in contributors)
    categories = sorted({
        package['category'] for contributor in contributors for package in contributor['packages']
    }, key=str.casefold)
    return {
        'schemaVersion': SCHEMA_VERSION,
        'dataset': 'contributor-activity',
        'snapshotGenerated': packages_doc.get('snapshotGenerated'),
        'method': {
            'contributorIdentity': 'exact trimmed author string declared in HPM package metadata',
            'aliases': 'not merged without explicit reviewed evidence',
            'ranking': 'unique packages in the current successful community package snapshot',
            'observedActivity': 'retained package-change events linked to successful crawl snapshots',
            'publisherDates': 'publisher-declared package release dates, shown separately from observed activity',
            'notMeasured': 'Git commits, repository ownership and Hubitat Community activity',
            'automationMapIndependent': True,
        },
        'sources': {
            'packages': str(PACKAGES),
            'definitions': str(DEFINITIONS),
            'changes': str(CHANGES),
        },
        'currentPackageCount': len(packages_doc.get('packages') or []),
        'rankedPackageCount': sum(row['currentPackageCount'] for row in contributors),
        'currentContributorCount': current_contributors,
        'observedContributorCount': len(contributors),
        'undeclaredAuthorPackageCount': undeclared_author_packages,
        'categories': categories,
        'history': {
            'firstObservedAt': observed_times[0] if observed_times else None,
            'lastObservedAt': observed_times[-1] if observed_times else None,
            'eventCount': len(changes_doc.get('events') or []),
            'attributedEventCount': sum(row['observedActivityCount'] for row in contributors),
        },
        'contributors': contributors,
    }


def validate(document):
    if document.get('schemaVersion') != SCHEMA_VERSION:
        raise ValueError('unexpected contributor activity schema')
    if document.get('dataset') != 'contributor-activity':
        raise ValueError('unexpected contributor activity dataset')
    contributors = document.get('contributors')
    if not isinstance(contributors, list):
        raise ValueError('contributors must be a list')
    current = [row for row in contributors if row.get('currentPackageCount')]
    if document.get('currentContributorCount') != len(current):
        raise ValueError('currentContributorCount does not match contributors')
    if document.get('rankedPackageCount') != sum(row['currentPackageCount'] for row in current):
        raise ValueError('rankedPackageCount does not match portfolios')
    if document.get('currentPackageCount') != (
            document.get('rankedPackageCount') + document.get('undeclaredAuthorPackageCount')):
        raise ValueError('currentPackageCount does not include every package')
    expected_ranks = list(range(1, len(current) + 1))
    if [row.get('currentRank') for row in current] != expected_ranks:
        raise ValueError('current contributor ranks are not deterministic')
    if document.get('method', {}).get('automationMapIndependent') is not True:
        raise ValueError('Automation Map independence must be explicit')


def serialise(document):
    return json.dumps(document, indent=2, ensure_ascii=False, sort_keys=True) + '\n'


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    if args.check:
        document = json.loads(OUTPUT.read_text('utf-8'))
        validate(document)
        expected = 'window.CONTRIBUTOR_ACTIVITY = ' + serialise(document) + ';\n'
        if SCRIPT_OUTPUT.read_text('utf-8') != expected:
            raise ValueError('browser contributor activity script is stale')
        print('Contributor activity outputs pass offline checks.')
        return 0

    document = build_document(
        json.loads(PACKAGES.read_text('utf-8')),
        json.loads(DEFINITIONS.read_text('utf-8')),
        json.loads(CHANGES.read_text('utf-8')),
    )
    validate(document)
    rendered = serialise(document)
    OUTPUT.write_text(rendered, encoding='utf-8', newline='\n')
    SCRIPT_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    SCRIPT_OUTPUT.write_text(
        'window.CONTRIBUTOR_ACTIVITY = ' + rendered + ';\n',
        encoding='utf-8', newline='\n',
    )
    print(
        f'Wrote {OUTPUT} and {SCRIPT_OUTPUT}: '
        f'{document["currentContributorCount"]} current contributors'
    )
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
