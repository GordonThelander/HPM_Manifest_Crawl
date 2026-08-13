# Automation Map evidence enrichment method

This repository now enriches the Hubitat Automation Map registry from two scalable evidence sources:

1. public HPM application/driver Groovy source; and
2. official Hubitat documentation for Hubitat-native applications and integrations.

The enrichment stages deliberately separate **observable facts** from **architectural conclusions**. A code reference, documentation statement, hostname, LAN primitive, cloud reference, child-device call, or authentication primitive is stored as evidence. It is not automatically converted into a dependency edge.

## 1. HPM Groovy static analysis

`enrich_hpm_sources.py` runs after the HPM manifest crawl.

### Input

The script reads `hpm_package_index.json`. Every application and driver component with a non-empty HPM `sourceUrl` becomes eligible for the source pass.

### Fetch controls

Source retrieval reuses the crawler's acquisition controls and cache:

- HTTPS only;
- five concurrent requests maximum;
- 20-second request timeout;
- one retry;
- cached by URL;
- maximum source size of 2 MiB;
- remote content is treated only as text and is never executed.

A source failure is retained as a `source` error in the package index. Failure of one source file does not terminate the complete pass.

### Literal Hubitat identity verification

The source pass looks for a recognisable `definition(` block and records only literal quoted values for:

- `name:`
- `namespace:`

No Groovy expression is evaluated. Interpolation, variables, concatenation, ambiguous/multiple definitions, or values that cannot be established as literal strings remain null.

This allows manifest identity to be checked against the identity actually declared by the source without turning the crawler into a Groovy interpreter.

### Static observations

The source analyser currently records the following implementation observations where present:

| Observation | Example source fingerprint |
| --- | --- |
| Child-device creation | `addChildDevice(...)` |
| Child-device access | `getChildDevices(...)` |
| Event subscriptions | `subscribe(...)` |
| Scheduling | `schedule`, `runIn`, `runOnce`, periodic scheduling calls |
| Capability references | `capability.X` |
| HTTP calls | `httpGet`, `httpPost`, asynchronous HTTP variants |
| Literal HTTP/HTTPS endpoints | literal URL strings, including parsed scheme/host |
| Hub LAN actions | `HubAction(...)` |
| Hub commands | `sendHubCommand(...)` |
| LAN parsing | `parseLanMessage(...)` |
| LAN protocol | `Protocol.LAN` |
| UDP | `LAN_TYPE_UDPCLIENT` |
| WebSocket | `interfaces.webSocket` |
| Raw socket | `interfaces.rawSocket` |
| OAuth access token | `createAccessToken()` |
| API mappings | `mappings { ... }` |
| OAuth enabled | `oauth: true` |
| Zigbee API | `zigbee.*` |
| Z-Wave API | `zwave.*` |
| Matter API | `matter.*` |

Each observation contains its type, line number, and a bounded single-line evidence excerpt. Literal URLs additionally record their scheme and hostname.

The analyser does **not** claim that an observed code path is active at runtime. It states only that the implementation contains the observed construct.

### Source integrity

For every successfully fetched source file the index records:

- `sourceFetched`
- `sourceSha256`
- `sourceBytes`
- `definitionName`
- `definitionNamespace`
- `definitionLine`
- `observations[]`

The SHA-256 allows later runs to identify whether implementation source has actually changed even if the package identity or source URL has not.

### Source-pass completion

`sourcePassCompleted: true` means the crawler attempted every distinct source URL exposed by the current HPM package manifests. It does not mean every source URL returned successfully. Success/failure counts are reported separately in `sourceStats`.

## 2. Official Hubitat documentation enrichment

`enrich_hubitat_docs.py` enriches Hubitat-native registry entries, where implementation source is normally not available through HPM.

### Authoritative source boundary

Only `https://docs2.hubitat.com` is accepted.

The pass begins at:

`https://docs2.hubitat.com/apps`

and discovers the individual official application documentation pages linked from that index.

No community forum, vendor documentation, search-engine snippet, GitHub project, or third-party article is accepted by this stage.

### Entry-to-document matching

Only registry entries classified as clearly Hubitat-native are considered.

Candidates are formed from:

- the registry entry `name`; and
- `appName` / `parentAppName` match-rule values.

Matching rules are intentionally strict:

1. exact identity after removing punctuation/trademark marks and normalising case;
2. if no exact match exists, the sole permitted relaxation is an optional trailing `Integration` or `App` suffix;
3. the fallback is accepted only when it resolves to exactly one documentation page;
4. there is no fuzzy/edit-distance matching.

An unmatched native entry remains unmatched instead of being assigned the most plausible page.

### Documentation observations

The documentation page is converted to plain text without executing scripts. Statements containing explicitly recognisable architectural or operational language are retained as evidence under types such as:

- `BUILT_IN_STATUS`
- `PLATFORM_REQUIREMENT`
- `LOCAL_NETWORK_BEHAVIOUR`
- `CLOUD_BEHAVIOUR`
- `MQTT_BROKER`
- `WEBSOCKET_BEHAVIOUR`
- `CHILD_DEVICE_BEHAVIOUR`
- `BRIDGE_BEHAVIOUR`
- `AUTHENTICATION_BEHAVIOUR`
- `NETWORK_ENDPOINT_BEHAVIOUR`

Each observation includes the supporting sentence from the official page. These observations are intentionally textual evidence rather than inferred topology.

### Registry representation

Matched native entries receive a `documentationEvidence` record similar to:

```json
{
  "sourceType": "HUBITAT_OFFICIAL_DOC",
  "url": "https://docs2.hubitat.com/apps/lifx-integration",
  "title": "LIFX Integration",
  "matchedBy": "LIFX Integration",
  "matchMode": "EXACT_NORMALISED",
  "observations": [
    {
      "type": "LOCAL_NETWORK_BEHAVIOUR",
      "evidence": "..."
    }
  ]
}
```

The separate `hubitat_official_docs_index.json` records:

- the number of documentation pages discovered;
- the number of native registry entries;
- successful registry-to-document matches;
- unmatched native entries;
- page fetch/parse errors;
- observation counts for matched pages.

This makes coverage gaps visible rather than silently treating undocumented entries as verified.

## 3. Evidence versus dependency

Neither enrichment pass edits an entry's `dependencies` array.

The intended pipeline is:

```text
HPM manifest / Groovy source / Hubitat official documentation
                        |
                        v
               evidence observations
                        |
                        v
             separately reviewed rules
                        |
                        v
              architecture assertions
                        |
                        v
             Automation Map graph edges
```

Examples:

- `httpPost()` plus a literal external hostname is evidence that code contains an HTTP path to that hostname. It is not by itself proof that the path is mandatory for runtime control.
- an official Hubitat statement that regular device control is local after cloud setup is strong evidence for setup-only cloud criticality, but that architectural interpretation should remain a separately represented assertion.
- `addChildDevice()` is direct implementation evidence that the source can create child devices, but it does not identify which exact runtime children exist on a particular hub.

## 4. Validation order

The GitHub Actions workflow executes the stages in this order:

1. classify registry source visibility;
2. crawl HPM repositories and package manifests;
3. run the existing registry validation against manifest identities;
4. fetch and statically analyse public Groovy source;
5. crawl official Hubitat app documentation and annotate native registry entries;
6. re-run registry validation using the enriched source identities;
7. append source/documentation coverage statistics to the validation report;
8. upload and commit the successful derived artefacts.

Revalidation after the source pass is important because a literal `definition()` name or namespace may correct or extend the identity evidence supplied by an HPM manifest.

## 5. Generated artefacts

The enriched pipeline maintains:

- `hpm_package_index.json` - HPM package identity plus source-analysis observations;
- `hubitat_official_docs_index.json` - official Hubitat documentation discovery/matching results;
- `hubitat_automation_map_app_integration_registry_v0.3.json` - registry plus source-visibility and official-documentation evidence annotations;
- `registry_validation_report.md` - validation report plus enrichment coverage statistics.

## 6. Deliberate exclusions

This enrichment stage does not attempt to use:

- a single user's installed-hub inventory as a representative corpus;
- community-forum statements as authoritative architecture evidence;
- packet captures or network monitoring;
- package popularity, stars, downloads, or repository activity;
- AI/LLM interpretation of Groovy source;
- execution of downloaded Groovy;
- automatic creation of dependency edges from static observations.

Those may be considered separately in future, but they are outside the evidence boundary of the current pipeline.
