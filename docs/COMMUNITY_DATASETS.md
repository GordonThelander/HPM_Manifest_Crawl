# Community Datasets

HPM Manifest Crawl publishes small, stable projections for community tools. They are
generated from `hpm_package_index.json` and are independent of both Automation Map
registries.

All datasets use schema version `1.0`, UTF-8 JSON, deterministic ordering and the source
snapshot timestamp. A breaking schema change requires a new major schema version and a
migration period for consumers.

## `community_packages.json`

One record per HPM package, containing:

- stable public ID and the original HPM package ID where supplied;
- package name, author, description, category, tags, version and release date;
- repository and package-manifest identity;
- documentation and community links; and
- IDs of the app and driver records installed by the package.

IDs beginning with `hpm:` use the publisher's package ID. Where HPM supplies no package ID,
the `manifest:` ID is a deterministic hash of the manifest, repository and package name.
Publisher IDs are not globally unique in the live ecosystem. If the same declared ID is
used by multiple packages, each public ID gains a deterministic manifest-URL suffix while
`hpmPackageId` preserves the original value.

## `definitions.json`

One record per application or driver declared by a package. Manifest identity and literal
Groovy `definition` identity remain separate so disagreements are visible. Source metadata
includes its URL, fetch result, hash, size and definition line where available.

`observationCounts` records how many static observations of each type were found. It does
not publish excerpts and does not turn URLs, LAN primitives or HTTP calls into architectural
conclusions.

## `package_health.json`

Factual results from the crawl, not a package ranking or safety score:

- manifest fetch result;
- component source fetch coverage;
- manifest/source identity agreement;
- presence of documentation and community links;
- non-HTTPS URLs; and
- crawl errors attributable to the package's known URLs.

`MISSING` means a link was not declared. It does not mean a page was checked and failed.
`NOT_AVAILABLE` means the crawl lacked enough information to compare an identity.
Repository-level errors that cannot be attributed to an indexed package are retained in
`unattributedCrawlErrors`.

## Generation

```text
python build_community_datasets.py
python build_community_datasets.py --check
```

The check command is used by CI. The generator's output list contains only the three files
documented here; it has no registry output path.

## Example records

Package identity:

```json
{
  "id": "hpm:publisher-package-id",
  "hpmPackageId": "publisher-package-id",
  "name": "Example Integration",
  "manifest": {"url": "https://example.invalid/package.json", "fetched": true},
  "components": {"apps": ["definition:abc123"], "drivers": []}
}
```

Definition identity remains two-sided:

```json
{
  "id": "definition:abc123",
  "packageId": "hpm:publisher-package-id",
  "kind": "APP",
  "manifestIdentity": {"name": "Example Integration", "namespace": "example"},
  "sourceIdentity": {"name": "Example Integration", "namespace": "example"}
}
```

Health is a collection of individual facts:

```json
{
  "packageId": "hpm:publisher-package-id",
  "checks": {
    "manifestFetch": {"status": "PASS"},
    "sourceFetch": {"status": "PASS", "components": 1, "fetched": 1}
  }
}
```
