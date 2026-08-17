#!/usr/bin/env python3
"""Harvest official devices and the Hubitat community app/driver wikis.

The three outputs are independent community discovery datasets. They never
write either Automation Map registry and never promote a listing into an
architectural dependency.
"""

import argparse
import hashlib
from html.parser import HTMLParser
import json
import pathlib
import re
import sys
import time
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen


SCHEMA_VERSION = '1.0'
OFFICIAL_PAGE = 'https://docs2.hubitat.com/en/devices/list-of-compatible-devices'
OFFICIAL_ENDPOINT = 'https://3m7c2370ef.execute-api.us-east-2.amazonaws.com/deviceListPublic'
DRIVER_WIKI_PAGE = 'https://community.hubitat.com/t/custom-device-drivers-wiki/465'
DRIVER_WIKI_JSON = DRIVER_WIKI_PAGE + '.json'
APP_WIKI_PAGE = 'https://community.hubitat.com/t/custom-apps-wiki/501'
APP_WIKI_JSON = APP_WIKI_PAGE + '.json'

OUTPUTS = {
    'official': pathlib.Path('official_devices.json'),
    'drivers': pathlib.Path('community_drivers.json'),
    'apps': pathlib.Path('community_apps.json'),
}
EXPECTED_OFFICIAL_HEADERS = [
    'Brand', 'Device', 'Product Number', 'Device type', 'Protocol',
    'Driver or app name', 'Instructions', 'Buy it',
]
MIN_OFFICIAL_ROWS = 100
MAX_FETCH_BYTES = 20 * 1024 * 1024
USER_AGENT = 'HPM-Manifest-Crawl/1.0 (+https://github.com/GordonThelander/HPM_Manifest_Crawl)'
LIFECYCLE_WORDS = ('obsolete', 'withdrawn', 'deprecated', 'superseded')


def clean(value):
    if value is None:
        return None
    text = re.sub(r'\s+', ' ', str(value)).strip()
    return text or None


def stable_hash(*parts):
    material = '\x1f'.join(clean(part) or '' for part in parts)
    return hashlib.sha256(material.encode('utf-8')).hexdigest()[:20]


def safe_link(base_url, href):
    if not href:
        return None
    absolute = urljoin(base_url, href.strip())
    parsed = urlparse(absolute)
    if parsed.scheme not in ('http', 'https') or not parsed.netloc:
        return None
    return absolute


def canonical_link(url):
    if not url:
        return None
    parsed = urlparse(url.strip())
    host = parsed.netloc.lower()
    path = re.sub(r'/+', '/', parsed.path).rstrip('/')
    if host == 'community.hubitat.com':
        parts = [part for part in path.split('/') if part]
        if len(parts) >= 3 and parts[0] == 't' and parts[2].isdigit():
            path = '/' + '/'.join(parts[:3])
    return f'{parsed.scheme.lower()}://{host}{path}' if parsed.scheme and host else None


def fetch(url, attempts=2):
    if not url.startswith('https://'):
        raise ValueError(f'non-HTTPS source refused: {url}')
    last_error = None
    for attempt in range(attempts):
        try:
            request = Request(url, headers={'User-Agent': USER_AGENT, 'Accept': '*/*'})
            with urlopen(request, timeout=30) as response:
                body = response.read(MAX_FETCH_BYTES + 1)
                if len(body) > MAX_FETCH_BYTES:
                    raise ValueError(f'response exceeded {MAX_FETCH_BYTES} bytes')
                return body, dict(response.headers.items())
        except Exception as exc:
            last_error = exc
            if attempt + 1 < attempts:
                time.sleep(1)
    raise RuntimeError(f'failed to fetch {url}: {last_error}')


class StructuredHtmlParser(HTMLParser):
    """Capture h2/h3 sections, table cells and list items without executing HTML."""

    def __init__(self, base_url):
        super().__init__(convert_charrefs=True)
        self.base_url = base_url
        self.section = 'Uncategorised'
        self.tables = []
        self.items = []
        self._heading_tag = None
        self._heading_text = []
        self._in_table = False
        self._row = None
        self._cell = None
        self._cell_tag = None
        self._headers = []
        self._list_item = None

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if tag in ('h2', 'h3'):
            self._heading_tag = tag
            self._heading_text = []
        elif tag == 'table':
            self._in_table = True
            self._headers = []
        elif tag == 'tr' and self._in_table:
            self._row = []
        elif tag in ('th', 'td') and self._row is not None:
            self._cell_tag = tag
            self._cell = {'textParts': [], 'links': []}
        elif tag == 'li' and not self._in_table:
            self._list_item = {'textParts': [], 'links': []}
        elif tag == 'a':
            target = self._cell if self._cell is not None else self._list_item
            if target is not None:
                link = safe_link(self.base_url, attributes.get('href'))
                record = {'url': link, 'textParts': []}
                if attributes.get('onclick'):
                    record['onclick'] = attributes['onclick']
                target['links'].append(record)
        elif tag == 'br':
            self.handle_data(' ')

    def handle_data(self, data):
        if self._heading_tag:
            self._heading_text.append(data)
        if self._cell is not None:
            self._cell['textParts'].append(data)
            if self._cell['links']:
                self._cell['links'][-1]['textParts'].append(data)
        elif self._list_item is not None:
            self._list_item['textParts'].append(data)
            if self._list_item['links']:
                self._list_item['links'][-1]['textParts'].append(data)

    @staticmethod
    def _finish_record(record):
        links = []
        for link in record['links']:
            finished = {'url': link.get('url'), 'text': clean(''.join(link['textParts']))}
            if link.get('onclick'):
                finished['onclick'] = link['onclick']
            links.append(finished)
        return {'text': clean(''.join(record['textParts'])), 'links': links}

    def handle_endtag(self, tag):
        if tag == self._heading_tag:
            self.section = clean(''.join(self._heading_text)) or self.section
            self._heading_tag = None
            self._heading_text = []
        elif tag in ('th', 'td') and self._cell is not None:
            finished = self._finish_record(self._cell)
            finished['header'] = self._cell_tag == 'th'
            self._row.append(finished)
            self._cell = None
            self._cell_tag = None
        elif tag == 'tr' and self._row is not None:
            if self._row:
                if all(cell['header'] for cell in self._row):
                    self._headers = [cell['text'] or '' for cell in self._row]
                else:
                    self.tables.append({
                        'section': self.section,
                        'headers': list(self._headers),
                        'cells': self._row,
                    })
            self._row = None
        elif tag == 'table':
            self._in_table = False
        elif tag == 'li' and self._list_item is not None:
            finished = self._finish_record(self._list_item)
            if finished['text']:
                finished['section'] = self.section
                self.items.append(finished)
            self._list_item = None


def lifecycle_flags(text):
    value = (text or '').casefold()
    return [word.upper() for word in LIFECYCLE_WORDS if word in value]


def disambiguate_record_ids(records):
    occurrences = {}
    for record in records:
        base = record['id']
        occurrences[base] = occurrences.get(base, 0) + 1
        if occurrences[base] > 1:
            record['id'] = f'{base}:{occurrences[base]}'


def parse_official_devices(html_text):
    parser = StructuredHtmlParser(OFFICIAL_ENDPOINT)
    parser.feed(html_text)
    if not parser.tables:
        raise ValueError('official catalogue contained no table rows')
    headers = parser.tables[0]['headers']
    if headers != EXPECTED_OFFICIAL_HEADERS:
        raise ValueError(f'official catalogue headers changed: {headers!r}')
    if len(parser.tables) < MIN_OFFICIAL_ROWS:
        raise ValueError(
            f'official catalogue yielded {len(parser.tables)} rows; expected at least '
            f'{MIN_OFFICIAL_ROWS}'
        )

    records = []
    identity_occurrences = {}
    for row_index, row in enumerate(parser.tables, start=1):
        if row['headers'] != EXPECTED_OFFICIAL_HEADERS or len(row['cells']) != len(headers):
            raise ValueError(f'official row {row_index} does not match expected columns')
        fields = {header: row['cells'][index]['text'] for index, header in enumerate(headers)}
        instruction_cell = row['cells'][6]
        instruction_reference = None
        for link in instruction_cell['links']:
            match = re.search(r'showInstructions\s*\(\s*event\s*,\s*(\d+)\s*\)',
                              link.get('onclick') or '')
            if match:
                instruction_reference = match.group(1)
        buy_links = [link['url'] for link in row['cells'][7]['links'] if link.get('url')]
        identity = stable_hash(*(fields.get(header) for header in headers[:6]))
        identity_occurrences[identity] = identity_occurrences.get(identity, 0) + 1
        record_id = f'official-device:{identity}'
        if identity_occurrences[identity] > 1:
            record_id += f':{identity_occurrences[identity]}'
        records.append({
            'id': record_id,
            'classification': 'OFFICIAL_LISTED',
            'manufacturer': fields['Brand'],
            'device': fields['Device'],
            'productNumber': fields['Product Number'],
            'deviceType': fields['Device type'],
            'protocol': fields['Protocol'],
            'recommendedDriverOrApp': fields['Driver or app name'],
            'instructionReference': instruction_reference,
            'buyLinks': buy_links,
            'source': {'url': OFFICIAL_PAGE, 'endpoint': OFFICIAL_ENDPOINT, 'row': row_index},
            'raw': fields,
        })
    records.sort(key=lambda record: record['id'])
    return records


def wiki_first_post(document, expected_title):
    if document.get('title') != expected_title:
        raise ValueError(f'wiki title changed: {document.get("title")!r}')
    posts = (document.get('post_stream') or {}).get('posts') or []
    first = next((post for post in posts if post.get('post_number') == 1), None)
    if not first or not first.get('cooked'):
        raise ValueError('wiki first post is missing or empty')
    if not first.get('wiki'):
        raise ValueError('expected first post to remain community-editable wiki content')
    return first


def parse_driver_wiki(document):
    post = wiki_first_post(document, 'Custom Device Drivers [Wiki]')
    parser = StructuredHtmlParser(DRIVER_WIKI_PAGE)
    parser.feed(post['cooked'])
    records = []
    for row_index, row in enumerate(parser.tables, start=1):
        headers = row['headers']
        fields = {
            header: row['cells'][index]['text'] if index < len(row['cells']) else None
            for index, header in enumerate(headers)
        }
        links = [
            link['url'] for cell in row['cells'] for link in cell['links'] if link.get('url')
        ]
        text = ' | '.join(cell['text'] or '' for cell in row['cells'])
        identity = stable_hash(row['section'], *[fields.get(header) for header in headers])
        records.append({
            'id': f'community-driver:{identity}',
            'classification': 'COMMUNITY_DRIVER_LISTED',
            'section': row['section'],
            'manufacturer': fields.get('Brand'),
            'device': fields.get('Device'),
            'productNumber': fields.get('Product Number'),
            'driverOrApp': fields.get('Driver or App'),
            'links': sorted(set(links)),
            'lifecycleFlags': lifecycle_flags(text),
            'source': {'url': DRIVER_WIKI_PAGE, 'postNumber': 1, 'row': row_index,
                       'updatedAt': post.get('updated_at')},
            'raw': fields,
        })
    for item_index, item in enumerate(parser.items, start=1):
        links = sorted({link['url'] for link in item['links'] if link.get('url')})
        identity = stable_hash(item['section'], item['text'], *links)
        records.append({
            'id': f'community-driver:{identity}',
            'classification': 'COMMUNITY_DRIVER_LISTED',
            'section': item['section'],
            'manufacturer': None,
            'device': item['text'],
            'productNumber': None,
            'driverOrApp': None,
            'links': links,
            'lifecycleFlags': lifecycle_flags(item['text']),
            'source': {'url': DRIVER_WIKI_PAGE, 'postNumber': 1, 'item': item_index,
                       'updatedAt': post.get('updated_at')},
            'raw': {'text': item['text']},
        })
    if len(records) < 10:
        raise ValueError(f'driver wiki yielded only {len(records)} records')
    disambiguate_record_ids(records)
    records.sort(key=lambda record: record['id'])
    return records, post


def app_name_from_item(text):
    value = clean(text) or ''
    value = re.sub(r'\s+-\s+(?:link)?\s*$', '', value, flags=re.IGNORECASE).strip()
    return value or None


def parse_app_wiki(document):
    post = wiki_first_post(document, 'Custom Apps [Wiki]')
    parser = StructuredHtmlParser(APP_WIKI_PAGE)
    parser.feed(post['cooked'])
    records = []
    for item_index, item in enumerate(parser.items, start=1):
        links = sorted({link['url'] for link in item['links'] if link.get('url')})
        name = app_name_from_item(item['text'])
        identity = stable_hash(item['section'], name, *links)
        records.append({
            'id': f'community-app:{identity}',
            'classification': 'COMMUNITY_APP_LISTED',
            'section': item['section'],
            'name': name,
            'links': links,
            'lifecycleFlags': lifecycle_flags(item['text']),
            'source': {'url': APP_WIKI_PAGE, 'postNumber': 1, 'item': item_index,
                       'updatedAt': post.get('updated_at')},
            'raw': {'text': item['text']},
        })
    if len(records) < 10:
        raise ValueError(f'app wiki yielded only {len(records)} records')
    disambiguate_record_ids(records)
    records.sort(key=lambda record: record['id'])
    return records, post


def hpm_match_index(packages_document, definitions_document):
    packages = {package['id']: package for package in packages_document.get('packages') or []}
    links = {}
    for package in packages.values():
        candidates = [
            package.get('repository', {}).get('url'), package.get('manifest', {}).get('url'),
            package.get('links', {}).get('documentation'),
            package.get('links', {}).get('community'),
        ]
        for candidate in candidates:
            canonical = canonical_link(candidate)
            if canonical:
                links.setdefault(canonical, set()).add(package['id'])

    app_names = {}
    for definition in definitions_document.get('definitions') or []:
        source_url = definition.get('source', {}).get('url')
        canonical = canonical_link(source_url)
        if canonical:
            links.setdefault(canonical, set()).add(definition['packageId'])
        if definition.get('kind') == 'APP':
            for identity in ('manifestIdentity', 'sourceIdentity'):
                name = clean(definition.get(identity, {}).get('name'))
                if name:
                    app_names.setdefault(name.casefold(), set()).add(definition['packageId'])
    for package in packages.values():
        if package.get('name'):
            app_names.setdefault(package['name'].casefold(), set()).add(package['id'])
    return packages, links, app_names


def attach_hpm_matches(records, packages_document, definitions_document, allow_name=False):
    packages, link_index, app_names = hpm_match_index(packages_document, definitions_document)
    for record in records:
        matches = {}
        for link in record.get('links') or []:
            canonical = canonical_link(link)
            for package_id_value in link_index.get(canonical, set()):
                matches.setdefault(package_id_value, set()).add('EXACT_LINK')
        if allow_name and clean(record.get('name')):
            for package_id_value in app_names.get(record['name'].casefold(), set()):
                matches.setdefault(package_id_value, set()).add('EXACT_NAME')
        record['hpmMatches'] = [
            {
                'packageId': package_id_value,
                'packageName': packages[package_id_value].get('name'),
                'basis': sorted(bases),
            }
            for package_id_value, bases in sorted(matches.items())
            if package_id_value in packages
        ]


def envelope(dataset, source_url, source_hash, records, updated_at=None):
    return {
        'schemaVersion': SCHEMA_VERSION,
        'dataset': dataset,
        'snapshotId': source_hash,
        'source': {'url': source_url, 'updatedAt': updated_at},
        'recordCount': len(records),
        'records': records,
    }


def serialise(document):
    return json.dumps(document, indent=2, ensure_ascii=False, sort_keys=True) + '\n'


def build_documents(official_html, driver_document, app_document,
                    packages_document, definitions_document):
    official_records = parse_official_devices(official_html)
    driver_records, driver_post = parse_driver_wiki(driver_document)
    app_records, app_post = parse_app_wiki(app_document)
    attach_hpm_matches(driver_records, packages_document, definitions_document)
    attach_hpm_matches(app_records, packages_document, definitions_document, allow_name=True)
    return {
        'official': envelope(
            'official-devices', OFFICIAL_PAGE,
            hashlib.sha256(official_html.encode('utf-8')).hexdigest(), official_records,
        ),
        'drivers': envelope(
            'community-drivers', DRIVER_WIKI_PAGE,
            hashlib.sha256(driver_post['cooked'].encode('utf-8')).hexdigest(), driver_records,
            driver_post.get('updated_at'),
        ),
        'apps': envelope(
            'community-apps', APP_WIKI_PAGE,
            hashlib.sha256(app_post['cooked'].encode('utf-8')).hexdigest(), app_records,
            app_post.get('updated_at'),
        ),
    }


def load_inputs():
    official_bytes, _ = fetch(OFFICIAL_ENDPOINT)
    driver_bytes, _ = fetch(DRIVER_WIKI_JSON)
    app_bytes, _ = fetch(APP_WIKI_JSON)
    return (
        official_bytes.decode('utf-8'),
        json.loads(driver_bytes.decode('utf-8')),
        json.loads(app_bytes.decode('utf-8')),
    )


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--check', action='store_true',
                        help='validate committed outputs without network access')
    args = parser.parse_args()

    if args.check:
        failures = []
        for key, path in OUTPUTS.items():
            if not path.exists():
                failures.append(f'{path} is missing')
                continue
            try:
                document = json.loads(path.read_text('utf-8'))
            except json.JSONDecodeError as exc:
                failures.append(f'{path} is invalid JSON: {exc}')
                continue
            if document.get('schemaVersion') != SCHEMA_VERSION:
                failures.append(f'{path} has unexpected schemaVersion')
            if document.get('recordCount') != len(document.get('records') or []):
                failures.append(f'{path} recordCount does not match records')
            if not document.get('snapshotId'):
                failures.append(f'{path} is missing snapshotId')
        if failures:
            for failure in failures:
                print(f'FAIL: {failure}', file=sys.stderr)
            return 1
        print('Catalogue datasets pass offline checks.')
        return 0

    official_html, driver_document, app_document = load_inputs()
    packages_document = json.loads(pathlib.Path('community_packages.json').read_text('utf-8'))
    definitions_document = json.loads(pathlib.Path('definitions.json').read_text('utf-8'))
    documents = build_documents(
        official_html, driver_document, app_document,
        packages_document, definitions_document,
    )
    for key, path in OUTPUTS.items():
        text = serialise(documents[key])
        path.write_text(text, encoding='utf-8', newline='\n')
        print(f'Wrote {path}: {documents[key]["recordCount"]} records, '
              f'{len(text.encode("utf-8"))} bytes')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
