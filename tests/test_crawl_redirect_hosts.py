import email.message
import io
import pathlib
import tempfile
import unittest
import urllib.error
from unittest import mock

import crawl_hpm


def _redirect_error(url, code, location):
    headers = email.message.Message()
    headers['Location'] = location
    return urllib.error.HTTPError(url, code, 'redirect', headers, io.BytesIO(b''))


class FakeResponse:
    def __init__(self, body):
        self._body = body

    def read(self):
        return self._body

    def __enter__(self):
        return self

    def __exit__(self, *exc):
        return False


class FetchUrlRedirectTests(unittest.TestCase):
    def _fetch(self, side_effect):
        with tempfile.TemporaryDirectory() as directory:
            root = pathlib.Path(directory)
            (root / 'data').mkdir(parents=True, exist_ok=True)
            with (
                mock.patch.object(crawl_hpm, 'CACHE', root),
                mock.patch.object(crawl_hpm, 'CACHE_DATA', root / 'data'),
                mock.patch.object(crawl_hpm, 'CACHE_META', root / 'meta.json'),
                mock.patch.object(crawl_hpm.opener, 'open', side_effect=side_effect),
            ):
                return crawl_hpm.fetch_url('https://raw.githubusercontent.com/dev/pkg/main/packageManifest.json', 'manifest')

    def test_redirect_to_github_release_asset_host_is_followed(self):
        # GitHub redirects a releases/download URL to a signed, expiring URL on
        # this host to actually serve the file - a legitimate part of GitHub's
        # own infrastructure, not a third party.
        target = 'https://release-assets.githubusercontent.com/github-production-release-asset/1/abc?sig=x'
        body = self._fetch([
            _redirect_error('https://github.com/dev/pkg/releases/download/v1/packageManifest.json', 302, target),
            FakeResponse(b'{"ok": true}'),
        ])
        self.assertEqual(body, b'{"ok": true}')

    def test_redirect_to_untrusted_host_is_rejected(self):
        with self.assertRaises(RuntimeError) as ctx:
            self._fetch([
                _redirect_error('https://raw.githubusercontent.com/dev/pkg/main/packageManifest.json', 302,
                                 'https://evil.example.com/packageManifest.json'),
            ])
        self.assertIn('redirect outside allowed GitHub hosts', str(ctx.exception))


if __name__ == '__main__':
    unittest.main()
