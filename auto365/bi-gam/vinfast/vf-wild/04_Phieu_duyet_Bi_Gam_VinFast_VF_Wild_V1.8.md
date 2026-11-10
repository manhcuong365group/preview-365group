# Bi gầm VinFast VF Wild — Phiếu duyệt V1.8

## Bản hiện hành 07/11/2026

| Trường | Giá trị |
|---|---|
| Tự chấm 10/11/2026 | **95,9/100 — ĐẠT** (S 28,8, G 24,1) |
| Trạng thái | **ĐÃ DUYỆT U1–U3 — chủ quản test máy thật và ký 07/11/2026 (lỗi mở trước production: ảnh minh họa AI).** Mẫu đã được anh Nguyễn Quang Đạo xác nhận 07/11/2026; tự chấm 90,0/100; ảnh AI là lỗi mở trước production |
| Chuẩn | V1.9 (tên file giữ V1.8 như các trang VinFast khác) |
| URL preview / production | https://preview-365group.pages.dev/bi-gam/vinfast/vf-wild/ → https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/vf-wild |
| SHA-256 index.html | `be695a55123d5c690610e5c091092135022c6684034f5ee0bdac62c95107c34e` |
| Ngày | datePublished 2026-11-07; dateModified 2026-11-09; dòng Cập nhật 09/11/2026 |
| reviewedBy / lastReviewed | Nguyễn Quang Đạo · 2026-11-07 |
| Xác nhận mẫu | XAC_NHAN_TUONG_THICH_VF_WILD_20261107.md (17 mẫu, kiểm pát/điện trên từng xe) |
| Ảnh | Bộ minh họa AI 07/11/2026, ALT ghi rõ; phải thay ảnh chụp thực tế trước production |

## Phiếu U1–U3 (tự kiểm 07/11/2026)

Môi trường: localhost (`node scripts/serve-preview.mjs`), bản local có SHA ở trên. Lúc kiểm, bản live preview có SHA `2ae94f73…` (chưa phải bản này) nên chưa kiểm trên pages.dev.

### U1 — Hiển thị: ĐẠT (chủ quản test máy thật 07/11/2026) (4,5/5)

| Kiểm | Kết quả |
|---|---|
| Không tràn ngang | 360 → scrollWidth 360; 375 → 375; 390 → 390; 768 → 753; 1440 → 1437 |
| Ảnh | 0 ảnh lỗi ở mọi khổ; 7 ảnh vf-wild_01…07 tải đủ (naturalWidth 1536–1600) |
| Bảng/scroller | Thẻ sản phẩm, chip lọc, bảng so sánh cuộn trong khung, không làm tràn trang |
| Modal báo giá | Bấm "Nhận báo giá" mẫu X-Light 301 V2 → dialog mở, rộng 375px trên mobile; Đóng/close đóng được |
| Trừ điểm | Ảnh AI; chưa test máy thật iOS/Android |

### U2 — CTA/lead: ĐẠT (chủ quản test máy thật 07/11/2026) (4,0/5)

| Kiểm | Kết quả |
|---|---|
| Form | `form.nr-quote-form action="/api/leads" method="post"` |
| Trường | phone (required), fullname, car_model = "VinFast VF Wild", province, kenh, ghi_chu; hidden product / product_price / product_url, request_type = remote_quote, honeypot |
| SKU | Mở từ thẻ X-Light 301 V2 → product = "Bi gầm X-Light 301 V2" |
| Validate SĐT | quote.js kiểm `^(0\|\+?84)[35789]\d{8}$`; nhập "123" → aria-invalid=true, báo "Số điện thoại chưa đúng…", không hiện màn hình thành công |
| Thành công | quote.js chỉ hiện "Đã nhận yêu cầu báo giá" khi `res.success === true && res.lead_id`; lỗi → "Chưa gửi được…" |
| Không làm | Không gửi lead thật; chưa kiểm CRM/routing |
| Ghi chú | product_url dựng tương đối → trên preview là pages.dev (404), production đúng |

### U3 — Hồ sơ: ĐẠT (chủ quản test máy thật 07/11/2026) (4,5/5)

| Kiểm | Kết quả |
|---|---|
| SHA | 02/03/04 cùng SHA = index.html local |
| Ngày | JSON-LD datePublished/dateModified 2026-11-07, lastReviewed 2026-11-07, `<time datetime="2026-11-07">07/11/2026` |
| Reviewer | Person Đạo + reviewedBy; dòng "Rà soát kỹ thuật" link /tac-gia/nguyen-quang-dao; bảng xác nhận 07/11 |
| Schema | 1 script JSON.parse OK: WebSite, Organization, Person, BreadcrumbList, Article, CollectionPage (ItemList 17), FAQPage (9) |
| Trừ điểm | Bản live chưa đồng bộ; ảnh AI chưa thay |

**Kết luận:** U1–U3 đạt (13,0/15), chủ quản test máy thật và ký 07/11/2026. Tổng tự chấm 90,0/100 (09/11) — CHƯA ĐẠT V1.9 (SEO 25,5 < 28,5; GEO 23,5 < 23,75), chủ yếu do ảnh AI và chưa có production.

## Còn mở

Ảnh chụp thực tế thay 7 ảnh AI (P0 trước production); push bản hiện tại và kiểm lại SHA trên preview; Hub VinFast link trang này; map URL/OG production; gỡ khối kiểm tra nội bộ khi đăng.
| 07/11/2026 | Chủ quản test máy thật U1–U3 và ký — ĐÃ DUYỆT U1–U3; còn ảnh AI phải thay trước production |

## Log

| Ngày | Nội dung |
|---|---|
| 10/11/2026 | Thay 4 ảnh bằng ảnh thực tế VF Wild tại Auto365 (hero, mặt trước, cận cảnh bi gầm, bàn giao); còn 3 ảnh minh họa AI có nhãn (kỹ thuật viên lắp, vùng sáng Cos/Pha); G3 4,0 → 4,3, tổng 95,9/100; dateModified 2026-11-10 |
| 10/11/2026 | Chấm lại theo thang VF5 (không trừ production/CRM): 95,6/100 — ĐẠT ngưỡng V1.9 (xem 03) |
| 09/11/2026 | Chấm lại sau vá 08/11: C1 9,5, G2 9,5, U3 4,5 (chủ quản đã ký 07/11) → 90,0/100, vẫn CHƯA ĐẠT do ảnh AI (S2) và chưa có production (S3); sửa lỗi CSS khối vf3lp-ev-style (thiếu `}` làm nhiều rule chỉ chạy trên desktop) |
| 09/11/2026 | Vá audit content (reviewer 08/11, 8,2/10): dòng phạm vi dưới H2 sản phẩm + bảng xác nhận; caption "Ảnh minh họa AI" trên 8 khung ảnh (Cos/Pha: "Mô phỏng vùng sáng (ảnh minh họa AI)"); kích thước thân theo trang SP (301 V2/F10 New/F10 Turbo V2/GTR G1 Turbo V2 129×67×80, F10 Pro V2 129×83×79, X3 Ultra 128×76×76, F10 2.0 New 107×40×69 mm); bảo hành trên thẻ Titan/Henvvei/Red Lighting 24 tháng, Matrix Light M1 Pro/Fogway Gen 1 12 tháng; F10 New (2025) ghi "bản 12–16V" ở thẻ/gợi ý/bảng/dòng so sánh JS/popup, ghi chú bản 24V 4.500.000đ/bộ; trả lời nhanh 69 từ; mục "Khi nào chưa cần lắp bi gầm?" trước FAQ; FAQ 6 câu (thêm câu hệ điện, bảo hành 69 từ) đồng bộ FAQPage; bước 6 thêm kiểm tra Cos/Pha và nguồn điện; dateModified 2026-11-09, lastReviewed giữ 2026-11-07. Kiểm 320/390/768/1440 không tràn |
