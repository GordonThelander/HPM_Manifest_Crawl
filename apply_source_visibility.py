#!/usr/bin/env python3
import json
from pathlib import Path

PATH = Path('hubitat_automation_map_app_integration_registry.json')
VALID = ['PUBLIC_SOURCE', 'MANIFEST_ONLY', 'CLOSED_NATIVE', 'UNKNOWN']


def classify(entry):
    origin = str(entry.get('origin') or '')
    status = str(entry.get('status') or '')

    # Only a clearly Hubitat-native origin is treated as closed native code.
    # Ambiguous native/community origins remain UNKNOWN rather than guessing.
    if origin == 'HUBITAT_NATIVE':
        return 'CLOSED_NATIVE'

    # These verification states explicitly assert repository-backed evidence.
    if status in {'VERIFIED_REPO', 'VERIFIED_OWNER_REPO'}:
        return 'PUBLIC_SOURCE'

    # HPM package identity is useful evidence but does not, by itself, prove
    # that the actual Groovy source was fetched and inspected.
    if origin == 'HPM_COMMUNITY':
        return 'MANIFEST_ONLY'

    return 'UNKNOWN'


data = json.loads(PATH.read_text(encoding='utf-8'))
data['sourceVisibilityValues'] = {
    'PUBLIC_SOURCE': 'Public implementation source is explicitly evidenced by a verified repository/source record.',
    'MANIFEST_ONLY': 'Public package or manifest metadata is evidenced, but implementation source has not been verified as available/inspected.',
    'CLOSED_NATIVE': 'Hubitat-native implementation whose internal Groovy source is not publicly exposed through HPM.',
    'UNKNOWN': 'Source visibility cannot be established from the available evidence without inference.'
}

entries = data.get('entries') or data.get('integrations') or []
for entry in entries:
    entry['sourceVisibility'] = classify(entry)

PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False, sort_keys=False) + '\n', encoding='utf-8', newline='\n')
print(f'Annotated {len(entries)} registry entries with sourceVisibility')
