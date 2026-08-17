import unittest

import probe_package_links as probe


class LinkReachabilityTests(unittest.TestCase):
    def test_collect_deduplicates_urls_and_preserves_references(self):
        packages = {'packages': [
            {'id': 'one', 'links': {'documentation': 'https://example.com/x',
                                     'community': None}},
            {'id': 'two', 'links': {'documentation': None,
                                     'community': 'https://example.com/x'}},
        ]}
        result = probe.collect(packages)
        self.assertEqual(len(result), 1)
        self.assertEqual(len(result['https://example.com/x']), 2)

    def test_build_uses_injected_probe_and_is_deterministic(self):
        packages = {'snapshotGenerated': 'now', 'packages': [
            {'id': 'one', 'links': {'documentation': 'https://example.com/b',
                                     'community': 'https://example.com/a'}}]}
        fake = lambda url: {'status': 'REACHABLE', 'httpStatus': 200,
                            'finalUrl': url, 'reason': None}
        result = probe.build(packages, fake, workers=1)
        self.assertEqual([row['url'] for row in result['links']],
                         ['https://example.com/a', 'https://example.com/b'])
        probe.validate(result)

    def test_http_classification(self):
        self.assertEqual(probe.classify_http(200), 'REACHABLE')
        self.assertEqual(probe.classify_http(403), 'REACHABLE')
        self.assertEqual(probe.classify_http(404), 'BROKEN')
        self.assertEqual(probe.classify_http(503), 'TRANSIENT_FAILURE')

    def test_private_targets_are_rejected_before_request(self):
        with self.assertRaises(ValueError):
            probe.validate_public_url('http://127.0.0.1/private')

    def test_output_has_no_download_execution(self):
        packages = {'packages': []}
        result = probe.build(packages, workers=1)
        self.assertFalse(result['method']['executesDownloadedContent'])


if __name__ == '__main__':
    unittest.main()
