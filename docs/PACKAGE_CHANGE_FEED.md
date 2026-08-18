# HPM package change feed

The package change feed compares consecutive **successful** public HPM crawl
snapshots. It helps community members discover packages that were added,
removed, updated, broken or restored without watching every package repository.

## Outputs

| Output | Purpose |
| --- | --- |
| `package_changes.json` | Versioned machine-readable event history. |
| `package_changes.atom` | Atom subscription feed. |
| `package_changes_weekly.md` | Seven-day digest ready to adapt for a community post. |
| `site/package-feed/index.html` | Human-readable static changelog. |
| `package_feed_state.json` | Last validated comparison baseline. |

Each change includes its current package record when one exists, its previous
record when relevant, and evidence links to the public package dataset and
upstream manifest, repository, documentation, community topic and source files.

## Safety and semantics

`build_package_feed.py` consumes only `community_packages.json`,
`definitions.json` and `package_health.json`. It does not read or write an
Automation Map registry.

Before comparison, all three inputs must:

- use schema 1.0;
- have completed their source pass;
- share the same valid `snapshotGenerated` time;
- have internally consistent counts and package IDs; and
- contain at least one package.

If validation fails, the builder exits before writing anything. On success it
writes all public feed products first and promotes `package_feed_state.json`
last. A partially written run therefore cannot become the next baseline.

The first successful run establishes a quiet baseline: it does not report the
entire existing HPM catalogue as newly added. Later runs emit one event per
changed package and may attach several evidence labels:

- `ADDED`, `REMOVED`, `UPDATED`;
- `BROKEN`, `RESTORED`;
- `MANIFEST_CHANGED`;
- `SOURCE_LOCATION_CHANGED`; and
- `DECLARED_DEFINITIONS_CHANGED`.

A package is conservatively labelled broken when its manifest cannot be fetched
or all its declared source files fail to fetch. Cache age does not participate
in comparison: stable current data is fingerprinted directly.

For the initial public history, `--backfill-from-git` compares completed crawl
snapshots already retained in this repository. It uses each commit's observation
time and links the resulting event back to that exact snapshot. Invalid and
incomplete historical crawls are skipped. Source-code hash churn alone is not
presented as a package update.

## Commands

```shell
python build_package_feed.py
python build_package_feed.py --check
python build_package_feed.py --backfill-from-git
```

Serve the repository root to test the site locally:

```shell
python -m http.server 8000 --bind 127.0.0.1
```

Then open `http://localhost:8000/site/package-feed/`.
