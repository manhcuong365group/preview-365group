(()=>{
 'use strict';
 const $=(q,c=document)=>c.querySelector(q), $$=(q,c=document)=>Array.from(c.querySelectorAll(q));
 const products=JSON.parse($('#product-data').textContent), byId=new Map(products.map(p=>[p.id,p]));
 if(matchMedia('(max-width:680px)').matches)$('.filter-disclosure').open=false;
 const selected=new Set();let toastTimer;
 const emit=(action,item='')=>document.dispatchEvent(new CustomEvent('auto365:led',{detail:{action,item}}));
 const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
 function toast(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').hidden=false;toastTimer=setTimeout(()=>$('#toast').hidden=true,4500);}
 function runSocketFilter(query) {
    const q = (query || '').toLowerCase().trim();
    const rows = document.querySelectorAll('#socket-lookup-table tbody tr');
    let matched = 0;
    rows.forEach(r => {
      const data = (r.getAttribute('data-socket-row') || '') + ' ' + r.textContent.toLowerCase();
      const isMatch = (!q || data.includes(q));
      r.style.display = isMatch ? '' : 'none';
      if (isMatch) matched++;
    });

    // Highlight active quick button
    const btns = document.querySelectorAll('.btn-quick-socket');
    btns.forEach(b => {
      const bSock = (b.getAttribute('data-socket') || '').toLowerCase();
      const isActive = (!q && !bSock) || (q && bSock && (bSock === q || bSock.includes(q) || q.includes(bSock)));
      if (isActive) {
        b.classList.add('active');
        b.style.background = '#e31b2d';
        b.style.color = '#ffffff';
        b.style.borderColor = '#e31b2d';
      } else {
        b.classList.remove('active');
        b.style.background = '#f8fafc';
        b.style.color = '#1e293b';
        b.style.borderColor = '#e2e8f0';
      }
    });
  }

  function filterSocket(socket) {
    const input = document.getElementById('socket-search-input');
    if (input) input.value = socket;
    runSocketFilter(socket);
  }

  // Expose to window/global scope so inline onclick="filterSocket(...)" works flawlessly
  window.filterSocket = filterSocket;
  window.runSocketFilter = runSocketFilter;

  function initSocketLookupEvents() {
    const sInput = document.getElementById('socket-search-input');
    if (sInput && !sInput._bound) {
      sInput._bound = true;
      sInput.addEventListener('input', (e) => runSocketFilter(e.target.value));
    }
    document.querySelectorAll('.btn-quick-socket').forEach(b => {
      if (!b._bound) {
        b._bound = true;
        b.addEventListener('click', (e) => {
          e.preventDefault();
          const sock = b.getAttribute('data-socket') || '';
          filterSocket(sock);
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSocketLookupEvents);
  } else {
    initSocketLookupEvents();
  }

  async function sendAuto365LeadApi(payload, leadId) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);
    try {
      const formData = new FormData();
      Object.entries(payload).forEach(([k, v]) => formData.append(k, v));
      const res = await fetch('/api/leads/lighting', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json', 'X-Idempotency-Key': leadId },
        signal: controller.signal
      });
      clearTimeout(timer);
      if (!res.ok) throw new Error('API status ' + res.status);
      const data = await res.json().catch(() => ({}));
      return { success: true, lead_id: data.lead_id || leadId };
    } catch(err) {
      clearTimeout(timer);
      console.warn('Lead API fallback triggered:', err.message);
      return { success: false, error: err.message };
    }
  }

  function updateShop(){
  const groups={};$$('.shop-filter:checked').forEach(i=>(groups[i.dataset.group]??=[]).push(i.value));
  let count=0;
  for(const card of $$('.shop-card')){
   const p=byId.get(card.dataset.productId);
   const matches=Object.entries(groups).every(([group,values])=>values.some(v=>{
    if(group==='brand')return p.brandKey===v;
    if(group==='socket')return p.sockets.includes(v);
    if(group==='position')return p.group===v;
    if(group==='price')return v==='under2'?p.price<2000000:p.price>=2000000&&p.price<=4000000;
    return false;
   }));
   card.hidden=!matches;if(matches)count++;
  }
  $('#shop-count').textContent=`${count} cấu hình sản phẩm`;
  $('#empty-products').hidden=count!==0;
  $$('[data-quick]').forEach(b=>{const active=b.dataset.quick==='all'?Object.keys(groups).length===0:Object.keys(groups).length===1&&groups.socket?.length===1&&groups.socket[0]===b.dataset.quick;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 }
 $$('.shop-filter').forEach(i=>i.addEventListener('change',()=>{updateShop();emit('filter');}));
 $('#clear-shop-filter').addEventListener('click',()=>{$$('.shop-filter').forEach(i=>i.checked=false);updateShop();});
 const grid=$('#product-grid'),showMoreBtn=$('#show-more-products');
 function expandGrid(){grid.classList.remove('collapsed');if(showMoreBtn)showMoreBtn.closest('#show-more-wrap').hidden=true;}
 if(showMoreBtn)showMoreBtn.addEventListener('click',expandGrid);
 $$('.shop-filter').forEach(i=>i.addEventListener('change',expandGrid));
 $$('[data-quick]').forEach(b=>b.addEventListener('click',expandGrid));
 $$('[data-quick]').forEach(b=>b.addEventListener('click',()=>{$$('.shop-filter').forEach(i=>i.checked=i.dataset.group==='socket'&&i.value===b.dataset.quick);updateShop();emit('quick_filter',b.dataset.quick);}));
 if($('#shop-sort')) $('#shop-sort').addEventListener('change',event=>{
  const order=event.target.value, list=[...products];
  if(order==='asc')list.sort((a,b)=>a.price-b.price);
  if(order==='desc')list.sort((a,b)=>b.price-a.price);
  if(order==='name')list.sort((a,b)=>a.name.localeCompare(b.name,'vi'));
  list.forEach(p=>$('#product-grid').append($(`[data-product-id="${p.id}"]`)));
  emit('sort',order);
 });
 function closeCompareModal() {
    const modal = document.getElementById('xl-compare-overlay');
    if (modal) {
      modal.classList.remove('is-open');
      document.documentElement.style.overflow = '';
    }
  }

  function renderCompareTable() {
    const modal = document.getElementById('xl-compare-overlay');
    if (!modal) return;
    const body = document.getElementById('xl-compare-body');
    if (!body) return;

    if (selected.size < 2) {
      body.innerHTML = '<p class="xl-compare-empty">Tích chọn tối thiểu 2 sản phẩm bằng ô "So sánh" trên từng thẻ sản phẩm để xem bảng đối chiếu.</p>';
      return;
    }

    const list = [...selected].map(id => byId.get(id));
    const rows = [];

    function rowHtml(label, cells, cls = '') {
      return '<tr><th scope="row">' + label + '</th>' + cells.map(c => '<td class="' + cls + '">' + c + '</td>').join('') + '</tr>';
    }

    // 1. Image
    rows.push(rowHtml('Hình ảnh', list.map(p => p.image ? '<img src="' + p.image + '" alt="' + p.name.replace(/"/g, '&quot;') + '">' : ''), 'xl-img-cell'));
    // 2. Name
    rows.push(rowHtml('Sản phẩm', list.map(p => '<a class="xl-name" href="' + p.url + '" target="_blank" rel="noreferrer">' + p.name + '</a>')));
    // 3. Brand
    rows.push(rowHtml('Thương hiệu', list.map(p => '<strong>' + p.brand + '</strong>')));
    // 4. Price
    rows.push(rowHtml('Giá niêm yết', list.map(p => '<span class="xl-price">' + p.priceText + '</span><span class="xl-vat">' + p.vat + '</span>')));
    // 5. Socket
    rows.push(rowHtml('Chân bóng', list.map(p => '<span style="font-weight:700; color:#333333;">' + p.socketText + '</span>')));
    // 6. Color Temp
    rows.push(rowHtml('Nhiệt màu', list.map(p => p.kelvin)));
    // 7. Voltage
    rows.push(rowHtml('Hệ điện xe', list.map(p => p.voltage)));
    // 8. Warranty
    rows.push(rowHtml('Bảo hành', list.map(p => '<span class="badge dark" style="padding:3px 8px; border-radius:6px; background:#1e293b; color:#fff; font-size:11px; font-weight:700;">' + p.warranty + '</span>')));
    // 9. Installation
    rows.push(rowHtml('Công lắp / căn chỉnh', list.map(p => p.installation)));
    // 10. Fit / Recommendation
    rows.push(rowHtml('Phù hợp theo xe', list.map(p => '<span style="font-size:12px; color:#475569; line-height:1.45;">' + p.fit + '</span>')));
    // 11. Actions
    rows.push(rowHtml('Hành động', list.map(p => `
      <div style="display:flex; flex-direction:column; gap:6px;">
        <button type="button" class="btn red" style="width:100%; min-height:36px; padding:0 10px; font-size:12.5px; font-weight:800; border-radius:8px; border:0; background:#e31b2d; color:#fff; cursor:pointer;" data-compare-consult="${p.id}">Tư vấn dòng này</button>
        <button type="button" style="background:none; border:0; color:#64748b; font-size:11.5px; cursor:pointer; text-decoration:underline;" data-compare-remove="${p.id}">Bỏ so sánh</button>
      </div>
    `)));

    body.innerHTML = `
      <table class="xl-compare-table">
        ${rows.join('')}
      </table>
      <p class="xl-compare-tip">Đang so sánh ${list.length}/3 cấu hình. Tích hoặc bỏ tích ô "So sánh" trên danh mục để thay đổi.</p>
    `;

    // Remove item directly from compare table
    body.querySelectorAll('[data-compare-remove]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.compareRemove;
        selected.delete(id);
        updateCompare();
        if (selected.size < 2) {
          closeCompareModal();
        } else {
          renderCompareTable();
        }
      });
    });

    // Consult item from compare table
    body.querySelectorAll('[data-compare-consult]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.compareConsult;
        const p = byId.get(id);
        closeCompareModal();
        if (p && typeof window.showConsultStepGlobal === 'function') {
          window.showConsultStepGlobal({
            id: p.id,
            name: p.name,
            priceText: p.priceText,
            img: p.image
          }, { isPick: true, isUpgrade: false, diffBudget: 0, diffBase: 0 });
        } else {
          const f = document.getElementById('tu-van-mien-phi');
          if (f) f.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  function openCompareModal() {
    if (selected.size < 2) return;
    renderCompareTable();
    const modal = document.getElementById('xl-compare-overlay');
    if (modal) {
      modal.classList.add('is-open');
      document.documentElement.style.overflow = 'hidden';
      emit('compare_open', [...selected].join(','));
    }
  }

  function updateCompare(){
    const tray = document.getElementById('compare-tray');
    if (tray) {
      tray.hidden = selected.size === 0;
      document.getElementById('compare-count').textContent = selected.size + '/3 cấu hình đã chọn';
      const openBtn = document.getElementById('open-compare');
      if (openBtn) {
        openBtn.disabled = selected.size < 2;
        openBtn.textContent = selected.size < 2 ? 'Chọn thêm để so sánh' : 'Xem so sánh (' + selected.size + ')';
      }
    }
    $$('[data-compare]').forEach(i => i.checked = selected.has(i.dataset.compare));
  }

  $$('[data-compare]').forEach(i => i.addEventListener('change', () => {
    const p = byId.get(i.dataset.compare);
    if (i.checked && selected.size >= 3) {
      i.checked = false;
      toast('Chọn tối đa 3 cấu hình. Bỏ một cấu hình trước khi thêm.');
      return;
    }
    if (i.checked && selected.size && byId.get([...selected][0]).group !== p.group) {
      i.checked = false;
      toast('T10 là đèn phụ. Hãy so sánh các cấu hình cùng nhiệm vụ chiếu sáng.');
      return;
    }

    if (i.checked) {
      selected.add(p.id);
      updateCompare();
      emit('compare_select', p.id);
      // AUTO OPEN POPUP WHEN 2 PRODUCTS SELECTED (AS REQUESTED)
      if (selected.size >= 2) {
        openCompareModal();
      }
    } else {
      selected.delete(p.id);
      updateCompare();
      emit('compare_select', p.id);
      if (selected.size < 2) {
        closeCompareModal();
      } else {
        renderCompareTable();
      }
    }
  }));

  const btnOpenComp = document.getElementById('open-compare');
  if (btnOpenComp) {
    btnOpenComp.addEventListener('click', () => {
      if (selected.size >= 2) openCompareModal();
    });
  }

  const btnClearComp = document.getElementById('clear-compare');
  if (btnClearComp) {
    btnClearComp.addEventListener('click', () => {
      selected.clear();
      updateCompare();
      closeCompareModal();
    });
  }

  const compOverlay = document.getElementById('xl-compare-overlay');
  if (compOverlay) {
    compOverlay.addEventListener('click', e => {
      if (e.target === compOverlay) closeCompareModal();
    });
  }

  const btnCloseComp = document.getElementById('xl-compare-close');
  if (btnCloseComp) {
    btnCloseComp.addEventListener('click', closeCompareModal);
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('xl-compare-overlay');
      if (modal && modal.classList.contains('is-open')) {
        closeCompareModal();
      }
    }
  });

  const tips = {
    city: 'Ưu tiên kiểm tra vùng chiếu gần và độ chói ở chế độ Cos.',
    night: 'Kiểm tra cả Cos/Pha, vùng chiếu xa và khoảng tối; trao đổi thêm về Bi LED nếu thay bóng chưa đáp ứng.',
    rain: 'Đánh giá vùng sáng và phản xạ khi mặt đường ướt. Không chọn chỉ theo Kelvin.',
    issue: 'Cần kiểm tra lỗi điện trước khi chọn bóng: nguồn cấp, jack, điều khiển và cảnh báo taplo.',
    look: 'Cân nhắc màu ánh sáng sau khi đã xác nhận công năng, độ phù hợp và vùng sáng.'
  };

  const heroForm = $('#mid-sales-form');
  if (heroForm) heroForm.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const brand = $('#hero-car-brand')?.value || '',
          model = ($('#hero-car-model')?.value || '').trim(),
          year = $('#hero-car-year')?.value || '',
          trim = ($('#hero-trim')?.value || '').trim(),
          position = $('#hero-light-position')?.value || '',
          need = $('#hero-driving-need')?.value || '';
    if (!model && $('#hero-car-model')) {
      $('#hero-car-model').setCustomValidity('Vui lòng nhập dòng xe.');
      $('#hero-car-model').reportValidity();
      return;
    }
    const result = $('#hero-sales-result');
    if (result) {
      result.replaceChildren();
      result.classList.add('result-ready');
      result.append(el('strong', `${brand} ${model} · ${year}${trim ? ' · ' + trim : ''}`));
      result.append(el('p', need === 'issue' ? 'Ưu tiên kiểm tra lỗi điện trước khi nâng cấp.' : 'Thông tin để chuẩn bị buổi tư vấn; chưa xác nhận tương thích.'));
      if (!trim) result.append(el('p', 'Cần bổ sung phiên bản và loại cụm đèn đang dùng.'));
      if (position === 'unknown') result.append(el('p', 'Cần xác định vị trí đèn muốn thay trước khi chọn chân bóng.'));
      else if (position === 'fog') {
        const p = el('p', 'Đèn gầm cần phân biệt thay bóng trong cụm gầm với lắp Bi gầm. '),
              link = el('a', 'Xem tuyến Bi gầm');
        link.href = 'https://auto365.vn/nang-cap-anh-sang-bi-gam';
        p.append(link);
        result.append(p);
      } else if (position === 'aux') {
        result.append(el('p', 'Đèn phụ cần đúng vị trí và chuẩn chân. Không dùng danh mục đèn chính để suy ra tương thích.'));
      }
      if (tips[need]) result.append(el('p', tips[need]));
      result.append(el('p', 'Bước tiếp theo: xác nhận chân bóng, quang học, nắp chụp, khoảng hở và hệ điện; kiểm tra vùng sáng sau lắp.'));
      const link = el('a', 'Soạn yêu cầu tư vấn →', 'text-link');
      link.href = '#tu-van-mien-phi';
      result.append(link);
      result.focus({ preventScroll: true });
    }
    if ($('#mid-brand') && brand) $('#mid-brand').value = brand;
    if ($('#mid-model') && model) $('#mid-model').value = model + (trim ? ' ' + trim : '');
    if ($('#mid-year') && year) $('#mid-year').value = year;
    emit('fit_check');
  });
 $('#hero-car-model')?.addEventListener('input',e=>e.target.setCustomValidity(''));
 $('#mid-sales-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const phoneInput = $('#mid-phone');
  const phone = phoneInput ? phoneInput.value.trim() : '';
  if (!/^0(3|5|7|8|9)\d{8}$/.test(phone) && !/^[+\d\s().-]{8,20}$/.test(phone)) {
    if (phoneInput) {
      phoneInput.setCustomValidity('Vui lòng nhập đúng số điện thoại (ví dụ: 0912345678).');
      phoneInput.reportValidity();
    }
    return;
  }

  const name = ($('#mid-name')?.value || '').trim();
  const brand = ($('#mid-brand')?.value || '').trim();
  const model = ($('#mid-model')?.value || '').trim();
  const province = ($('#mid-province')?.value || '').trim();
  const need = ($('#mid-need')?.value || '').trim();

  const leadId = 'LED-' + Date.now().toString(36).toUpperCase();
  const carText = [brand, model].filter(Boolean).join(' ') || 'Chưa rõ';
  const submitBtn = document.getElementById('mid-submit-btn');
  const statusEl = document.getElementById('mid-lead-status');
  if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Đang gửi yêu cầu…'; }

  const lines = [
    'Xin chào Auto365, tôi muốn nhận tư vấn bóng LED ô tô:',
    name ? '• Khách hàng: ' + name : '',
    phone ? '• Số điện thoại: ' + phone : '',
    carText ? '• Dòng xe: ' + carText : '',
    province ? '• Khu vực/Tỉnh thành: ' + province : '',
    need ? '• Nhu cầu: ' + need : '',
    'Mã yêu cầu: ' + leadId,
    'Nhờ chuyên viên kiểm tra chân bóng, chuẩn cụm đèn và báo giá phù hợp.'
  ].filter(Boolean).join('\n');

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(lines).catch(() => {});
  }

  // Submit via API
  const apiPayload = {
    fullname: name,
    phone: phone,
    car_model: carText,
    province: province,
    priority: need || 'Tư vấn bóng LED theo xe',
    service: 'Bóng LED ô tô',
    source_page: 'bong-led',
    source_url: window.location.href,
    lead_id: leadId,
    note: lines
  };

  sendAuto365LeadApi(apiPayload, leadId).then(res => {
    if (res.success !== true || typeof res.lead_id !== 'string' || !res.lead_id.trim()) {
      throw new Error('lead_not_confirmed');
    }
    if (submitBtn) { submitBtn.textContent = 'Đã gửi yêu cầu thành công ✓'; submitBtn.style.background = '#10b981'; }
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.style.color = '#10b981';
      statusEl.innerHTML = 'Auto365 đã tiếp nhận yêu cầu. Mã lead: <strong>' + res.lead_id + '</strong>. Chuyên viên sẽ liên hệ lại ngay.';
    }
    toast('Đã gửi yêu cầu tư vấn thành công!');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'lead_form_submit', form_source: 'bong-led-mid', lead_id: res.lead_id });
  }).catch((err) => {
    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Gửi lại yêu cầu tư vấn'; }
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.style.color = '#e31b2d';
      statusEl.innerHTML = 'Gửi yêu cầu không thành công do kết nối. Vui lòng thử lại hoặc gọi Hotline <strong>0365 365 911</strong> để được tư vấn ngay.';
    }
  });

  emit('consult_submit', { form_source: 'bong-led-mid' });
});
$('#mid-phone').addEventListener('input', e => e.target.setCustomValidity(''));
 $('#menu-toggle').addEventListener('click',()=>{const menu=$('#mobile-nav');menu.hidden=!menu.hidden;$('#menu-toggle').setAttribute('aria-expanded',String(!menu.hidden));});
 $$('#mobile-nav a').forEach(link=>link.addEventListener('click',()=>{$('#mobile-nav').hidden=true;$('#menu-toggle').setAttribute('aria-expanded','false');}));
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!$('#mobile-nav').hidden){$('#mobile-nav').hidden=true;$('#menu-toggle').setAttribute('aria-expanded','false');$('#menu-toggle').focus();}});
 $$('a[href^="tel:"]').forEach(link=>link.addEventListener('click',()=>emit('phone_click')));
 $$('a[href^="https://zalo.me/"]').forEach(link=>link.addEventListener('click',()=>emit('zalo_click')));
 updateShop();updateCompare();
})();
