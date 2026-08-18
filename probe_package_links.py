#!/usr/bin/env python3
"""Probe declared documentation and community links as untrusted public URLs."""

import argparse
import concurrent.futures
import ipaddress
import json
import pathlib
import socket
import sys
import time
import urllib.error
import urllib.parse
import urllib.request


PACKAGES = pathlib.Path('community_packages.json')
OUTPUT = pathlib.Path('link_reachability.json')
SCHEMA_VERSION = '1.0'
MAX_BYTES = 65536
TIMEOUT = 10
WORKERS = 12


def validate_public_url(url):
    parsed = urllib.parse.urlparse(url)
    if parsed.scheme not in {'http', 'https'} or not parsed.hostname:
        raise ValueError('URL must use HTTP(S) and include a host')
    try:
        addresses = socket.getaddrinfo(parsed.hostname, parsed.port or
                                       (443 if parsed.scheme == 'https' else 80))
    except socket.gaierror as exc:
        raise ValueError(f'DNS failure: {exc}') from exc
    for address in addresses:
        ip = ipaddress.ip_address(address[4][0])
        if not ip.is_global:
            raise ValueError('private, loopback, reserved, or link-local target rejected')
    return parsed


class PublicRedirectHandler(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        validate_public_url(newurl)
        return super().redirect_request(req, fp, code, msg, headers, newurl)


def classify_http(code):
    if 200 <= code < 400 or code in {401, 403}:
        return 'REACHABLE'
    if code in {404, 410}:
        return 'BROKEN'
    if code == 429 or 500 <= code < 600:
        return 'TRANSIENT_FAILURE'
    return 'HTTP_FAILURE'


def probe(url, timeout=TIMEOUT):
    parsed = validate_public_url(url)
    if parsed.scheme == 'http':
        return {'status': 'HTTP_ONLY', 'httpStatus': None,
                'finalUrl': url, 'reason': 'clear-text HTTP declaration; request not sent'}
    request = urllib.request.Request(
        url, headers={'User-Agent': 'HPM-Manifest-Crawl/health-monitor',
                      'Range': f'bytes=0-{MAX_BYTES - 1}', 'Accept': '*/*'})
    opener = urllib.request.build_opener(PublicRedirectHandler())
    try:
        with opener.open(request, timeout=timeout) as response:
            response.read(MAX_BYTES + 1)
            return {'status': classify_http(response.status),
                    'httpStatus': response.status, 'finalUrl': response.geturl(),
                    'reason': None}
    except urllib.error.HTTPError as exc:
        return {'status': classify_http(exc.code), 'httpStatus': exc.code,
                'finalUrl': exc.geturl(), 'reason': str(exc.reason)[:500]}
    except (urllib.error.URLError, TimeoutError, socket.timeout, ValueError) as exc:
        return {'status': 'TRANSIENT_FAILURE', 'httpStatus': None,
                'finalUrl': url, 'reason': str(exc)[:500]}


def collect(packages_doc):
    references = {}
    for package in packages_doc.get('packages') or []:
        for kind in ('documentation', 'community'):
            url = (package.get('links') or {}).get(kind)
            if url:
                references.setdefault(url, []).append({
                    'packageId': package['id'], 'kind': kind,
                })
    return references


def build(packages_doc, probe_func=probe, workers=WORKERS):
    references = collect(packages_doc)
    results = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
        futures = {executor.submit(probe_func, url): url for url in references}
        for future in concurrent.futures.as_completed(futures):
            url = futures[future]
            try:
                result = future.result()
            except Exception as exc:  # one target must not discard the snapshot
                result = {'status': 'TRANSIENT_FAILURE', 'httpStatus': None,
                          'finalUrl': url, 'reason': str(exc)[:500]}
            results[url] = result
    records = []
    for url in sorted(references):
        records.append({'url': url, 'references': sorted(
            references[url], key=lambda item: (item['packageId'], item['kind'])),
            **results[url]})
    return {
        'schemaVersion': SCHEMA_VERSION,
        'dataset': 'link-reachability',
        'snapshotGenerated': packages_doc.get('snapshotGenerated'),
        'method': {'maxResponseBytes': MAX_BYTES, 'timeoutSeconds': TIMEOUT,
                   'workers': workers, 'executesDownloadedContent': False},
        'linkCount': len(records),
        'links': records,
    }


def validate(document):
    if document.get('schemaVersion') != SCHEMA_VERSION:
        raise ValueError('unexpected schema version')
    if document.get('dataset') != 'link-reachability':
        raise ValueError('unexpected dataset')
    links = document.get('links')
    if not isinstance(links, list) or document.get('linkCount') != len(links):
        raise ValueError('linkCount does not match links')
    urls = [row.get('url') for row in links]
    if any(not url for url in urls) or len(urls) != len(set(urls)):
        raise ValueError('link URLs must be present and unique')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--check', action='store_true')
    parser.add_argument('--out', type=pathlib.Path, default=OUTPUT)
    args = parser.parse_args()
    if args.check:
        try:
            validate(json.loads(args.out.read_text('utf-8')))
        except (OSError, ValueError, json.JSONDecodeError) as exc:
            print(f'FAIL: {exc}', file=sys.stderr)
            return 1
        print('Link reachability output passes offline checks.')
        return 0
    document = build(json.loads(PACKAGES.read_text('utf-8')))
    validate(document)
    args.out.write_text(json.dumps(document, indent=2, ensure_ascii=False,
                                   sort_keys=True) + '\n', encoding='utf-8', newline='\n')
    print(f'Wrote {args.out}: {document["linkCount"]} unique links.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
