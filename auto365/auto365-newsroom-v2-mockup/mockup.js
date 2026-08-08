(() => {
  const qs = (s, root = document) => root.querySelector(s);
  const qsa = (s, root = document) => [...root.querySelectorAll(s)];
  const normalize = (v) => (v || '').toLocaleLowerCase('vi').trim();

  const allSearchableCards = () => [
    ...qsa('.article-card'),
    ...qsa('.case-card'),
  ];

  function applyGlobalFilters() {
    const query = normalize(qs('#global-query').value);
    const type = qs('#filter-type').value;
    const topic = qs('#filter-topic').value;
    const need = qs('#filter-need').value;
    const cards = allSearchableCards();
    let visible = 0;

    cards.forEach((card) => {
      const text = normalize(card.textContent);
      const cardType = card.dataset.type || (card.classList.contains('case-card') ? 'Xe thực tế' : '');
      const cardTopic = card.dataset.topic || card.dataset.caseService || '';
      const cardNeed = card.dataset.need || '';
      const matches = (!query || text.includes(query)) && (!type || cardType === type) && (!topic || cardTopic === topic) && (!need || cardNeed === need);
      card.hidden = !matches;
      if (matches) visible += 1;
    });

    const status = qs('#global-status');
    const hasFilter = Boolean(query || type || topic || need);
    status.classList.toggle('is-active', hasFilter);
    status.textContent = hasFilter
      ? `Mockup đang hiển thị ${visible} card mẫu phù hợp. Production sẽ truy vấn toàn bộ kho nội dung.`
      : 'Nhập từ khóa hoặc chọn bộ lọc để thu hẹp nội dung.';
    qs('#article-empty').hidden = qsa('.article-card:not([hidden])').length > 0;
  }

  function clearGlobalFilters() {
    qs('#global-filter-form').reset();
    allSearchableCards().forEach((card) => { card.hidden = false; });
    qsa('.tab').forEach((tab, index) => tab.classList.toggle('is-active', index === 0));
    qs('#global-status').classList.remove('is-active');
    qs('#global-status').textContent = 'Nhập từ khóa hoặc chọn bộ lọc để thu hẹp nội dung.';
    qs('#article-empty').hidden = true;
  }

  function applyCaseFilters() {
    const brand = qs('#case-brand').value;
    const model = qs('#case-model').value;
    const service = qs('#case-service').value;
    const cards = qsa('.case-card');
    let visible = 0;

    cards.forEach((card) => {
      const matches = (!brand || card.dataset.caseBrand === brand) && (!model || card.dataset.caseModel === model) && (!service || card.dataset.caseService === service);
      card.hidden = !matches;
      if (matches) visible += 1;
    });

    const status = qs('#case-status');
    const hasFilter = Boolean(brand || model || service);
    status.classList.toggle('is-active', hasFilter);
    status.textContent = hasFilter ? `Đang hiển thị ${visible} hồ sơ xe mẫu phù hợp.` : '';
  }

  qs('#global-filter-form').addEventListener('submit', (event) => {
    event.preventDefault();
    applyGlobalFilters();
  });
  qs('#clear-global').addEventListener('click', clearGlobalFilters);
  qs('#case-apply').addEventListener('click', applyCaseFilters);

  ['#case-brand', '#case-model', '#case-service'].forEach((selector) => {
    qs(selector).addEventListener('change', applyCaseFilters);
  });

  qsa('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      qsa('.tab').forEach((item) => item.classList.remove('is-active'));
      tab.classList.add('is-active');
      const type = tab.dataset.feedType;
      qsa('.article-card').forEach((card) => { card.hidden = Boolean(type && card.dataset.type !== type); });
      qs('#article-empty').hidden = qsa('.article-card:not([hidden])').length > 0;
    });
  });

  qsa('.guide-card').forEach((card) => {
    card.addEventListener('click', () => {
      const topic = card.dataset.topic;
      qs('#filter-topic').value = topic;
      applyGlobalFilters();
    });
  });

  qsa('[data-scroll]').forEach((button) => {
    button.addEventListener('click', () => qs(button.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' }));
  });
})();
