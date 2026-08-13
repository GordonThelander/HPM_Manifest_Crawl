#!/usr/bin/env python3
"""Enrich Hubitat-native registry entries from official Hubitat documentation.

The crawler discovers app documentation from https://docs2.hubitat.com/apps,
matches pages conservatively to native registry identities, and stores only
observable documentation statements. It does not manufacture dependencies.
"""

import datetime as dt
import hashlib
import html.parser
import json
import pathlib
import re
import time
import urllib.error
import urllib.parse
import urllib.request

REGISTRY = pathlib.Path('hubitat_automation_map_app_integration_registry_v0.4.json')
HPM_INDEX = pathlib.Path('hpm_package_index.json')
DOC_INDEX = pathlib.Path('hubitat_official_docs_index.json')
APPS_URL = 'https://docs2.hubitat.com/apps'
CACHE = pathlib.Path('.hubitat_docs_cache')
MAX_BYTES = 2 * 1024 * 1024
TIMEOUT = 20
RETRIES = 1
USER_AGENT = 'Hubitat-Automation-Map-Docs-Enrichment/1.0'


def utc_now():
    return dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat().replace('+00:00', 'Z')


def cache_path(url):
    CACHE.mkdir(exist_ok=True)
    return CACHE / (hashlib.sha256(url.encode('utf-8')).hexdigest() + '.bin')


def fetch(url):
    p = urllib.parse.urlparse(url)
    if p.scheme != 'https' or (p.hostname or '').lower() != 'docs2.hubitat.com':
        raise RuntimeError(f'official-doc URL rejected: {url}')
    cp = cache_path(url)
    if cp.exists():
        return cp.read_bytes(), True
    last = None
    for attempt in range(RETRIES + 1):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
            with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
                final = urllib.parse.urlparse(r.geturl())
                if final.scheme != 'https' or (final.hostname or '').lower() != 'docs2.hubitat.com':
                    raise RuntimeError(f'redirect outside docs2.hubitat.com: {r.geturl()}')
                body = r.read(MAX_BYTES + 1)
                if len(body) > MAX_BYTES:
                    raise RuntimeError(f'document exceeds {MAX_BYTES} byte safety limit')
                cp.write_bytes(body)
                return body, False
        except Exception as e:
            last = e
            if attempt < RETRIES:
                time.sleep(0.25)
    raise RuntimeError(str(last))


class LinkParser(html.parser.HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.href = None
        self.parts = []
        self.links = []

    def handle_starttag(self, tag, attrs):
        if tag.lower() == 'a':
            self.href = dict(attrs).get('href')
            self.parts = []

    def handle_data(self, data):
        if self.href is not None:
            self.parts.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == 'a' and self.href is not None:
            text = ' '.join(''.join(self.parts).split())
            self.links.append((self.href, text))
            self.href = None
            self.parts = []


class TextParser(html.parser.HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.skip = 0
        self.parts = []
        self.title = None
        self.in_title = False

    def handle_starttag(self, tag, attrs):
        tag = tag.lower()
        if tag in {'script', 'style', 'svg'}:
            self.skip += 1
        if tag == 'title':
            self.in_title = True
        if tag in {'p', 'li', 'h1', 'h2', 'h3', 'blockquote', 'br'} and not self.skip:
            self.parts.append('\n')

    def handle_endtag(self, tag):
        tag = tag.lower()
        if tag in {'script', 'style', 'svg'} and self.skip:
            self.skip -= 1
        if tag == 'title':
            self.in_title = False
        if tag in {'p', 'li', 'h1', 'h2', 'h3', 'blockquote'} and not self.skip:
            self.parts.append('\n')

    def handle_data(self, data):
        if self.skip:
            return
        if self.in_title and self.title is None:
            self.title = data.strip()
        self.parts.append(data)

    def text(self):
        raw = ''.join(self.parts)
        lines = [' '.join(x.split()) for x in raw.splitlines()]
        return '\n'.join(x for x in lines if x)


def normalise(value):
    if not isinstance(value, str):
        return ''
    value = value.replace('®', '').replace('™', '')
    return ''.join(ch.lower() for ch in value if ch.isalnum())


def variants(value):
    n = normalise(value)
    out = {n} if n else set()
    for suffix in ('integration', 'app'):
        if n.endswith(suffix) and len(n) > len(suffix):
            out.add(n[:-len(suffix)])
    return out


def discover_pages():
    body, cached = fetch(APPS_URL)
    parser = LinkParser()
    parser.feed(body.decode('utf-8', errors='replace'))
    found = {}
    for href, text in parser.links:
        if not href or not text:
            continue
        absolute = urllib.parse.urljoin(APPS_URL, href)
        p = urllib.parse.urlparse(absolute)
        if p.hostname != 'docs2.hubitat.com':
            continue
        path = p.path.rstrip('/')
        if '/apps/' not in path or path.endswith('/apps'):
            continue
        url = urllib.parse.urlunparse(('https', 'docs2.hubitat.com', path, '', '', ''))
        found[(text, url)] = {'title': text, 'url': url}
    pages = sorted(found.values(), key=lambda x: (normalise(x['title']), x['url']))
    return pages, cached


def entry_candidates(entry):
    vals = []
    if entry.get('name'):
        vals.append(entry['name'])
    for rule in entry.get('matchRules', []):
        if rule.get('field') in {'appName', 'parentAppName'} and isinstance(rule.get('value'), str):
            vals.append(rule['value'])
    return vals


def match_page(entry, pages):
    candidates = entry_candidates(entry)
    # First require exact normalised identity.
    for c in candidates:
        cn = normalise(c)
        hits = [p for p in pages if normalise(p['title']) == cn]
        if len(hits) == 1:
            return hits[0], c, 'EXACT_NORMALISED'
    # Then allow the sole semantic relaxation used here: optional trailing
    # word "Integration" or "App" on either side. No fuzzy matching.
    for c in candidates:
        cv = variants(c)
        hits = [p for p in pages if cv.intersection(variants(p['title']))]
        unique = {(p['title'], p['url']): p for p in hits}
        if len(unique) == 1:
            return next(iter(unique.values())), c, 'SUFFIX_VARIANT'
    return None, None, None


def sentences(text):
    # Preserve short documentation statements without pretending to perform
    # natural-language semantic parsing.
    flat = re.sub(r'\s+', ' ', text)
    return [x.strip() for x in re.split(r'(?<=[.!?])\s+', flat) if x.strip()]


def observation_type(sentence):
    s = sentence.lower()
    types = []
    if 'built-in' in s or 'built in' in s:
        types.append('BUILT_IN_STATUS')
    if 'requires hub model' in s or 'requires platform version' in s or 'requires version' in s:
        types.append('PLATFORM_REQUIREMENT')
    if 'local area network' in s or 'same local network' in s or 'over your lan' in s or 'over the lan' in s or 'done locally' in s or 'control will be done locally' in s:
        types.append('LOCAL_NETWORK_BEHAVIOUR')
    if 'cloud' in s:
        types.append('CLOUD_BEHAVIOUR')
    if 'mqtt broker' in s:
        types.append('MQTT_BROKER')
    if 'websocket' in s or 'web socket' in s:
        types.append('WEBSOCKET_BEHAVIOUR')
    if 'child device' in s:
        types.append('CHILD_DEVICE_BEHAVIOUR')
    if 'bridge' in s and any(x in s for x in ('requires', ' via ', 'through', 'bridge integration', 'bridge devices', 'bond bridge', 'hue bridge')):
        types.append('BRIDGE_BEHAVIOUR')
    if 'api key' in s or 'access token' in s or 'oauth' in s:
        types.append('AUTHENTICATION_BEHAVIOUR')
    if 'ip address' in s or 'hostname' in s or 'port ' in s:
        types.append('NETWORK_ENDPOINT_BEHAVIOUR')
    return types


def analyse_page(body):
    parser = TextParser()
    parser.feed(body.decode('utf-8', errors='replace'))
    text = parser.text()
    observations = []
    seen = set()
    for sentence in sentences(text):
        types = observation_type(sentence)
        for typ in types:
            evidence = sentence[:500]
            key = (typ, evidence)
            if key in seen:
                continue
            seen.add(key)
            observations.append({'type': typ, 'evidence': evidence})
    observations.sort(key=lambda x: (x['type'], x['evidence']))
    return parser.title, observations


def is_native(entry):
    origin = str(entry.get('origin') or '')
    return origin == 'HUBITAT_NATIVE' or entry.get('sourceVisibility') == 'CLOSED_NATIVE'


def main():
    registry = json.loads(REGISTRY.read_text(encoding='utf-8'))
    hpm = json.loads(HPM_INDEX.read_text(encoding='utf-8')) if HPM_INDEX.exists() else {}
    pages, index_cached = discover_pages()
    errors = []
    matches = []
    page_cache = {}
    native_entries = [e for e in registry.get('entries', []) if is_native(e)]

    for entry in native_entries:
        page, matched_by, mode = match_page(entry, pages)
        if not page:
            # Remove stale generated official-doc evidence, if any.
            old = [x for x in entry.get('documentationEvidence', []) if x.get('sourceType') != 'HUBITAT_OFFICIAL_DOC']
            if old:
                entry['documentationEvidence'] = old
            elif 'documentationEvidence' in entry:
                entry.pop('documentationEvidence', None)
            continue
        try:
            if page['url'] not in page_cache:
                body, cached = fetch(page['url'])
                title, observations = analyse_page(body)
                page_cache[page['url']] = (title, observations, cached)
            title, observations, cached = page_cache[page['url']]
            evidence = {
                'sourceType': 'HUBITAT_OFFICIAL_DOC',
                'url': page['url'],
                'title': page['title'],
                'matchedBy': matched_by,
                'matchMode': mode,
                'observations': observations,
            }
            old = [x for x in entry.get('documentationEvidence', []) if x.get('sourceType') != 'HUBITAT_OFFICIAL_DOC']
            entry['documentationEvidence'] = old + [evidence]
            matches.append({
                'entryId': entry.get('id'),
                'entryName': entry.get('name'),
                'docTitle': page['title'],
                'url': page['url'],
                'matchedBy': matched_by,
                'matchMode': mode,
                'observationCount': len(observations),
                'cacheHit': cached,
            })
        except Exception as exc:
            errors.append({'entryId': entry.get('id'), 'url': page['url'], 'reason': str(exc)})

    matched_ids = {x['entryId'] for x in matches}
    unmatched = sorted([
        {'entryId': e.get('id'), 'entryName': e.get('name')}
        for e in native_entries if e.get('id') not in matched_ids
    ], key=lambda x: ((x.get('entryName') or ''), (x.get('entryId') or '')))

    registry['documentationEvidencePolicy'] = {
        'HUBITAT_OFFICIAL_DOC': 'Statements harvested from docs2.hubitat.com. They are evidence observations only and are not automatically converted into dependencies.',
        'matching': 'Exact normalised identity is preferred. The only fallback removes a trailing Integration/App suffix and must resolve to exactly one page.',
    }
    REGISTRY.write_text(json.dumps(registry, indent=2, ensure_ascii=False) + '\n', encoding='utf-8', newline='\n')

    doc_index = {
        'schemaVersion': '1',
        'snapshotGenerated': hpm.get('snapshotGenerated') or utc_now(),
        'source': APPS_URL,
        'discoveredDocumentationPages': len(pages),
        'nativeRegistryEntries': len(native_entries),
        'matchedNativeEntries': len(matches),
        'unmatchedNativeEntries': len(unmatched),
        'appsIndexCacheHit': index_cached,
        'matches': sorted(matches, key=lambda x: ((x.get('entryId') or ''), (x.get('url') or ''))),
        'unmatched': unmatched,
        'errors': sorted(errors, key=lambda x: ((x.get('entryId') or ''), (x.get('url') or ''), (x.get('reason') or ''))),
    }
    DOC_INDEX.write_text(json.dumps(doc_index, indent=2, sort_keys=True, ensure_ascii=False) + '\n', encoding='utf-8', newline='\n')
    print(json.dumps({k: doc_index[k] for k in ('discoveredDocumentationPages','nativeRegistryEntries','matchedNativeEntries','unmatchedNativeEntries')}, indent=2))


if __name__ == '__main__':
    main()
