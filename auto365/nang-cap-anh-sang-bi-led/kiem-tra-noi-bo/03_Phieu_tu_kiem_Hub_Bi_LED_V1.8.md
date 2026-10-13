# 03 — Phiếu tự kiểm Hub Bi LED ô tô V1.8

Ngày: 13/10/2026. Phiếu ghi các việc đã làm trong lượt dựng trang 12–13/10/2026 theo góp ý chủ quản và đối chiếu đối thủ. Đây là tự kiểm của team triển khai, **không phải điểm chấm lại**.

## Đã xử lý

| Mã | Phát hiện / yêu cầu | Đã làm | Bằng chứng |
| --- | --- | --- | --- |
| BL-01 | Thiếu sản phẩm (hub cũ chỉ lấy trang 1, 20 mẫu) | Nạp đủ 106 mẫu từ 5 trang danh mục production; bỏ bi gầm F10 nằm nhầm danh mục | 04_Master_Data |
| BL-02 | Phân loại "Titan Moto" sai thành xe máy | Titan Moto = thương hiệu, chuyển về ô tô; X-Light V20 Moto = ô tô/xe máy theo PDP | HTML data-xe, 04 |
| BL-03 | Giá phân khúc lẫn bi bán lẻ (/chiếc) | Khoảng giá chỉ tính /bộ; 3 mẫu "(lẻ)" ghi /chiếc và ghi chú riêng; 29 mẫu "Liên hệ" không tính | Bảng #so-sanh, FAQ giá |
| BL-04 | Trùng nội dung với hub Nâng cấp ánh sáng | Bỏ bảng nguồn sáng, viết lại lỗi riêng khi độ bi, rút pháp lý còn Điều 20 + link hub, so sánh chỉ 4 lựa chọn đèn pha | 02 mục 1, 5 |
| BL-05 | Kiến thức quá dài (10 mục) | Gộp còn 5 mục; chi phí lắp về dưới bảng giá; bảo hành + "khi nào nên lắp" xuống FAQ | HTML #kien-thuc-nang-cap |
| BL-06 | FAQ nhiều, trùng | 10 câu, mỗi câu trả lời 1 thắc mắc khi mua/lắp; FAQPage đồng bộ 10/10 | Log kiểm thử |
| BL-07 | Thiếu chủ đề so với top 5 đối thủ (iCar, AKauto, CarPro, Bulbtek, Chungauto) | Bổ sung lợi ích so với đèn zin, thương hiệu, nhân/chip LED, tuổi thọ, thời gian lắp, bảo hành, xe mới có nên độ | 01 |
| BL-08 | Thời gian lắp chưa có số | Lấy số đã công bố trên PDP V20L Quantum (4–5 giờ), V30 Ultra (5–7 giờ) | PDP |
| BL-09 | Bảo hành chưa chi tiết | Tóm tắt điều kiện, mức xử lý, trường hợp từ chối, thời gian 15–30 ngày từ chính sách bảo hành đèn | auto365.vn/chinh-sach-bao-hanh |
| BL-10 | Dòng xe cụ thể | 16 chip "Dòng xe đã lắp" lấy từ 127 case, bấm lọc case; ghi rõ là tham khảo | HTML .mChips |
| BL-11 | Video ít | 16 clip bi LED ô tô kênh Auto365, 8 hiển thị sẵn | HTML #video |
| BL-12 | Ảnh khối "Vì sao" và kiến thức | Thay 4 ảnh "Vì sao" theo ảnh chủ quản gửi; mỗi mục kiến thức có ảnh | HTML |
| BL-13 | Trả góp / khuyến mãi (đối thủ có) | Không có trang/chương trình trả góp trên auto365.vn (/tra-gop 404) → không nêu | — |
| U2 | Lead test end-to-end | POST /api/leads theo cấu hình form → {"success":true, lead_id 162, test:true}; source_page sửa thành nang-cap-anh-sang-bi-led | Log kiểm thử |
| BL-14 | Chữ khối "Vì sao" còn từ claim ("toàn quốc", "chuyên về đèn", "hằng ngày") | Đồng bộ 6 thẻ theo bản hub đã duyệt 13/10/2026 | HTML #vi-sao |
| BL-15 | Ảnh Titan Black mang logo X-Light (dễ nhầm thương hiệu) | Thay 6 ảnh kiến thức bằng ảnh từ PDP AES (EV2 Square, Turbo BM); xoá file cũ | HTML #kien-thuc-nang-cap |
| BL-16 | 86/106 tên viết HOA toàn bộ, lẫn với tên thường | Chuẩn hoá tên trên card, alt, nút so sánh, bảng thông số và schema Product (giữ mã/viết tắt: LED, AES, GTR, V20, CB150, 24V…) | HTML + JSON-LD + 04 |
| BL-17 | 8 ô tiêu đề bảng thông số thiếu scope | Thêm scope="col" | HTML .specAll |
| C1 | Reviewer | Nguyễn Quang Đạo duyệt toàn bộ 13/10/2026; schema lastReviewed/dateModified 2026-10-13, khớp dòng "Duyệt và cập nhật 13/10/2026" | 02 mục 2 |

## Giữ theo quyết định chủ quản

| Đề xuất | Quyết định |
| --- | --- |
| Gợi ý mẫu theo nhu cầu (6 nhóm) | Bỏ |
| Ghi chú 3 dòng dưới sapo hero | Bỏ |
| Banner slider 2 hình | Giữ 1 banner AES SV Turbo S |
| Kiến thức dạng tab | Giữ accordion như hub |

## Còn lại (chỉ thực hiện được khi lên production)

| Việc | Người | Ghi chú |
| --- | --- | --- |
| Nghiệm thu production | IT/SEO | Checklist 02 mục 6 |
| Xác nhận lead 162 trong CRM rồi xoá | Chủ quản/IT | Lead test gửi 13/10/2026 |
| 301 bài blog bảng giá bi LED cũ | SEO/CMS | 02 mục 1 |
| Đo lab lại trên pages.dev | SEO | Số hiện tại đo trên preview cục bộ |
