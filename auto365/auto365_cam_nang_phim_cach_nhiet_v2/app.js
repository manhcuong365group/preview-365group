(() => {
  'use strict';

  const normalize = (value) => (value || '')
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

  const library = document.querySelector('#library-grid');
  const cards = library ? Array.from(library.querySelectorAll('.article-card')) : [];

  const controls = {
    search: document.querySelector('#library-search'),
    topic: document.querySelector('#topic-filter'),
    film: document.querySelector('#film-filter'),
    car: document.querySelector('#car-filter'),
    type: document.querySelector('#type-filter'),
    need: document.querySelector('#need-filter'),
    year: document.querySelector('#year-filter'),
    sort: document.querySelector('#sort-filter'),
  };

  const count = document.querySelector('#library-count');
  const empty = document.querySelector('#library-empty');
  const activeFilters = document.querySelector('#active-filters');
  const reset = document.querySelector('#filter-reset');
  const mobileToggle = document.querySelector('#filter-mobile-toggle');
  const mobileCount = document.querySelector('#mobile-filter-count');
  const filterPanel = document.querySelector('#library-filters');
  const filterClose = document.querySelector('#filter-close');
  const backdrop = document.querySelector('#filter-backdrop');

  const filterKeys = ['topic', 'film', 'car', 'type', 'need', 'year'];

  const selectedLabel = (select) => select?.selectedOptions?.[0]?.textContent || '';

  function cardMatches(card) {
    const query = normalize(controls.search?.value);
    if (query && !normalize(`${card.dataset.title} ${card.textContent}`).includes(query)) return false;
    return filterKeys.every((key) => {
      const value = controls[key]?.value || 'all';
      return value === 'all' || card.dataset[key] === value;
    });
  }

  function sortedVisibleCards() {
    const visible = cards.filter(cardMatches);
    const mode = controls.sort?.value || 'featured';
    return visible.sort((a, b) => {
      if (mode === 'az') return (a.dataset.title || '').localeCompare(b.dataset.title || '', 'vi');
      if (mode === 'newest') return Number(b.dataset.year || 0) - Number(a.dataset.year || 0);
      return Number(a.dataset.featured || 999) - Number(b.dataset.featured || 999);
    });
  }

  function renderCards() {
    if (!library) return;
    const visible = sortedVisibleCards();
    const visibleSet = new Set(visible);
    cards.forEach((card) => { card.hidden = !visibleSet.has(card); });
    visible.forEach((card) => library.appendChild(card));
    if (count) count.textContent = `${visible.length}/${cards.length} bài demo`;
    if (empty) empty.hidden = visible.length !== 0;
  }

  function activeFilterEntries() {
    const entries = [];
    const query = controls.search?.value?.trim();
    if (query) entries.push({ key: 'search', label: `Từ khoá: ${query}` });
    filterKeys.forEach((key) => {
      const control = controls[key];
      if (control && control.value !== 'all') entries.push({ key, label: selectedLabel(control) });
    });
    return entries;
  }

  function clearFilter(key) {
    if (key === 'search' && controls.search) controls.search.value = '';
    else if (controls[key]) controls[key].value = 'all';
    applyLibrary();
  }

  function renderActiveFilters() {
    if (!activeFilters) return;
    const entries = activeFilterEntries();
    activeFilters.replaceChildren();
    if (!entries.length) {
      const emptyState = document.createElement('span');
      emptyState.className = 'active-filter-empty';
      emptyState.textContent = 'Chưa áp dụng bộ lọc';
      activeFilters.appendChild(emptyState);
    } else {
      entries.forEach(({ key, label }) => {
        const chip = document.createElement('span');
        chip.className = 'filter-chip';
        chip.append(document.createTextNode(label));
        const button = document.createElement('button');
        button.type = 'button';
        button.setAttribute('aria-label', `Bỏ bộ lọc ${label}`);
        button.textContent = '×';
        button.addEventListener('click', () => clearFilter(key));
        chip.appendChild(button);
        activeFilters.appendChild(chip);
      });
    }
    if (mobileCount) mobileCount.textContent = String(entries.length);
  }

  function applyLibrary() {
    renderCards();
    renderActiveFilters();
  }

  Object.entries(controls).forEach(([key, control]) => {
    if (!control) return;
    control.addEventListener(key === 'search' ? 'input' : 'change', applyLibrary);
  });

  reset?.addEventListener('click', () => {
    if (controls.search) controls.search.value = '';
    filterKeys.forEach((key) => { if (controls[key]) controls[key].value = 'all'; });
    if (controls.sort) controls.sort.value = 'featured';
    applyLibrary();
  });

  function setFilterDrawer(open) {
    filterPanel?.classList.toggle('is-open', open);
    if (backdrop) backdrop.hidden = !open;
    mobileToggle?.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('filter-drawer-open', open);
  }

  mobileToggle?.addEventListener('click', () => setFilterDrawer(true));
  filterClose?.addEventListener('click', () => setFilterDrawer(false));
  backdrop?.addEventListener('click', () => setFilterDrawer(false));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setFilterDrawer(false); });

  const navLinks = Array.from(document.querySelectorAll('.hub-nav a[href^="#"]'));
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        const current = link.getAttribute('href') === `#${visible.target.id}`;
        link.classList.toggle('is-current', current);
        if (current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-28% 0px -62% 0px', threshold: [0.01, 0.2, 0.6] });
    sections.forEach((section) => observer.observe(section));
  }

  applyLibrary();
})();
