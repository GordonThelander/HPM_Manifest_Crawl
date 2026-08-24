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
const readinessElement = document.querySelector(".readiness");
const readinessTitle = document.querySelector("#readiness-title");
const readinessScore = document.querySelector("#readiness-score");
const readinessList = document.querySelector("#readiness-list");
const repositoryEntry = document.querySelector("#repository-entry");
const publicEntry = document.querySelector("#public-entry");
const taxonomy = window.HPM_TAXONOMY;
const validCategories = new Set(taxonomy?.taxonomy?.categories || []);
const validTags = new Set(taxonomy?.taxonomy?.tags || []);
let lastManifest = null;
let lastIssues = [];

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

function validIsoDate(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  return parsed.getUTCFullYear() === year && parsed.getUTCMonth() === month - 1 && parsed.getUTCDate() === day;
}

function validateComponent(component, kind, index, issues, requireVersion) {
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
  ["required", "oauth", "primary"].forEach(field => {
    if (Object.prototype.hasOwnProperty.call(component, field) && typeof component[field] !== "boolean") {
      addIssue(issues, "ERROR", "INVALID_BOOLEAN", `${path}.${field}`, `${field} must be a JSON Boolean.`, `Use true or false without quotation marks.`);
    }
  });
  if (requireVersion && !String(component.version ?? "").trim()) {
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
  const dateReleased = String(manifest.dateReleased ?? "").trim();
  if (!dateReleased) addIssue(issues, "WARNING", "MISSING_RELEASE_DATE", "dateReleased", "Manifest does not declare a release date.", "Use YYYY-MM-DD form.");
  else if (!validIsoDate(dateReleased)) addIssue(issues, "WARNING", "RELEASE_DATE_FORMAT", "dateReleased", "Release date is not a real date in YYYY-MM-DD form.", "Use a valid ISO date such as 2026-08-17.");
  ["documentationLink", "communityLink"].forEach(field => {
    if (!String(manifest[field] ?? "").trim()) addIssue(issues, "INFO", `MISSING_${field.toUpperCase()}`, field, `Manifest does not declare ${field}.`, "Add this link when a stable public page exists.");
    else if (!validUrl(manifest[field])) addIssue(issues, "ERROR", "INVALID_URL", field, "Link is not an absolute HTTP(S) URL.", "Use the complete public URL.");
  });
  let components = 0;
  const packageVersion = String(manifest.version ?? "").trim();
  const componentVersions = ["apps", "drivers"].flatMap(kind => Array.isArray(manifest[kind]) ? manifest[kind].map((component, index) => ({ component, path: `${kind}[${index}].version` })).filter(row => String(row.component?.version ?? "").trim()) : []);
  if (packageVersion && componentVersions.length) {
    addIssue(issues, "ERROR", "MIXED_VERSION_STRATEGY", "version", "Manifest mixes package-level and component-level versions.", "Use either one package version or a version on every app and driver, not both.");
  }
  const ids = new Map();
  ["apps", "drivers"].forEach(kind => {
    const values = manifest[kind] ?? [];
    if (!Array.isArray(values)) {
      addIssue(issues, "ERROR", "INVALID_COMPONENT_LIST", kind, `${kind} must be a JSON array.`, `Use "${kind}": [] when the package has none.`);
      return;
    }
    components += values.length;
    values.forEach((component, index) => {
      validateComponent(component, kind, index, issues, !packageVersion);
      const id = String(component?.id ?? "").trim();
      if (id && ids.has(id)) addIssue(issues, "ERROR", "DUPLICATE_COMPONENT_ID", `${kind}[${index}].id`, `Component ID duplicates ${ids.get(id)}.`, "Give every app and driver a unique stable ID.");
      else if (id) ids.set(id, `${kind}[${index}].id`);
    });
  });
  if (!components) addIssue(issues, "ERROR", "NO_COMPONENTS", "apps/drivers", "Package declares no apps or drivers.", "Declare at least one installable component.");
  else if (!packageVersion && !componentVersions.length) addIssue(issues, "ERROR", "MISSING_VERSION_STRATEGY", "version", "Manifest declares neither a package version nor component versions.", "Add one package-level version or add a version to every app and driver.");
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

function httpsUrl(value) {
  if (!validUrl(value)) return false;
  return new URL(value).protocol === "https:";
}

function slug(value) {
  return String(value || "").toLocaleLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function submissionValues(manifest) {
  const tags = document.querySelector("#tags").value.split(",").map(value => value.trim()).filter(Boolean);
  return {
    manifestUrl: document.querySelector("#manifest-url").value.trim(),
    repositoryUrl: document.querySelector("#repository-url").value.trim(),
    packageId: document.querySelector("#package-id").value.trim(),
    category: document.querySelector("#category").value,
    tags,
    description: document.querySelector("#description").value.trim(),
    tested: document.querySelector("#tested").checked,
    packageName: String(manifest?.packageName || "").trim(),
    author: String(manifest?.author || "").trim()
  };
}

function renderSubmission(manifest, issues) {
  const values = submissionValues(manifest);
  const invalidTags = values.tags.filter(value => validTags.size && !validTags.has(value));
  const duplicateTags = values.tags.filter((value, index) => values.tags.indexOf(value) !== index);
  const validCategory = validCategories.size ? validCategories.has(values.category) : Boolean(values.category);
  const allComponents = ["apps", "drivers"].flatMap(kind => Array.isArray(manifest?.[kind]) ? manifest[kind] : []);
  const packageVersion = String(manifest?.version ?? "").trim();
  const versionedComponents = allComponents.filter(component => String(component?.version ?? "").trim()).length;
  const versionStrategy = Boolean(packageVersion) !== Boolean(versionedComponents) && (packageVersion || versionedComponents === allComponents.length);
  const checks = [
    [!issues.some(item => item.severity === "ERROR"), "Manifest has no structural errors"],
    [Boolean(versionStrategy), "One version strategy: package or every component"],
    [allComponents.length > 0 && allComponents.every(component => httpsUrl(component?.location)), "Every app and driver declares an HTTPS source URL"],
    [httpsUrl(values.manifestUrl), "Package manifest declares an HTTPS URL"],
    [httpsUrl(values.repositoryUrl), "Repository JSON declares an HTTPS URL"],
    [validCategory, !values.category ? "Choose a current HPM category" : !validCategory ? `Category is not in the current HPM taxonomy: ${values.category}` : "Category is in the current HPM taxonomy"],
    [Boolean(values.description), "A short package description is supplied"],
    [Boolean(values.tags.length) && !invalidTags.length && !duplicateTags.length, invalidTags.length ? `Unknown HPM tag(s): ${invalidTags.join(", ")}` : duplicateTags.length ? `Duplicate tag(s): ${[...new Set(duplicateTags)].join(", ")}` : "At least one current HPM tag is supplied"],
    [values.tested, "Installation was tested through HPM"]
  ];
  const passed = checks.filter(([pass]) => pass).length;
  readinessElement.classList.toggle("ready", passed === checks.length);
  readinessTitle.textContent = passed === checks.length ? "Ready to submit" : "Action required";
  readinessScore.textContent = `${passed}/${checks.length}`;
  readinessList.replaceChildren(...checks.map(([pass, label]) => text("li", label, pass ? "pass" : "")));

  const ownEntry = {
    name: values.packageName || "Your package name",
    category: values.category || "Choose a category",
    location: values.manifestUrl || "https://raw.githubusercontent.com/…/packageManifest.json",
    description: values.description || "Describe what the package does",
    tags: values.tags.length ? values.tags : ["Choose current tags"]
  };
  if (values.packageId) ownEntry.id = values.packageId;
  const catalogueEntry = {
    name: values.author || "Your repository name",
    location: values.repositoryUrl || "https://raw.githubusercontent.com/…/repository.json"
  };
  repositoryEntry.textContent = JSON.stringify(ownEntry, null, 2);
  publicEntry.textContent = JSON.stringify(catalogueEntry, null, 2);
}

function runValidation() {
  let manifest;
  try {
    manifest = JSON.parse(editor.value);
  } catch (error) {
    renderIssues([{ severity: "ERROR", code: "INVALID_JSON", path: "$", message: error.message, suggestion: "Correct the JSON syntax and try again." }]);
    previewElement.replaceChildren(text("p", "A preview cannot be built until the JSON parses.", "muted"));
    lastManifest = null;
    lastIssues = [{ severity: "ERROR", code: "INVALID_JSON", path: "$", message: error.message }];
    renderSubmission(null, lastIssues);
    return;
  }
  lastManifest = manifest;
  lastIssues = validateManifest(manifest);
  renderIssues(lastIssues);
  renderPreview(manifest);
  const packageId = document.querySelector("#package-id");
  if (!packageId.value) packageId.value = slug(manifest.packageName);
  renderSubmission(manifest, lastIssues);
}

function restoreExample() {
  editor.value = JSON.stringify(example, null, 2);
  runValidation();
}

function populateTaxonomy() {
  const category = document.querySelector("#category");
  const selected = category.value;
  category.replaceChildren(text("option", "Choose a category"));
  category.firstElementChild.value = "";
  for (const value of validCategories) {
    const option = text("option", value);
    option.value = value;
    category.append(option);
  }
  if ([...validCategories].includes(selected)) category.value = selected;
  const tagOptions = [...validTags].map(value => {
    const option = document.createElement("option");
    option.value = value;
    return option;
  });
  document.querySelector("#valid-tags").replaceChildren(...tagOptions);
  const status = document.querySelector("#taxonomy-status");
  if (!taxonomy) {
    status.textContent = "Taxonomy data is unavailable. Rebuild the site before relying on category or tag readiness.";
    return;
  }
  const mode = taxonomy.source?.mode === "live" ? "authoritative settings" : taxonomy.source?.mode === "fallback" ? "last-known-good fallback" : "supplied settings";
  status.textContent = `${validCategories.size} categories and ${validTags.size} valid tags from ${mode}. Open the Taxonomy view to see usage metrics.`;
  const metricsLink = text("a", " View taxonomy metrics");
  metricsLink.href = "../taxonomy/";
  status.append(metricsLink);
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
document.querySelectorAll(".submission-form input, .submission-form select").forEach(control => control.addEventListener("input", () => renderSubmission(lastManifest, lastIssues)));
document.querySelectorAll("[data-copy]").forEach(button => button.addEventListener("click", async () => {
  const target = document.querySelector(`#${button.dataset.copy}`);
  try {
    await navigator.clipboard.writeText(target.textContent);
    button.textContent = "Copied";
    window.setTimeout(() => { button.textContent = "Copy"; }, 1200);
  } catch (_) {
    button.textContent = "Select text to copy";
  }
}));

populateTaxonomy();
restoreExample();
