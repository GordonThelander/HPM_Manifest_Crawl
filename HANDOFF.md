# Handoff

State of this repository and the reasoning behind it, for whoever picks it up next.
Written to stand alone: it assumes no memory of the conversations that produced this.

Last updated 2026-08-13, at commit `b94c942`.

---

## 1. What this repository is for

It crawls every package published through Hubitat Package Manager, builds an identity index,
and validates the **Automation Map integration registry** against it.

The registry answers "what does this Hubitat app depend on **outside** the hub" — a Hue
bridge, a vendor cloud, an MQTT broker. None of that is discoverable from a hub, so it is
declared. This repository exists to check those declarations against reality and to find
candidates for new ones.

**The consuming project is `GordonThelander/hubitat-automation-map`. Do not modify it from
here.** The two are deliberately separate.

---

## 2. Current state

| Thing | State |
| --- | --- |
| HPM crawl | working |
| Groovy source enrichment | working |
| Hubitat docs enrichment | working |
| Registry validation | working, canaries inverted for v0.4 |
| Canonical registry | `hubitat_automation_map_app_integration_registry.json`, `schemaVersion` 0.4 |
| Self-migrating workflow | **removed** |
| Last CI result | run #23 green: full crawl, enrich, validate, publish |
| Schedule | daily 04:17 UTC, gated on a cheap upstream change check |

### The registry filename is stable

Consumers read `hubitat_automation_map_app_integration_registry.json` and take the version
from the file's own `schemaVersion`. Versioned copies such as `..._v0.3.json` are historical
snapshots that nothing reads.

This was not always true. The version used to live in the filename, so bumping it meant
editing four Python scripts and three workflow lines. If you find yourself doing that again,
you have reintroduced the problem.

---

## 3. What recently went wrong, so it is not repeated

### The self-migration loop (runs #20, #21)

A script, `migrate_pipeline_v04.py`, ran as the **first step of the workflow** and patched
the repository into the state it should already have been in: renaming the registry,
repointing consumers, changing matcher semantics, replacing canaries, and rewriting the
workflow file itself. Then the run tried to commit all of that from inside the runner, and
the publish failed.

So every run started from the old state, fixed itself, produced correct output, and threw
the fix away. Thirteen successful migrations, none of them persisted.

**Fixed by applying the migration once, from a workstation, and deleting the script.** If
you are ever tempted to have CI rewrite its own workflow, do it as a normal commit instead.

### The canaries that outlived their purpose (run #22)

The acceptance checks originally asserted that seven undeclared classes and a
`appName contains "Rule Machine"` rule were **present**, because a validation run that failed
to notice known defects had broken comparison logic. Registry v0.4 fixed those defects, so
the same assertions became a guaranteed failure against a correct registry.

They are now inverted: the defects must be **gone and stay gone**.

**The specific trap:** the acceptance block is duplicated in `crawl_hpm.py` **and**
`revalidate_enriched.py`. Updating one and not the other is exactly what failed run #22. If
you change acceptance logic, change both.

---

## 4. Conventions that must hold

### Evidence is not conclusion

The source and documentation passes record **observations**: a hostname, a `Protocol.LAN`
reference, an `httpGet` call, a documentation sentence, each with a line number and a bounded
excerpt. None of it is automatically promoted to a dependency.

This restraint is load-bearing, not fastidious. Worked example, LIFX Light Manager: the
source pass finds five literal URLs, of which exactly one, `api.lifx.com`, is a real
endpoint. Two are `iconUrl` declarations and one is a help-text link. An automated rule
promoting URLs to dependencies would be wrong four times out of five, confidently.

A proximity heuristic was tried and rejected: "a literal URL within three lines of an
`HTTP_CALL` is real" works perfectly for LIFX and fails completely for Sensibo, where
`home.sensibo.com` is obviously the real endpoint and sits nowhere near an HTTP call because
it is assigned to a variable first. **Do not reintroduce that heuristic without testing it
against at least a dozen packages.**

### Matching is case-insensitive and whitespace-trimming

Both deliberate, both documented at `string_matches` in `crawl_hpm.py`.

Case sensitivity produced 17 false negatives against live data: `BOND` against `Bond`,
`Ecowitt` against `EcoWitt`, `kasaDoorbell` against `Kasa`. Those are the same product.
Trimming exists because published names really do carry stray whitespace, such as
`"Honeywell Vista Envisalink TPI Alarm Integration "`.

After the change, near misses went from 17 to 0 and five more packages matched.

### Absence from HPM is not evidence of error

Three distinct reasons an entry can match nothing, which must not be conflated:

1. **Hubitat built-ins are never published to HPM.** Rule Machine, Maker API, Hue Bridge
   Integration and 40-odd others will never appear, no matter how correct the entry is.
2. **The crawler refuses non-HTTPS repositories.** HubConnect's is served over `http`, so it
   is absent for a reason that has nothing to do with the registry.
3. **The package genuinely is not registered.**

Ten entries carry a `verification` field recording which of these applies. Nothing was
deleted on the strength of a non-match.

---

## 4a. Scheduling and change detection

The workflow runs daily, but a full crawl is ~3,000 requests against a CDN run
by volunteers, and the ecosystem changes slowly. So `check_upstream.py` runs
first and fetches **217** files: the master repository list plus each
developer's `repository.json`. Those are where every observable change surfaces,
because package versions live in them. A combined hash answers "has anything
moved" in about 25 seconds, and every expensive step is gated on the answer.

A push, or a manual dispatch with `force`, always runs the full crawl.

**Two details that are load-bearing:**

`upstream_state.json` is **committed, not cached**, and only by the step that
runs after a successful crawl. So a run that detects a change and then fails
does not record that change as seen, and the next run tries again rather than
skipping work it never did.

**The cache now expires**, default 6 hours, override with `HPM_CACHE_TTL_HOURS`.
Before this it never did: `cache_get` returned any stored body regardless of
age, and since CI restores the cache on every run, a scheduled crawl would have
served the entire ecosystem from disk and discovered nothing new. Not even a new
developer repository, because the master list URL is itself cached. A schedule
without a TTL is worse than no schedule, because it looks like it is working.

**GitHub disables scheduled workflows after 60 days without repository
activity.** On a quiet repo the schedule stops silently, so if the registry ever
looks frozen, check that first.

## 5. Verifying without waiting for CI

CI feedback is slow and the connector only surfaces `exit code 1`. Both recent failures were
reproducible locally in seconds.

```bash
python -m py_compile crawl_hpm.py apply_source_visibility.py \
    enrich_hpm_sources.py enrich_hubitat_docs.py revalidate_enriched.py
```

To exercise the validation and acceptance logic against the committed index without any
network access, import the module and call `validate()` directly. Guard the import with
`try/except SystemExit`, because `crawl_hpm.py` raises on acceptance failure:

```python
import json, pathlib, importlib.util
spec = importlib.util.spec_from_file_location('crawl', 'crawl_hpm.py')
m = importlib.util.module_from_spec(spec)
try: spec.loader.exec_module(m)
except SystemExit: pass
index = json.loads(pathlib.Path('hpm_package_index.json').read_text('utf-8'))
reg = json.loads(pathlib.Path(m.REGISTRY).read_text('utf-8'))
print(m.validate(index, reg))
```

Expected against the current registry: 0 schema defects, 0 duplicate ids, 19 empty
dependencies, no Maker API false overlap, and `ruleCanary` **False**.

**One caveat.** Importing the module regenerates `registry_validation_report.md` as a side
effect, from cached data. The resulting report is correct about validation but its
acquisition metadata will claim "0 network fetches", which describes your local run rather
than a crawl. A real CI run overwrites it correctly.

---

## 6. Open items

Nothing here is broken. These are the honest gaps.

**Coverage is the real gap, not correctness.** 101 entries, of which 82 carry a dependency,
against 900 indexed packages. 805 packages match no entry at all, 349 of which look like
integrations by category or tags. That candidate list is the highest-value work remaining and
needs human classification, since the evidence does not classify itself.

**Ten entries marked `NEEDS_REVIEW`**, where HPM has something similar under a different
name: the registry says `Tuya Cloud` where HPM has `Tuya IoT Platform (Cloud)`, and
`UniFi Network` where HPM spells it `Unifi`.

**112 dead rules need triage.** Most are built-ins that correctly never appear, but nobody
has separated those from genuinely stale strings.

**Six overlaps**, two of which only appeared once matching became case-insensitive.

**Confirm a green run.** Run #22's failure is fixed but unproven. The next run is the first
that should be an ordinary crawl-enrich-validate-publish with nothing to migrate.

---

## 7. Things not to do

- Do not modify `hubitat-automation-map` from this repository.
- Do not have CI rewrite its own workflow.
- Do not put the registry version back in the filename.
- Do not promote observations to dependencies automatically.
- Do not delete a registry entry because it matches nothing; record why instead.
- Do not update acceptance logic in one file only.
