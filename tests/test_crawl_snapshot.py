import json
import pathlib
import tempfile
import unittest
from unittest import mock

import crawl_hpm


class CrawlSnapshotTests(unittest.TestCase):
    def test_restored_cache_gets_current_run_snapshot_time(self):
        with tempfile.TemporaryDirectory() as directory:
            root = pathlib.Path(directory)
            data = root / 'data'
            meta = root / 'meta.json'
            root.mkdir(exist_ok=True)
            meta.write_text(
                json.dumps({'snapshotGenerated': '2026-08-13T02:00:24Z', 'kept': True}),
                encoding='utf-8',
            )
            with (
                mock.patch.object(crawl_hpm, 'CACHE', root),
                mock.patch.object(crawl_hpm, 'CACHE_DATA', data),
                mock.patch.object(crawl_hpm, 'CACHE_META', meta),
                mock.patch.object(crawl_hpm, 'utc_now', return_value='2026-08-18T01:02:03Z'),
            ):
                current = crawl_hpm.load_cache_meta()
            self.assertEqual(current['snapshotGenerated'], '2026-08-18T01:02:03Z')
            self.assertTrue(current['kept'])
            self.assertEqual(json.loads(meta.read_text('utf-8')), current)


if __name__ == '__main__':
    unittest.main()
