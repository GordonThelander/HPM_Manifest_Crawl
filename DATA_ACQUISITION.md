# HPM Package Index - data acquisition and validation method

## Purpose

This repository produces two derived artefacts for the Hubitat Automation Map project:

- `hpm_package_index.json`: an identity index of packages published through Hubitat Package Manager (HPM).
- `registry_validation_report.md`: a validation report comparing the hand-authored Automation Map integration registry with the HPM identity index.

The HPM data is used as **identity evidence only**. Package names, application names, driver names, namespaces, authors, categories, descriptions and tags are collected. HPM tags such as `LAN` or `Cloud` are not converted into architectural dependencies, transports or criticality. No dependency is inferred from a package name or tag.

## Source of truth

The crawl starts from the HPM master repository list:

`https://raw.githubusercontent.com/HubitatCommunity/hubitat-packagerepositories/master/repositories.json`

At the successful snapshot used for the committed data, the live master list contained **216 repositories**. This differs from the earlier specification note of 217 and is intentionally recorded as the live value rather than forced to an expected count.

## Acquisition path

The crawler walks the HPM ecosystem in three mandatory levels, with an optional fourth source-verification level.

### Level 1 - HPM master repository list

The master `repositories.json` file is fetched first. Each entry supplies a developer/repository name and the URL of that developer's HPM repository JSON.

### Level 2 - developer repository JSON

Each repository URL is fetched. From each repository record the crawler preserves:

- repository name
- repository author
- repository URL
- package ID
- package name
- category
- description
- tags
- package manifest URL

The repository entry establishes that the package is actually published through HPM.

### Level 3 - package manifest

Each package manifest is fetched. Where available, the crawler records:

- package author
- version
- release date
- documentation link
- community link
- application manifest names
- application manifest namespaces
- application source URLs
- driver manifest names
- driver manifest namespaces
- driver source URLs

A failed manifest fetch does not cause the package to disappear from the index. The Level 2 package metadata is retained and `manifestFetched` is recorded as false.

### Level 4 - optional Groovy definition pass

The specification supports an optional second pass over Groovy application/driver source files. Its purpose is to compare manifest identity with the literal `definition(name: ..., namespace: ...)` values actually reported by Hubitat.

This pass deliberately does **not** parse or execute Groovy. Only literal quoted strings inside a recognisable `definition(` block may be extracted. Variables, interpolation, concatenation or any ambiguous expression must result in `null`, not an inferred value.

For the current committed snapshot, `sourcePassCompleted` is **false**. The package index therefore contains manifest identity data only; `definitionName` and `definitionNamespace` are not claimed as authoritative where the source pass was not performed.

## Fetch behaviour and safety controls

The crawler treats every remote file as untrusted data.

- HTTPS GET is used for supported remote content.
- Maximum concurrency is five requests.
- Each request has a 20-second timeout.
- A failed request is retried once and then recorded as an error.
- Failure of one repository or manifest never aborts the complete crawl.
- Malformed JSON is not repaired or normalised into plausible data; the parse failure is recorded.
- Remote strings are never executed, evaluated or interpolated into shell commands.
- Redirect handling is intentionally constrained.
- Missing or uncertain values remain missing. No fallback value is invented.

These controls are important because HPM aggregates content maintained by many independent community developers.

## Cache and deterministic output

All fetched objects are cached by URL in `.hpm_cache`. Cache metadata stores the snapshot timestamp used by the output.

`snapshotGenerated` is the timestamp of the data snapshot, not the wall-clock execution time of every rerun. A run served from the same cached snapshot reuses the stored timestamp.

The JSON serialisation contract is deterministic:

- UTF-8 without BOM
- two-space indentation
- keys sorted in ascending byte order
- non-ASCII preserved rather than escaped
- LF line endings
- final newline present
- packages sorted by repository name, package name, then package ID
- errors sorted by level, URL, then reason
- application and driver order preserved from the manifest

After the successful crawl, a second GitHub Actions run restored the cache and regenerated the index. The resulting `hpm_package_index.json` was byte-for-byte identical to the first successful output. The verified SHA-256 of that index was:

`68aab9789efeb5b8cc8377df49952a2079dbf9f3bf7a251f4e6f5ee6274a536d`

## Snapshot statistics

The successful snapshot recorded:

| Measure | Result |
| --- | ---: |
| HPM repositories in live master list | 216 |
| Repositories fetched successfully | 214 |
| Packages indexed | 899 |
| Recorded fetch/parse errors | 4 |
| Groovy source-definition pass | Not performed |
| Deterministic cache rerun | Passed |

The four failures are preserved in the index rather than hidden or repaired. They include inaccessible/unsupported repository locations and malformed package manifests encountered during the live crawl.

## Registry validation

The second output, `registry_validation_report.md`, compares the HPM identity index with `hubitat_automation_map_app_integration_registry_v0.3.json`.

Only HPM-observable identity fields are evaluated:

| Registry field | HPM evidence |
| --- | --- |
| `appName` | manifest application name and, where available, source definition name |
| `parentAppName` | same identity corpus as `appName` |
| `driverName` | manifest driver name and, where available, source definition name |
| `namespace` | manifest namespace and, where available, source definition namespace |
| `userMapping` | not evaluable from HPM |
| `deviceMetadata` | not evaluable from HPM |

Matching is case-insensitive and whitespace-trimming. `equals` requires exact equality and `contains` performs a case-insensitive and whitespace-trimming substring comparison. Case-insensitive or whitespace-normalised matches are reported separately as near misses rather than silently accepted.

## Three-state match semantics

A registry rule evaluates to one of:

- `MATCH`
- `NO_MATCH`
- `NOT_EVALUABLE`

Unevaluable rules are never simply ignored.

For `ANY` entries:

- `MATCH` if at least one rule matches
- `NO_MATCH` if every rule is evaluable and none match
- `NOT_EVALUABLE` otherwise

For `ALL` entries:

- `MATCH` only when every rule is evaluable and every rule matches
- `NO_MATCH` if any evaluable rule fails
- `NOT_EVALUABLE` otherwise

This prevents false collisions such as treating the generic Maker API entry, Home Assistant via Maker API and Homebridge via Maker API as the same integration merely because the user-specific mapping rule cannot be observed through HPM.

## Validation sections

The report contains seven checks:

1. **Dead rules** - evaluable registry rules that find no HPM identity evidence.
2. **Near misses** - zero-hit rules that would match only after case-insensitive comparison or whitespace trimming.
3. **Over-broad rules** - `contains` rules matching more than five packages.
4. **Entries with no dependencies** - registry entries with an empty dependency array.
5. **Schema defects** - class, edge type or runtime-criticality values not present in the registry's own declared vocabulary.
6. **Duplicate identifiers and genuine overlaps** - repeated registry IDs and pairs of complete entries that both evaluate to `MATCH` for the same HPM package.
7. **Unrepresented packages** - HPM packages not matched by any registry entry, with the report narrowing the human-review candidate list to integration/LAN/cloud-relevant packages rather than presenting every package as required work.

## Important findings in this snapshot

The validation run found:

| Section | Count |
| --- | ---: |
| Dead rules | 112 |
| Near misses | 0 |
| Over-broad rules | 3 |
| Entries with no dependencies | 19 |
| Schema defect occurrences | 0 |
| Duplicate registry IDs | 0 |
| Genuine overlap pairs | 4 |
| Unrepresented HPM packages | 805 |
| High-interest unrepresented candidates | 349 |

Seven distinct undeclared class values are present in the registry, with repeated occurrences bringing the total defect occurrences to 12.

The four genuine overlap pairs found were:

- `chromecast-native` / `chromecast-plus`
- `govee-v2` / `matter-bridge`
- `reolink` / `reolink-camera`
- `webcore` / `webcore-native`

The Maker API mappings were **not** falsely reported as collisions, confirming that three-state `ANY`/`ALL` evaluation behaved as intended.

## Rule Machine canary

The original validation specification deliberately used `appName contains "Rule Machine"` as a canary because Hubitat's built-in Rule Machine app is reported as `Rule-5.1`, not `Rule Machine`.

The live HPM data exposed an additional problem: a community package named `Rule Machine Manager` currently satisfies that substring rule. Therefore the rule is not merely unable to identify the built-in app; it is also capable of matching an unrelated HPM package.

The report records this as a detected unsafe rule instead of forcing the expected zero-hit result. This is an example of the general acquisition principle used throughout the crawl: live evidence takes precedence over a pre-existing expectation.

## What this dataset does not prove

The HPM index is not an architecture model. It does not establish that an application depends on a cloud service, bridge, protocol or external platform. It also cannot prove that a package is installed on a particular Hubitat hub.

It provides an evidence-backed catalogue of published HPM identities that Automation Map can use to improve recognition and to test the quality of its hand-authored registry. Architectural dependency data remains separately curated and, where necessary, confirmed from runtime hub evidence or user input.

## Automation

The repository's GitHub Actions workflow runs the crawler, restores/persists the fetch cache, validates the registry, uploads both outputs as an Actions artefact and commits the latest successful outputs back to the repository. Output-only commits are excluded from retriggering the workflow so that publishing the generated files does not create an infinite CI loop.
