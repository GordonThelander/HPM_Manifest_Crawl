# HPM developer manifest validator

The validator helps Hubitat developers catch packaging problems before an HPM
submission or release. It reads JSON and Groovy source as untrusted text. It
never evaluates or executes downloaded code, and it does not write any crawl,
community dataset or Automation Map registry.

## Browser check

Serve the repository root and open
`http://localhost:8000/site/manifest-validator/`. Paste a package manifest or
open a local JSON file. Processing stays in the browser and provides:

- JSON, package identity and per-component version checks;
- app and driver declaration checks;
- duplicate component ID detection;
- package-level versus per-component version-strategy enforcement;
- URL-shape and clear-text HTTP warnings; and
- a preview of the package's community catalogue record;
- public-submission readiness checks; and
- generated entries for the author's repository JSON and the public HPM catalogue.

The browser does not fetch remote URLs. Use the command-line validator for
repository and source evidence.

## Command line

```shell
python validate_hpm_package.py packageManifest.json
python validate_hpm_package.py packageManifest.json \
  --repository repository.json --package-id your-package-id
python validate_hpm_package.py packageManifest.json --check-sources
python validate_hpm_package.py packageManifest.json --format json
```

The positional input and optional repository may be local paths or public HTTPS
URLs. `--check-sources` fetches bounded public source text and compares only a
single unambiguous literal Groovy `definition` name and namespace. Private,
loopback, reserved and link-local network targets are rejected. Downloaded text
is never run.

Exit code `0` means no errors. Exit code `1` means validation errors were found.
Exit code `2` means the selected input could not be read or parsed.
JSON output follows `docs/schemas/manifest-validation.schema.json` version 1.1.

## Public HPM submission guidance

The browser view prepares, but never submits, the final publication material. It
requires public HTTPS URLs for the package manifest, repository JSON and every
declared source. It also records the package ID, category, tags and description,
and requires the author to confirm a real HPM installation test.

HPM supports either one package-level version or versions on every app and
driver. Mixing those strategies is an error because HPM's developer guidance
explicitly advises authors not to mix them within one package.

When the readiness checklist passes, the page generates:

- the package entry to add to the author's own repository JSON; and
- the `{name, location}` entry to add to the public HPM `repositories.json`.

The author must still test the custom repository and deliberately open the pull
request against `HubitatCommunity/hubitat-packagerepositories`. The page neither
authenticates to GitHub nor creates a pull request.

## Reusable GitHub Action

```yaml
steps:
  - uses: actions/checkout@v4
  - uses: GordonThelander/HPM_Manifest_Crawl@community-utility-exploration
    with:
      manifest: packageManifest.json
      repository: repository.json
      package-id: your-package-id
      check-sources: 'true'
```

The action emits errors, warnings and notices as GitHub annotations containing
the input file and JSON field path. JSON parse failures additionally include the
line and column reported by the parser.

## Severity policy

### Error

The package cannot be interpreted safely or installed as declared. Examples
include malformed JSON, missing package identity, absent source locations,
duplicate IDs, an unlisted repository package, unavailable sources, and literal
manifest/source identity mismatches.

### Warning

The package can still be interpreted, but recovery, transport safety or
community discovery may be weaker. Examples include missing component IDs,
namespaces or release dates and clear-text HTTP URLs. These are warnings because
such quirks exist in the live HPM ecosystem.

### Informational

Optional evidence is absent or cannot be confirmed without guessing. Missing
documentation/community links and intentionally dynamic Groovy definitions are
informational observations rather than failures.
