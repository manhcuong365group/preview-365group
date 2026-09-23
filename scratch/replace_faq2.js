const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

const newFaq = '<div class="faq-grid" id="faq-grid">\n' +
'    <details class="faq-item">\n' +
'      <summary><span>Bóng LED X-Light giá bao nhiêu?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>\n' +
'      <p>Trong danh m?c d?i chi?u, dòng X-Light S3 Pro V2 t? 1.500.000 d?ng/b?, X-Light S6 Pro V2 t? 2.000.000 d?ng/b?; b?n H4 có giá riêng. Ðây là giá s?n ph?m; VAT, công l?p và ph? ki?n c?n xem theo t?ng c?u hình và báo giá th?c t? t?i h? th?ng.</p>\n' +
'    </details>\n' +
'    <details class="faq-item">\n' +
'      <summary><span>Bóng LED X-Light có l?p du?c cho m?i dòng xe không?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>\n' +
'      <p>Không. Dù X-Light h? tr? da d?ng chân c?m (H4, H7, H11, 9005...), nhung v?n c?n xác nh?n d?i, phiên b?n, c?m dèn; sau dó ki?m tra kho?ng h?, h? di?n và vùng sáng sau l?p. Cùng tên xe chua d? d? k?t lu?n phù h?p 100%.</p>\n' +
'    </details>\n' +
'    <details class="faq-item">\n' +
'      <summary><span>Các dòng bóng LED X-Light t?i Auto365 có gì khác bi?t?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>\n' +
'      <p>X-Light có các phân khúc t?i uu riêng: Dòng S3 Pro V2 t?i uu chi phí thay th? bóng Halogen d? di ph?; dòng S6 Pro V2 tang cu?ng công su?t và gom sáng xa hon cho du?ng cao t?c. Hãy ch?n c?u hình theo nhu c?u di chuy?n th?c t? c?a b?n.</p>\n' +
'    </details>\n' +
'    <details class="faq-item">\n' +
'      <summary><span>Thay bóng LED X-Light có ch?c d?t ki?m d?nh (dang ki?m) không?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>\n' +
'      <p>Không th? xác nh?n k?t qu? ki?m d?nh ch? t? tên bóng. Tru?c khi thay d?i c?u hình c?m dèn chi?u sáng, hãy trao d?i tr?c ti?p v?i co s? ki?m d?nh v? phuong án c? th? và các yêu c?u dang áp d?ng hi?n hành.</p>\n' +
'    </details>\n' +
'    <details class="faq-item">\n' +
'      <summary><span>B?o hành bóng LED X-Light có bao g?m công l?p không?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>\n' +
'      <p>S?n ph?m X-Light du?c b?o hành chính hãng 24 tháng. Tuy nhiên, b?o hành thi?t b? và trách nhi?m ph?n thi công (công l?p) c?n du?c xác nh?n riêng. Hãy h?i rõ th?i h?n, ph?m vi và ch?ng t? t?i chi nhánh Auto365 ti?p nh?n.</p>\n' +
'    </details>\n' +
'    <details class="faq-item">\n' +
'      <summary><span>C?n cung c?p thông tin gì d? Auto365 tu v?n bóng LED X-Light chu?n nh?t?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>\n' +
'      <p>Vui lòng g?i hãng, dòng xe, nam s?n xu?t, phiên b?n, v? trí dèn và mong mu?n c?i thi?n. N?u có th? ch?p an toàn, thêm ?nh m?t dèn, nhãn/chân bóng và phía sau n?p ch?p d? k? thu?t viên tu v?n mã X-Light chính xác nh?t.</p>\n' +
'    </details>\n' +
'  </div>';

const gridOnlyRegex = /<div class="faq-grid" id="faq-grid">[\s\S]*?<\/div>\s*(?:<div class="faq-toggle-wrap">[\s\S]*?<\/div>)?/;
html = html.replace(gridOnlyRegex, newFaq);

fs.writeFileSync(file, html);
console.log('FAQ replaced.');
