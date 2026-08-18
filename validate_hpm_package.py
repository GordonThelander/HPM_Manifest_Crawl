#!/usr/bin/env python3
"""Validate an HPM package manifest without executing downloaded code."""

import argparse
import json
import pathlib
import sys
import urllib.error
import urllib.parse
import urllib.request

from enrich_hpm_sources import find_literal_definition
from probe_package_links import PublicRedirectHandler, validate_public_url


MAX_BYTES = 2 * 1024 * 1024
TIMEOUT = 15
SEVERITY_ORDER = {'ERROR': 0, 'WARNING': 1, 'INFO': 2}
URL_FIELDS = ('documentationLink', 'communityLink')
TAXONOMY_FALLBACK = pathlib.Path(__file__).with_name('hpm_taxonomy_fallback.json')


def clean(value):
    if value is None:
        return None
    text = str(value).strip()
    return text or None


def issue(severity, code, path, message, suggestion=None, source=None):
    result = {
        'severity': severity,
        'code': code,
        'path': path,
        'message': message,
    }
    if suggestion:
        result['suggestion'] = suggestion
    if source:
        result['source'] = source
    return result


def valid_url_shape(value):
    if not isinstance(value, str):
        return False
    parsed = urllib.parse.urlparse(value.strip())
    return parsed.scheme in {'http', 'https'} and bool(parsed.hostname)


def check_url_field(value, path, source):
    if value is None:
        return []
    if not valid_url_shape(value):
        return [issue('ERROR', 'INVALID_URL', path,
                      'Value must be an absolute HTTP or HTTPS URL.',
                      'Use the complete public URL, including https://.', source)]
    if urllib.parse.urlparse(value).scheme == 'http':
        return [issue('WARNING', 'HTTP_ONLY', path,
                      'URL uses clear-text HTTP.',
                      'Publish the resource over HTTPS when possible.', source)]
    return []


def load_taxonomy_settings():
    document = json.loads(TAXONOMY_FALLBACK.read_text('utf-8'))
    categories = document.get('categories')
    tags = document.get('tags')
    if not isinstance(categories, list) or not isinstance(tags, list):
        raise ValueError('HPM taxonomy fallback is invalid')
    return {'categories': set(categories), 'tags': set(tags)}


def validate_component(component, kind, index, source_name, require_version):
    path = f'{kind}[{index}]'
    issues = []
    if not isinstance(component, dict):
        return [issue('ERROR', 'INVALID_COMPONENT', path,
                      'Component must be a JSON object.',
                      'Replace this value with an object containing id, name, namespace and location.',
                      source_name)]
    for field in ('id', 'name', 'namespace'):
        if not clean(component.get(field)):
            issues.append(issue(
                'WARNING', f'MISSING_{field.upper()}', f'{path}.{field}',
                f'Component does not declare {field}.',
                f'Add a stable {field} value so HPM and recovery tools can identify this code.',
                source_name,
            ))
    if require_version and not clean(component.get('version')):
        issues.append(issue('ERROR', 'MISSING_COMPONENT_VERSION', f'{path}.version',
                            'Component does not declare a version.',
                            'Add the component version HPM should compare for updates.',
                            source_name))
    location = component.get('location')
    if not clean(location):
        issues.append(issue('ERROR', 'MISSING_LOCATION', f'{path}.location',
                            'Component has no source location.',
                            'Add the public raw Groovy source URL.', source_name))
    else:
        issues.extend(check_url_field(location, f'{path}.location', source_name))
    return issues


def validate_manifest(manifest, source_name='packageManifest.json'):
    issues = []
    if not isinstance(manifest, dict):
        return [issue('ERROR', 'INVALID_ROOT', '$',
                      'Package manifest root must be a JSON object.',
                      'Wrap manifest fields in a JSON object.', source_name)]
    for field in ('packageName', 'author'):
        if not clean(manifest.get(field)):
            issues.append(issue('ERROR', f'MISSING_{field.upper()}', field,
                                f'Manifest does not declare {field}.',
                                f'Add a non-empty {field} field.', source_name))

    date_released = clean(manifest.get('dateReleased'))
    if not date_released:
        issues.append(issue('WARNING', 'MISSING_RELEASE_DATE', 'dateReleased',
                            'Manifest does not declare a release date.',
                            'Add dateReleased in YYYY-MM-DD form.', source_name))
    elif len(date_released) != 10 or date_released[4:5] != '-' or date_released[7:8] != '-':
        issues.append(issue('WARNING', 'RELEASE_DATE_FORMAT', 'dateReleased',
                            'Release date is not in YYYY-MM-DD form.',
                            'Use an ISO date such as 2026-08-17.', source_name))

    for field in URL_FIELDS:
        value = manifest.get(field)
        if not clean(value):
            issues.append(issue('INFO', f'MISSING_{field.upper()}', field,
                                f'Manifest does not declare {field}.',
                                'Add this link when a stable public page exists.', source_name))
        else:
            issues.extend(check_url_field(value, field, source_name))

    component_count = 0
    package_version = clean(manifest.get('version'))
    component_version_paths = []
    for kind in ('apps', 'drivers'):
        values = manifest.get(kind, [])
        if isinstance(values, list):
            component_version_paths.extend(
                f'{kind}[{index}].version'
                for index, component in enumerate(values)
                if isinstance(component, dict) and clean(component.get('version'))
            )
    if package_version and component_version_paths:
        issues.append(issue(
            'ERROR', 'MIXED_VERSION_STRATEGY', 'version',
            'Manifest mixes a package-level version with component-level versions.',
            'Use either one package version or a version on every app and driver, not both.',
            source_name,
        ))
    component_ids = {}
    for kind in ('apps', 'drivers'):
        components = manifest.get(kind, [])
        if components is None:
            components = []
        if not isinstance(components, list):
            issues.append(issue('ERROR', 'INVALID_COMPONENT_LIST', kind,
                                f'{kind} must be a JSON array.',
                                f'Use "{kind}": [] when the package has none.', source_name))
            continue
        component_count += len(components)
        for index, component in enumerate(components):
            issues.extend(validate_component(
                component, kind, index, source_name, require_version=not package_version
            ))
            if isinstance(component, dict) and clean(component.get('id')):
                component_id = clean(component['id'])
                current_path = f'{kind}[{index}].id'
                if component_id in component_ids:
                    issues.append(issue('ERROR', 'DUPLICATE_COMPONENT_ID', current_path,
                                        f'Component ID duplicates {component_ids[component_id]}.',
                                        'Give every app and driver a unique stable ID.', source_name))
                else:
                    component_ids[component_id] = current_path
    if component_count == 0:
        issues.append(issue('ERROR', 'NO_COMPONENTS', 'apps/drivers',
                            'Package declares no apps or drivers.',
                            'Declare at least one installable app or driver.', source_name))
    elif not package_version and not component_version_paths:
        issues.append(issue(
            'ERROR', 'MISSING_VERSION_STRATEGY', 'version',
            'Manifest declares neither a package version nor component versions.',
            'Add one package-level version or add a version to every app and driver.',
            source_name,
        ))
    return sorted(issues, key=lambda row: (
        SEVERITY_ORDER[row['severity']], row['path'], row['code']
    ))


def validate_repository(repository, manifest, manifest_reference=None,
                        source_name='repository.json', package_id=None,
                        taxonomy_settings=None):
    issues = []
    taxonomy_settings = taxonomy_settings or load_taxonomy_settings()
    if not isinstance(repository, dict):
        return [issue('ERROR', 'INVALID_REPOSITORY_ROOT', '$',
                      'Repository manifest root must be a JSON object.',
                      'Wrap repository fields in a JSON object.', source_name)]
    packages = repository.get('packages')
    if not isinstance(packages, list):
        return [issue('ERROR', 'INVALID_REPOSITORY_PACKAGES', 'packages',
                      'Repository packages must be a JSON array.',
                      'Add a packages array containing this package entry.', source_name)]
    ids = {}
    candidates = []
    for index, entry in enumerate(packages):
        path = f'packages[{index}]'
        if not isinstance(entry, dict):
            issues.append(issue('ERROR', 'INVALID_REPOSITORY_ENTRY', path,
                                'Package entry must be a JSON object.', None, source_name))
            continue
        for field in ('id', 'name', 'location'):
            if not clean(entry.get(field)):
                issues.append(issue('ERROR', f'MISSING_REPOSITORY_{field.upper()}',
                                    f'{path}.{field}', f'Package entry has no {field}.',
                                    f'Add a non-empty {field}.', source_name))
        entry_id = clean(entry.get('id'))
        if entry_id:
            if entry_id in ids:
                issues.append(issue('ERROR', 'DUPLICATE_PACKAGE_ID', f'{path}.id',
                                    f'Package ID duplicates {ids[entry_id]}.',
                                    'Use a globally unique stable package ID.', source_name))
            ids[entry_id] = f'{path}.id'
        if clean(entry.get('location')):
            issues.extend(check_url_field(entry['location'], f'{path}.location', source_name))
        category = clean(entry.get('category'))
        if category and category not in taxonomy_settings['categories']:
            issues.append(issue(
                'ERROR', 'INVALID_HPM_CATEGORY', f'{path}.category',
                f'Category "{category}" is not in the current HPM taxonomy.',
                'Choose an exact category from the authoritative HPM settings.', source_name,
            ))
        tags = entry.get('tags')
        if tags is not None and not isinstance(tags, list):
            issues.append(issue(
                'ERROR', 'INVALID_HPM_TAGS', f'{path}.tags',
                'Repository tags must be a JSON array.',
                'Use an array containing exact tags from the authoritative HPM settings.',
                source_name,
            ))
        elif isinstance(tags, list):
            seen_tags = set()
            for tag_index, tag in enumerate(tags):
                tag_path = f'{path}.tags[{tag_index}]'
                if not isinstance(tag, str) or not tag.strip():
                    issues.append(issue(
                        'ERROR', 'INVALID_HPM_TAG', tag_path,
                        'Tag must be a non-empty string.',
                        'Choose an exact tag from the authoritative HPM settings.', source_name,
                    ))
                    continue
                tag = tag.strip()
                if tag not in taxonomy_settings['tags']:
                    issues.append(issue(
                        'ERROR', 'INVALID_HPM_TAG', tag_path,
                        f'Tag "{tag}" is not in the current HPM taxonomy.',
                        'Choose an exact tag from the authoritative HPM settings.', source_name,
                    ))
                if tag in seen_tags:
                    issues.append(issue(
                        'WARNING', 'DUPLICATE_HPM_TAG', tag_path,
                        f'Tag "{tag}" is declared more than once.',
                        'Keep each repository tag once.', source_name,
                    ))
                seen_tags.add(tag)
        if package_id and entry_id == package_id:
            candidates.append((index, entry))
        elif manifest_reference and clean(entry.get('location')) == manifest_reference:
            candidates.append((index, entry))
    if package_id or manifest_reference:
        if not candidates:
            issues.append(issue('ERROR', 'PACKAGE_NOT_LISTED', 'packages',
                                'Repository does not contain the selected package manifest.',
                                'Add an entry whose id or location identifies this package.', source_name))
        elif len(candidates) > 1:
            issues.append(issue('ERROR', 'AMBIGUOUS_PACKAGE_ENTRY', 'packages',
                                'More than one repository entry identifies this package.',
                                'Keep exactly one matching package entry.', source_name))
        else:
            index, entry = candidates[0]
            package_name = clean(manifest.get('packageName')) if isinstance(manifest, dict) else None
            if package_name and clean(entry.get('name')) and clean(entry.get('name')) != package_name:
                issues.append(issue('WARNING', 'PACKAGE_NAME_MISMATCH', f'packages[{index}].name',
                                    f'Repository name "{entry.get("name")}" differs from manifest packageName "{package_name}".',
                                    'Use the same display name in both files.', source_name))
    return sorted(issues, key=lambda row: (
        SEVERITY_ORDER[row['severity']], row['path'], row['code']
    ))


def fetch_text(url, timeout=TIMEOUT):
    validate_public_url(url)
    if urllib.parse.urlparse(url).scheme != 'https':
        raise ValueError('network fetch requires HTTPS')
    request = urllib.request.Request(url, headers={
        'User-Agent': 'HPM-Manifest-Crawl/developer-validator',
        'Range': f'bytes=0-{MAX_BYTES - 1}',
        'Accept': 'application/json,text/plain,*/*',
    })
    opener = urllib.request.build_opener(PublicRedirectHandler())
    with opener.open(request, timeout=timeout) as response:
        body = response.read(MAX_BYTES + 1)
    if len(body) > MAX_BYTES:
        raise ValueError(f'response exceeds {MAX_BYTES} byte safety limit')
    return body.decode('utf-8-sig')


def load_json_reference(reference, fetcher=fetch_text):
    if valid_url_shape(reference):
        text = fetcher(reference)
        source_name = reference
    else:
        path = pathlib.Path(reference)
        text = path.read_text('utf-8-sig')
        source_name = str(path)
    return json.loads(text), source_name


def validate_sources(manifest, fetcher=fetch_text, source_name='packageManifest.json'):
    issues = []
    if not isinstance(manifest, dict):
        return issues
    for kind in ('apps', 'drivers'):
        components = manifest.get(kind) or []
        if not isinstance(components, list):
            continue
        for index, component in enumerate(components):
            if not isinstance(component, dict) or not valid_url_shape(component.get('location')):
                continue
            path = f'{kind}[{index}]'
            url = component['location']
            if urllib.parse.urlparse(url).scheme != 'https':
                continue
            try:
                text = fetcher(url)
            except Exception as error:
                issues.append(issue('ERROR', 'SOURCE_UNAVAILABLE', f'{path}.location',
                                    f'Source could not be fetched: {str(error)[:300]}',
                                    'Confirm the raw public source URL is reachable.', source_name))
                continue
            actual_name, actual_namespace, line = find_literal_definition(text)
            for field, actual in (('name', actual_name), ('namespace', actual_namespace)):
                declared = clean(component.get(field))
                if declared and actual and declared.casefold() != clean(actual).casefold():
                    issues.append(issue('ERROR', 'SOURCE_IDENTITY_MISMATCH', f'{path}.{field}',
                                        f'Manifest declares "{declared}" but source definition declares "{actual}" on line {line}.',
                                        'Make the manifest identity exactly match the Groovy definition.', source_name))
                elif declared and actual is None:
                    issues.append(issue('INFO', 'SOURCE_IDENTITY_NOT_LITERAL', f'{path}.{field}',
                                        'A single literal source definition could not be confirmed.',
                                        'No change is required if the definition is intentionally dynamic.', source_name))
    return sorted(issues, key=lambda row: (
        SEVERITY_ORDER[row['severity']], row['path'], row['code']
    ))


def preview_record(manifest, manifest_reference):
    manifest = manifest if isinstance(manifest, dict) else {}
    component_versions = sorted({
        clean(component.get('version'))
        for kind in ('apps', 'drivers')
        for component in (manifest.get(kind) or [])
        if isinstance(component, dict) and clean(component.get('version'))
    })
    preview_version = clean(manifest.get('version'))
    if not preview_version and len(component_versions) == 1:
        preview_version = component_versions[0]
    elif not preview_version and len(component_versions) > 1:
        preview_version = 'multiple: ' + ', '.join(component_versions)
    return {
        'name': clean(manifest.get('packageName')),
        'author': clean(manifest.get('author')),
        'version': preview_version,
        'versionStrategy': ('package' if clean(manifest.get('version')) else
                            'component' if component_versions else None),
        'dateReleased': clean(manifest.get('dateReleased')),
        'manifest': manifest_reference,
        'links': {
            'documentation': clean(manifest.get('documentationLink')),
            'community': clean(manifest.get('communityLink')),
        },
        'components': {
            kind: [{
                'id': clean(component.get('id')),
                'name': clean(component.get('name')),
                'namespace': clean(component.get('namespace')),
                'location': clean(component.get('location')),
            } for component in (manifest.get(kind) or []) if isinstance(component, dict)]
            for kind in ('apps', 'drivers')
        },
    }


def build_result(manifest, manifest_reference, manifest_source,
                 repository=None, repository_source=None, package_id=None,
                 check_sources=False, fetcher=fetch_text):
    issues = validate_manifest(manifest, manifest_source)
    if repository is not None:
        issues.extend(validate_repository(
            repository, manifest, manifest_reference if valid_url_shape(manifest_reference) else None,
            repository_source or 'repository.json', package_id,
        ))
    if check_sources:
        issues.extend(validate_sources(manifest, fetcher, manifest_source))
    issues.sort(key=lambda row: (
        SEVERITY_ORDER[row['severity']], row.get('source') or '',
        row['path'], row['code']
    ))
    counts = collections_counter(row['severity'] for row in issues)
    return {
        'schemaVersion': '1.1',
        'valid': counts.get('ERROR', 0) == 0,
        'executesDownloadedCode': False,
        'networkSourceChecks': bool(check_sources),
        'counts': {severity: counts.get(severity, 0)
                   for severity in ('ERROR', 'WARNING', 'INFO')},
        'issues': issues,
        'preview': preview_record(manifest, manifest_reference),
    }


def collections_counter(values):
    result = {}
    for value in values:
        result[value] = result.get(value, 0) + 1
    return result


def annotation_escape(value):
    return str(value).replace('%', '%25').replace('\r', '%0D').replace('\n', '%0A')


def annotation_property(value):
    return annotation_escape(value).replace(':', '%3A').replace(',', '%2C')


def emit_annotations(result):
    for row in result['issues']:
        level = {'ERROR': 'error', 'WARNING': 'warning', 'INFO': 'notice'}[row['severity']]
        source = annotation_property(row.get('source') or 'packageManifest.json')
        title = annotation_property(f'{row["code"]} at {row["path"]}')
        message = row['message']
        if row.get('suggestion'):
            message += ' ' + row['suggestion']
        print(f'::{level} file={source},title={title}::{annotation_escape(message)}')


def render_text(result):
    counts = result['counts']
    lines = [
        f'HPM manifest validator: {"PASS" if result["valid"] else "FAIL"}',
        f'Errors: {counts["ERROR"]}  Warnings: {counts["WARNING"]}  Info: {counts["INFO"]}',
    ]
    for row in result['issues']:
        lines.append(f'[{row["severity"]}] {row["source"]}:{row["path"]} - {row["message"]}')
        if row.get('suggestion'):
            lines.append(f'  Suggestion: {row["suggestion"]}')
    preview = result['preview']
    lines.extend([
        '', 'Community record preview:',
        f'  {preview.get("name") or "Unnamed package"} - {preview.get("version") or "no version"}',
        f'  Author: {preview.get("author") or "not declared"}',
        f'  Apps: {len(preview["components"]["apps"])}  Drivers: {len(preview["components"]["drivers"])}',
    ])
    return '\n'.join(lines)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('manifest', help='local package manifest path or public HTTPS URL')
    parser.add_argument('--repository', help='optional local repository manifest or HTTPS URL')
    parser.add_argument('--package-id', help='package ID to select within the repository')
    parser.add_argument('--check-sources', action='store_true',
                        help='fetch declared Groovy sources and compare literal identities')
    parser.add_argument('--format', choices=('text', 'json'), default='text')
    parser.add_argument('--github-annotations', action='store_true')
    args = parser.parse_args()
    try:
        manifest, manifest_source = load_json_reference(args.manifest)
        repository = repository_source = None
        if args.repository:
            repository, repository_source = load_json_reference(args.repository)
    except (OSError, ValueError, UnicodeDecodeError, json.JSONDecodeError,
            urllib.error.URLError) as error:
        if args.github_annotations:
            location = ''
            if isinstance(error, json.JSONDecodeError):
                location = f',line={error.lineno},col={error.colno}'
            print(f'::error file={annotation_property(args.manifest)}{location},title=INVALID_INPUT::{annotation_escape(error)}')
        print(f'Validator input error: {error}', file=sys.stderr)
        return 2
    result = build_result(
        manifest, args.manifest, manifest_source, repository, repository_source,
        args.package_id, args.check_sources,
    )
    if args.github_annotations:
        emit_annotations(result)
    if args.format == 'json':
        print(json.dumps(result, indent=2, ensure_ascii=False, sort_keys=True))
    else:
        print(render_text(result))
    return 0 if result['valid'] else 1


if __name__ == '__main__':
    raise SystemExit(main())
