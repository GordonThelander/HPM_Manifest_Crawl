#!/usr/bin/env python3
"""Build the Community Utilities provenance and operational-status dataset."""

import argparse
import datetime
import hashlib
import json
import pathlib


SCHEMA_VERSION = '1.0'
OUTPUT = pathlib.Path('site_status.json')
SITE_OUTPUT = pathlib.Path('site/about/data/site_status.json')
SCRIPT_OUTPUT = pathlib.Path('site/about/data/site_status.js')
REPOSITORY_URL = 'https://github.com/GordonThelander/HPM_Manifest_Crawl'
INPUTS = {
    'hpm': pathlib.Path('hpm_package_index.json'),
    'definitions': pathlib.Path('definitions.json'),
    'taxonomy': pathlib.Path('hpm_taxonomy.json'),
    'officialDevices': pathlib.Path('official_devices.json'),
    'officialDocs': pathlib.Path('hubitat_official_docs_index.json'),
    'communityDrivers': pathlib.Path('community_drivers.json'),
    'communityApps': pathlib.Path('community_apps.json'),
    'manual': pathlib.Path('reviewed_community_projects.json'),
    'releases': pathlib.Path('hubitat_release_features.json'),
    'canonicalRegistry': pathlib.Path(
        'hubitat_automation_map_app_integration_registry.json'
    ),
    'slimRegistry': pathlib.Path(
        'hubitat_automation_map_app_integration_registry_slim.json'
    ),
}
ALLOWED_STATES = {'HEALTHY', 'DEGRADED', 'STALE', 'UNAVAILABLE', 'MANUALLY_REVIEWED'}


def utc_now():
    return datetime.datetime.now(datetime.timezone.utc).replace(
        microsecond=0
    ).isoformat().replace('+00:00', 'Z')


def load(path):
    return json.loads(path.read_text('utf-8'))


def freshness_state(base_state, last_success, observed_at, max_age_days=45):
    if not last_success or base_state not in {'HEALTHY', 'DEGRADED'}:
        return base_state
    success = datetime.datetime.fromisoformat(last_success.replace('Z', '+00:00'))
    observed = datetime.datetime.fromisoformat(observed_at.replace('Z', '+00:00'))
    return 'STALE' if observed - success > datetime.timedelta(days=max_age_days) else base_state


def source_record(identifier, name, authority, role, url, acquisition, state,
                  observed_at, last_attempt, last_success, snapshot, records,
                  evidence, outputs, source_updated_at=None):
    return {
        'id': identifier,
        'name': name,
        'authority': authority,
        'role': role,
        'url': url,
        'acquisition': acquisition,
        'state': state,
        'observedAt': observed_at,
        'lastAttempt': last_attempt,
        'lastSuccess': last_success,
        'retainedSnapshot': snapshot,
        'recordsProduced': records,
        'evidence': evidence,
        'outputs': outputs,
        'sourceUpdatedAt': source_updated_at,
    }


def build_document(documents, observed_at=None):
    observed_at = observed_at or utc_now()
    hpm = documents['hpm']
    definitions = documents['definitions']
    taxonomy = documents['taxonomy']
    official_devices = documents['officialDevices']
    official_docs = documents['officialDocs']
    community_drivers = documents['communityDrivers']
    community_apps = documents['communityApps']
    manual = documents['manual']
    manual_hash = hashlib.sha256(INPUTS['manual'].read_bytes()).hexdigest()
    releases = documents['releases']
    canonical = documents['canonicalRegistry']
    slim = documents['slimRegistry']

    crawl_at = hpm.get('snapshotGenerated')
    repository_count = int(hpm.get('repositoryCount') or 0)
    repositories_fetched = int(hpm.get('repositoriesFetched') or 0)
    crawl_errors = len(hpm.get('errors') or [])
    source_stats = hpm.get('sourceStats') or {}
    source_failed = int(source_stats.get('sourceUrlsFailed') or 0)
    source_attempted = int(source_stats.get('distinctSourceUrls') or 0)
    taxonomy_source = taxonomy.get('source') or {}
    release_counts = releases.get('counts') or {}
    unavailable_details = int(release_counts.get('unavailableDetails') or 0)

    sources = [
        source_record(
            'hpm-master-list', 'HPM master repository list', 'HPM community registry',
            'Declares the public developer repository files crawled by this project.',
            hpm.get('source'), 'Bounded JSON acquisition',
            freshness_state('HEALTHY', crawl_at, observed_at), observed_at,
            crawl_at, crawl_at, crawl_at, repository_count,
            f'Retained successful crawl declares {repository_count} repositories.',
            ['hpm_package_index.json'],
        ),
        source_record(
            'developer-repositories', 'Developer repositories and package manifests',
            'Community publishers',
            'Supplies package identity, metadata, links, apps, drivers and manifest versions.',
            hpm.get('source'), 'Declared repository and manifest JSON acquisition',
            freshness_state(
                'DEGRADED' if repositories_fetched < repository_count or crawl_errors else 'HEALTHY',
                crawl_at, observed_at,
            ),
            observed_at, crawl_at, crawl_at, crawl_at,
            int(hpm.get('packageCount') or 0),
            f'{repositories_fetched} of {repository_count} repositories were fetched; '
            f'{crawl_errors} bounded acquisition or validation errors were retained.',
            ['hpm_package_index.json', 'community_packages.json', 'definitions.json'],
        ),
        source_record(
            'groovy-sources', 'Public Groovy app and driver sources',
            'Community publishers',
            'Provides source identity and static network observations for declared components.',
            hpm.get('source'), 'Bounded text acquisition from manifest-declared source URLs',
            freshness_state('DEGRADED' if source_failed else 'HEALTHY', crawl_at, observed_at),
            observed_at, crawl_at, crawl_at,
            crawl_at, int(definitions.get('definitionCount') or 0),
            f'{source_attempted - source_failed} of {source_attempted} distinct source URLs '
            f'were fetched; {source_failed} failures remain explicit.',
            ['definitions.json', 'network_evidence.json'],
        ),
        source_record(
            'hpm-settings', 'Authoritative HPM settings', 'HPM community registry',
            'Defines the current valid package categories and tags.',
            taxonomy_source.get('url'), 'Bounded JSON acquisition with retained fallback',
            freshness_state(
                'HEALTHY' if taxonomy_source.get('mode') == 'live' else 'DEGRADED',
                taxonomy_source.get('retrievedAt'), observed_at,
            ),
            observed_at, taxonomy_source.get('retrievedAt'),
            taxonomy_source.get('retrievedAt'), taxonomy_source.get('sha256'),
            len((taxonomy.get('taxonomy') or {}).get('tags') or []),
            f'Current mode is {taxonomy_source.get("mode")}; taxonomy snapshot validates.',
            ['hpm_taxonomy.json'],
        ),
        source_record(
            'official-devices', 'Compatible Devices catalogue', 'Hubitat documentation',
            'Lists officially documented compatible devices, protocols and recommended drivers.',
            (official_devices.get('source') or {}).get('url'),
            'Bounded documentation-table harvest', 'HEALTHY', observed_at, observed_at, observed_at,
            official_devices.get('snapshotId'), int(official_devices.get('recordCount') or 0),
            'A failed harvest never commits, so reaching this status page is itself proof the '
            'harvest just attempted and succeeded; last attempt and last success both reflect '
            'this build\'s run time, since catalogue schema 1.0 does not embed a per-run '
            'timestamp in the file itself.',
            ['official_devices.json'],
            (official_devices.get('source') or {}).get('updatedAt'),
        ),
        source_record(
            'official-app-docs', 'Official app documentation index', 'Hubitat documentation',
            'Matches documented built-in apps to the protected Automation Map registry.',
            official_docs.get('source'), 'Bounded documentation index acquisition',
            freshness_state(
                'DEGRADED' if official_docs.get('errors') else 'HEALTHY',
                official_docs.get('snapshotGenerated'), observed_at,
            ), observed_at,
            official_docs.get('snapshotGenerated'), official_docs.get('snapshotGenerated'),
            official_docs.get('snapshotGenerated'),
            int(official_docs.get('discoveredDocumentationPages') or 0),
            f'{official_docs.get("matchedNativeEntries")} native entries matched across '
            f'{official_docs.get("discoveredDocumentationPages")} documentation pages.',
            ['hubitat_official_docs_index.json'],
        ),
        source_record(
            'community-driver-wiki', 'Custom Device Drivers Wiki', 'Hubitat Community wiki',
            'Provides community-curated driver listings and lifecycle wording.',
            (community_drivers.get('source') or {}).get('url'), 'Discourse JSON first-post harvest',
            'HEALTHY', observed_at, observed_at, observed_at, community_drivers.get('snapshotId'),
            int(community_drivers.get('recordCount') or 0),
            'A failed harvest never commits, so reaching this status page is itself proof the '
            'harvest just attempted and succeeded; last attempt and last success both reflect '
            'this build\'s run time, since catalogue schema 1.0 does not embed a per-run '
            'timestamp in the file itself.',
            ['community_drivers.json'],
            (community_drivers.get('source') or {}).get('updatedAt'),
        ),
        source_record(
            'community-app-wiki', 'Custom Apps Wiki', 'Hubitat Community wiki',
            'Provides community-curated app listings and lifecycle wording.',
            (community_apps.get('source') or {}).get('url'), 'Discourse JSON first-post harvest',
            'HEALTHY', observed_at, observed_at, observed_at, community_apps.get('snapshotId'),
            int(community_apps.get('recordCount') or 0),
            'A failed harvest never commits, so reaching this status page is itself proof the '
            'harvest just attempted and succeeded; last attempt and last success both reflect '
            'this build\'s run time, since catalogue schema 1.0 does not embed a per-run '
            'timestamp in the file itself.',
            ['community_apps.json'],
            (community_apps.get('source') or {}).get('updatedAt'),
        ),
        source_record(
            'reviewed-manual-projects', 'Reviewed manual community projects',
            'Maintainer-reviewed public evidence',
            'Adds source-confirmed manual-install projects absent from HPM and wiki snapshots.',
            REPOSITORY_URL + '/blob/main/reviewed_community_projects.json', 'Explicit maintainer review',
            'MANUALLY_REVIEWED', observed_at, None, None, manual_hash,
            len(manual.get('projects') or []),
            'Each retained project requires reviewed source identity and public evidence links; '
            'the hash above identifies exactly which reviewed file this snapshot validated. There '
            'is no fetch step to time, since a maintainer edits this file directly.',
            ['reviewed_community_projects.json'],
        ),
        source_record(
            'release-notes', 'Release Notes category and embedded details',
            'Hubitat Community staff-authored release evidence',
            'Supplies platform build history, classified changes and linked feature guidance.',
            (releases.get('source') or {}).get('categoryUrl'),
            'Bounded Discourse JSON harvest of staff posts and embedded first-party detail links',
            freshness_state(
                'DEGRADED' if unavailable_details else 'HEALTHY',
                releases.get('lastSuccessfulHarvest'), observed_at,
            ), observed_at,
            releases.get('lastSuccessfulHarvest'), releases.get('lastSuccessfulHarvest'),
            releases.get('lastSuccessfulHarvest'), int(release_counts.get('features') or 0),
            f'{release_counts.get("releaseBuilds")} release builds and '
            f'{release_counts.get("features")} changes retained; '
            f'{unavailable_details} linked detail topics are unavailable.',
            ['hubitat_release_features.json'],
        ),
    ]
    states = {state: sum(row['state'] == state for row in sources)
              for state in sorted(ALLOWED_STATES)}
    canonical_entries = canonical.get('entries') or []
    slim_entries = slim.get('entries') or []
    return {
        'schemaVersion': SCHEMA_VERSION,
        'dataset': 'community-utilities-site-status',
        'generatedAt': observed_at,
        'repositoryUrl': REPOSITORY_URL,
        'lastSuccessfulHpmCrawl': crawl_at,
        'counts': {'sources': len(sources), 'states': states},
        'sources': sources,
        'flow': [
            {'id': 'acquire', 'label': 'Acquire', 'description': 'Read bounded public JSON, documentation, wiki and source evidence.'},
            {'id': 'validate', 'label': 'Validate', 'description': 'Check shape, provenance, limits and last-good promotion rules.'},
            {'id': 'project', 'label': 'Project', 'description': 'Build independent catalogues, metrics, histories and search indexes.'},
            {'id': 'publish', 'label': 'Publish', 'description': 'Deploy static browser-only Community Utilities through GitHub Pages.'},
        ],
        'automationMapContract': {
            'label': 'Protected Automation Map contract',
            'canonicalPath': str(INPUTS['canonicalRegistry']).replace('\\', '/'),
            'slimPath': str(INPUTS['slimRegistry']).replace('\\', '/'),
            'schemaVersion': canonical.get('schemaVersion'),
            'canonicalEntries': len(canonical_entries),
            'slimEntries': len(slim_entries),
            'relationship': 'Read-only protected input; general community projections never broaden or rewrite it.',
            'requiredForSite': False,
            'siteRequiredForAutomationMap': False,
        },
        'method': {
            'fileModificationTimesUsedAsCrawlTime': False,
            'unknownAcquisitionTimesRemainNull': True,
            'failedBuildReplacesOutput': False,
            'remoteContentRendered': False,
            'automationMapRegistriesWritten': False,
        },
    }


def validate(document):
    if document.get('schemaVersion') != SCHEMA_VERSION:
        raise ValueError('unexpected site-status schema version')
    if document.get('dataset') != 'community-utilities-site-status':
        raise ValueError('unexpected site-status dataset')
    sources = document.get('sources')
    if not isinstance(sources, list) or len(sources) < 10:
        raise ValueError('site status must retain the complete source inventory')
    if len({row.get('id') for row in sources}) != len(sources):
        raise ValueError('source IDs must be unique')
    for row in sources:
        if row.get('state') not in ALLOWED_STATES:
            raise ValueError(f'unknown source state: {row.get("state")}')
        for field in ('name', 'authority', 'role', 'url', 'acquisition', 'observedAt', 'evidence'):
            if not isinstance(row.get(field), str) or not row[field].strip():
                raise ValueError(f'{row.get("id")} has no {field}')
    if not document.get('lastSuccessfulHpmCrawl'):
        raise ValueError('promoted HPM crawl time is required')
    method = document.get('method') or {}
    if method.get('fileModificationTimesUsedAsCrawlTime') is not False:
        raise ValueError('file modification time cannot become crawl time')
    if method.get('automationMapRegistriesWritten') is not False:
        raise ValueError('Automation Map write isolation must be explicit')
    return document


def serialise(document):
    return json.dumps(document, indent=2, ensure_ascii=False, sort_keys=True) + '\n'


def script_serialise(document):
    return 'window.COMMUNITY_UTILITIES_STATUS = ' + json.dumps(
        document, ensure_ascii=False, sort_keys=True, separators=(',', ':')
    ) + ';\n'


def atomic_write(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + '.tmp')
    temporary.write_text(text, encoding='utf-8', newline='\n')
    temporary.replace(path)


def write_outputs(document):
    rendered = serialise(document)
    atomic_write(OUTPUT, rendered)
    atomic_write(SITE_OUTPUT, rendered)
    atomic_write(SCRIPT_OUTPUT, script_serialise(document))


def load_inputs():
    missing = [str(path) for path in INPUTS.values() if not path.is_file()]
    if missing:
        raise ValueError('site-status inputs are missing: ' + ', '.join(missing))
    return {name: load(path) for name, path in INPUTS.items()}


def check_outputs():
    document = load(OUTPUT)
    validate(document)
    rendered = serialise(document)
    if SITE_OUTPUT.read_text('utf-8') != rendered:
        raise ValueError('site-status JSON is stale')
    if SCRIPT_OUTPUT.read_text('utf-8') != script_serialise(document):
        raise ValueError('site-status script is stale')
    print(
        f'Site status PASS: {document["counts"]["sources"]} sources, '
        f'last HPM crawl {document["lastSuccessfulHpmCrawl"]}.'
    )


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    parser.add_argument('--observed-at')
    args = parser.parse_args()
    if args.check:
        check_outputs()
        return 0
    document = build_document(load_inputs(), args.observed_at)
    validate(document)
    write_outputs(document)
    print(f'Wrote site status for {document["counts"]["sources"]} sources.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
