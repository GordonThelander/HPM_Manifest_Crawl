import json
import pathlib
import unittest

import build_network_guide as guide


ROOT = pathlib.Path(__file__).resolve().parents[1]


class NetworkGuideTests(unittest.TestCase):
    def test_observed_hosts_ignore_metadata_before_definition(self):
        package = {'apps': [{'sourceFetched': True, 'definitionLine': 20, 'observations': [
            {'type': 'NETWORK_URL_LITERAL', 'line': 3, 'value': {'host': 'api.example.com'}},
            {'type': 'NETWORK_URL_LITERAL', 'line': 30, 'value': {'host': 'api.example.com'}},
            {'type': 'PARSE_LAN_MESSAGE', 'line': 40, 'value': True},
        ]}], 'drivers': []}
        evidence = guide.observed_evidence(package)
        self.assertEqual(evidence['externalHosts'], ['api.example.com'])
        self.assertEqual(evidence['lanPrimitives'], ['PARSE_LAN_MESSAGE'])

    def test_reviewed_matching_uses_registry_rules_without_editing_registry(self):
        package = {'apps': [{'definitionName': 'Example Integration', 'definitionNamespace': 'example'}], 'drivers': []}
        registry = {'entries': [{'id': 'example', 'name': 'Example', 'matchMode': 'ANY',
                                 'matchRules': [{'field': 'appName', 'operator': 'contains', 'value': 'Example'}],
                                 'dependencies': [{'name': 'Example Cloud', 'class': 'EXTERNAL_SERVICE'}]}]}
        matches = guide.matched_reviews(package, registry)
        self.assertEqual(matches[0]['dependencies'][0]['class'], 'EXTERNAL_SERVICE')

    def test_absence_is_insufficient_not_local_only(self):
        packages = {'snapshotGenerated': 'now', 'packages': [{
            'id': 'hpm:one', 'hpmPackageId': 'one', 'name': 'Quiet', 'author': 'A',
            'manifest': {'url': 'https://example.test/package.json'}, 'links': {}, 'tags': [],
        }]}
        index = {'packages': [{'packageId': 'one', 'manifestUrl': 'https://example.test/package.json', 'apps': [], 'drivers': []}]}
        result = guide.build_document(packages, index, {'entries': []})
        self.assertEqual(result['packages'][0]['classification'], 'INSUFFICIENT')
        self.assertIn('insufficient evidence', result['method']['absenceMeans'])

    def test_committed_outputs_are_valid_and_browser_safe(self):
        document = json.loads((ROOT / guide.OUTPUT).read_text('utf-8'))
        guide.validate(document)
        script = (ROOT / guide.SCRIPT_OUTPUT).read_text('utf-8')
        self.assertTrue(script.startswith('window.NETWORK_EVIDENCE = '))
        schema = json.loads((ROOT / 'docs/schemas/network-evidence.schema.json').read_text('utf-8'))
        self.assertEqual(schema['properties']['dataset']['const'], 'network-evidence-guide')

    def test_builder_only_reads_automation_map_registry(self):
        source = (ROOT / 'build_network_guide.py').read_text('utf-8')
        self.assertIn('REVIEWED_REGISTRY.read_text', source)
        self.assertNotIn('REVIEWED_REGISTRY.write_text', source)
        self.assertNotIn('automation_map_contract', source)

    def test_browser_preserves_evidence_labels_and_safe_rendering(self):
        page = (ROOT / 'site/network-guide/index.html').read_text('utf-8')
        script = (ROOT / 'site/network-guide/app.js').read_text('utf-8')
        for label in ('Declared', 'Observed', 'Documented', 'Reviewed'):
            self.assertIn(label, page)
        self.assertIn('Insufficient evidence', page)
        self.assertNotIn('innerHTML', script)
        self.assertIn('textContent', script)
        self.assertNotIn('fetch(', script)


if __name__ == '__main__':
    unittest.main()
