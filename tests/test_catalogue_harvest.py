import pathlib
import json
import unittest

import harvest_catalogues as harvest


def official_fixture(row_count=100, headers=None):
    headers = headers or harvest.EXPECTED_OFFICIAL_HEADERS
    heading = ''.join(f'<th>{value}</th>' for value in headers)
    rows = []
    for index in range(row_count):
        rows.append(
            '<tr>'
            f'<td>Brand {index}</td><td>Device {index}</td><td>MODEL-{index}</td>'
            '<td>Sensor</td><td>Zigbee</td><td>Generic Zigbee Sensor</td>'
            f'<td><a href="#" onclick="return showInstructions(event, {index})">Show</a></td>'
            f'<td><a href="https://example.com/buy/{index}">Buy</a></td>'
            '</tr>'
        )
    return f'<table><thead><tr>{heading}</tr></thead><tbody>{"".join(rows)}</tbody></table>'


def discourse_document(title, cooked):
    return {
        'title': title,
        'post_stream': {'posts': [{
            'post_number': 1,
            'wiki': True,
            'updated_at': '2026-08-17T00:00:00Z',
            'cooked': cooked,
        }]},
    }


def driver_fixture():
    rows = ''.join(
        f'<tr><td>Brand {index}</td><td>Device {index}</td><td>M-{index}</td>'
        f'<td><a href="https://community.hubitat.com/t/example/{1000 + index}">custom driver</a></td></tr>'
        for index in range(10)
    )
    return discourse_document(
        'Custom Device Drivers [Wiki]',
        '<h2>Zigbee Devices</h2><table><thead><tr><th>Brand</th><th>Device</th>'
        f'<th>Product Number</th><th>Driver or App</th></tr></thead><tbody>{rows}</tbody></table>',
    )


def app_fixture():
    items = ''.join(
        f'<li>Example App {index} - <a href="https://community.hubitat.com/t/example/{2000 + index}">link</a></li>'
        for index in range(10)
    )
    return discourse_document('Custom Apps [Wiki]', f'<h2>Integration Apps</h2><ul>{items}</ul>')


class OfficialCatalogueTests(unittest.TestCase):
    def test_official_rows_are_structured_and_provenanced(self):
        records = harvest.parse_official_devices(official_fixture())
        self.assertEqual(len(records), 100)
        first = next(record for record in records if record['productNumber'] == 'MODEL-0')
        self.assertEqual(first['classification'], 'OFFICIAL_LISTED')
        self.assertEqual(first['instructionReference'], '0')
        self.assertEqual(first['source']['url'], harvest.OFFICIAL_PAGE)
        self.assertIn('raw', first)

    def test_layout_drift_fails_visibly(self):
        changed = list(harvest.EXPECTED_OFFICIAL_HEADERS)
        changed[0] = 'Manufacturer'
        with self.assertRaisesRegex(ValueError, 'headers changed'):
            harvest.parse_official_devices(official_fixture(headers=changed))

    def test_suspiciously_empty_catalogue_fails(self):
        with self.assertRaisesRegex(ValueError, 'expected at least'):
            harvest.parse_official_devices(official_fixture(row_count=2))


class CommunityWikiTests(unittest.TestCase):
    def test_driver_wiki_retains_sections_raw_fields_and_links(self):
        records, _ = harvest.parse_driver_wiki(driver_fixture())
        self.assertEqual(len(records), 10)
        self.assertTrue(all(row['classification'] == 'COMMUNITY_DRIVER_LISTED'
                            for row in records))
        self.assertTrue(all(row['section'] == 'Zigbee Devices' for row in records))
        self.assertTrue(all(row['links'] for row in records))

    def test_app_wiki_retains_lifecycle_observation(self):
        document = app_fixture()
        document['post_stream']['posts'][0]['cooked'] = document['post_stream']['posts'][0][
            'cooked'].replace('Example App 0', 'Example App 0 (obsolete)')
        records, _ = harvest.parse_app_wiki(document)
        obsolete = next(row for row in records if 'obsolete' in row['name'])
        self.assertEqual(obsolete['lifecycleFlags'], ['OBSOLETE'])

    def test_non_wiki_first_post_fails(self):
        document = app_fixture()
        document['post_stream']['posts'][0]['wiki'] = False
        with self.assertRaisesRegex(ValueError, 'community-editable'):
            harvest.parse_app_wiki(document)

    def test_exact_link_and_name_matches_are_labelled(self):
        records, _ = harvest.parse_app_wiki(app_fixture())
        packages = {'packages': [{
            'id': 'hpm:example', 'name': 'Example App 0',
            'repository': {'url': None}, 'manifest': {'url': None},
            'links': {
                'documentation': None,
                'community': 'https://community.hubitat.com/t/example/2000/4',
            },
        }]}
        definitions = {'definitions': []}
        harvest.attach_hpm_matches(records, packages, definitions, allow_name=True)
        matched = next(row for row in records if row['name'] == 'Example App 0')
        self.assertEqual(matched['hpmMatches'][0]['packageId'], 'hpm:example')
        self.assertEqual(matched['hpmMatches'][0]['basis'], ['EXACT_LINK', 'EXACT_NAME'])

    def test_harvester_has_no_automation_map_registry_path(self):
        source = pathlib.Path(harvest.__file__).read_text('utf-8')
        self.assertNotIn('hubitat_automation_map_app_integration_registry', source)


class PublishedCatalogueTests(unittest.TestCase):
    def test_published_outputs_and_schemas_are_consistent(self):
        root = pathlib.Path(__file__).resolve().parents[1]
        expected = {
            'official': ('official-devices', 'OFFICIAL_LISTED',
                         'official-devices.schema.json'),
            'drivers': ('community-drivers', 'COMMUNITY_DRIVER_LISTED',
                        'community-drivers.schema.json'),
            'apps': ('community-apps', 'COMMUNITY_APP_LISTED',
                     'community-apps.schema.json'),
        }
        for key, (dataset, classification, schema_name) in expected.items():
            document = json.loads((root / harvest.OUTPUTS[key]).read_text('utf-8'))
            self.assertEqual(document['schemaVersion'], '1.0')
            self.assertEqual(document['dataset'], dataset)
            self.assertEqual(document['recordCount'], len(document['records']))
            self.assertEqual(len(document['snapshotId']), 64)
            self.assertTrue(all(row['classification'] == classification
                                for row in document['records']))
            schema = json.loads((root / 'docs' / 'schemas' / schema_name).read_text('utf-8'))
            self.assertEqual(schema['properties']['schemaVersion']['const'], '1.0')

    def test_record_ids_are_unique(self):
        root = pathlib.Path(__file__).resolve().parents[1]
        for path in harvest.OUTPUTS.values():
            records = json.loads((root / path).read_text('utf-8'))['records']
            self.assertEqual(len(records), len({record['id'] for record in records}))


if __name__ == '__main__':
    unittest.main()
