'use strict';

const data = window.HPM_TAXONOMY;
const byId = id => document.getElementById(id);
const makeText = (tag, value, className) => {
  const node = document.createElement(tag);
  node.textContent = value;
  if (className) node.className = className;
  return node;
};
const tagExplorerUrl = term => `../package-explorer/?catalogue=HPM_PACKAGE&tag=${encodeURIComponent(term)}#results-title`;
const categoryExplorerUrl = term => `../package-explorer/?catalogue=HPM_PACKAGE&query=${encodeURIComponent(term)}#results-title`;
const formatPercent = value => `${Number(value || 0).toFixed(2).replace(/\.00$/, '')}%`;

function metricValue(row) {
  return Number(row[byId('measure').value] || 0);
}

function cloudLink(row, maximum) {
  const count = metricValue(row);
  const link = document.createElement('a');
  link.href = tagExplorerUrl(row.name);
  link.className = count ? 'cloud-term' : 'cloud-term unused';
  link.style.setProperty('--weight', maximum ? String(Math.sqrt(count / maximum)) : '0');
  link.setAttribute('aria-label', `${row.name}: ${count.toLocaleString()} packages`);
  link.append(makeText('span', row.name), makeText('small', count.toLocaleString()));
  return link;
}

function renderCloud() {
  const rows = data.metrics.tags;
  const maximum = Math.max(...rows.map(metricValue), 0);
  const cloud = byId('tag-cloud');
  cloud.replaceChildren(...rows
    .slice()
    .sort((a, b) => metricValue(b) - metricValue(a) || a.name.localeCompare(b.name))
    .map(row => cloudLink(row, maximum)));
  const measure = byId('measure').selectedOptions[0].textContent;
  byId('status').textContent = `${rows.length} valid tags ranked across ${measure.toLocaleLowerCase()}.`;
}

function renderCategories() {
  const cards = data.metrics.categories
    .slice()
    .sort((a, b) => b.packageCount - a.packageCount || a.name.localeCompare(b.name))
    .map(row => {
      const link = document.createElement('a');
      link.href = categoryExplorerUrl(row.name);
      link.className = 'category-card';
      link.append(
        makeText('strong', row.packageCount.toLocaleString()),
        makeText('span', row.name),
        makeText('small', `${formatPercent(row.percent)} of packages`),
      );
      return link;
    });
  byId('categories').replaceChildren(...cards);
}

function renderTable() {
  const query = byId('tag-search').value.trim().toLocaleLowerCase();
  const sort = byId('table-sort').value;
  const comparisons = {
    usage: (a, b) => a.rank - b.rank || a.name.localeCompare(b.name),
    name: (a, b) => a.name.localeCompare(b.name),
    apps: (a, b) => b.appPackageCount - a.appPackageCount || a.name.localeCompare(b.name),
    drivers: (a, b) => b.driverPackageCount - a.driverPackageCount || a.name.localeCompare(b.name),
  };
  const rows = data.metrics.tags
    .filter(row => row.name.toLocaleLowerCase().includes(query))
    .slice()
    .sort(comparisons[sort])
    .map(row => {
      const tr = document.createElement('tr');
      const nameCell = document.createElement('td');
      const link = makeText('a', row.name);
      link.href = tagExplorerUrl(row.name);
      nameCell.append(link);
      tr.append(
        makeText('td', String(row.rank)),
        nameCell,
        makeText('td', row.packageCount.toLocaleString()),
        makeText('td', formatPercent(row.percent)),
        makeText('td', row.appPackageCount.toLocaleString()),
        makeText('td', row.driverPackageCount.toLocaleString()),
      );
      if (row.unused) tr.className = 'unused-row';
      return tr;
    });
  byId('tag-rows').replaceChildren(...rows);
}

function renderSource() {
  const source = data.source || {};
  const modeLabels = { live: 'Live authoritative settings', fallback: 'Last-known-good fallback', file: 'Supplied settings file' };
  const retrieved = source.retrievedAt ? new Date(source.retrievedAt).toLocaleString() : 'time not recorded';
  const changes = source.changes || {};
  const additions = [...(changes.categoriesAdded || []), ...(changes.tagsAdded || [])];
  const removals = [...(changes.categoriesRemoved || []), ...(changes.tagsRemoved || [])];
  const changeSummary = changes.changed ? ` Taxonomy changed: ${additions.length} added and ${removals.length} removed.` : ' No taxonomy change from the previous successful settings snapshot.';
  byId('source-summary').textContent = `${modeLabels[source.mode] || source.mode}. Retrieved ${retrieved}. Source fingerprint ${String(source.sha256 || '').slice(0, 12)}.${changeSummary}`;
  byId('source-link').href = source.url;
}

if (data) {
  byId('package-count').textContent = data.packageCount.toLocaleString();
  byId('tag-count').textContent = data.taxonomy.tags.length.toLocaleString();
  byId('category-count').textContent = data.taxonomy.categories.length.toLocaleString();
  byId('unused-count').textContent = data.metrics.tags.filter(row => row.unused).length.toLocaleString();
  renderCloud();
  renderCategories();
  renderTable();
  renderSource();
  byId('measure').addEventListener('change', renderCloud);
  byId('tag-search').addEventListener('input', renderTable);
  byId('table-sort').addEventListener('change', renderTable);
} else {
  byId('status').textContent = 'Taxonomy metrics are unavailable. Rebuild the taxonomy data and reopen this page.';
}
