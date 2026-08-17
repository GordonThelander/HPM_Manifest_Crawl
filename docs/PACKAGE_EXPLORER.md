# Unified Package Explorer

The Unified Package Explorer is a static, browser-only search view over four separately
labelled public catalogues:

- HPM packages and their app and driver definitions.
- Hubitat's official compatible-device catalogue.
- The Hubitat Community Custom Device Drivers Wiki.
- The Hubitat Community Custom Apps Wiki.

`build_package_explorer.py` creates `site/package-explorer/data/explorer_index.json` and a
browser-ready JavaScript copy. The schema version is `1.0`. Records have a stable `id`, a
`recordType`, a source-specific `classification`, display metadata, evidence labels and
safe external links. HPM package records also include source or manifest identities,
factual health checks, declared documentation, release dates and network evidence.

Authority is intentionally not collapsed. `OFFICIAL_LISTED` reports an official catalogue
entry. `COMMUNITY_DRIVER_LISTED` and `COMMUNITY_APP_LISTED` report wiki presence.
`HPM_PACKAGE_AVAILABLE` reports a discovered HPM package. None is a security, maintenance,
compatibility or installation recommendation.

All matching and filtering happens in the browser. Remote strings are assigned through
DOM `textContent`; remote HTML and scripts are never executed. The explorer builder has no
path to either Automation Map registry.
