import json
import pathlib
import subprocess
import sys
import unittest

import validate_hpm_package as validator


ROOT = pathlib.Path(__file__).resolve().parents[1]
FIXTURES = ROOT / 'tests' / 'fixtures' / 'validator'


def fixture(name):
    return json.loads((FIXTURES / name).read_text('utf-8'))


class ManifestValidatorTests(unittest.TestCase):
    def test_valid_manifest_has_no_errors_or_warnings(self):
        issues = validator.validate_manifest(fixture('valid_manifest.json'))
        self.assertEqual([row for row in issues if row['severity'] != 'INFO'], [])

    def test_broken_manifest_reports_exact_fields_and_suggestions(self):
        issues = validator.validate_manifest(fixture('broken_manifest.json'), 'broken.json')
        paths = {row['path'] for row in issues if row['severity'] == 'ERROR'}
        self.assertTrue({'author', 'apps[0].version', 'apps[1].version', 'apps[1].location',
                         'apps[1].id', 'drivers'} <= paths)
        self.assertTrue(all(row.get('source') == 'broken.json' for row in issues))
        self.assertTrue(all(row.get('suggestion') for row in issues
                            if row['severity'] == 'ERROR'))

    def test_live_style_legacy_quirks_warn_instead_of_failing(self):
        manifest = fixture('legacy_manifest.json')
        result = validator.build_result(manifest, 'legacy.json', 'legacy.json')
        self.assertTrue(result['valid'])
        codes = {row['code'] for row in result['issues']}
        self.assertTrue({'HTTP_ONLY', 'MISSING_ID', 'MISSING_NAMESPACE'} <= codes)

    def test_repository_entry_is_matched_and_compared(self):
        manifest = fixture('valid_manifest.json')
        repository = fixture('valid_repository.json')
        issues = validator.validate_repository(
            repository, manifest, 'https://example.com/packageManifest.json',
            'repository.json', 'example-presence',
        )
        self.assertEqual([row for row in issues if row['severity'] == 'ERROR'], [])
        repository['packages'][0]['name'] = 'Different Name'
        issues = validator.validate_repository(
            repository, manifest, package_id='example-presence'
        )
        self.assertIn('PACKAGE_NAME_MISMATCH', {row['code'] for row in issues})

    def test_source_is_read_as_text_and_identity_mismatch_is_reported(self):
        manifest = fixture('valid_manifest.json')
        source = '''definition(name: "Actual Name", namespace: "actual", author: "A")'''
        calls = []

        def fetcher(url):
            calls.append(url)
            return source

        issues = validator.validate_sources(manifest, fetcher)
        self.assertEqual(len(calls), 1)
        mismatches = [row for row in issues
                      if row['code'] == 'SOURCE_IDENTITY_MISMATCH']
        self.assertEqual({row['path'] for row in mismatches},
                         {'apps[0].name', 'apps[0].namespace'})

    def test_preview_matches_public_record_shape(self):
        preview = validator.preview_record(
            fixture('valid_manifest.json'), 'packageManifest.json'
        )
        self.assertEqual(preview['name'], 'Example Presence')
        self.assertEqual(len(preview['components']['apps']), 1)
        self.assertEqual(preview['components']['drivers'], [])

    def test_cli_json_and_exit_codes(self):
        valid = subprocess.run([
            sys.executable, str(ROOT / 'validate_hpm_package.py'),
            str(FIXTURES / 'valid_manifest.json'), '--format', 'json',
        ], cwd=ROOT, capture_output=True, text=True, check=False)
        self.assertEqual(valid.returncode, 0, valid.stderr)
        self.assertTrue(json.loads(valid.stdout)['valid'])
        broken = subprocess.run([
            sys.executable, str(ROOT / 'validate_hpm_package.py'),
            str(FIXTURES / 'broken_manifest.json'), '--github-annotations',
        ], cwd=ROOT, capture_output=True, text=True, check=False)
        self.assertEqual(broken.returncode, 1)
        self.assertIn('::error file=', broken.stdout)
        self.assertIn('apps[1].location', broken.stdout)

    def test_validator_cannot_target_canonical_outputs(self):
        source = (ROOT / 'validate_hpm_package.py').read_text('utf-8')
        self.assertNotIn('hubitat_automation_map_app_integration_registry', source)
        self.assertNotIn('hpm_package_index.json', source)
        self.assertNotIn('write_text(', source)
        self.assertIn('executesDownloadedCode', source)

    def test_browser_validator_keeps_manifest_local_and_escapes_rendering(self):
        script = (ROOT / 'site' / 'manifest-validator' / 'app.js').read_text('utf-8')
        self.assertNotIn('fetch(', script)
        self.assertNotIn('innerHTML', script)
        self.assertIn('textContent', script)
        self.assertIn('FileReader', script)

    def test_composite_action_runs_the_same_validator(self):
        action = (ROOT / 'action.yml').read_text('utf-8')
        self.assertIn('using: composite', action)
        self.assertIn('validate_hpm_package.py', action)
        self.assertIn('--github-annotations', action)

    def test_json_result_schema_is_published(self):
        schema = json.loads((
            ROOT / 'docs' / 'schemas' / 'manifest-validation.schema.json'
        ).read_text('utf-8'))
        self.assertEqual(schema['$schema'],
                         'https://json-schema.org/draft/2020-12/schema')
        self.assertEqual(schema['properties']['schemaVersion']['const'], '1.0')
        self.assertFalse(schema['properties']['executesDownloadedCode']['const'])


if __name__ == '__main__':
    unittest.main()
