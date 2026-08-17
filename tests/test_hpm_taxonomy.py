import json
import pathlib
import unittest

import build_hpm_taxonomy as taxonomy


ROOT = pathlib.Path(__file__).resolve().parents[1]


class HpmTaxonomyTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.document = json.loads((ROOT / taxonomy.OUTPUT).read_text('utf-8'))

    def test_output_uses_current_authoritative_vocabulary(self):
        taxonomy.validate(self.document)
        self.assertEqual(len(self.document['taxonomy']['categories']), 6)
        self.assertEqual(len(self.document['taxonomy']['tags']), 50)
        self.assertTrue({'Cameras', 'Matter', 'MQTT', 'Relays', 'Tasmota'} <= set(
            self.document['taxonomy']['tags']
        ))

    def test_metrics_count_unique_packages_not_definitions(self):
        settings = {'categories': ['Utility'], 'tags': ['Tools & Utilities']}
        packages = {
            'snapshotGenerated': '2026-08-18T00:00:00Z',
            'packageCount': 2,
            'packages': [
                {
                    'category': 'Utility',
                    'tags': ['Tools & Utilities', 'Tools & Utilities'],
                    'components': {'apps': ['a', 'b'], 'drivers': ['d']},
                },
                {
                    'category': 'Utility',
                    'tags': [],
                    'components': {'apps': [], 'drivers': ['e', 'f']},
                },
            ],
        }
        document = taxonomy.build_document(settings, packages, {
            'url': taxonomy.SETTINGS_URL,
            'mode': 'file',
            'retrievedAt': '2026-08-18T00:00:00Z',
            'lastModified': None,
            'sha256': taxonomy.settings_hash(settings),
            'fallbackAvailable': True,
            'changes': taxonomy.taxonomy_changes(settings, settings),
        })
        tag = document['metrics']['tags'][0]
        category = document['metrics']['categories'][0]
        self.assertEqual(tag['packageCount'], 1)
        self.assertEqual(tag['percent'], 50.0)
        self.assertEqual(tag['appPackageCount'], 1)
        self.assertEqual(tag['driverPackageCount'], 1)
        self.assertEqual(category['packageCount'], 2)

    def test_unknown_terms_are_reported_but_not_promoted(self):
        settings = {'categories': ['Utility'], 'tags': ['LAN']}
        packages = {
            'snapshotGenerated': None,
            'packageCount': 1,
            'packages': [{
                'category': 'Weather',
                'tags': ['LAN', 'Not Valid'],
                'components': {'apps': [], 'drivers': []},
            }],
        }
        document = taxonomy.build_document(settings, packages, {
            'url': taxonomy.SETTINGS_URL,
            'mode': 'file',
            'retrievedAt': None,
            'lastModified': None,
            'sha256': taxonomy.settings_hash(settings),
            'fallbackAvailable': True,
            'changes': taxonomy.taxonomy_changes(settings, settings),
        })
        self.assertEqual(document['metrics']['unknownCategories'], [
            {'name': 'Weather', 'packageCount': 1}
        ])
        self.assertEqual(document['metrics']['unknownTags'], [
            {'name': 'Not Valid', 'packageCount': 1}
        ])

    def test_taxonomy_additions_and_removals_are_reviewable(self):
        changes = taxonomy.taxonomy_changes(
            {'categories': ['Utility'], 'tags': ['LAN', 'Cloud']},
            {'categories': ['Utility', 'Control'], 'tags': ['LAN', 'Matter']},
        )
        self.assertTrue(changes['changed'])
        self.assertEqual(changes['categoriesAdded'], ['Control'])
        self.assertEqual(changes['tagsAdded'], ['Matter'])
        self.assertEqual(changes['tagsRemoved'], ['Cloud'])

    def test_browser_cloud_has_exact_table_and_explorer_links(self):
        page = (ROOT / 'site/taxonomy/index.html').read_text('utf-8')
        script = (ROOT / 'site/taxonomy/app.js').read_text('utf-8')
        self.assertIn('id="tag-cloud"', page)
        self.assertIn('id="tag-rows"', page)
        self.assertIn('tag=${encodeURIComponent(term)}', script)
        self.assertIn('textContent', script)
        self.assertNotIn('innerHTML', script)

    def test_builder_cannot_write_automation_map_registry(self):
        source = (ROOT / 'build_hpm_taxonomy.py').read_text('utf-8')
        self.assertNotIn('hubitat_automation_map_app_integration_registry', source)
        self.assertIn("'automationMapIndependent': True", source)


if __name__ == '__main__':
    unittest.main()
