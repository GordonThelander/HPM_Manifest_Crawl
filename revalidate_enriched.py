#!/usr/bin/env python3
import json
import pathlib

import crawl_hpm

INDEX = pathlib.Path('hpm_package_index.json')
REGISTRY = pathlib.Path('hubitat_automation_map_app_integration_registry_v0.3.json')
DOC_INDEX = pathlib.Path('hubitat_official_docs_index.json')
REPORT = pathlib.Path('registry_validation_report.md')


def main():
    index = json.loads(INDEX.read_text(encoding='utf-8'))
    registry = json.loads(REGISTRY.read_text(encoding='utf-8'))
    checks = crawl_hpm.validate(index, registry)

    # Re-run the non-network acceptance canaries after source identities have
    # been added, because source verification can legitimately change match
    # counts and overlaps.
    expected = {
        'DASHBOARD','PLATFORM_UTILITY','SECURITY_ORCHESTRATOR','VIRTUALISATION_ORCHESTRATOR',
        'EXTERNAL_OR_LOCAL_SERVICE','LOCAL_DEVICE_OR_BRIDGE','LOCAL_OR_EXTERNAL_SERVICE'
    }
    actual = {x[2] for x in checks['defects']}
    failures = []
    if checks['empty'] != 19:
        failures.append(f"expected 19 empty dependencies, got {checks['empty']}")
    if checks['dup'] != 0:
        failures.append(f"expected 0 duplicate ids, got {checks['dup']}")
    if not expected.issubset(actual):
        failures.append(f"missing schema canaries: {sorted(expected-actual)}")
    false_maker = [x for x in checks['overlaps'] if 'home-assistant-makerapi' in x[:2] or 'homebridge-makerapi' in x[:2]]
    if false_maker:
        failures.append(f'Maker API false overlap detected: {false_maker}')
    if not index.get('sourcePassCompleted'):
        failures.append('HPM source pass did not complete')

    docs = json.loads(DOC_INDEX.read_text(encoding='utf-8')) if DOC_INDEX.exists() else {}
    source = index.get('sourceStats') or {}
    appendix = [
        '', '## H. Enrichment summary', '',
        '### HPM/Groovy static source pass', '',
        'The source pass is static and non-executing. Observations are implementation facts only; they are not automatically converted into architectural dependencies.', '',
        crawl_hpm.table(['Measure','Count'], [
            ['Distinct source URLs', source.get('distinctSourceUrls', 0)],
            ['Source URLs fetched', source.get('sourceUrlsFetched', 0)],
            ['Source URLs failed', source.get('sourceUrlsFailed', 0)],
            ['Components attempted', source.get('componentsAttempted', 0)],
            ['Components fetched', source.get('componentsFetched', 0)],
            ['Literal definitions verified', source.get('definitionsVerified', 0)],
            ['Components with observations', source.get('componentsWithObservations', 0)],
        ]), '',
        '### Official Hubitat documentation pass', '',
        'Only `docs2.hubitat.com` is accepted. Matching is identity-based and deliberately avoids fuzzy matching. Documentation statements are preserved as evidence observations, not dependency assertions.', '',
        crawl_hpm.table(['Measure','Count'], [
            ['Documentation pages discovered', docs.get('discoveredDocumentationPages', 0)],
            ['Native registry entries', docs.get('nativeRegistryEntries', 0)],
            ['Native entries matched to official docs', docs.get('matchedNativeEntries', 0)],
            ['Native entries unmatched', docs.get('unmatchedNativeEntries', 0)],
            ['Documentation fetch/parse errors', len(docs.get('errors', []))],
        ]), '',
    ]
    REPORT.write_text(REPORT.read_text(encoding='utf-8').rstrip() + '\n' + '\n'.join(appendix) + '\n', encoding='utf-8', newline='\n')

    if failures:
        print('POST-ENRICHMENT ACCEPTANCE FAILURES:')
        for f in failures:
            print('-', f)
        raise SystemExit(2)
    print(json.dumps({'sourceStats': source, 'docStats': {k: docs.get(k) for k in ('discoveredDocumentationPages','nativeRegistryEntries','matchedNativeEntries','unmatchedNativeEntries')}, 'checks': checks}, indent=2, ensure_ascii=False))


if __name__ == '__main__':
    main()
