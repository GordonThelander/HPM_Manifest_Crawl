import json
import pathlib
import unittest

import build_automation_map_context as context


ROOT = pathlib.Path(__file__).resolve().parents[1]


def fixtures():
    definitions = {'snapshotGenerated': '2026-08-26T00:00:00Z', 'definitions': [
        {'id': 'd1', 'packageId': 'p1', 'kind': 'APP',
         'manifestIdentity': {'name': 'Sample App', 'namespace': 'author'},
         'sourceIdentity': {'name': 'Sample App', 'namespace': 'author'},
         'source': {'url': 'https://example.test/app.groovy'}},
        {'id': 'driver', 'packageId': 'p1', 'kind': 'DRIVER',
         'sourceIdentity': {'name': 'Sample Driver', 'namespace': 'author'}},
    ]}
    packages = {'packages': [{
        'id': 'p1', 'name': 'Sample Package', 'author': 'Author',
        'description': 'A sample package.',
        'links': {'documentation': 'https://example.test/docs',
                  'community': 'http://unsafe.test/topic'},
    }]}
    official = {'matches': [{
        'entryId': 'native', 'entryName': 'Native App', 'docTitle': 'Native App',
        'matchedBy': 'Native App', 'url': 'https://docs.example.test/native',
    }]}
    reviewed = {'projects': [{
        'id': 'manual:one', 'kind': 'APP', 'name': 'Manual App',
        'namespace': 'manual', 'author': 'Maintainer',
        'documentationUrl': 'https://example.test/manual',
        'sourceUrl': 'https://example.test/manual.groovy',
        'communityUrl': None,
    }]}
    community = {'records': [{
        'id': 'community:one', 'name': 'Wiki App', 'section': 'Utilities',
        'links': ['https://community.example.test/topic'], 'lifecycleFlags': ['ARCHIVED'],
    }]}
    health = {'packages': [{'packageId': 'p1', 'checks': {
        'manifestFetch': {'status': 'PASS'}, 'sourceFetch': {'status': 'PASS'},
        'definitionIdentity': {'status': 'MISMATCH'},
        'documentationLink': {'status': 'PASS'}, 'communityLink': {'status': 'MISSING'},
        'httpsTransport': {'status': 'PASS'},
    }}]}
    network = {'packages': [{'id': 'p1', 'classification': 'LAN', 'reviewed': [{}]}]}
    return definitions, packages, official, reviewed, community, health, network


class AutomationMapContextTests(unittest.TestCase):
    def test_projection_preserves_authority_and_factual_evidence(self):
        document = context.build_index(*fixtures())
        context.validate(document)
        authorities = {row['authority'] for row in document['records']}
        self.assertEqual(authorities, {
            'HPM_PACKAGE', 'HUBITAT_BUILT_IN', 'REVIEWED_MANUAL_PROJECT',
            'COMMUNITY_CATALOGUE_LISTING',
        })
        package = next(row for row in document['records'] if row['authority'] == 'HPM_PACKAGE')
        self.assertEqual(package['definitionIdentities'], [{
            'name': 'Sample App', 'namespace': 'author', 'basis': 'sourceIdentity',
        }])
        self.assertEqual(package['evidenceChecks']['definitionIdentity'], 'MISMATCH')
        self.assertEqual(package['qualityFlags'], ['IDENTITY_MISMATCH'])
        self.assertEqual(package['networkEvidence'], {'classification': 'LAN', 'reviewed': True})
        self.assertNotIn('community', package['links'])

    def test_driver_only_packages_are_excluded(self):
        data = list(fixtures())
        data[0]['definitions'][0]['kind'] = 'DRIVER'
        document = context.build_index(*data)
        self.assertFalse(any(row['authority'] == 'HPM_PACKAGE' for row in document['records']))

    def test_unsafe_urls_are_not_published(self):
        document = context.build_index(*fixtures())
        encoded = context.serialise(document)
        self.assertNotIn(b'http://unsafe', encoded)
        context.validate(document, encoded)

    def test_committed_projection_is_current_and_bounded(self):
        output = ROOT / context.OUTPUT
        document = json.loads(output.read_text('utf-8'))
        encoded = context.serialise(document)
        context.validate(document, encoded)
        self.assertEqual(output.read_bytes(), encoded)
        self.assertLessEqual(len(encoded), context.MAX_BYTES)
        self.assertEqual((ROOT / context.PUBLIC_SCHEMA).read_bytes(),
                         (ROOT / context.SCHEMA).read_bytes())


if __name__ == '__main__':
    unittest.main()
