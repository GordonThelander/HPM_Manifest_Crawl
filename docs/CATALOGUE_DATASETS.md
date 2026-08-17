# Official and Community Catalogue Datasets

These datasets extend HPM package identity with three independently sourced catalogues.
They are discovery aids and do not feed either Automation Map registry.

| Dataset | Source | Meaning |
| --- | --- | --- |
| `official_devices.json` | Hubitat compatible-device catalogue | Hubitat lists the device as known to work with the named built-in driver or app |
| `community_drivers.json` | Custom Device Drivers Wiki | A community editor listed the device, driver, app or collection |
| `community_apps.json` | Custom Apps Wiki | A community editor listed the app or collection |

Every dataset uses schema version `1.0`, includes a SHA-256 `snapshotId` of the source
content, and retains raw source fields. Stable record IDs make additions, removals and
changes visible in ordinary Git diffs between successful snapshots.

## Evidence classifications

- `OFFICIAL_LISTED` means the device appears in Hubitat's official table. Hubitat's own
  page says this is confirmation of prior operation, not a guarantee of future operation.
- `COMMUNITY_DRIVER_LISTED` and `COMMUNITY_APP_LISTED` mean only that an editable community
  wiki contains the entry.
- `hpmMatches[].basis = EXACT_LINK` means a source link resolves exactly to a URL already
  attached to an indexed HPM package or component.
- `hpmMatches[].basis = EXACT_NAME` is used only for apps and requires case-insensitive,
  whitespace-normalized equality with a package or app definition name.

Multiple exact matches are retained. No score or preferred package is selected.

## Lifecycle observations

The words `obsolete`, `withdrawn`, `deprecated` and `superseded` are copied into
`lifecycleFlags` when the source text contains them. This reports the wiki's wording; it is
not an independent maintenance conclusion.

## Harvest safety

`harvest_catalogues.py`:

- accepts HTTPS sources only;
- applies time and response-size limits;
- retries one transient failure;
- parses HTML and JSON as data and executes no downloaded code;
- requires the exact official table headings and a plausible minimum row count;
- requires the Discourse topic title and editable first wiki post;
- fails rather than publishing an empty dataset after source-layout drift; and
- has no Automation Map registry output path.

Run a live refresh with:

```text
python harvest_catalogues.py
```

Run offline committed-output checks with:

```text
python harvest_catalogues.py --check
```

The live workflow regenerates these files on every scheduled main-branch run, even when
the HPM upstream hash is unchanged. A failed harvest prevents the generated-output commit,
so the last successful snapshot remains published.
