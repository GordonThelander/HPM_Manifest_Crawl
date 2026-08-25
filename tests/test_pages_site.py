import pathlib
import unittest

import check_pages_site as pages


ROOT = pathlib.Path(__file__).resolve().parents[1]


class PagesSiteTests(unittest.TestCase):
    def test_site_is_ready_and_internal_targets_exist(self):
        self.assertEqual(pages.check_site(ROOT / 'site'), [])

    def test_site_contains_no_em_dashes(self):
        for path in (ROOT / 'site').rglob('*'):
            if path.is_file():
                with self.subTest(path=path.relative_to(ROOT)):
                    try:
                        text = path.read_text('utf-8')
                    except UnicodeDecodeError:
                        continue
                    self.assertNotIn('\u2014', text)

    def test_landing_page_links_every_utility_relatively(self):
        page = (ROOT / 'site/index.html').read_text('utf-8')
        for directory in (
                'start-here', 'package-explorer', 'taxonomy', 'feature-tracker', 'identity-resolver', 'manifest-validator', 'network-guide',
                'package-feed', 'recovery-inventory', 'contributors', 'packages', 'authors', 'updates', 'about'):
            self.assertIn(f'href="./{directory}/"', page)
        self.assertNotIn('gordonthelander.github.io', page)
        self.assertIn('Built for the Hubitat community', page)
        self.assertIn('Independent community project. This site is not endorsed by Hubitat.', page)

    def test_every_page_has_portable_shared_navigation(self):
        for relative in pages.UTILITY_PAGES:
            source = (ROOT / 'site' / relative).read_text('utf-8')
            with self.subTest(relative=relative):
                self.assertIn('class="utility-nav"', source)
                self.assertIn('Package Explorer', source)
                self.assertIn('Start Here', source)
                self.assertIn('Taxonomy', source)
                self.assertIn('About', source)
                navigation = source.split('</nav>', 1)[0]
                self.assertIn('class="utility-brand"', navigation)
                self.assertNotIn('>Home</a>', navigation)
                self.assertNotRegex(source, r'''(?:href|src)=["']/HPM_Manifest_Crawl/''')

    def test_every_page_has_one_cloudflare_analytics_beacon(self):
        token = '4f12063038634bc29a4820bbe7523693'
        beacon = 'https://static.cloudflareinsights.com/beacon.min.js'
        for relative in pages.UTILITY_PAGES:
            source = (ROOT / 'site' / relative).read_text('utf-8')
            with self.subTest(relative=relative):
                self.assertEqual(source.count(beacon), 1)
                self.assertEqual(source.count(token), 1)

    def test_internal_links_stay_in_tab_and_external_links_open_new_tabs(self):
        for relative in pages.UTILITY_PAGES:
            source = (ROOT / 'site' / relative).read_text('utf-8')
            with self.subTest(relative=relative):
                self.assertNotIn('<base target="_blank">', source)

    def test_weekly_archive_is_first_featured_tile(self):
        source = (ROOT / 'site/index.html').read_text('utf-8')
        featured = source.split('<div class="discovery-links">', 1)[1].split('</div>', 1)[0]
        self.assertLess(featured.index('./updates/'), featured.index('./packages/'))

    def test_repository_link_moves_from_top_navigation_to_about(self):
        repository = 'https://github.com/GordonThelander/HPM_Manifest_Crawl'
        about = (ROOT / 'site/about/index.html').read_text('utf-8')
        self.assertIn(repository, about)
        for relative in pages.UTILITY_PAGES:
            source = (ROOT / 'site' / relative).read_text('utf-8')
            navigation = source.split('</nav>', 1)[0]
            with self.subTest(relative=relative):
                self.assertNotIn('>GitHub</a>', navigation)

    def test_package_feed_copies_downloads_inside_pages_artifact(self):
        source = (ROOT / 'build_package_feed.py').read_text('utf-8')
        self.assertIn('SITE_CHANGES', source)
        self.assertIn('data/package_changes.json', source)
        self.assertNotIn('href="../../package_changes', source)
        self.assertIn('static.cloudflareinsights.com/beacon.min.js', source)

    def test_pages_workflow_is_independent_and_least_privilege(self):
        workflow = (ROOT / '.github/workflows/pages.yml').read_text('utf-8')
        self.assertIn('branches:\n      - main', workflow)
        self.assertIn('actions/configure-pages@v5', workflow)
        self.assertIn('actions/upload-pages-artifact@v4', workflow)
        self.assertIn('actions/deploy-pages@v5', workflow)
        self.assertIn('path: site', workflow)
        self.assertIn('pages: write', workflow)
        self.assertIn('id-token: write', workflow)
        self.assertNotIn('crawl_hpm.py', workflow)
        self.assertNotIn('hpm-crawl', workflow)


if __name__ == '__main__':
    unittest.main()
