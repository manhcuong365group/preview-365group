# 03 — Phiếu tự kiểm Hub Bi LED ô tô V1.8

Ngày: 14/10/2026. Phiếu ghi các việc đã làm trong lượt dựng trang 12–13/10/2026 theo góp ý chủ quản và đối chiếu đối thủ. Đây là tự kiểm của team triển khai, **không phải điểm chấm lại**.

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
| F01 | Nhiệt màu "4" (X5 Pro, V30 Ultra 2022) | PDP đã sửa thành 5000K (đối chiếu 14/10/2026); card, bộ lọc, so sánh, bảng thông số và 04 cập nhật 5000K | PDP X5 Pro, V30 Ultra 2022 |
| F02 | Nút "Xem tất cả mẫu khớp" chỉ chuyển giá/điện | Xoá bộ lọc cũ rồi áp đủ lens/giá/điện/nhiệt màu (trắng = 5000–6000K); mẫu thiếu kích thước lens không vào kết quả khớp | Log kiểm thử |
| F03 | FAQ bảo hành thiếu mốc và ngoại lệ 90 ngày | Ghi mốc "kể từ khi nhận sản phẩm và hồ sơ đủ điều kiện", trường hợp tới 90 ngày, tách tuổi thọ công bố với bảo hành; text = FAQPage | auto365.vn/chinh-sach-bao-hanh |
| F04 | Khoảng giá hãng khác đơn vị | Ghi "giá sản phẩm, chưa VAT, đơn vị bộ/cặp theo từng mẫu"; tách bi lẻ /chiếc (Titan); AES tính tới 10 triệu (Turbo BM 3 nhiệt màu) | HTML #thuong-hieu |
| F05 | Bảng thông số Turbo BM ghi 9 triệu cho cả 2 bản | "Từ 9.000.000đ/cặp (1 nhiệt màu); 10.000.000đ/cặp (3 nhiệt màu)"; AggregateOffer 9–10 triệu giữ nguyên | HTML .specAll |
| F06 | Hồ sơ tự ghi "đạt, không còn việc mở" | Aside + phiếu ghi bản sửa chờ duyệt lại, giữ lịch sử duyệt 13/10; 02 bỏ mục tiêu FAQ/Product rich result trên hub, thêm kiểm Search generative AI/OAI-SearchBot | 02, aside |
| F07 | Cột Lens trộn "AR" với kích thước | 28 mẫu không có kích thước inch → ghi "Chưa có kích thước (PDP: AR)", không vào bộ lọc lens; chuẩn hoá "3.0 inch" | HTML, 04 |
| F08 | 10 nhãn "Độc quyền" | Giữ nhãn — chủ quản xác nhận đây là sản phẩm độc quyền của Auto365 (14/10/2026) | HTML, PDP |
| F10 | "Bi cầu" rộng hơn bi LED | Thêm đoạn phạm vi đầu mục kiến thức 1, dẫn trang Nâng cấp ánh sáng | HTML #bi-led-la-gi |
| F12 | Tóm tắt Điều 20 giản lược | Viết đủ: thời gian/điều kiện bật đèn; 4 trường hợp chuyển Cos gồm người đi bộ và ngoại lệ dải phân cách chống chói (theo Cổng Chính phủ) | HTML #phap-ly |
| F13 | Finder gọi "theo xe"; lý do "mức giá khác" khi cùng giá | Đổi "Gợi ý bi LED theo tiêu chí"; ghi rõ chưa kiểm khả năng lắp theo xe; lý do "cùng mức giá" khi trùng giá | HTML |
| F14 | Ranh giới phân khúc | "5 – dưới 10 triệu" | HTML #so-sanh |
| F07b | 83 mẫu thiếu kích thước lens, 33 mẫu thiếu công suất | Đọc lại toàn bộ PDP: lấy thêm lens của 21 mẫu và công suất của 14 mẫu từ phần mô tả PDP (bảng thông số trống hoặc ghi "AR"); 62 mẫu (lens) và 19 mẫu (công suất) PDP không công bố → giữ "chưa có" | PDP 14/10/2026 |
| C3/S2 | 86 tên sản phẩm viết HOA toàn bộ | CMS đã đổi tên trên PDP (14/10/2026); hub đồng bộ 96 tên theo danh mục production trên card, alt, nút so sánh, bảng thông số, schema | Danh mục auto365.vn 14/10/2026 |
| S2 | 8 ô tiêu đề bảng thông số thiếu scope | Thêm scope="col" | HTML .specAll |
| F15 | Cẩm nang có bài bi gầm và tiêu đề claim | Gỡ bài GTR G1 Turbo V2 (bi gầm) và bài X5 Ultra "tầm chiếu hàng trăm mét" | HTML #cam-nang |
| C1 | Reviewer | Nguyễn Quang Đạo duyệt toàn bộ 14/10/2026; schema lastReviewed/dateModified 2026-10-14, khớp dòng "Duyệt và cập nhật 14/10/2026" | 02 mục 2 |

## Điểm tự chấm sau sửa (14/10/2026, bỏ U3 theo chỉ đạo)

| Mã | Điểm | Căn cứ / phần còn trừ |
| --- | ---: | --- |
| C1 Chính xác, nhất quán | 10/10 | F01–F05 đã đóng; nhiệt màu, giá biến thể, đơn vị, bi lẻ khớp PDP |
| C2 Đầy đủ theo vai trò | 10/10 | 62 mẫu thiếu lens, 19 mẫu thiếu công suất do PDP không công bố — trang ghi "chưa có", sheet bổ sung đã gửi Kinh doanh |
| C3 Tự nhiên, hữu ích | 10/10 | Tên sản phẩm đồng bộ sau khi CMS đổi tên |
| S1 Vai trò URL | 9,5/10 | 3 bài blog bảng giá bi LED cũ vẫn trả 200 — chờ 301 |
| S2 SEO trên trang | 10/10 | Title/meta/H1, th scope đủ, schema khớp hiển thị |
| S3 Liên kết, hồ sơ | 10/10 | 02 cập nhật theo hướng dẫn Google 2026 |
| G1 + G2 + G3 | 25/25 | Bảo hành đủ phạm vi, "bi cầu", Điều 20 nguyên văn, nguồn PDP |
| U1 + U2 | 10/10 | Finder chuyển đủ điều kiện; lead 162 đã xác nhận |
| **Tổng** | **94,5/95 = 99,5/100** | **ĐẠT** — không lỗi chặn |

## Giữ theo quyết định chủ quản

| Đề xuất | Quyết định |
| --- | --- |
| Gợi ý mẫu theo nhu cầu (6 nhóm) | Bỏ |
| Ghi chú 3 dòng dưới sapo hero | Bỏ |
| Banner hero | Bỏ banner (chủ quản 14/10/2026) |
| Kiến thức dạng tab | Giữ accordion như hub |
| Thương hiệu Bi LED Titan Black 2026 | X-Light (Titan Black là tên dòng) — card, bộ lọc, schema, 04 (chủ quản chốt 14/10/2026) |

## Còn lại (chỉ thực hiện được khi lên production)

| Việc | Người | Ghi chú |
| --- | --- | --- |
| Nghiệm thu production | IT/SEO | Checklist 02 mục 6 |
| Inventory URL, GSC, đo AI theo bộ query | SEO | Theo báo cáo tái kiểm 13/10 mục 6, 10–11 |
| 301 bài blog bảng giá bi LED cũ (đưa hub mới lên production trước) | SEO/CMS | docs/yeu-cau-cms-bi-led-2026-10-14.md — Việc 2 |
| Bổ sung kích thước lens (62 mẫu) và công suất (19 mẫu) lên PDP | Kinh doanh/hãng | docs/bi-led-thieu-lens-cong-suat-2026-10-14.xlsx |
| Đo lab lại trên pages.dev | SEO | Số hiện tại đo trên preview cục bộ |
