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

## Increment 0 - Freeze and test the Automation Map contract

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

## Increment 1 - Stable community data projections

**Outcome:** other projects can use crawl data without parsing the large internal index.

### Work

- [x] Define versioned schemas for `community_packages.json`, `definitions.json` and
      `package_health.json`.
- [x] Generate compact records for package identity, authorship, version, dates, apps,
      drivers, namespaces, links and crawl status.
- [x] Include provenance and snapshot timestamps on every dataset.
- [x] Mark observations such as HPM `LAN`/`Cloud` tags separately from reviewed facts.
- [x] Validate deterministic ordering and reproducible output.
- [x] Publish data dictionaries and small example records.

### Acceptance criteria

- New files are independently generated and deleting them does not affect the slim
  registry build.
- Schema-breaking changes require a new community schema version or filename.
- No private hub data is collected or published.

## Increment 2 - Public package explorer

**Outcome:** users can research HPM packages before installing them.

### Work

- [x] Build a static site from the community projections.
- [x] Search package, app, driver, author, namespace, category and tags.
- [x] Filter by manifest health, documentation availability, release recency and observed
      LAN/cloud indicators.
- [x] Add expandable package detail views with manifest, source, documentation and community links.
- [x] Show application and driver definitions and their source URLs.
- [x] Clearly label `HPM metadata`, `source observation`, `official documentation` and
      `reviewed conclusion`.
- [x] Escape all remote content and prohibit remote HTML/script injection.
- [x] Add accessible layouts for desktop and mobile.

### Acceptance criteria

- The site is a static consumer of new community datasets.
- A site build failure cannot block or modify the Automation Map artifact.
- Search results link back to their evidence.

## Increment 2A - Official and community catalogue ingestion

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

- [x] Add snapshot harvesters for all three sources and retain the raw source row or list
      item, source URL, section and snapshot date.
- [x] Treat rendered page layout as untrusted and fail visibly when expected structure
      changes rather than silently producing an empty catalogue.
- [x] Generate separate `official_devices.json`, `community_drivers.json` and
      `community_apps.json` projections with versioned schemas.
- [x] Normalize manufacturer, model/product number, app name, driver name and category
      while preserving the original text.
- [x] Resolve exact links from wiki entries to community topics, repositories and HPM
      packages where available.
- [x] Compare wiki apps and drivers with HPM definitions to identify exact matches,
      manual-install-only projects, ambiguous matches and apparently missing projects.
- [x] Preserve lifecycle words such as `obsolete`, `withdrawn`, `deprecated` and
      `superseded` as source observations and review flags.
- [x] Track additions, removals and changed links between successful snapshots.
- [x] Add device/app/driver lookup across all sources to the public explorer.
- [x] Display source authority and evidence type in every generated result.

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

## Increment 3 - Package health and breakage monitor

**Outcome:** users and maintainers can see factual installation and maintenance problems.

### Work

- [x] Report repository, manifest, source, documentation and community-link reachability.
- [x] Validate JSON structure and compare manifest identities with literal Groovy
      definitions where available.
- [x] Distinguish newly broken, persistent, restored, HTTP-only and transient failures.
- [x] Publish checks individually instead of producing an opaque quality score.
- [x] Add a summary of newly introduced and resolved failures.
- [x] Provide direct remediation evidence for package authors.

Repository manifests, package manifests, and component source use the existing crawl
observations. Declared documentation and community URLs use a separate bounded public-link
probe; declaration presence and measured reachability remain separate evidence.

### Acceptance criteria

- A failed network request is reported as an observation, not proof of abandonment.
- Historical state is preserved sufficiently to distinguish transient from persistent
  failure.
- Health calculations consume crawl results but do not edit either registry.

### Implementation status

- [x] A failed request remains an observation and transient failures are labelled.
- [x] Consecutive successful snapshots distinguish new, persistent, and restored states.
- [x] Health generators have no Automation Map registry output path.

## Increment 4 - App/driver identity resolver

**Outcome:** users can identify which HPM package contains code found on a hub.

### Work

- [x] Search exact application and driver definition name plus namespace.
- [x] Search by namespace alone with exact and separately labelled partial results.
- [x] Search by author alone or combine author with name, namespace, and type filters.
- [x] Group every HPM result path by package - including combined filters - and distinguish apps from drivers with
      accessible text badges plus green/blue visual treatment.
- [x] Fall back to separately labelled, conservative fuzzy suggestions.
- [x] Return the canonical package, manifest, author, documentation and confidence basis.
- [x] Identify likely Hubitat built-ins separately from HPM packages.
- [x] Explain ambiguous matches rather than selecting one silently.
- [x] Provide a browser-only lookup that does not upload hub inventory.

### Acceptance criteria

- Exact and suggested results are visually and structurally distinct.
- Ambiguous identities include every credible match and supporting evidence.
- No device names, app instance names, settings or other household data are required.

### Implementation status

- [x] Exact, built-in and suggested results are structurally and visually distinct.
- [x] Ambiguous identities retain every exact HPM and documented built-in candidate.
- [x] Lookup requires only definition identity and executes entirely in the browser.
- [x] Source-reviewed manual-install projects remain distinct from HPM packages and can
      supplement incomplete community wiki snapshots.
- [x] Custom Apps Wiki records are searchable as lower-confidence discovery evidence and
      never promoted to source-confirmed identities automatically.

## Increment 5 - New and updated package feed

**Outcome:** the community can discover ecosystem changes without monitoring repositories.

### Work

- [x] Retain the prior successful snapshot for comparison.
- [x] Detect added, removed, updated, broken and restored packages.
- [x] Detect changed manifests, source locations and declared definitions.
- [x] Publish a web changelog and Atom feed.
- [x] Generate a weekly Markdown digest suitable for community posting.
- [x] Link every change to the current package record and source evidence.

### Acceptance criteria

- A failed crawl never becomes the new comparison baseline.
- Cache age cannot suppress genuine upstream changes.
- Feed generation is independent of registry generation and publication.

### Implementation status

- [x] The initial run establishes a quiet baseline rather than reporting the
      existing catalogue as newly added.
- [x] Input agreement, successful source completion, non-empty package data and
      referential integrity are required before baseline promotion.
- [x] Feed outputs are written atomically and the successful comparison state is
      promoted last.
- [x] Cache timestamps are excluded from package fingerprints.
- [x] Feed generation is a non-blocking publication step and never targets an
      Automation Map registry.
- [x] Seed the public view from completed historical Git crawl snapshots so the
      first release contains real evidence-backed changes.
- [x] Render human dates, summary counts, search, change filters, labelled
      evidence and the weekly digest directly in the changelog.
- [x] Keep JSON, Atom and Markdown as secondary data/subscription options rather
      than the primary user experience.

## Increment 6 - Developer manifest validator

**Outcome:** authors can catch HPM packaging problems before submitting or releasing.

### Work

- [x] Align every community site view with Hubitat's public-site visual language through
      a shared theme: Mulish/Roboto typography, lime action colours, neutral surfaces and
      rounded controls.

- [x] Package validation as a documented command-line entry point.
- [x] Add a reusable GitHub Action for package repositories.
- [x] Validate repository entries, manifests, URLs, source availability and identity
      consistency.
- [x] Emit GitHub annotations with exact files, fields and suggested corrections.
- [x] Provide a preview of the package's community explorer record.
- [x] Document which checks are errors, warnings and informational observations.
- [x] Enforce HPM's mutually exclusive package-level or per-component versioning.
- [x] Add public-submission readiness, repository-entry generation, official tag
      guidance and a deliberate pull-request checklist.
- [x] Synchronise valid repository categories and tags from HPM's authoritative
      `HubitatCommunity/hubitat-packagerepositories` `settings.json` during the build.
- [x] Validate against the current 50-tag set, including `Cameras`, `Matter`, `MQTT`,
      `Relays` and `Tasmota`, while retaining a tested last-known-good fallback for
      offline or failed upstream fetches.
- [x] Show the taxonomy source, retrieval time and whether live or fallback settings
      were used, and report upstream additions or removals as a reviewable dataset
      change.
- [x] Publish taxonomy metrics for every valid category and tag: unique package count,
      percentage of current HPM packages, rank and unused status.
- [x] Add an accessible taxonomy cloud that sizes tags by unique package usage, displays
      exact counts and percentages, and links each term to the corresponding filtered
      Package Explorer results.
- [x] Provide current category/tag and app/driver package-composition views.
- [ ] Add current-versus-retained-history taxonomy views when sufficient successful
      snapshots exist.

### Acceptance criteria

- Validation never executes downloaded code.
- A standalone package validation does not write canonical crawl or registry files.
- Existing HPM quirks are represented by fixtures to avoid unusably noisy reports.
- Taxonomy usage counts each current HPM package at most once per declared tag; multiple
  definitions within a package cannot inflate the metric.
- The cloud is supplementary to a sortable table and never relies on font size or colour
  alone to communicate rank or usage.

### Implementation status

- [x] Browser validation remains local and renders all manifest values as text.
- [x] Network checks reject non-public targets, bound response size and never execute
      fetched source.
- [x] Legacy missing identity fields and HTTP-only declarations are visible warnings,
      while missing source locations and literal identity mismatches are errors.
- [x] Tests prove the validator contains no canonical crawl or Automation Map output
      path.
- [x] The CLI and browser validator reject unknown repository categories and tags using
      the same checked last-known-good taxonomy; the browser performs no live request.
- [x] `hpm_taxonomy.json` records source mode, retrieval time, source fingerprint and
      reviewable additions or removals from the previous successful settings snapshot.
- [x] The Taxonomy view provides a usage cloud, exact sortable table, composition switch
      and exact-tag links into Package Explorer.

## Increment 7 - Privacy-preserving recovery inventory

**Outcome:** users can map an old hub's code identities back to installation packages.

### Work

- [x] Define a minimal input containing only app/driver definition names and namespaces.
- [x] Perform matching in the browser against the definitions dataset.
- [x] Return likely HPM packages, built-ins, ambiguous matches and unidentified code.
- [x] Provide manifest and documentation links for rebuilding an installation.
- [x] Explain that this is identity recovery, not configuration backup.

### Acceptance criteria

- Processing is local to the browser by default.
- The input excludes devices, rooms, rules, app instances, tokens and settings.
- Results distinguish exact evidence from suggestions.

## Increment 8 - Evidence-based local/cloud guide

**Outcome:** users can research network characteristics without overstating static analysis.

### Work

- [x] Present HPM LAN/Cloud tags, observed external hosts, LAN primitives and official
      documentation as separate evidence types.
- [x] Show reviewed Automation Map dependencies only as reviewed conclusions.
- [x] Use language such as `observed`, `declared`, `documented` and `reviewed` consistently.
- [x] Add filters for packages with LAN evidence, cloud evidence, both or insufficient
      evidence.
- [x] Publish the method and known false-positive cases.

### Acceptance criteria

- `No evidence found` is never presented as `does not use the internet`.
- Observed URLs are not automatically described as runtime dependencies.
- Community views remain read-only consumers of the reviewed registry.

## Increment 9 - Contributor activity view

**Outcome:** the community can see who is maintaining the broadest HPM package
portfolios and how those catalogued contributions change over time.

### Work

- [x] Define contributor as the declared HPM package author, distinct from a Git
      committer, repository owner or Hubitat Community account.
- [x] Rank the top 20 contributors by unique current HPM packages.
- [x] Show package, app and driver totals with a drill-down to each contribution.
- [x] Plot evidence-backed additions and updates over retained crawl history.
- [x] Distinguish observed catalogue history from publisher-declared release dates.
- [x] Provide app/driver, category and time-period filters.

### Acceptance criteria

- The view never presents package counts as code-commit or community-activity
  rankings.
- Contributor aliases are not merged without explicit evidence.
- The contributor dataset and site remain independent of Automation Map registry
  generation and publication.

### Implementation status

- [x] Author strings are trimmed but otherwise kept exact; aliases are not merged.
- [x] Current rankings consume community packages and definitions only.
- [x] Timeline events link to retained successful-crawl evidence when available.
- [x] The non-blocking workflow step cannot write either Automation Map registry.

## Increment 10 - GitHub Pages community utilities site

**Outcome:** Hubitat staff and community members can use and share the static utility
suite through a polished, portable GitHub Pages project site, while the site remains an
experimental community resource rather than official or endorsed Hubitat software.

### Work

- [x] Create `site/index.html` as the **Hubitat Community Utilities** landing page with
      restrained, accessible desktop/mobile design and relative links to every current
      utility: Identity Resolver, Manifest Validator, Network Guide, Package Feed,
      Recovery Inventory and Contributor Activity.
- [x] Add lightweight shared navigation across the landing page and existing utilities
      for Home, each utility and the GitHub repository; reuse `site/shared/` assets where
      practical and introduce no web framework.
- [x] Audit internal links, scripts, styles, generated data and any `fetch()` calls so
      every utility works locally, below the `/HPM_Manifest_Crawl/` GitHub Pages project
      path and if moved to another hostname.
- [x] Ensure individual pages remain usable enough to explain failure when an optional
      generated dataset is absent or cannot load.
- [x] Add an independent `.github/workflows/pages.yml` triggered by pushes to
      `community-utility-exploration` and `workflow_dispatch`, using the supported GitHub
      Pages artifact/deployment actions and minimum required permissions.
- [x] Keep Pages deployment independent of the HPM crawl workflow so deployment alone
      never starts the expensive crawl or changes its schedule and generation behaviour.
- [x] Add a lightweight Pages readiness check for `site/index.html`, required utility
      directories/static files and resolvable local navigation targets.
- [x] Document the Community Utilities Website, local preview, deployment mechanism,
      experimental status, evidence limitations and expected URL pattern
      `https://gordonthelander.github.io/HPM_Manifest_Crawl/` without claiming the site
      is active before repository Pages configuration and deployment succeed.
- [x] Add `docs/AUTOMATION_MAP_SITE_INTEGRATION.md` describing an optional external link
      from Automation Map and possible future contextual links to Identity Resolver,
      Network Guide and Package Feed.
- [x] Recommend opening the website externally rather than embedding it in Hubitat, and
      do not modify the Automation Map repository or make normal map operation depend on
      the website.

### Acceptance criteria

- Every utility loads through relative paths both locally and from a GitHub Pages project
  subpath; internal-link validation fails deployment when a required target is missing.
- The landing page and common navigation use semantic HTML, reasonable contrast, mobile
  layouts, restrained motion and no new external JavaScript framework.
- The site states that it is experimental and community-developed and does not imply
  Hubitat endorsement, package certification, security scoring or trust ranking.
- Evidence wording remains disciplined: URLs are observations rather than automatic
  dependencies, failed links do not prove abandonment and missing metadata does not
  automatically constitute a defect.
- Pages deployment publishes only `site/`, requests minimum permissions and can run
  without invoking or changing the crawl workflow.
- All existing dataset/build checks, internal-link checks and `automation-map-contract`
  pass before deployment; generated crawler outputs are unchanged unless a Pages path
  correction genuinely requires regeneration.
- Automation Map's slim registry path, schema, matcher semantics, size limit and runtime
  independence remain unchanged.
- Work remains on `community-utility-exploration`; this increment does not merge or
  modify `main`.

### Implementation status

- [x] Package Feed copies its JSON, Atom and Markdown downloads inside `site/` so the
      Pages artifact has no links back outside its published root.
- [x] Every utility uses shared responsive navigation and relative project-path-safe URLs.
- [x] Dataset-backed views retain explanatory content and show a visible unavailable-data
      state rather than failing silently.
- [x] The Pages workflow follows GitHub's supported checkout/configure/upload/deploy action
      pattern and requests deployment permissions only in the deploy job.
- [x] Repository administrators still need to select GitHub Actions as the Pages source;
      the expected URL is not described as active before a successful deployment.

## Increment 11 - Hubitat platform feature tracker

**Outcome:** the community can discover valuable Hubitat platform, app, driver and
device features without having to read every release-note topic and linked detail post.

### Work

- [x] Harvest release topics from Hubitat's public Release Notes category, retaining the
      topic URL, first-post URL, platform version, build number, previous-version range,
      publication time and last-observed edit time.
- [x] Parse release-note sections into explicit evidence types such as platform change,
      new app, app change, new driver, driver feature, compatible device, bug fix and
      known issue without treating every bullet as a new feature.
- [x] Follow first-party `community.hubitat.com` detail links embedded in the release
      post body, including generic `More` and `see more` links, and attach their expanded
      guidance to the originating release item.
- [x] Exclude related-topic widgets, replies and arbitrary external links from automatic
      feature evidence unless they are separately reviewed.
- [x] Publish a versioned `hubitat_release_features.json` dataset with stable item IDs,
      source excerpts or faithful summaries, evidence URLs, classification, affected
      subsystem, availability state and confidence.
- [x] Add a searchable Feature Tracker page with filters for release, date, subsystem,
      evidence type, device/protocol and beta or experimental status.
- [x] Provide a concise "what is newly possible?" view separately from fixes and
      maintenance, while preserving links to the complete official text.
- [x] Detect additions, edits, reclassifications and removals within retained successful
      snapshots so corrections to an existing release topic remain visible.
- [x] Cross-link named official apps, drivers and compatible devices to Package Explorer
      records only when the identity evidence is unambiguous.
- [x] Add the tracker to shared navigation, Pages readiness checks, site documentation
      and non-blocking publication tests.
- [x] Add an accessible SVG timeline of individual release builds over time, with change
      volume, new-capability and bug-fix counts available in a complete data table.

### Implementation status

- [x] The first retained snapshot covers 32 release topics, 341 individual builds and
      3,923 source-linked changes from 2019 through 2026.
- [x] 61 embedded first-party detail topics were expanded; two unavailable historical
      detail URL is disclosed without invalidating its originating release evidence.
- [x] The initial history is a quiet baseline so pre-publication parser corrections do
      not appear as ecosystem changes.

### Acceptance criteria

- Every published feature or change links to the exact Hubitat Community source post.
- Staff authorship, topic category and link provenance are recorded as evidence, not as
  a claim that this community site is official or endorsed by Hubitat.
- Linked detail pages remain subordinate to their release item and cannot silently
  replace or contradict the release post.
- A failed or incomplete forum harvest never replaces the last successful dataset.
- Parsing remains deterministic for unchanged source snapshots and flags uncertain
  headings or classifications for review.
- Beta, experimental, model-specific and safety-sensitive qualifications remain visible.
- The feature dataset and page cannot write either Automation Map registry and are never
  required for Automation Map matching, rendering, export or normal operation.

### Initial evidence examples

- Release 2.5.1 links short Z-Wave entries to detailed pages for the Z-Wave JS update,
  automatic device firmware discovery and the active Link Reliability Test, including
  its safety warning.
- Release 2.5.0 links to expanded guidance for the Z-Wave JS Node State UI, SVG chart
  endpoints, Ring Integration beta and Comfort Engine beta.

## Increment 12 - About, provenance and site-status page

**Outcome:** visitors can understand who maintains the project, where every published
dataset comes from, how recently the evidence was collected, whether a source is healthy
and how raw public evidence becomes the static Community Utilities site.

### Work

- [x] Add a portable `site/about/` page explaining the project's community-developed,
      experimental status and linking prominently to the
      `community-utility-exploration` repository branch.
- [x] Generate a versioned site-status dataset rather than hard-coding volatile crawl
      facts into HTML.
- [x] Inventory every current upstream and reviewed input, including the HPM master
      repository list, developer repository files, package manifests, public Groovy
      sources, authoritative HPM settings, official compatible-device catalogue,
      Hubitat documentation, community app and driver wikis, reviewed manual projects
      and the release-notes source when Increment 11 is available.
- [x] For each source, show its authority label, role, canonical URL, acquisition method,
      last attempt, last success, most recent retained snapshot, records produced and
      current health evidence.
- [x] Define source states as factual operational observations such as `HEALTHY`,
      `DEGRADED`, `STALE`, `UNAVAILABLE` and `MANUALLY_REVIEWED`; do not turn them into a
      trust, quality, maintenance or security score.
- [x] Display the last successful HPM crawl time from the promoted successful crawl
      snapshot, explicitly distinguishing it from the page build and Pages deployment
      times.
- [x] Explain fallback use, partial optional-source failures and retained last-good data
      without presenting an unavailable optional source as a failed production crawl.
- [x] Add an accessible schematic showing the flow from bounded public-source
      acquisition, through validation and independent projections, to the static site.
- [x] Give the schematic a complete text alternative and show the frozen Automation Map
      registry path as a separate protected contract, not as an output of general
      community evidence aggregation.
- [x] Add source-status fixtures, deterministic generation tests, stale/fallback cases,
      internal-link checks and responsive visual coverage.
- [x] Add `About` to shared navigation on every page only after the page and status data
      pass readiness checks.
- [x] Once `About` is live in shared navigation, remove the top-level `GitHub` navigation
      item from every page; retain the repository link prominently on the About page.

### Implementation status

- [x] Ten current public or reviewed source groups expose authority, role, acquisition,
      retained-snapshot facts, record counts, outputs and direct provenance links.
- [x] The promoted successful HPM crawl is `2026-08-17T22:40:04Z`; About generation
      and Pages deployment times are explicitly separate.
- [x] Current status reports six healthy retained snapshots, three degraded sources and
      one manually reviewed source without converting those facts into trust scores.
- [x] Unknown catalogue acquisition times remain visibly unrecorded rather than being
      inferred from filesystem timestamps.

### Acceptance criteria

- Every listed data source has a direct provenance link and a plain-language explanation
  of what the project reads from it.
- The last successful crawl time comes from a validated promoted snapshot and is never
  substituted with the current browser time, file modification time or deployment time.
- Source status includes the observation time and supporting fact; green or red colour is
  never the only status signal.
- A failed source refresh cannot erase the last successful provenance or crawl record.
- The schematic works without an external diagramming library and remains understandable
  in text-only and narrow-screen presentations.
- Removing the top-level repository link is atomic with adding the verified About link,
  so the repository is never undiscoverable from the site.
- Remote source labels and status messages are rendered as text and cannot inject HTML.
- The About builder and dataset cannot write either Automation Map registry and About is
  never required for Automation Map operation.
- Pages readiness, all dataset checks and `automation-map-contract` pass before the
  navigation change is published.

## Increment 13 - New-user onboarding and results guidance

**Outcome:** casual Hubitat users can understand what the Community Utilities site does,
start with the right tool and interpret evidence without needing to understand crawl or
data-pipeline terminology.

### Work

- [x] Add a concise Quick Start entry point to the landing page and shared navigation.
- [x] Guide visitors from common questions, such as finding a package, checking a
      manifest, researching device support or reviewing recent Hubitat features, to the
      appropriate utility.
- [x] Add a plain-language "How to read these results" guide covering snapshots,
      evidence labels, source health, exact matches, suggestions and unavailable data.
- [x] Provide contextual help beside unfamiliar terms without hiding qualifications or
      replacing the detailed methodology.
- [x] Use progressive disclosure so experienced users can continue directly to each
      utility without an additional required step.
- [x] Test the guide on narrow screens, with keyboard navigation and with assistive
      technology labels.

### Implementation status

- [x] `site/start-here/` introduces the platform, built-ins, community software and HPM
      before presenting six question-based routes into the utility suite.
- [x] Evidence guidance explains exact matches, source authority, snapshots, operational
      health, missing results and browser-local privacy in plain language.
- [x] A compact glossary defines app, driver, package, manifest, namespace and snapshot.
- [x] The landing page and every shared navigation bar expose Start Here without making
      it a required step for experienced visitors.
- [x] Pages readiness and focused tests cover portable links, evidence limitations,
      responsive layout and reduced-motion behaviour.

### Acceptance criteria

- A first-time visitor can identify the correct utility and understand the result labels
  without reading project documentation or knowing what a crawl snapshot is.
- Guidance uses concrete Hubitat examples and defines technical terms when first used.
- Tooltips are never the only place essential meaning is provided and remain accessible
  by keyboard, touch and screen reader.
- Onboarding does not weaken evidence wording, imply package certification or conceal
  degraded and unavailable source states.
- The guide is static, introduces no household-data collection and does not modify or
  depend on either Automation Map registry.

## Increment 14 - Merge into main and unify the daily schedule

**Outcome:** the crawl, every community-dataset builder and the Pages deployment run from
one branch on one daily schedule, instead of two branches that only shared data when
someone merged them by hand.

### Why this was needed

GitHub Actions only reads a workflow's `schedule:` trigger from the repository's default
branch. `main` stayed the default branch throughout Increments 0-13, so the schedule that
appeared to govern the community pipeline was never actually reachable: `main` carried its
own older, narrower `hpm-crawl.yml` with no site builders and no `automation-map-contract`
job, and `community-utility-exploration`'s `crawl` job carried `if: github.ref ==
'refs/heads/main'`, so it skipped on every push to that branch. In practice, none of the
site's ten datasets had ever refreshed on a schedule; each reflected whatever was last
generated and committed locally.

### Work

- [x] Merge `community-utility-exploration` into `main` through a reviewed pull request,
      gated on the existing `automation-map-contract` job passing against the merged
      state.
- [x] Move `pages.yml`'s deploy trigger from `community-utility-exploration` to `main`.
- [x] Move `hpm-crawl.yml`'s schedule to `0 0 * * *` (00:00 GMT), which only takes effect
      once `main` carries this workflow file.
- [x] Add an explicit `deploy-pages` job that fires `pages.yml` via `workflow_dispatch`
      once a crawl run actually commits new output, since a push made with the default
      `GITHUB_TOKEN` does not trigger other workflows on its own.
- [x] Update every hardcoded `community-utility-exploration` reference (README, the
      manifest-validator GitHub Action example, the About page's repository link,
      `build_site_status.py`, `docs/schemas/hpm-taxonomy.schema.json`) to point at `main`.

### Acceptance criteria

- `automation-map-contract` passes against the merged state before the pull request
  merges.
- Automation Map's published URL, schema, matcher semantics and size limit are unchanged.
- The `crawl` job's `if: github.ref == 'refs/heads/main'` gate is untouched, so a branch
  or pull-request build still cannot write registry or dataset output.
- The site deploys automatically after a crawl run that changes anything, without a human
  merging branches by hand.

## Later opportunities

- [ ] Build a versioned `official_apps.json` catalogue of Hubitat built-in Apps,
      Integrations and Automations from the official Apps Documentation index. Preserve
      current and retired status, documentation URLs, category and documented aliases;
      compare these records with separately labelled, firmware/model-specific hub UI
      observations to expose coverage and naming gaps. Feed Package Explorer and Identity
      Resolver without automatically adding, changing or broadening any reviewed
      Automation Map registry entry.
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
