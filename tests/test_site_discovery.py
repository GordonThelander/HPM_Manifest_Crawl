import tempfile
import unittest
from pathlib import Path

import build_site_discovery as discovery


class SiteDiscoveryTests(unittest.TestCase):
    def test_slug_is_readable_stable_and_collision_resistant(self):
        self.assertEqual(discovery.slug("My Package", "one"), discovery.slug("My Package", "one"))
        self.assertTrue(discovery.slug("My Package", "one").startswith("my-package-"))
        self.assertNotEqual(discovery.slug("My Package", "one"), discovery.slug("My Package", "two"))

    def test_github_readme_prefers_declared_documentation(self):
        package = {"links": {"documentation": "https://example.com/docs"}}
        self.assertEqual(discovery.github_readme(package), "https://example.com/docs")

    def test_github_readme_falls_back_to_repository(self):
        package = {
            "links": {},
            "manifest": {"url": "https://raw.githubusercontent.com/example/project/main/package.json"},
        }
        self.assertEqual(discovery.github_readme(package), "https://github.com/example/project#readme")

    def test_build_creates_directories_archives_and_sitemap(self):
        with tempfile.TemporaryDirectory() as tmp:
            output = Path(tmp)
            discovery.build(output)
            self.assertTrue((output / "packages" / "index.html").is_file())
            self.assertTrue((output / "authors" / "index.html").is_file())
            self.assertTrue((output / "updates" / "index.html").is_file())
            sitemap = (output / "sitemap.xml").read_text(encoding="utf-8")
            self.assertIn("/packages/", sitemap)
            self.assertIn("/authors/", sitemap)
            self.assertIn("/updates/", sitemap)


if __name__ == "__main__":
    unittest.main()
