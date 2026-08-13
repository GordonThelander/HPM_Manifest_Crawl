#!/usr/bin/env python3
"""Decide whether the HPM ecosystem has actually changed since the last crawl.

A full crawl is roughly 3,000 requests against a CDN staffed by volunteers.
Almost every scheduled run would make all of them to discover that nothing had
changed. This makes 217 instead: the master repository list, plus each
developer's repository.json.

Those files are where every observable change surfaces. A new developer appears
in the master list; a new, removed or updated package appears in that
developer's repository.json, because the package version lives there. So a
combined hash over all of them is a reliable "has anything moved" signal
without touching a single package manifest or source file.

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
MAX_WORKERS = 5
BATCH_DELAY = 0.15
TIMEOUT = 20
ALLOWED_HOSTS = {'raw.githubusercontent.com', 'github.com'}


def fetch(url):
    """Fetch one URL with no caching. Returns bytes, or None with a reason."""
    try:
        host = urllib.request.urlparse(url).hostname if hasattr(urllib.request, 'urlparse') else None
    except Exception:
        host = None
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

    urls = []
    for r in repos:
        loc = (r or {}).get('location')
        if not isinstance(loc, str) or not loc.startswith('https://'):
            continue
        try:
            if urllib.request.urlparse(loc).hostname not in ALLOWED_HOSTS:
                continue
        except Exception:
            pass
        urls.append(loc)
    urls = sorted(set(urls))

    digests = {}
    failures = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as ex:
        for i in range(0, len(urls), MAX_WORKERS):
            batch = urls[i:i + MAX_WORKERS]
            for url, (data, ferr) in zip(batch, ex.map(fetch, batch)):
                if data is None:
                    failures += 1
                    # Record the failure itself, so a repository that starts
                    # failing counts as a change rather than being invisible.
                    digests[url] = 'UNREACHABLE'
                else:
                    digests[url] = hashlib.sha256(data).hexdigest()
            time.sleep(BATCH_DELAY)

    canonical = json.dumps(
        {'master': hashlib.sha256(body).hexdigest(), 'repositories': digests},
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
        'unreachable': failures,
        'checkedAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()),
    }, indent=2, sort_keys=True) + '\n', encoding='utf-8', newline='\n')

    if previous is None:
        emit(True, f'no previous fingerprint recorded; {len(digests)} repositories hashed')
    else:
        emit(changed,
             f'{len(digests)} repositories hashed, {failures} unreachable; '
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
