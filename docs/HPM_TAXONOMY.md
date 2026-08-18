# HPM Taxonomy and Usage Metrics

`hpm_taxonomy.json` publishes the current Hubitat Package Manager category and tag
vocabulary together with package-level usage metrics. The browser copy is available at
`site/taxonomy/data/hpm_taxonomy.json` and the static Taxonomy view uses the matching
JavaScript projection.

## Authority and fallback

The build reads HPM's public settings file:

`https://raw.githubusercontent.com/HubitatCommunity/hubitat-packagerepositories/master/settings.json`

The response is limited to 64 KiB, parsed only as JSON and checked for bounded, unique,
non-empty category and tag strings. It is never evaluated or executed. A successful live
read refreshes `hpm_taxonomy_fallback.json`. If the live source cannot be read or fails
validation, the builder uses that last-known-good file and labels the output source mode
as `fallback`.

The Manifest Validator consumes the generated browser data. It performs no live request,
so the manifest, repository entry and validation inputs remain in the browser.

## Counting method

- The denominator is the number of current records in `community_packages.json`.
- A package counts at most once for a category and once for each declared tag.
- Multiple apps or drivers inside the same package cannot inflate usage.
- App and driver composition counts packages containing at least one component of that
  kind. A mixed package appears in both composition counts and once in the overall count.
- Percentages describe catalogue coverage, not installation popularity.
- Unknown categories and tags remain visible as observations but are never added to the
  authoritative vocabulary automatically.

The cloud is supported by a sortable exact-value table. Font size is not the only signal,
and every term links to an exact-tag Package Explorer filter.

## Generation

Refresh from the authoritative source:

```text
python build_hpm_taxonomy.py
```

Build without network access from the checked fallback:

```text
python build_hpm_taxonomy.py --offline
```

Verify committed outputs against the current community package projection:

```text
python build_hpm_taxonomy.py --check
```

The versioned JSON schema is `docs/schemas/hpm-taxonomy.schema.json`.

## Contract boundary

The builder reads only the community package projection and taxonomy settings. It has no
path to either Automation Map registry. Taxonomy availability is not required for
Automation Map matching, rendering, export or normal operation.
