const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const oldCatch = `}).catch((err) => {
    isSubmitting = false;
    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Gửi lại yêu cầu tư vấn'; }
    if (statusEl) {
      statusEl.style.color = '#e31b2d';
      statusEl.textContent = 'Chưa xác nhận được việc tiếp nhận. Thông tin của bạn vẫn được giữ trên trang; vui lòng thử lại hoặc liên hệ Auto365 qua hotline/Zalo.';
    }
  });`;

const newCatch = `}).catch((err) => {
    isSubmitting = false;
    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Gửi lại yêu cầu tư vấn'; }
    if (statusEl) {
      statusEl.style.color = '#e31b2d';
      if (err.message === 'LEAD_ENDPOINT_NOT_CONFIGURED') {
        statusEl.innerHTML = 'Bản xem trước chưa tiếp nhận yêu cầu qua biểu mẫu. Bạn có thể gọi hoặc gửi thông tin qua Zalo để được tư vấn.';
      } else {
        statusEl.textContent = 'Chưa xác nhận được việc tiếp nhận. Thông tin của bạn vẫn được giữ trên trang; vui lòng thử lại hoặc liên hệ Auto365 qua hotline/Zalo.';
      }
    }
  });`;

html = html.replace(oldCatch, newCatch);
fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log("Updated catch block text for preview environment.");
