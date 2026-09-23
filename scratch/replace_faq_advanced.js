const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

const newFaq = '<div class="faq-grid" id="faq-grid">\n' +
'    <details class="faq-item">\n' +
'      <summary><span>Bóng LED X-Light có tích h?p chung c? Pha (chi?u xa) và Cos (chi?u g?n) không?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>\n' +
'      <p>Tùy thu?c vào chu?n chân bóng c?a xe. V?i chân H4, bóng LED X-Light dã tích h?p s?n c? 2 ch? d? Pha và Cos. Ð?i v?i các xe dùng chóa dèn tách bi?t (ví d? chân H7 cho Cos và 9005 cho Pha), b?n s? c?n nâng c?p riêng t?ng v? trí. Auto365 s? xác nh?n c?u hình chóa dèn tru?c khi tu v?n.</p>\n' +
'    </details>\n' +
'    <details class="faq-item">\n' +
'      <summary><span>Ánh sáng 6000K c?a X-Light S6 Pro V2 di mua và suong mù có t?t không?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>\n' +
'      <p>Nhi?t màu 6000K (tr?ng hi?n d?i) cho t?m nhìn c?c t?t trong dô th? và th?i ti?t khô ráo. Tuy nhiên, n?u b?n thu?ng xuyên di dèo núi, suong mù hay mua l?n, ánh sáng tr?ng s? d? b? tán x?. Lúc này, b?n nên tham kh?o các dòng bóng có nhi?t màu 4300K (nhu S8 Pro) d? t?i uu kh? nang bám du?ng.</p>\n' +
'    </details>\n' +
'    <details class="faq-item">\n' +
'      <summary><span>Sau này tôi có th? t? tháo bóng LED X-Light d? v? l?i Halogen "zin" không?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>\n' +
'      <p>Hoàn toàn du?c. Quá trình nâng c?p t?i Auto365 s? d?ng gi?c c?m zin (Plug & Play) và không c?t ch? chóa dèn. N?u sau này c?n bán xe ho?c v? zin, k? thu?t viên có th? d? dàng tháo bóng LED và l?p l?i Halogen nguyên b?n mà không làm h?ng k?t c?u.</p>\n' +
'    </details>\n' +
'    <details class="faq-item">\n' +
'      <summary><span>Công su?t bóng X-Light (55W-65W) có làm hao bình ?c-quy ho?c quá t?i di?n không?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>\n' +
'      <p>Không. Công su?t 55W-65W c?a bóng LED X-Light th?c ch?t ch? b?ng ho?c th?m chí th?p hon bóng Halogen nguyên b?n (thu?ng là 55W/60W). Do dó, máy phát và bình ?c-quy c?a xe hoàn toàn t?i du?c ?n d?nh mà không c?n d? ch? thêm ro-le.</p>\n' +
'    </details>\n' +
'    <details class="faq-item">\n' +
'      <summary><span>Tu?i th? công b? là 30.000 gi?, t?i sao X-Light ch? b?o hành 24 tháng?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>\n' +
'      <p>30.000 gi? là th?i gian sáng lý tu?ng c?a chip LED trong phòng thí nghi?m. Th?c t?, bóng ho?t d?ng trong khoang máy ch?u nhi?t d? và d? rung l?c l?n. B?o hành 24 tháng (1 d?i 1) là cam k?t v? ch?t lu?ng th?c t? t?t nh?t trên xe, tách bi?t v?i tu?i th? lý thuy?t c?a linh ki?n.</p>\n' +
'    </details>\n' +
'    <details class="faq-item">\n' +
'      <summary><span>Thay bóng LED X-Light có ch?c ch?n 100% qua du?c dang ki?m không?</span><svg class="icon faq-icon"><use href="#icon-chevron-down"></use></svg></summary>\n' +
'      <p>Không th? cam k?t 100% ch? qua qu?ng cáo s?n ph?m. Ðang ki?m ph? thu?c vào vi?c ánh sáng có gom dúng m?t c?t, không gây chói và d?t cu?ng d? chu?n. Auto365 h? tr? can ch?nh dèn b?ng máy laze chuyên d?ng d? du?ng c?t sáng chu?n xác nh?t, giúp tang t?i da kh? nang dáp ?ng tiêu chu?n ki?m d?nh.</p>\n' +
'    </details>\n' +
'  </div>';

const gridRegex = /<div class="faq-grid" id="faq-grid">[\s\S]*?<\/div>/;
html = html.replace(gridRegex, newFaq);

fs.writeFileSync(file, html);
console.log('Advanced FAQ replaced.');
