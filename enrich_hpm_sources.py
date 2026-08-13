#!/usr/bin/env python3
"""Static, non-executing enrichment of HPM app/driver Groovy source.

Reads hpm_package_index.json produced by crawl_hpm.py, fetches every distinct
component sourceUrl, and records literal implementation observations.  This
stage intentionally does NOT create architecture dependencies.
"""

import hashlib
import json
import pathlib
import re
from collections import Counter

import crawl_hpm

INDEX = pathlib.Path('hpm_package_index.json')
ANALYSIS_VERSION = '1'
MAX_SOURCE_BYTES = 2 * 1024 * 1024
MAX_OBSERVATIONS_PER_FILE = 250

URL_RE = re.compile(r'https?://[^\s\'"<>)}]+')
CAPABILITY_RE = re.compile(r'\bcapability\.([A-Za-z0-9_]+)')
DEFINITION_RE = re.compile(r'\bdefinition\s*\(', re.MULTILINE)


def line_number(text, offset):
    return text.count('\n', 0, max(0, offset)) + 1


def excerpt(text, offset, width=240):
    start = text.rfind('\n', 0, offset)
    end = text.find('\n', offset)
    start = 0 if start < 0 else start + 1
    end = len(text) if end < 0 else end
    value = ' '.join(text[start:end].strip().split())
    return value[:width]


def add_obs(out, seen, obs):
    key = (obs.get('type'), json.dumps(obs.get('value'), sort_keys=True, ensure_ascii=False), obs.get('line'))
    if key in seen or len(out) >= MAX_OBSERVATIONS_PER_FILE:
        return
    seen.add(key)
    out.append(obs)


def find_literal_definition(text):
    """Return literal definition name/namespace only when unambiguous.

    This deliberately does not parse/evaluate Groovy.  It examines a bounded
    window following definition( and accepts only quoted literal values.
    """
    hits = []
    for m in DEFINITION_RE.finditer(text):
        window = text[m.start():m.start() + 4000]
        name_m = re.search(r'\bname\s*:\s*([\'\"])(.*?)\1', window, re.DOTALL)
        ns_m = re.search(r'\bnamespace\s*:\s*([\'\"])(.*?)\1', window, re.DOTALL)
        if name_m or ns_m:
            hits.append((
                name_m.group(2) if name_m else None,
                ns_m.group(2) if ns_m else None,
                line_number(text, m.start()),
            ))
    unique = {(a, b) for a, b, _ in hits}
    if len(unique) == 1:
        a, b = next(iter(unique))
        line = hits[0][2]
        return a, b, line
    return None, None, None


def analyse(text):
    observations = []
    seen = set()

    def flag(pattern, typ, value=True, flags=0):
        for m in re.finditer(pattern, text, flags):
            add_obs(observations, seen, {
                'type': typ,
                'value': value,
                'line': line_number(text, m.start()),
                'evidence': excerpt(text, m.start()),
            })

    # Hubitat application/driver structure.
    flag(r'\baddChildDevice\s*\(', 'CHILD_DEVICE_CREATE')
    flag(r'\bgetChildDevices\s*\(', 'CHILD_DEVICE_ACCESS')
    flag(r'\bsubscribe\s*\(', 'EVENT_SUBSCRIPTION')
    flag(r'\b(?:schedule|runIn|runOnce|runEvery\d+Minutes|runEvery\d+Hours|unschedule)\s*\(', 'SCHEDULING')

    for m in CAPABILITY_RE.finditer(text):
        add_obs(observations, seen, {
            'type': 'CAPABILITY_REFERENCE',
            'value': m.group(1),
            'line': line_number(text, m.start()),
            'evidence': excerpt(text, m.start()),
        })

    # HTTP/network primitives.
    for method in ('httpGet', 'httpPost', 'httpPut', 'httpDelete',
                   'asynchttpGet', 'asynchttpPost', 'asynchttpPut', 'asynchttpDelete'):
        flag(r'\b' + re.escape(method) + r'\s*\(', 'HTTP_CALL', method)

    for m in URL_RE.finditer(text):
        raw = m.group(0).rstrip('.,;]')
        try:
            from urllib.parse import urlparse
            p = urlparse(raw)
            value = {'scheme': p.scheme.lower(), 'host': p.hostname, 'url': raw}
        except Exception:
            value = {'url': raw}
        add_obs(observations, seen, {
            'type': 'NETWORK_URL_LITERAL',
            'value': value,
            'line': line_number(text, m.start()),
            'evidence': excerpt(text, m.start()),
        })

    flag(r'\b(?:new\s+)?HubAction\s*\(', 'HUB_ACTION')
    flag(r'\bsendHubCommand\s*\(', 'SEND_HUB_COMMAND')
    flag(r'\bparseLanMessage\s*\(', 'PARSE_LAN_MESSAGE')
    flag(r'\bProtocol\.LAN\b', 'LAN_PROTOCOL', 'Protocol.LAN')
    flag(r'\bLAN_TYPE_UDPCLIENT\b', 'UDP_PROTOCOL', 'LAN_TYPE_UDPCLIENT')
    flag(r'\binterfaces\.webSocket\b', 'WEBSOCKET_INTERFACE')
    flag(r'\binterfaces\.rawSocket\b', 'RAW_SOCKET_INTERFACE')

    # External/API surface and authentication primitives.
    flag(r'\bcreateAccessToken\s*\(', 'OAUTH_ACCESS_TOKEN')
    flag(r'\bmappings\s*\{', 'OAUTH_API_MAPPINGS')
    flag(r'\boauth\s*:\s*true\b', 'OAUTH_ENABLED')

    # Protocol APIs. These are observations of code references, not a claim
    # that every path is exercised at runtime.
    flag(r'\bzigbee\.', 'ZIGBEE_API_REFERENCE')
    flag(r'\bzwave\.', 'ZWAVE_API_REFERENCE')
    flag(r'\bmatter\.', 'MATTER_API_REFERENCE')

    observations.sort(key=lambda x: (x.get('line') or 0, x.get('type') or '', json.dumps(x.get('value'), sort_keys=True, ensure_ascii=False)))
    return observations


def source_urls(index):
    result = []
    seen = set()
    for p in index.get('packages', []):
        for kind in ('apps', 'drivers'):
            for c in p.get(kind, []):
                u = c.get('sourceUrl')
                if isinstance(u, str) and u and u not in seen:
                    seen.add(u)
                    result.append(u)
    return result


def fetch_one(url):
    body = crawl_hpm.fetch_url(url, 'source')
    if len(body) > MAX_SOURCE_BYTES:
        raise RuntimeError(f'source exceeds {MAX_SOURCE_BYTES} byte safety limit')
    try:
        text = body.decode('utf-8-sig')
    except UnicodeDecodeError as e:
        raise RuntimeError(f'UTF-8 decode error: {e}')
    definition_name, definition_namespace, definition_line = find_literal_definition(text)
    return {
        'sourceFetched': True,
        'sourceSha256': hashlib.sha256(body).hexdigest(),
        'sourceBytes': len(body),
        'definitionName': definition_name,
        'definitionNamespace': definition_namespace,
        'definitionLine': definition_line,
        'observations': analyse(text),
    }


def main():
    index = json.loads(INDEX.read_text(encoding='utf-8'))
    urls = source_urls(index)
    results = crawl_hpm.batched_map(urls, fetch_one)
    by_url = {}
    source_errors = []

    for url, data, failure in results:
        if failure:
            by_url[url] = {
                'sourceFetched': False,
                'sourceSha256': None,
                'sourceBytes': None,
                'definitionName': None,
                'definitionNamespace': None,
                'definitionLine': None,
                'observations': [],
                'sourceError': failure,
            }
            source_errors.append({'level': 'source', 'url': url, 'reason': failure})
        else:
            by_url[url] = data

    counts = Counter()
    for p in index.get('packages', []):
        for kind in ('apps', 'drivers'):
            for c in p.get(kind, []):
                u = c.get('sourceUrl')
                if not isinstance(u, str) or not u:
                    c.update({
                        'sourceFetched': False,
                        'sourceSha256': None,
                        'sourceBytes': None,
                        'observations': [],
                    })
                    continue
                data = by_url.get(u)
                if not data:
                    continue
                c.update(data)
                counts['componentsAttempted'] += 1
                if data.get('sourceFetched'):
                    counts['componentsFetched'] += 1
                    if data.get('definitionName') or data.get('definitionNamespace'):
                        counts['definitionsVerified'] += 1
                    if data.get('observations'):
                        counts['componentsWithObservations'] += 1
                else:
                    counts['componentsFailed'] += 1

    # Preserve earlier repository/manifest errors and append source failures.
    old_errors = [e for e in index.get('errors', []) if e.get('level') != 'source']
    index['errors'] = sorted(old_errors + source_errors, key=lambda e: ((e.get('level') or ''), (e.get('url') or ''), (e.get('reason') or '')))
    index['sourcePassCompleted'] = True
    index['sourceAnalysisVersion'] = ANALYSIS_VERSION
    index['sourceStats'] = {
        'distinctSourceUrls': len(urls),
        'sourceUrlsFetched': sum(1 for x in by_url.values() if x.get('sourceFetched')),
        'sourceUrlsFailed': sum(1 for x in by_url.values() if not x.get('sourceFetched')),
        **{k: counts.get(k, 0) for k in ('componentsAttempted','componentsFetched','componentsFailed','definitionsVerified','componentsWithObservations')},
    }

    crawl_hpm.dump_json(INDEX, index)
    print(json.dumps(index['sourceStats'], indent=2, sort_keys=True))


if __name__ == '__main__':
    main()
