import pathlib
import unittest


ROOT = pathlib.Path(__file__).resolve().parents[1]


class StartHereTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.page = (ROOT / 'site/start-here/index.html').read_text('utf-8')
        cls.styles = (ROOT / 'site/start-here/styles.css').read_text('utf-8')

    def test_beginner_guide_orients_without_requiring_crawl_knowledge(self):
        self.assertIn('Use this site like a searchable library', self.page)
        self.assertIn('Three parts of the ecosystem', self.page)
        self.assertIn('Hubitat Package Manager', self.page)
        self.assertIn('How to read the results', self.page)
        self.assertIn('Small glossary', self.page)

    def test_question_paths_link_to_relevant_utilities(self):
        for target in (
                '../package-explorer/',
                '../package-explorer/?catalogue=OFFICIAL_DEVICE#results-title',
                '../identity-resolver/',
                '../feature-tracker/',
                '../recovery-inventory/',
                '../manifest-validator/'):
            with self.subTest(target=target):
                self.assertIn(f'href="{target}"', self.page)

    def test_sources_and_privacy_remain_clear(self):
        self.assertIn('Official device listings and release notes come from Hubitat', self.page)
        self.assertIn('Each result identifies whether it came from Hubitat, HPM, a community wiki or source code', self.page)
        self.assertIn('Searches run in your browser and require no hub configuration', self.page)

    def test_page_is_responsive_and_respects_reduced_motion(self):
        self.assertIn('@media (max-width: 700px)', self.styles)
        self.assertIn('prefers-reduced-motion: reduce', self.styles)


if __name__ == '__main__':
    unittest.main()
