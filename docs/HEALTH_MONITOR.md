# Package health monitor

`health_monitor.json` adds historical interpretation to the individual facts in
`package_health.json`. `health_summary.md` is its human-readable change report.

The monitor does not calculate a quality, safety, maintenance, or abandonment score. Each
result retains the named check, source URL, observed status, details, and a direct next step
for an author. Request timeouts and temporary server responses are labelled separately from
HTTP-only transport and other fetch failures.

## State and transition language

- `PASSING`, `WARNING`, and `FAILING` summarize the published individual observations.
- `NEW_FAILURE` means a check moved into failure after the previous successful snapshot.
- `PERSISTENT_FAILURE` means consecutive successful crawl snapshots observed failure.
- `RESTORED` means a previously failing package no longer has a failing observation.
- `BASELINE` means no earlier monitor snapshot was available.

Persistent does not mean abandoned. A remote request can fail for reasons outside a package
author's control. Missing documentation/community links remain declaration observations;
they are not falsely described as failed reachability checks.

## Snapshot safety

The generator reads only `community_packages.json`, `package_health.json`, and optionally
the previous `health_monitor.json`, plus bounded observations from
`link_reachability.json`. It writes only `health_monitor.json` and
`health_summary.md`. The workflow runs it after a successful crawl and stores those outputs
alongside the other community projections. It contains no Automation Map registry path.

Run:

```text
python build_health_monitor.py
python build_health_monitor.py --check
python probe_package_links.py
python probe_package_links.py --check
```
