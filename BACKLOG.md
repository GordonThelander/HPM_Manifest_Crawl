# Community Utility Backlog

Incremental plan for turning HPM Manifest Crawl into a useful public index, health service
and developer tool for the Hubitat community.

## Non-negotiable Automation Map contract

Automation Map is a production consumer. Community features are new projections of the
crawl; they are not migrations of its registry.

The following contract is frozen unless Automation Map is changed, released and verified
first in a separately approved project:

- The published URL remains
  `https://raw.githubusercontent.com/GordonThelander/HPM_Manifest_Crawl/main/hubitat_automation_map_app_integration_registry_slim.json`.
- The root object continues to contain `schemaVersion` and `entries`.
- Runtime entries retain `id`, `matchMode`, `matchRules` and `dependencies`.
- Match rules retain `field`, `operator` and `value`.
- Dependencies retain `name`, `class` and `runtimeCriticality`.
- Existing `ANY`/`ALL` and case-insensitive, whitespace-trimming
  `equals`/`contains` semantics do not change.
- Rules Automation Map cannot evaluate remain non-matches rather than being ignored in a
  way that broadens an entry.
- The generated slim registry remains below 64 KiB.
- The slim registry is generated only from the reviewed canonical registry. Crawled tags,
  hosts and source observations never become dependencies automatically.
- A failed community artifact build must never publish a partial or altered slim registry.

Every increment below is blocked until Increment 0 passes. Every pull request must run the
contract checks, even when it appears unrelated to Automation Map.

## Delivery principles

- Publish new community outputs under new filenames or a dedicated site directory.
- Treat remote package content as untrusted data and render it escaped.
- Separate observable facts from reviewed conclusions.
- Use stable identifiers and version every new public schema.
- Prefer static generated artifacts that can be hosted cheaply and inspected openly.
- Preserve historical snapshots needed to calculate changes over time.
- Do not assign opaque package quality or safety scores; show the underlying checks.

## Increment 0 — Freeze and test the Automation Map contract

**Outcome:** community development cannot silently break the existing consumer.

### Work

- [x] Add fixtures covering known matches, non-matches, `ANY`, `ALL`, unknown fields,
      case differences, whitespace and the Maker API false-positive canary.
- [x] Add a reference matcher test equivalent to Automation Map's current Groovy matcher.
- [x] Assert the slim registry has the required root, entry, rule and dependency fields.
- [x] Assert all enum values are understood by Automation Map.
- [x] Assert generated slim entries equal the relevant projection of canonical entries.
- [x] Assert the output filename and documented raw URL have not changed.
- [x] Retain the hard 64 KiB limit.
- [x] Generate to a temporary file, validate it, then replace the published artifact only
      after all checks pass.
- [x] Add a CI job named `automation-map-contract` and make publication depend on it.
- [x] Document an emergency rollback procedure to the previous known-good slim registry.

### Acceptance criteria

- A removed field, renamed enum, changed matcher result, oversized file or changed path
  fails CI before publication.
- The current canonical and slim registries pass byte-independent semantic comparison.
- No community artifact is required for the contract test to succeed.

## Increment 1 — Stable community data projections

**Outcome:** other projects can use crawl data without parsing the large internal index.

### Work

- [ ] Define versioned schemas for `community_packages.json`, `definitions.json` and
      `package_health.json`.
- [ ] Generate compact records for package identity, authorship, version, dates, apps,
      drivers, namespaces, links and crawl status.
- [ ] Include provenance and snapshot timestamps on every dataset.
- [ ] Mark observations such as HPM `LAN`/`Cloud` tags separately from reviewed facts.
- [ ] Validate deterministic ordering and reproducible output.
- [ ] Publish data dictionaries and small example records.

### Acceptance criteria

- New files are independently generated and deleting them does not affect the slim
  registry build.
- Schema-breaking changes require a new community schema version or filename.
- No private hub data is collected or published.

## Increment 2 — Public package explorer

**Outcome:** users can research HPM packages before installing them.

### Work

- [ ] Build a static site from the community projections.
- [ ] Search package, app, driver, author, namespace, category and tags.
- [ ] Filter by manifest health, documentation availability, release recency and observed
      LAN/cloud indicators.
- [ ] Add package detail pages with manifest, source, documentation and community links.
- [ ] Show application and driver definitions and their source URLs.
- [ ] Clearly label `HPM metadata`, `source observation`, `official documentation` and
      `reviewed conclusion`.
- [ ] Escape all remote content and prohibit remote HTML/script injection.
- [ ] Add accessible layouts for desktop and mobile.

### Acceptance criteria

- The site is a static consumer of new community datasets.
- A site build failure cannot block or modify the Automation Map artifact.
- Search results link back to their evidence.

## Increment 2A — Official and community catalogue ingestion

**Outcome:** the explorer covers known devices, community drivers and community apps that
cannot be discovered reliably from HPM alone.

### Sources

- Hubitat's official Compatible Devices catalogue: authority for devices Hubitat states
  work with built-in drivers.
- Hubitat Community Custom Device Drivers Wiki: community-maintained discovery evidence
  for devices and drivers outside the official catalogue.
- Hubitat Community Custom Apps Wiki: community-maintained discovery evidence for custom
  apps, including projects that predate HPM or are distributed manually.

### Work

- [ ] Add snapshot harvesters for all three sources and retain the raw source row or list
      item, source URL, section and snapshot date.
- [ ] Treat rendered page layout as untrusted and fail visibly when expected structure
      changes rather than silently producing an empty catalogue.
- [ ] Generate separate `official_devices.json`, `community_drivers.json` and
      `community_apps.json` projections with versioned schemas.
- [ ] Normalize manufacturer, model/product number, app name, driver name and category
      while preserving the original text.
- [ ] Resolve exact links from wiki entries to community topics, repositories and HPM
      packages where available.
- [ ] Compare wiki apps and drivers with HPM definitions to identify exact matches,
      manual-install-only projects, ambiguous matches and apparently missing projects.
- [ ] Preserve lifecycle words such as `obsolete`, `withdrawn`, `deprecated` and
      `superseded` as source observations and review flags.
- [ ] Track additions, removals and changed links between successful snapshots.
- [ ] Add device/app/driver lookup across all sources to the public explorer.
- [ ] Display source authority and evidence type beside every result.

### Evidence classifications

- `OFFICIAL_LISTED`: present in Hubitat's official compatible-device catalogue.
- `COMMUNITY_DRIVER_LISTED`: present in the Custom Device Drivers Wiki.
- `COMMUNITY_APP_LISTED`: present in the Custom Apps Wiki.
- `HPM_PACKAGE_AVAILABLE`: resolved to a currently indexed HPM package.
- `SOURCE_IDENTITY_MATCH`: app or driver identity confirmed from source definition.
- `POSSIBLE_MATCH`: conservative normalized or fuzzy suggestion requiring review.
- `LIFECYCLE_WARNING`: the source describes the project as obsolete, withdrawn,
  deprecated or superseded.

### Acceptance criteria

- Official and community claims are never collapsed into one generic `compatible` or
  `supported` status.
- A wiki listing is not presented as proof that a project is current, maintained,
  installable through HPM or architecturally understood.
- Absence from a wiki or HPM is not presented as proof that a project or device is invalid.
- Exact and possible matches are structurally and visually distinct.
- Remote forum content is escaped and no downloaded code is executed.
- These datasets and harvesters cannot write to the canonical or slim Automation Map
  registries.
- Failure of any catalogue harvester cannot block, replace or alter the Automation Map
  artifact.

## Increment 3 — Package health and breakage monitor

**Outcome:** users and maintainers can see factual installation and maintenance problems.

### Work

- [ ] Report repository, manifest, source, documentation and community-link reachability.
- [ ] Validate JSON structure and compare manifest identities with literal Groovy
      definitions where available.
- [ ] Distinguish newly broken, persistent, restored, HTTP-only and transient failures.
- [ ] Publish checks individually instead of producing an opaque quality score.
- [ ] Add a summary of newly introduced and resolved failures.
- [ ] Provide direct remediation evidence for package authors.

### Acceptance criteria

- A failed network request is reported as an observation, not proof of abandonment.
- Historical state is preserved sufficiently to distinguish transient from persistent
  failure.
- Health calculations consume crawl results but do not edit either registry.

## Increment 4 — App/driver identity resolver

**Outcome:** users can identify which HPM package contains code found on a hub.

### Work

- [ ] Search exact application and driver definition name plus namespace.
- [ ] Fall back to separately labelled, conservative fuzzy suggestions.
- [ ] Return the canonical package, manifest, author, documentation and confidence basis.
- [ ] Identify likely Hubitat built-ins separately from HPM packages.
- [ ] Explain ambiguous matches rather than selecting one silently.
- [ ] Provide a browser-only lookup that does not upload hub inventory.

### Acceptance criteria

- Exact and suggested results are visually and structurally distinct.
- Ambiguous identities include every credible match and supporting evidence.
- No device names, app instance names, settings or other household data are required.

## Increment 5 — New and updated package feed

**Outcome:** the community can discover ecosystem changes without monitoring repositories.

### Work

- [ ] Retain the prior successful snapshot for comparison.
- [ ] Detect added, removed, updated, broken and restored packages.
- [ ] Detect changed manifests, source locations and declared definitions.
- [ ] Publish a web changelog and Atom or RSS feed.
- [ ] Generate a weekly Markdown digest suitable for community posting.
- [ ] Link every change to the current package record and source evidence.

### Acceptance criteria

- A failed crawl never becomes the new comparison baseline.
- Cache age cannot suppress genuine upstream changes.
- Feed generation is independent of registry generation and publication.

## Increment 6 — Developer manifest validator

**Outcome:** authors can catch HPM packaging problems before submitting or releasing.

### Work

- [ ] Package validation as a documented command-line entry point.
- [ ] Add a reusable GitHub Action for package repositories.
- [ ] Validate repository entries, manifests, URLs, source availability and identity
      consistency.
- [ ] Emit GitHub annotations with exact files, fields and suggested corrections.
- [ ] Provide a preview of the package's community explorer record.
- [ ] Document which checks are errors, warnings and informational observations.

### Acceptance criteria

- Validation never executes downloaded code.
- A standalone package validation does not write canonical crawl or registry files.
- Existing HPM quirks are represented by fixtures to avoid unusably noisy reports.

## Increment 7 — Privacy-preserving recovery inventory

**Outcome:** users can map an old hub's code identities back to installation packages.

### Work

- [ ] Define a minimal input containing only app/driver definition names and namespaces.
- [ ] Perform matching in the browser against the definitions dataset.
- [ ] Return likely HPM packages, built-ins, ambiguous matches and unidentified code.
- [ ] Provide manifest and documentation links for rebuilding an installation.
- [ ] Explain that this is identity recovery, not configuration backup.

### Acceptance criteria

- Processing is local to the browser by default.
- The input excludes devices, rooms, rules, app instances, tokens and settings.
- Results distinguish exact evidence from suggestions.

## Increment 8 — Evidence-based local/cloud guide

**Outcome:** users can research network characteristics without overstating static analysis.

### Work

- [ ] Present HPM LAN/Cloud tags, observed external hosts, LAN primitives and official
      documentation as separate evidence types.
- [ ] Show reviewed Automation Map dependencies only as reviewed conclusions.
- [ ] Use language such as `observed`, `declared`, `documented` and `reviewed` consistently.
- [ ] Add filters for packages with LAN evidence, cloud evidence, both or insufficient
      evidence.
- [ ] Publish the method and known false-positive cases.

### Acceptance criteria

- `No evidence found` is never presented as `does not use the internet`.
- Observed URLs are not automatically described as runtime dependencies.
- Community views remain read-only consumers of the reviewed registry.

## Later opportunities

- [ ] Factual comparison pages for packages in the same product or protocol family.
- [ ] Opt-in notifications for selected authors, packages, categories or health changes.
- [ ] A documented read-only API if static datasets prove insufficient.
- [ ] Community-maintained corrections submitted as reviewed pull requests.
- [ ] Historical ecosystem analytics based on accumulated successful snapshots.

## Definition of done for every increment

- [ ] `automation-map-contract` passes.
- [ ] The slim registry path, schema, semantics and size limit are unchanged.
- [ ] Existing validation canaries pass.
- [ ] New public schemas and evidence language are documented.
- [ ] Remote content is treated as untrusted.
- [ ] Failure and rollback behavior is tested.
- [ ] Generated outputs are deterministic where source inputs are unchanged.
- [ ] The feature is usable without exposing household or hub configuration data.
