#!/usr/bin/env python3
"""Frozen consumer contract for Automation Map's slim registry.

This module intentionally has no network or third-party dependencies. It is the
publication gate for the file Automation Map downloads from the main branch.
Community outputs must remain independent of this contract.
"""

import json
import pathlib

SLIM_FILENAME = 'hubitat_automation_map_app_integration_registry_slim.json'
SLIM_URL = (
    'https://raw.githubusercontent.com/GordonThelander/HPM_Manifest_Crawl/'
    f'main/{SLIM_FILENAME}'
)
SCHEMA_VERSION = '0.4'

ROOT_FIELDS = {'schemaVersion', 'entries'}
ENTRY_FIELDS = {'id', 'name', 'matchMode', 'matchRules', 'dependencies'}
RULE_FIELDS = {'field', 'operator', 'value'}
DEPENDENCY_FIELDS = {'name', 'class', 'runtimeCriticality'}

MATCH_MODES = {'ANY', 'ALL'}
MATCH_OPERATORS = {'equals', 'contains'}
EVALUABLE_FIELDS = {'appName'}
DEPENDENCY_CLASSES = {
    'LOCAL_BRIDGE', 'LOCAL_DEVICE', 'LOCAL_SERVICE', 'INFRASTRUCTURE',
    'EXTERNAL_PLATFORM', 'EXTERNAL_SERVICE', 'UNKNOWN_EXTERNAL',
}
RUNTIME_CRITICALITIES = {
    'RUNTIME', 'MANAGEMENT', 'SETUP_ONLY', 'DISCOVERY_ONLY',
}


def string_matches(operator, value, app_type):
    """Match exactly as Automation Map's registryRuleMatches does."""
    if not isinstance(value, str) or not isinstance(app_type, str):
        return False
    needle = value.strip().lower()
    haystack = app_type.strip().lower()
    if not needle or not haystack:
        return False
    if operator == 'equals':
        return haystack == needle
    if operator == 'contains':
        return needle in haystack
    return False


def entry_state(entry, app_type):
    """Return MATCH, NO_MATCH or NOT_EVALUABLE using the Groovy consumer rules."""
    any_match = False
    any_fail = False
    any_unknown = False

    for rule in entry.get('matchRules') or []:
        if not isinstance(rule, dict):
            continue
        field = str(rule.get('field'))
        if field not in EVALUABLE_FIELDS:
            any_unknown = True
            continue
        if string_matches(str(rule.get('operator')), str(rule.get('value')), app_type):
            any_match = True
        else:
            any_fail = True

    if str(entry.get('matchMode')) == 'ALL':
        if any_fail:
            return 'NO_MATCH'
        if any_unknown:
            return 'NOT_EVALUABLE'
        return 'MATCH' if any_match else 'NO_MATCH'
    if any_match:
        return 'MATCH'
    if any_unknown:
        return 'NOT_EVALUABLE'
    return 'NO_MATCH'


def validate_document(document):
    """Return every contract violation in a parsed slim-registry document."""
    errors = []
    if not isinstance(document, dict):
        return ['root must be an object']
    missing = ROOT_FIELDS - set(document)
    if missing:
        errors.append(f'root missing fields: {sorted(missing)}')
    if str(document.get('schemaVersion')) != SCHEMA_VERSION:
        errors.append(
            f"schemaVersion must remain {SCHEMA_VERSION}, got {document.get('schemaVersion')!r}"
        )
    entries = document.get('entries')
    if not isinstance(entries, list):
        errors.append('entries must be a list')
        return errors

    seen_ids = set()
    for index, entry in enumerate(entries):
        where = f'entries[{index}]'
        if not isinstance(entry, dict):
            errors.append(f'{where} must be an object')
            continue
        missing = ENTRY_FIELDS - set(entry)
        if missing:
            errors.append(f'{where} missing fields: {sorted(missing)}')
        entry_id = entry.get('id')
        if not isinstance(entry_id, str) or not entry_id.strip():
            errors.append(f'{where}.id must be a non-empty string')
        elif entry_id in seen_ids:
            errors.append(f'{where}.id duplicates {entry_id!r}')
        else:
            seen_ids.add(entry_id)
        if entry.get('matchMode') not in MATCH_MODES:
            errors.append(f"{where}.matchMode is not understood: {entry.get('matchMode')!r}")

        rules = entry.get('matchRules')
        if not isinstance(rules, list) or not rules:
            errors.append(f'{where}.matchRules must be a non-empty list')
        else:
            for rule_index, rule in enumerate(rules):
                rule_where = f'{where}.matchRules[{rule_index}]'
                if not isinstance(rule, dict):
                    errors.append(f'{rule_where} must be an object')
                    continue
                missing = RULE_FIELDS - set(rule)
                if missing:
                    errors.append(f'{rule_where} missing fields: {sorted(missing)}')
                if rule.get('operator') not in MATCH_OPERATORS:
                    errors.append(
                        f"{rule_where}.operator is not understood: {rule.get('operator')!r}"
                    )
                if not isinstance(rule.get('field'), str) or not rule.get('field').strip():
                    errors.append(f'{rule_where}.field must be a non-empty string')
                if not isinstance(rule.get('value'), str) or not rule.get('value').strip():
                    errors.append(f'{rule_where}.value must be a non-empty string')

        dependencies = entry.get('dependencies')
        if not isinstance(dependencies, list) or not dependencies:
            errors.append(f'{where}.dependencies must be a non-empty list')
        else:
            for dep_index, dependency in enumerate(dependencies):
                dep_where = f'{where}.dependencies[{dep_index}]'
                if not isinstance(dependency, dict):
                    errors.append(f'{dep_where} must be an object')
                    continue
                missing = DEPENDENCY_FIELDS - set(dependency)
                if missing:
                    errors.append(f'{dep_where} missing fields: {sorted(missing)}')
                if dependency.get('class') not in DEPENDENCY_CLASSES:
                    errors.append(
                        f"{dep_where}.class is not understood: {dependency.get('class')!r}"
                    )
                if dependency.get('runtimeCriticality') not in RUNTIME_CRITICALITIES:
                    errors.append(
                        f"{dep_where}.runtimeCriticality is not understood: "
                        f"{dependency.get('runtimeCriticality')!r}"
                    )
                if not isinstance(dependency.get('name'), str) or not dependency.get('name').strip():
                    errors.append(f'{dep_where}.name must be a non-empty string')
    return errors


def check_repository():
    """Return repository-level publication errors without modifying files."""
    import build_slim_registry

    errors = []
    expected_path = pathlib.Path(SLIM_FILENAME)
    if build_slim_registry.SLIM != expected_path:
        errors.append(
            f'slim output path changed from {expected_path} to {build_slim_registry.SLIM}'
        )
    if not expected_path.exists():
        errors.append(f'{expected_path} is missing')
        return errors
    raw = expected_path.read_bytes()
    if len(raw) > build_slim_registry.MAX_BYTES:
        errors.append(
            f'{expected_path} is {len(raw)} bytes; limit is {build_slim_registry.MAX_BYTES}'
        )
    try:
        document = json.loads(raw.decode('utf-8'))
    except (UnicodeDecodeError, json.JSONDecodeError) as exc:
        errors.append(f'{expected_path} is not valid UTF-8 JSON: {exc}')
        return errors
    errors.extend(validate_document(document))

    generated = build_slim_registry.build()
    # pathlib's text mode normalises CRLF on Windows, matching the generator's
    # own --check behaviour. The byte limit above deliberately uses raw bytes.
    if expected_path.read_text('utf-8') != generated:
        errors.append(
            f'{expected_path} is not the exact validated projection of '
            f'{build_slim_registry.CANONICAL}'
        )
    return errors


def main():
    errors = check_repository()
    if errors:
        print('AUTOMATION MAP CONTRACT FAILURES:')
        for error in errors:
            print(f'- {error}')
        return 1
    size = pathlib.Path(SLIM_FILENAME).stat().st_size
    entries = len(json.loads(pathlib.Path(SLIM_FILENAME).read_text('utf-8'))['entries'])
    print(
        f'Automation Map contract PASS: {entries} entries, {size} bytes, '
        f'schema {SCHEMA_VERSION}, URL {SLIM_URL}'
    )
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
