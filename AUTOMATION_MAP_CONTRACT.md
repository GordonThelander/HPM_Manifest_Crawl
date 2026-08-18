# Automation Map Compatibility Contract

Automation Map downloads this repository's slim registry directly from:

`https://raw.githubusercontent.com/GordonThelander/HPM_Manifest_Crawl/main/hubitat_automation_map_app_integration_registry_slim.json`

That makes the file a production interface, not an ordinary generated artefact. Community
features must publish separate files and must not migrate this consumer implicitly.

## Required release checks

Run before any generated output can be published:

```text
python -m unittest discover -s tests -v
python build_slim_registry.py --check
python automation_map_contract.py
```

The checks freeze:

- the root filename and raw GitHub URL;
- schema version `0.4` until Automation Map is deliberately upgraded first;
- required entry, rule and dependency fields;
- enum values understood by the app;
- case-insensitive, whitespace-trimming `equals` and `contains` matching;
- `ANY`, `ALL` and `NOT_EVALUABLE` behaviour;
- the exact projection from the canonical registry; and
- the 64 KiB size ceiling.

`build_slim_registry.py` validates a complete candidate before replacing the published
file and uses a same-directory atomic replacement. CI publication depends on the
`automation-map-contract` job and runs the contract again after enrichment and generation.

## Deliberate contract changes

Do not change this contract from this repository alone. A contract change requires all of
the following in order:

1. Update Automation Map to understand both the old and proposed representation.
2. Release and verify that compatible Automation Map version on real hubs.
3. Update the contract fixtures and validator here in a separately reviewed change.
4. Preserve the old endpoint or representation for installations that have not upgraded.

Until that sequence is complete, a failing contract check means the change must not be
published.

## Emergency rollback

If an invalid slim registry reaches `main`:

1. Stop or cancel the publishing workflow so it cannot immediately regenerate the bad
   file.
2. Identify the last known-good commit where `automation_map_contract.py` and the full test
   suite pass.
3. Restore only
   `hubitat_automation_map_app_integration_registry_slim.json` from that commit in a new
   corrective commit. Do not rewrite public history.
4. Run all three required release checks above against the corrective commit.
5. Push the corrective commit to `main` through the normal reviewed path.
6. Verify the raw URL returns valid JSON below 64 KiB and inspect a real Automation Map scan
   before re-enabling automated publication.
7. Correct the canonical registry or generator that produced the failure before allowing a
   subsequent regeneration.

The previous file can be recovered without destructive Git commands:

```text
git show <known-good-commit>:hubitat_automation_map_app_integration_registry_slim.json
```

Write the recovered content through a normal reviewed commit. Never force-push `main` as a
rollback mechanism.
