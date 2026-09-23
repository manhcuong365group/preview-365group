const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

// Replace FAQ answer for 6000K
html = html.replace(
  /<p>Nhiệt màu 6000K \(trắng hiện đại\) cho tầm nhìn cực tốt trong đô thị và thời tiết khô ráo\. Tuy nhiên, nếu bạn thường xuyên đi đèo núi, sương mù hay mưa lớn, ánh sáng trắng sẽ dễ bị tán xạ\. Lúc này, bạn nên tham khảo các dòng bóng có nhiệt màu 4300K \(như S8 Pro\) để tối ưu khả năng bám đường\.<\/p>/,
  '<p>4300K có sắc ánh sáng ấm hơn 6000K. Khả năng quan sát trong mưa hoặc sương mù còn phụ thuộc cụm đèn, cách phân bố ánh sáng, phản xạ mặt đường và điều kiện thử. Cần đối chiếu trên cấu hình cụ thể; không kết luận chỉ từ nhiệt màu.</p>'
);

// Replace Warranty FAQ answer
html = html.replace(
  /<p>30\.000 giờ là thời gian sáng lý tưởng của chip LED trong phòng thí nghiệm\. Thực tế, bóng hoạt động trong khoang máy chịu nhiệt độ và độ rung lắc lớn\. Bảo hành 24 tháng \(1 đổi 1\) là cam kết về chất lượng thực tế tốt nhất trên xe, tách biệt với tuổi thọ lý thuyết của linh kiện\.<\/p>/,
  '<p>Bảo hành áp dụng theo từng mã và điều kiện của sản phẩm. S3 Pro V2 và S6 Pro V2 công bố 24 tháng; T10 công bố 12 tháng. Khi đặt mua, xác nhận chứng từ, phạm vi và điểm tiếp nhận của đúng sản phẩm.</p>'
);

// Replace "Thay bóng LED X-Light có chắc chắn 100% qua được đăng kiểm không?" answer
html = html.replace(
  /<p>Không thể cam kết 100% chỉ qua quảng cáo sản phẩm\. Đăng kiểm phụ thuộc vào việc ánh sáng có gom đúng mặt cắt, không gây chói và đạt cường độ chuẩn\. Auto365 hỗ trợ căn chỉnh đèn bằng máy laze chuyên dụng để đường cắt sáng chuẩn xác nhất, giúp tăng tối đa khả năng đáp ứng tiêu chuẩn kiểm định\.<\/p>/,
  '<p>Phương án thay bóng phụ thuộc cấu hình cụm đèn, chân giắc, ngàm, nắp chụp và hệ điện. Auto365 cần kiểm tra xe trước khi xác nhận phụ kiện, mức can thiệp và chi phí lắp.</p>'
);

// Also remove "không bị tán xạ khi gặp mưa to hay sương mù dày" from S8 4300K table
html = html.replace(
  /<td>Nhiệt màu vàng nắng 4300K bám đường ướt cực tốt, không bị tán xạ khi gặp mưa to hay sương mù dày, chống mỏi mắt\.<\/td>/,
  '<td>Nhiệt màu 4300K có ánh sáng ấm hơn 6000K, hỗ trợ cải thiện khả năng bám đường trong điều kiện thực tế (tùy thuộc cấu hình chóa đèn).</td>'
);

fs.writeFileSync(file, '\ufeff' + (html.charCodeAt(0) === 0xFEFF ? html.slice(1) : html), 'utf8');
console.log('Fixed overclaims.');
