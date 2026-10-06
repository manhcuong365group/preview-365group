const fs = require('fs');
const path = 'auto365/bi-gam/vinfast-vf3/index.html';
let content = fs.readFileSync(path, 'utf8');

// Replace "Vì sao nên độ bi gầm tại Auto365?" block
const viSaoRegex = /<section data-reveal class="vf3lp-band vf3lp-band--soft">\s*<div class="vf3lp-in">\s*<div class="vf3lp-head">\s*<h2 class="vf3lp-h2">Vì sao nên độ bi gầm tại Auto365\?<\/h2>[\s\S]*?<\/section>/;

const newHoTroBlock = `<section data-reveal class="vf3lp-band vf3lp-band--soft">
  <div class="vf3lp-in">
    <div class="vf3lp-head">
      <h2 class="vf3lp-h2">Hỗ trợ khi lắp tại Auto365</h2>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background: #fff;">
      <div style="padding: 24px; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; display: flex; gap: 16px;">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #fee2e2; color: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div>
          <h3 style="margin: 0 0 8px; font-size: 15px; color: #1e293b;">Kiểm tra xe tại chi nhánh</h3>
          <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.5;">Kiểm tra hốc đèn, điện áp và hệ điện trực tiếp tại điểm gần bạn, thay vì tư vấn chung qua ảnh minh họa.</p>
        </div>
      </div>
      <div style="padding: 24px; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; display: flex; gap: 16px;">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #fee2e2; color: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
        </div>
        <div>
          <h3 style="margin: 0 0 8px; font-size: 15px; color: #1e293b;">Kỹ thuật viên trực tiếp thi công</h3>
          <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.5;">Lắp và căn chỉnh vùng sáng theo từng xe, không rập khuôn giữa các đời/phiên bản.</p>
        </div>
      </div>
      <div style="padding: 24px; border-bottom: 1px solid #e2e8f0; display: flex; gap: 16px;">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #fee2e2; color: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
        </div>
        <div>
          <h3 style="margin: 0 0 8px; font-size: 15px; color: #1e293b;">Giá tách bạch từng hạng mục</h3>
          <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.5;">Sản phẩm, pát, dây/relay, công lắp và VAT được báo riêng trước khi thi công.</p>
        </div>
      </div>
      <div style="padding: 24px; border-right: 1px solid #e2e8f0; display: flex; gap: 16px;">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #fee2e2; color: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </div>
        <div>
          <h3 style="margin: 0 0 8px; font-size: 15px; color: #1e293b;">Hậu mãi sau lắp đặt</h3>
          <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.5;">Phiếu bàn giao và kênh tra cứu bảo hành riêng; căn chỉnh lại nếu sai lệch trong thời hạn bảo hành.</p>
        </div>
      </div>
      <div style="padding: 24px; border-right: 1px solid #e2e8f0; display: flex; gap: 16px;">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #fee2e2; color: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <div>
          <h3 style="margin: 0 0 8px; font-size: 15px; color: #1e293b;">Bảo hành theo từng mã sản phẩm</h3>
          <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.5;">Thời hạn, phạm vi và điểm tiếp nhận được xác nhận trên chính sách áp dụng và phiếu bàn giao.</p>
        </div>
      </div>
      <div style="padding: 24px; display: flex; gap: 16px;">
        <div style="flex-shrink: 0; width: 40px; height: 40px; background: #fee2e2; color: #dc2626; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
        </div>
        <div>
          <h3 style="margin: 0 0 8px; font-size: 15px; color: #1e293b;">Các hạng mục nâng cấp khác</h3>
          <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.5;">Camera hành trình và một số hạng mục nâng cấp khác tại cùng hệ thống chi nhánh.</p>
        </div>
      </div>
    </div>
  </div>
</section>`;

if (!content.match(viSaoRegex)) {
    console.error("Vì sao nên độ bi gầm tại Auto365 block not found!");
} else {
    content = content.replace(viSaoRegex, newHoTroBlock);
}

fs.writeFileSync(path, content, 'utf8');
console.log("Replaced Hỗ trợ block");
