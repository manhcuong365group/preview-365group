# Beam Lab cho hub đèn gầm dạng rời

## Mục tiêu

Biến phần Beam Lab hiện có thành một thư viện bằng chứng trực quan có thể đọc nhanh, sử dụng ảnh beam/case đã công bố và không biến ảnh đơn lẻ thành kết luận đo lường.

## Phạm vi

- Thêm một dải thẻ ảnh Beam Lab vào khu `#evidence`.
- Mỗi thẻ hiển thị ảnh có nguồn đã công bố, tên xe/cấu hình, loại ảnh và trạng thái bằng chứng.
- Dùng hai ảnh có sẵn trong case VinFast VF8: ảnh xe hoàn thiện và ảnh Cos trong bài case.
- Thêm liên kết đến bài case gốc và mô tả điều chưa đủ để kết luận.
- Giữ nguyên tuyên bố hiện tại: chưa có bộ đo lux chuẩn hóa, không xếp hạng mẫu đèn theo độ sáng.

## Ngoài phạm vi

- Không tự tạo số đo lux, khoảng chiếu, nhiệt độ màu thực đo hoặc video.
- Không tuyên bố ảnh beam áp dụng cho mọi đời xe hoặc mọi vị trí lắp.
- Không thay đổi thuật toán đề xuất cấu hình.

## Trải nghiệm

Khu mới nằm sau phần giải thích trạng thái bằng chứng. Trên desktop dùng hai cột; trên mobile xếp một cột. Thẻ ảnh chỉ dùng để tham khảo nhanh, có nhãn đỏ về trạng thái dữ liệu và CTA đi đến case gốc.

## Kiểm chứng

Static test sẽ xác nhận khu `beam-library` có mặt, nêu rõ ảnh chỉ tham khảo và liên kết về case VinFast VF8. Kiểm tra JavaScript hiện có vẫn parse được.
