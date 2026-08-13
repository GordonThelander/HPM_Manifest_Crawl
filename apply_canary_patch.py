from pathlib import Path

p = Path('crawl_hpm.py')
s = p.read_text(encoding='utf-8')

old = "    rule_machine_detected = False\n"
new = "    rule_machine_detected = False\n    rule_machine_matches = []\n"
if old not in s:
    raise SystemExit('canary patch: initial marker not found')
s = s.replace(old, new, 1)

old = """            if not matches:\n                dead.append([e.get('id'), e.get('name'), n, field, op, val])\n                near_vals = sorted({s for _, s in global_targets[field] if string_near(op, val, s)})\n                for nv in near_vals[:20]:\n                    if not string_matches(op, val, nv):\n                        near.append([e.get('id'), field, op, val, nv])\n                if field == 'appName' and op == 'contains' and val == 'Rule Machine':\n                    rule_machine_detected = True\n            if op == 'contains' and len(matches) > 5:\n"""
new = """            if field == 'appName' and op == 'contains' and val == 'Rule Machine':\n                # The live HPM index currently contains a community package named\n                # \"Rule Machine Manager\", which is a substring false positive.\n                rule_machine_detected = True\n                rule_machine_matches = [index['packages'][pi].get('packageName') for pi in matches]\n            if not matches:\n                dead.append([e.get('id'), e.get('name'), n, field, op, val])\n                near_vals = sorted({s for _, s in global_targets[field] if string_near(op, val, s)})\n                for nv in near_vals[:20]:\n                    if not string_matches(op, val, nv):\n                        near.append([e.get('id'), field, op, val, nv])\n            if op == 'contains' and len(matches) > 5:\n"""
if old not in s:
    raise SystemExit('canary patch: validation block not found')
s = s.replace(old, new, 1)

old = """        f\"Known Rule Machine canary (`appName contains \\\"Rule Machine\\\"`): **{'DETECTED' if rule_machine_detected else 'NOT DETECTED'}**.\", '',\n        table(['Entry ID','Entry','Rule','Field','Operator','Registry value'], dead), '',\n"""
new = """        f\"Known Rule Machine canary (`appName contains \\\"Rule Machine\\\"`): **{'DETECTED' if rule_machine_detected else 'NOT DETECTED'}**.\",\n        (\"Live-HPM note: this rule currently matches \" + ', '.join(f'`{x}`' for x in rule_machine_matches) + \" by substring, so it is not a zero-hit dead rule in the HPM identity index. That is itself evidence the rule is unsafe for identifying Hubitat's built-in Rule Machine app (`Rule-5.1`).\") if rule_machine_matches else \"Live-HPM note: no HPM package currently matches the canary substring.\", '',\n        table(['Entry ID','Entry','Rule','Field','Operator','Registry value'], dead), '',\n"""
if old not in s:
    raise SystemExit('canary patch: report marker not found')
s = s.replace(old, new, 1)

p.write_text(s, encoding='utf-8', newline='\n')
