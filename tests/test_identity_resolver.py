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
    community = {'records': [{
        'id': 'community-app:sample', 'name': 'Wiki Sample App',
        'section': 'Utility', 'links': ['https://example.test/wiki-topic'],
        'lifecycleFlags': [], 'hpmMatches': [],
    }]}
    return resolver.build_index(definitions, packages, official, reviewed, community)


class IdentityResolverTests(unittest.TestCase):
    def test_exact_name_and_namespace_returns_every_credible_match(self):
        result = resolver.resolve(fixture_index(), ' sample app ', ' AUTHOR ', 'APP')
        self.assertEqual(len(result['exact']), 2)
        self.assertTrue(result['ambiguous'])

    def test_namespace_prevents_cross_namespace_match(self):
        result = resolver.resolve(fixture_index(), 'Sample App', 'someone-else', 'APP')
        self.assertFalse(result['exact'])
        self.assertFalse(result['suggestions'])

    def test_namespace_can_be_searched_without_a_name(self):
        exact = resolver.resolve(fixture_index(), None, 'author', 'APP')
        self.assertEqual(len(exact['namespaceExact']), 2)
        partial = resolver.resolve(fixture_index(), '', 'auth', 'APP')
        self.assertEqual(len(partial['namespaceRelated']), 2)

    def test_manual_project_participates_in_namespace_search(self):
        result = resolver.resolve(fixture_index(), '', 'manual', 'APP')
        self.assertEqual(len(result['manualNamespaceRelated']), 1)

    def test_author_can_be_searched_without_name_or_namespace(self):
        exact = resolver.resolve(fixture_index(), '', '', 'APP', 'A')
        self.assertEqual(len(exact['authorExact']), 1)
        related = resolver.resolve(fixture_index(), '', '', 'APP', 'Manual')
        self.assertEqual(len(related['manualAuthorRelated']), 1)

    def test_author_combines_with_identity_filters(self):
        result = resolver.resolve(fixture_index(), 'Sample App', 'author', 'APP', 'B')
        self.assertEqual(len(result['exact']), 1)
        self.assertEqual(result['exact'][0]['definition']['package']['name'], 'Two')

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

    def test_wiki_app_is_discovery_evidence_not_identity(self):
        result = resolver.resolve(fixture_index(), 'Wiki Sample App', None, 'APP')
        self.assertEqual(len(result['communityExact']), 1)
        app = result['communityExact'][0]['definition']
        self.assertEqual(app['evidence'], 'COMMUNITY_APP_LISTED')
        self.assertNotIn('namespace', app)

    def test_all_committed_community_apps_are_indexed(self):
        source = json.loads((ROOT / resolver.COMMUNITY_APPS).read_text('utf-8'))
        document = json.loads((ROOT / resolver.OUTPUT).read_text('utf-8'))
        self.assertEqual(document['communityAppCount'], source['recordCount'])

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

    def test_every_hpm_result_path_groups_by_package(self):
        source = (ROOT / 'site/identity-resolver/app.js').read_text('utf-8')
        self.assertIn('function groupedPackageCards', source)
        self.assertIn("groupedPackageCards([...result.authorExact", source)
        self.assertIn("groupedPackageCards([...result.namespaceExact", source)
        self.assertIn('groupedPackageCards(result.exact)', source)
        self.assertIn('groupedPackageCards(result.nameMatches)', source)
        self.assertIn('groupedPackageCards(result.related)', source)
        self.assertIn('groupedPackageCards(result.suggestions)', source)

    def test_app_and_driver_styles_have_text_badges_and_distinct_colours(self):
        script = (ROOT / 'site/identity-resolver/app.js').read_text('utf-8')
        styles = (ROOT / 'site/identity-resolver/styles.css').read_text('utf-8')
        self.assertIn("badge.textContent=d.kind", script)
        self.assertIn('.type-badge.app', styles)
        self.assertIn('.type-badge.driver', styles)
        self.assertIn('#0b5d45', styles)
        self.assertIn('#174f7a', styles)

    def test_direct_file_page_loads_embedded_index_and_examples(self):
        page = (ROOT / 'site/identity-resolver/index.html').read_text('utf-8')
        self.assertIn('data/identity_index.js', page)
        self.assertIn('data-author="Heyes"', page)
        self.assertIn('data-name="Kasa"', page)
        self.assertIn('data-namespace="Bear"', page)
        self.assertNotIn('id="name" required', page)
        self.assertIn('id="author"', page)

    def test_generator_has_no_automation_map_registry_path(self):
        source = (ROOT / 'build_identity_resolver.py').read_text('utf-8')
        self.assertNotIn('hubitat_automation_map_app_integration_registry', source)


if __name__ == '__main__':
    unittest.main()
