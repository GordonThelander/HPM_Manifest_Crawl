"use strict";

const example = {
  packageName: "Example Presence",
  author: "Example Author",
  version: "1.2.0",
  dateReleased: "2026-08-17",
  documentationLink: "https://example.com/docs",
  communityLink: "https://community.hubitat.com/",
  apps: [{
    id: "example-presence-app",
    name: "Example Presence",
    namespace: "example",
    version: "1.2.0",
    location: "https://raw.githubusercontent.com/example/hubitat/main/ExamplePresence.groovy"
  }],
  drivers: []
};

const editor = document.querySelector("#manifest");
const issuesElement = document.querySelector("#issues");
const titleElement = document.querySelector("#result-title");
const summaryElement = document.querySelector("#result-summary");
const scoreElement = document.querySelector("#score");
const previewElement = document.querySelector("#preview");

function text(tag, value, className) {
  const element = document.createElement(tag);
  element.textContent = value;
  if (className) element.className = className;
  return element;
}

function addIssue(list, severity, code, path, message, suggestion) {
  list.push({ severity, code, path, message, suggestion });
}

function validUrl(value) {
  if (typeof value !== "string") return false;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch (_) {
    return false;
  }
}

function validateComponent(component, kind, index, issues) {
  const path = `${kind}[${index}]`;
  if (!component || typeof component !== "object" || Array.isArray(component)) {
    addIssue(issues, "ERROR", "INVALID_COMPONENT", path, "Component must be a JSON object.", "Use an object containing id, name, namespace and location.");
    return;
  }
  ["id", "name", "namespace"].forEach(field => {
    if (!String(component[field] ?? "").trim()) {
      addIssue(issues, "WARNING", `MISSING_${field.toUpperCase()}`, `${path}.${field}`, `Component does not declare ${field}.`, `Add a stable ${field} so community tools can identify this code.`);
    }
  });
  if (!String(component.version ?? "").trim()) {
    addIssue(issues, "ERROR", "MISSING_COMPONENT_VERSION", `${path}.version`, "Component does not declare a version.", "Add the version HPM should compare for updates.");
  }
  if (!String(component.location ?? "").trim()) {
    addIssue(issues, "ERROR", "MISSING_LOCATION", `${path}.location`, "Component has no source location.", "Add the public raw Groovy source URL.");
  } else if (!validUrl(component.location)) {
    addIssue(issues, "ERROR", "INVALID_URL", `${path}.location`, "Source location is not an absolute HTTP(S) URL.", "Use the complete public source URL.");
  } else if (new URL(component.location).protocol === "http:") {
    addIssue(issues, "WARNING", "HTTP_ONLY", `${path}.location`, "Source uses clear-text HTTP.", "Publish it over HTTPS when possible.");
  }
}

function validateManifest(manifest) {
  const issues = [];
  if (!manifest || typeof manifest !== "object" || Array.isArray(manifest)) {
    addIssue(issues, "ERROR", "INVALID_ROOT", "$", "Manifest root must be a JSON object.", "Wrap manifest fields in a JSON object.");
    return issues;
  }
  ["packageName", "author"].forEach(field => {
    if (!String(manifest[field] ?? "").trim()) addIssue(issues, "ERROR", `MISSING_${field.toUpperCase()}`, field, `Manifest does not declare ${field}.`, `Add a non-empty ${field} field.`);
  });
  if (!String(manifest.dateReleased ?? "").trim()) addIssue(issues, "WARNING", "MISSING_RELEASE_DATE", "dateReleased", "Manifest does not declare a release date.", "Use YYYY-MM-DD form.");
  ["documentationLink", "communityLink"].forEach(field => {
    if (!String(manifest[field] ?? "").trim()) addIssue(issues, "INFO", `MISSING_${field.toUpperCase()}`, field, `Manifest does not declare ${field}.`, "Add this link when a stable public page exists.");
    else if (!validUrl(manifest[field])) addIssue(issues, "ERROR", "INVALID_URL", field, "Link is not an absolute HTTP(S) URL.", "Use the complete public URL.");
  });
  let components = 0;
  const ids = new Map();
  ["apps", "drivers"].forEach(kind => {
    const values = manifest[kind] ?? [];
    if (!Array.isArray(values)) {
      addIssue(issues, "ERROR", "INVALID_COMPONENT_LIST", kind, `${kind} must be a JSON array.`, `Use "${kind}": [] when the package has none.`);
      return;
    }
    components += values.length;
    values.forEach((component, index) => {
      validateComponent(component, kind, index, issues);
      const id = String(component?.id ?? "").trim();
      if (id && ids.has(id)) addIssue(issues, "ERROR", "DUPLICATE_COMPONENT_ID", `${kind}[${index}].id`, `Component ID duplicates ${ids.get(id)}.`, "Give every app and driver a unique stable ID.");
      else if (id) ids.set(id, `${kind}[${index}].id`);
    });
  });
  if (!components) addIssue(issues, "ERROR", "NO_COMPONENTS", "apps/drivers", "Package declares no apps or drivers.", "Declare at least one installable component.");
  const order = { ERROR: 0, WARNING: 1, INFO: 2 };
  return issues.sort((a, b) => order[a.severity] - order[b.severity] || a.path.localeCompare(b.path));
}

function renderIssues(issues) {
  issuesElement.replaceChildren();
  const counts = { ERROR: 0, WARNING: 0, INFO: 0 };
  issues.forEach(item => counts[item.severity]++);
  const failed = counts.ERROR > 0;
  titleElement.textContent = failed ? "Changes needed" : counts.WARNING ? "Valid with warnings" : "Manifest looks ready";
  summaryElement.textContent = `${counts.ERROR} error(s), ${counts.WARNING} warning(s), ${counts.INFO} informational note(s).`;
  scoreElement.textContent = failed ? "Fix" : counts.WARNING ? "Check" : "Pass";
  scoreElement.className = `score ${failed ? "fail" : counts.WARNING ? "warn" : ""}`;
  if (!issues.length) issuesElement.append(text("p", "No structural issues found.", "muted"));
  issues.forEach(item => {
    const card = document.createElement("article");
    card.className = `issue ${item.severity.toLowerCase()}`;
    const head = document.createElement("div");
    head.className = "issue-head";
    head.append(text("span", item.severity), text("code", item.path));
    card.append(head, text("p", item.message), text("p", item.suggestion, "suggestion"));
    issuesElement.append(card);
  });
}

function renderPreview(manifest) {
  previewElement.replaceChildren();
  previewElement.append(text("h3", String(manifest.packageName || "Unnamed package")));
  const versions = [...new Set(["apps", "drivers"].flatMap(kind => Array.isArray(manifest[kind]) ? manifest[kind].map(item => String(item?.version ?? "").trim()).filter(Boolean) : []))];
  const version = manifest.version || (versions.length === 1 ? versions[0] : versions.length ? `Multiple versions: ${versions.join(", ")}` : "No version");
  previewElement.append(text("p", `${manifest.author || "Author not declared"} · ${version} · ${manifest.dateReleased || "No release date"}`, "package-meta"));
  const components = document.createElement("div");
  components.className = "components";
  ["apps", "drivers"].forEach(kind => {
    (Array.isArray(manifest[kind]) ? manifest[kind] : []).forEach(component => {
      if (!component || typeof component !== "object") return;
      const card = document.createElement("div");
      card.className = `component ${kind === "drivers" ? "driver" : "app"}`;
      card.append(text("span", kind.slice(0, -1).toUpperCase(), "kind"));
      card.append(text("strong", String(component.name || "Unnamed definition")));
      card.append(text("span", String(component.namespace || "Namespace not declared")));
      card.append(text("span", String(component.location || "Source not declared")));
      components.append(card);
    });
  });
  if (!components.children.length) components.append(text("p", "No installable definitions to preview.", "muted"));
  previewElement.append(components);
}

function runValidation() {
  let manifest;
  try {
    manifest = JSON.parse(editor.value);
  } catch (error) {
    renderIssues([{ severity: "ERROR", code: "INVALID_JSON", path: "$", message: error.message, suggestion: "Correct the JSON syntax and try again." }]);
    previewElement.replaceChildren(text("p", "A preview cannot be built until the JSON parses.", "muted"));
    return;
  }
  renderIssues(validateManifest(manifest));
  renderPreview(manifest);
}

function restoreExample() {
  editor.value = JSON.stringify(example, null, 2);
  runValidation();
}

document.querySelector("#validate").addEventListener("click", runValidation);
document.querySelector("#sample").addEventListener("click", restoreExample);
document.querySelector("#file").addEventListener("change", event => {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => { editor.value = String(reader.result); runValidation(); });
  reader.readAsText(file, "utf-8");
});

restoreExample();
