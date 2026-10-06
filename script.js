const fs = require('fs');
let html = fs.readFileSync('auto365/bi-gam/vinfast-vf3/index.html', 'utf8');

// 1. Hide #vf3lp-all
html = html.replace('<section data-reveal class="vf3lp-band" id="vf3lp-all">', '<section data-reveal class="vf3lp-band" id="vf3lp-all" style="display:none;">');

// 2. Video section (make it larger)
let vidStart = html.indexOf('<h2 id="vf3lp-vd"');
if (vidStart > -1) {
    let sectionStart = html.lastIndexOf('<section', vidStart);
    let sectionEnd = html.indexOf('</section>', vidStart) + 10;
    
    let newVideoBlock = 
<section data-reveal class="vf3lp-band vf3lp-band--soft">
<div class="vf3lp-in">
<div class="vf3lp-head" style="justify-content:center; text-align:center;">
<h2 id="vf3lp-vd" class="vf3lp-h2" style="margin-bottom:0; font-size: 2.5rem;">Video thi công VF3 thực tế</h2>
</div>
<div class="vf3lp-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 450px), 1fr)); gap: 40px; max-width: 1200px; margin: 0 auto;">
<button type="button" class="vf3lp-card vf3lp-video" data-action="vf3lp-video" data-yt="Aa0Of6ZtxEE" data-tieu-de="VinFast VF3 lắp GTR G1 Turbo V2 tại Auto365" data-trang="/video-vinfast-vf3-lap-bi-gam-g1-turbo-v2-di-dem-mua"><span class="vf3lp-thumb"><img src="https://auto365.vn/uploads/images/video/2026/09/vinfast-vf3-lap-bi-gam-g1-turbo-v2-di-dem-mua.jpg" alt="Vinfast Vf3 Lap Bi Gam G1 Turbo V2 Di Dem Mua" loading="lazy" width="640" height="360" style="width: 100%; height: auto;"><span class="vf3lp-play" aria-hidden="true"></span></span><span class="vf3lp-body"><span class="vf3lp-card-title" style="font-size: 1.25rem; font-weight: normal;">VinFast VF3 lắp GTR G1 Turbo V2 tại Auto365</span></span></button>
<button type="button" class="vf3lp-card vf3lp-video" data-action="vf3lp-video" data-yt="weADPByfN7g" data-tieu-de="Tiêu chí chọn bi gầm: VF3 lắp G1 Turbo V2" data-trang="/video-tieu-chi-chon-bi-gam-o-to-thuc-te-vinfast-vf3-g1-turbo-v2"><span class="vf3lp-thumb"><img src="https://auto365.vn/uploads/images/video/2026/09/tieu-chi-chon-bi-gam-o-to-thuc-te-vinfast-vf3-g1-turbo-v2.jpg" alt="Tieu Chi Chon Bi Gam O To Thuc Te Vinfast Vf3 G1 Turbo V2" loading="lazy" width="640" height="360" style="width: 100%; height: auto;"><span class="vf3lp-play" aria-hidden="true"></span></span><span class="vf3lp-body"><span class="vf3lp-card-title" style="font-size: 1.25rem; font-weight: normal;">Tiêu chí chọn bi gầm: VF3 lắp G1 Turbo V2</span></span></button>
</div>
</div>
</section>
.trim();
    let originalVideoBlock = html.substring(sectionStart, sectionEnd);
    html = html.replace(originalVideoBlock, newVideoBlock);
}

// 3. Update "Giá và phạm vi chi phí" and "Khi nào cần kiểm tra xe"
let giaStart = html.indexOf('<h2 id="vf3lp-gia"');
let ktStart = html.indexOf('<h2 id="vf3lp-kt"');
if (giaStart > -1 && ktStart > -1) {
    let s1 = html.lastIndexOf('<section', giaStart);
    let e1 = html.indexOf('</section>', giaStart) + 10;
    let s2 = html.lastIndexOf('<section', ktStart);
    let e2 = html.indexOf('</section>', ktStart) + 10;
    
    let chunk1 = html.substring(s1, e1);
    let chunk2 = html.substring(s2, e2);
    
    let giaInner = chunk1.replace(/<section[^>]*>\s*<div class="vf3lp-in">([\s\S]*?)<\/div>\s*<\/section>/, '');
    let ktInner = chunk2.replace(/<section[^>]*>\s*<div class="vf3lp-in">([\s\S]*?)<\/div>\s*<\/section>/, '');
    
    let combined = \
<section data-reveal class="vf3lp-band">
<div class="vf3lp-in">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)); gap: 32px; align-items: start;">
    <div style="background: #fff; padding: 24px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">\</div>
    <div style="background: #fff; padding: 24px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">\</div>
  </div>
</div>
</section>
\;
    html = html.replace(chunk1 + "\\n  " + chunk2, combined);
    html = html.replace(chunk1 + "\\r\\n  " + chunk2, combined);
    html = html.replace(chunk1 + "\\n" + chunk2, combined);
    html = html.replace(chunk1 + "\\r\\n" + chunk2, combined);
    if(html.indexOf(combined) === -1) {
        html = html.replace(chunk1, combined);
        html = html.replace(chunk2, "");
    }
}

// 4. Update FAQ
let faqStart = html.indexOf('<h2 id="vf3lp-faq"');
if (faqStart > -1) {
    let sFaq = html.lastIndexOf('<section', faqStart);
    let eFaq = html.indexOf('</section>', faqStart) + 10;
    let originalFaq = html.substring(sFaq, eFaq);
    
    let newFaq = \
<section data-reveal class="vf3lp-band">
<div class="vf3lp-in">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)); gap: 32px; align-items: start;">
    <div>
      <div class="vf3lp-head">
        <h2 class="vf3lp-h2">Tất cả bài viết về bi gầm VinFast VF3</h2>
      </div>
      <div class="vf3lp-articles" style="display: flex; flex-direction: column; gap: 16px;">
        <a href="https://v2.auto365.vn/tin-tuc" style="display: flex; gap: 16px; text-decoration: none; color: inherit; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <div style="flex: 1;">
            <h3 style="margin: 0 0 8px; font-size: 16px; font-weight: 600; color: #0f172a;">Kinh nghiệm nâng cấp ánh sáng VinFast VF3 chi tiết</h3>
            <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.5;">Tổng hợp các lưu ý quan trọng khi độ đèn cho VF3, từ việc chọn cấu hình bi gầm, bi LED, giá bán tham khảo đến các lưu ý về đăng kiểm.</p>
          </div>
        </a>
        <a href="https://v2.auto365.vn/bang-gia-do-den-o-to" style="display: flex; gap: 16px; text-decoration: none; color: inherit; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <div style="flex: 1;">
            <h3 style="margin: 0 0 8px; font-size: 16px; font-weight: 600; color: #0f172a;">Bảng giá độ đèn ô tô mới nhất tại Auto365</h3>
            <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.5;">Tham khảo bảng giá và thông số kỹ thuật các dòng bi gầm, bi LED phổ biến trên thị trường được Auto365 phân phối chính hãng.</p>
          </div>
        </a>
        <a href="https://v2.auto365.vn/tin-tuc?q=VinFast+VF3" style="display: flex; gap: 16px; text-decoration: none; color: inherit; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <div style="flex: 1;">
            <h3 style="margin: 0 0 8px; font-size: 16px; font-weight: 600; color: #0f172a;">Xem thêm các bài viết về nâng cấp VinFast VF3</h3>
            <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.5;">Khám phá bộ sưu tập tin tức, bài viết đánh giá và kinh nghiệm thực tế về nâng cấp phụ kiện cho dòng xe điện mini VinFast VF3.</p>
          </div>
        </a>
      </div>
    </div>
    
    <div>
      <div class="vf3lp-head">
        <h2 id="vf3lp-faq" class="vf3lp-h2">Câu hỏi thường gặp</h2>
      </div>
      <div class="vf3lp-faq" style="display: flex; flex-direction: column; gap: 8px;">
        <details style="background: #f8fafc; padding: 12px 16px; border-radius: 8px;"><summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; font-weight: 600;"><span>VinFast VF3 có lắp bi gầm được không?</span><svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="min-width:20px"><path d="M6 9l6 6 6-6"/></svg></summary><p style="margin-top: 8px; color: #475569;">Có thể xem xét lắp bi gầm cho VF3, nhưng cần kiểm tra vị trí lắp, pát/mặt dưỡng, phương án điện và khả năng căn chỉnh trước khi chốt sản phẩm.</p></details>
        <details style="background: #f8fafc; padding: 12px 16px; border-radius: 8px;"><summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; font-weight: 600;"><span>Bi gầm VF3 khác gì nâng bi LED đèn chính?</span><svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="min-width:20px"><path d="M6 9l6 6 6-6"/></svg></summary><p style="margin-top: 8px; color: #475569;">Bi gầm bổ sung vùng sáng gần mặt đường và hai bên lề; đèn chính phục vụ tầm chiếu xa. Nếu nhu cầu là nhìn xa hơn, kỹ thuật viên sẽ tư vấn theo hướng nâng đèn chính.</p></details>
        <details style="background: #f8fafc; padding: 12px 16px; border-radius: 8px;"><summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; font-weight: 600;"><span>Nên chọn GTR hay X-Light cho VF3?</span><svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="min-width:20px"><path d="M6 9l6 6 6-6"/></svg></summary><p style="margin-top: 8px; color: #475569;">GTR G1 Turbo V2 đang có case VF3 công khai. X-Light cần đối chiếu hồ sơ kỹ thuật hoặc kiểm tra xe trước khi chốt cấu hình cụ thể.</p></details>
        <details style="background: #f8fafc; padding: 12px 16px; border-radius: 8px;"><summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; font-weight: 600;"><span>Việc kiểm định/đăng kiểm cần lưu ý gì?</span><svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="min-width:20px"><path d="M6 9l6 6 6-6"/></svg></summary><p style="margin-top: 8px; color: #475569;"><strong>Điều kỹ thuật cần kiểm tra:</strong> vị trí lắp, hướng chiếu, vùng sáng, độ cố định cụm đèn, cấu hình điện và kết cấu xe. <strong>Phạm vi pháp lý:</strong> đối chiếu quy định hiện hành áp dụng tại thời điểm kiểm tra.</p></details>
      </div>
    </div>
  </div>
</div>
</section>
\;
    html = html.replace(originalFaq, newFaq);
}

// Fix "VF3 nâng cấp bi gầm có gì cần biết?" alignment
let cbStart = html.indexOf('<h2 id="vf3lp-cb"');
if (cbStart > -1) {
    let gridStart = html.indexOf('class="vf3lp-grid"', cbStart);
    if(gridStart > -1 && gridStart < cbStart + 500) {
        // Find existing style if any
        let endQuote = html.indexOf('>', gridStart);
        let tag = html.substring(gridStart, endQuote);
        if(!tag.includes("grid-template-columns")) {
            html = html.substring(0, gridStart) + 'class="vf3lp-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr)); gap: 24px; align-items: stretch;"' + html.substring(gridStart + 18);
        }
    }
}

// 5. Replace Xe thực tế H2, make titles normal font weight, add model name.
// First change the H2
html = html.replace('<h2 id="vf3lp-case" class="vf3lp-h2">Xe thực tế <span class="vf3lp-hl">nổi bật</span></h2>', '<h2 id="vf3lp-case" class="vf3lp-h2">Xe VinFast lắp đèn gầm tại Auto365</h2>');
// Then the user said "thêm tên dòng xe, fix lại màu chữ chứu đậm và thô quá"
// I will just use standard CSS to target the h3 inside vf3lp-card if it's the case block, or globally.
// Actually, it's easier to just add a style block at the top for .vf3lp-card h3 { font-weight: normal; font-size: 1rem; color: #333; }
html = html.replace('</style>', '.vf3lp-card h3 { font-weight: 500; font-size: 1.1rem; color: #1e293b; }\n</style>');

fs.writeFileSync('auto365/bi-gam/vinfast-vf3/index.html', html);
console.log('Script done.');
