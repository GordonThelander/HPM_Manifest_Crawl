import copy
import json
import pathlib
import unittest

import build_release_features as release


ROOT = pathlib.Path(__file__).resolve().parents[1]


class ReleaseFeatureTests(unittest.TestCase):
    def test_parser_retains_sections_and_only_body_topic_links(self):
        topic = {'id': 42, 'slug': 'release-2-5-1-available', 'title': 'Release 2.5.1 Available'}
        post = {
            'post_number': 2, 'created_at': '2026-01-02T00:00:00Z',
            'updated_at': '2026-01-02T01:00:00Z', 'staff': True, 'username': 'staff',
            'cooked': '<p><strong>Release 2.5.1.139 Available</strong></p><p>Changes from 2.5.1.138</p><p><em>New Driver Features</em></p><ul><li>Added firmware discovery. <a href="/t/device-firmware/77">More</a></li></ul><p><a href="https://example.com/no">External</a></p>',
        }
        parsed = release.release_post(post, topic)
        self.assertIsNotNone(parsed)
        build, features = parsed
        self.assertEqual(build['version'], '2.5.1.139')
        self.assertEqual(build['previousVersion'], '2.5.1.138')
        self.assertEqual(features[0]['evidenceType'], 'DRIVER_FEATURE')
        self.assertEqual(build['detailUrls'], ['https://community.hubitat.com/t/device-firmware/77'])

    def test_non_build_reply_is_not_a_release(self):
        topic = {'id': 42, 'slug': 'release', 'title': 'Release 2.5.1 Available'}
        self.assertIsNone(release.release_post({'post_number': 2, 'cooked': '<p>Thanks</p>'}, topic))

    def test_history_detects_add_update_and_remove(self):
        old = {'baselineEstablished': True, 'history': [], 'features': [
            {'id': 'same', 'fingerprint': 'old', 'releaseVersion': '1', 'sourceUrl': 'a'},
            {'id': 'gone', 'fingerprint': 'x', 'releaseVersion': '1', 'sourceUrl': 'b'},
        ]}
        current = [
            {'id': 'same', 'fingerprint': 'new', 'releaseVersion': '1', 'sourceUrl': 'a'},
            {'id': 'added', 'fingerprint': 'x', 'releaseVersion': '2', 'sourceUrl': 'c'},
        ]
        history, baseline, counts = release.change_history(old, current, '2026-01-03T00:00:00Z')
        self.assertTrue(baseline)
        self.assertEqual(counts, {'added': 1, 'updated': 1, 'removed': 1})
        self.assertEqual({row['change'] for row in history}, {'ADDED', 'UPDATED', 'REMOVED'})

    def test_document_is_deterministic_for_fixed_inputs(self):
        harvested = {'topics': [{'id': 1}], 'releases': [{'id':'r','version':'1','releaseFamily':'1','releasedAt':'2026-01-01T00:00:00Z','featureCount':0,'newlyPossibleCount':0,'bugFixCount':0,'sourceUrl':'u'}], 'features': [], 'details': [], 'unavailableDetails': []}
        first = release.build_document(copy.deepcopy(harvested), observed_at='2026-01-02T00:00:00Z')
        second = release.build_document(copy.deepcopy(harvested), observed_at='2026-01-02T00:00:00Z')
        self.assertEqual(first, second)

    def test_current_output_and_site_are_safe(self):
        document = json.loads((ROOT / release.OUTPUT).read_text('utf-8'))
        release.validate(document)
        page = (ROOT / 'site/feature-tracker/index.html').read_text('utf-8')
        script = (ROOT / 'site/feature-tracker/app.js').read_text('utf-8')
        self.assertIn('id="release-timeline"', page)
        self.assertIn('View timeline as a table', page)
        self.assertIn('textContent', script)
        self.assertNotIn('innerHTML', script)

    def test_builder_cannot_write_automation_map_registry(self):
        source = (ROOT / 'build_release_features.py').read_text('utf-8')
        self.assertNotIn('hubitat_automation_map_app_integration_registry', source)
        self.assertIn("'automationMapIndependent': True", source)

    def test_release_activity_embed_is_bounded_and_clicks_through(self):
        page = (ROOT / 'site/embed/release-activity/index.html').read_text('utf-8')
        script = (ROOT / 'site/embed/release-activity/app.js').read_text('utf-8')
        styles = (ROOT / 'site/embed/release-activity/styles.css').read_text('utf-8')
        self.assertNotIn('utility-nav', page)
        self.assertIn('../../feature-tracker/?ref=automation-map-release-preview', page)
        self.assertIn('target="_blank" rel="noopener noreferrer"', page)
        self.assertIn('../../feature-tracker/data/hubitat_release_features.js', page)
        self.assertIn("window.HUBITAT_RELEASE_FEATURES", script)
        self.assertIn('lastSuccessfulHarvest', script)
        self.assertIn('@media(max-width:520px)', styles)
        self.assertNotIn('innerHTML', script)


if __name__ == '__main__':
    unittest.main()
