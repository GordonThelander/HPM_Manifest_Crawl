import json
import pathlib
import tempfile
import unittest

import build_community_datasets as builder


ROOT = pathlib.Path(__file__).resolve().parents[1]


class CommunityDatasetTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.index = json.loads((ROOT / builder.INDEX).read_text('utf-8'))
        cls.documents = builder.build_all(cls.index)

    def test_outputs_cannot_target_automation_map_registries(self):
        output_names = {path.name for path in builder.OUTPUTS.values()}
        self.assertEqual(output_names, {
            'community_packages.json', 'definitions.json', 'package_health.json'
        })
        self.assertFalse(any('automation_map' in name for name in output_names))
        source = (ROOT / 'build_community_datasets.py').read_text('utf-8')
        self.assertNotIn('hubitat_automation_map_app_integration_registry', source)

    def test_counts_and_schema_are_consistent(self):
        packages = self.documents['packages']
        definitions = self.documents['definitions']
        health = self.documents['health']
        self.assertEqual(packages['schemaVersion'], '1.0')
        self.assertEqual(packages['packageCount'], len(packages['packages']))
        self.assertEqual(definitions['definitionCount'], len(definitions['definitions']))
        self.assertEqual(health['packageCount'], len(health['packages']))
        self.assertEqual(packages['packageCount'], health['packageCount'])

    def test_package_and_definition_ids_are_unique(self):
        packages = self.documents['packages']['packages']
        definitions = self.documents['definitions']['definitions']
        self.assertEqual(len({row['id'] for row in packages}), len(packages))
        self.assertEqual(len({row['id'] for row in definitions}), len(definitions))

    def test_duplicate_declared_hpm_ids_are_disambiguated(self):
        packages = self.documents['packages']['packages']
        declared = {}
        for package in packages:
            if package['hpmPackageId']:
                declared.setdefault(package['hpmPackageId'], []).append(package)
        collisions = [rows for rows in declared.values() if len(rows) > 1]
        self.assertTrue(collisions)
        for rows in collisions:
            self.assertEqual(len({row['id'] for row in rows}), len(rows))
            self.assertTrue(all(row['id'].count(':') >= 2 for row in rows))

    def test_every_component_reference_resolves(self):
        definition_ids = {
            row['id'] for row in self.documents['definitions']['definitions']
        }
        for package in self.documents['packages']['packages']:
            referenced = package['components']['apps'] + package['components']['drivers']
            self.assertTrue(set(referenced) <= definition_ids)

    def test_build_is_deterministic(self):
        again = builder.build_all(self.index)
        for key in builder.OUTPUTS:
            self.assertEqual(
                builder.serialise(self.documents[key]), builder.serialise(again[key])
            )

    def test_check_mode_shape_can_be_written_to_isolated_directory(self):
        with tempfile.TemporaryDirectory() as directory:
            target = pathlib.Path(directory)
            for key, relative in builder.OUTPUTS.items():
                (target / relative).write_text(
                    builder.serialise(self.documents[key]), encoding='utf-8', newline='\n'
                )
            for key, relative in builder.OUTPUTS.items():
                self.assertEqual(
                    (target / relative).read_text('utf-8'),
                    builder.serialise(self.documents[key]),
                )

    def test_public_schema_documents_are_valid_json(self):
        schema_dir = ROOT / 'docs' / 'schemas'
        expected = {
            'community-packages.schema.json',
            'definitions.schema.json',
            'package-health.schema.json',
        }
        self.assertEqual({path.name for path in schema_dir.glob('*.json')}, expected)
        for name in expected:
            schema = json.loads((schema_dir / name).read_text('utf-8'))
            self.assertEqual(schema['$schema'], 'https://json-schema.org/draft/2020-12/schema')
            self.assertEqual(schema['properties']['schemaVersion']['const'], '1.0')


if __name__ == '__main__':
    unittest.main()
