import copy
import json
import pathlib
import unittest
import xml.etree.ElementTree as ET

import build_package_feed as feed


ROOT = pathlib.Path(__file__).resolve().parents[1]


def documents(snapshot='2026-08-17T00:00:00Z', broken=False):
    source = {
        'file': 'hpm_package_index.json',
        'schemaVersion': '1',
        'sourcePassCompleted': True,
    }
    package = {
        'id': 'hpm:one', 'hpmPackageId': 'one', 'name': 'Example App',
        'author': 'Example Author', 'category': 'Convenience',
        'description': 'An example.', 'tags': ['Example'], 'version': '1.0.0',
        'dateReleased': '2026-08-16',
        'repository': {'name': 'Examples', 'author': 'Example Author',
                       'url': 'https://example.test/repository.json'},
        'manifest': {'url': 'https://example.test/package.json',
                     'fetched': not broken},
        'links': {'documentation': 'https://example.test/docs', 'community': None},
        'components': {'apps': ['definition:one'], 'drivers': []},
    }
    definition = {
        'id': 'definition:one', 'packageId': 'hpm:one', 'kind': 'APP',
        'manifestIdentity': {'name': 'Example App', 'namespace': 'example'},
        'sourceIdentity': {'name': 'Example App', 'namespace': 'example'},
        'source': {'url': 'https://example.test/app.groovy', 'fetched': not broken,
                   'sha256': 'abc', 'bytes': 100, 'definitionLine': 1},
        'observationCounts': {},
    }
    health = {
        'packageId': 'hpm:one',
        'checks': {
            'manifestFetch': {'status': 'FAIL' if broken else 'PASS'},
            'sourceFetch': {'status': 'FAIL' if broken else 'PASS'},
        },
        'crawlErrors': [],
    }
    return (
        {'schemaVersion': '1.0', 'dataset': 'community-packages',
         'snapshotGenerated': snapshot, 'source': source, 'packageCount': 1,
         'packages': [package]},
        {'schemaVersion': '1.0', 'dataset': 'definitions',
         'snapshotGenerated': snapshot, 'source': source, 'definitionCount': 1,
         'definitions': [definition]},
        {'schemaVersion': '1.0', 'dataset': 'package-health',
         'snapshotGenerated': snapshot, 'source': source, 'packageCount': 1,
         'packages': [health], 'unattributedCrawlErrors': []},
    )


class PackageFeedTests(unittest.TestCase):
    def test_first_successful_snapshot_establishes_quiet_baseline(self):
        outputs, events = feed.build_documents(*documents())
        history = json.loads(outputs[feed.CHANGES])
        state = json.loads(outputs[feed.STATE])
        self.assertEqual(events, [])
        self.assertTrue(history['baselineEstablished'])
        self.assertEqual(history['eventCount'], 0)
        self.assertEqual(history['updatedAt'], history['snapshotGenerated'])
        self.assertTrue(state['successfulBaseline'])
        self.assertEqual(state['packageCount'], 1)

    def test_detects_metadata_manifest_source_definition_and_health_changes(self):
        initial = documents()
        first_outputs, _ = feed.build_documents(*initial)
        prior_state = json.loads(first_outputs[feed.STATE])
        prior_history = json.loads(first_outputs[feed.CHANGES])
        updated = list(documents('2026-08-18T00:00:00Z', broken=True))
        updated[0]['packages'][0]['version'] = '1.1.0'
        updated[0]['packages'][0]['manifest']['url'] = 'https://example.test/v2/package.json'
        updated[1]['definitions'][0]['source']['url'] = 'https://example.test/v2/app.groovy'
        updated[1]['definitions'][0]['sourceIdentity']['name'] = 'Example App 2'
        outputs, events = feed.build_documents(
            *updated, prior_state=prior_state, prior_history=prior_history
        )
        self.assertEqual(len(events), 1)
        self.assertEqual(set(events[0]['changeTypes']), {
            'UPDATED', 'MANIFEST_CHANGED', 'SOURCE_LOCATION_CHANGED',
            'DECLARED_DEFINITIONS_CHANGED', 'BROKEN',
        })
        parsed = ET.fromstring(outputs[feed.ATOM])
        self.assertEqual(parsed.tag, '{http://www.w3.org/2005/Atom}feed')
        self.assertTrue(all({'label', 'url'} <= set(link) for link in events[0]['evidence']))

    def test_detects_added_removed_and_restored_packages(self):
        broken_docs = documents(broken=True)
        first_outputs, _ = feed.build_documents(*broken_docs)
        state = json.loads(first_outputs[feed.STATE])
        history = json.loads(first_outputs[feed.CHANGES])
        restored_docs = documents('2026-08-18T00:00:00Z')
        _, restored = feed.build_documents(
            *restored_docs, prior_state=state, prior_history=history
        )
        self.assertIn('RESTORED', restored[0]['changeTypes'])

        empty = [copy.deepcopy(document) for document in restored_docs]
        empty[0]['packages'] = []
        empty[0]['packageCount'] = 0
        with self.assertRaises(feed.UnsafeSnapshot):
            feed.build_documents(*empty, prior_state=state, prior_history=history)

        current = feed.build_snapshot(*restored_docs)
        added = feed.compare('2026-08-18T00:00:00Z', {}, current)
        removed = feed.compare('2026-08-18T00:00:00Z', current, {})
        self.assertEqual(added[0]['changeTypes'], ['ADDED'])
        self.assertEqual(removed[0]['changeTypes'], ['REMOVED'])

    def test_incomplete_or_inconsistent_snapshot_is_rejected(self):
        values = list(documents())
        values[2]['source']['sourcePassCompleted'] = False
        with self.assertRaises(feed.UnsafeSnapshot):
            feed.build_documents(*values)
        values = list(documents())
        values[1]['snapshotGenerated'] = '2026-08-18T00:00:00Z'
        with self.assertRaises(feed.UnsafeSnapshot):
            feed.build_documents(*values)

    def test_feed_is_independent_of_automation_map_registries(self):
        source = (ROOT / 'build_package_feed.py').read_text('utf-8')
        forbidden = 'hubitat_' + 'automation_map_app_integration_registry'
        self.assertNotIn(forbidden, source)
        self.assertFalse(any('automation_map' in path.name for path in (
            feed.STATE, feed.CHANGES, feed.ATOM, feed.DIGEST, feed.SITE
        )))

    def test_source_hash_churn_alone_is_not_a_package_update(self):
        current_docs = documents()
        previous = feed.build_snapshot(*current_docs)
        current_docs[1]['definitions'][0]['source']['sha256'] = 'different'
        current = feed.build_snapshot(*current_docs)
        self.assertEqual(
            feed.compare('2026-08-18T00:00:00Z', previous, current), []
        )

    def test_committed_outputs_are_current(self):
        packages = json.loads((ROOT / feed.PACKAGES).read_text('utf-8'))
        definitions = json.loads((ROOT / feed.DEFINITIONS).read_text('utf-8'))
        health = json.loads((ROOT / feed.HEALTH).read_text('utf-8'))
        state = json.loads((ROOT / feed.STATE).read_text('utf-8'))
        history = json.loads((ROOT / feed.CHANGES).read_text('utf-8'))
        outputs, _ = feed.build_documents(
            packages, definitions, health, state, history
        )
        for path, content in outputs.items():
            self.assertEqual((ROOT / path).read_text('utf-8'), content)


if __name__ == '__main__':
    unittest.main()
