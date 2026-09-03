import json
import pathlib
import unittest

import build_package_explorer as explorer


ROOT = pathlib.Path(__file__).resolve().parents[1]


class PackageExplorerTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.document = json.loads((ROOT / explorer.OUTPUT).read_text('utf-8'))

    def test_output_is_valid_and_contains_every_catalogue(self):
        explorer.validate(self.document)
        self.assertEqual(
            set(self.document['counts']),
            {'HPM_PACKAGE', 'OFFICIAL_DEVICE', 'COMMUNITY_DRIVER', 'COMMUNITY_APP'},
        )
        self.assertEqual(sum(self.document['counts'].values()), self.document['recordCount'])

    def test_hpm_records_include_definitions_health_and_network_evidence(self):
        package = next(row for row in self.document['records'] if row['recordType'] == 'HPM_PACKAGE')
        self.assertIn('definitions', package)
        self.assertIn(package['health']['classification'], {'PASS', 'ATTENTION', 'UNKNOWN'})
        self.assertIn(package['network']['classification'], {'LAN', 'CLOUD', 'BOTH', 'INSUFFICIENT'})
        self.assertEqual(package['classification'], 'HPM_PACKAGE_AVAILABLE')

    def test_repository_link_targets_code_repository_not_hpm_catalogue(self):
        package = {
            'manifest': {
                'url': 'https://raw.githubusercontent.com/example/example-app/main/packageManifest.json',
            },
            'repository': {
                'url': 'https://raw.githubusercontent.com/example/legacy-catalogue/main/repository.json',
            },
            'links': {},
        }
        definitions = [{
            'sourceUrl': 'https://raw.githubusercontent.com/example/example-app/main/app.groovy',
        }]
        self.assertEqual(
            explorer.link_map(package, definitions)['repository'],
            'https://github.com/example/example-app',
        )

    def test_authority_classifications_remain_distinct(self):
        expected = {
            'OFFICIAL_DEVICE': 'OFFICIAL_LISTED',
            'COMMUNITY_DRIVER': 'COMMUNITY_DRIVER_LISTED',
            'COMMUNITY_APP': 'COMMUNITY_APP_LISTED',
        }
        for record_type, classification in expected.items():
            with self.subTest(record_type=record_type):
                record = next(row for row in self.document['records'] if row['recordType'] == record_type)
                self.assertEqual(record['classification'], classification)

    def test_browser_renders_remote_values_as_text(self):
        source = (ROOT / 'site/package-explorer/app.js').read_text('utf-8')
        self.assertIn('textContent', source)
        self.assertNotIn('innerHTML', source)
        self.assertIn('noopener noreferrer', source)

    def test_explorer_has_required_search_and_filters(self):
        page = (ROOT / 'site/package-explorer/index.html').read_text('utf-8')
        for control in ('query', 'catalogue', 'kind', 'health', 'network', 'released', 'documentation'):
            self.assertIn(f'id="{control}"', page)

    def test_catalogue_counts_link_to_filtered_results(self):
        page = (ROOT / 'site/package-explorer/index.html').read_text('utf-8')
        script = (ROOT / 'site/package-explorer/app.js').read_text('utf-8')
        for record_type in ('HPM_PACKAGE', 'OFFICIAL_DEVICE', 'COMMUNITY_DRIVER', 'COMMUNITY_APP'):
            self.assertIn(f'?catalogue={record_type}#results-title', page)
        self.assertIn("new URLSearchParams(location.search).get('catalogue')", script)

    def test_taxonomy_links_can_apply_exact_tag_filters(self):
        script = (ROOT / 'site/package-explorer/app.js').read_text('utf-8')
        self.assertIn("get('tag')", script)
        self.assertIn("(record.tags||[]).includes(exactTag)", script)

    def test_builder_cannot_write_automation_map_registry(self):
        source = (ROOT / 'build_package_explorer.py').read_text('utf-8')
        self.assertNotIn('hubitat_automation_map_app_integration_registry', source)
        self.assertIn("automationMapIndependent': True", source)


class DriverRecordNameTests(unittest.TestCase):
    def test_prefers_a_real_device_or_driver_name(self):
        self.assertEqual(explorer.driver_record_name({'device': 'Bridge', 'manufacturer': 'Acme'}), 'Bridge')
        self.assertEqual(explorer.driver_record_name({'driverOrApp': 'custom driver'}), 'custom driver')

    def test_falls_back_to_manufacturer_when_no_name_survived_parsing(self):
        row = {'device': None, 'driverOrApp': None, 'manufacturer': 'Rachio', 'section': 'Cloud Devices'}
        self.assertEqual(explorer.driver_record_name(row), 'Inferred: Rachio')

    def test_falls_back_to_section_when_manufacturer_is_also_missing(self):
        row = {'device': None, 'driverOrApp': None, 'manufacturer': None, 'section': 'Cloud Devices'}
        self.assertEqual(explorer.driver_record_name(row), 'Inferred: Cloud Devices listing')

    def test_no_unnamed_records_remain_in_the_built_document(self):
        document = json.loads((ROOT / explorer.OUTPUT).read_text('utf-8'))
        unnamed = [row for row in document['records'] if not row.get('name')]
        self.assertEqual(unnamed, [])


if __name__ == '__main__':
    unittest.main()
