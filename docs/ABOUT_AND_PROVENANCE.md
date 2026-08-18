# About, provenance and site status

The About page explains who maintains Community Utilities, where its public evidence
comes from, what each acquisition produces and how the static site remains independent
from Automation Map.

## Status semantics

- `HEALTHY` means the retained snapshot validates.
- `DEGRADED` means the snapshot remains usable but includes explicit acquisition gaps.
- `STALE` means the latest retained successful observation is older than its policy.
- `UNAVAILABLE` means no valid retained snapshot is present.
- `MANUALLY_REVIEWED` means a maintainer explicitly confirmed public identity evidence.

These are operational observations. They do not score software quality, maintenance,
security, safety or trust. Unknown acquisition times remain null and appear as not
recorded rather than being inferred from filesystem modification times.

## Last successful crawl

`lastSuccessfulHpmCrawl` is copied only from the validated, promoted
`hpm_package_index.json` snapshot. It is not replaced with the About build time, Pages
deployment time, current browser time or a file timestamp. Optional repository and
source failures remain visible as degraded facts without converting a successful crawl
into a failure.

## Build and failure behaviour

`build_site_status.py` reads the retained validated datasets and both Automation Map
registries. It writes only:

- `site_status.json`
- `site/about/data/site_status.json`
- `site/about/data/site_status.js`

All inputs must exist and the complete source inventory must validate before outputs are
atomically replaced. A failed build therefore leaves the last successful provenance
record intact. Remote labels and facts are rendered with `textContent`.

Automation Map appears as a separate protected branch in the system schematic. The
About builder reads its schema and entry counts for disclosure but cannot write either
registry, and neither the site nor its general community projections are required for
Automation Map operation.
