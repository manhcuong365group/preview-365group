# Bi gầm VinFast VF Wild — Phiếu duyệt V1.8

## Bản hiện hành 07/11/2026

| Trường | Giá trị |
|---|---|
| Trạng thái | **TỰ KIỂM CHƯA ĐẠT — chờ chủ quản ký.** Mẫu đã được anh Nguyễn Quang Đạo xác nhận 07/11/2026; tự chấm 88,5/100; ảnh AI là lỗi mở trước production |
| Chuẩn | V1.9 (tên file giữ V1.8 như các trang VinFast khác) |
| URL preview / production | https://preview-365group.pages.dev/bi-gam/vinfast/vf-wild/ → https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/vf-wild |
| SHA-256 index.html | `636373ccad8241b59e8f8cb389288c01e01a1bd6c1019978606da20c65e408f0` |
| Ngày | datePublished/dateModified 2026-11-07; dòng Cập nhật 07/11/2026 |
| reviewedBy / lastReviewed | Nguyễn Quang Đạo · 2026-11-07 |
| Xác nhận mẫu | XAC_NHAN_TUONG_THICH_VF_WILD_20261107.md (17 mẫu, kiểm pát/điện trên từng xe) |
| Ảnh | Bộ minh họa AI 07/11/2026, ALT ghi rõ; phải thay ảnh chụp thực tế trước production |

## Phiếu U1–U3 (tự kiểm 07/11/2026)

Môi trường: localhost (`node scripts/serve-preview.mjs`), bản local có SHA ở trên. Lúc kiểm, bản live preview có SHA `2ae94f73…` (chưa phải bản này) nên chưa kiểm trên pages.dev.

### U1 — Hiển thị: TỰ KIỂM ĐẠT (4,5/5)

| Kiểm | Kết quả |
|---|---|
| Không tràn ngang | 360 → scrollWidth 360; 375 → 375; 390 → 390; 768 → 753; 1440 → 1437 |
| Ảnh | 0 ảnh lỗi ở mọi khổ; 7 ảnh vf-wild_01…07 tải đủ (naturalWidth 1536–1600) |
| Bảng/scroller | Thẻ sản phẩm, chip lọc, bảng so sánh cuộn trong khung, không làm tràn trang |
| Modal báo giá | Bấm "Nhận báo giá" mẫu X-Light 301 V2 → dialog mở, rộng 375px trên mobile; Đóng/close đóng được |
| Trừ điểm | Ảnh AI; chưa test máy thật iOS/Android |

### U2 — CTA/lead: TỰ KIỂM ĐẠT (4,0/5)

| Kiểm | Kết quả |
|---|---|
| Form | `form.nr-quote-form action="/api/leads" method="post"` |
| Trường | phone (required), fullname, car_model = "VinFast VF Wild", province, kenh, ghi_chu; hidden product / product_price / product_url, request_type = remote_quote, honeypot |
| SKU | Mở từ thẻ X-Light 301 V2 → product = "Bi gầm X-Light 301 V2" |
| Validate SĐT | quote.js kiểm `^(0\|\+?84)[35789]\d{8}$`; nhập "123" → aria-invalid=true, báo "Số điện thoại chưa đúng…", không hiện màn hình thành công |
| Thành công | quote.js chỉ hiện "Đã nhận yêu cầu báo giá" khi `res.success === true && res.lead_id`; lỗi → "Chưa gửi được…" |
| Không làm | Không gửi lead thật; chưa kiểm CRM/routing |
| Ghi chú | product_url dựng tương đối → trên preview là pages.dev (404), production đúng |

### U3 — Hồ sơ: TỰ KIỂM ĐẠT (4,0/5)

| Kiểm | Kết quả |
|---|---|
| SHA | 02/03/04 cùng SHA = index.html local |
| Ngày | JSON-LD datePublished/dateModified 2026-11-07, lastReviewed 2026-11-07, `<time datetime="2026-11-07">07/11/2026` |
| Reviewer | Person Đạo + reviewedBy; dòng "Rà soát kỹ thuật" link /tac-gia/nguyen-quang-dao; bảng xác nhận 07/11 |
| Schema | 1 script JSON.parse OK: WebSite, Organization, Person, BreadcrumbList, Article, CollectionPage (ItemList 17), FAQPage (9) |
| Trừ điểm | Bản live chưa đồng bộ; ảnh AI chưa thay |

**Kết luận:** U1–U3 tự kiểm đạt (12,5/15). Tổng tự chấm 88,5/100 — CHƯA ĐẠT V1.9 (SEO 25,5 < 28,5; GEO 23,0 < 23,75), chủ yếu do ảnh AI. Chờ chủ quản ký; không ghi PASS.

## Còn mở

Ảnh chụp thực tế thay 7 ảnh AI (P0 trước production); push bản hiện tại và kiểm lại SHA trên preview; Hub VinFast link trang này; map URL/OG production; gỡ khối kiểm tra nội bộ khi đăng.
