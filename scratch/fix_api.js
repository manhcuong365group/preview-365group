const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

// Replace the API promise handling block
const oldApiRegex = /sendAuto365LeadApi\(apiPayload, leadId\)\.then\(res => \{[\s\S]*?\}\);/g;

const newApiCode = `sendAuto365LeadApi(apiPayload, leadId).then(res => {
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
  });`;

html = html.replace(oldApiRegex, newApiCode);

// Also remove PII from consult_submit emit
const oldEmitRegex = /emit\('consult_submit', \{ name, phone, brand, model, province, need, leadId \}\);/g;
html = html.replace(oldEmitRegex, "emit('consult_submit', { form_source: 'bong-led-mid' });");

fs.writeFileSync(file, '\ufeff' + (html.charCodeAt(0) === 0xFEFF ? html.slice(1) : html), 'utf8');
console.log('Fixed API fake success.');
