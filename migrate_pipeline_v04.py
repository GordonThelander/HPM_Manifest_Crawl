#!/usr/bin/env python3
"""One-time migration of the HPM validation pipeline to registry v0.4 semantics.

This script is intentionally conservative: it copies the already-enriched v0.4
registry to a stable canonical filename, patches consumers to use that stable
name, changes registry matching to case-insensitive semantics, removes stale
v0.3 acceptance canaries, and writes the final workflow. It does not alter
registry entries or derive dependencies from observations.
"""

from pathlib import Path
import json
import re

VERSIONED = Path('hubitat_automation_map_app_integration_registry_v0.4.json')
STABLE = Path('hubitat_automation_map_app_integration_registry.json')

if not VERSIONED.exists():
    raise SystemExit(f'missing migration source: {VERSIONED}')
registry = json.loads(VERSIONED.read_text(encoding='utf-8'))
if str(registry.get('schemaVersion')) != '0.4':
    raise SystemExit(f"expected v0.4 source, found schemaVersion={registry.get('schemaVersion')!r}")
STABLE.write_bytes(VERSIONED.read_bytes())
print(f'Canonical registry created from {VERSIONED}: schemaVersion={registry.get("schemaVersion")}')


def write(path, text):
    Path(path).write_text(text, encoding='utf-8', newline='\n')
    print(f'patched {path}')


def replace_once(text, old, new, label):
    if old not in text:
        if new in text:
            return text
        raise SystemExit(f'{label}: expected text not found')
    return text.replace(old, new, 1)


# --- crawl_hpm.py ---------------------------------------------------------
p = Path('crawl_hpm.py')
s = p.read_text(encoding='utf-8')
s = re.sub(
    r"REGISTRY_GZ = 'hubitat_automation_map_app_integration_registry_v[^']+\.json\.gz'\nREGISTRY = 'hubitat_automation_map_app_integration_registry_v[^']+\.json'\n",
    "REGISTRY = 'hubitat_automation_map_app_integration_registry.json'\n",
    s,
    count=1,
)

old = """def string_matches(op, needle, hay):
    if not isinstance(needle, str) or not isinstance(hay, str): return False
    if op == 'equals': return hay == needle
    if op == 'contains': return needle in hay
    return False


def string_near(op, needle, hay):
    if not isinstance(needle, str) or not isinstance(hay, str): return False
    n, h = needle.strip(), hay.strip()
    if op == 'equals': return h.lower() == n.lower()
    if op == 'contains': return n.lower() in h.lower()
    return False
"""
new = """def string_matches(op, needle, hay):
    \"\"\"Registry v0.4 matching semantics: case-insensitive, otherwise literal.\"\"\"
    if not isinstance(needle, str) or not isinstance(hay, str):
        return False
    n, h = needle.casefold(), hay.casefold()
    if op == 'equals':
        return h == n
    if op == 'contains':
        return n in h
    return False


def string_near(op, needle, hay):
    \"\"\"Report whitespace-normalisation near misses only.

    Case differences are normal matches in registry v0.4, so they are no longer
    classified as near misses.
    \"\"\"
    if not isinstance(needle, str) or not isinstance(hay, str):
        return False
    n, h = needle.strip(), hay.strip()
    if n == needle and h == hay:
        return False
    return string_matches(op, n, h)
"""
s = replace_once(s, old, new, 'matching semantics')

s = replace_once(
    s,
    "    rule_machine_detected = False\n    rule_machine_matches = []\n",
    "    unsafe_rule_machine_rule_present = False\n    unsafe_rule_machine_matches = []\n",
    'Rule Machine state',
)

old = """            if field == 'appName' and op == 'contains' and val == 'Rule Machine':
                # The live HPM index currently contains a community package named
                # \"Rule Machine Manager\", which is a substring false positive.
                rule_machine_detected = True
                rule_machine_matches = [index['packages'][pi].get('packageName') for pi in matches]
"""
new = """            if field == 'appName' and op == 'contains' and isinstance(val, str) and val.casefold() == 'rule machine':
                # v0.4 regression guard: this legacy substring rule must never
                # return. It false-matches the community package Rule Machine Manager.
                unsafe_rule_machine_rule_present = True
                unsafe_rule_machine_matches = [index['packages'][pi].get('packageName') for pi in matches]
"""
s = replace_once(s, old, new, 'Rule Machine legacy guard')

s = replace_once(
    s,
    "        if p.get('category') == 'Integrations' or 'LAN' in tags or 'Cloud' in tags:\n",
    "        if str(p.get('category') or '').casefold() == 'integrations' or any(str(t).casefold() in {'lan','cloud'} for t in tags):\n",
    'candidate filter',
)

s = replace_once(
    s,
    "        f\"- Snapshot: `{index['snapshotGenerated']}`\",\n",
    "        f\"- Snapshot: `{index['snapshotGenerated']}`\",\n        f\"- Registry schemaVersion: `{registry.get('schemaVersion')}`\",\n        \"- Registry string matching: **case-insensitive** (`equals` and `contains`); whitespace is otherwise literal.\",\n",
    'report registry metadata',
)

old = """        '## A. Dead rules', '',
        f\"Known Rule Machine canary (`appName contains \\\"Rule Machine\\\"`): **{'DETECTED' if rule_machine_detected else 'NOT DETECTED'}**.\",
        (\"Live-HPM note: this rule currently matches \" + ', '.join(f'`{x}`' for x in rule_machine_matches) + \" by substring, so it is not a zero-hit dead rule in the HPM identity index. That is itself evidence the rule is unsafe for identifying Hubitat's built-in Rule Machine app (`Rule-5.1`).\") if rule_machine_matches else \"Live-HPM note: no HPM package currently matches the canary substring.\", '',
        table(['Entry ID','Entry','Rule','Field','Operator','Registry value'], dead), '',
        '## B. Near misses', '',
        table(['Entry ID','Field','Operator','Registry value','Index value'], near), '',
"""
new = """        '## A. Dead rules', '',
        f\"Unsafe legacy Rule Machine substring rule (`appName contains \\\"Rule Machine\\\"`) present: **{'YES' if unsafe_rule_machine_rule_present else 'NO'}**.\",
        (\"If present, it currently matches \" + ', '.join(f'`{x}`' for x in unsafe_rule_machine_matches) + \" and is a false-positive hazard.\") if unsafe_rule_machine_matches else \"The v0.4 exact Rule Machine identities are Hubitat-native and can legitimately have zero HPM hits because built-in apps are not published through HPM. Dead-rule count is therefore not a native-app coverage metric.\", '',
        table(['Entry ID','Entry','Rule','Field','Operator','Registry value'], dead), '',
        '## B. Near misses', '',
        'With v0.4 case-insensitive matching, this section now reports whitespace-normalisation near misses only.', '',
        table(['Entry ID','Field','Operator','Registry value','Index value'], near), '',
"""
s = replace_once(s, old, new, 'report Rule Machine/near-miss text')

old_return = "    return {'dead':len(dead),'empty':len(empty),'defects':defects,'dup':len(dup_ids),'ruleCanary':rule_machine_detected,'overlaps':overlaps}\n"
new_return = "    return {'dead':len(dead),'empty':len(empty),'defects':defects,'dup':len(dup_ids),'unsafeRuleMachineRule':unsafe_rule_machine_rule_present,'overlaps':overlaps,'unrepresented':len(unrep_indices),'candidates':len(candidates)}\n"
s = replace_once(s, old_return, new_return, 'validation return')

old = """def main():
    import gzip
    if not pathlib.Path(REGISTRY).exists():
        pathlib.Path(REGISTRY).write_bytes(gzip.decompress(pathlib.Path(REGISTRY_GZ).read_bytes()))
    index = crawl()
"""
new = """def main():
    if not pathlib.Path(REGISTRY).exists():
        raise SystemExit(f'missing canonical registry input: {REGISTRY}')
    index = crawl()
"""
s = replace_once(s, old, new, 'canonical registry main')

old = """    # Acceptance canaries that do not depend on external HPM content.
    expected = {'DASHBOARD','PLATFORM_UTILITY','SECURITY_ORCHESTRATOR','VIRTUALISATION_ORCHESTRATOR','EXTERNAL_OR_LOCAL_SERVICE','LOCAL_DEVICE_OR_BRIDGE','LOCAL_OR_EXTERNAL_SERVICE'}
    actual = {x[2] for x in checks['defects']}
    failures = []
    if checks['empty'] != 19: failures.append(f\"expected 19 empty dependencies, got {checks['empty']}\")
    if checks['dup'] != 0: failures.append(f\"expected 0 duplicate ids, got {checks['dup']}\")
    if not expected.issubset(actual): failures.append(f\"missing schema canaries: {sorted(expected-actual)}\")
    if not checks['ruleCanary']: failures.append('Rule Machine canary not detected')
"""
new = """    # v0.4 structural regression guards. These assert corrected behaviour,
    # rather than requiring the defects that existed in v0.3.
    failures = []
    if checks['defects']:
        failures.append(f\"expected 0 schema defects, got {len(checks['defects'])}: {checks['defects'][:5]}\")
    if checks['dup'] != 0:
        failures.append(f\"expected 0 duplicate ids, got {checks['dup']}\")
    if checks['unsafeRuleMachineRule']:
        failures.append('unsafe Rule Machine substring rule has returned')
    if not str(registry.get('schemaVersion') or '').strip():
        failures.append('canonical registry has no schemaVersion')
"""
s = replace_once(s, old, new, 'v0.4 acceptance guards')

s = replace_once(
    s,
    "    print(json.dumps({'repositoryCount':index['repositoryCount'],'repositoriesFetched':index['repositoriesFetched'],'packageCount':index['packageCount'],'errors':len(index['errors']),'checks':checks}, indent=2, ensure_ascii=False))\n",
    "    print(json.dumps({'registrySchemaVersion':registry.get('schemaVersion'),'repositoryCount':index['repositoryCount'],'repositoriesFetched':index['repositoriesFetched'],'packageCount':index['packageCount'],'errors':len(index['errors']),'checks':checks}, indent=2, ensure_ascii=False))\n",
    'main output',
)
write(p, s)


# --- small registry consumers --------------------------------------------
for filename in ('apply_source_visibility.py', 'enrich_hubitat_docs.py', 'revalidate_enriched.py'):
    q = Path(filename)
    t = q.read_text(encoding='utf-8')
    t = re.sub(
        r"hubitat_automation_map_app_integration_registry_v[0-9.]+\.json",
        'hubitat_automation_map_app_integration_registry.json',
        t,
    )
    if filename == 'revalidate_enriched.py':
        old = """    # Re-run the non-network acceptance canaries after source identities have
    # been added, because source verification can legitimately change match
    # counts and overlaps.
    expected = {
        'DASHBOARD','PLATFORM_UTILITY','SECURITY_ORCHESTRATOR','VIRTUALISATION_ORCHESTRATOR',
        'EXTERNAL_OR_LOCAL_SERVICE','LOCAL_DEVICE_OR_BRIDGE','LOCAL_OR_EXTERNAL_SERVICE'
    }
    actual = {x[2] for x in checks['defects']}
    failures = []
    if checks['empty'] != 19:
        failures.append(f\"expected 19 empty dependencies, got {checks['empty']}\")
    if checks['dup'] != 0:
        failures.append(f\"expected 0 duplicate ids, got {checks['dup']}\")
    if not expected.issubset(actual):
        failures.append(f\"missing schema canaries: {sorted(expected-actual)}\")
"""
        new = """    # Re-run v0.4 structural guards after source identities have been added.
    # Source verification can legitimately change match counts and overlaps,
    # but it must not reintroduce schema defects or unsafe identity rules.
    failures = []
    if checks['defects']:
        failures.append(f\"expected 0 schema defects, got {len(checks['defects'])}: {checks['defects'][:5]}\")
    if checks['dup'] != 0:
        failures.append(f\"expected 0 duplicate ids, got {checks['dup']}\")
    if checks['unsafeRuleMachineRule']:
        failures.append('unsafe Rule Machine substring rule has returned')
"""
        t = replace_once(t, old, new, 'post-enrichment v0.4 guards')
    write(q, t)


# --- documentation --------------------------------------------------------
p = Path('DATA_ACQUISITION.md')
s = p.read_text(encoding='utf-8')
s = s.replace('hubitat_automation_map_app_integration_registry_v0.3.json', 'hubitat_automation_map_app_integration_registry.json')
s = s.replace('hubitat_automation_map_app_integration_registry_v0.4.json', 'hubitat_automation_map_app_integration_registry.json')
old = "Matching is case-sensitive. `equals` requires exact equality and `contains` performs a case-sensitive substring comparison. Case-insensitive or whitespace-normalised matches are reported separately as near misses rather than silently accepted."
new = "Registry v0.4 matching is case-insensitive. `equals` compares case-folded strings and `contains` performs a case-insensitive substring comparison. Whitespace remains literal; matches that require trimming are reported separately as near misses rather than silently accepted."
if old in s:
    s = s.replace(old, new)
anchor = "## Registry validation\n"
if anchor in s and 'canonical stable registry filename' not in s:
    s = s.replace(anchor, "## Registry input and versioning\n\nThe pipeline consumes the canonical stable registry filename `hubitat_automation_map_app_integration_registry.json`. Registry version is read from the file's `schemaVersion` field. Versioned files such as `..._v0.4.json` are retained as historical snapshots and are not hard-coded into pipeline consumers. This removes code/workflow changes from ordinary registry version bumps.\n\n## Registry validation\n", 1)
write(p, s)

p = Path('ENRICHMENT_METHOD.md')
s = p.read_text(encoding='utf-8')
s = s.replace('hubitat_automation_map_app_integration_registry_v0.3.json', 'hubitat_automation_map_app_integration_registry.json')
s = s.replace('hubitat_automation_map_app_integration_registry_v0.4.json', 'hubitat_automation_map_app_integration_registry.json')
write(p, s)

readme = """# HPM Manifest Crawl

Execution repository for the Hubitat Package Manager ecosystem crawl and Automation Map integration-registry validation/enrichment pipeline.

## Current registry

**`hubitat_automation_map_app_integration_registry.json`** is the canonical live pipeline input. Its version is read from the JSON `schemaVersion` field rather than from the filename. The current canonical registry was migrated from enriched **v0.4**.

Versioned files such as `hubitat_automation_map_app_integration_registry_v0.4.json` and `..._v0.3.json` are retained as historical snapshots. Pipeline code does not read them, so a future schema/version bump does not require editing Python scripts or workflow paths.

See `REGISTRY_v0.4_CHANGES.md` for the v0.4 corrections, including the Rule Machine false-positive fix and schema clean-up.

## Outputs

| File | Contents |
| --- | --- |
| `hpm_package_index.json` | HPM identity index plus non-executing Groovy source observations |
| `hubitat_official_docs_index.json` | official `docs2.hubitat.com` evidence matched to native entries |
| `registry_validation_report.md` | validation against the canonical registry: dead rules, near misses, over-broad rules, schema defects, overlaps and unrepresented packages |

## Matching semantics

Registry v0.4 matching is **case-insensitive** for both `equals` and `contains`. Whitespace remains literal and trimming-only matches are reported as near misses. Native Hubitat app rules can legitimately be absent from HPM, so an HPM dead-rule count is not treated as a native-app coverage metric.

The legacy `appName contains \"Rule Machine\"` rule is a regression guard: it must remain absent because it false-matches the unrelated community package **Rule Machine Manager**. The canonical registry instead uses the exact Hubitat identities `Rule-5.1`, `Button Rule-5.1` and `Rule-4.1`.

## Evidence discipline

The pipeline separates **observable facts** from **architectural conclusions**. Public Groovy source is statically inspected without execution, and official Hubitat documentation is collected for native integrations. Hostnames, LAN primitives, HTTP calls, definitions and documentation statements are stored as evidence, but are **not automatically promoted to dependencies**.

This is intentional: implementation indirection makes proximity heuristics unreliable. The evidence makes human dependency curation materially faster without pretending that static observations prove runtime architecture.

See `DATA_ACQUISITION.md` and `ENRICHMENT_METHOD.md` for the acquisition, validation and enrichment contracts.
"""
write('README.md', readme)


# --- final workflow -------------------------------------------------------
workflow = r'''name: HPM Manifest Crawl

on:
  push:
    branches: [main]
    paths-ignore:
      - 'hpm_package_index.json'
      - 'hubitat_official_docs_index.json'
      - 'registry_validation_report.md'
      - 'DATA_ACQUISITION.md'
      - 'ENRICHMENT_METHOD.md'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  crawl:
    runs-on: ubuntu-latest
    timeout-minutes: 120
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Restore acquisition caches
        uses: actions/cache@v4
        with:
          path: |
            .hpm_cache
            .hubitat_docs_cache
          key: enrichment-cache-v3-${{ hashFiles('crawl_hpm.py', 'enrich_hpm_sources.py', 'enrich_hubitat_docs.py') }}
          restore-keys: |
            enrichment-cache-v3-
            enrichment-cache-v2-
            hpm-cache-v1-

      - name: Validate inputs
        shell: bash
        run: |
          set -euo pipefail
          test -f crawl_hpm.py
          test -f hubitat_automation_map_app_integration_registry.json
          python -m py_compile crawl_hpm.py apply_source_visibility.py enrich_hpm_sources.py enrich_hubitat_docs.py revalidate_enriched.py
          python - <<'PY'
          import json
          from pathlib import Path
          p = Path('hubitat_automation_map_app_integration_registry.json')
          d = json.loads(p.read_text(encoding='utf-8'))
          version = str(d.get('schemaVersion') or '').strip()
          if not version:
              raise SystemExit('canonical registry is missing schemaVersion')
          print(f'Canonical registry schemaVersion={version}')
          PY

      - name: Classify source visibility
        run: python apply_source_visibility.py

      - name: Crawl HPM manifests and validate registry
        run: python crawl_hpm.py

      - name: Enrich from public Groovy source
        run: python enrich_hpm_sources.py

      - name: Enrich native entries from official Hubitat documentation
        run: python enrich_hubitat_docs.py

      - name: Revalidate enriched evidence
        run: python revalidate_enriched.py

      - name: Upload outputs
        uses: actions/upload-artifact@v4
        with:
          name: hpm-crawl-output
          if-no-files-found: error
          path: |
            hpm_package_index.json
            hubitat_official_docs_index.json
            registry_validation_report.md
            hubitat_automation_map_app_integration_registry.json
          retention-days: 7

      - name: Commit successful outputs and registry evidence
        shell: bash
        run: |
          set -euo pipefail
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git pull --rebase --autostash origin main
          git add hpm_package_index.json hubitat_official_docs_index.json registry_validation_report.md hubitat_automation_map_app_integration_registry.json
          if git diff --cached --quiet; then
            echo "Generated outputs and registry evidence are unchanged; nothing to commit."
          else
            git commit -m "Update enriched HPM and Hubitat documentation evidence [skip ci]"
            git push origin main
          fi
'''
write('.github/workflows/hpm-crawl.yml', workflow)

print('v0.4 pipeline migration complete')
