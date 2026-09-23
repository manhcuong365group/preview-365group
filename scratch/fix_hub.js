const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

// RULE 3 & 4: Rewrite section 4 and delete section 6.
const sec4_start = html.indexOf('<section id="so-sanh-giai-phap"');
const sec4_end = html.indexOf('</section>', sec4_start) + 10;
const sec6_start = html.indexOf('<section id="khi-nao-thay-bong"');
const sec6_end = html.indexOf('</section>', sec6_start) + 10;

let sec4 = html.substring(sec4_start, sec4_end);
// Rewrite sec 4
sec4 = sec4.replace('<h2 id="so-sanh-title">Đèn yếu: Thay bóng, sửa cụm đèn hay nâng cấp Bi LED?</h2>', '<h2 id="so-sanh-title">Khi nào thay bóng LED là giải pháp phù hợp?</h2>');
sec4 = sec4.replace('GIỮ ZIN 100%', 'GIỮ NGUYÊN BẢN');
sec4 = sec4.replace('Giữ nguyên bản cụm đèn xe 100%, cắm giắc zin', 'Thay thế trực tiếp vào cụm đèn, sử dụng giắc cắm');
sec4 = sec4.replace('tăng sáng tức thì', 'cải thiện độ sáng');
sec4 = sec4.replace('ĐỈNH CAO ÁNH SÁNG', 'THAY ĐỔI HỆ QUANG HỌC');
sec4 = sec4.replace('văn minh tuyệt đối', 'kiểm soát vùng sáng tốt (nếu căn chỉnh đúng)');

html = html.substring(0, sec4_start) + sec4 + html.substring(sec4_end);

if (sec6_start > -1) {
    html = html.substring(0, html.indexOf('<section id="khi-nao-thay-bong"')) + html.substring(html.indexOf('</section>', html.indexOf('<section id="khi-nao-thay-bong"')) + 10);
}

// RULE 5: WATT/LUMEN/LUX
html = html.replace('Watt cao hơn = nhìn đường tốt hơn.', 'Watt mô tả công suất tiêu thụ điện, không đại diện trực tiếp cho khả năng chiếu sáng thực tế.');
html = html.replace('Lumen cao hơn = vùng sáng tốt hơn.', 'Lumen là tổng lượng ánh sáng, trong khi hiệu quả quan sát phụ thuộc vào sự phân bố luồng sáng.');

// RULE 6: KELVIN
// Find the Kelvin section and rewrite
html = html.replace('4300K bám mưa cực tốt', '4300K có sắc ấm hơn 6000K, giúp quan sát tự nhiên hơn trong một số điều kiện');
html = html.replace('xuyên sương', 'hỗ trợ quan sát');
html = html.replace('chống mỏi mắt', 'ít gây lóa sáng');

// RULE 7: FITMENT
html = html.replace('<caption>Bảng tra cứu chuẩn chân bóng LED &amp; Nguồn tham khảo cần đối chiếu</caption>', '<caption>Bảng tra cứu chuẩn chân bóng LED &amp; Nguồn tham khảo cần đối chiếu (Lưu ý: Tên xe không đủ để xác nhận chân bóng. Cần đối chiếu năm sản xuất, phiên bản, thị trường, vị trí đèn và tình trạng cụm đèn thực tế.)</caption>');

// RULE 8: CLAIM CLEANUP globally
html = html.replace(/tuyệt đối/g, 'cơ bản');
html = html.replace(/hoàn hảo/g, 'phù hợp');
html = html.replace(/Trang bị trên 99% các dòng xe/g, 'Tương thích với nhiều dòng xe (cần đối chiếu)');
html = html.replace(/IP68 an toàn tuyệt đối/g, 'Đạt chuẩn IP68 (theo công bố của nhà sản xuất)');
html = html.replace(/không gây chói xe đối diện/g, 'hỗ trợ gom sáng (khi được căn chỉnh chuẩn)');
html = html.replace(/Bám mưa cực tốt/g, 'Ánh sáng vàng ấm hỗ trợ quan sát');

// RULE 9: BRAND BLOCK
// Remove "Hệ sản phẩm bóng LED chính hãng tại Auto365" section
const brand_start = html.indexOf('<section id="thuong-hieu-bong"');
if (brand_start > -1) {
    const brand_end = html.indexOf('</section>', brand_start) + 10;
    html = html.substring(0, brand_start) + html.substring(brand_end);
}

// RULE 13: SAVINGS PACKAGES
// "Dự toán chi phí lắp đặt bóng LED ô tô & Các khoản cần xác nhận"
// We keep it but remove marketing claims.
// This is already pretty clean from earlier.

fs.writeFileSync('scratch/out/index_edited.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
console.log('Script completed.');
