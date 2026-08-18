# Contributor activity dataset and view

`contributor_activity.json` and `site/contributors/` show current HPM package
portfolios alongside retained crawl observations.

## Identity and ranking

A contributor is the exact author string declared in HPM package metadata after
trimming surrounding whitespace. Case differences, handles, company names and
similar-looking aliases are not merged automatically. Current rank is determined
by unique packages in the latest successful `community_packages.json` snapshot.
App and driver totals come from `definitions.json`.

This is not a ranking of Git commits, repository ownership, code quality,
downloads, installations or Hubitat Community participation.

## Two different time signals

- **Observed catalogue activity** comes from retained `package_changes.json`
  events. Each event carries the successful crawl observation time and, where
  available, a link to the exact Git snapshot.
- **Publisher-declared release date** comes from package metadata. It is displayed
  on package submissions but is never substituted for the crawl observation time.

The first public history may be short. A missing event is not evidence that an
author or project was inactive; it means the retained crawl history contains no
matching observation for that period.

## Build and check

```powershell
python build_contributor_activity.py
python build_contributor_activity.py --check
```

The builder reads only community datasets and writes only the new contributor
dataset and browser copy. It has no canonical or slim Automation Map registry
input or output path. Its workflow step is non-blocking so a failure cannot alter
or prevent Automation Map publication.
