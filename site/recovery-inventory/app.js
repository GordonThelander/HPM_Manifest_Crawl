"use strict";

const index = window.IDENTITY_INDEX;
const byId = id => document.getElementById(id);
const normalise = value => String(value || "").trim().toLocaleLowerCase();
const fuzzy = value => normalise(value).match(/[a-z0-9]+/g)?.join(" ") || "";

function text(tag, value, className) {
  const element = document.createElement(tag);
  element.textContent = value;
  if (className) element.className = className;
  return element;
}

function safeLink(url, label) {
  if (!url || !/^https:\/\//i.test(url)) return null;
  const link = text("a", label);
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  return link;
}

function parseInventory(value) {
  const rows = [];
  String(value || "").split(/\r?\n/).forEach((line, offset) => {
    if (!line.trim()) return;
    const parts = line.split(/\s*[|\t,]\s*/).map(part => part.trim());
    let kind = "", name = "", namespace = "";
    if (["APP", "DRIVER"].includes(String(parts[0] || "").toUpperCase())) {
      [kind, name, namespace] = [parts[0].toUpperCase(), parts[1] || "", parts[2] || ""];
    } else {
      [name, namespace] = [parts[0] || "", parts[1] || ""];
    }
    rows.push({ line: offset + 1, kind, name, namespace, valid: Boolean(name && namespace) });
  });
  return rows;
}

function similarity(left, right) {
  left = fuzzy(left); right = fuzzy(right);
  if (left === right) return 1;
  if (!left || !right) return 0;
  const pairs = value => Array.from({ length: Math.max(0, value.length - 1) }, (_, i) => value.slice(i, i + 2));
  const a = pairs(left), counts = new Map();
  pairs(right).forEach(pair => counts.set(pair, (counts.get(pair) || 0) + 1));
  let overlap = 0;
  a.forEach(pair => { if ((counts.get(pair) || 0) > 0) { overlap++; counts.set(pair, counts.get(pair) - 1); } });
  return (2 * overlap) / (a.length + pairs(right).length || 1);
}

function resolveIdentity(query) {
  if (!query.valid) return { status: "unknown", exact: [], builtIns: [], suggestions: [], message: "Both definition name and namespace are required." };
  const exact = [], nameOnly = [], suggestions = [];
  for (const definition of index.definitions || []) {
    if (query.kind && definition.kind !== query.kind) continue;
    let best = 0;
    for (const identity of definition.identities || []) {
      const sameName = normalise(identity.name) === normalise(query.name);
      const sameNamespace = normalise(identity.namespace) === normalise(query.namespace);
      if (sameName && sameNamespace) exact.push({ type: "hpm", definition, basis: identity.basis });
      else if (sameName) nameOnly.push({ type: "hpm", definition });
      best = Math.max(best, similarity(query.name, identity.name));
    }
    if (best >= Number(index.matching?.suggestionThreshold || .82)) suggestions.push({ type: "hpm", definition, score: best });
  }
  for (const project of index.manualProjects || []) {
    if (query.kind && project.kind !== query.kind) continue;
    if (normalise(project.name) === normalise(query.name) && normalise(project.namespace) === normalise(query.namespace)) exact.push({ type: "manual", definition: project });
    else if (normalise(project.name) === normalise(query.name)) nameOnly.push({ type: "manual", definition: project });
  }
  const builtIns = (!query.kind || query.kind === "APP") ? (index.builtIns || []).filter(item => item.names.some(name => normalise(name) === normalise(query.name))) : [];
  const uniqueExact = [...new Map(exact.map(row => [`${row.type}:${row.definition.id}`, row])).values()];
  const filteredSuggestions = suggestions.filter(row => !uniqueExact.some(exactRow => exactRow.definition.id === row.definition.id)).sort((a, b) => b.score - a.score).slice(0, 4);
  if (uniqueExact.length === 1) return { status: "exact", exact: uniqueExact, builtIns, suggestions: [], message: "One exact name-and-namespace identity match." };
  if (uniqueExact.length > 1) return { status: "ambiguous", exact: uniqueExact, builtIns, suggestions: [], message: "Multiple sources declare this exact identity; review before reinstalling." };
  if (builtIns.length === 1 && !nameOnly.length) return { status: "builtin", exact: [], builtIns, suggestions: [], message: "The name matches documented Hubitat built-in code; built-ins are not HPM packages." };
  if (nameOnly.length || builtIns.length) return { status: "ambiguous", exact: [], nameOnly, builtIns, suggestions: filteredSuggestions, message: "The name is known, but the namespace does not confirm one source." };
  return { status: "unknown", exact: [], builtIns: [], suggestions: filteredSuggestions, message: filteredSuggestions.length ? "No exact identity; these are spelling-based suggestions only." : "No credible source was identified." };
}

function matchCard(match, className) {
  const item = document.createElement("div");
  item.className = `match ${className || ""}`.trim();
  const definition = match.definition;
  if (match.type === "manual") {
    item.append(text("strong", definition.name), text("span", "Manual installation - not HPM"), text("span", `Author: ${definition.author || "Not declared"}`));
    const links = document.createElement("div"); links.className = "links";
    [[definition.documentationUrl, "Repository"], [definition.communityUrl, "Community"], [definition.sourceUrl, "Source"]].forEach(([url, label]) => { const link = safeLink(url, label); if (link) links.append(link); });
    item.append(links); return item;
  }
  const pkg = definition.package;
  item.append(text("strong", pkg.name || definition.id), text("span", `${definition.kind} · ${pkg.author || "Author not declared"}`));
  const links = document.createElement("div"); links.className = "links";
  [[pkg.manifestUrl, "Manifest"], [pkg.documentationUrl, "Documentation"], [pkg.communityUrl, "Community"], [definition.sourceUrl, "Source"]].forEach(([url, label]) => { const link = safeLink(url, label); if (link) links.append(link); });
  item.append(links); return item;
}

function render(rows) {
  const report = byId("report"); report.replaceChildren();
  const counts = { exact: 0, builtin: 0, ambiguous: 0, unknown: 0 };
  rows.forEach(query => {
    const result = resolveIdentity(query); counts[result.status]++;
    const card = document.createElement("article"); card.className = "identity-card";
    const head = document.createElement("div"); head.className = "identity-head";
    const title = document.createElement("div");
    title.append(text("h3", query.name || `Invalid entry on line ${query.line}`), text("p", `${query.kind || "APP or DRIVER"} · ${query.namespace || "namespace missing"}`, "query"));
    head.append(title, text("span", result.status === "exact" ? "Exact identity" : result.status === "builtin" ? "Built-in" : result.status === "ambiguous" ? "Needs review" : "Unidentified", `status ${result.status}`));
    card.append(head, text("p", result.message, "empty"));
    const matches = document.createElement("div"); matches.className = "matches";
    result.exact.forEach(match => matches.append(matchCard(match)));
    (result.nameOnly || []).forEach(match => matches.append(matchCard(match, "suggestion")));
    result.builtIns.forEach(item => {
      const match = document.createElement("div"); match.className = "match builtin";
      match.append(text("strong", item.names[0]), text("span", "Official Hubitat documentation · not an HPM package"));
      const link = safeLink(item.documentationUrl, "Official documentation"); if (link) match.append(link); matches.append(match);
    });
    result.suggestions.forEach(match => matches.append(matchCard(match, "suggestion")));
    if (matches.children.length) card.append(matches);
    report.append(card);
  });
  byId("summary").textContent = `${rows.length} identities · ${counts.exact} exact · ${counts.builtin} built-in · ${counts.ambiguous} review · ${counts.unknown} unidentified`;
  byId("results").hidden = false;
}

function run() {
  if (!index) return;
  const rows = parseInventory(byId("inventory").value);
  if (!rows.length) { byId("dataset-status").textContent = "Enter at least one identity to build a recovery report."; byId("inventory").focus(); return; }
  render(rows);
}

if (index) byId("dataset-status").textContent = `Ready: ${index.definitionCount.toLocaleString()} HPM definitions, ${index.manualProjectCount || 0} reviewed manual projects and ${index.builtInCount} documented built-ins. Nothing entered here leaves this browser.`;
else byId("dataset-status").textContent = "The identity index could not be loaded. Rebuild the resolver data and reopen this page.";

byId("recover").addEventListener("click", run);
byId("sample").addEventListener("click", () => { byId("inventory").value = "APP | OwnTracks | lpakula\nAPP | Rule Machine | hubitat\nAPP | mDNS Device Discovery | gordon-thelander\nDRIVER | Unknown Example | unknown"; run(); });
byId("clear").addEventListener("click", () => { byId("inventory").value = ""; byId("results").hidden = true; byId("inventory").focus(); });
