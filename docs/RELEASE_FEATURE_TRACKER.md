# Hubitat platform feature tracker

The Feature Tracker turns staff-authored posts in Hubitat's public Release Notes
category into searchable, source-linked evidence. It preserves every release build
post found in a release topic rather than treating the topic as a single release.

## Published views

- `site/feature-tracker/` separates newly possible capabilities from fixes and known
  issues, and filters by release, subsystem, evidence type and qualification.
- The release timeline plots documented changes by build and date. Its complete data
  is also provided in an accessible table.
- Every record links to its exact release post. Detail posts are shown only when linked
  from the release body.

## Evidence and safety

`build_release_features.py` reads bounded Discourse JSON from the Hubitat Community
Release Notes category. It retains staff-authored build posts, converts HTML to bounded
text, excludes replies and related-topic widgets, and never renders or executes remote
content. Beta, experimental, model-specific and safety-warning wording is retained as
explicit qualifications.

The parser classifies release bullets deterministically. A classification is a browsing
aid, not an official Hubitat label. The linked source remains authoritative.

## Outputs and failure behaviour

- `hubitat_release_features.json`
- `site/feature-tracker/data/hubitat_release_features.json`
- `site/feature-tracker/data/hubitat_release_features.js`

Outputs use schema `1.0`, documented in
`docs/schemas/hubitat-release-features.schema.json`. Files are replaced atomically only
after minimum harvest sanity checks and dataset validation pass. A failed harvest leaves
the last successful files intact. Retained history reports additions, edits and removals
after the quiet first baseline.

The release tracker is an independent community projection. It cannot write either
Automation Map registry and is not required for Automation Map matching or operation.
