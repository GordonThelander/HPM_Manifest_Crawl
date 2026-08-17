import pathlib
import unittest


ROOT = pathlib.Path(__file__).resolve().parents[1]


class SiteThemeTests(unittest.TestCase):
    def test_every_site_view_loads_the_shared_hubitat_theme(self):
        pages = {
            'identity-resolver': ROOT / 'site/identity-resolver/index.html',
            'manifest-validator': ROOT / 'site/manifest-validator/index.html',
            'package-feed': ROOT / 'site/package-feed/index.html',
            'recovery-inventory': ROOT / 'site/recovery-inventory/index.html',
        }
        for body_class, path in pages.items():
            with self.subTest(path=path):
                page = path.read_text('utf-8')
                self.assertIn('../shared/hubitat.css', page)
                self.assertIn(f'<body class="{body_class}"', page)

    def test_generated_feed_keeps_shared_theme(self):
        source = (ROOT / 'build_package_feed.py').read_text('utf-8')
        self.assertIn('../shared/hubitat.css', source)
        self.assertIn('<body class="package-feed">', source)

    def test_theme_declares_observed_hubitat_fonts_and_colours(self):
        styles = (ROOT / 'site/shared/hubitat.css').read_text('utf-8').lower()
        self.assertIn('family=mulish', styles)
        self.assertIn('family=roboto', styles)
        for colour in ('#81bc00', '#169c00', '#defabc', '#f8f7fc'):
            self.assertIn(colour, styles)


if __name__ == '__main__':
    unittest.main()
