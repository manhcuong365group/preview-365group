# 06 — Phiếu nghiệm thu U3 hub Bi gầm Chevrolet

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
| U3 · Bàn giao | Hồ sơ 01–06 cùng một lần xuất; 11 dòng xe, 5 hồ sơ | ✓ |

## Còn mở (chỉ nghiệm thu được trên URL chính thức)
- Preview không có `/api/leads` (trả 405), giống các hub hãng xe khác — gửi lead thật vào CRM (`priority`) và sự kiện `generate_lead` một lần/lượt gửi chỉ kiểm được khi IT đăng trang lên auto365.vn.
- Chủ quản test trên điện thoại thật.

## Tái kiểm trên build 17/11/2026 (theo reviewer V2.3 R2) — 18/11/2026

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
