# 03 — Phiếu tự kiểm Hub Bi LED ô tô V1.8

Ngày: 19/10/2026. Phiếu ghi các việc đã làm trong lượt dựng trang 12–13/10/2026 theo góp ý chủ quản và đối chiếu đối thủ. Đây là tự kiểm của team triển khai, **không phải điểm chấm lại**.

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
| C1 | Reviewer | Nguyễn Quang Đạo duyệt toàn bộ 17/10/2026; schema lastReviewed/dateModified 2026-10-17, khớp dòng "Kiểm duyệt và cập nhật 19/10/2026" | 02 mục 2 |

## Kết quả chấm (ghi đúng phạm vi)

| Lượt | Người chấm | Cách chấm | Kết quả |
| --- | --- | --- | --- |
| Tái kiểm 13/10/2026 | Reviewer độc lập | Đủ 12 tiêu chí, thang 100 | 90,3/100 — chưa đạt |
| Tái kiểm 14/10/2026 | Reviewer độc lập | Đủ 12 tiêu chí, thang 100 | **93,5/100 — chưa đạt** (SEO 28,3/30; GEO 23,2/25) |
| Tự chấm team 14/10/2026 | Team Content | Bỏ U3 theo chỉ đạo, thang 95 | 94,5/95 — chỉ là điểm theo phạm vi 95, **không dùng thay** kết quả tái kiểm đủ 12 tiêu chí |
| Tự chấm team 17/10/2026 | Team Content | Đủ 12 tiêu chí trên preview | 99/100 — tự chấm, không thay tái kiểm |
| Tái kiểm 17/10/2026 | Reviewer độc lập | Đủ 12 tiêu chí, thang 100 | **94,4/100 — chưa đạt** (SEO 28,3/30; GEO 23,8/25) |
| Bản sửa 19/10/2026 (N01–N06, link bài theo dòng xe, inventory URL trong 02) | Team Content | Đủ 12 tiêu chí, thang 100, chấm trên preview | 95,7/100 (SEO 28,8/30; GEO 24,0/25) — tự chấm, **chờ tái kiểm độc lập** |

## Sửa theo tái kiểm 14/10/2026 (bản 15/10)

| Mã | Phát hiện | Đã làm | Bằng chứng |
| --- | --- | --- | --- |
| R01 | Lọc 24 tháng bỏ sót mẫu ghi "2 năm" | Quy "2 năm"/"24 Tháng" về 24 tháng cho bộ lọc (5 mẫu); câu bảo hành gốc giữ nguyên, kể cả Red Magic 1.0 New Plus "1 năm đổi mới + 1 năm thay thế linh kiện" | 04 cột "Bảo hành dùng để lọc"; log kiểm thử |
| R02 | Lens V30 Ultra 2022 chưa theo PDP mới | Đọc lại bảng thông số toàn bộ PDP 15/10: thêm kích thước lens cho 36 mẫu (gồm V30 Ultra 2022 = 3.0 inch); còn 26 mẫu PDP chưa ghi. Không nhập các số không rõ đơn vị ("29", "45") | 04 cột lịch sử cập nhật |
| R03 | Điểm tự chấm phạm vi 95 trình bày như đạt đủ V1.8 | Tách bảng kết quả theo lượt/cách chấm; aside và trang phiếu ghi "chờ tái kiểm" | Mục "Kết quả chấm" |
| R04 | Dữ liệu sửa 14/10 thiếu lịch sử | 04 thêm cột "Lịch sử cập nhật" (ngày · trường · cũ → mới · nguồn) cho từng dòng; giữ ngày lấy dữ liệu lần đầu | 04 |
| R05 | Chọn theo nhu cầu còn chung | Thêm bảng 4 tình huống (đi phố, đường tối/đi tỉnh, mưa, xe LED zin/xe điện): nên cân nhắc, cần kiểm, khi chưa cần đổi bi; dẫn case thật Innova/V30 Ultra 2026, BMW 3 F30/Turbo BM, VF3/Quantum X V2 — anh Nguyễn Quang Đạo duyệt 15/10/2026 | HTML #chon-bi-led |
| R07 | Ô so sánh Turbo BM chỉ "Từ 9 triệu" | Ô giá trong so sánh hiện thêm dòng biến thể (1 nhiệt màu 9 triệu, 3 nhiệt màu 10 triệu) cho mọi mẫu có ghi chú biến thể | HTML compare |
| R06 | Inventory URL, 301, production | 301 đã xong 17/10/2026: 3 bài bảng giá cũ trả 301 → /nang-cap-anh-sang-bi-led (kiểm bằng curl). Đăng bản hub mới lên production: giao IT/CMS | docs/yeu-cau-cms-bi-led-2026-10-14.md |


## Sửa theo tái kiểm 17/10/2026 (bản 19/10)

| Mã | Phát hiện | Đã làm | Bằng chứng |
| --- | --- | --- | --- |
| N01 | Bảng thông số 106 mẫu để "—" lens Turbo BM, L83 Pro, X5 Pro | Bảng thông số lấy lens/công suất từ cùng dữ liệu card: 3 mẫu = 3.0 inch, CB750 = Cos ~45W / Pha ~55W; card, bảng, so sánh, bộ lọc khớp | HTML .specAll |
| N02 | Bộ đếm lens 3.0 ghi 61, lọc ra 64 | Bộ đếm tính từ dữ liệu card: 1.5 = 3, 1.8 = 6, 2.0 = 8, 2.5 = 2, 3.0 = 64; 23 mẫu chưa có lens, 18 mẫu chưa có công suất, 29 mẫu chưa niêm yết giá (3 tập khác nhau) | HTML sidebar |
| N03 | Lịch sử ngày bị ghi đè sang 17/10 | Khôi phục: tái kiểm 13/10 và 14/10; duyệt bản 13/10, chủ quản 14/10, R05 15/10; ngày lấy dữ liệu lần đầu 09–10/10 và 12/10; lịch sử cập nhật giữ đúng 14/10, 15/10, 16/10. Duyệt bản hiện hành 17/10 ghi thành sự kiện mới. Bỏ dòng chờ 301 đã lỗi thời | 03, 04 |
| N04 | 01 thiếu nội dung bảng 4 tình huống | Bộ xuất 01 đưa đủ bảng (các ô + link case) và tiêu đề phụ của mục kiến thức | 01 mục #chon-bi-led |
| N06 | Câu đường tối gắn lens 3.0 với Cos rộng/Pha xa | Viết lại: chọn theo vùng Cos/Pha và trợ Pha, xem case cùng dòng xe; lens chọn theo hốc đèn, không tự quyết định vùng sáng | HTML #chon-bi-led |
| N05 | Production chưa có bản mới | Giao IT/CMS đăng bản đã duyệt tại URL hiện có, nghiệm thu theo checklist production | docs/yeu-cau-cms-bi-led-2026-10-14.md |
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
| Đưa bản hub đã duyệt lên production (301 3 bài giá cũ đã xong 17/10/2026) | IT/CMS + SEO | docs/yeu-cau-cms-bi-led-2026-10-14.md |
| Lens (23 mẫu) và công suất (18 mẫu) PDP chưa công bố — chủ quản chốt giữ nguyên, không đoán (16/10/2026) | Kinh doanh/hãng | docs/bi-led-thieu-lens-cong-suat-2026-10-15.xlsx |
| Đo lab lại trên pages.dev | SEO | Số hiện tại đo trên preview cục bộ |
