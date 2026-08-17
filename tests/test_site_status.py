import copy
import json
import pathlib
import tempfile
import unittest

import build_site_status as status


ROOT = pathlib.Path(__file__).resolve().parents[1]


class SiteStatusTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.document = json.loads((ROOT / status.OUTPUT).read_text('utf-8'))

    def test_committed_outputs_are_valid_and_current(self):
        status.validate(self.document)
        self.assertEqual(
            (ROOT / status.SITE_OUTPUT).read_text('utf-8'),
            status.serialise(self.document),
        )
        self.assertIn('window.COMMUNITY_UTILITIES_STATUS',
                      (ROOT / status.SCRIPT_OUTPUT).read_text('utf-8'))

    def test_crawl_time_comes_from_promoted_snapshot(self):
        inputs = status.load_inputs()
        document = status.build_document(inputs, '2026-08-18T00:00:00Z')
        self.assertEqual(document['lastSuccessfulHpmCrawl'], inputs['hpm']['snapshotGenerated'])
        self.assertNotEqual(document['lastSuccessfulHpmCrawl'], document['generatedAt'])
        self.assertFalse(document['method']['fileModificationTimesUsedAsCrawlTime'])

    def test_unknown_catalogue_acquisition_times_remain_null(self):
        official = next(row for row in self.document['sources'] if row['id'] == 'official-devices')
        self.assertIsNone(official['lastAttempt'])
        self.assertIsNone(official['lastSuccess'])
        self.assertIn('not recorded', official['evidence'])

    def test_partial_crawl_is_degraded_not_erased(self):
        row = next(item for item in self.document['sources'] if item['id'] == 'developer-repositories')
        self.assertEqual(row['state'], 'DEGRADED')
        self.assertEqual(row['lastSuccess'], self.document['lastSuccessfulHpmCrawl'])
        self.assertIn('repositories were fetched', row['evidence'])

    def test_stale_and_fallback_states_are_explicit(self):
        self.assertEqual(
            status.freshness_state(
                'HEALTHY', '2026-01-01T00:00:00Z', '2026-08-18T00:00:00Z'
            ),
            'STALE',
        )
        inputs = status.load_inputs()
        inputs['taxonomy']['source']['mode'] = 'fallback'
        document = status.build_document(inputs, '2026-08-18T00:00:00Z')
        taxonomy = next(row for row in document['sources'] if row['id'] == 'hpm-settings')
        self.assertEqual(taxonomy['state'], 'DEGRADED')

    def test_builder_outputs_cannot_target_automation_map_registries(self):
        self.assertNotIn(status.INPUTS['canonicalRegistry'], (status.OUTPUT, status.SITE_OUTPUT, status.SCRIPT_OUTPUT))
        self.assertNotIn(status.INPUTS['slimRegistry'], (status.OUTPUT, status.SITE_OUTPUT, status.SCRIPT_OUTPUT))
        self.assertFalse(self.document['method']['automationMapRegistriesWritten'])

    def test_document_is_deterministic_for_fixed_inputs_and_time(self):
        inputs = status.load_inputs()
        first = status.build_document(copy.deepcopy(inputs), '2026-08-18T00:00:00Z')
        second = status.build_document(copy.deepcopy(inputs), '2026-08-18T00:00:00Z')
        self.assertEqual(first, second)

    def test_atomic_write_failure_leaves_previous_output(self):
        with tempfile.TemporaryDirectory() as directory:
            target = pathlib.Path(directory) / 'status.json'
            target.write_text('previous', encoding='utf-8')
            with self.assertRaises(TypeError):
                status.atomic_write(target, None)
            self.assertEqual(target.read_text('utf-8'), 'previous')

    def test_about_page_has_accessible_schematic_and_safe_rendering(self):
        page = (ROOT / 'site/about/index.html').read_text('utf-8')
        script = (ROOT / 'site/about/app.js').read_text('utf-8')
        self.assertIn('role="img"', page)
        self.assertIn('id="flow-description"', page)
        self.assertIn('Open the project repository', page)
        self.assertIn('textContent', script)
        self.assertNotIn('innerHTML', script)


if __name__ == '__main__':
    unittest.main()
