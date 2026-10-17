/* xl-campaign-capture */
try{(function(){var K=['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','gbraid','wbraid','fbclid'];var r={};try{var q=new URLSearchParams(window.location.search);K.forEach(function(k){var v=q.get(k);if(v&&String(v).trim())r[k]=String(v).trim();});}catch(e){}window.__a365CampaignKeys=K;window.__a365Campaign=Object.assign({},window.__a365Campaign||{},r);})();
}catch(e){console.warn("bgx",e)}
/* s3 */
try{globalThis.__XLIGHT_ASSETS__=Object.fromEntries(Array.from(document.querySelectorAll('img[data-xlight-src]'),x=>[x.getAttribute('data-xlight-src'),x.getAttribute('src')]));
}catch(e){console.warn("bgx",e)}
/* xlight-ui-finalizer */
try{
(() => {
  const showcase = document.querySelector('.models-section .product-showcase');
  if (!showcase || document.querySelector('.xlight-catalog-shell')) return;
  document.querySelector('.xlight-filter-bar')?.remove();
  const shell = document.createElement('div');
  shell.className = 'xlight-catalog-shell';
  const filter = document.createElement('aside');
  filter.className = 'xlight-catalog-filter';
  filter.innerHTML = '<div class="xlight-catalog-filter-head"><span>Bộ lọc</span><button class="xlight-catalog-filter-clear" type="button">Xóa tất cả</button></div><div class="xlight-catalog-filter-group"><strong>Kích thước lens</strong><label><input type="checkbox" data-xlight-filter="lens-2"> 2.0 inch</label><label><input type="checkbox" data-xlight-filter="lens-3"> 3.0 inch</label></div><div class="xlight-catalog-filter-group"><strong>Nhiệt màu</strong><label><input type="checkbox" data-xlight-filter="temp-3"> 3 nhiệt màu</label><label><input type="checkbox" data-xlight-filter="temp-4"> 4800K</label></div>';
  const main = document.createElement('div');
  main.className = 'xlight-catalog-main';
  const toolbar = document.createElement('div');
  toolbar.className = 'xlight-catalog-toolbar';
  toolbar.innerHTML = '<input type="search" placeholder="Tìm tên sản phẩm hoặc thương hiệu…" aria-label="Tìm sản phẩm"><select aria-label="Sắp xếp sản phẩm"><option value="default">Sắp xếp mặc định</option><option value="price-asc">Giá thấp → cao</option><option value="price-desc">Giá cao → thấp</option><option value="name">Tên A → Z</option></select>';
  const count = document.createElement('p');
  count.className = 'xlight-catalog-count';
  main.append(toolbar, count, showcase);
  shell.append(filter, main);
  showcase.parentNode.insertBefore(shell, showcase);
  const cards = [...showcase.querySelectorAll('.product-card')];
  const search = toolbar.querySelector('input');
  const sort = toolbar.querySelector('select');
  const price = (card) => Number((card.querySelector('.product-price')?.textContent || '').replace(/[^0-9]/g, '')) || 0;
  const apply = () => {
    const query = search.value.trim().toLowerCase();
    const selected = [...filter.querySelectorAll('input:checked')].map((input) => input.dataset.xlightFilter);
    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      const lensSelected = selected.filter((key) => key.startsWith('lens-'));
      const tempSelected = selected.filter((key) => key.startsWith('temp-'));
      const lensMatch = !lensSelected.length || lensSelected.some((key) => key === 'lens-2' && text.includes('2.0 inch')) || lensSelected.some((key) => key === 'lens-3' && text.includes('3.0 inch'));
      const tempMatch = !tempSelected.length || tempSelected.some((key) => key === 'temp-3' && text.includes('3000k') && text.includes('4300k') && text.includes('5500k')) || tempSelected.some((key) => key === 'temp-4' && text.includes('4800k'));
      card.classList.toggle('is-filtered-out', !(text.includes(query) && lensMatch && tempMatch));
    });
    count.textContent = 'Hiển thị ' + cards.filter((card) => !card.classList.contains('is-filtered-out')).length + ' / ' + cards.length + ' sản phẩm';
  };
  search.addEventListener('input', apply);
  filter.addEventListener('change', apply);
  filter.querySelector('.xlight-catalog-filter-clear').addEventListener('click', () => { filter.querySelectorAll('input').forEach((input) => { input.checked = false; }); search.value = ''; apply(); });
  sort.addEventListener('change', () => { cards.sort((a, b) => sort.value === 'name' ? a.textContent.localeCompare(b.textContent, 'vi') : sort.value === 'price-asc' ? price(a) - price(b) : sort.value === 'price-desc' ? price(b) - price(a) : 0).forEach((card) => showcase.append(card)); apply(); });
  apply();
})();

}catch(e){console.warn("bgx",e)}
/* s5 */
try{
(() => {
  const replaceText = (from, to) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (node.nodeValue.includes(from)) node.nodeValue = node.nodeValue.replaceAll(from, to);
    });
  };
  replaceText('Hệ thống Auto365 toàn quốc', 'Tra cứu điểm lắp Auto365');
  replaceText('Hỗ trợ toàn quốc', 'Tra cứu điểm lắp');
  const style = document.createElement('style');
  style.textContent = '@media (max-width: 720px){.xlight-app,.site-shell{max-width:100%;overflow-x:clip}.bgx-container{width:100%;max-width:100%;min-width:0;padding-inline:16px}.hero-grid,.answer-grid,.local-grid,.faq-grid,.final-cta-grid{min-width:0}.product-showcase,.decision-grid,.case-list,.process-grid,.trust-rail-grid{min-width:0;max-width:100%}img,svg,video{max-width:100%}}';
  document.head.appendChild(style);
})();

}catch(e){console.warn("bgx",e)}
/* xlight-catalogue-interactive-js */
try{
(() => {
  function fold(str) {
    return String(str || '').toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/x[\s-]*light/g, 'xlight')
      .replace(/[^a-z0-9.]+/g, ' ').trim();
  }
  function normFilter(v) {
    return String(v == null ? '' : v).trim().toLowerCase().replace(/\s+/g, ' ').replace(/\s*(inch|")$/, '');
  }
  function initCatalogue() {
    const searchInput = document.getElementById('xl-search');
    const sortSelect = document.getElementById('xl-sort');
    const clearBtn = document.getElementById('xl-clear-filters');
    const countDisplay = document.getElementById('xl-count');
    const grid = document.getElementById('xl-product-grid');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('.p-card'));
    const oldToggle = document.getElementById('xl-toggle-old-models');
    const emptyMsg = document.getElementById('xl-no-results');
    const voltageChecks = Array.from(document.querySelectorAll('.xl-filter-voltage'));
    const lensChecks = Array.from(document.querySelectorAll('.xl-filter-lens'));
    const colorChecks = Array.from(document.querySelectorAll('.xl-filter-color'));
    const priceChecks = Array.from(document.querySelectorAll('.xl-filter-price'));
    const ledChecks = Array.from(document.querySelectorAll('.xl-filter-led'));
    const coolChecks = Array.from(document.querySelectorAll('.xl-filter-cool'));
    const modeChecks = Array.from(document.querySelectorAll('.xl-filter-mode'));
    const oldCount = cards.filter(c => (c.dataset.era || 'current') === 'old').length;
    const state = { q: '', voltages: [], lenses: [], colors: [], prices: [], leds: [], cools: [], modes: [], showOld: false, sort: 'default', expanded: false };
    const LIMIT = 8;
    const moreBtn = document.getElementById('xl-show-more');

    cards.forEach(card => {
      const nameText = card.querySelector('.p-card-name') ? card.querySelector('.p-card-name').textContent : '';
      card.dataset.search = fold(card.dataset.name + ' ' + nameText);
      // Pha W/đèn đọc từ dòng "Công suất Cos/Pha (mỗi đèn)" trên thẻ
      const pw = Array.from(card.querySelectorAll('.p-card-specs li')).find(li => /Cos\/Pha/.test(li.textContent));
      const m = pw && (pw.querySelector('b') || pw).textContent.match(/(\d+)\s*W?\s*\/\s*~?\s*(\d+)\s*W/);
      card.dataset.pha = m ? m[2] : '';
    });
    const inPrice = (v, k) => k === 'under45' ? v < 4500000 : k === '45to55' ? v >= 4500000 && v <= 5500000 : v > 5500000;
    const inPha = (w, k) => !w ? false : k === 'le55' ? w <= 55 : k === '60to65' ? w >= 60 && w <= 65 : w >= 70;

    function syncOldToggle() {
      if (!oldToggle) return;
      oldToggle.setAttribute('aria-expanded', String(state.showOld));
      oldToggle.textContent = state.showOld ? 'Ẩn ' + oldCount + ' phiên bản X-Light trước đây' : 'Xem ' + oldCount + ' phiên bản X-Light trước đây';
      oldToggle.hidden = !oldCount;
    }

    function readState() {
      state.q = fold(searchInput ? searchInput.value : '');
      state.voltages = voltageChecks.filter(c => c.checked).map(c => normFilter(c.value));
      state.lenses = lensChecks.filter(c => c.checked).map(c => normFilter(c.value));
      state.colors = colorChecks.filter(c => c.checked).map(c => c.value);
      state.prices = priceChecks.filter(c => c.checked).map(c => c.value);
      state.leds = ledChecks.filter(c => c.checked).map(c => c.value);
      state.cools = coolChecks.filter(c => c.checked).map(c => c.value);
      state.modes = modeChecks.filter(c => c.checked).map(c => c.value);
      state.sort = sortSelect ? sortSelect.value || 'default' : 'default';
      if (state.q) state.showOld = true;
    }

    function applySortOrder() {
      const sorted = cards.slice().sort((a, b) => {
        const priceA = parseInt(a.dataset.price || '0', 10);
        const priceB = parseInt(b.dataset.price || '0', 10);
        if (state.sort === 'price-asc') return priceA - priceB;
        if (state.sort === 'price-desc') return priceB - priceA;
        if (state.sort === 'name') return (a.dataset.name || '').localeCompare(b.dataset.name || '', 'vi');
        return 0;
      });
      sorted.forEach(c => grid.appendChild(c));
    }

    function render() {
      readState();
      applySortOrder();
      let visibleCount = 0;
      const terms = state.q ? state.q.split(' ') : [];
      cards.forEach(card => {
        const era = card.dataset.era || 'current';
        const hay = card.dataset.search || '';
        const matchSearch = !terms.length || terms.every(t => hay.includes(t));
        const matchVoltage = !state.voltages.length || state.voltages.includes(normFilter(card.dataset.voltage));
        const matchLens = !state.lenses.length || state.lenses.includes(normFilter(card.dataset.lens));
        const colorValues = (card.dataset.colorValues || '').split(' ').filter(Boolean);
        const matchColor = !state.colors.length || state.colors.some(v => v === 'switchable' ? card.dataset.colorMode === 'switchable' : colorValues.includes(v));
        const price = parseInt(card.dataset.price || '0', 10);
        const matchPrice = !state.prices.length || state.prices.some(k => inPrice(price, k));
        const matchPha = (!state.leds.length || state.leds.includes(card.dataset.led)) && (!state.cools.length || state.cools.includes(card.dataset.cooling));
        const matchMode = !state.modes.length || state.modes.includes(card.dataset.colorMode);
        const matchEra = true;
        const visible = matchSearch && matchVoltage && matchLens && matchColor && matchPrice && matchPha && matchMode && matchEra;
        card.dataset.match = visible ? '1' : '0';
        if (visible) visibleCount++;
      });
      const filtering = !!(terms.length || state.voltages.length || state.lenses.length || state.colors.length || state.prices.length || state.leds.length || state.cools.length || state.modes.length);
      const showAll = state.expanded || filtering;
      let shown = 0;
      Array.from(grid.querySelectorAll('.p-card')).forEach(card => {
        let vis = card.dataset.match === '1';
        if (vis && !showAll && shown >= LIMIT) vis = false;
        if (vis) shown++;
        card.hidden = !vis; card.classList.toggle('bgx-is-hidden', !vis);
      });
      if (moreBtn) {
        const rest = visibleCount - Math.min(visibleCount, LIMIT);
        moreBtn.hidden = filtering || visibleCount <= LIMIT;
        moreBtn.setAttribute('aria-expanded', String(state.expanded));
        moreBtn.textContent = state.expanded ? 'Thu gọn' : 'Xem thêm sản phẩm';
      }
      grid.classList.add('is-expanded');
      grid.classList.toggle('has-no-results', visibleCount === 0);
      if (emptyMsg) emptyMsg.hidden = visibleCount !== 0;
      if (countDisplay) countDisplay.textContent = visibleCount;
      syncOldToggle();
      document.dispatchEvent(new CustomEvent('xlcatalog:render', { detail: { visible: visibleCount, showOld: state.showOld } }));
    }

    moreBtn?.addEventListener('click', () => { state.expanded = !state.expanded; render(); if (!state.expanded) grid.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    searchInput?.addEventListener('input', render);
    sortSelect?.addEventListener('change', render);
    [...voltageChecks, ...lensChecks, ...colorChecks, ...priceChecks, ...ledChecks, ...coolChecks, ...modeChecks].forEach(c => c.addEventListener('change', render));
    oldToggle?.addEventListener('click', () => {
      state.showOld = !state.showOld;
      if (!state.showOld && searchInput && searchInput.value.trim()) searchInput.value = '';
      render();
    });
    clearBtn?.addEventListener('click', () => {
      [...voltageChecks, ...lensChecks, ...colorChecks, ...priceChecks, ...ledChecks, ...coolChecks, ...modeChecks].forEach(c => c.checked = false);
      if (searchInput) searchInput.value = '';
      if (sortSelect) sortSelect.value = 'default';
      ['mf-search', 'mf-lens', 'mf-color', 'mf-voltage', 'mf-price', 'mf-led', 'mf-cool', 'mf-mode', 'mf-sort'].forEach(id => { const el = document.getElementById(id); if (el) el.value = el.tagName === 'SELECT' && id === 'mf-sort' ? 'default' : ''; });
      state.showOld = false;
      state.expanded = false;
      render();
    });
    const heroBtn = document.getElementById('hf-submit-btn');
    heroBtn?.addEventListener('click', () => {
      const voltage = document.getElementById('hf-voltage')?.value;
      const lens = document.getElementById('hf-lens')?.value;
      voltageChecks.forEach(c => { c.checked = !!(voltage && normFilter(c.value) === normFilter(voltage)); });
      lensChecks.forEach(c => { c.checked = !!(lens && lens !== 'all' && normFilter(c.value) === normFilter(lens)); });
      render();
      document.getElementById('dong-san-pham')?.scrollIntoView({ behavior: 'smooth' });
    });
    window.xlCatalog = { render: render, showOld: function (v) { state.showOld = !!v; render(); }, getState: function () { return Object.assign({}, state); } };
    render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initCatalogue); else initCatalogue();
})();

}catch(e){console.warn("bgx",e)}
/* xlight-clickable-product-card-script */
try{
(function(){
  function initClickableProductCards(){
    document.querySelectorAll('.product-showcase-grid .p-card').forEach(function(card){
      if(card.dataset.cardClickReady === '1') return;
      var detail = card.querySelector('.p-card-btn-detail[href]');
      if(!detail) return;
      card.dataset.cardClickReady = '1';
      card.setAttribute('tabindex','0');
      card.setAttribute('role','link');
      card.setAttribute('aria-label', detail.textContent.trim() + ' - ' + (card.querySelector('.p-card-name')?.textContent.trim() || 'sản phẩm'));
      card.addEventListener('click', function(event){
        if(event.target.closest('a,button,input,label,select,textarea')) return;
        if(detail.target === '_blank'){
          window.open(detail.href, '_blank', 'noopener');
        }else{
          window.location.href = detail.href;
        }
      });
      card.addEventListener('keydown', function(event){
        if(event.key !== 'Enter' && event.key !== ' ') return;
        if(event.target.closest('a,button,input,label,select,textarea')) return;
        event.preventDefault();
        if(detail.target === '_blank'){
          window.open(detail.href, '_blank', 'noopener');
        }else{
          window.location.href = detail.href;
        }
      });
    });
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initClickableProductCards);
  }else{
    initClickableProductCards();
  }
})();

}catch(e){console.warn("bgx",e)}
/* xlight-compare-modal-script */
try{
(function(){
  var selected = [];
  var MAX = 3;
  var COLOR_MODE_TEXT = {
    switchable: 'Đổi 3 nhiệt màu trên cùng đèn',
    purchase_variant: 'Chọn 1 nhiệt màu khi mua, không đổi sau lắp',
    fixed: 'Một nhiệt màu cố định',
    cos_pha_variant: 'Theo cấu hình Cos/Pha, chọn khi mua',
    unknown: 'Chưa xác nhận'
  };
  function money(text){ return (text || '').replace(/\s+/g,' ').trim(); }
  function esc(t){ return String(t || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;'); }
  function getProduct(card){
    var detail = card.querySelector('.p-card-btn-detail[href]');
    var specMap = {};
    Array.from(card.querySelectorAll('.p-card-specs li')).forEach(function(li){
      var k = li.querySelector('span') ? li.querySelector('span').textContent.trim() : '';
      var v = li.querySelector('b') ? li.querySelector('b').textContent.trim() : li.textContent.trim();
      if (k) specMap[k] = v;
    });
    var priceEl = card.querySelector('.p-card-price');
    var unit = card.getAttribute('data-unit') || 'cặp';
    var vat = card.getAttribute('data-vat') === 'incl' ? 'đã gồm VAT' : 'chưa gồm VAT';
    return {
      id: card.getAttribute('data-name') || (card.querySelector('.p-card-name')?.textContent || '').trim(),
      name: (card.querySelector('.p-card-name')?.textContent || '').trim(),
      image: card.querySelector('.p-card-thumb img')?.getAttribute('src') || '',
      price: money(priceEl?.childNodes[0]?.textContent || priceEl?.textContent || ''),
      unit: unit,
      vat: vat,
      brand: 'X-Light',
      lens: card.getAttribute('data-lens') ? card.getAttribute('data-lens') + ' inch' : (specMap['Kích thước Lens'] || ''),
      voltage: specMap['Điện áp đèn'] || card.getAttribute('data-voltage') || '',
      power: specMap['Công suất Cos/Pha (mỗi đèn)'] || specMap['Công suất Cos/Pha'] || '',
      colors: specMap['Nhiệt màu'] || '',
      colorMode: COLOR_MODE_TEXT[card.getAttribute('data-color-mode')] || COLOR_MODE_TEXT.unknown,
      era: card.getAttribute('data-era') || 'current',
      href: detail ? detail.href : '#'
    };
  }
  function ensureModal(){
    var modal = document.getElementById('xl-compare-overlay');
    if(modal) return modal;
    modal = document.createElement('div');
    modal.id = 'xl-compare-overlay';
    modal.className = 'xl-compare-overlay';
    modal.innerHTML = '<div class="xl-compare-modal" role="dialog" aria-modal="true" aria-labelledby="xl-compare-title"><div class="xl-compare-head"><h3 id="xl-compare-title">So sánh sản phẩm</h3><button type="button" class="xl-compare-close" aria-label="Đóng so sánh">×</button></div><div class="xl-compare-body" id="xl-compare-body"></div></div>';
    ((document.getElementById('xl-product-grid') && document.getElementById('xl-product-grid').closest('.xlight-app')) || document.querySelector('.lp-bgx .xlight-app') || document.querySelector('.lp-bgx') || document.body).appendChild(modal);
    modal.addEventListener('click', function(e){ if(e.target === modal) closeModal(); });
    modal.querySelector('.xl-compare-close').addEventListener('click', closeModal);
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeModal(); });
    modal.addEventListener('click', function(e){
      var sw = e.target.closest('.xl-compare-swap');
      if(sw){ removeById(sw.getAttribute('data-id')); closeModal(); var cat = document.getElementById('dong-san-pham'); if(cat) cat.scrollIntoView({behavior:'smooth', block:'start'}); return; }
      var btn = e.target.closest('.xl-compare-remove');
      if(!btn) return;
      removeById(btn.getAttribute('data-id'));
      if(selected.length >= 2) render(); else closeModal();
    });
    return modal;
  }
  function closeModal(){
    var modal = document.getElementById('xl-compare-overlay');
    if(modal) modal.classList.remove('is-open'); var xlOpener=document.querySelector('.xl-compare-bar-view'); if(xlOpener){ try{ xlOpener.focus({preventScroll:true}); }catch(e){} }
    document.documentElement.style.overflow = '';
  }
  function row(label, htmls, cls){
    return '<tr><th scope="row">'+label+'</th>'+htmls.map(function(h){ return '<td class="'+(cls||'')+'">'+h+'</td>'; }).join('')+'</tr>';
  }
  function render(){
    var modal = ensureModal();
    var body = modal.querySelector('#xl-compare-body');
    if(selected.length < 2){
      body.innerHTML = '<p class="xl-compare-empty">Tích chọn tối thiểu 2 sản phẩm bằng ô "So sánh" trên card để xem bảng đối chiếu.</p>';
    }else{
      var products = selected.slice(-MAX);
      var rows = [];
      rows.push(row('Hình ảnh', products.map(function(p){ return (p.image ? '<img src="'+esc(p.image)+'" alt="'+esc(p.name)+'">' : '') + '<span class="xl-compare-actions"><button type="button" class="xl-compare-remove" data-id="'+esc(p.id)+'" aria-label="Bỏ '+esc(p.name)+' khỏi so sánh">Bỏ</button><button type="button" class="xl-compare-swap" data-id="'+esc(p.id)+'" aria-label="Thay '+esc(p.name)+' bằng mẫu khác">Thay mẫu</button></span>'; }), 'xl-img-cell'));
      rows.push(row('Sản phẩm', products.map(function(p){ return '<a class="xl-name" href="'+esc(p.href)+'" target="_blank" rel="noreferrer">'+esc(p.name)+'</a>' ; })));
      rows.push(row('Cách chọn / chuyển nhiệt màu', products.map(function(p){ return esc(p.colorMode); })));
      rows.push(row('Giá tham khảo', products.map(function(p){ return '<span class="xl-price">'+esc(p.price)+'</span><span class="xl-vat">/ '+esc(p.unit)+' · '+esc(p.vat)+'</span>'; })));
      rows.push(row('Lens', products.map(function(p){ return esc(p.lens) || 'Đang cập nhật'; })));
      rows.push(row('Điện áp đèn', products.map(function(p){ return esc(p.voltage) || 'Đang cập nhật'; })));
      rows.push(row('Cos/Pha (theo công bố)', products.map(function(p){ return esc(p.power) || 'Đang cập nhật'; })));
      rows.push(row('Nhiệt màu', products.map(function(p){ return esc(p.colors) || 'Đang cập nhật'; })));
      rows.push(row('Kiểm tra trên xe trước khi chốt', products.map(function(){ return 'Hốc đèn, pát, mặt dưỡng, hệ điện và đường dây, xem tại xưởng.'; })));
      body.innerHTML = '<table class="xl-compare-table">'+rows.join('')+'</table><p class="xl-compare-tip">Đã chọn '+products.length+'/'+MAX+' mẫu. Điện áp đèn là dải hoạt động của đèn (ví dụ 12–16V), khác hệ điện xe 12V hoặc 24V. Lens là cỡ thấu kính, không phải kích thước cả thân đèn. Cos/Pha ghi theo thông tin tại trang sản phẩm Auto365, tính mỗi đèn; không thay cho phép đo độ chiếu xa. Công lắp và vật tư báo sau khi xem xe. Giá niêm yết tại Auto365.vn, cập nhật 06/10/2026; giá và chính sách lắp ở từng chi nhánh xác nhận khi đặt lịch.</p>';
    }
    modal.classList.add('is-open');
    document.documentElement.style.overflow = 'hidden';
  }
  function uncheckCard(id){
    document.querySelectorAll('.p-card').forEach(function(card){
      if((card.getAttribute('data-name') || '') !== id) return;
      var cb = card.querySelector('.p-card-compare-input');
      if(cb) cb.checked = false;
      var t = card.querySelector('.p-card-compare-toggle');
      if(t) t.classList.remove('bgx-is-active');
    });
  }
  function removeById(id){
    selected = selected.filter(function(p){ return p.id !== id; });
    uncheckCard(id);
    syncBarPublic();
  }
  function ensureBar(){
    var bar = document.getElementById('xl-compare-bar');
    if(bar) return bar;
    bar = document.createElement('div');
    bar.id = 'xl-compare-bar';
    bar.className = 'xl-compare-bar';
    bar.innerHTML = '<span class="xl-compare-bar-count">Đã chọn <b id="xl-compare-bar-num">0</b>/'+MAX+' sản phẩm để so sánh</span><span class="xl-compare-bar-actions"><button type="button" class="xl-compare-bar-clear">Bỏ chọn</button><button type="button" class="xl-compare-bar-view">Chọn thêm để so sánh</button></span>';
    (document.querySelector('.lp-bgx')||document.body).appendChild(bar);
    bar.querySelector('.xl-compare-bar-view').addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); if(selected.length >= 2) render(); });
    bar.querySelector('.xl-compare-bar-clear').addEventListener('click', function(){
      selected = [];
      document.querySelectorAll('.p-card-compare-input').forEach(function(cb){ cb.checked = false; var t = cb.closest('.p-card-compare-toggle'); if(t) t.classList.remove('bgx-is-active'); });
      syncBarPublic();
    });
    return bar;
  }
  var toastTimer;
  function toast(msg){
    var bar = ensureBar();
    var countEl = bar.querySelector('.xl-compare-bar-count');
    var prev = countEl.getAttribute('data-default') || countEl.innerHTML;
    countEl.setAttribute('data-default', prev);
    countEl.textContent = msg;
    bar.classList.add('is-visible', 'is-warning');
    countEl.setAttribute('role','status'); countEl.setAttribute('aria-live','polite');
    var ov = document.getElementById('xl-compare-overlay');
    if (ov && ov.classList.contains('is-open')) {
      var nb = ov.querySelector('.xl-compare-notice');
      if (!nb) { nb = document.createElement('p'); nb.className = 'xl-compare-notice'; nb.setAttribute('role','status'); nb.setAttribute('aria-live','assertive'); var body = ov.querySelector('.xl-compare-body'); if (body && body.parentNode) body.parentNode.insertBefore(nb, body); else ov.appendChild(nb); }
      nb.textContent = msg; nb.hidden = false; clearTimeout(nb._t); nb._t = setTimeout(function(){ nb.hidden = true; }, 4000);
    }
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ bar.classList.remove('is-warning'); syncBar(); }, 3200);
  }
  function syncBar(){
    var bar = ensureBar();
    var countEl = bar.querySelector('.xl-compare-bar-count');
    countEl.innerHTML = 'Đã chọn <b id="xl-compare-bar-num">'+selected.length+'</b>/'+MAX+' sản phẩm để so sánh' + (selected.length >= MAX ? ' — đã đủ, bỏ một mẫu để đổi' : '');
    countEl.removeAttribute('data-default');
    bar.classList.toggle('is-visible', selected.length > 0);
    var viewBtn = bar.querySelector('.xl-compare-bar-view');
    viewBtn.disabled = selected.length < 2;
    viewBtn.textContent = selected.length < 2 ? 'Chọn thêm để so sánh' : 'Xem so sánh (' + selected.length + ')';
  }
  function syncBarPublic(){ syncBar(); document.dispatchEvent(new CustomEvent('xlcompare:sync', { detail: { count: selected.length, max: MAX, ids: selected.map(function(p){ return p.id; }) } })); }
  function init(){
    document.querySelectorAll('.product-showcase-grid .p-card-compare-input').forEach(function(input){
      if(input.dataset.compareReady === '1') return;
      input.dataset.compareReady = '1';
      input.addEventListener('click', function(e){ e.stopPropagation(); });
      input.addEventListener('change', function(){
        var card = input.closest('.p-card');
        var toggle = input.closest('.p-card-compare-toggle');
        if(!card) return;
        var product = getProduct(card);
        if(input.checked){
          if(selected.length >= MAX){
            input.checked = false;
            toast('Chỉ có thể so sánh tối đa ' + MAX + ' sản phẩm. Hãy bỏ một mẫu trước khi chọn thêm.');
            return;
          }
          if(!selected.some(function(p){ return p.id === product.id; })) selected.push(product);
          if(toggle) toggle.classList.add('bgx-is-active');
          if(selected.length >= 2){ syncBarPublic(); var ovOpen = document.getElementById('xl-compare-overlay'); if(ovOpen && ovOpen.classList.contains('is-open')) render(); return; }
        }else{
          selected = selected.filter(function(p){ return p.id !== product.id; });
          if(toggle) toggle.classList.remove('bgx-is-active');
        }
        syncBarPublic();
      });
    });
    syncBarPublic();
  }
  window.xlCompareApi = {
    MAX: MAX,
    getCount: function(){ return selected.length; },
    has: function(id){ return selected.some(function(p){ return p.id === id; }); },
    add: function(product){
      if(selected.length >= MAX){ toast('Chỉ có thể so sánh tối đa ' + MAX + ' sản phẩm. Hãy bỏ một mẫu trước khi chọn thêm.'); return false; }
      if(selected.some(function(p){ return p.id === product.id; })) return true;
      selected.push(product);
      syncBarPublic();
      return true;
    },
    remove: removeById,
    openModal: function(){ render(); }
  };
  document.addEventListener('click', function(e){
    var viewBtn = e.target.closest && e.target.closest('.xl-compare-bar-view');
    if(!viewBtn) return;
    e.preventDefault(); e.stopPropagation();
    if(selected.length >= 2) render();
  }, true);
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

}catch(e){console.warn("bgx",e)}
/* xlight-comparison-table-compare */
try{
(function(){
  function productFromRow(tr){
    var th = tr.querySelector("th[scope=row]");
    var nameEl = th.querySelector(".compare-check span");
    var name = nameEl ? (nameEl.childNodes[0] ? nameEl.childNodes[0].textContent.trim() : nameEl.textContent.trim()) : "";
    var link = th.querySelector("a.source-link[href]");
    var tds = tr.querySelectorAll("td");
    var lensB = tds[0] ? tds[0].querySelector("b") : null;
    var lens = lensB ? lensB.textContent.trim() : "";
    var cosB = tds[1] ? tds[1].querySelector("b") : null;
    var cosPha = cosB ? cosB.textContent.trim() : "";
    var colorNote = tds[2] ? tds[2].textContent.trim() : "";
    var priceEl = tds[3] ? tds[3].querySelector("strong") : null;
    var price = priceEl ? priceEl.textContent.trim() : "";
    return {
      id: "table-" + name,
      name: name,
      image: "",
      price: price,
      vat: "Chưa gồm VAT.",
      brand: "X-Light",
      lens: lens,
      voltage: "",
      need: colorNote,
      specs: [lens, cosPha, colorNote].filter(Boolean),
      href: link ? link.getAttribute("href") : "#"
    };
  }
  function setButtonState(btn, checked){
    btn.setAttribute("aria-checked", checked ? "true" : "false");
    btn.setAttribute("data-state", checked ? "checked" : "unchecked");
  }
  function init(){
    var api = window.xlCompareApi;
    if(!api) return;
    var toolbar = document.querySelector(".compare-toolbar");
    var toolbarCount = toolbar ? toolbar.querySelector("b") : null;
    function updateToolbar(){
      if(toolbarCount) toolbarCount.textContent = api.getCount() + "/" + api.MAX + " mẫu đã chọn";
    }
    function syncRowStates(){
      document.querySelectorAll(".comparison-table tbody tr").forEach(function(tr){
        var label = tr.querySelector(".compare-check");
        if(!label) return;
        var btn = label.querySelector("button[role=checkbox]");
        var hiddenInput = label.querySelector("input[type=checkbox]");
        if(!btn) return;
        var p = productFromRow(tr);
        var checked = api.has(p.id);
        setButtonState(btn, checked);
        if(hiddenInput) hiddenInput.checked = checked;
      });
    }
    document.querySelectorAll(".comparison-table tbody tr").forEach(function(tr){
      var label = tr.querySelector(".compare-check");
      if(!label) return;
      var btn = label.querySelector("button[role=checkbox]");
      var hiddenInput = label.querySelector("input[type=checkbox]");
      if(!btn || btn.dataset.compareReady === "1") return;
      btn.dataset.compareReady = "1";
      btn.addEventListener("click", function(){
        var product = productFromRow(tr);
        var isChecked = btn.getAttribute("aria-checked") === "true";
        if(isChecked){
          api.remove(product.id);
          setButtonState(btn, false);
          if(hiddenInput) hiddenInput.checked = false;
        }else{
          var ok = api.add(product);
          if(!ok) return;
          setButtonState(btn, true);
          if(hiddenInput) hiddenInput.checked = true;
        }
        updateToolbar();
      });
    });
    var viewLink = document.querySelector('.compare-toolbar a[href="#bang-chon"]');
    if(viewLink){
      viewLink.addEventListener("click", function(e){
        e.preventDefault();
        api.openModal();
      });
    }
    document.addEventListener("xlcompare:sync", function(){
      updateToolbar();
      syncRowStates();
    });
    updateToolbar();
    syncRowStates();
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();

}catch(e){console.warn("bgx",e)}
/* xlight-faq-accordion-script */
try{
(function(){
  function setState(trigger, openState){
    var item = trigger.closest('[data-slot="accordion-item"]');
    var content = item ? item.querySelector('[data-slot="accordion-content"]') : null;
    var st = openState ? 'open' : 'closed';
    trigger.setAttribute('aria-expanded', openState ? 'true' : 'false');
    trigger.setAttribute('data-state', st);
    var h = trigger.parentElement; if (h && h.tagName === 'H3') h.setAttribute('data-state', st);
    if (item) item.setAttribute('data-state', st);
    if (content) { content.setAttribute('data-state', st); content.hidden = !openState; content.style.display = openState ? 'block' : 'none'; content.style.height = 'auto'; }
  }
  function init(){
    var root = document.querySelector('.faq-accordion');
    if (!root || root.dataset.xlFaqReady === '1') return;
    root.dataset.xlFaqReady = '1';
    root.querySelectorAll('[data-slot="accordion-trigger"]').forEach(function(t){
      setState(t, t.getAttribute('data-state') === 'open');
    });
    root.addEventListener('click', function(e){
      var trigger = e.target.closest('[data-slot="accordion-trigger"]');
      if (!trigger || !root.contains(trigger)) return;
      var before = trigger.getAttribute('aria-expanded') === 'true';
      setTimeout(function(){
        var after = trigger.getAttribute('aria-expanded') === 'true';
        if (after !== before) return; // another handler already toggled it
        root.querySelectorAll('[data-slot="accordion-trigger"]').forEach(function(t){ if (t !== trigger) setState(t, false); });
        setState(trigger, !before);
      }, 0);
    });
    root.addEventListener('keydown', function(e){
      var trigger = e.target.closest('[data-slot="accordion-trigger"]');
      if (!trigger) return;
      var list = Array.prototype.slice.call(root.querySelectorAll('[data-slot="accordion-trigger"]'));
      var i = list.indexOf(trigger);
      if (e.key === 'ArrowDown' && list[i+1]) { e.preventDefault(); list[i+1].focus(); }
      if (e.key === 'ArrowUp' && list[i-1]) { e.preventDefault(); list[i-1].focus(); }
      if (e.key === 'Home') { e.preventDefault(); list[0].focus(); }
      if (e.key === 'End') { e.preventDefault(); list[list.length-1].focus(); }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

}catch(e){console.warn("bgx",e)}
/* xlight-events */
try{(function(){
  function push(o){ window.dataLayer = window.dataLayer || []; window.dataLayer.push(o); }
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
    var h = a.getAttribute('href') || '';
    if (h.indexOf('tel:') === 0) push({ event: 'click_call', page: 'bi-gam-x-light' });
    else if (h.indexOf('zalo.me') !== -1) push({ event: 'click_zalo', page: 'bi-gam-x-light' });
  }, true);
  document.addEventListener('xlight:product-selected', function(e){ var d = e.detail || {}; push({ event: 'select_product', page: 'bi-gam-x-light', product_id: d.id || '', product_name: d.name || '' }); });
  var reco = document.getElementById('qs-reco');
  if (reco && window.MutationObserver) new MutationObserver(function(){ if (reco.classList.contains('is-open')) push({ event: 'view_recommendation', page: 'bi-gam-x-light', results: reco.querySelectorAll('.qs-result').length }); }).observe(reco, { attributes: true, attributeFilter: ['class'] });
})();
}catch(e){console.warn("bgx",e)}
/* xlight-lead-form-script */
try{
(function(){
  var DEFAULT_LEAD_ENDPOINT = '/api/leads';
  var ZALO_URL = 'https://zalo.me/3622666363345050913';

  function val(form, name){
    var f = form.elements.namedItem(name);
    return f && f.value ? f.value.trim() : '';
  }
  function normalizePhone(phone){ return String(phone || '').replace(/[^0-9]/g, ''); }
  function leadEndpoint(){
    var meta = document.querySelector('meta[name="auto365-xlight-lead-endpoint"]');
    var globalEndpoint = typeof window.AUTO365_XLIGHT_LEAD_ENDPOINT === 'string' ? window.AUTO365_XLIGHT_LEAD_ENDPOINT.trim() : '';
    return globalEndpoint || (meta && meta.content ? meta.content.trim() : '') || DEFAULT_LEAD_ENDPOINT;
  }
  function copyText(text){
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function(){ return true; }, function(){ return false; });
    }
    var helper = document.createElement('textarea');
    helper.value = text;
    helper.setAttribute('readonly', '');
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    ((document.getElementById('xl-product-grid') && document.getElementById('xl-product-grid').closest('.xlight-app')) || document.querySelector('.lp-bgx .xlight-app') || document.querySelector('.lp-bgx') || document.body).appendChild(helper);
    helper.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch(e){}
    document.body.removeChild(helper);
    return Promise.resolve(ok);
  }
  function makeLeadId(){
    return (window.crypto && window.crypto.randomUUID) ? window.crypto.randomUUID() : 'XLIGHT-' + Date.now() + '-' + Math.random().toString(16).slice(2);
  }
  function serverLeadId(r){
    var v = r && r.lead_id;
    if (typeof v === 'number' && isFinite(v)) return String(v);
    if (typeof v === 'string' && v.trim()) return v.trim();
    return '';
  }
  function campaignValue(key){
    var current = ''; try { current = new URLSearchParams(window.location.search).get(key) || ''; } catch(e) {}
    var saved = (window.__a365Campaign || {})[key];
    return String(current || saved || '').trim();
  }
  function utm(key){
    try { return new URLSearchParams(window.location.search).get(key) || ''; } catch(e) { return ''; }
  }
  function buildSummary(form, phone){
    return [
      'AUTO365 - YÊU CẦU TƯ VẤN BI GẦM X-LIGHT',
      'Họ tên: ' + val(form, 'full_name'),
      'Số điện thoại: ' + phone,
      'Hãng xe: ' + (val(form, 'car_brand') || 'Chưa cung cấp'),
      'Dòng xe: ' + (val(form, 'car_model') || 'Chưa cung cấp'),
      'Xe/năm/phiên bản: ' + (val(form, 'car_detail') || 'Chưa cung cấp'),
      'Mẫu quan tâm: ' + (val(form, 'selected_model') || 'Chưa chọn') + (val(form, 'selected_price') ? ' — ' + val(form, 'selected_price') + ' / ' + (val(form, 'selected_unit') || 'cặp') + ' (' + (val(form, 'selected_vat') || 'chưa VAT') + ')' : ''),
      'Tỉnh/thành: ' + (val(form, 'province') || 'Chưa cung cấp'),
      'Nhu cầu: ' + (val(form, 'driving_need') || 'Chưa cung cấp'),
      'Trang: ' + window.location.href
    ].join('\n');
  }
  function leadFormData(form, leadId, phone, note){
    var carText = [val(form, 'car_brand'), val(form, 'car_model'), val(form, 'car_detail')].filter(Boolean).join(' ') || 'Chưa xác định';
    var model = val(form, 'selected_model');
    var slug = function(t){ return String(t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); };
    var data = new FormData();
    data.append('form-honey', '');
    data.append('fullname', val(form, 'full_name'));
    data.append('phone', phone);
    data.append('car_model', carText);
    data.append('priority', val(form, 'driving_need') || 'Tư vấn bi gầm X-Light');
    data.append('driving_need', val(form, 'driving_need'));
    data.append('car_detail', val(form, 'car_detail'));
    data.append('selected_model', model);
    data.append('selected_id', val(form, 'selected_id'));
    data.append('selected_url', val(form, 'selected_url'));
    data.append('selected_lens', val(form, 'selected_lens'));
    data.append('selected_voltage', val(form, 'selected_voltage'));
    data.append('qs_need', val(form, 'qs_need'));
    data.append('qs_budget', val(form, 'qs_budget'));
    data.append('service', 'Bi gầm X-Light');
    data.append('source_page', 'Bi gầm X-Light');
    data.append('source_url', window.location.href);
    data.append('referrer', document.referrer || '');
    var CAMPAIGN_KEYS = window.__a365CampaignKeys || ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','gbraid','wbraid','fbclid'];
    CAMPAIGN_KEYS.forEach(function(key){ var v = (/^(gclid|gbraid|wbraid|fbclid)$/.test(key) && val(form, key)) || campaignValue(key); if (v) data.set(key, v); });
    CAMPAIGN_KEYS.forEach(function(key){ var saved = (window.__a365Campaign || {})[key]; if (saved && (!data.has(key) || !String(data.get(key) || '').trim())) data.set(key, saved); });
    data.set('request_id', leadId);
    data.append('configuration_id', model ? 'bi-gam-x-light:' + slug(model) : 'bi-gam-x-light:tu-van-chung');
    data.append('package_name', model ? 'Bi gầm ' + model : 'Tư vấn chọn bi gầm X-Light theo xe');
    data.append('package_price', val(form, 'selected_price') ? val(form, 'selected_price') + ' / ' + (val(form, 'selected_unit') || 'cặp') + ' (' + (val(form, 'selected_vat') || 'chưa VAT') + ')' : '');
    data.append('vehicle_group', val(form, 'selected_voltage') ? 'Hệ điện ' + val(form, 'selected_voltage') : '');
    data.append('province', val(form, 'province'));
    data.append('note', note);
    return data;
  }
  function confirmLead(result){
    return !!(result && (result.success === true || result.success === 'true' || result.status === 'success'));
  }
  async function submitLead(data, leadId){
    if (typeof window.AUTO365_XLIGHT_LEAD_SUBMIT === 'function') {
      var customResult = await window.AUTO365_XLIGHT_LEAD_SUBMIT(data);
      if (!confirmLead(customResult)) throw new Error('Lead handler did not confirm');
      customResult = Object.assign({}, customResult, { lead_id: serverLeadId(customResult), request_id: leadId });
      return customResult;
    }
    var controller = new AbortController();
    var timer = setTimeout(function(){ controller.abort(); }, 12000);
    try {
      var response = await fetch(leadEndpoint(), { method:'POST', body:data, keepalive:true, signal:controller.signal, headers:{ 'Idempotency-Key': leadId } });
      if (!response.ok) throw new Error('Lead API returned ' + response.status);
      var result = await response.json().catch(function(){ return null; });
      if (!confirmLead(result)) throw new Error((result && result.message) || 'Lead API did not confirm');
      result = Object.assign({}, result, { lead_id: serverLeadId(result), request_id: leadId });
      return result;
    } finally {
      clearTimeout(timer);
    }
  }
  function cardByName(name){
    name = String(name || '').trim(); if (!name) return null;
    var cards = document.querySelectorAll('.product-showcase-grid .p-card');
    for (var i = 0; i < cards.length; i++) { var n = cards[i].querySelector('.p-card-name'); if (n && n.textContent.trim() === name) return cards[i]; }
    return null;
  }
  function configFromCard(card, extra){
    var priceEl = card.querySelector('.p-card-price'), link = card.querySelector('.p-card-btn-detail[href]');
    return {
      id: card.getAttribute('data-name') || '', href: link ? link.href : '',
      name: (card.querySelector('.p-card-name') || {}).textContent.trim(),
      price: priceEl && priceEl.childNodes[0] ? priceEl.childNodes[0].textContent.trim() : '',
      unit: card.getAttribute('data-unit') || 'cặp', vat: card.getAttribute('data-vat') === 'incl' ? 'đã VAT' : 'chưa VAT',
      lens: card.getAttribute('data-lens') || '', voltage: card.getAttribute('data-voltage') || '',
      need: (extra && extra.need) || '', budget: (extra && extra.budget) || '', needLabel: (extra && extra.needLabel) || ''
    };
  }
  function syncFromName(form){
    var card = cardByName(val(form, 'selected_model'));
    if (!card) return false;
    var cfg = configFromCard(card, { need: val(form, 'qs_need'), budget: val(form, 'qs_budget') });
    var set = function(n, v){ var f = form.elements.namedItem(n); if (f) f.value = v || ''; };
    set('selected_id', cfg.id); set('selected_url', cfg.href); set('selected_price', cfg.price); set('selected_unit', cfg.unit);
    set('selected_vat', cfg.vat); set('selected_lens', cfg.lens); set('selected_voltage', cfg.voltage);
    form.dataset.selectedName = cfg.name;
    return true;
  }
  function prefill(form, p){
    if (!form || !p) return;
    var set = function(name, v){ var f = form.elements.namedItem(name); if (f) f.value = v || ''; };
    set('selected_id', p.id); set('selected_url', p.href); set('selected_model', p.name); set('selected_price', p.price); set('selected_unit', p.unit); set('selected_vat', p.vat);
    set('selected_lens', p.lens); set('selected_voltage', p.voltage); set('qs_need', p.need); set('qs_budget', p.budget);
    if (p.needLabel) set('driving_need', p.needLabel);
    var modelLabel = document.getElementById('xl-lead-model'); if (modelLabel) modelLabel.hidden = !p.name;
    var detailLabel = document.getElementById('xl-lead-cardetail'); if (detailLabel) detailLabel.hidden = !p.name;
    form.dataset.selectedName = p.name || '';
    var box = document.getElementById('xl-lead-selected');
    if (box) { box.hidden = false; box.innerHTML = 'Đang tư vấn cho: <b>' + p.name + '</b> — ' + p.price + ' / ' + p.unit + ' (' + p.vat + ').'; }
  }
  function init(){
    var form = document.getElementById('xl-lead-form');
    if (!form) return;
    ['gclid','gbraid','wbraid','fbclid'].forEach(function(k){ var f = form.elements.namedItem(k); if (f) f.value = campaignValue(k); });
    document.addEventListener('xlight:product-selected', function(e){ var d = e.detail || {}; var card = cardByName(d.name); prefill(form, card ? configFromCard(card, d) : d); });
    var modelInput = form.elements.namedItem('selected_model');
    if (modelInput) modelInput.addEventListener('input', function(){
      if (modelInput.value.trim() === (form.dataset.selectedName || '')) return;
      if (syncFromName(form)) { var b0 = document.getElementById('xl-lead-selected'); if (b0) { b0.hidden = false; b0.innerHTML = 'Đang tư vấn cho: <b>' + val(form, 'selected_model') + '</b> — ' + val(form, 'selected_price') + ' / ' + val(form, 'selected_unit') + ' (' + val(form, 'selected_vat') + ').'; } return; }
      ['selected_id','selected_url','selected_price','selected_unit','selected_vat','selected_lens','selected_voltage','qs_need','qs_budget'].forEach(function(n){ var f = form.elements.namedItem(n); if (f) f.value = ''; });
      form.dataset.selectedName = '';
      window.xlSelectedProduct = null;
      var box = document.getElementById('xl-lead-selected'); if (box) { box.hidden = true; box.innerHTML = ''; }
    });
    if (window.xlSelectedProduct) prefill(form, window.xlSelectedProduct);
    form.addEventListener('submit', async function(e){
      e.preventDefault();
      if (!form.reportValidity()) return;
      var submitBtn = form.querySelector('.xl-lead-submit');
      var note = form.querySelector('.xl-lead-note');
      var originalLabel = submitBtn ? submitBtn.textContent : '';
      var phone = normalizePhone(val(form, 'phone'));
      if (!/^0(3|5|7|8|9)\d{8}$/.test(phone)) {
        if (note) note.innerHTML = 'Số điện thoại chưa đúng. Nhập theo dạng 0xxxxxxxxx nhé.';
        form.elements.namedItem('phone')?.focus();
        return;
      }
      var lastSubmit = Number(localStorage.getItem('xlight_last_submit_time') || 0);
      var waitLeft = lastSubmit ? Math.ceil((60000 - (Date.now() - lastSubmit)) / 1000) : 0;
      if (waitLeft > 0) {
        if (note) note.innerHTML = 'Bạn vừa gửi rồi. Đợi ' + waitLeft + ' giây để gửi lại, hoặc gọi <a href="tel:0365365911">0365 365 911</a>.';
        return;
      }
      var fingerprint = [phone, val(form, 'full_name'), val(form, 'selected_model')].join('|');
      if (form.dataset.leadFingerprint !== fingerprint || !form.dataset.leadId) { form.dataset.leadId = makeLeadId(); form.dataset.leadFingerprint = fingerprint; }
      var leadId = form.dataset.leadId;
      if (val(form, 'selected_model') && !syncFromName(form)) { ['selected_id','selected_url','selected_price','selected_unit','selected_vat','selected_lens','selected_voltage'].forEach(function(n){ var f = form.elements.namedItem(n); if (f) f.value = ''; }); }
      var summary = buildSummary(form, phone);
      var data = leadFormData(form, leadId, phone, summary);
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Đang gửi yêu cầu…'; }
      if (note) note.textContent = 'Đang gửi thông tin đến Auto365...';
      try {
        var result = await submitLead(data, leadId);
        localStorage.setItem('xlight_last_submit_time', String(Date.now()));
        delete form.dataset.leadId; delete form.dataset.leadFingerprint;
        if (note) note.innerHTML = 'Auto365 đã nhận yêu cầu' + (val(form, 'selected_model') ? ' cho mẫu <b>' + val(form, 'selected_model') + '</b>' : '') + (result.lead_id ? '. Mã yêu cầu: <strong>' + result.lead_id + '</strong>.' : '. Mã tham chiếu: <strong>' + String(result.request_id).slice(0, 8).toUpperCase() + '</strong> (mã yêu cầu sẽ được xác nhận khi tư vấn viên gọi lại).') + ' Tư vấn viên sẽ gọi lại để xác nhận cấu hình; lịch lắp chỉ được chốt khi chi nhánh liên hệ.';
        form.reset(); var selBox = document.getElementById('xl-lead-selected'); if (selBox) selBox.hidden = true;
        if (submitBtn) submitBtn.textContent = 'Đã gửi yêu cầu ✓';
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event:'lead_form_submit', form_source:'bi-gam-x-light', service:'Bi gầm X-Light', lead_id: result.lead_id || undefined, request_id: result.request_id, lead_id_source: result.lead_id ? 'server' : 'none' });
      } catch(error) {
        var copied = await copyText(summary);
        var timedOut = error && error.name === 'AbortError';
        if (note) note.innerHTML = (timedOut ? 'Chưa nhận được xác nhận từ Auto365. Anh/chị có thể thử lại sau ít phút. ' : 'Chưa gửi thành công. ') + 'Anh/chị có thể gọi <a href="tel:0365365911">0365 365 911</a> hoặc <a href="' + ZALO_URL + '" target="_blank" rel="noopener noreferrer">chat Zalo với tư vấn viên</a>.' + (copied ? ' Nội dung yêu cầu đã được sao chép để anh/chị dán vào Zalo nếu cần.' : '');
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalLabel; }
      }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

}catch(e){console.warn("bgx",e)}
/* xlight-quickselect-script */
try{
(function(){
  var COLOR_MODE_TEXT = {
    switchable: 'Đổi 3 nhiệt màu (3000/4300/5500K) trên cùng đèn',
    purchase_variant: 'Chọn 1 nhiệt màu (3000/4300/5500K) khi mua, không đổi sau lắp',
    fixed: 'Một nhiệt màu cố định',
    cos_pha_variant: 'Nhiệt màu theo cấu hình Cos/Pha, chọn khi mua',
    unknown: 'Cơ chế nhiệt màu: chưa xác nhận'
  };
  var NEED_TO_FORM = { city: 'Đi phố', rain: 'Mưa, sương mù', touring: 'Đi tỉnh, đường xa' };
  var NEED_BASIS = {
    city: 'Đi phố: mẫu nào trong danh mục cũng dùng được, nên lọc theo ngân sách và nhiệt màu bạn thích.',
    touring: 'Đi tỉnh: xếp theo công suất Pha ghi trên trang sản phẩm (W/đèn) từ cao xuống. Số W không thay cho phép đo chiếu xa, nên Auto365 kiểm vùng sáng trên xe trước khi chốt.',
    rain: 'Mưa, sương mù: chưa có phép đo so sánh vùng sáng khi mưa giữa các mẫu, nên không loại mẫu nào theo nhiệt màu. Kỹ thuật viên kiểm vị trí lắp, vùng phủ và căn đường cắt Cos trên xe trước khi chốt.',
    compact: 'Hốc gầm nhỏ: lọc các mẫu lens 2.0 inch. Vẫn cần đo hốc thực tế trên xe.',
    multicolor: 'Đổi màu: lọc các mẫu đổi được 3 nhiệt màu trên cùng một bộ đèn.'
  };
  function el(tag, props, children){
    var e = document.createElement(tag);
    if (props) Object.keys(props).forEach(function(k){ e.setAttribute(k, props[k]); });
    (children||[]).forEach(function(c){ e.appendChild(c); });
    return e;
  }
  function txt(tag, props, text){ var e = el(tag, props); e.textContent = text; return e; }
  function attr(card, name){ return card.getAttribute(name) || ''; }
  function colorModeText(card){ return COLOR_MODE_TEXT[attr(card, 'data-color-mode')] || COLOR_MODE_TEXT.unknown; }
  function cardNeeds(card){
    var lens = attr(card, 'data-lens');
    var color = attr(card, 'data-color');
    var mode = attr(card, 'data-color-mode');
    var price = +attr(card, 'data-price') || 0;
    var needs = [];
    if (lens === '2.0') needs.push('compact');
    if (mode === 'switchable') needs.push('multicolor');
    needs.push('rain'); // mưa/sương: chưa có phép đo so sánh giữa các mẫu, không loại theo nhiệt màu
    needs.push('touring'); // không loại theo cỡ lens: chưa có căn cứ
    needs.push('city'); // đi phố: mọi mẫu đều dùng được, chọn theo ngân sách và nhiệt màu
    return needs;
  }
  function qsBudgetInRange(price, budgetVal){
    if (budgetVal === 'under45') return price < 4500000;
    if (budgetVal === '45to55') return price >= 4500000 && price <= 5500000;
    if (budgetVal === 'over55') return price > 5500000;
    return true;
  }
  function qsBudgetRangeText(budgetVal){
    if (budgetVal === 'under45') return 'dưới 4,5 triệu';
    if (budgetVal === '45to55') return '4,5–5,5 triệu';
    if (budgetVal === 'over55') return 'trên 5,5 triệu';
    return '';
  }
  // Step 1: hard exclusion (voltage, lens). Step 2: criteria (need, budget). Step 3: order by price.
  function qsMatch(cards, needVal, lensVal, budgetVal, voltageVal){
    var pool = cards.filter(function(c){
      if (!(+attr(c, 'data-price'))) return false;
      var voltage = attr(c, 'data-voltage');
      if (voltageVal ? voltage !== voltageVal : voltage !== '12V') return false;
      if (lensVal && attr(c, 'data-lens') !== lensVal) return false;
      return true;
    });
    return pool.filter(function(c){
      var okNeed = !needVal || cardNeeds(c).indexOf(needVal) !== -1;
      return okNeed && qsBudgetInRange(+attr(c, 'data-price'), budgetVal);
    });
  }
  function qsCriteriaText(needVal, lensVal, budgetVal, voltageVal){
    var parts = [];
    if (needVal) parts.push('đúng nhu cầu đã chọn');
    if (lensVal) parts.push('lens ' + lensVal + ' inch');
    if (budgetVal) parts.push('giá ' + qsBudgetRangeText(budgetVal));
    parts.push(voltageVal ? 'hệ điện ' + voltageVal : 'hệ điện chưa xác nhận (đang hiển thị mẫu 12V)');
    return 'Đáp ứng: ' + parts.join(', ') + '.';
  }
  function qsBuildResultCard(card, badgeLabel, badgeClass, reasonText, extraClass, ctx){
    var img = card.querySelector('.p-card-thumb img');
    var nameEl = card.querySelector('.p-card-name');
    var priceEl = card.querySelector('.p-card-price');
    var detail = card.querySelector('.p-card-btn-detail[href]');
    var name = nameEl ? nameEl.textContent.trim() : '';
    var priceText = priceEl && priceEl.childNodes[0] ? priceEl.childNodes[0].textContent.trim() : '';
    var href = detail ? detail.href : '#';
    var unit = attr(card, 'data-unit') || 'cặp';
    var vat = attr(card, 'data-vat') === 'incl' ? 'đã VAT' : 'chưa VAT';
    var consult = txt('a', {'class': 'qs-btn-primary', href: '#xl-lead-form'}, 'Tư vấn mẫu này');
    consult.addEventListener('click', function(){
      var payload = {
        id: attr(card, 'data-name'), name: name, price: priceText, unit: unit, vat: vat, href: href,
        lens: attr(card, 'data-lens'), voltage: attr(card, 'data-voltage'), colorMode: attr(card, 'data-color-mode'),
        need: ctx.needVal, budget: ctx.budgetVal, voltageChoice: ctx.voltageVal, needLabel: NEED_TO_FORM[ctx.needVal] || ''
      };
      window.xlSelectedProduct = payload;
      document.dispatchEvent(new CustomEvent('xlight:product-selected', { detail: payload }));
    });
    var actions = el('div', {'class': 'qs-result-actions'}, [
      txt('a', {'class': 'qs-btn-outline', href: href, target: '_blank', rel: 'noreferrer'}, 'Xem sản phẩm'),
      consult
    ]);
    var body = el('div', {'class': 'qs-result-body'}, [
      txt('span', {'class': 'qs-badge ' + badgeClass}, badgeLabel),
      txt('div', {'class': 'qs-result-name'}, name),
      txt('div', {'class': 'qs-result-price'}, priceText + ' / ' + unit),
      txt('p', {'class': 'qs-result-vat'}, 'Giá tham khảo, ' + vat + ' · ' + colorModeText(card)),
      txt('p', {'class': 'qs-result-reason'}, 'Vì sao có mẫu này: điện áp đèn ' + (attr(card, 'data-voltage') === '24V' ? '24V' : '12V') + ' · lens ' + attr(card, 'data-lens') + ' inch · ' + colorModeText(card).replace(/^./, function(c){ return c.toLowerCase(); }) + ' · ' + priceText + ' / ' + unit + '.'),
      caseLine(card),
      txt('p', {'class': 'qs-result-check'}, reasonText),
      actions
    ]);
    return el('div', {'class': 'qs-result' + (extraClass ? ' ' + extraClass : '')}, [
      el('img', {src: img ? img.src : '', alt: name}),
      body
    ]);
  }
  function coreModel(t){ return String(t || '').replace(/^Bi gầm\s+/i, '').replace(/^X-Light\s+/i, '').replace(/\s*·.*$/, '').replace(/\s+\d{4}K$/, '').trim().toLowerCase(); }
  function cardName(c){ var n = c.querySelector('.p-card-name'); return n ? n.textContent.trim() : ''; }
  function casesFor(card){
    // Case lay tu khoi SSR .nr-case; khop qua ten mau trong tieu de, moi case chi gan mau co ten dai nhat khop.
    var key = coreModel(cardName(card)); if (!key) return [];
    var ln = card.querySelector('a[href]'), slug = ln ? ln.pathname.replace(/^\/|\/$/g, '') : '';
    var keys = Array.prototype.map.call(document.querySelectorAll('.product-showcase-grid .p-card'), function(c){ return coreModel(cardName(c)); });
    var out = [];
    document.querySelectorAll('.nr-case').forEach(function(a){
      // Uu tien SP that bai duoc gan (data-product = slug, tu news_product_relations); chi bai chua gan moi doan theo ten -> nhan "Ho so lien quan".
      var ps = a.getAttribute('data-product');
      if (ps) { if (!slug || (' ' + ps + ' ').indexOf(' ' + slug + ' ') === -1) return; }
      else {
        var t = (a.querySelector('.nr-case-work') || a).textContent.toLowerCase();
        var best = keys.filter(function(k){ return k && t.indexOf(k) !== -1; }).sort(function(x, y){ return y.length - x.length; })[0];
        if (best !== key) return;
      }
      var ten = a.querySelector('.nr-case-ten'), nam = a.querySelector('.nr-case-nam');
      out.push({ car: (ten ? (ten.textContent + ' ' + (nam ? nam.textContent : '')).trim() : (a.querySelector('.nr-case-work') || a).textContent.split(/\s+(lắp|độ)\s/i)[0].trim()), href: a.href, linked: !ps });
    });
    return out;
  }
  function caseLine(card){
    var all = casesFor(card), p = document.createElement('p');
    var list = all.filter(function(c){ return !c.linked; }), rel = all.filter(function(c){ return c.linked; });
    p.className = 'qs-result-cases';
    if (!all.length) { p.textContent = 'Chưa có case của mẫu này trên trang, Auto365 tư vấn thêm sau khi xem xe.'; return p; }
    if (!list.length) {
      p.appendChild(document.createTextNode('Hồ sơ liên quan (chưa đối chiếu phiên bản thi công): '));
      rel.forEach(function(c, i){ if (i) p.appendChild(document.createTextNode(', ')); var a = document.createElement('a'); a.href = c.href; a.target = '_blank'; a.rel = 'noreferrer'; a.textContent = c.car; p.appendChild(a); });
      p.appendChild(document.createTextNode('.'));
      return p;
    }
    p.appendChild(document.createTextNode('Đã lắp thực tế: '));
    list.slice(0, 3).forEach(function(c, i){
      if (i) p.appendChild(document.createTextNode(', '));
      var a = document.createElement('a'); a.href = c.href; a.target = '_blank'; a.rel = 'noreferrer'; a.textContent = c.car; p.appendChild(a);
    });
    if (list.length > 3) p.appendChild(document.createTextNode(' và ' + (list.length - 3) + ' xe khác'));
    p.appendChild(document.createTextNode('.'));
    return p;
  }
  function openQsModal(){ document.getElementById('qs-reco').classList.add('is-open'); document.documentElement.style.overflow = 'hidden'; }
  function closeQsModal(){ document.getElementById('qs-reco').classList.remove('is-open'); document.documentElement.style.overflow = ''; }
  function qsRunSearch(needVal, lensVal, budgetVal, voltageVal){
    var allCards = Array.prototype.slice.call(document.querySelectorAll('.product-showcase-grid .p-card'));
    var exact = qsMatch(allCards, needVal, lensVal, budgetVal, voltageVal);
    var phaW = function(c){ var t = (c.querySelector('.p-card-specs') || {}).textContent || ''; var m = t.match(/\/\s*~?(\d+)W/); return m ? +m[1] : 0; };
    exact.sort(function(a,b){ return (needVal === 'touring' ? (phaW(b) - phaW(a)) : 0) || ((+attr(a, 'data-price')) - (+attr(b, 'data-price'))); });
    var resultBox = document.getElementById('qs-result');
    resultBox.innerHTML = '';
    var ctx = { needVal: needVal, lensVal: lensVal, budgetVal: budgetVal, voltageVal: voltageVal };
    if (exact.length) {
      resultBox.appendChild(txt('p', {'class': 'qs-intro'}, (NEED_BASIS[needVal] ? NEED_BASIS[needVal] + ' ' : '') + (needVal === 'touring' ? 'Cùng mức công suất thì xếp theo giá từ thấp đến cao. ' : 'Các mẫu xếp theo giá từ thấp đến cao, giá chỉ phản ánh ngân sách. ') + 'Link xe đã lắp là hồ sơ tham khảo, không thay cho việc kiểm tra xe của bạn. Auto365 kiểm tra hốc đèn, pát và điện áp của đúng đời xe trước khi xác nhận lắp.'));
      var reason = 'Cần kiểm tra: hốc đèn, pát và hệ điện thực tế của xe.';
      resultBox.appendChild(txt('p', {'class': 'qs-count'}, 'Có ' + exact.length + ' mẫu khớp tiêu chí' + (exact.length > 3 ? ', đang hiện 3 mẫu đầu.' : '.')));
      exact.forEach(function(card, i){
        var rc = qsBuildResultCard(card, 'Ứng viên · cần kiểm tra trên xe', i === 0 ? 'qs-badge--pick' : 'qs-badge--alt', reason, i === 0 ? 'is-primary' : '', ctx);
        if (i > 2) { rc.hidden = true; rc.classList.add('qs-more-item'); }
        resultBox.appendChild(rc);
      });
      if (exact.length > 3) {
        var more = txt('button', {'type': 'button', 'class': 'qs-show-all'}, 'Xem tất cả ' + exact.length + ' ứng viên');
        more.addEventListener('click', function(){ resultBox.querySelectorAll('.qs-more-item').forEach(function(x){ x.hidden = false; }); more.remove(); var c = resultBox.querySelector('.qs-count'); if (c) c.textContent = 'Có ' + exact.length + ' mẫu khớp tiêu chí.'; });
        resultBox.appendChild(more);
      }
      if (!voltageVal) resultBox.appendChild(txt('p', {'class': 'qs-note'}, 'Cần xác định điện áp xe. Đang hiện các mẫu 12V; xe tải, xe khách 24V thì chọn lại mục "Hệ điện xe". Chưa thể nói mẫu nào hợp xe khi chưa rõ điện áp.'));
    } else {
      resultBox.appendChild(txt('p', {'class': 'qs-empty'}, 'Không có mẫu nào khớp đủ: ' + qsCriteriaText(needVal, lensVal, budgetVal, voltageVal).replace(/^Đáp ứng: /, '') + ' Thử bỏ bớt một tiêu chí, hoặc để lại thông tin để Auto365 kiểm tra xe.'));
      var leadLink = txt('a', {'class': 'qs-btn-primary', href: '#xl-lead-form', style: 'display:inline-flex;padding:0 16px;min-height:44px;align-items:center;border-radius:8px;text-decoration:none;font-weight:800;font-size:14px'}, 'Để lại thông tin để được tư vấn');
      resultBox.appendChild(leadLink);
    }
    openQsModal();
  }
  function init(){
    var submit = document.getElementById('qs-submit');
    var closeBtn = document.getElementById('qs-modal-close');
    var modal = document.getElementById('qs-reco');
    if (!submit || !modal) return;
    submit.addEventListener('click', function(){
      qsRunSearch(document.getElementById('qs-need').value, document.getElementById('qs-lens').value, document.getElementById('qs-budget').value, document.getElementById('qs-voltage').value);
    });
    document.querySelectorAll('.qs-pick').forEach(function(b){ b.addEventListener('click', function(){
      document.getElementById('qs-need').value = b.getAttribute('data-need') || '';
      document.getElementById('qs-voltage').value = b.getAttribute('data-voltage') || '';
      document.getElementById('qs-lens').value = ''; document.getElementById('qs-budget').value = '';
      qsRunSearch(document.getElementById('qs-need').value, '', '', document.getElementById('qs-voltage').value);
    }); });
    closeBtn.addEventListener('click', closeQsModal);
    modal.addEventListener('click', function(e){ if (e.target === modal) closeQsModal(); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeQsModal(); });
    modal.addEventListener('click', function(e){ if (e.target.closest('a[href="#xl-lead-form"]')) closeQsModal(); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

}catch(e){console.warn("bgx",e)}
/* xlight-mobile-filter-bridge */
try{
(function(){
  function init(){
    var search = document.getElementById('xl-search');
    var sort = document.getElementById('xl-sort');
    var mfSearch = document.getElementById('mf-search');
    var mfLens = document.getElementById('mf-lens');
    var mfColor = document.getElementById('mf-color');
    var mfVoltage = document.getElementById('mf-voltage');
    var mfSort = document.getElementById('mf-sort');
    if (!mfSearch || !search) return;

    mfSearch.addEventListener('input', function(){
      search.value = mfSearch.value;
      search.dispatchEvent(new Event('input', {bubbles: true}));
    });
    mfSort.addEventListener('change', function(){
      sort.value = mfSort.value;
      sort.dispatchEvent(new Event('change', {bubbles: true}));
    });
    function bridgeCheckboxGroup(select, selector){
      select.addEventListener('change', function(){
        var boxes = Array.prototype.slice.call(document.querySelectorAll(selector));
        boxes.forEach(function(c){
          var norm = function(v){ return String(v == null ? '' : v).trim().toLowerCase().replace(/\s+/g, ' ').replace(/\s*(inch|")$/, ''); };
          var shouldCheck = select.value !== '' && norm(c.value) === norm(select.value);
          if (c.checked !== shouldCheck) c.checked = shouldCheck;
        });
        if (boxes.length) boxes[0].dispatchEvent(new Event('change', {bubbles: true}));
      });
    }
    bridgeCheckboxGroup(mfLens, '.xl-filter-lens');
    bridgeCheckboxGroup(mfColor, '.xl-filter-color');
    bridgeCheckboxGroup(mfVoltage, '.xl-filter-voltage');
    ['price', 'led', 'cool', 'mode'].forEach(function(k){ var el = document.getElementById('mf-' + k); if (el) bridgeCheckboxGroup(el, '.xl-filter-' + k); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

}catch(e){console.warn("bgx",e)}
/* xl-hero-stats-js */
try{(function(){function run(){var c=document.querySelectorAll(".product-showcase-grid .p-card"),k=document.querySelectorAll("#case-grid .nr-case"),ps=[];c.forEach(function(e){var v=+e.getAttribute("data-price");if(v)ps.push(v)});var f=function(v){return (Math.round(v/1e5)/10).toString().replace(".",",").replace(/,0$/,"")};var set=function(n,v){var e=document.querySelector("[data-stat="+n+"]");if(e&&v)e.textContent=v};if(c.length)set("models",c.length);if(k.length)set("cases",k.length);if(ps.length)set("price",f(Math.min.apply(0,ps))+"–"+f(Math.max.apply(0,ps))+"tr")}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run);else run()})();
}catch(e){console.warn("bgx",e)}
/* xl-video-facade-js */
try{(function(){document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.xl-video-facade');if(!b)return;var f=document.createElement('iframe');f.src='https://www.youtube-nocookie.com/embed/'+b.getAttribute('data-yt')+'?autoplay=1';f.title=b.getAttribute('aria-label').replace('Phát video: ','');f.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';f.referrerPolicy='strict-origin-when-cross-origin';f.allowFullscreen=true;b.parentNode.replaceChild(f,b);});})();
}catch(e){console.warn("bgx",e)}
