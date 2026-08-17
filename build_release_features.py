#!/usr/bin/env python3
"""Build an evidence-backed Hubitat platform release feature tracker.

The builder reads bounded public Discourse JSON, retains staff-authored release posts,
follows only detail-topic links embedded in those posts, and never executes remote HTML
or code. Its outputs are independent of both Automation Map registries.
"""

import argparse
import datetime
import hashlib
from html.parser import HTMLParser
import json
import pathlib
import re
import time
from urllib.parse import urljoin, urlparse
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen


SCHEMA_VERSION = '1.0'
BASE_URL = 'https://community.hubitat.com'
CATEGORY_URL = BASE_URL + '/c/news/release-notes/55.json'
CATEGORY_PAGE = BASE_URL + '/c/news/release-notes/55'
OUTPUT = pathlib.Path('hubitat_release_features.json')
SITE_OUTPUT = pathlib.Path('site/feature-tracker/data/hubitat_release_features.json')
SCRIPT_OUTPUT = pathlib.Path('site/feature-tracker/data/hubitat_release_features.js')
EXPLORER_INPUT = pathlib.Path('site/package-explorer/data/explorer_index.json')
CACHE = pathlib.Path('.hpm_cache/release_features')
MAX_FETCH_BYTES = 4 * 1024 * 1024
MAX_CATEGORY_PAGES = 5
MAX_RELEASE_TOPICS = 80
MAX_DETAIL_TOPICS = 160
CACHE_MAX_AGE_SECONDS = 20 * 60 * 60
USER_AGENT = (
    'HPM-Manifest-Crawl/1.0 '
    '(+https://github.com/GordonThelander/HPM_Manifest_Crawl)'
)
RELEASE_TOPIC = re.compile(r'^Release\s+(\d+\.\d+(?:\.\d+)?)\s+available$', re.I)
RELEASE_BUILD = re.compile(r'Release\s+(\d+\.\d+\.\d+(?:\.\d+)?)\s+Available', re.I)
CHANGES_FROM = re.compile(r'Changes\s+from\s+(\d+\.\d+\.\d+(?:\.\d+)?)', re.I)
TOPIC_LINK = re.compile(r'^/t/(?:[^/]+/)?(\d+)(?:/\d+)?/?$')

SECTION_TYPES = {
    'platform changes': 'PLATFORM_CHANGE',
    'new apps': 'NEW_APP',
    'app changes': 'APP_CHANGE',
    'new drivers': 'NEW_DRIVER',
    'driver changes': 'DRIVER_CHANGE',
    'new driver features': 'DRIVER_FEATURE',
    'new devices': 'COMPATIBLE_DEVICE',
    'new compatible devices': 'COMPATIBLE_DEVICE',
    'compatible devices': 'COMPATIBLE_DEVICE',
    'bug fixes': 'BUG_FIX',
    'fixes': 'BUG_FIX',
    'known issues': 'KNOWN_ISSUE',
    'deprecated': 'DEPRECATION',
    'deprecations': 'DEPRECATION',
    'enhancements': 'ENHANCEMENT',
}
SUBSYSTEMS = (
    ('Z-Wave', ('z-wave', 'zwave')),
    ('Zigbee', ('zigbee',)),
    ('Matter', ('matter',)),
    ('MQTT', ('mqtt', 'zigbee2mqtt')),
    ('Dashboards', ('dashboard', 'chart endpoint')),
    ('HomeKit', ('homekit',)),
    ('Bluetooth', ('bluetooth', 'bthome', 'ble ')),
    ('Lutron', ('lutron',)),
    ('Tuya', ('tuya',)),
    ('Ring', ('ring ', 'ring integration')),
    ('Hub Mesh', ('hub mesh',)),
    ('Networking', ('network', 'rtsp', 'onvif', 'wifi', 'lan ')),
    ('Security', ('security', 'login', 'oauth', 'pin ')),
    ('Developer APIs', ('endpoint', 'callback', 'api ', 'app definition', 'driver function')),
    ('Automation', ('rule', 'automation', 'visual rule builder')),
    ('Devices', ('device', 'sensor', 'switch', 'dimmer', 'lock', 'thermostat')),
)
NEW_CAPABILITY_PREFIXES = (
    'add', 'brand new', 'introduc', 'new ', 'now ', 'replac', 'redesign', 'rewrote',
    'support', 'updated matter', 'z-wave long range',
)


def clean(value):
    if value is None:
        return None
    text = re.sub(r'\s+', ' ', str(value).replace('\u2014', '-')).strip()
    return text or None


def bounded(value, limit):
    text = clean(value)
    if text is None or len(text) <= limit:
        return text
    return text[:limit - 3].rstrip() + '...'


def utc_now():
    return datetime.datetime.now(datetime.timezone.utc).replace(
        microsecond=0
    ).isoformat().replace('+00:00', 'Z')


def stable_hash(*parts):
    material = '\x1f'.join(clean(part) or '' for part in parts)
    return hashlib.sha256(material.encode('utf-8')).hexdigest()


def canonical_json(document):
    return json.dumps(document, ensure_ascii=False, sort_keys=True, separators=(',', ':'))


class PlainTextParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.parts = []

    def handle_data(self, data):
        self.parts.append(data)

    def text(self):
        return clean(' '.join(self.parts))


class ReleaseHtmlParser(HTMLParser):
    """Extract sectioned list items and body links from trusted-shape HTML as text."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.section = 'Uncategorised'
        self.items = []
        self.all_links = []
        self._block = None
        self._block_parts = []
        self._block_emphasis = False
        self._li_stack = []
        self._active_link = None

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if tag in ('p', 'h2', 'h3', 'h4'):
            self._block = tag
            self._block_parts = []
            self._block_emphasis = tag != 'p'
        elif tag in ('em', 'strong') and self._block:
            self._block_emphasis = True
        elif tag == 'li':
            self._li_stack.append({
                'section': self.section,
                'parts': [],
                'links': [],
                'position': len(self.items) + len(self._li_stack),
            })
        elif tag == 'a':
            href = attributes.get('href')
            if href:
                absolute = urljoin(BASE_URL, href)
                parsed = urlparse(absolute)
                if parsed.scheme in ('http', 'https') and parsed.netloc:
                    self._active_link = {'url': absolute, 'parts': []}

    def handle_data(self, data):
        if self._li_stack:
            self._li_stack[-1]['parts'].append(data)
        elif self._block:
            self._block_parts.append(data)
        if self._active_link is not None:
            self._active_link['parts'].append(data)

    def handle_endtag(self, tag):
        if tag == 'a' and self._active_link is not None:
            link = {
                'url': self._active_link['url'],
                'text': clean(''.join(self._active_link['parts'])),
            }
            self.all_links.append(link)
            if self._li_stack:
                self._li_stack[-1]['links'].append(link)
            self._active_link = None
        elif tag == 'li' and self._li_stack:
            item = self._li_stack.pop()
            item['text'] = clean(''.join(item.pop('parts')))
            if item['text']:
                item['position'] = len(self.items)
                self.items.append(item)
        elif tag == self._block:
            heading = clean(''.join(self._block_parts))
            if self._block_emphasis and heading:
                key = heading.casefold().rstrip(':')
                if key in SECTION_TYPES or any(word in key for word in (
                        'changes', 'fixes', 'drivers', 'devices', 'apps', 'issues')):
                    self.section = heading.rstrip(':')
            self._block = None
            self._block_parts = []
            self._block_emphasis = False


def html_text(html):
    parser = PlainTextParser()
    parser.feed(html or '')
    return parser.text()


def canonical_topic_url(url):
    parsed = urlparse(url)
    if parsed.scheme not in ('http', 'https') or parsed.netloc.lower() != 'community.hubitat.com':
        return None
    match = TOPIC_LINK.match(parsed.path)
    if not match:
        return None
    topic_id = int(match.group(1))
    parts = [part for part in parsed.path.split('/') if part]
    slug = parts[1] if len(parts) > 2 and not parts[1].isdigit() else None
    path = f'/t/{slug}/{topic_id}' if slug else f'/t/{topic_id}'
    return {'id': topic_id, 'url': BASE_URL + path}


def section_type(section):
    key = (clean(section) or '').casefold().rstrip(':')
    if key in SECTION_TYPES:
        return SECTION_TYPES[key]
    if 'bug' in key or 'fix' in key:
        return 'BUG_FIX'
    if 'driver' in key and 'new' in key:
        return 'NEW_DRIVER'
    if 'device' in key and 'new' in key:
        return 'COMPATIBLE_DEVICE'
    if 'app' in key and 'new' in key:
        return 'NEW_APP'
    if 'issue' in key:
        return 'KNOWN_ISSUE'
    return 'OTHER_CHANGE'


def subsystem(text, evidence_type):
    value = (text or '').casefold()
    for label, needles in SUBSYSTEMS:
        if any(needle in value for needle in needles):
            return label
    if evidence_type in ('NEW_APP', 'APP_CHANGE'):
        return 'Apps'
    if evidence_type in ('NEW_DRIVER', 'DRIVER_CHANGE', 'DRIVER_FEATURE'):
        return 'Drivers'
    if evidence_type == 'COMPATIBLE_DEVICE':
        return 'Devices'
    return 'Platform'


def qualifications(text):
    value = (text or '').casefold()
    result = []
    if 'beta' in value:
        result.append('BETA')
    if 'experimental' in value:
        result.append('EXPERIMENTAL')
    if re.search(r'\bc-\d(?:\s+pro)?\b|\bpro hubs? only\b', value):
        result.append('MODEL_SPECIFIC')
    if any(needle in value for needle in ('safety warning', 'do not use', 'safety-sensitive')):
        result.append('SAFETY_WARNING')
    return result


def newly_possible(text, evidence_type):
    if evidence_type in ('NEW_APP', 'NEW_DRIVER', 'DRIVER_FEATURE', 'COMPATIBLE_DEVICE'):
        return True
    if evidence_type in ('BUG_FIX', 'KNOWN_ISSUE', 'DEPRECATION'):
        return False
    value = (clean(text) or '').casefold()
    return value.startswith(NEW_CAPABILITY_PREFIXES)


def attach_explorer_links(features, path=EXPLORER_INPUT):
    """Attach only unique, exact, reasonably specific catalogue names."""
    for feature in features:
        feature['explorerLinks'] = []
    if not path.is_file():
        return
    records = json.loads(path.read_text('utf-8')).get('records') or []
    candidates = {}
    for record in records:
        if record.get('recordType') not in ('HPM_PACKAGE', 'OFFICIAL_DEVICE'):
            continue
        if record.get('recordType') == 'HPM_PACKAGE' and not set(record.get('kinds') or []) & {'APP', 'DRIVER'}:
            continue
        name = clean(record.get('name'))
        normal = re.sub(r'[^a-z0-9]+', ' ', (name or '').casefold()).strip()
        if len(normal) < 8:
            continue
        candidates.setdefault(normal, []).append(record)
    unique = {name: rows[0] for name, rows in candidates.items() if len(rows) == 1}
    for feature in features:
        text = ' ' + re.sub(r'[^a-z0-9]+', ' ', feature['summary'].casefold()).strip() + ' '
        matches = []
        for name, record in unique.items():
            if f' {name} ' in text:
                matches.append({
                    'recordId': record['id'], 'name': record['name'],
                    'recordType': record['recordType'], 'basis': 'UNIQUE_EXACT_NAME',
                })
        feature['explorerLinks'] = sorted(matches, key=lambda row: (row['name'], row['recordId']))[:8]


def release_family(topic):
    match = RELEASE_TOPIC.match(clean(topic.get('title')) or '')
    return match.group(1) if match else None


def release_post(post, topic):
    cooked = post.get('cooked') or ''
    plain = html_text(cooked) or ''
    build_match = RELEASE_BUILD.search(plain)
    family = release_family(topic)
    if not build_match and post.get('post_number') != 1:
        return None
    version = build_match.group(1) if build_match else family
    if not version:
        return None
    previous_match = CHANGES_FROM.search(plain)
    parser = ReleaseHtmlParser()
    parser.feed(cooked)
    topic_url = f'{BASE_URL}/t/{topic.get("slug")}/{topic.get("id")}'
    post_url = topic_url + f'/{post.get("post_number")}'
    release_id = f'release:{topic.get("id")}:{post.get("post_number")}'
    features = []
    for item_index, item in enumerate(parser.items):
        evidence_type = section_type(item.get('section'))
        summary = bounded(item.get('text'), 500)
        if not summary:
            continue
        detail_urls = []
        for link in item.get('links') or []:
            canonical = canonical_topic_url(link.get('url') or '')
            if canonical and canonical['id'] != topic.get('id'):
                detail_urls.append(canonical['url'])
        feature_id = f'{release_id}:item:{item_index}'
        record = {
            'id': feature_id,
            'releaseId': release_id,
            'releaseVersion': version,
            'releaseFamily': family,
            'releasedAt': post.get('created_at'),
            'section': clean(item.get('section')) or 'Uncategorised',
            'evidenceType': evidence_type,
            'summary': summary,
            'subsystem': subsystem(summary, evidence_type),
            'newlyPossible': newly_possible(summary, evidence_type),
            'availability': 'DOCUMENTED_IN_RELEASE',
            'classificationConfidence': 'REVIEW' if evidence_type == 'OTHER_CHANGE' else 'RULE_BASED',
            'qualifications': qualifications(summary),
            'sourceUrl': post_url,
            'topicUrl': topic_url,
            'author': post.get('display_username') or post.get('username'),
            'staffAuthored': bool(post.get('staff') or post.get('primary_group_name') == 'hubitat'),
            'detailUrls': sorted(set(detail_urls)),
        }
        record['fingerprint'] = stable_hash(
            record['summary'], record['section'], record['evidenceType'],
            canonical_json(record['detailUrls']),
        )
        features.append(record)
    body_details = []
    for link in parser.all_links:
        canonical = canonical_topic_url(link.get('url') or '')
        if canonical and canonical['id'] != topic.get('id'):
            body_details.append(canonical['url'])
    release = {
        'id': release_id,
        'topicId': topic.get('id'),
        'postNumber': post.get('post_number'),
        'version': version,
        'releaseFamily': family,
        'previousVersion': previous_match.group(1) if previous_match else None,
        'title': f'Release {version}',
        'releasedAt': post.get('created_at'),
        'updatedAt': post.get('updated_at'),
        'sourceUrl': post_url,
        'topicUrl': topic_url,
        'author': post.get('display_username') or post.get('username'),
        'staffAuthored': bool(post.get('staff') or post.get('primary_group_name') == 'hubitat'),
        'sourceFingerprint': stable_hash(cooked),
        'featureCount': len(features),
        'newlyPossibleCount': sum(row['newlyPossible'] for row in features),
        'bugFixCount': sum(row['evidenceType'] == 'BUG_FIX' for row in features),
        'detailUrls': sorted(set(body_details)),
    }
    return release, features


def parse_detail(document, url):
    posts = (document.get('post_stream') or {}).get('posts') or []
    if not posts:
        raise ValueError(f'detail topic has no posts: {url}')
    post = posts[0]
    title = clean(document.get('title')) or clean(document.get('fancy_title')) or 'Linked detail'
    summary = bounded(html_text(post.get('cooked') or ''), 700)
    canonical = canonical_topic_url(url)
    return {
        'id': f'detail:{canonical["id"]}',
        'topicId': canonical['id'],
        'title': title,
        'summary': summary,
        'sourceUrl': canonical['url'] + '/1',
        'author': post.get('display_username') or post.get('username'),
        'staffAuthored': bool(post.get('staff') or post.get('primary_group_name') == 'hubitat'),
        'createdAt': post.get('created_at'),
        'updatedAt': post.get('updated_at'),
        'qualifications': qualifications((title or '') + ' ' + (summary or '')),
    }


def cache_path(url, cache_dir=CACHE):
    return cache_dir / (hashlib.sha256(url.encode('utf-8')).hexdigest() + '.json')


def fetch_json(url, cache_dir=CACHE, max_age=CACHE_MAX_AGE_SECONDS):
    if not url.startswith('https://community.hubitat.com/'):
        raise ValueError(f'non-Hubitat release source refused: {url}')
    path = cache_path(url, cache_dir)
    if path.is_file() and time.time() - path.stat().st_mtime <= max_age:
        return json.loads(path.read_text('utf-8'))
    request = Request(url, headers={'User-Agent': USER_AGENT, 'Accept': 'application/json'})
    with urlopen(request, timeout=30) as response:
        body = response.read(MAX_FETCH_BYTES + 1)
    if len(body) > MAX_FETCH_BYTES:
        raise ValueError(f'release response exceeded {MAX_FETCH_BYTES} bytes: {url}')
    document = json.loads(body.decode('utf-8'))
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(document, ensure_ascii=False, sort_keys=True, separators=(',', ':')),
        encoding='utf-8',
    )
    return document


def category_topics(fetcher=fetch_json, max_pages=MAX_CATEGORY_PAGES):
    topics = {}
    for page in range(max_pages):
        url = CATEGORY_URL if page == 0 else CATEGORY_URL + f'?page={page}'
        document = fetcher(url)
        page_topics = (document.get('topic_list') or {}).get('topics') or []
        if not page_topics:
            break
        before = len(topics)
        for topic in page_topics:
            if RELEASE_TOPIC.match(clean(topic.get('title')) or ''):
                topics[topic['id']] = topic
        more = (document.get('topic_list') or {}).get('more_topics_url')
        if not more or len(topics) == before and page > 0:
            break
    rows = sorted(topics.values(), key=lambda row: row.get('created_at') or '', reverse=True)
    if len(rows) > MAX_RELEASE_TOPICS:
        raise ValueError(f'release topic count exceeded {MAX_RELEASE_TOPICS}')
    return rows


def harvest(fetcher=fetch_json, max_pages=MAX_CATEGORY_PAGES):
    topics = category_topics(fetcher, max_pages)
    releases = []
    features = []
    detail_urls = set()
    for topic in topics:
        document = fetcher(f'{BASE_URL}/t/{topic["slug"]}/{topic["id"]}.json')
        posts = (document.get('post_stream') or {}).get('posts') or []
        for post in posts:
            staff = bool(post.get('staff') or post.get('primary_group_name') == 'hubitat')
            if not staff or post.get('deleted_at') or post.get('hidden'):
                continue
            parsed = release_post(post, topic)
            if not parsed:
                continue
            release, release_features = parsed
            releases.append(release)
            features.extend(release_features)
            detail_urls.update(release['detailUrls'])
    if len(detail_urls) > MAX_DETAIL_TOPICS:
        raise ValueError(f'linked detail topic count exceeded {MAX_DETAIL_TOPICS}')
    details = []
    detail_by_url = {}
    unavailable_details = []
    for url in sorted(detail_urls):
        canonical = canonical_topic_url(url)
        try:
            document = fetcher(url + '.json')
            detail = parse_detail(document, url)
        except (HTTPError, URLError, TimeoutError, ValueError):
            unavailable_details.append(url)
            continue
        details.append(detail)
        detail_by_url[url] = detail['id']
    for feature in features:
        feature['detailIds'] = [
            detail_by_url[url] for url in feature.pop('detailUrls') if url in detail_by_url
        ]
    for release in releases:
        release['detailIds'] = [
            detail_by_url[url] for url in release.pop('detailUrls') if url in detail_by_url
        ]
    releases.sort(key=lambda row: (row.get('releasedAt') or '', row['id']), reverse=True)
    features.sort(key=lambda row: (row.get('releasedAt') or '', row['id']), reverse=True)
    details.sort(key=lambda row: row['id'])
    attach_explorer_links(features)
    if len(topics) < 5 or len(releases) < 10 or len(features) < 30:
        raise ValueError(
            f'suspicious release harvest: {len(topics)} topics, {len(releases)} releases, '
            f'{len(features)} features'
        )
    return {
        'topics': topics, 'releases': releases, 'features': features,
        'details': details, 'unavailableDetails': unavailable_details,
    }


def change_history(previous, features, observed_at):
    if not previous:
        return [], True, {'added': 0, 'updated': 0, 'removed': 0}
    old = {row['id']: row for row in previous.get('features') or []}
    current = {row['id']: row for row in features}
    events = []
    for feature_id in sorted(current.keys() - old.keys()):
        row = current[feature_id]
        events.append({
            'observedAt': observed_at, 'change': 'ADDED', 'featureId': feature_id,
            'releaseVersion': row.get('releaseVersion'), 'sourceUrl': row.get('sourceUrl'),
        })
    for feature_id in sorted(old.keys() & current.keys()):
        if old[feature_id].get('fingerprint') != current[feature_id].get('fingerprint'):
            row = current[feature_id]
            events.append({
                'observedAt': observed_at, 'change': 'UPDATED', 'featureId': feature_id,
                'releaseVersion': row.get('releaseVersion'), 'sourceUrl': row.get('sourceUrl'),
            })
    for feature_id in sorted(old.keys() - current.keys()):
        row = old[feature_id]
        events.append({
            'observedAt': observed_at, 'change': 'REMOVED', 'featureId': feature_id,
            'releaseVersion': row.get('releaseVersion'), 'sourceUrl': row.get('sourceUrl'),
        })
    history = list(previous.get('history') or []) + events
    history = history[-1000:]
    counts = {kind.lower(): sum(event['change'] == kind for event in events)
              for kind in ('ADDED', 'UPDATED', 'REMOVED')}
    return history, bool(previous.get('baselineEstablished', True)), counts


def build_document(harvested, previous=None, observed_at=None):
    observed_at = observed_at or utc_now()
    releases = harvested['releases']
    features = harvested['features']
    details = harvested['details']
    history, baseline, changes = change_history(previous, features, observed_at)
    timeline = [{
        'releaseId': row['id'],
        'version': row['version'],
        'releaseFamily': row['releaseFamily'],
        'releasedAt': row['releasedAt'],
        'featureCount': row['featureCount'],
        'newlyPossibleCount': row['newlyPossibleCount'],
        'bugFixCount': row['bugFixCount'],
        'sourceUrl': row['sourceUrl'],
    } for row in reversed(releases)]
    return {
        'schemaVersion': SCHEMA_VERSION,
        'dataset': 'hubitat-release-features',
        'lastSuccessfulHarvest': observed_at,
        'baselineEstablished': baseline,
        'counts': {
            'releaseTopics': len(harvested['topics']),
            'releaseBuilds': len(releases),
            'features': len(features),
            'newlyPossible': sum(row['newlyPossible'] for row in features),
            'linkedDetails': len(details),
            'unavailableDetails': len(harvested.get('unavailableDetails') or []),
        },
        'source': {
            'categoryUrl': CATEGORY_PAGE,
            'categoryJsonUrl': CATEGORY_URL,
            'authority': 'Hubitat Community Release Notes',
            'staffAuthorshipRecorded': True,
            'bodyLinksOnly': True,
        },
        'changesThisHarvest': changes,
        'releases': releases,
        'features': features,
        'details': details,
        'unavailableDetails': harvested.get('unavailableDetails') or [],
        'timeline': timeline,
        'history': history,
        'method': {
            'remoteHtmlRendered': False,
            'remoteContentExecuted': False,
            'relatedTopicWidgetsExcluded': True,
            'nonStaffReleasePostsExcluded': True,
            'failedHarvestReplacesOutput': False,
            'automationMapIndependent': True,
        },
    }


def validate(document):
    if document.get('schemaVersion') != SCHEMA_VERSION:
        raise ValueError('unexpected release feature schema version')
    if document.get('dataset') != 'hubitat-release-features':
        raise ValueError('unexpected release feature dataset')
    releases = document.get('releases')
    features = document.get('features')
    details = document.get('details')
    timeline = document.get('timeline')
    if not all(isinstance(rows, list) for rows in (releases, features, details, timeline)):
        raise ValueError('release feature collections must be arrays')
    counts = document.get('counts') or {}
    if counts.get('releaseBuilds') != len(releases) or counts.get('features') != len(features):
        raise ValueError('release feature counts do not match records')
    if counts.get('linkedDetails') != len(details) or len(timeline) != len(releases):
        raise ValueError('detail or timeline counts do not match records')
    release_ids = {row.get('id') for row in releases}
    detail_ids = {row.get('id') for row in details}
    if len(release_ids) != len(releases) or len(detail_ids) != len(details):
        raise ValueError('release or detail IDs are not unique')
    feature_ids = {row.get('id') for row in features}
    if len(feature_ids) != len(features):
        raise ValueError('feature IDs are not unique')
    allowed_types = set(SECTION_TYPES.values()) | {'OTHER_CHANGE'}
    for feature in features:
        if feature.get('releaseId') not in release_ids:
            raise ValueError('feature references an unknown release')
        if feature.get('evidenceType') not in allowed_types:
            raise ValueError('feature has an unknown evidence type')
        if any(detail_id not in detail_ids for detail_id in feature.get('detailIds') or []):
            raise ValueError('feature references an unknown linked detail')
        if not isinstance(feature.get('summary'), str) or len(feature['summary']) > 500:
            raise ValueError('feature summary is missing or exceeds its text bound')
    method = document.get('method') or {}
    if method.get('automationMapIndependent') is not True:
        raise ValueError('Automation Map independence must be explicit')
    if method.get('remoteContentExecuted') is not False:
        raise ValueError('remote content execution must be false')
    return document


def serialise(document):
    return json.dumps(document, indent=2, ensure_ascii=False, sort_keys=True) + '\n'


def script_serialise(document):
    return (
        'window.HUBITAT_RELEASE_FEATURES = '
        + json.dumps(document, ensure_ascii=False, sort_keys=True, separators=(',', ':'))
        + ';\n'
    )


def atomic_write(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + '.tmp')
    temporary.write_text(text, encoding='utf-8', newline='\n')
    temporary.replace(path)


def write_outputs(document):
    rendered = serialise(document)
    script = script_serialise(document)
    atomic_write(OUTPUT, rendered)
    atomic_write(SITE_OUTPUT, rendered)
    atomic_write(SCRIPT_OUTPUT, script)


def check_outputs():
    document = json.loads(OUTPUT.read_text('utf-8'))
    validate(document)
    rendered = serialise(document)
    script = script_serialise(document)
    if SITE_OUTPUT.read_text('utf-8') != rendered:
        raise ValueError('site release feature JSON is stale')
    if SCRIPT_OUTPUT.read_text('utf-8') != script:
        raise ValueError('site release feature script is stale')
    print(
        f'Release feature tracker PASS: {document["counts"]["releaseBuilds"]} builds, '
        f'{document["counts"]["features"]} changes, '
        f'{document["counts"]["linkedDetails"]} linked details.'
    )


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    parser.add_argument(
        '--reset-baseline', action='store_true',
        help='publish a quiet first history baseline after an intentional parser migration',
    )
    parser.add_argument('--max-pages', type=int, default=MAX_CATEGORY_PAGES)
    args = parser.parse_args()
    if args.check:
        check_outputs()
        return 0
    previous = None
    if OUTPUT.is_file() and not args.reset_baseline:
        previous = json.loads(OUTPUT.read_text('utf-8'))
        validate(previous)
    harvested = harvest(max_pages=args.max_pages)
    document = build_document(harvested, previous)
    validate(document)
    write_outputs(document)
    print(
        f'Wrote release feature tracker: {document["counts"]["releaseBuilds"]} builds, '
        f'{document["counts"]["features"]} changes, '
        f'{document["counts"]["linkedDetails"]} linked details.'
    )
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
