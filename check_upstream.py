#!/usr/bin/env python3
"""Decide whether the HPM ecosystem has actually changed since the last crawl.

A full crawl is roughly 3,000 requests against a CDN staffed by volunteers.
Almost every scheduled run would make all of them to discover that nothing had
changed. This makes two much cheaper passes instead:

1. The master repository list, plus each developer's repository.json (217
   requests). A new developer appears in the master list; a new, removed or
   relocated package appears in that developer's repository.json.

2. A HEAD request against every already-known package's own manifest URL (909
   requests, no response bodies). This is the pass that matters most in
   practice: repository.json only lists a package's name and manifest
   location, never its version, so a developer who ships a new release
   without otherwise touching their repository.json - the common case - was
   completely invisible to pass 1 alone. GitHub's raw content CDN returns a
   content-derived ETag on HEAD, so an unrelated header change can't cause a
   false positive: it changes if and only if the manifest body would.

Either pass finding a difference is enough to call the ecosystem changed.
Package manifests not yet in the local index (i.e. brand-new packages) are
already covered by pass 1, since a new package necessarily changes its
developer's repository.json.

State lives in upstream_state.json, which is COMMITTED rather than cached. That
matters: it is written here but only committed by the workflow after a
successful crawl. So a run that detects a change and then fails does not record
the change as seen, and the next run tries again instead of silently skipping
work it never did.

Exit code is always 0. The answer goes to stdout and to $GITHUB_OUTPUT as
`changed=true|false`, because "nothing changed" is a normal outcome, not a
failure.
"""

import concurrent.futures
import hashlib
import json
import os
import pathlib
import sys
import time
import urllib.error
import urllib.request

MASTER_URL = 'https://raw.githubusercontent.com/HubitatCommunity/hubitat-packagerepositories/master/repositories.json'
STATE = pathlib.Path('upstream_state.json')
PACKAGE_INDEX = pathlib.Path('hpm_package_index.json')
MAX_WORKERS = 5
BATCH_DELAY = 0.15
TIMEOUT = 20
ALLOWED_HOSTS = {'raw.githubusercontent.com', 'github.com'}


def fetch(url):
    """Fetch one URL with no caching. Returns bytes, or None with a reason."""
    req = urllib.request.Request(url, headers={'User-Agent': 'hpm-manifest-crawl/upstream-check'})
    for attempt in (1, 2):
        try:
            with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
                return r.read(), None
        except Exception as exc:
            if attempt == 2:
                return None, f'{type(exc).__name__}: {exc}'
            time.sleep(1.0)
    return None, 'unreachable'


def head_etag(url):
    """HEAD one URL, returning its ETag with no response body transferred."""
    req = urllib.request.Request(
        url, method='HEAD', headers={'User-Agent': 'hpm-manifest-crawl/upstream-check'})
    for attempt in (1, 2):
        try:
            with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
                return r.headers.get('ETag'), None
        except Exception as exc:
            if attempt == 2:
                return None, f'{type(exc).__name__}: {exc}'
            time.sleep(1.0)
    return None, 'unreachable'


def package_manifest_urls():
    """Manifest URLs from the last committed crawl. Empty on the very first
    run (no index yet), which is fine: pass 1 alone already reports changed
    in that case."""
    if not PACKAGE_INDEX.exists():
        return []
    try:
        packages = json.loads(PACKAGE_INDEX.read_text('utf-8')).get('packages', [])
    except Exception:
        return []
    urls = set()
    for package in packages:
        url = package.get('manifestUrl')
        if isinstance(url, str) and url.startswith('https://'):
            try:
                if urllib.request.urlparse(url).hostname in ALLOWED_HOSTS:
                    urls.add(url)
            except Exception:
                pass
    return sorted(urls)


def check_urls(urls, checker):
    """Run checker(url) -> (value, error) over urls with the same bounded
    concurrency and CDN-friendly pacing as the rest of this script."""
    results = {}
    failures = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as ex:
        for i in range(0, len(urls), MAX_WORKERS):
            batch = urls[i:i + MAX_WORKERS]
            for url, (value, error) in zip(batch, ex.map(checker, batch)):
                if value is None:
                    failures += 1
                    # A manifest that starts failing counts as a change too,
                    # rather than being invisible - same reasoning as pass 1.
                    results[url] = 'UNREACHABLE'
                else:
                    results[url] = value
            time.sleep(BATCH_DELAY)
    return results, failures


def fetch_hash(url):
    body, error = fetch(url)
    if body is None:
        return None, error
    return hashlib.sha256(body).hexdigest(), None


def main():
    body, err = fetch(MASTER_URL)
    if body is None:
        # Cannot tell whether anything changed, so assume it did. Running a
        # crawl unnecessarily is cheap; skipping one that was needed is not.
        emit(True, f'master list unreachable ({err}); assuming changed')
        return

    try:
        repos = json.loads(body.decode('utf-8')).get('repositories', [])
    except Exception as exc:
        emit(True, f'master list unparseable ({exc}); assuming changed')
        return

    repo_urls = []
    for r in repos:
        loc = (r or {}).get('location')
        if not isinstance(loc, str) or not loc.startswith('https://'):
            continue
        try:
            if urllib.request.urlparse(loc).hostname not in ALLOWED_HOSTS:
                continue
        except Exception:
            pass
        repo_urls.append(loc)
    repo_urls = sorted(set(repo_urls))

    digests, repo_failures = check_urls(repo_urls, fetch_hash)

    manifest_urls = package_manifest_urls()
    manifest_etags, manifest_failures = check_urls(manifest_urls, head_etag)

    canonical = json.dumps(
        {
            'master': hashlib.sha256(body).hexdigest(),
            'repositories': digests,
            'packageManifests': manifest_etags,
        },
        sort_keys=True, separators=(',', ':'))
    fingerprint = hashlib.sha256(canonical.encode('utf-8')).hexdigest()

    previous = None
    if STATE.exists():
        try:
            previous = json.loads(STATE.read_text('utf-8')).get('fingerprint')
        except Exception:
            previous = None

    changed = (previous != fingerprint)
    STATE.write_text(json.dumps({
        'fingerprint': fingerprint,
        'repositoryCount': len(repos),
        'repositoriesHashed': len(digests),
        'unreachable': repo_failures,
        'packageManifestsChecked': len(manifest_etags),
        'packageManifestsUnreachable': manifest_failures,
        'checkedAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()),
    }, indent=2, sort_keys=True) + '\n', encoding='utf-8', newline='\n')

    if previous is None:
        emit(True,
             f'no previous fingerprint recorded; {len(digests)} repositories hashed, '
             f'{len(manifest_etags)} package manifests checked')
    else:
        emit(changed,
             f'{len(digests)} repositories hashed ({repo_failures} unreachable), '
             f'{len(manifest_etags)} package manifests checked ({manifest_failures} unreachable); '
             f'fingerprint {"differs from" if changed else "matches"} last successful crawl')


def emit(changed, reason):
    value = 'true' if changed else 'false'
    print(f'changed={value}  ({reason})')
    out = os.environ.get('GITHUB_OUTPUT')
    if out:
        with open(out, 'a', encoding='utf-8') as fh:
            fh.write(f'changed={value}\n')
            fh.write(f'reason={reason}\n')
    sys.exit(0)


if __name__ == '__main__':
    main()
