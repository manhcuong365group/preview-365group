// Auto365 Newsroom — filtering layer.
// Global Finder and Vehicle Finder intentionally keep separate state.
(() => {
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];
  const unique = (values) => [...new Set(values.filter(Boolean))];

  const allArticleSlides = qsa('#article-swiper .swiper-slide');
  const allVehicleSlides = qsa('#vehicle-swiper .swiper-slide');
  const articleWrapper = qs('#article-swiper .swiper-wrapper');
  const vehicleWrapper = qs('#vehicle-swiper .swiper-wrapper');
  let activeFeedType = '';
  let globalVisibleLimit = 6;
  const GLOBAL_RESULT_PAGE_SIZE = 6;
  const vehicleState = { brand: '', model: '', service: '', segment: '' };

  const articleCards = () => allArticleSlides.map((slide) => qs('.article-card', slide)).filter(Boolean);
  const caseCards = () => allVehicleSlides.map((slide) => qs('.case-card', slide)).filter(Boolean);

  function notifyLayoutUpdate({ reset = false } = {}) {
    document.dispatchEvent(new CustomEvent('auto365:filters-updated', { detail: { reset } }));
  }

  function getGlobalFilters() {
    return {
      query: (qs('#global-query')?.value || '').trim().toLowerCase(),
      type: qs('#filter-type')?.value || '',
      topic: qs('#filter-topic')?.value || '',
      need: qs('#filter-need')?.value || '',
    };
  }

  function matchesGlobal(card, filters) {
    const text = card.textContent.toLowerCase();
    const type = card.dataset.type || '';
    const topic = card.dataset.topic || '';
    const need = card.dataset.need || '';
    return (!filters.query || text.includes(filters.query))
      && (!filters.type || type === filters.type)
      && (!filters.topic || topic === filters.topic)
      && (!filters.need || need === filters.need);
  }

  function renderGlobalFilterChips() {
    const filters = getGlobalFilters();
    const chips = qs('#active-global-filters');
    if (!chips) return;
    const entries = [
      ['query', filters.query ? `Từ khóa: ${qs('#global-query')?.value.trim()}` : ''],
      ['type', filters.type],
      ['topic', filters.topic],
      ['need', filters.need],
    ].filter(([, value]) => value);

    const nodes = entries.map(([key, value]) => {
      const chip = document.createElement('span');
      chip.className = 'active-filter-chip';
      chip.append(document.createTextNode(value));
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.clearGlobal = key;
      button.setAttribute('aria-label', `Bỏ bộ lọc ${value}`);
      button.textContent = '×';
      chip.append(button);
      return chip;
    });
    chips.replaceChildren(...nodes);
  }

  function clearGlobalDimension(key) {
    const map = { query: '#global-query', type: '#filter-type', topic: '#filter-topic', need: '#filter-need' };
    const control = qs(map[key]);
    if (control) control.value = '';
    applyGlobalFilters({ resetPage: true });
  }

  function getGlobalMatches() {
    const filters = getGlobalFilters();
    return articleCards().filter((card) => matchesGlobal(card, filters));
  }

  function getArticleMatches() {
    return articleCards().filter((card) => (!activeFeedType || card.dataset.type === activeFeedType));
  }

  function renderGlobalResults({ resetPage = false } = {}) {
    const filters = getGlobalFilters();
    const hasFilter = Boolean(filters.query || filters.type || filters.topic || filters.need);
    const matches = hasFilter ? getGlobalMatches() : [];
    if (resetPage) globalVisibleLimit = GLOBAL_RESULT_PAGE_SIZE;

    const grid = qs('#global-result-grid');
    if (grid) {
      const visible = matches.slice(0, globalVisibleLimit);
      grid.replaceChildren(...visible.map((card) => {
        const clone = card.cloneNode(true);
        clone.classList.add('global-result-card');
        clone.removeAttribute('data-index');
        return clone;
      }));
    }

    const message = qs('#global-result-message');
    if (message) {
      message.classList.toggle('is-active', hasFilter);
      if (!hasFilter) {
        message.textContent = 'Nhập từ khóa hoặc chọn bộ lọc để xem kết quả tại đây.';
      } else if (!matches.length) {
        message.textContent = 'Không tìm thấy bài phù hợp. Thử bỏ bớt điều kiện hoặc đổi từ khóa.';
      } else {
        message.textContent = `Tìm thấy ${matches.length} bài phù hợp · đang hiển thị ${Math.min(globalVisibleLimit, matches.length)} bài.`;
      }
    }

    const loadMore = qs('#global-load-more');
    if (loadMore) loadMore.hidden = !hasFilter || globalVisibleLimit >= matches.length;
    const clear = qs('#global-result-clear');
    if (clear) clear.hidden = !hasFilter;
    const live = qs('#global-status');
    if (live && message) live.textContent = message.textContent;
  }

  function renderArticlePage({ resetPage = false } = {}) {
    const matches = getArticleMatches();
    const visibleSlides = matches.map((card) => card.closest('.swiper-slide')).filter(Boolean);
    articleWrapper?.replaceChildren(...visibleSlides);

    const status = qs('#article-feed-status');
    if (status) {
      const label = activeFeedType ? ` thuộc loại ${activeFeedType}` : '';
      status.textContent = matches.length
        ? `Đang hiển thị ${matches.length} bài${label}.`
        : `Không có bài${label} trong nhóm nội dung này.`;
    }
    const empty = qs('#article-empty');
    if (empty) empty.hidden = matches.length > 0;
  }

  function vehicleMatchesLocal(card) {
    return (!vehicleState.brand || card.dataset.caseBrand === vehicleState.brand)
      && (!vehicleState.model || card.dataset.caseModel === vehicleState.model)
      && (!vehicleState.service || card.dataset.caseService === vehicleState.service)
      && (!vehicleState.segment || card.dataset.caseSegment === vehicleState.segment);
  }

  function renderVehicleCases() {
    // Global Finder does not mutate this section. Vehicle Finder is independent.
    const matches = caseCards().filter(vehicleMatchesLocal);
    const slides = matches.map((card) => card.closest('.swiper-slide')).filter(Boolean);
    vehicleWrapper?.replaceChildren(...slides);
    const status = qs('#case-status');
    if (status) {
      const localActive = Boolean(vehicleState.brand || vehicleState.model || vehicleState.service || vehicleState.segment);
      status.classList.toggle('is-active', localActive);
      status.textContent = matches.length
        ? `${matches.length} hồ sơ đang hiển thị trong khu vực Xe thực tế.`
        : 'Không có hồ sơ phù hợp với bộ lọc xe hiện tại.';
    }
  }

  function applyGlobalFilters({ resetPage = false } = {}) {
    renderGlobalFilterChips();
    renderGlobalResults({ resetPage });
  }


  function clearGlobalFilters() {
    qs('#global-filter-form')?.reset();
    applyGlobalFilters({ resetPage: true });
  }

  function clearContentTypeFilter() {
    activeFeedType = '';
    syncContentTabs('');
    renderArticlePage({ resetPage: true });
    notifyLayoutUpdate({ reset: true });
  }

  function getVehicleCatalog() {
    const cards = caseCards();
    const brands = unique(cards.map((card) => card.dataset.caseBrand));
    const services = unique(cards.map((card) => card.dataset.caseService));
    const modelsByBrand = Object.fromEntries(brands.map((brand) => [
      brand,
      unique(cards.filter((card) => card.dataset.caseBrand === brand).map((card) => card.dataset.caseModel)),
    ]));
    const allModels = unique(cards.map((card) => card.dataset.caseModel));
    return { brands, services, modelsByBrand, allModels };
  }

  function fillSelect(select, values, firstLabel, currentValue = '') {
    if (!select) return;
    select.innerHTML = `<option value="">${firstLabel}</option>`
      + values.map((value) => `<option value="${value}">${value}</option>`).join('');
    select.value = currentValue;
  }

  function syncVehicleControls() {
    const catalog = getVehicleCatalog();
    fillSelect(qs('#vehicle-brand'), catalog.brands, 'Tất cả hãng', vehicleState.brand);
    const models = vehicleState.brand ? (catalog.modelsByBrand[vehicleState.brand] || []) : catalog.allModels;
    if (vehicleState.model && !models.includes(vehicleState.model)) vehicleState.model = '';
    fillSelect(qs('#vehicle-model'), models, 'Tất cả dòng xe', vehicleState.model);
    fillSelect(qs('#vehicle-service'), catalog.services, 'Tất cả dịch vụ', vehicleState.service);
  }

  function setVehicleFilter(group, value) {
    // Any manual Vehicle Finder interaction exits the taxonomy-only segment shortcut.
    vehicleState.segment = '';
    vehicleState[group] = value;
    if (group === 'brand') {
      const catalog = getVehicleCatalog();
      const allowed = value ? (catalog.modelsByBrand[value] || []) : catalog.allModels;
      if (vehicleState.model && !allowed.includes(vehicleState.model)) vehicleState.model = '';
    }
    syncVehicleControls();
    renderVehicleCases();
    notifyLayoutUpdate({ reset: true });
  }

  function clearVehicleFilters() {
    vehicleState.brand = '';
    vehicleState.model = '';
    vehicleState.service = '';
    vehicleState.segment = '';
    syncVehicleControls();
    renderVehicleCases();
    notifyLayoutUpdate({ reset: true });
  }

  function syncContentTabs(type) {
    qsa('.content-tab').forEach((tab) => {
      const isActive = (tab.dataset.contentType || '') === type;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    });
  }

  function applyContentType(type, target) {
    if (!type && !target) {
      clearContentTypeFilter();
      return;
    }
    if (type === 'Xe thực tế' || target === '#vehicle-cases') {
      activeFeedType = '';
      syncContentTabs('Xe thực tế');
      qs('#vehicle-cases')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    activeFeedType = type || '';
    syncContentTabs(activeFeedType);
    renderArticlePage({ resetPage: true });
    notifyLayoutUpdate({ reset: true });
    qs('#article-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function applyGuideTopic(event) {
    event.preventDefault();
    const card = event.currentTarget;
    if (card.dataset.segment === 'Xe điện') {
      vehicleState.brand = '';
      vehicleState.model = '';
      vehicleState.service = '';
      vehicleState.segment = 'Xe điện';
      syncVehicleControls();
      renderVehicleCases();
      notifyLayoutUpdate({ reset: true });
      qs('#vehicle-cases')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    const topic = qs('#filter-topic');
    if (topic) topic.value = card.dataset.topic || '';
    applyGlobalFilters({ resetPage: true });
    qs('#global-search-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function bindEvents() {
    qs('#global-filter-form')?.addEventListener('submit', (event) => {
      event.preventDefault();
      applyGlobalFilters({ resetPage: true });
    });
    qs('#clear-global')?.addEventListener('click', clearGlobalFilters);
    qs('#global-result-clear')?.addEventListener('click', clearGlobalFilters);
    qs('#global-load-more')?.addEventListener('click', () => {
      globalVisibleLimit += GLOBAL_RESULT_PAGE_SIZE;
      renderGlobalResults();
    });
    qs('#active-global-filters')?.addEventListener('click', (event) => {
      const button = event.target.closest('[data-clear-global]');
      if (button) clearGlobalDimension(button.dataset.clearGlobal);
    });

    qs('#vehicle-filter-form')?.addEventListener('submit', (event) => event.preventDefault());
    qs('#vehicle-brand')?.addEventListener('change', (event) => setVehicleFilter('brand', event.target.value));
    qs('#vehicle-model')?.addEventListener('change', (event) => setVehicleFilter('model', event.target.value));
    qs('#vehicle-service')?.addEventListener('change', (event) => setVehicleFilter('service', event.target.value));
    qs('#vehicle-clear')?.addEventListener('click', clearVehicleFilters);

    qsa('.content-tab').forEach((tab) => {
      tab.addEventListener('click', () => applyContentType(tab.dataset.contentType || '', tab.dataset.contentTarget || ''));
    });
    qsa('.guide-card').forEach((card) => card.addEventListener('click', applyGuideTopic));
  }

  function init() {
    syncVehicleControls();
    bindEvents();
    renderVehicleCases();
    renderArticlePage({ resetPage: true });
    applyGlobalFilters({ resetPage: true });
  }

  window.Auto365Filters = {
    applyGlobalFilters,
    renderGlobalResults,
    clearGlobalFilters,
    clearContentTypeFilter,
    clearVehicleFilters,
    setVehicleFilter,
    getGlobalFilters,
    get vehicleState() { return { ...vehicleState }; },
  };

  init();
})();
