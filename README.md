# HPM Manifest Crawl

Execution repository for the Hubitat Package Manager ecosystem crawl. It builds an identity
index of every package published through HPM, then validates the Automation Map integration
registry against it.

## Why Automation Map needs this

[Automation Map](https://github.com/GordonThelander/hubitat-automation-map) can discover
the apps and devices installed on a hub, the roles devices play in each app, and many
relationships between automations. The hub cannot report what an integration depends on
**outside** the hub: a Hue bridge, vendor cloud, MQTT broker, local service or external API.

This repository maintains the shared knowledge that fills that gap. Its output lets
Automation Map answer operational questions that an internal app/device graph cannot:

- which automations stop working if a bridge, cloud service or broker fails;
- which integrations need internet access while running;
- which services are needed only for setup or authentication; and
- which installed apps share the same external dependency.

The data path is deliberately split across the two projects:

```text
HPM repositories, package source and Hubitat documentation
                         |
                         v
             identity index and evidence
                         |
                         v
          human-classified dependency registry
                         |
                         v
               generated slim registry
                         |
                         v
        Automation Map scan and dependency graph
```

Automation Map fetches
`hubitat_automation_map_app_integration_registry_slim.json` during a scan, matches its
known app types, and draws the resulting external systems as dependency nodes. User
declarations remain authoritative and override shared registry matches, because some
integrations can be configured for either local or cloud operation. A failed registry
fetch is non-fatal: the map still builds and uncovered app types remain visibly
unclassified.

The separation keeps the hub application small while this repository performs work that
does not belong on a hub: crawling hundreds of independently maintained repositories,
analysing source and documentation, retaining provenance, and producing validation
reports. Registry fixes also reach installations on their next scan without requiring a
new Automation Map release.

## What the pipeline does

1. Crawls the HPM master repository list, developer repositories and package manifests.
2. Builds an identity index of package, app, driver, namespace and source information.
3. Enriches that index with bounded observations from Groovy source and official Hubitat
   documentation.
4. Validates the curated registry for dead or over-broad match rules, near misses, schema
   defects, duplicate identifiers, overlaps and unrepresented packages.
5. Generates a compact runtime registry containing only fields Automation Map evaluates.

The canonical registry is intentionally richer than the runtime file: it retains status,
provenance, documentation and review evidence. The slim registry exists because fetching
and parsing the full registry exceeded reliable Hubitat execution limits.

## Coverage and remaining value

At the current committed snapshot the index contains **905 HPM packages**. The registry has
**101 entries**, of which **82 declare one or more dependencies**; **810 packages** are not
yet represented. See `registry_validation_report.md` for the generated, authoritative
counts as the ecosystem changes.

Coverage is therefore the main opportunity. `draft_candidates.py` turns likely integration
packages into review forms with identity and source evidence attached, but it deliberately
does not invent dependencies or runtime criticality. Expanding the reviewed entries grows
Automation Map from a hub relationship viewer into a more complete operational dependency
map.

## Trust boundaries and limitations

- HPM names, categories and tags establish identity and provide leads; they do not prove
  architecture.
- A URL, LAN primitive or HTTP call in source is evidence, not automatically a dependency.
  Source also contains icons, documentation links and optional endpoints.
- `runtimeCriticality` requires human judgement. `RUNTIME` means the integration stops
  working without the dependency; `SETUP_ONLY` means existing operation can continue.
- Absence from HPM does not make a registry entry invalid. Hubitat built-ins are not
  published there, and unsupported or unavailable repositories can also be absent.
- Automation Map matches only identity fields available from a hub scan. Driver-only,
  per-instance and user-mapped relationships may be valid but not runtime-evaluable.
- Broad `contains` match rules can create false positives and should be treated as review
  targets even when they currently validate.

The governing rule is simple: automate acquisition and validation, but do not promote an
observation into an architectural conclusion without review. An unclassified integration
is more honest than a confidently wrong dependency.

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
| `community_packages.json` | stable public package identity, metadata, links and component references |
| `definitions.json` | app and driver manifest/source identities linked to packages |
| `package_health.json` | factual manifest, source, identity, link and transport checks |
| `health_monitor.json` | historical package states, transitions and remediation evidence |
| `health_summary.md` | newly introduced and resolved failure summary for maintainers |
| `link_reachability.json` | bounded documentation/community URL observations |
| `site/index.html` | portable landing page for the complete community utility suite |
| `site/package-explorer/` | unified search across HPM, official devices and community app/driver catalogues |
| `site/taxonomy/` | authoritative HPM categories, tags, package usage metrics and taxonomy cloud |
| `hpm_taxonomy.json` | versioned category/tag vocabulary, provenance and package-level usage metrics |
| `site/feature-tracker/` | searchable staff-authored release evidence and accessible release timeline |
| `hubitat_release_features.json` | versioned release builds, classified changes, linked details and retained history |
| `site/about/` | project context, source provenance, operational health and system schematic |
| `site_status.json` | versioned source inventory, retained crawl status and protected-contract disclosure |
| `site/identity-resolver/` | browser-only app/driver-to-package identity lookup |
| `site/start-here/` | beginner orientation, question-based tool routing and evidence glossary |
| `site/recovery-inventory/` | browser-only bulk recovery from minimal app/driver identities |
| `site/network-guide/` | declared, observed, documented and reviewed LAN/cloud evidence |
| `network_evidence.json` | standalone package network-evidence projection |
| `site/contributors/` | top HPM author portfolios and evidence-backed activity timelines |
| `contributor_activity.json` | versioned contributor rankings, submissions and retained crawl events |
| `package_changes.json` | retained added, removed, updated, broken and restored package events |
| `package_changes.atom` | subscribable package-change feed |
| `package_changes_weekly.md` | seven-day community-post digest |
| `site/package-feed/` | human-readable static package changelog |
| `site/manifest-validator/` | browser-local HPM checks, submission readiness and catalogue-entry generation |
| `reviewed_community_projects.json` | source-confirmed manual-install projects absent from HPM/wiki snapshots |
| `official_devices.json` | Hubitat's official compatible-device catalogue with raw source fields |
| `community_drivers.json` | Custom Device Drivers Wiki entries and exact HPM evidence matches |
| `community_apps.json` | Custom Apps Wiki entries, lifecycle wording and exact HPM evidence matches |

## Community Utilities Website

The `site/` directory is a static, experimental website containing a beginner Start Here
guide, the Unified Package Explorer, HPM Taxonomy, Feature Tracker, Identity Resolver, Manifest Validator, Network
Guide, Package Feed, Recovery Inventory, Contributor Activity and About views. It is community-developed and
is not official or endorsed Hubitat software.

The independent `.github/workflows/pages.yml` workflow validates and uploads only `site/`
when `community-utility-exploration` is pushed or the workflow is dispatched manually. It
does not invoke the HPM crawl. Once GitHub Pages is configured to use **GitHub Actions** as
its source and a deployment succeeds, the expected project URL is:

`https://gordonthelander.github.io/HPM_Manifest_Crawl/`

That address is an expected URL pattern, not a claim that Pages is currently enabled.
Repository administrators must select **Settings → Pages → Build and deployment → Source:
GitHub Actions** before the first deployment can publish.

The `pages.yml` workflow uploads only the contents of `site/`, so `site/` becomes the
deployment root: individual views deploy one path segment shorter than their local path,
e.g. `site/package-explorer/` locally becomes
`https://gordonthelander.github.io/HPM_Manifest_Crawl/package-explorer/` once deployed.

Preview the deployed path structure locally from the repository root:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000/site/` and drop the `/site` segment to read each link as
it will resolve once deployed. Run `python check_pages_site.py` to verify required files
and internal relative links before deployment.

Every published page includes the same Cloudflare Web Analytics beacon for aggregate
visit and performance reporting. The token is a public site identifier embedded in the
HTML, not an API credential. Analytics are independent of the crawl, generated datasets
and Automation Map registries.

The generated datasets remain evidence-oriented. The website does not certify packages,
score security, imply trust or endorse third-party code. URLs are observations rather than
automatic dependencies; failed links do not prove abandonment; missing metadata does not
automatically constitute a defect.

The three community datasets use their own versioned schemas and do not feed Automation
Map. See [`docs/COMMUNITY_DATASETS.md`](docs/COMMUNITY_DATASETS.md) for the data dictionary,
examples and compatibility policy.

See [`docs/CATALOGUE_DATASETS.md`](docs/CATALOGUE_DATASETS.md) for the distinct authority,
provenance and matching rules applied to official and community catalogue sources.

See [`docs/PACKAGE_EXPLORER.md`](docs/PACKAGE_EXPLORER.md) for the unified explorer schema,
search scope, evidence boundaries and browser safety model.

See [`docs/HPM_TAXONOMY.md`](docs/HPM_TAXONOMY.md) for authoritative settings ingestion,
fallback behaviour, counting rules and the taxonomy-cloud accessibility model.

See [`docs/RELEASE_FEATURE_TRACKER.md`](docs/RELEASE_FEATURE_TRACKER.md) for release-note
harvesting, evidence classifications, linked-detail boundaries, history and timeline data.

See [`docs/ABOUT_AND_PROVENANCE.md`](docs/ABOUT_AND_PROVENANCE.md) for source-status
semantics, last-successful-crawl provenance, failure behaviour and Automation Map isolation.

See [`docs/HEALTH_MONITOR.md`](docs/HEALTH_MONITOR.md) for the evidence-first health
history, transition meanings, and author remediation guidance.

See [`docs/IDENTITY_RESOLVER.md`](docs/IDENTITY_RESOLVER.md) for exact, ambiguous,
built-in, and conservative suggested identity matching.

See [`docs/PACKAGE_CHANGE_FEED.md`](docs/PACKAGE_CHANGE_FEED.md) for comparison-baseline
safety, change labels, feed formats, and local preview instructions.

See [`docs/CONTRIBUTOR_ACTIVITY.md`](docs/CONTRIBUTOR_ACTIVITY.md) for contributor identity,
ranking, alias handling, observed activity and publisher-date semantics.

See [`docs/AUTOMATION_MAP_SITE_INTEGRATION.md`](docs/AUTOMATION_MAP_SITE_INTEGRATION.md) for
optional external linking from Automation Map without introducing a runtime dependency.

See [`docs/MANIFEST_VALIDATOR.md`](docs/MANIFEST_VALIDATOR.md) for browser, command-line
and reusable GitHub Action validation with documented severity meanings.

## Evidence discipline

The crawl separates **observable facts** from **architectural conclusions**. A hostname, a
LAN primitive, a `httpGet` call or a documentation sentence is recorded as evidence with its
line number. None of it is automatically converted into a dependency.

That restraint is load-bearing rather than fussy. A worked example: for LIFX Light Manager
the source pass records five literal URLs, of which only `api.lifx.com` is a real endpoint.
The others are two `iconUrl` declarations and a help-text link. An automated rule that
promoted URLs to dependencies would be wrong four times out of five, and confidently so.

## Registry versioning

The pipeline reads the stable filename `hubitat_automation_map_app_integration_registry.json`
and takes the version from that file's own `schemaVersion` field. Versioned copies such as
`..._v0.3.json` are kept as historical snapshots and are not referenced by any code, so a
version bump no longer requires touching scripts or the workflow.

