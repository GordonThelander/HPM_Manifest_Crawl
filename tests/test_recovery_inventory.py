import pathlib
import unittest


ROOT = pathlib.Path(__file__).resolve().parents[1]
PAGE = ROOT / 'site/recovery-inventory/index.html'
SCRIPT = ROOT / 'site/recovery-inventory/app.js'


class RecoveryInventoryTests(unittest.TestCase):
    def test_minimal_input_excludes_private_hub_configuration(self):
        page = PAGE.read_text('utf-8')
        self.assertIn('TYPE | DEFINITION NAME | NAMESPACE', page)
        for excluded in ('No devices or rooms', 'No rules or settings', 'No tokens or uploads'):
            self.assertIn(excluded, page)

    def test_processing_uses_the_embedded_identity_index(self):
        page = PAGE.read_text('utf-8')
        script = SCRIPT.read_text('utf-8')
        self.assertIn('../identity-resolver/data/identity_index.js', page)
        self.assertIn('window.IDENTITY_INDEX', script)
        self.assertNotIn('fetch(', script)
        self.assertNotIn('XMLHttpRequest', script)

    def test_results_separate_exact_builtin_ambiguous_and_unknown(self):
        source = SCRIPT.read_text('utf-8')
        for status in ('exact', 'builtin', 'ambiguous', 'unknown'):
            self.assertIn(f'status: "{status}"', source)
        self.assertIn('spelling-based suggestions only', source)

    def test_renderer_treats_dataset_values_as_text(self):
        source = SCRIPT.read_text('utf-8')
        self.assertIn('textContent', source)
        self.assertNotIn('innerHTML', source)
        self.assertIn('noopener noreferrer', source)

    def test_page_explains_identity_recovery_is_not_backup(self):
        page = PAGE.read_text('utf-8')
        self.assertIn('Find installation sources', page)
        self.assertIn('Keep a separate hub backup', page)

    def test_recovery_view_has_no_automation_map_output_path(self):
        combined = PAGE.read_text('utf-8') + SCRIPT.read_text('utf-8')
        self.assertNotIn('hubitat_automation_map_app_integration_registry', combined)


if __name__ == '__main__':
    unittest.main()
