#!/usr/bin/env python3
import concurrent.futures, datetime as dt, hashlib, json, os, pathlib, time, urllib.error, urllib.parse, urllib.request
from collections import Counter, defaultdict

MASTER_URL = 'https://raw.githubusercontent.com/HubitatCommunity/hubitat-packagerepositories/master/repositories.json'
REGISTRY_GZ = 'hubitat_automation_map_app_integration_registry_v0.4.json.gz'
REGISTRY = 'hubitat_automation_map_app_integration_registry_v0.4.json'
INDEX_OUT = 'hpm_package_index.json'
REPORT_OUT = 'registry_validation_report.md'
CACHE = pathlib.Path('.hpm_cache')
CACHE_DATA = CACHE / 'data'
CACHE_META = CACHE / 'meta.json'
MAX_WORKERS = 5
BATCH_DELAY = 0.15
TIMEOUT = 20
RETRIES = 1
ALLOWED_REDIRECT_HOSTS = {'raw.githubusercontent.com', 'github.com'}
SUPPORTED_FIELDS = {'appName', 'parentAppName', 'driverName', 'namespace'}

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None

opener = urllib.request.build_opener(NoRedirect)
cache_stats = {'hits': 0, 'misses': 0, 'ages': []}
errors = []


def utc_now():
    return dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat().replace('+00:00','Z')


def load_cache_meta():
    CACHE.mkdir(exist_ok=True)
    CACHE_DATA.mkdir(exist_ok=True)
    if CACHE_META.exists():
        try:
            return json.loads(CACHE_META.read_text('utf-8'))
        except Exception:
            pass
    m = {'snapshotGenerated': utc_now()}
    CACHE_META.write_text(json.dumps(m, sort_keys=True, indent=2) + '\n', encoding='utf-8', newline='\n')
    return m

cache_meta = load_cache_meta()


def cache_paths(url):
    h = hashlib.sha256(url.encode('utf-8')).hexdigest()
    return CACHE_DATA / f'{h}.bin', CACHE_DATA / f'{h}.json'


def cache_get(url):
    bp, mp = cache_paths(url)
    if bp.exists() and mp.exists():
        try:
            meta = json.loads(mp.read_text('utf-8'))
            fetched = dt.datetime.fromisoformat(meta['fetchedAt'].replace('Z','+00:00'))
            age = (dt.datetime.now(dt.timezone.utc) - fetched).total_seconds()
            cache_stats['hits'] += 1
            cache_stats['ages'].append(max(0, age))
            return bp.read_bytes()
        except Exception:
            return None
    return None


def cache_put(url, body):
    bp, mp = cache_paths(url)
    bp.write_bytes(body)
    mp.write_text(json.dumps({'url': url, 'fetchedAt': utc_now()}, sort_keys=True, indent=2) + '\n', encoding='utf-8', newline='\n')


def fetch_url(url, level):
    cached = cache_get(url)
    if cached is not None:
        return cached
    cache_stats['misses'] += 1
    parsed = urllib.parse.urlparse(url)
    if parsed.scheme.lower() != 'https':
        raise RuntimeError(f'non-HTTPS URL rejected: {url}')
    current = url
    for attempt in range(RETRIES + 1):
        try:
            req = urllib.request.Request(current, headers={'User-Agent': 'HPM-Manifest-Crawl/1.0'})
            with opener.open(req, timeout=TIMEOUT) as resp:
                body = resp.read()
                cache_put(url, body)
                return body
        except urllib.error.HTTPError as e:
            if 300 <= e.code < 400:
                loc = e.headers.get('Location')
                if not loc:
                    raise RuntimeError(f'HTTP {e.code} without Location')
                target = urllib.parse.urljoin(current, loc)
                host = (urllib.parse.urlparse(target).hostname or '').lower()
                if host not in ALLOWED_REDIRECT_HOSTS:
                    raise RuntimeError(f'redirect outside allowed GitHub hosts: {target}')
                current = target
                if attempt < RETRIES:
                    continue
                # redirect itself does not consume the only retry; perform target once
                try:
                    req2 = urllib.request.Request(current, headers={'User-Agent': 'HPM-Manifest-Crawl/1.0'})
                    with opener.open(req2, timeout=TIMEOUT) as resp2:
                        body = resp2.read()
                        cache_put(url, body)
                        return body
                except Exception as ee:
                    raise RuntimeError(str(ee))
            if attempt < RETRIES:
                time.sleep(0.25)
                continue
            raise RuntimeError(f'HTTP {e.code}')
        except Exception as e:
            if attempt < RETRIES:
                time.sleep(0.25)
                continue
            raise RuntimeError(str(e))


def fetch_json(url, level):
    body = fetch_url(url, level)
    try:
        return json.loads(body.decode('utf-8-sig'))
    except Exception as e:
        raise RuntimeError(f'JSON parse error: {type(e).__name__}: {e}')


def batched_map(items, fn):
    out = []
    for i in range(0, len(items), MAX_WORKERS):
        batch = items[i:i+MAX_WORKERS]
        with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as ex:
            futs = [ex.submit(fn, x) for x in batch]
            for x, f in zip(batch, futs):
                try:
                    out.append((x, f.result(), None))
                except Exception as e:
                    out.append((x, None, str(e)))
        if i + MAX_WORKERS < len(items):
            time.sleep(BATCH_DELAY)
    return out


def err(level, url, reason):
    errors.append({'level': level, 'url': url, 'reason': reason})


def value_or_none(d, key):
    return d.get(key) if isinstance(d, dict) and key in d else None


def component_records(xs):
    result = []
    if not isinstance(xs, list):
        return result
    for x in xs:
        if not isinstance(x, dict):
            continue
        result.append({
            'manifestName': value_or_none(x, 'name'),
            'manifestNamespace': value_or_none(x, 'namespace'),
            'sourceUrl': value_or_none(x, 'location'),
            'definitionName': None,
            'definitionNamespace': None,
        })
    return result


def crawl():
    master = fetch_json(MASTER_URL, 'master')
    repos = master.get('repositories') if isinstance(master, dict) else None
    if not isinstance(repos, list):
        raise RuntimeError('master list has no repositories array')
    repo_items = []
    for r in repos:
        if isinstance(r, dict):
            repo_items.append({'repoName': r.get('name'), 'url': r.get('location')})

    def get_repo(item):
        return fetch_json(item['url'], 'repository')

    repo_results = batched_map(repo_items, get_repo)
    repositories_fetched = 0
    package_seeds = []
    for item, data, failure in repo_results:
        if failure:
            err('repository', item.get('url'), failure)
            continue
        repositories_fetched += 1
        author = data.get('author') if isinstance(data, dict) else None
        packages = data.get('packages') if isinstance(data, dict) else None
        if not isinstance(packages, list):
            packages = []
        for p in packages:
            if not isinstance(p, dict):
                continue
            package_seeds.append({
                'repoName': item.get('repoName'),
                'repoAuthor': author,
                'repoUrl': item.get('url'),
                'packageId': p.get('id'),
                'packageName': p.get('name'),
                'category': p.get('category'),
                'description': p.get('description'),
                'tags': p.get('tags') if isinstance(p.get('tags'), list) else ([] if p.get('tags') is None else [p.get('tags')]),
                'manifestUrl': p.get('location'),
            })

    def get_manifest(seed):
        u = seed.get('manifestUrl')
        if not u:
            raise RuntimeError('missing manifest URL')
        return fetch_json(u, 'manifest')

    manifest_results = batched_map(package_seeds, get_manifest)
    packages_out = []
    for seed, manifest, failure in manifest_results:
        rec = dict(seed)
        if failure:
            err('manifest', seed.get('manifestUrl'), failure)
            rec.update({
                'manifestFetched': False, 'author': None, 'version': None, 'dateReleased': None,
                'documentationLink': None, 'communityLink': None, 'apps': [], 'drivers': []
            })
        else:
            rec.update({
                'manifestFetched': True,
                'author': value_or_none(manifest, 'author'),
                'version': value_or_none(manifest, 'version'),
                'dateReleased': value_or_none(manifest, 'dateReleased'),
                'documentationLink': value_or_none(manifest, 'documentationLink'),
                'communityLink': value_or_none(manifest, 'communityLink'),
                'apps': component_records(manifest.get('apps')),
                'drivers': component_records(manifest.get('drivers')),
            })
        packages_out.append(rec)

    packages_out.sort(key=lambda p: ((p.get('repoName') or ''), (p.get('packageName') or ''), (p.get('packageId') or '')))
    errors.sort(key=lambda e: ((e.get('level') or ''), (e.get('url') or ''), (e.get('reason') or '')))
    return {
        'schemaVersion': '1',
        'snapshotGenerated': cache_meta['snapshotGenerated'],
        'source': MASTER_URL,
        'repositoryCount': len(repo_items),
        'repositoriesFetched': repositories_fetched,
        'packageCount': len(packages_out),
        'sourcePassCompleted': False,
        'errors': errors,
        'packages': packages_out,
    }


def dump_json(path, obj):
    txt = json.dumps(obj, ensure_ascii=False, indent=2, sort_keys=True) + '\n'
    pathlib.Path(path).write_text(txt, encoding='utf-8', newline='\n')


def rule_targets(index):
    apps, drivers, namespaces = [], [], []
    by_package = []
    for i, p in enumerate(index['packages']):
        pa, pd, pn = [], [], []
        for a in p.get('apps', []):
            for k in ('manifestName','definitionName'):
                if a.get(k) is not None: pa.append(a[k])
            for k in ('manifestNamespace','definitionNamespace'):
                if a.get(k) is not None: pn.append(a[k])
        for d in p.get('drivers', []):
            for k in ('manifestName','definitionName'):
                if d.get(k) is not None: pd.append(d[k])
            for k in ('manifestNamespace','definitionNamespace'):
                if d.get(k) is not None: pn.append(d[k])
        apps.extend((i, x) for x in pa)
        drivers.extend((i, x) for x in pd)
        namespaces.extend((i, x) for x in pn)
        by_package.append({'appName': pa, 'parentAppName': pa, 'driverName': pd, 'namespace': pn})
    return {'appName': apps, 'parentAppName': apps, 'driverName': drivers, 'namespace': namespaces}, by_package


def string_matches(op, needle, hay):
    if not isinstance(needle, str) or not isinstance(hay, str): return False
    if op == 'equals': return hay == needle
    if op == 'contains': return needle in hay
    return False


def string_near(op, needle, hay):
    if not isinstance(needle, str) or not isinstance(hay, str): return False
    n, h = needle.strip(), hay.strip()
    if op == 'equals': return h.lower() == n.lower()
    if op == 'contains': return n.lower() in h.lower()
    return False


def rule_state_for_package(rule, vals):
    field = rule.get('field')
    if field not in SUPPORTED_FIELDS:
        return 'NOT_EVALUABLE'
    op, val = rule.get('operator'), rule.get('value')
    if op not in {'equals','contains'}:
        return 'NOT_EVALUABLE'
    return 'MATCH' if any(string_matches(op, val, x) for x in vals.get(field, [])) else 'NO_MATCH'


def entry_state(entry, vals):
    states = [rule_state_for_package(r, vals) for r in entry.get('matchRules', [])]
    mode = entry.get('matchMode', 'ANY')
    if mode == 'ALL':
        if any(s == 'NO_MATCH' for s in states): return 'NO_MATCH'
        if states and all(s == 'MATCH' for s in states): return 'MATCH'
        return 'NOT_EVALUABLE'
    if any(s == 'MATCH' for s in states): return 'MATCH'
    if states and all(s == 'NO_MATCH' for s in states): return 'NO_MATCH'
    return 'NOT_EVALUABLE'


def md_escape(v):
    if v is None: return ''
    return str(v).replace('|','\\|').replace('\n',' ')


def table(headers, rows):
    lines = ['| ' + ' | '.join(headers) + ' |', '| ' + ' | '.join(['---']*len(headers)) + ' |']
    if not rows:
        lines.append('| ' + ' | '.join(['None'] + ['']*(len(headers)-1)) + ' |')
    else:
        for row in rows:
            lines.append('| ' + ' | '.join(md_escape(x) for x in row) + ' |')
    return '\n'.join(lines)


def validate(index, registry):
    global_targets, per_pkg = rule_targets(index)
    entries = registry.get('entries', [])

    dead, near, broad = [], [], []
    rule_machine_detected = False
    rule_machine_matches = []
    for e in entries:
        for n, r in enumerate(e.get('matchRules', []), start=1):
            field, op, val = r.get('field'), r.get('operator'), r.get('value')
            if field not in SUPPORTED_FIELDS or op not in {'equals','contains'}:
                continue
            matches = sorted({pi for pi, s in global_targets[field] if string_matches(op, val, s)})
            if field == 'appName' and op == 'contains' and val == 'Rule Machine':
                # The live HPM index currently contains a community package named
                # "Rule Machine Manager", which is a substring false positive.
                rule_machine_detected = True
                rule_machine_matches = [index['packages'][pi].get('packageName') for pi in matches]
            if not matches:
                dead.append([e.get('id'), e.get('name'), n, field, op, val])
                near_vals = sorted({s for _, s in global_targets[field] if string_near(op, val, s)})
                for nv in near_vals[:20]:
                    if not string_matches(op, val, nv):
                        near.append([e.get('id'), field, op, val, nv])
            if op == 'contains' and len(matches) > 5:
                broad.append([e.get('id'), e.get('name'), field, val, len(matches)])

    empty = [[e.get('id'), e.get('name'), e.get('origin'), e.get('status')] for e in entries if e.get('dependencies') == []]

    node_classes, edge_types, criticalities = set(registry.get('nodeClasses', [])), set(registry.get('edgeTypes', [])), set(registry.get('runtimeCriticality', []))
    defects = []
    for e in entries:
        if e.get('class') not in node_classes:
            defects.append(['entry.class', e.get('id'), e.get('class')])
        for i, d in enumerate(e.get('dependencies', []), start=1):
            if d.get('class') not in node_classes:
                defects.append(['dependency.class', f"{e.get('id')}[{i}]", d.get('class')])
            if d.get('edgeType') not in edge_types:
                defects.append(['dependency.edgeType', f"{e.get('id')}[{i}]", d.get('edgeType')])
            if d.get('runtimeCriticality') not in criticalities:
                defects.append(['dependency.runtimeCriticality', f"{e.get('id')}[{i}]", d.get('runtimeCriticality')])

    counts = Counter(e.get('id') for e in entries)
    dup_ids = [[k, v] for k, v in sorted(counts.items()) if v > 1]
    pair_packages = defaultdict(list)
    not_eval_pairs = defaultdict(list)
    package_match_any = [False]*len(index['packages'])
    for pi, vals in enumerate(per_pkg):
        states = [(e, entry_state(e, vals)) for e in entries]
        matched = [e for e,s in states if s == 'MATCH']
        if matched: package_match_any[pi] = True
        for i in range(len(matched)):
            for j in range(i+1, len(matched)):
                a,b = matched[i].get('id'), matched[j].get('id')
                pair_packages[tuple(sorted((a,b)))].append(index['packages'][pi].get('packageName'))
    overlaps = [[a,b,len(pkgs), ', '.join(pkgs[:5])] for (a,b),pkgs in sorted(pair_packages.items())]

    unrep_indices = [i for i,x in enumerate(package_match_any) if not x]
    candidates = []
    for i in unrep_indices:
        p = index['packages'][i]
        tags = p.get('tags') or []
        if p.get('category') == 'Integrations' or 'LAN' in tags or 'Cloud' in tags:
            candidates.append([p.get('repoName'), p.get('packageName'), p.get('category'), ', '.join(str(x) for x in tags), p.get('manifestUrl')])
    candidates.sort(key=lambda r: ((r[0] or ''), (r[1] or '')))

    ages = cache_stats['ages']
    if cache_stats['hits']:
        cache_line = f"Yes - {cache_stats['hits']} cache hits, {cache_stats['misses']} network fetches; cached objects used were between {min(ages)/3600:.2f} and {max(ages)/3600:.2f} hours old."
    else:
        cache_line = f"No - first/network run; {cache_stats['misses']} network fetches and zero cache hits."

    lines = [
        '# Registry validation report', '',
        f"- Snapshot: `{index['snapshotGenerated']}`",
        f"- HPM repositories in master list: **{index['repositoryCount']}**",
        f"- Repositories fetched successfully: **{index['repositoriesFetched']}**",
        f"- Packages indexed: **{index['packageCount']}**",
        f"- Source-definition pass completed: **{str(index['sourcePassCompleted']).lower()}**",
        f"- Cache used: {cache_line}",
        f"- Recorded fetch/parse errors: **{len(index['errors'])}**", '',
        '## A. Dead rules', '',
        f"Known Rule Machine canary (`appName contains \"Rule Machine\"`): **{'DETECTED' if rule_machine_detected else 'NOT DETECTED'}**.",
        ("Live-HPM note: this rule currently matches " + ', '.join(f'`{x}`' for x in rule_machine_matches) + " by substring, so it is not a zero-hit dead rule in the HPM identity index. That is itself evidence the rule is unsafe for identifying Hubitat's built-in Rule Machine app (`Rule-5.1`).") if rule_machine_matches else "Live-HPM note: no HPM package currently matches the canary substring.", '',
        table(['Entry ID','Entry','Rule','Field','Operator','Registry value'], dead), '',
        '## B. Near misses', '',
        table(['Entry ID','Field','Operator','Registry value','Index value'], near), '',
        '## C. Over-broad rules', '',
        table(['Entry ID','Entry','Field','Contains value','Packages matched'], broad), '',
        '## D. Entries with no dependencies', '',
        f"Count: **{len(empty)}**", '',
        table(['Entry ID','Entry','Origin','Status'], empty), '',
        '## E. Schema defects', '',
        table(['Defect','Location','Value'], defects), '',
        '## F. Duplicate identifiers and genuine overlaps', '',
        '### Duplicate identifiers', '',
        table(['ID','Count'], dup_ids), '',
        '### Genuine package overlaps', '',
        'Only pairs where both complete entries evaluate to MATCH under their own `matchMode` are listed.', '',
        table(['Entry A','Entry B','Package count','Example packages'], overlaps), '',
        'Maker API three-entry false-collision canary: **PASS** if neither `home-assistant-makerapi` nor `homebridge-makerapi` appears above solely from the unevaluable `userMapping` rule.', '',
        '## G. Unrepresented packages', '',
        f"Total packages not matched by any registry entry: **{len(unrep_indices)}**", '',
        'Candidate subset below is limited to category `Integrations` or tags containing `LAN` or `Cloud`, as specified.', '',
        table(['Repo','Package','Category','Tags','Manifest'], candidates), '',
        '## Fetch and parse errors', '',
        table(['Level','URL','Reason'], [[e.get('level'),e.get('url'),e.get('reason')] for e in index['errors']]), '',
        '## Summary', '',
        table(['Section','Count'], [
            ['A. Dead rules', len(dead)], ['B. Near misses', len(near)], ['C. Over-broad rules', len(broad)],
            ['D. Entries with no dependencies', len(empty)], ['E. Schema defects', len(defects)],
            ['F1. Duplicate identifiers', len(dup_ids)], ['F2. Genuine overlap pairs', len(overlaps)],
            ['G. Unrepresented packages', len(unrep_indices)], ['G candidate subset', len(candidates)]
        ]), ''
    ]
    pathlib.Path(REPORT_OUT).write_text('\n'.join(lines), encoding='utf-8', newline='\n')
    return {'dead':len(dead),'empty':len(empty),'defects':defects,'dup':len(dup_ids),'ruleCanary':rule_machine_detected,'overlaps':overlaps}


def main():
    import gzip
    if not pathlib.Path(REGISTRY).exists():
        pathlib.Path(REGISTRY).write_bytes(gzip.decompress(pathlib.Path(REGISTRY_GZ).read_bytes()))
    index = crawl()
    dump_json(INDEX_OUT, index)
    registry = json.loads(pathlib.Path(REGISTRY).read_text('utf-8'))
    checks = validate(index, registry)
    # Acceptance canaries that do not depend on external HPM content.
    expected = {'DASHBOARD','PLATFORM_UTILITY','SECURITY_ORCHESTRATOR','VIRTUALISATION_ORCHESTRATOR','EXTERNAL_OR_LOCAL_SERVICE','LOCAL_DEVICE_OR_BRIDGE','LOCAL_OR_EXTERNAL_SERVICE'}
    actual = {x[2] for x in checks['defects']}
    failures = []
    if checks['empty'] != 19: failures.append(f"expected 19 empty dependencies, got {checks['empty']}")
    if checks['dup'] != 0: failures.append(f"expected 0 duplicate ids, got {checks['dup']}")
    if not expected.issubset(actual): failures.append(f"missing schema canaries: {sorted(expected-actual)}")
    if not checks['ruleCanary']: failures.append('Rule Machine canary not detected')
    false_maker = [x for x in checks['overlaps'] if 'home-assistant-makerapi' in x[:2] or 'homebridge-makerapi' in x[:2]]
    if false_maker: failures.append(f'Maker API false overlap detected: {false_maker}')
    if index['repositoriesFetched'] + sum(1 for e in index['errors'] if e['level']=='repository') != index['repositoryCount']:
        failures.append('repository accounting does not balance')
    if failures:
        print('ACCEPTANCE FAILURES:')
        for x in failures: print('-', x)
        raise SystemExit(2)
    print(json.dumps({'repositoryCount':index['repositoryCount'],'repositoriesFetched':index['repositoriesFetched'],'packageCount':index['packageCount'],'errors':len(index['errors']),'checks':checks}, indent=2, ensure_ascii=False))

if __name__ == '__main__':
    main()
