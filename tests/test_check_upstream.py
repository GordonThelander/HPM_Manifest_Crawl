import json
import os
import pathlib
import tempfile
import unittest
from unittest import mock

import check_upstream


def read_github_output(path):
    values = {}
    for line in pathlib.Path(path).read_text('utf-8').splitlines():
        if '=' in line:
            key, _, value = line.partition('=')
            values[key] = value
    return values


class UpstreamChangeDetectionTests(unittest.TestCase):
    """main() end to end, with the network layer swapped for fakes."""

    def _run_once(self, tmp_dir, repo_body, manifest_etag):
        state = pathlib.Path(tmp_dir) / 'upstream_state.json'
        index = pathlib.Path(tmp_dir) / 'hpm_package_index.json'
        output = pathlib.Path(tmp_dir) / 'github_output.txt'
        if not index.exists():
            index.write_text(json.dumps({'packages': [
                {'manifestUrl': 'https://raw.githubusercontent.com/dev/pkg/main/packageManifest.json'},
            ]}), encoding='utf-8')
        output.write_text('', encoding='utf-8')

        master_body = json.dumps({
            'repositories': [{'location': 'https://raw.githubusercontent.com/dev/repository.json'}],
        }).encode('utf-8')

        def fake_fetch(url):
            if url == check_upstream.MASTER_URL:
                return master_body, None
            return repo_body, None

        def fake_head_etag(url):
            return manifest_etag, None

        with (
            mock.patch.object(check_upstream, 'STATE', state),
            mock.patch.object(check_upstream, 'PACKAGE_INDEX', index),
            mock.patch.object(check_upstream, 'fetch', side_effect=fake_fetch),
            mock.patch.object(check_upstream, 'head_etag', side_effect=fake_head_etag),
            mock.patch.dict(os.environ, {'GITHUB_OUTPUT': str(output)}),
        ):
            with self.assertRaises(SystemExit):
                check_upstream.main()
        return read_github_output(output)

    def test_first_run_always_reports_changed(self):
        with tempfile.TemporaryDirectory() as tmp_dir:
            result = self._run_once(tmp_dir, repo_body=b'{"same": true}', manifest_etag='"v1"')
            self.assertEqual(result['changed'], 'true')

    def test_nothing_different_reports_unchanged(self):
        with tempfile.TemporaryDirectory() as tmp_dir:
            self._run_once(tmp_dir, repo_body=b'{"same": true}', manifest_etag='"v1"')
            second = self._run_once(tmp_dir, repo_body=b'{"same": true}', manifest_etag='"v1"')
            self.assertEqual(second['changed'], 'false')

    def test_repository_json_edit_alone_is_detected(self):
        with tempfile.TemporaryDirectory() as tmp_dir:
            self._run_once(tmp_dir, repo_body=b'{"same": true}', manifest_etag='"v1"')
            second = self._run_once(tmp_dir, repo_body=b'{"different": true}', manifest_etag='"v1"')
            self.assertEqual(second['changed'], 'true')

    def test_manifest_only_change_is_detected_even_though_repository_json_is_unchanged(self):
        # This is the bug the two-pass check closes: a package version bump
        # never touches its developer's repository.json (name, tags and
        # manifest location only), so a pure repository.json hash could
        # never see it - only the per-manifest ETag pass can.
        with tempfile.TemporaryDirectory() as tmp_dir:
            self._run_once(tmp_dir, repo_body=b'{"same": true}', manifest_etag='"v1"')
            second = self._run_once(tmp_dir, repo_body=b'{"same": true}', manifest_etag='"v2"')
            self.assertEqual(second['changed'], 'true')


class PackageManifestUrlsTests(unittest.TestCase):
    def test_dedupes_and_filters_to_allowed_hosts(self):
        with tempfile.TemporaryDirectory() as tmp_dir:
            index = pathlib.Path(tmp_dir) / 'hpm_package_index.json'
            index.write_text(json.dumps({'packages': [
                {'manifestUrl': 'https://raw.githubusercontent.com/a/a/main/packageManifest.json'},
                {'manifestUrl': 'https://raw.githubusercontent.com/a/a/main/packageManifest.json'},
                {'manifestUrl': 'https://evil.example.com/packageManifest.json'},
                {'manifestUrl': None},
                {},
            ]}), encoding='utf-8')
            with mock.patch.object(check_upstream, 'PACKAGE_INDEX', index):
                urls = check_upstream.package_manifest_urls()
            self.assertEqual(urls, ['https://raw.githubusercontent.com/a/a/main/packageManifest.json'])

    def test_missing_index_returns_empty_rather_than_failing(self):
        with mock.patch.object(check_upstream, 'PACKAGE_INDEX', pathlib.Path('does/not/exist.json')):
            self.assertEqual(check_upstream.package_manifest_urls(), [])


class CheckUrlsTests(unittest.TestCase):
    def test_aggregates_values_and_counts_failures(self):
        def checker(url):
            if url == 'https://bad':
                return None, 'boom'
            return f'ok:{url}', None

        results, failures = check_upstream.check_urls(['https://good', 'https://bad'], checker)
        self.assertEqual(results['https://good'], 'ok:https://good')
        self.assertEqual(results['https://bad'], 'UNREACHABLE')
        self.assertEqual(failures, 1)


if __name__ == '__main__':
    unittest.main()
