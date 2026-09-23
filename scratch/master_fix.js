const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

// 1. VF5
html = html.replace(/VF5 Plus \u00B7 H7/g, 'VF5 Plus');
html = html.replace(/hồ sơ VF5 Plus dùng phiên bản H7 để tham khảo/g, 'hồ sơ thi công VF5 Plus thực tế để tham khảo');
html = html.replace(/hồ sơ VF5 Plus H7/g, 'hồ sơ VF5 Plus');

// 2. Extract Base64
let count = 0;
const b64regex = /<img([^>]+)src="data:image\/[^;]+;base64,([^"]+)"([^>]*)>/g;
html = html.replace(b64regex, function(m, p1, p2, p3) {
    count++;
    const ext = m.match(/data:image\/([^;]+);/)[1];
    const filename = 'extracted_image_' + count + '.' + ext;
    return '<img' + p1 + 'src="../_src-media/' + filename + '"' + p3 + '>';
});

// 3. CTA
html = html.replace(/#hero-sales-form/g, '#mid-sales-form');

// 4. Remove 'Giá giữa các cấu hình...'
html = html.replace(/Giá giữa các cấu hình có thể khác nhau\./g, '');
html = html.replace(/<p class="small"><\/p>/g, '');

// 5. Title & Badge & Buttons
html = html.replace('<h2 class="headline"><span class="headline-line">Auto365.vn</span><span class="red">Trụ Sở Chính</span></h2>', '<h2 class="headline">Auto365.vn <span class="red">- Trụ sở chính</span></h2>');
html = html.replace('<span class="map-badge">Auto365 Trụ Sở Chính</span>', '');
html = html.replace(/\.headline-line\s*\{\s*display:\s*block;\s*\}/g, '');
html = html.replace(/\.headline\s*\.red\s*\{\s*display:\s*block;\s*color:\s*#ef2326;\s*\}/g, '.headline .red { color: #ef2326; }');
html = html.replace(/\.btn-zalo\s*\{[\s\S]*?\}/, '.btn-zalo {\\n  color: #176bc9 !important;\\n  border: 1px solid #dce4ea !important;\\n  background: #fff !important;\\n}');
html = html.replace(/\.btn-map\s*\{[\s\S]*?\}/, '.btn-map {\\n  color: #ef2326 !important;\\n  border: 1px solid #dce4ea !important;\\n  background: #fff !important;\\n}');

// 6. Hide shop-count & move select
html = html.replace('<span class="shop-count" id="shop-count" role="status" aria-live="polite">27 cấu hình sản phẩm</span>', '<span class="shop-count" id="shop-count" role="status" aria-live="polite" style="display: none !important;">27 cấu hình sản phẩm</span>');

const selectHtml = '<select aria-label="Sắp xếp sản phẩm" class="shop-sort" id="shop-sort"><option value="default">Theo danh mục</option><option value="asc">Giá thấp đến cao</option><option value="desc">Giá cao đến thấp</option><option value="name">Tên A–Z</option></select>';
html = html.replace(selectHtml, '');

const miniRow = '<div class="mini-filter-row" aria-label="Chọn nhanh chân bóng"><button type="button" class="mini-pill active" data-quick="all" aria-pressed="true">Tất cả</button><button type="button" class="mini-pill" data-quick="h4" aria-pressed="false">H4</button><button type="button" class="mini-pill" data-quick="h7" aria-pressed="false">H7</button><button type="button" class="mini-pill" data-quick="h11" aria-pressed="false">H11</button><a class="mini-pill" href="#bang-gia">Bảng giá &amp; chi phí</a></div>';
const newMiniRow = '<div class="mini-filter-row" aria-label="Bộ công cụ sản phẩm" style="justify-content: space-between;"><div style="display: flex; gap: 8px; flex-wrap: wrap;"><button type="button" class="mini-pill active" data-quick="all" aria-pressed="true">Tất cả</button><button type="button" class="mini-pill" data-quick="h4" aria-pressed="false">H4</button><button type="button" class="mini-pill" data-quick="h7" aria-pressed="false">H7</button><button type="button" class="mini-pill" data-quick="h11" aria-pressed="false">H11</button><a class="mini-pill" href="#bang-gia">Bảng giá &amp; chi phí</a></div>' + selectHtml + '</div>';
html = html.replace(miniRow, newMiniRow);

html = html.replace('<div class="shop-toolbar">', '<div class="shop-toolbar" style="display: none !important;">');

// 7. FAQ Grid CSS 1 column
const cssFind = '.faq-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px 18px; align-items: start; margin-top: 14px; }';
const cssReplace = '.faq-grid { display: grid; grid-template-columns: 1fr; gap: 12px; align-items: start; margin-top: 14px; }';
html = html.replace(cssFind, cssReplace);

// 8. FAQ Content
const newFaq = \<div class="faq-grid" id="faq-grid">
    <details class="faq-item">
      <summary><span>Bóng LED X-Light có tích hợp chung cả Pha (chiếu xa) và Cos (chiếu gần) không?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>
      <p>Tùy thuộc vào chuẩn chân bóng của xe. Với chân H4, bóng LED X-Light đã tích hợp sẵn cả 2 chế độ Pha và Cos. Đối với các xe dùng chóa đèn tách biệt (ví dụ chân H7 cho Cos và 9005 cho Pha), bạn sẽ cần nâng cấp riêng từng vị trí. Auto365 sẽ xác nhận cấu hình chóa đèn trước khi tư vấn.</p>
    </details>
    <details class="faq-item">
      <summary><span>Ánh sáng 6000K của X-Light S6 Pro V2 đi mưa và sương mù có tốt không?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>
      <p>Nhiệt màu 6000K (trắng hiện đại) cho tầm nhìn cực tốt trong đô thị và thời tiết khô ráo. Tuy nhiên, nếu bạn thường xuyên đi đèo núi, sương mù hay mưa lớn, ánh sáng trắng sẽ dễ bị tán xạ. Lúc này, bạn nên tham khảo các dòng bóng có nhiệt màu 4300K (như S8 Pro) để tối ưu khả năng bám đường.</p>
    </details>
    <details class="faq-item">
      <summary><span>Sau này tôi có thể tự tháo bóng LED X-Light để về lại Halogen "zin" không?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>
      <p>Hoàn toàn được. Quá trình nâng cấp tại Auto365 sử dụng giắc cắm zin (Plug & Play) và không cắt chế chóa đèn. Nếu sau này cần bán xe hoặc về zin, kỹ thuật viên có thể dễ dàng tháo bóng LED và lắp lại Halogen nguyên bản mà không làm hỏng kết cấu.</p>
    </details>
    <details class="faq-item">
      <summary><span>Công suất bóng X-Light (55W-65W) có làm hao bình ắc-quy hoặc quá tải điện không?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>
      <p>Không. Công suất 55W-65W của bóng LED X-Light thực chất chỉ bằng hoặc thậm chí thấp hơn bóng Halogen nguyên bản (thường là 55W/60W). Do đó, máy phát và bình ắc-quy của xe hoàn toàn tải được ổn định mà không cần độ chế thêm rơ-le.</p>
    </details>
    <details class="faq-item">
      <summary><span>Tuổi thọ công bố là 30.000 giờ, tại sao X-Light chỉ bảo hành 24 tháng?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>
      <p>30.000 giờ là thời gian sáng lý tưởng của chip LED trong phòng thí nghiệm. Thực tế, bóng hoạt động trong khoang máy chịu nhiệt độ và độ rung lắc lớn. Bảo hành 24 tháng (1 đổi 1) là cam kết về chất lượng thực tế tốt nhất trên xe, tách biệt với tuổi thọ lý thuyết của linh kiện.</p>
    </details>
    <details class="faq-item">
      <summary><span>Thay bóng LED X-Light có chắc chắn 100% qua được đăng kiểm không?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>
      <p>Không thể cam kết 100% chỉ qua quảng cáo sản phẩm. Đăng kiểm phụ thuộc vào việc ánh sáng có gom đúng mặt cắt, không gây chói và đạt cường độ chuẩn. Auto365 hỗ trợ căn chỉnh đèn bằng máy laze chuyên dụng để đường cắt sáng chuẩn xác nhất, giúp tăng tối đa khả năng đáp ứng tiêu chuẩn kiểm định.</p>
    </details>
  </div>\;
const gridRegex = /<div class="faq-grid" id="faq-grid">[\\s\\S]*?<\\/div>\\s*<div class="faq-toggle-wrap">[\\s\\S]*?<\\/div>/;
html = html.replace(gridRegex, newFaq);

// 9. Update Sapo
const oldSapoRegex = /<p class="hero-lead">[\\s\\S]*?<\\/p>/;
const newSapo = \<p class="hero-lead">
        Bóng LED ô tô có nhiều cấu hình khác nhau về chân cắm (H1, H4, H7, H11, 9005...), công suất, nhiệt màu và điện áp. Thay vì chọn chỉ theo công suất, cần đối chiếu cấu hình xe, cấu tạo chóa đèn nguyên bản và khoảng hở nắp chụp tản nhiệt để xác định dòng bóng phù hợp, hỗ trợ gom sáng chuẩn và hạn chế chói mắt.
      </p>\;
html = html.replace(oldSapoRegex, newSapo);

// 10. Insert AEO Box
const aeoBox = \<section class="section compact" id="thong-tin-nhanh" aria-labelledby="thong-tin-nhanh-title">
  <div class="wrap">
    <div class="aeo-box" style="background: #f8f9fa; border-left: 4px solid #ef2326; padding: 20px; border-radius: 8px; margin-bottom: 12px; margin-top: 12px;">
      <h2 id="thong-tin-nhanh-title" style="font-size: 18px; margin-top: 0; margin-bottom: 12px;">Thông tin nhanh:</h2>
      <p style="margin-bottom: 12px;"><strong>Bóng LED ô tô</strong> (Light Emitting Diode) là giải pháp nâng cấp ánh sáng ứng dụng công nghệ diode phát quang. Việc thay thế bóng Halogen nguyên bản bằng bóng LED giúp hỗ trợ cải thiện tầm nhìn, tiết kiệm điện năng và mang lại diện mạo hiện đại hơn cho xe.</p>
      
      <h3 style="font-size: 16px; margin-bottom: 8px;">Ưu điểm kỹ thuật khi nâng cấp bóng LED:</h3>
      <ul style="margin-bottom: 16px; padding-left: 20px; line-height: 1.5;">
        <li style="margin-bottom: 6px;"><strong>Hiệu suất phát sáng:</strong> Cường độ sáng cao hơn so với Halogen truyền thống, hỗ trợ chiếu sáng rõ nét khu vực phía trước và các chướng ngại vật.</li>
        <li style="margin-bottom: 6px;"><strong>Tiết kiệm điện năng:</strong> Mức tiêu thụ điện thấp, giúp giảm tải cho hệ thống điện của xe.</li>
        <li><strong>Độ bền ổn định:</strong> Khả năng vận hành bền bỉ nhờ hệ thống tản nhiệt (quạt hoặc lưới tản nhiệt) được tích hợp trực tiếp trên thân bóng.</li>
      </ul>
      
      <h3 style="font-size: 16px; margin-bottom: 8px;">Lưu ý quan trọng khi chọn thay bóng LED (Cắm Jack Zin):</h3>
      <ul style="margin-bottom: 0; padding-left: 20px; line-height: 1.5;">
        <li style="margin-bottom: 6px;"><strong>Đúng chân cắm (Socket):</strong> Cần xác định chính xác loại chân cắm của xe (H1, H4, H7, H11, 9005, 9006...) để lắp đặt vừa vặn theo chuẩn cắm và chạy (Plug & Play) mà không cần độ chế.</li>
        <li style="margin-bottom: 6px;"><strong>Cấu tạo chóa đèn:</strong> Đối chiếu kỹ chóa phản xạ hoặc thấu kính nguyên bản để chọn loại bóng LED có thiết kế chip LED phù hợp, đảm bảo luồng sáng hội tụ, không gây chói cho xe ngược chiều.</li>
        <li><strong>Hệ điện (12V/24V):</strong> Ưu tiên chọn các mẫu bóng hỗ trợ đúng dải điện áp của xe (12V cho xe du lịch, 24V cho xe thương mại) để đảm bảo tuổi thọ thiết bị.</li>
      </ul>
    </div>
  </div>
</section>
\;

const splitRegex = /<\\/section>\\r?\\n?<div class="wrap quick-tabs">/;
html = html.replace(splitRegex, '</section>\\n' + aeoBox + '<div class="wrap quick-tabs">');

// Strip old BOM if any, and add explicit BOM
if(html.charCodeAt(0) === 0xFEFF) {
  html = html.slice(1);
}
fs.writeFileSync(file, '\\ufeff' + html, 'utf8');
console.log('Master fix completed.');
