import copy
import json
import pathlib
import tempfile
import unittest
from unittest import mock

import automation_map_contract as contract
import build_slim_registry


ROOT = pathlib.Path(__file__).resolve().parents[1]
FIXTURES = ROOT / 'tests' / 'fixtures' / 'automation_map_match_cases.json'


class MatcherContractTests(unittest.TestCase):
    def test_groovy_matcher_cases(self):
        cases = json.loads(FIXTURES.read_text('utf-8'))
        for case in cases:
            with self.subTest(case=case['name']):
                self.assertEqual(
                    contract.entry_state(case['entry'], case['appType']),
                    case['expected'],
                )


class RegistryContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.document = json.loads((ROOT / contract.SLIM_FILENAME).read_text('utf-8'))

    def test_current_registry_satisfies_contract(self):
        self.assertEqual(contract.check_repository(), [])

    def test_missing_required_field_fails(self):
        mutated = copy.deepcopy(self.document)
        del mutated['entries'][0]['dependencies'][0]['runtimeCriticality']
        errors = contract.validate_document(mutated)
        self.assertTrue(any('runtimeCriticality' in error for error in errors), errors)

    def test_unknown_dependency_enum_fails(self):
        mutated = copy.deepcopy(self.document)
        mutated['entries'][0]['dependencies'][0]['class'] = 'NEW_UNMAPPED_CLASS'
        errors = contract.validate_document(mutated)
        self.assertTrue(any('NEW_UNMAPPED_CLASS' in error for error in errors), errors)

    def test_unknown_match_operator_fails(self):
        mutated = copy.deepcopy(self.document)
        mutated['entries'][0]['matchRules'][0]['operator'] = 'startsWith'
        errors = contract.validate_document(mutated)
        self.assertTrue(any('startsWith' in error for error in errors), errors)

    def test_schema_version_is_frozen(self):
        mutated = copy.deepcopy(self.document)
        mutated['schemaVersion'] = '0.5'
        errors = contract.validate_document(mutated)
        self.assertTrue(any('schemaVersion' in error for error in errors), errors)

    def test_slim_path_and_size_limit_are_frozen(self):
        expected_filename = 'hubitat_automation_map_app_integration_registry_slim.json'
        expected_url = (
            'https://raw.githubusercontent.com/GordonThelander/HPM_Manifest_Crawl/'
            'main/hubitat_automation_map_app_integration_registry_slim.json'
        )
        self.assertEqual(contract.SLIM_FILENAME, expected_filename)
        self.assertEqual(contract.SLIM_URL, expected_url)
        self.assertEqual(build_slim_registry.SLIM, pathlib.Path(expected_filename))
        self.assertEqual(build_slim_registry.MAX_BYTES, 64_000)
        self.assertIn(
            expected_url,
            (ROOT / 'AUTOMATION_MAP_CONTRACT.md').read_text('utf-8'),
        )

    def test_atomic_write_replaces_complete_file(self):
        with tempfile.TemporaryDirectory() as directory:
            target = pathlib.Path(directory) / 'registry.json'
            target.write_text('old', encoding='utf-8')
            build_slim_registry.atomic_write(target, 'new\n')
            self.assertEqual(target.read_bytes(), b'new\n')
            self.assertEqual(list(pathlib.Path(directory).glob('*.tmp')), [])

    def test_atomic_replace_failure_preserves_previous_file(self):
        with tempfile.TemporaryDirectory() as directory:
            target = pathlib.Path(directory) / 'registry.json'
            target.write_text('known-good\n', encoding='utf-8')
            with mock.patch.object(pathlib.Path, 'replace', side_effect=OSError('blocked')):
                with self.assertRaises(OSError):
                    build_slim_registry.atomic_write(target, 'candidate\n')
            self.assertEqual(target.read_text('utf-8'), 'known-good\n')
            self.assertEqual(list(pathlib.Path(directory).glob('*.tmp')), [])


if __name__ == '__main__':
    unittest.main()
