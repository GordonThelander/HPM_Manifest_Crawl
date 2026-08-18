# HPM local/cloud evidence guide

The guide is a research aid, not an architectural classifier. It keeps four
evidence types separate:

- **Declared:** publisher-supplied HPM `LAN` and `Cloud` tags.
- **Observed:** literal external hosts and Hubitat LAN primitives found by static
  analysis of fetched source.
- **Documented:** official documentation attached to reviewed Automation Map
  entries.
- **Reviewed:** Automation Map dependency conclusions matched through the
  registry's reviewed rules.

The builder reads the reviewed Automation Map registry but never writes it. Its
outputs are the separate `network_evidence.json` dataset and browser script.

## Interpretation limits

An observed URL may be documentation, an import location, example text, an
optional code path or a runtime endpoint. To reduce obvious noise, only literal
hosts at or after the source definition are considered, and common source,
documentation and licence hosts are excluded. Remaining hosts are still labelled
only as observed.

LAN primitives show that source contains constructs such as `HubAction`,
`parseLanMessage` or `Protocol.LAN`; they do not prove every installation uses
that path. HPM tags are author declarations. Reviewed dependencies are the only
architectural conclusions displayed as reviewed.

`INSUFFICIENT` means no qualifying evidence was found. It never means that a
package is offline, local-only, cloud-free or safe for a particular network.

## Build and preview

```shell
python build_network_guide.py
python build_network_guide.py --check
python -m http.server 8000
```

Open `http://localhost:8000/site/network-guide/`.
