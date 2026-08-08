# Đèn gầm dạng rời — conversion-first layout

## Mục tiêu

Tạo một phiên bản landing page mới cho bài "Đèn Gầm Dạng Rời Ô Tô". Bản mới ưu tiên giúp khách nhanh chóng xác định cấu hình phù hợp, trong khi vẫn thừa hưởng các chứng cứ kỹ thuật, thông số sản phẩm và nội dung chuyên sâu của bài hiện có.

## Luồng trang chính

1. **Hero** — thông điệp chọn đèn theo cung đường, xe và vị trí lắp; hai CTA: `Chọn đèn phù hợp` và `Khám phá sản phẩm`; giữ mô phỏng vùng sáng.
2. **BeamMatch** — bốn đầu vào: nhu cầu, hãng/dòng xe, vị trí lắp và ngân sách. Kết quả diễn đạt là `Cấu hình tham khảo`, không là "đèn tốt nhất". Kết quả gồm sản phẩm, vai trò vùng sáng, vị trí lắp đề xuất và CTA tư vấn.
3. **Sản phẩm** — card rút gọn: ảnh, tên, vai trò vùng sáng, nhu cầu phù hợp, vị trí lắp, giá từ/bảo hành và CTA xem chi tiết hoặc tư vấn lắp đặt. Thông số đầy đủ vẫn có ở phần mở rộng.
4. **Case thực tế** — đặt ngay sau sản phẩm. Mỗi card nêu xe, nhu cầu, cấu hình, vị trí, kết quả và liên kết đến case gốc.
5. **Knowledge Hub** — năm card dẫn tới kiến thức: khái niệm, nhiệt màu, LED và bi, cut-off line, xử lý hấp hơi.
6. **Mounting Studio** — giữ bộ chọn vị trí lắp và nội dung kỹ thuật hiện có; chuẩn hoá mỗi vị trí thành Ưu điểm, Lưu ý và Điều kiện phù hợp.
7. **Quy trình → FAQ → CTA** — giữ các phần hiện có, rút lời dẫn để tập trung hành động đặt lịch/tư vấn.

## Nội dung giữ lại nhưng đưa xuống lớp mở rộng

- Beam Pattern Theatre và video công nghệ.
- Bảng so sánh chi tiết.
- Price Builder.
- Beam Lab, bảng bảo hành và phần sử dụng đúng quy định.
- Nội dung cẩm nang dài hiện có.

## Nguyên tắc giao diện

- Duy trì ngôn ngữ visual nền tối, điểm nhấn đỏ và cảm giác kỹ thuật cao của trang gốc.
- Ưu tiên mobile: tránh bảng rộng ở luồng chính; card ngắn, CTA rõ ràng, điều hướng không gây cuộn ngang.
- Không tự tạo số liệu kỹ thuật, case hoặc giá. Tái sử dụng dữ liệu đã xác minh trong tệp gốc.

## Kiểm thử

- Liên kết điều hướng và CTA neo đúng block.
- BeamMatch yêu cầu đủ các trường bắt buộc trước khi hiện kết quả.
- Kiểm tra thứ tự heading, bố cục desktop/mobile và không có cuộn ngang ngoài ý muốn.
