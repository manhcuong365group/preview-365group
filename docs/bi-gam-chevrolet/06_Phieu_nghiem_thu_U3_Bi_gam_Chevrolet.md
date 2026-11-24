# 06 — Phiếu nghiệm thu U3 hub Bi gầm Chevrolet

## Trạng thái hiện hành — 24/11/2026

| Mục | Trạng thái | Ngày | Người phụ trách / căn cứ |
|---|---|---|---|
| Nội dung SEO/GEO, HTML, giao diện preview | **Đạt** (reviewer tái kiểm 21/11/2026, HTML `e3bc7fbc…`) | 21/11/2026 | Reviewer V2.3 |
| Mã ca 3 hồ sơ | **Đóng**: CHEV-CAP-2015-X3U, CHEV-COL-VID-F10, CHEV-ORL-F10P | 20/11/2026 | Master Data 04 |
| Ngày thi công | **Đóng**: Captiva 04/11/2026, Colorado 28/10/2023, Orlando 22/08/2024 | 21/11/2026 | Chủ quản xác nhận |
| Cơ sở | **Đóng**: cả 3 ca tại Auto365.vn - Trụ Sở Chính (Orlando ghi "Auto365 Thủ Đức" theo thời điểm ca) | 21/11/2026 | Bài nguồn + chủ quản xác nhận |
| Đời xe Colorado/Orlando | **Giới hạn công bố**: ca cũ không lưu đời/trim; hub không ghi đời xe cho 2 ca này (reviewer chấp nhận 21/11) | 21/11/2026 | Chủ quản; reviewer |
| Kiểm duyệt kỹ thuật | Đã duyệt — anh Nguyễn Quang Đạo (lastReviewed 2026-11-18) | 18/11/2026 | Anh Đạo |
| Production (URL chính thức, CRM, `generate_lead`, điện thoại thật) | Chưa kiểm — giai đoạn tích hợp, không phải PASS production | — | IT/QA |
| Điểm | ≈97,6 là điểm team tự chấm, chưa phải điểm nghiệm thu độc lập | 21/11/2026 | Team SEO |

Các dòng "còn mở/CX" về mã ca, ngày thi công, cơ sở ở các phần bên dưới là **[Lịch sử]**, đã đóng theo bảng trên.

Kiểm trên preview (bản local cùng build), 16/11/2026. Không gửi lead thật: lệnh gửi form bị chặn trong trình duyệt để đọc nội dung gửi đi.

| Mục | Kết quả | Đạt |
|---|---|---|
| U1 · Không tràn ngang | 1366 / 1024 / 768 / 390 / 375px: chiều rộng trang khớp màn hình | ✓ |
| U1 · Ảnh | 11 thẻ dòng xe, 5 thẻ case, ảnh đầu trang: không ảnh lỗi | ✓ |
| U1 · Console | Không lỗi | ✓ |
| U1 · Bộ lọc | Tìm "LACÉTTI" (có dấu, viết hoa) ra Lacetti; tìm sai hiện thông báo trống; tab Bán tải ra Colorado; lọc hãng đèn GTR ra Trailblazer + Orlando; "Bỏ lọc" trả đủ 5 case | ✓ |
| U2 · Thẻ "Tư vấn cấu hình" | Bấm thẻ Trax → cuộn tới form, ô Dòng xe = "Chevrolet Trax" | ✓ |
| U2 · Chặn số sai | Nhập "12345" → không gửi, báo "Số điện thoại chưa đúng, ví dụ 0365 365 365.", ô số đánh dấu lỗi | ✓ |
| U2 · Nội dung gửi | POST `/api/leads`: phone, fullname, car_model, priority, province, form-honey, service = "Bi gầm Chevrolet", source_page = "Bi gầm Chevrolet", source_url, referrer | ✓ |
| U2 · Lỗi server | Server trả lỗi → báo "Chưa gửi được. Vui lòng gọi 0365 365 911 hoặc thử lại.", không báo thành công giả | ✓ |
| U2 · Hotline | `tel:0365365911` | ✓ |
| U3 · Link | 20 link sang auto365.vn (5 bài case, 8 bài cẩm nang, chi nhánh, bảo hành, tác giả, hub bi gầm) đều trả 200; anchor nội trang đủ đích | ✓ |
| U3 · Schema | CollectionPage, BreadcrumbList, Organization, ItemList ×2, FAQPage — đọc được, không lỗi | ✓ |
| U3 · SEO preview | robots noindex/nofollow (preview), canonical `https://auto365.vn/nang-cap-anh-sang-bi-gam/chevrolet` | ✓ |
| U3 · Bàn giao | Hồ sơ 01–06 cùng một lần xuất; 11 dòng xe, 5 hồ sơ (16/11; từ 18/11 còn 3 hồ sơ) | ✓ |

## Còn mở (chỉ nghiệm thu được trên URL chính thức)
- Preview không có `/api/leads` (trả 405), giống các hub hãng xe khác — gửi lead thật vào CRM (`priority`) và sự kiện `generate_lead` một lần/lượt gửi chỉ kiểm được khi IT đăng trang lên auto365.vn.
- Chủ quản test trên điện thoại thật.

## [Lịch sử] Tái kiểm trên build 17/11/2026 (5 ca) — 18/11/2026

Build kiểm: commit `91f1227f`, `index.html` SHA-256 `dce83f55fa8fd329d50a2f9df0e97824cffdac6d2a3f2ce0780031643933e9af` (cùng SHA mục lục bàn giao; bản local chỉ khác ký tự xuống dòng CRLF). Môi trường: trình duyệt Chromium trong app, mô phỏng viewport; không gửi lead thật (lệnh gửi bị chặn để đọc nội dung, server giả lập trả 500).

| Mục | Kết quả trên build 17/11 | Đạt |
|---|---|---|
| U1 · Không tràn ngang | 375 / 390 / 768 / 1024 / 1366px: chiều rộng trang bằng vùng hiển thị | ✓ |
| U1 · Ảnh mới | 11/11 ảnh dòng xe designer, 5/5 ảnh hồ sơ, 6 ảnh "Vì sao chọn" (3 ảnh Chevrolet mới) tải đủ khi cuộn tới (ảnh từ auto365.vn tải chậm hơn nhưng không lỗi) | ✓ |
| U1 · Console | Không lỗi | ✓ |
| U1 · Accordion mới | 4 lưu ý gộp 1 accordion "Xem 4 lưu ý khi lắp bi gầm Chevrolet", mở/đóng được ở 375px | ✓ |
| U1 · Nhãn lưu trữ | 2 thẻ GTR 2019 có "Hồ sơ lưu trữ", hiện đủ ở 375px | ✓ |
| U1 · Bộ lọc (375px) | "LACÉTTI" → Lacetti; tìm "xyz" hiện thông báo trống; GTR → 2 hồ sơ; "Tất cả" → 5 hồ sơ | ✓ |
| U2 · Thẻ Trax (375px) | Cuộn tới form, ô Dòng xe = "Chevrolet Trax" | ✓ |
| U2 · Chặn số sai | "12345" → không gửi, báo "Số điện thoại chưa đúng, ví dụ 0365 365 365." | ✓ |
| U2 · Nội dung gửi | POST `/api/leads`: phone, fullname, car_model = "Chevrolet Trax", priority, province, form-honey, service/source_page = "Bi gầm Chevrolet", source_url, referrer | ✓ |
| U2 · Lỗi server | Trả 500 → "Chưa gửi được. Vui lòng gọi 0365 365 911 hoặc thử lại.", không báo thành công giả | ✓ |
| U3 · Schema/SEO | 1 H1; JSON-LD parse được; FAQ 9/9 khớp DOM; lastReviewed 2026-11-17, dateModified 2026-11-17; robots noindex/nofollow/noarchive | ✓ |

Còn mở như trên: lead → CRM, `generate_lead`, GET/header production, điện thoại thật (chủ quản).

## Cập nhật 18/11/2026 — bỏ 2 case GTR
Bài nguồn Trailblazer GTR và Orlando GTR V2 trả 404 → bỏ 2 thẻ. Các dòng "GTR", "Hồ sơ lưu trữ" ở bảng trên là kết quả của build trước. Bảng tái kiểm bản 3 ca ở mục cuối (build 19/11).

## Tái kiểm bản hiện hành — 3 ca, build 19/11/2026 (theo reviewer V2.3 ngày 19/11)

Build: `index.html` SHA-256 `38ebd3e6b9164559842fcea0f683f0cb5c7d44a83fb95369b2475e8041df4b70` (trùng mục lục hồ sơ). Người kiểm: team SEO, 19/11/2026. Môi trường: Chromium trong app, mô phỏng viewport; không gửi lead thật (chặn lệnh gửi để giả lập phản hồi).

| Mục | Kết quả | Đạt |
|---|---|---|
| HTML · Nesting | Thẻ case + cẩm nang: `.bd`/`.rw` đổi span → div; summary "Gợi ý theo nhu cầu" bỏ `<p>` (đổi span hiển thị block). DOM: 0 span chứa khối, 0 summary chứa p/div | ✓ |
| HTML · CSS | 14 thẻ style trong body dời lên head lúc build; body còn 0 | ✓ |
| HTML · ARIA | Ô tìm chi nhánh: input text + role=combobox + aria-controls tới listbox gợi ý; gõ "Đồng Nai" → 2 option, aria-expanded=true | ✓ |
| ID trùng / console | 0 / không lỗi | ✓ |
| U1 · Không tràn | 375px và 1024px: chiều rộng trang = vùng hiển thị | ✓ |
| U1 · Thẻ | 3 thẻ case, 8 thẻ cẩm nang, 11 thẻ dòng xe hiển thị như trước (ảnh auto365.vn tải chậm, không lỗi) | ✓ |
| U1 · Bộ lọc (375px) | "LACÉTTI" → Lacetti; lọc Orlando → 1 hồ sơ; "Tất cả" → 3 | ✓ |
| U1 · Accordion | "Gợi ý theo nhu cầu" mở/đóng, đoạn mô tả hiển thị đúng | ✓ |
| U2 · Form | Thẻ Trax → "Chevrolet Trax"; "12345" không gửi + báo lỗi; giả lập 500 → "Chưa gửi được…"; giả lập success + lead_id → "Đã nhận yêu cầu…" | ✓ |
| U3 · Hồ sơ | 01–06 xuất cùng build; 3 ca | ✓ |

[Lịch sử] mã ca/ngày thi công/cơ sở 3 ca đã đóng 21/11. Còn CX: lead → CRM, `generate_lead`, điện thoại thật, GET production.

## Truy xuất ca — 20/11/2026
Ba thẻ case nối với bài nguồn và mã ca trong Master Data 04: CHEV-CAP-2015-X3U (Captiva), CHEV-COL-VID-F10 (Colorado), CHEV-ORL-F10P (Orlando). Cơ sở và thời điểm lấy theo nội dung bài. Chỗ nào bài không ghi thì để trống có ghi chú, không lấy ngày đăng làm ngày thi công.

Ngày thi công 3 ca do chủ quản xác nhận 21/11/2026: Captiva 04/11/2026, Colorado 28/10/2023, Orlando 22/08/2024.

Cơ sở Colorado: Trụ Sở Chính (chủ quản xác nhận 21/11/2026). Đời xe Colorado/Orlando không lưu hồ sơ; thẻ ca trên hub không ghi đời xe — đã kiểm 21/11.
