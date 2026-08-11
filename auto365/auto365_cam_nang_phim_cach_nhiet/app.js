(() => {
  'use strict';

  const normalize = (value) => (value || '')
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

  const library = document.querySelector('#library-grid');
  const search = document.querySelector('#library-search');
  const topic = document.querySelector('#topic-filter');
  const brand = document.querySelector('#brand-filter');
  const type = document.querySelector('#type-filter');
  const count = document.querySelector('#library-count');
  const empty = document.querySelector('#library-empty');

  const cards = library ? Array.from(library.querySelectorAll('.article-card')) : [];

  function matches(card) {
    const text = normalize(card.textContent);
    const query = normalize(search?.value);
    const topicValue = topic?.value || 'all';
    const brandValue = brand?.value || 'all';
    const typeValue = type?.value || 'all';

    return (!query || text.includes(query))
      && (topicValue === 'all' || card.dataset.topic === topicValue)
      && (brandValue === 'all' || card.dataset.brand === brandValue)
      && (typeValue === 'all' || card.dataset.type === typeValue);
  }

  function applyLibraryFilters() {
    if (!library) return;
    let visible = 0;
    cards.forEach((card) => {
      const show = matches(card);
      card.hidden = !show;
      if (show) visible += 1;
    });

    if (count) count.textContent = `Đang hiển thị ${visible}/${cards.length} bài demo.`;
    if (empty) empty.hidden = visible !== 0;
  }

  [search, topic, brand, type].forEach((control) => {
    control?.addEventListener(control === search ? 'input' : 'change', applyLibraryFilters);
  });

  const navLinks = Array.from(document.querySelectorAll('.hub-nav a[href^="#"]'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
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

  applyLibraryFilters();
})();
