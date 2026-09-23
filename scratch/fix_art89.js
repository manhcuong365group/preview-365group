const fs = require('fs');
let html = fs.readFileSync('auto365/bong-led/index.html', 'utf8');

const target89 = `<article class="soft-card" id="dang-kiem-card">
  <h3 style="font-size: 15px; margin: 0 0 6px;">08 · Tiêu chuẩn Đăng kiểm an toàn</h3>
  <p style="font-size: 13.5px; line-height: 1.5; color: #414b59; margin: 0 0 6px;">
    Theo Thông tư 08/2023/TT-BGTVT và quy chuẩn kiểm định xe cơ giới hiện hành, xe thay bóng LED đạt tiêu chuẩn khi đáp ứng 4 điều kiện cốt lõi:
  </p>
  <ul class="small" style="margin: 0; padding-left: 16px; color: #555; line-height: 1.45;">
    <li>Đúng chuẩn chân cắm nguyên bản, không cắt gọt hay đục khoét chóa đèn.</li>
    <li>Đường cắt ánh sáng cốt chuẩn, không hắt tia chói lên trên tầm mắt xe đối diện.</li>
    <li>Cường độ sáng đo bằng thiết bị kiểm định chuyên dụng nằm trong ngưỡng cho phép.</li>
    <li>Dải nhiệt màu thuộc gam sáng trắng hoặc vàng (4300K – 6000K).</li>
  </ul>
</article>
  
  <article class="soft-card" id="loi-ich-card">
  <h3 style="font-size: 15px; margin: 0 0 6px;">09 · Lợi ích nâng cấp thực tế</h3>
  <p style="font-size: 13.5px; line-height: 1.5; color: #414b59; margin: 0 0 6px;">
    Theo tiêu chuẩn kỹ thuật nâng cấp ánh sáng ô tô, 5 lợi ích thiết thực nhất khi chuyển từ Halogen sang bóng LED gồm:
  </p>
  <ul class="small" style="margin: 0; padding-left: 16px; color: #555; line-height: 1.45;">
    <li>Tăng khả năng quan sát 200% – 300% trong đêm tối và mặt đường thiếu sáng.</li>
    <li>Tiết kiệm 50% – 60% điện năng tiêu thụ, giảm tải máy phát và bình ắc quy.</li>
    <li>Khởi động tức thì (&lt;0.1 giây), không có độ trễ kích sáng như Xenon HID.</li>
    <li>Tuổi thọ bền bỉ đạt 30.000 – 50.000 giờ sử dụng (gấp 10–15 lần halogen).</li>
    <li>Giữ nguyên hệ thống dây điện zin của xe (chọn công suất thực tế 35W–55W).</li>
  </ul>
</article>`;

const new8 = `<article class="soft-card" id="dang-kiem-card">
  <h3 style="font-size: 15px; margin: 0 0 6px;">08 · Kiểm định và pháp lý</h3>
  <p style="font-size: 13.5px; line-height: 1.5; color: #414b59; margin: 0 0 6px;">
    Việc đáp ứng yêu cầu kiểm định không thể xác nhận chỉ từ loại bóng hoặc nhiệt màu. Cấu hình sau lắp cần được đối chiếu với yêu cầu kiểm định và quy chuẩn kỹ thuật hiện hành đối với hệ thống chiếu sáng. Kết quả cuối cùng thuộc quá trình kiểm tra của cơ sở kiểm định.
  </p>
</article>`;

if (html.includes(target89)) {
    html = html.replace(target89, new8);
    fs.writeFileSync('auto365/bong-led/index.html', '\ufeff' + html.replace(/^\ufeff/, ''), 'utf8');
    console.log("Rewrote article 08 and deleted 09.");
} else {
    console.log("Target 8,9 not found exactly.");
}
