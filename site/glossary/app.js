const searchInput = document.querySelector('#search');
const clearButton = document.querySelector('#clear-search');
const resultCount = document.querySelector('#result-count');
const noResults = document.querySelector('#no-results');
const categories = [...document.querySelectorAll('.glossary-category')];
const totalTerms = categories.reduce((sum, cat) => sum + Number(cat.dataset.count || 0), 0);

function describeDefault() {
  return `${totalTerms.toLocaleString()} terms across ${categories.length} categories.`;
}

function filter(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    categories.forEach(cat => {
      cat.hidden = false;
      cat.querySelectorAll('.term').forEach(term => { term.hidden = false; });
    });
    noResults.hidden = true;
    resultCount.textContent = describeDefault();
    return;
  }
  let shown = 0;
  categories.forEach(cat => {
    let visibleInCategory = 0;
    cat.querySelectorAll('.term').forEach(term => {
      const match = (term.dataset.search || '').includes(q);
      term.hidden = !match;
      if (match) { visibleInCategory += 1; shown += 1; }
    });
    cat.hidden = visibleInCategory === 0;
  });
  resultCount.textContent = `${shown.toLocaleString()} of ${totalTerms.toLocaleString()} terms match "${query.trim()}".`;
  noResults.hidden = shown !== 0;
}

resultCount.textContent = describeDefault();
searchInput.addEventListener('input', () => filter(searchInput.value));
clearButton.addEventListener('click', () => {
  searchInput.value = '';
  filter('');
  searchInput.focus();
});

const params = new URLSearchParams(window.location.search);
const initialQuery = params.get('q');
if (initialQuery) {
  searchInput.value = initialQuery;
  filter(initialQuery);
}
