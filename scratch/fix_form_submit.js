const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const oldApiRegex = /async function sendAuto365LeadApi.*?catch\(err\) \{.*?\}\n  \}/s;
const newApi = `async function sendAuto365LeadApi(payload, requestId) {
  const endpoint = window.AUTO365_LED_CONFIG?.leadEndpoint || '/api/leads/lighting';
  if (typeof endpoint !== 'string' || !endpoint.trim()) {
    throw new Error('LEAD_ENDPOINT_NOT_CONFIGURED');
  }
  if (typeof requestId !== 'string' || !requestId.trim()) {
    throw new Error('REQUEST_ID_REQUIRED');
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10000);
  try {
    const body = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (key !== 'lead_id' && key !== 'request_id' && value != null) {
        body.append(key, String(value));
      }
    });
    body.append('request_id', requestId);

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'X-Idempotency-Key': requestId
      },
      body,
      signal: controller.signal
    });
    if (response.status !== 200) {
      throw new Error('LEAD_HTTP_' + response.status);
    }
    const result = await response.json();
    if (!result || result.success !== true ||
        typeof result.lead_id !== 'string' || !result.lead_id.trim()) {
      throw new Error('LEAD_NOT_CONFIRMED');
    }
    return { success: true, lead_id: result.lead_id.trim() };
  } finally {
    clearTimeout(timer);
  }
}`;

html = html.replace(oldApiRegex, newApi);

// Let's replace the form listener
const oldFormStart = html.indexOf("$('#mid-sales-form').addEventListener('submit'");
const oldFormEnd = html.indexOf("$('#mid-phone').addEventListener('input'", oldFormStart);

const oldFormCode = html.substring(oldFormStart, oldFormEnd);

const newFormCode = `let currentRequestId = null;
let currentPayloadStr = null;
let isSubmitting = false;

$('#mid-sales-form').addEventListener('submit', event => {
  event.preventDefault();
  if (isSubmitting) return;

  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const phoneInput = $('#mid-phone');
  const phone = phoneInput ? phoneInput.value.trim() : '';
  if (!/^0(3|5|7|8|9)\\d{8}$/.test(phone) && !/^[+\\d\\s().-]{8,20}$/.test(phone)) {
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

  const carText = [brand, model].filter(Boolean).join(' ') || 'Chưa rõ';

  const payload = {
    fullname: name,
    phone: phone,
    car_model: carText,
    province: province,
    priority: need || 'Tư vấn bóng LED theo xe',
    service: 'Bóng LED ô tô',
    source_page: 'bong-led',
    source_url: window.location.href
  };
  
  const newPayloadStr = JSON.stringify(payload);
  if (newPayloadStr !== currentPayloadStr || !currentRequestId) {
    currentPayloadStr = newPayloadStr;
    currentRequestId = 'REQ-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2,6).toUpperCase();
  }

  const submitBtn = document.getElementById('mid-submit-btn');
  const statusEl = document.getElementById('mid-lead-status');
  
  isSubmitting = true;
  if (submitBtn) { 
    submitBtn.disabled = true; 
    submitBtn.textContent = 'Đang gửi yêu cầu…'; 
  }
  if (statusEl) {
    statusEl.style.display = 'block';
    statusEl.style.color = '#475569';
    statusEl.textContent = 'Đang gửi yêu cầu…';
  }

  sendAuto365LeadApi(payload, currentRequestId).then(res => {
    isSubmitting = false;
    if (res.success !== true || typeof res.lead_id !== 'string' || !res.lead_id.trim()) {
      throw new Error('lead_not_confirmed');
    }
    if (submitBtn) { submitBtn.textContent = 'Đã gửi yêu cầu thành công ✓'; submitBtn.style.background = '#10b981'; }
    if (statusEl) {
      statusEl.style.color = '#10b981';
      statusEl.textContent = 'Auto365 đã tiếp nhận yêu cầu. Mã tiếp nhận: ' + res.lead_id;
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'lead_form_submit', form_source: 'bong-led-mid', lead_id: res.lead_id });
  }).catch((err) => {
    isSubmitting = false;
    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Gửi lại yêu cầu tư vấn'; }
    if (statusEl) {
      statusEl.style.color = '#e31b2d';
      statusEl.textContent = 'Chưa xác nhận được việc tiếp nhận. Thông tin của bạn vẫn được giữ trên trang; vui lòng thử lại hoặc liên hệ Auto365 qua hotline/Zalo.';
    }
  });
});
`;

html = html.replace(oldFormCode, newFormCode);
fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Replaced form submit code.");
