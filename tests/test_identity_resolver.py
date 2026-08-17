import json
import pathlib
import unittest

import build_identity_resolver as resolver


ROOT = pathlib.Path(__file__).resolve().parents[1]


def fixture_index():
    definitions = {'snapshotGenerated': 'now', 'definitions': [
        {'id': 'd1', 'packageId': 'p1', 'kind': 'APP',
         'manifestIdentity': {'name': 'Sample App', 'namespace': 'author'},
         'sourceIdentity': {'name': 'Sample App', 'namespace': 'author'},
         'source': {'url': 'https://example.test/app.groovy'}},
        {'id': 'd2', 'packageId': 'p2', 'kind': 'APP',
         'manifestIdentity': {'name': 'Sample App', 'namespace': 'author'},
         'sourceIdentity': {'name': 'Sample Application', 'namespace': 'author'},
         'source': {'url': 'https://example.test/other.groovy'}},
    ]}
    packages = {'packages': [
        {'id': 'p1', 'name': 'One', 'author': 'A', 'manifest': {}, 'links': {}},
        {'id': 'p2', 'name': 'Two', 'author': 'B', 'manifest': {}, 'links': {}},
    ]}
    official = {'matches': [{'entryId': 'sample-native', 'entryName': 'Sample App',
                             'docTitle': 'Sample App', 'matchedBy': 'Sample App',
                             'url': 'https://docs.example.test/sample'}]}
    reviewed = {'projects': [{
        'id': 'manual:sample', 'kind': 'APP', 'name': 'Manual Sample',
        'namespace': 'manual-author', 'author': 'Manual Author',
        'installMethod': 'MANUAL', 'sourceUrl': 'https://example.test/manual.groovy',
        'documentationUrl': 'https://example.test/manual',
        'communityUrl': 'https://example.test/topic',
        'evidence': ['COMMUNITY_TOPIC', 'SOURCE_IDENTITY_MATCH'],
    }]}
    return resolver.build_index(definitions, packages, official, reviewed)


class IdentityResolverTests(unittest.TestCase):
    def test_exact_name_and_namespace_returns_every_credible_match(self):
        result = resolver.resolve(fixture_index(), ' sample app ', ' AUTHOR ', 'APP')
        self.assertEqual(len(result['exact']), 2)
        self.assertTrue(result['ambiguous'])

    def test_namespace_prevents_cross_namespace_match(self):
        result = resolver.resolve(fixture_index(), 'Sample App', 'someone-else', 'APP')
        self.assertFalse(result['exact'])
        self.assertFalse(result['suggestions'])

    def test_suggestions_are_separate_and_labelled(self):
        result = resolver.resolve(fixture_index(), 'Sampel Application', 'author', 'APP')
        self.assertFalse(result['exact'])
        self.assertTrue(result['suggestions'])
        self.assertTrue(all(row['matchType'] == 'SUGGESTED' for row in result['suggestions']))

    def test_exact_name_without_namespace_requests_confirmation(self):
        result = resolver.resolve(fixture_index(), 'Sample App', None, 'APP')
        self.assertFalse(result['exact'])
        self.assertEqual(len(result['nameMatches']), 2)
        self.assertTrue(result['needsNamespace'])

    def test_short_discovery_term_returns_related_hpm_and_builtin(self):
        result = resolver.resolve(fixture_index(), 'Sample', None, 'APP')
        self.assertEqual(len(result['related']), 2)
        self.assertEqual(len(result['builtInSuggestions']), 1)

    def test_python_and_browser_use_documented_bigram_threshold(self):
        self.assertGreaterEqual(resolver.similarity('Sample Applicatio', 'Sample Application'),
                                0.82)
        self.assertLess(resolver.similarity('Sample', 'Unrelated Driver'), 0.82)

    def test_builtins_are_not_hpm_results(self):
        result = resolver.resolve(fixture_index(), 'Sample App', 'author', 'APP')
        self.assertEqual(len(result['builtIns']), 1)
        self.assertEqual(result['builtIns'][0]['matchType'], 'BUILT_IN_CANDIDATE')

    def test_manual_project_is_exact_but_never_an_hpm_package(self):
        result = resolver.resolve(fixture_index(), 'Manual Sample', 'manual-author', 'APP')
        self.assertEqual(len(result['manualExact']), 1)
        project = result['manualExact'][0]['definition']
        self.assertEqual(project['installMethod'], 'MANUAL')
        self.assertNotIn('package', project)

    def test_mdns_manual_app_is_in_committed_index(self):
        document = json.loads((ROOT / resolver.OUTPUT).read_text('utf-8'))
        result = resolver.resolve(document, 'mDNS Device Discovery',
                                  'gordon-thelander', 'APP')
        self.assertEqual(len(result['manualExact']), 1)
        self.assertIn('SOURCE_IDENTITY_MATCH',
                      result['manualExact'][0]['definition']['evidence'])

    def test_committed_index_is_valid_and_private_by_default(self):
        document = json.loads((ROOT / resolver.OUTPUT).read_text('utf-8'))
        resolver.validate(document)
        self.assertTrue(document['privacy']['browserOnly'])
        self.assertFalse(document['privacy']['uploadsHubInventory'])
        script = (ROOT / resolver.SCRIPT_OUTPUT).read_text('utf-8')
        self.assertTrue(script.startswith('window.IDENTITY_INDEX = '))

    def test_browser_renderer_does_not_inject_remote_html(self):
        source = (ROOT / 'site/identity-resolver/app.js').read_text('utf-8')
        self.assertNotIn('innerHTML', source)
        self.assertIn('textContent', source)

    def test_direct_file_page_loads_embedded_index_and_examples(self):
        page = (ROOT / 'site/identity-resolver/index.html').read_text('utf-8')
        self.assertIn('data/identity_index.js', page)
        self.assertIn('data-name="OwnTracks"', page)

    def test_generator_has_no_automation_map_registry_path(self):
        source = (ROOT / 'build_identity_resolver.py').read_text('utf-8')
        self.assertNotIn('hubitat_automation_map_app_integration_registry', source)


if __name__ == '__main__':
    unittest.main()
