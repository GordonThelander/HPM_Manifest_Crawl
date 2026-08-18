# Optional Automation Map links to Community Utilities

Automation Map may later expose an optional link to the external Community Utilities
website:

`https://gordonthelander.github.io/HPM_Manifest_Crawl/`

This document is guidance only. The Automation Map repository is not changed by the Pages
increment.

## Recommended interaction

Open the website as an external browser page. Do not embed the remote site inside the
Hubitat administrative interface. External navigation keeps the trust boundary visible,
avoids mixing remote scripts with the hub UI and lets the static site evolve independently.

The link should be described as an experimental community utility, not official Hubitat
software. Its absence or failure must never block map generation, scans, rendering or
dependency matching.

## Possible future contextual links

- An unidentified application or driver could offer **Research in Identity Resolver**.
- A reviewed external or network dependency could offer **Explore evidence in Network
  Guide**.
- Package availability or catalogue-change information could offer **View Package Feed**.

Contextual parameters should be added only after the destination utility defines and tests
a stable, non-sensitive URL contract. Do not place hub identifiers, device names, room
names, tokens, settings or other household data in a query string.

## Architectural boundary

The website remains optional and external. Automation Map continues to consume only its
reviewed slim integration registry for normal runtime matching. General community datasets,
site availability and Pages deployment must not become prerequisites for map operation.
