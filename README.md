# HPM Manifest Crawl

Execution repository for the Hubitat Package Manager ecosystem crawl. It builds an identity
index of every package published through HPM, then validates the Automation Map integration
registry against it.

## Current registry

**`hubitat_automation_map_app_integration_registry.json`** is the live input. The
pipeline reads and enriches this file.

`...v0.3.json` is kept as the historical input that produced the current
`registry_validation_report.md`, so that report stays reproducible. It is no longer read by
anything.

See `REGISTRY_v0.4_CHANGES.md` for what changed and why. In short: 12 schema defects
resolved, and a false positive in which `appName contains "Rule Machine"` matched the
unrelated community package **Rule Machine Manager**, attaching Rule Machine's identity to
someone else's app. Hubs report the built-in as `Rule-5.1`, so it now matches that exactly.

Nothing was deleted. Ten entries that could not be confirmed gained a `verification` field
instead, because absence from HPM is not evidence an entry is wrong: Hubitat built-ins are
never published to HPM at all, and one repository is served over `http` and is correctly
refused by the crawler.

## Outputs

| File | Contents |
| --- | --- |
| `hpm_package_index.json` | identity index, ~900 packages across ~216 repositories |
| `hubitat_official_docs_index.json` | docs2.hubitat.com pages matched to native entries |
| `registry_validation_report.md` | dead rules, near misses, over-broad rules, schema defects, overlaps, unrepresented packages |

## Evidence discipline

The crawl separates **observable facts** from **architectural conclusions**. A hostname, a
LAN primitive, a `httpGet` call or a documentation sentence is recorded as evidence with its
line number. None of it is automatically converted into a dependency.

That restraint is load-bearing rather than fussy. A worked example: for LIFX Light Manager
the source pass records five literal URLs, of which only `api.lifx.com` is a real endpoint.
The others are two `iconUrl` declarations and a help-text link. An automated rule that
promoted URLs to dependencies would be wrong four times out of five, and confidently so.

## Note on the filename

The registry version is in the filename, so bumping it means editing four Python scripts and
three lines of the workflow. Worth moving into the file's own `schemaVersion` field, which
already exists, if this repository outlives its "temporary" description.
