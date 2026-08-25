#!/usr/bin/env python3
"""Generate crawl-maintained discovery pages and a sitemap for GitHub Pages."""

from __future__ import annotations

import argparse
import hashlib
import html
import json
import re
import shutil
import tempfile
from collections import defaultdict
from datetime import datetime
from pathlib import Path
from urllib.parse import quote, urlparse


ROOT = Path(__file__).resolve().parent
SITE = ROOT / "site"
BASE_URL = "https://gordonthelander.github.io/HPM_Manifest_Crawl"
NAV = '<nav class="utility-nav" aria-label="Community utilities"><a class="utility-brand" href="{root}">Community Utilities</a><div class="utility-links"><a href="{root}start-here/">Start Here</a><a href="{root}package-explorer/">Package Explorer</a><a href="{root}identity-resolver/">General Search</a><a href="{root}taxonomy/">Taxonomy</a><a href="{root}feature-tracker/">Update Tracker</a><a href="{root}manifest-validator/">Manifest Builder</a><a href="{root}network-guide/">Network Guide</a><a href="{root}package-feed/">Package Feed</a><a href="{root}recovery-inventory/">Recovery Inventory</a><a href="{root}contributors/">Contributors</a><a href="{root}glossary/">Glossary</a><a href="{root}about/">About</a></div></nav>'


def load(name: str) -> dict:
    return json.loads((ROOT / name).read_text(encoding="utf-8"))


def slug(value: str, identity: str) -> str:
    readable = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")[:72] or "item"
    suffix = hashlib.sha256(identity.encode()).hexdigest()[:8]
    return f"{readable}-{suffix}"


def esc(value) -> str:
    clean = re.sub(r"\s+", " ", str(value or "").replace("\u2014", " - ")).strip()
    return html.escape(clean, quote=True)


def github_readme(package: dict) -> str | None:
    declared = (package.get("links") or {}).get("documentation")
    if declared and urlparse(declared).scheme in {"http", "https"}:
        return declared
    candidates = [
        (package.get("manifest") or {}).get("url"),
        (package.get("repository") or {}).get("url"),
    ]
    for value in candidates:
        if not value:
            continue
        parsed = urlparse(value)
        if parsed.netloc.lower() not in {"github.com", "raw.githubusercontent.com"}:
            continue
        parts = [part for part in parsed.path.split("/") if part]
        if len(parts) >= 2:
            return f"https://github.com/{quote(parts[0])}/{quote(parts[1])}#readme"
    return None


def page(title: str, description: str, canonical: str, body: str, depth: int) -> str:
    root = "../" * depth
    return f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><base target="_blank"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="{esc(description)}"><link rel="canonical" href="{esc(canonical)}">
<meta property="og:title" content="{esc(title)}"><meta property="og:description" content="{esc(description)}"><meta property="og:url" content="{esc(canonical)}"><meta property="og:type" content="website">
<title>{esc(title)}</title><link rel="stylesheet" href="{root}shared/hubitat.css"><link rel="stylesheet" href="{root}shared/discovery.css"></head>
<body>{NAV.format(root=root)}<main class="discovery">{body}</main>
<!-- Cloudflare Web Analytics --><script type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{{"token":"4f12063038634bc29a4820bbe7523693"}}'></script></body></html>'''


def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content.rstrip() + "\n", encoding="utf-8")


def link(url: str | None, label: str) -> str:
    valid = url and urlparse(url).scheme in {"http", "https"}
    return f'<a href="{esc(url)}" rel="noopener noreferrer">{esc(label)}</a>' if valid else ""


def build(output: Path) -> None:
    packages = load("community_packages.json").get("packages", [])
    contributors = load("contributor_activity.json").get("contributors", [])
    events = load("package_changes.json").get("events", [])
    package_slugs = {p["id"]: slug(p.get("name", "package"), p["id"]) for p in packages}
    author_by_name = {c["name"]: slug(c["name"], c["id"]) for c in contributors}
    urls = [f"{BASE_URL}/", f"{BASE_URL}/packages/", f"{BASE_URL}/authors/", f"{BASE_URL}/updates/"]

    package_cards = []
    for p in sorted(packages, key=lambda item: item.get("name", "").lower()):
        pslug = package_slugs[p["id"]]
        canonical = f"{BASE_URL}/packages/{pslug}/"
        urls.append(canonical)
        author = p.get("author") or (p.get("repository") or {}).get("author") or "Unknown author"
        author_slug = author_by_name.get(author)
        author_html = f'<a href="../../authors/{author_slug}/">{esc(author)}</a>' if author_slug else esc(author)
        readme = github_readme(p)
        app_count = len((p.get("components") or {}).get("apps") or [])
        driver_count = len((p.get("components") or {}).get("drivers") or [])
        body = f'''<header class="detail-hero"><p class="eyebrow">HPM package</p><h1>{esc(p.get("name"))}</h1><p>{esc(p.get("description") or "A community package published through Hubitat Package Manager.")}</p></header>
<section class="fact-grid"><div><strong>Author</strong><span>{author_html}</span></div><div><strong>Version</strong><span>{esc(p.get("version") or "Not declared")}</span></div><div><strong>Category</strong><span>{esc(p.get("category") or "Uncategorised")}</span></div><div><strong>Contents</strong><span>{app_count} apps, {driver_count} drivers</span></div></section>
<section><h2>Package resources</h2><div class="action-links">{link(readme, "Read the README")}{link((p.get("links") or {}).get("community"), "Community discussion")}{link((p.get("manifest") or {}).get("url"), "Package manifest")}{link((p.get("repository") or {}).get("url"), "HPM repository")}</div></section>
<section><h2>Catalogue details</h2><p><strong>Released:</strong> {esc(p.get("dateReleased") or "Not declared")}</p><p><strong>Tags:</strong> {esc(", ".join(p.get("tags") or []) or "None declared")}</p><p><a href="../../package-explorer/?query={quote(p.get('name') or '')}&catalogue=HPM_PACKAGE#results-title">Open this package in Package Explorer</a></p></section>'''
        write(output / "packages" / pslug / "index.html", page(f"{p.get('name')} | Hubitat package", p.get("description") or f"HPM package by {author}", canonical, body, 2))
        package_cards.append(f'<article><h2><a href="{pslug}/">{esc(p.get("name"))}</a></h2><p>{esc(author)} · {esc(p.get("category"))} · {esc(p.get("version"))}</p></article>')
    write(output / "packages" / "index.html", page("Hubitat HPM package directory", "Browse crawl-maintained pages for public HPM packages.", f"{BASE_URL}/packages/", '<header class="detail-hero"><p class="eyebrow">Package directory</p><h1>Hubitat HPM packages</h1><p>Static, searchable pages maintained by the daily public catalogue crawl.</p></header><section class="card-list">' + "".join(package_cards) + "</section>", 1))

    author_cards = []
    for c in sorted(contributors, key=lambda item: item.get("name", "").lower()):
        aslug = author_by_name[c["name"]]
        canonical = f"{BASE_URL}/authors/{aslug}/"
        urls.append(canonical)
        rows = []
        for p in sorted(c.get("packages", []), key=lambda item: item.get("name", "").lower()):
            pslug = package_slugs.get(p.get("id"))
            name = f'<a href="../../packages/{pslug}/">{esc(p.get("name"))}</a>' if pslug else esc(p.get("name"))
            rows.append(f'<article><h2>{name}</h2><p>{esc(p.get("category"))} · version {esc(p.get("version") or "not declared")}</p></article>')
        body = f'<header class="detail-hero"><p class="eyebrow">Community author</p><h1>{esc(c["name"])}</h1><p>{c.get("currentPackageCount", 0)} current packages, {c.get("appCount", 0)} apps and {c.get("driverCount", 0)} drivers in the public catalogue.</p></header><section><h2>Published packages</h2><div class="card-list">{"".join(rows)}</div></section><p><a href="../../contributors/?query={quote(c["name"])}#contributors-title">Open the interactive contributor view</a></p>'
        write(output / "authors" / aslug / "index.html", page(f"{c['name']} | Hubitat community author", f"Public HPM packages maintained by {c['name']}.", canonical, body, 2))
        author_cards.append(f'<article><h2><a href="{aslug}/">{esc(c["name"])}</a></h2><p>{c.get("currentPackageCount", 0)} current packages</p></article>')
    write(output / "authors" / "index.html", page("Hubitat community author directory", "Browse community authors and their public HPM packages.", f"{BASE_URL}/authors/", '<header class="detail-hero"><p class="eyebrow">Author directory</p><h1>Hubitat community authors</h1><p>Contributor profiles generated from current public package declarations.</p></header><section class="card-list">' + "".join(author_cards) + "</section>", 1))

    weeks: dict[tuple[int, int], list] = defaultdict(list)
    for event in events:
        try:
            day = datetime.fromisoformat(event["observedAt"].replace("Z", "+00:00"))
        except (KeyError, ValueError):
            continue
        iso = day.isocalendar()
        weeks[(iso.year, iso.week)].append(event)
    archive_cards = []
    for (year, week), items in sorted(weeks.items(), reverse=True):
        path = f"{year}/week-{week:02d}"
        canonical = f"{BASE_URL}/updates/{path}/"
        urls.append(canonical)
        rows = []
        for event in sorted(items, key=lambda item: item.get("observedAt", ""), reverse=True):
            pslug = package_slugs.get(event.get("packageId"))
            name = f'<a href="../../../packages/{pslug}/">{esc(event.get("packageName"))}</a>' if pslug else esc(event.get("packageName"))
            rows.append(f'<article><h2>{name}</h2><p>{esc(event.get("summary"))}</p><time datetime="{esc(event.get("observedAt"))}">{esc((event.get("observedAt") or "")[:10])}</time></article>')
        body = f'<header class="detail-hero"><p class="eyebrow">Weekly package archive</p><h1>{year}, week {week:02d}</h1><p>{len(items)} observed catalogue changes.</p></header><section class="card-list">{"".join(rows)}</section>'
        write(output / "updates" / str(year) / f"week-{week:02d}" / "index.html", page(f"Hubitat package updates, {year} week {week:02d}", f"Observed HPM package changes during ISO week {week:02d} of {year}.", canonical, body, 3))
        archive_cards.append(f'<article><h2><a href="{path}/">{year}, week {week:02d}</a></h2><p>{len(items)} catalogue changes</p></article>')
    write(output / "updates" / "index.html", page("Hubitat package update archive", "Dated weekly archives of observed HPM package changes.", f"{BASE_URL}/updates/", '<header class="detail-hero"><p class="eyebrow">Update archive</p><h1>What changed in HPM</h1><p>Permanent weekly pages built from the daily package crawl.</p></header><section class="card-list">' + "".join(archive_cards) + "</section>", 1))

    sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "".join(f"  <url><loc>{esc(url)}</loc></url>\n" for url in sorted(set(urls))) + "</urlset>\n"
    write(output / "sitemap.xml", sitemap)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    if args.check:
        with tempfile.TemporaryDirectory() as tmp:
            candidate = Path(tmp)
            build(candidate)
            for relative in ("packages", "authors", "updates", "sitemap.xml"):
                expected, actual = SITE / relative, candidate / relative
                if not expected.exists() or (expected.is_file() and expected.read_bytes() != actual.read_bytes()):
                    raise SystemExit(f"generated discovery output is stale: site/{relative}")
                if expected.is_dir():
                    for file in actual.rglob("*"):
                        if file.is_file() and (expected / file.relative_to(actual)).read_bytes() != file.read_bytes():
                            raise SystemExit(f"generated discovery output is stale: site/{relative}")
        print("Site discovery outputs are current.")
        return 0
    for name in ("packages", "authors", "updates"):
        target = SITE / name
        if target.exists():
            shutil.rmtree(target)
    build(SITE)
    print("Generated package pages, author profiles, weekly archives and sitemap.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
