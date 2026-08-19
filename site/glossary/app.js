function setupDiagramPanZoom() {
  const viewport = document.querySelector('#mermaid-viewport');
  const svg = viewport ? viewport.querySelector('svg') : null;
  if (!viewport || !svg) return;

  const nativeWidth = svg.getBoundingClientRect().width;
  const nativeHeight = svg.getBoundingClientRect().height;
  svg.style.transformOrigin = '0 0';

  const fitScale = Math.min(1, viewport.clientWidth / nativeWidth);
  const minScale = fitScale;
  const maxScale = fitScale * 6;
  const state = { scale: fitScale, x: 0, y: 0 };

  function clamp(value, lo, hi) {
    return Math.min(hi, Math.max(lo, value));
  }

  function clampPan() {
    const scaledWidth = nativeWidth * state.scale;
    const scaledHeight = nativeHeight * state.scale;
    const margin = 80;
    state.x = scaledWidth <= viewport.clientWidth
      ? (viewport.clientWidth - scaledWidth) / 2
      : clamp(state.x, viewport.clientWidth - scaledWidth - margin, margin);
    state.y = scaledHeight <= viewport.clientHeight
      ? (viewport.clientHeight - scaledHeight) / 2
      : clamp(state.y, viewport.clientHeight - scaledHeight - margin, margin);
  }

  function apply() {
    svg.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
  }

  function zoomAt(cx, cy, factor) {
    const newScale = clamp(state.scale * factor, minScale, maxScale);
    const worldX = (cx - state.x) / state.scale;
    const worldY = (cy - state.y) / state.scale;
    state.scale = newScale;
    state.x = cx - worldX * newScale;
    state.y = cy - worldY * newScale;
    clampPan();
    apply();
  }

  function reset() {
    state.scale = fitScale;
    state.x = (viewport.clientWidth - nativeWidth * fitScale) / 2;
    state.y = (viewport.clientHeight - nativeHeight * fitScale) / 2;
    apply();
  }

  reset();

  viewport.addEventListener('wheel', (event) => {
    event.preventDefault();
    const rect = viewport.getBoundingClientRect();
    zoomAt(event.clientX - rect.left, event.clientY - rect.top, event.deltaY < 0 ? 1.15 : 1 / 1.15);
  }, { passive: false });

  const pointers = new Map();
  let pinchStartDistance = 0;
  let pinchStartScale = 1;

  function pointerDistance() {
    const [a, b] = [...pointers.values()];
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  function pointerMidpoint(rect) {
    const [a, b] = [...pointers.values()];
    return { x: (a.x + b.x) / 2 - rect.left, y: (a.y + b.y) / 2 - rect.top };
  }

  viewport.addEventListener('pointerdown', (event) => {
    try {
      viewport.setPointerCapture(event.pointerId);
    } catch (error) {
      // Pointer capture can be refused (e.g. synthetic events); dragging still works without it.
    }
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.size === 2) {
      pinchStartDistance = pointerDistance();
      pinchStartScale = state.scale;
    }
    viewport.classList.add('dragging');
  });

  viewport.addEventListener('pointermove', (event) => {
    if (!pointers.has(event.pointerId)) return;
    const previous = pointers.get(event.pointerId);
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.size === 2) {
      const rect = viewport.getBoundingClientRect();
      const distance = pointerDistance();
      const mid = pointerMidpoint(rect);
      const targetScale = clamp(pinchStartScale * (distance / pinchStartDistance), minScale, maxScale);
      const worldX = (mid.x - state.x) / state.scale;
      const worldY = (mid.y - state.y) / state.scale;
      state.scale = targetScale;
      state.x = mid.x - worldX * targetScale;
      state.y = mid.y - worldY * targetScale;
      clampPan();
      apply();
    } else if (pointers.size === 1) {
      state.x += event.clientX - previous.x;
      state.y += event.clientY - previous.y;
      clampPan();
      apply();
    }
  });

  function releasePointer(event) {
    pointers.delete(event.pointerId);
    if (pointers.size < 2) pinchStartDistance = 0;
    if (pointers.size === 0) viewport.classList.remove('dragging');
  }
  viewport.addEventListener('pointerup', releasePointer);
  viewport.addEventListener('pointercancel', releasePointer);
  viewport.addEventListener('pointerleave', releasePointer);

  document.querySelector('#zoom-in').addEventListener('click', () => {
    zoomAt(viewport.clientWidth / 2, viewport.clientHeight / 2, 1.3);
  });
  document.querySelector('#zoom-out').addEventListener('click', () => {
    zoomAt(viewport.clientWidth / 2, viewport.clientHeight / 2, 1 / 1.3);
  });
  document.querySelector('#zoom-reset').addEventListener('click', reset);

  window.addEventListener('resize', reset);
}

setupDiagramPanZoom();

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
