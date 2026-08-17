#!/usr/bin/env python3
"""Lightweight GitHub Pages readiness and internal-link validation."""

import html.parser
import pathlib
import re
import sys
import urllib.parse


SITE = pathlib.Path('site')
UTILITY_PAGES = (
    pathlib.Path('index.html'),
    pathlib.Path('package-explorer/index.html'),
    pathlib.Path('taxonomy/index.html'),
    pathlib.Path('identity-resolver/index.html'),
    pathlib.Path('manifest-validator/index.html'),
    pathlib.Path('network-guide/index.html'),
    pathlib.Path('package-feed/index.html'),
    pathlib.Path('recovery-inventory/index.html'),
    pathlib.Path('contributors/index.html'),
)
REQUIRED_FILES = UTILITY_PAGES + (
    pathlib.Path('shared/hubitat.css'),
    pathlib.Path('package-explorer/data/explorer_index.json'),
    pathlib.Path('package-explorer/data/explorer_index.js'),
    pathlib.Path('taxonomy/data/hpm_taxonomy.json'),
    pathlib.Path('taxonomy/data/hpm_taxonomy.js'),
    pathlib.Path('identity-resolver/data/identity_index.js'),
    pathlib.Path('network-guide/data/network_evidence.js'),
    pathlib.Path('contributors/data/contributor_activity.js'),
    pathlib.Path('package-feed/data/package_changes.json'),
    pathlib.Path('package-feed/data/package_changes.atom'),
    pathlib.Path('package-feed/data/package_changes_weekly.md'),
)


class References(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.references = []

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        attribute = 'href' if tag in {'a', 'link'} else 'src' if tag in {'script', 'img'} else None
        if attribute and values.get(attribute):
            self.references.append((tag, attribute, values[attribute]))


def local_target(page, value, site_root):
    parsed = urllib.parse.urlsplit(value)
    if parsed.scheme or parsed.netloc or value.startswith(('#', 'mailto:', 'data:')):
        return None
    if parsed.path.startswith('/'):
        raise ValueError('root-relative URL is not portable')
    decoded = urllib.parse.unquote(parsed.path)
    target = (page.parent / decoded).resolve()
    if not target.is_relative_to(site_root):
        raise ValueError('target leaves the published site directory')
    if not decoded or decoded.endswith('/'):
        target = target / 'index.html'
    return target


def check_site(site=SITE):
    site_root = site.resolve()
    errors = []
    for relative in REQUIRED_FILES:
        if not (site / relative).is_file():
            errors.append(f'missing required file: {relative.as_posix()}')

    for path in site.rglob('*'):
        if path.is_file() and '\u2014' in path.read_text('utf-8'):
            errors.append(f'{path.relative_to(site).as_posix()}: use a simple hyphen instead of an em dash')

    for relative in UTILITY_PAGES:
        page = site / relative
        if not page.is_file():
            continue
        source = page.read_text('utf-8')
        if 'class="utility-nav"' not in source:
            errors.append(f'{relative.as_posix()}: shared utility navigation is missing')
        parser = References()
        parser.feed(source)
        for tag, attribute, value in parser.references:
            try:
                target = local_target(page.resolve(), value, site_root)
            except ValueError as error:
                errors.append(f'{relative.as_posix()}: {value}: {error}')
                continue
            if target is not None and not target.is_file():
                errors.append(
                    f'{relative.as_posix()}: broken {tag} {attribute} target: {value}'
                )

    # Literal fetches must stay relative. Dynamic fetches are intentionally ignored.
    for script in site.rglob('*.js'):
        source = script.read_text('utf-8')
        for value in re.findall(r'''fetch\(\s*["']([^"']+)["']''', source):
            parsed = urllib.parse.urlsplit(value)
            if not parsed.scheme and parsed.path.startswith('/'):
                errors.append(f'{script.relative_to(site).as_posix()}: root-relative fetch: {value}')
    return errors


def main():
    errors = check_site()
    if errors:
        for error in errors:
            print(f'FAIL: {error}')
        return 1
    print(f'GitHub Pages readiness PASS: {len(UTILITY_PAGES)} pages and all local targets exist.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
