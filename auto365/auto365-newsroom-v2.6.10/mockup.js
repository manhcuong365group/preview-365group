// Auto365 Newsroom — presentation layer: Swiper, FAQ and scroll helpers.
(() => {
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];
  const swipers = {};
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  function autoplayOptions(delay) {
    return reduceMotion ? false : {
      delay,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    };
  }

  function initFaqAccordion() {
    qsa('.faq-question').forEach((button) => {
      button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        const answer = qs('.faq-answer', item);
        const willOpen = button.getAttribute('aria-expanded') !== 'true';
        qsa('.faq-question').forEach((other) => {
          other.setAttribute('aria-expanded', 'false');
          const otherAnswer = qs('.faq-answer', other.closest('.faq-item'));
          if (otherAnswer) otherAnswer.hidden = true;
        });
        button.setAttribute('aria-expanded', String(willOpen));
        if (answer) answer.hidden = !willOpen;
      });
    });
  }

  function gridTwoRowsOptions(extra = {}) {
    return {
      slidesPerView: 1.12,
      spaceBetween: 12,
      grid: { rows: 2, fill: 'row' },
      watchOverflow: true,
      observer: true,
      observeParents: true,
      breakpoints: {
        640: { slidesPerView: 2.08, spaceBetween: 14, grid: { rows: 2, fill: 'row' } },
        1024: { slidesPerView: 3, spaceBetween: 16, grid: { rows: 2, fill: 'row' } },
      },
      ...extra,
    };
  }

  function createSwiper(key, selector, options) {
    const node = qs(selector);
    if (!node) return;
    swipers[key] = new window.Swiper(node, options);
  }

  function initSwipers() {
    if (typeof window.Swiper !== 'function') {
      document.documentElement.classList.add('swiper-unavailable');
      return;
    }
    document.documentElement.classList.remove('swiper-unavailable');

    createSwiper('topicSwiper', '#topic-swiper', gridTwoRowsOptions({
      navigation: { nextEl: '.topic-next', prevEl: '.topic-prev' },
    }));

    createSwiper('vehicleSwiper', '#vehicle-swiper', gridTwoRowsOptions({
      navigation: { nextEl: '.vehicle-next', prevEl: '.vehicle-prev' },
    }));

    createSwiper('articleSwiper', '#article-swiper', gridTwoRowsOptions({
      autoplay: autoplayOptions(6000),
      rewind: true,
      speed: 520,
      navigation: { nextEl: '.article-next', prevEl: '.article-prev' },
    }));

    createSwiper('videoSwiper', '#video-swiper', {
      slidesPerView: 1,
      spaceBetween: 14,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      autoplay: autoplayOptions(7000),
      rewind: true,
      speed: 560,
      navigation: { nextEl: '.video-next', prevEl: '.video-prev' },
    });

    createSwiper('pressSwiper', '#press-swiper', {
      slidesPerView: 1.08,
      spaceBetween: 10,
      grid: { rows: 2, fill: 'row' },
      watchOverflow: true,
      observer: true,
      observeParents: true,
      navigation: { nextEl: '.press-next', prevEl: '.press-prev' },
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 12, grid: { rows: 2, fill: 'row' } },
        1200: { slidesPerView: 2, spaceBetween: 12, grid: { rows: 2, fill: 'row' } },
      },
    });
  }

  function updateSwipers({ reset = false } = {}) {
    Object.values(swipers).forEach((swiper) => {
      if (!swiper || swiper.destroyed) return;
      swiper.update();
      if (reset) swiper.slideTo(0, 0);
    });
  }

  function bindScrollButtons() {
    qsa('[data-scroll]').forEach((button) => {
      button.addEventListener('click', () => qs(button.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' }));
    });
  }

  document.addEventListener('auto365:filters-updated', (event) => updateSwipers(event.detail || {}));
  initFaqAccordion();
  bindScrollButtons();
  initSwipers();
  updateSwipers({ reset: true });

  window.Auto365Swipers = swipers;
})();
