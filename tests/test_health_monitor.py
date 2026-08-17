import json
import pathlib
import tempfile
import unittest

import build_health_monitor as monitor


ROOT = pathlib.Path(__file__).resolve().parents[1]


def fixtures(manifest_status='PASS', errors=None):
    packages = {'packages': [{
        'id': 'hpm:one', 'name': 'One', 'author': 'Author',
        'manifest': {'url': 'https://example.test/manifest.json'},
        'repository': {'url': 'https://example.test/repository.json'},
        'links': {'documentation': 'https://example.test/docs', 'community': None},
    }]}
    health = {
        'snapshotGenerated': '2026-08-17T00:00:00Z',
        'packages': [{
            'packageId': 'hpm:one',
            'checks': {
                'manifestFetch': {'status': manifest_status,
                                  'url': 'https://example.test/manifest.json'},
                'sourceFetch': {'status': 'PASS', 'components': 1, 'fetched': 1},
            },
            'crawlErrors': errors or [],
        }],
    }
    return packages, health


class HealthMonitorTests(unittest.TestCase):
    def test_baseline_keeps_individual_evidence_and_no_score(self):
        packages, health = fixtures()
        result = monitor.build(packages, health)
        self.assertEqual(result['packages'][0]['transition'], 'BASELINE')
        self.assertFalse(result['method']['opaqueScore'])
        self.assertEqual(result['packages'][0]['state'], 'PASSING')

    def test_new_persistent_and_restored_transitions(self):
        packages, failed = fixtures('FAIL')
        prior_pass = {'snapshotGenerated': 'prior', 'packages': [
            {'packageId': 'hpm:one', 'state': 'PASSING'}]}
        new = monitor.build(packages, failed, prior_pass)
        self.assertEqual(new['packages'][0]['transition'], 'NEW_FAILURE')
        persistent = monitor.build(packages, failed, new)
        self.assertEqual(persistent['packages'][0]['transition'], 'PERSISTENT_FAILURE')
        _, passing = fixtures('PASS')
        restored = monitor.build(packages, passing, new)
        self.assertEqual(restored['packages'][0]['transition'], 'RESTORED')

    def test_transient_and_http_only_failures_are_distinct(self):
        self.assertEqual(monitor.classify_reason('request timed out'), 'TRANSIENT_FAILURE')
        self.assertEqual(monitor.classify_reason('non-HTTPS URL rejected'), 'HTTP_ONLY')
        self.assertEqual(monitor.classify_reason('HTTP 404'), 'FETCH_FAILURE')

    def test_failure_has_direct_remediation_evidence(self):
        error = {'level': 'manifest', 'url': 'https://example.test/manifest.json',
                 'reason': 'HTTP 404'}
        packages, health = fixtures('FAIL', [error])
        row = monitor.build(packages, health)['packages'][0]
        failing = [item for item in row['evidence'] if item['state'] == 'FAILING']
        self.assertTrue(all(item['remediation'] for item in failing))
        self.assertTrue(any(item['url'] == error['url'] for item in failing))

    def test_generator_has_no_registry_path(self):
        source = (ROOT / 'build_health_monitor.py').read_text('utf-8')
        self.assertNotIn('hubitat_automation_map_app_integration_registry', source)

    def test_committed_output_is_valid(self):
        document = json.loads((ROOT / monitor.OUTPUT).read_text('utf-8'))
        monitor.validate(document)
        self.assertEqual(document['summary']['packageCount'], len(document['packages']))

    def test_build_is_deterministic_for_same_inputs_and_previous(self):
        packages, health = fixtures()
        self.assertEqual(monitor.build(packages, health), monitor.build(packages, health))

    def test_same_snapshot_can_be_recognised_as_replay(self):
        packages, health = fixtures()
        prior = monitor.build(packages, health)
        self.assertEqual(prior['snapshotGenerated'], health['snapshotGenerated'])
        # main() preserves this document rather than treating it as another crawl.
        self.assertEqual(prior['packages'][0]['transition'], 'BASELINE')


if __name__ == '__main__':
    unittest.main()
