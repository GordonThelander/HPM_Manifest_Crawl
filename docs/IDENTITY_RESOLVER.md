# App and driver identity resolver

The static resolver maps a Hubitat application or driver definition name and namespace to
the HPM packages that declare or contain that identity. It also identifies applications
with matching official Hubitat documentation as separate built-in candidates.

The name or namespace may be searched independently. Namespace-only searches return exact
namespace results first and separately labelled substring results for discovery. Sources
that do not publish namespaces, including wiki listings and official app documentation,
are excluded from namespace-only results.

Author may also be searched independently or combined with name, namespace, and type.
Author matching is case-insensitive; exact values are separated from partial author-name
results. Wiki and built-in sources are excluded because they do not carry reliable author
identity in this projection.

Author and namespace result sets group definitions by their containing package. App rows use
a green border and `APP` badge; driver rows use blue and a `DRIVER` badge. Colour is never
the sole distinction. Single-definition identity results lead with the definition name and
show the package as secondary context.

## Match classes

- `EXACT` requires case-insensitive, trimmed equality for both name and namespace. Source
  and manifest identities remain visible as separate bases.
- `NAME_EXACT` means the definition name is equal but the namespace was omitted or differs;
  it is a candidate awaiting namespace confirmation, not an exact identity.
- `BUILT_IN_CANDIDATE` is an exact name found in Hubitat's official application
  documentation index. It is never returned as an HPM package.
- `SUGGESTED` is a conservative normalized-name bigram similarity of at least 0.82. When a
  namespace is supplied, it must still be exact. Suggestions are leads, not conclusions.
- `RELATED_NAME` and `BUILT_IN_RELATED` support discovery terms such as `LIFX` through
  bounded normalized-name containment. They remain visually separate from exact results.
- `MANUAL_EXACT`, `MANUAL_NAME_EXACT`, and `MANUAL_RELATED` cover reviewed community
  projects distributed outside HPM. They include source-identity evidence and are always
  labelled `Manual installation (not HPM)`.
- `COMMUNITY_LISTING_EXACT_NAME` and `COMMUNITY_LISTING_RELATED` expose Custom Apps Wiki
  discovery evidence. They do not claim a namespace, current maintenance, source identity,
  or HPM availability unless separately supported.

Every exact candidate is returned. The resolver sets `ambiguous` instead of choosing one
when publishers reuse an identity or an identity overlaps documented built-in software.

The resolver consumes all harvested Custom Apps Wiki records, but that wiki is not a
complete real-time catalogue. A small reviewed project file
allows newer manual-install projects to be added without editing generated wiki or HPM
outputs and without claiming HPM availability.

## Privacy and safety

The browser loads the static index and performs matching locally. A generated JavaScript
copy allows the page to work when opened directly from disk; the JSON copy remains the
stable data interface. It sends no definition
name, namespace, hub inventory, device, app instance, room, setting, or token to a server.
Remote publisher text is inserted with DOM `textContent`, never as HTML. Links are exposed
only when they use HTTP(S).

Build or query the index:

```text
python build_identity_resolver.py
python build_identity_resolver.py --check
python build_identity_resolver.py --name "OwnTracks" --namespace "lpakula" --kind APP
python build_identity_resolver.py --author "Gordon"
```

Open `site/identity-resolver/index.html` directly or serve the repository with any static
HTTP server. The page includes clickable exact app, exact driver, and built-in examples.
