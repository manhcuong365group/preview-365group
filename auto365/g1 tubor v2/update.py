import sys
import re

file_path = r'd:\project\preview-365group\auto365\g1 tubor v2\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 7. CSS background
content = content.replace('background: var(--gtr-bg);', 'background: var(--gtr-soft);')

# 1. Hạ claims
content = content.replace('Sản phẩm được tối ưu với cấu hình', 'Sản phẩm hướng đến cấu hình')
content = content.replace('tăng cường khả năng bám đường', 'hỗ trợ cải thiện tầm nhìn')
content = content.replace('tối ưu mặt cắt ánh sáng', 'kiểm tra mặt cắt ánh sáng')
content = content.replace('tăng độ bám đường', 'hỗ trợ bám đường')
content = content.replace('tăng cường độ rọi', 'hỗ trợ độ rọi')
content = content.replace('đảm bảo độ cứng cáp', 'hỗ trợ độ cứng cáp')
content = content.replace('được tối ưu với', 'được thiết kế với')
content = content.replace('giúp tập trung luồng sáng, hỗ trợ cải thiện tầm nhìn xa', 'hỗ trợ tập trung luồng sáng, hướng đến cải thiện tầm nhìn xa')

# CTA updates
content = content.replace('Tìm chi nhánh gần nhất', 'Tìm chi nhánh Auto365 gần nhất')
content = content.replace('Tìm chi nhánh Auto365 gần nhất Auto365 gần nhất', 'Tìm chi nhánh Auto365 gần nhất')
content = content.replace('Tìm chi nhánh', 'Tìm chi nhánh Auto365 gần nhất')
content = content.replace('Đăng ký tư vấn ngay', 'Đặt lịch kiểm tra hệ thống đèn')
content = content.replace('Đăng ký tư vấn', 'Nhận tư vấn cấu hình phù hợp')
content = content.replace('Nhận báo giá', 'Đặt lịch kiểm tra hệ thống đèn')
content = content.replace('Nhận tư vấn cấu hình phù hợp ngay', 'Đặt lịch kiểm tra hệ thống đèn')

# 2. Bổ sung Khi nào chưa cần nâng cấp ngay?
khi_nao_chua_can = '''
    <!-- MỤC 6B -->
    <div class=\"content-block\">
      <h2>Khi nào chưa cần nâng cấp ngay?</h2>
      <p>Không phải phương tiện nào cũng cần thiết phải nâng cấp ánh sáng ngay lập tức. Dưới đây là các trường hợp chủ xe có thể cân nhắc duy trì hệ thống đèn nguyên bản:</p>
      <ul>
        <li>Xe chủ yếu di chuyển trong nội thành với điều kiện đèn đường chiếu sáng tốt.</li>
        <li>Hệ thống đèn nguyên bản (chính hoặc gầm) vẫn đáp ứng đủ tầm nhìn cá nhân.</li>
        <li>Chưa xác định rõ nhu cầu cần bổ sung ánh sáng tầm thấp hay tầm xa.</li>
        <li>Xe đang gặp vấn đề hoặc có lỗi về hệ thống điện cần ưu tiên xử lý trước.</li>
      </ul>
    </div>
'''
if '<h2>Khi nào chưa cần nâng cấp ngay?</h2>' not in content:
    content = content.replace('<!-- MỤC 7 -->', khi_nao_chua_can + '\n    <!-- MỤC 7 -->')

# 3. Bổ sung bảng so sánh
bang_so_sanh = '''
      <h2>So sánh GTR G1 Turbo V2 với đèn gầm nguyên bản</h2>
      <div class=\"table-wrapper\">
        <table>
          <thead>
            <tr>
              <th>Tiêu chí</th>
              <th>Đèn gầm nguyên bản (thường gặp)</th>
              <th>Bi gầm GTR G1 Turbo V2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vùng sáng</td>
              <td>Phụ thuộc chóa phản xạ nguyên bản, thường hạn chế ở cự ly gần.</td>
              <td>Hỗ trợ phân bổ luồng sáng theo thiết kế thấu kính 3.0 inch.</td>
            </tr>
            <tr>
              <td>Hỗ trợ tầm nhìn</td>
              <td>Đáp ứng tầm nhìn cơ bản trong điều kiện thông thường.</td>
              <td>Hướng đến hỗ trợ quan sát trong điều kiện mưa, sương mù, đường thiếu sáng.</td>
            </tr>
            <tr>
              <td>Nhiệt màu</td>
              <td>Thường cố định ở mức nhiệt màu vàng đậm (Halogen) hoặc trắng (LED zin).</td>
              <td>4800K kết hợp mắt trợ pha độc lập 3000K.</td>
            </tr>
            <tr>
              <td>Thi công</td>
              <td>Theo thiết kế xe zin.</td>
              <td>Lắp đặt qua pát chuyên dụng, phụ thuộc cấu trúc xe.</td>
            </tr>
            <tr>
              <td>Bảo hành</td>
              <td>Theo tiêu chuẩn của hãng xe.</td>
              <td>Bảo hành điện tử 24 tháng theo chính sách sản phẩm.</td>
            </tr>
          </tbody>
        </table>
      </div>
'''
if '<h2>So sánh GTR G1 Turbo V2 với đèn gầm nguyên bản</h2>' not in content:
    content = content.replace('<!-- MỤC 3 -->', bang_so_sanh + '\n    <!-- MỤC 3 -->')

# 4. Expert Note
expert_note = '''
    <div class=\"gtr-tech-note\" style=\"margin-top: 32px; margin-bottom: 32px; background: #eef2ff; border-left: 4px solid #4f46e5; padding: 12px 16px;\">
      <strong>Thông tin kiểm duyệt nội dung:</strong> Dữ liệu và hình ảnh (nếu có) mang tính tham khảo được ghi nhận theo cấu hình thử nghiệm. Các thông số có thể thay đổi phụ thuộc vào cấu hình xe thực tế. Kỹ thuật viên sẽ kiểm tra xe trực tiếp để đề xuất phương án trước khi thi công.
    </div>
'''
if 'Thông tin kiểm duyệt nội dung' not in content:
    content = content.replace('<!-- MỤC 9 -->', expert_note + '\n    <!-- MỤC 9 -->')

# Entity QA checks - ensuring correct "khoảng" and amounts.
content = re.sub(r'(?<!khoảng )45W', 'khoảng 45W', content)
content = re.sub(r'(?<!khoảng )75W', 'khoảng 75W', content)
content = content.replace('6 triệu', '6.000.000 VNĐ')
content = content.replace('G1 Turbo', 'GTR G1 Turbo V2')
content = content.replace('GTR GTR G1 Turbo V2 V2', 'GTR G1 Turbo V2')
content = content.replace('GTR G1 Turbo V2 GTR G1 Turbo V2', 'GTR G1 Turbo V2')
content = content.replace('GTR G1 ', 'GTR G1 Turbo V2 ')
content = content.replace('GTR G1 Turbo V2 Turbo V2', 'GTR G1 Turbo V2')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Update completed successfully.")
