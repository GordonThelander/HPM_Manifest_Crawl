import json
import pathlib
import unittest

import build_contributor_activity as activity


ROOT = pathlib.Path(__file__).resolve().parents[1]


def fixtures():
    packages = {'snapshotGenerated': '2026-08-17T00:00:00Z', 'packages': [
        {'id': 'p1', 'name': 'Alpha App', 'author': 'Alice', 'category': 'Control',
         'dateReleased': '2025-01-01', 'manifest': {}, 'repository': {}, 'links': {}},
        {'id': 'p2', 'name': 'Alpha Driver', 'author': 'Alice', 'category': 'Control',
         'manifest': {}, 'repository': {}, 'links': {}},
        {'id': 'p3', 'name': 'Case Alias', 'author': 'alice', 'category': 'Utility',
         'manifest': {}, 'repository': {}, 'links': {}},
    ]}
    definitions = {'definitions': [
        {'packageId': 'p1', 'kind': 'APP'},
        {'packageId': 'p2', 'kind': 'DRIVER'},
        {'packageId': 'p2', 'kind': 'DRIVER'},
        {'packageId': 'p3', 'kind': 'APP'},
    ]}
    changes = {'events': [{
        'id': 'e1', 'observedAt': '2026-08-16T00:00:00Z', 'observedCommit': 'abc',
        'packageId': 'p1', 'packageName': 'Alpha App', 'changeTypes': ['UPDATED'],
        'currentPackage': {'name': 'Alpha App', 'author': 'Alice', 'category': 'Control'},
        'previousPackage': {'name': 'Alpha App', 'author': 'Alice', 'category': 'Control'},
        'evidence': [{'label': 'Observed snapshot', 'url': 'https://example.test/commit/abc'}],
    }]}
    return packages, definitions, changes


class ContributorActivityTests(unittest.TestCase):
    def test_rank_and_definition_counts_use_current_catalogue(self):
        document = activity.build_document(*fixtures())
        alice = document['contributors'][0]
        self.assertEqual(alice['name'], 'Alice')
        self.assertEqual(alice['currentRank'], 1)
        self.assertEqual(alice['currentPackageCount'], 2)
        self.assertEqual((alice['appCount'], alice['driverCount']), (1, 2))
        self.assertEqual(document['currentPackageCount'], 3)
        self.assertEqual(document['rankedPackageCount'], 3)

    def test_aliases_are_not_merged(self):
        document = activity.build_document(*fixtures())
        self.assertEqual([row['name'] for row in document['contributors']], ['Alice', 'alice'])
        self.assertIn('not merged', document['method']['aliases'])

    def test_observed_activity_is_distinct_from_publisher_date(self):
        document = activity.build_document(*fixtures())
        alice = document['contributors'][0]
        self.assertEqual(alice['activity'][0]['observedAt'], '2026-08-16T00:00:00Z')
        self.assertEqual(alice['packages'][0]['publisherDate'], '2025-01-01')
        self.assertEqual(alice['activity'][0]['evidenceUrl'], 'https://example.test/commit/abc')

    def test_committed_outputs_are_valid_and_current(self):
        document = json.loads((ROOT / activity.OUTPUT).read_text('utf-8'))
        activity.validate(document)
        browser_data = (ROOT / activity.SCRIPT_OUTPUT).read_text('utf-8')
        self.assertTrue(browser_data.startswith('window.CONTRIBUTOR_ACTIVITY = '))
        schema = json.loads((ROOT / 'docs/schemas/contributor-activity.schema.json').read_text('utf-8'))
        self.assertEqual(schema['properties']['dataset']['const'], 'contributor-activity')

    def test_builder_has_no_automation_map_registry_path(self):
        source = (ROOT / 'build_contributor_activity.py').read_text('utf-8')
        self.assertNotIn('hubitat_automation_map', source)
        self.assertNotIn('automation_map_contract', source)

    def test_browser_uses_safe_text_rendering_and_filters(self):
        page = (ROOT / 'site/contributors/index.html').read_text('utf-8')
        script = (ROOT / 'site/contributors/app.js').read_text('utf-8')
        for field in ('search', 'definition-type', 'category', 'period'):
            self.assertIn(f'id="{field}"', page)
        self.assertIn('Publisher-declared release date', script)
        self.assertIn('textContent', script)
        self.assertNotIn('innerHTML', script)
        self.assertNotIn('fetch(', script)


if __name__ == '__main__':
    unittest.main()
