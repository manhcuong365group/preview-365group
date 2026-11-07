# Hướng dẫn CMS / SEO — Bi gầm VinFast Herio Green

| Mục | Giá trị |
|---|---|
| Trang preview | https://preview-365group.pages.dev/bi-gam/vinfast/herio-green/ |
| URL production (owner) | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/herio-green |
| Hub cha | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast |
| Loại trang | MODEL_GUIDE — tư vấn bi gầm theo dòng xe (không phải case thi công) |
| Dựng | 07/11/2026 từ khung trang VF5 (Herio Green cùng nền tảng VF 5) |
| Kiểm duyệt kỹ thuật | anh Nguyễn Quang Đạo — xác nhận 17 mẫu lắp được Herio Green (07/11/2026) |
| SHA-256 index.html | `2d0ea18afe72e2478e89ffd338a3f5594690b67c0579ab828034b74ea79c2939` |

## 1. Metadata

- **Title:** `Bi gầm VinFast Herio Green: Giá, cấu hình và lựa chọn phù hợp | Auto365`
- **Meta description:** `Tư vấn bi gầm VinFast Herio Green: giá đèn từ 3,5 triệu đồng/bộ chưa VAT, chọn cấu hình theo nhu cầu, kiểm tra vị trí lắp, pát và hệ điện trước khi thi công.`
- **H1:** `Bi gầm VinFast Herio Green: phương án lắp, giá và lựa chọn phù hợp`
- **Canonical:** URL production ở trên (self-reference).
- **Robots:** preview `noindex, nofollow, noarchive` (đúng cho staging). **Production phải đổi sang `index, follow`** và kiểm cả `X-Robots-Tag`/robots.txt.
- Không dùng meta keywords.

## 2. Schema (một khối `@graph`)

WebSite, Organization, BreadcrumbList (Trang chủ → Nâng cấp ánh sáng bi gầm → VinFast → Herio Green), Person (Nguyễn Quang Đạo), Article, CollectionPage + ItemList 17 mẫu, FAQPage 9 câu.

- `datePublished` 2026-11-07, `dateModified` 2026-11-07, `reviewedBy` = Person Đạo, `lastReviewed` 2026-11-07.
- FAQ schema phải trùng nguyên văn FAQ hiển thị. Không hứa rich result.
- Kiểm: `JSON.parse` toàn bộ `script[type="application/ld+json"]` trên HTML đã deploy.

## 3. Ảnh và ALT

Bộ ảnh hiện tại là **ảnh minh họa AI (07/11/2026)** — không phải case thi công; ảnh Cos không phải phép đo. **Phải thay bằng ảnh chụp thực tế Herio Green trước khi lên production.**

| File | ALT hiện tại |
|---|---|
| hinh/herio-green_01-hero-toan-xe.jpg (hero, OG, Twitter, schema image) | Ảnh minh họa AI VinFast Herio Green |
| hinh/herio-green_02-hoc-den-truoc-lap.jpg | Ảnh minh họa AI hốc cản trước VinFast Herio Green trước khi lắp bi gầm |
| hinh/herio-green_03-ky-thuat-vien-lap.jpg | Ảnh minh họa AI kỹ thuật viên lắp bi gầm trên VinFast Herio Green |
| hinh/herio-green_04-bi-gam-sau-lap.jpg | Ảnh minh họa AI bi gầm bật sáng trên VinFast Herio Green |
| hinh/herio-green_05-vung-sang-cos.jpg | Vùng sáng Cos trên tường (minh họa AI, không phải phép đo) |
| hinh/herio-green_07-ban-giao-xe.jpg | Ảnh minh họa AI VinFast Herio Green hoàn thiện sau lắp bi gầm |
| hinh/tra-cuu-bao-hanh-phieu-ban-giao.webp | Ảnh minh họa: tra cứu bảo hành điện tử và phiếu bàn giao sản phẩm Auto365 |

Khi có ảnh thật: giữ tên file, đổi ALT sang mô tả thực tế (không ghi "minh họa AI"), cập nhật og:image:alt.

## 4. Liên kết

- Lên: Hub VinFast, hub bi gầm, danh mục nâng cấp ánh sáng.
- Ngang: VF5 (production), VF3, VF6, VF7, VF8, VF MPV 7, Limo Green, Fadil, Lux SA2.0, EC Van, VF Wild, Minio Green.
- **Hub VinFast production cần thêm card Herio Green** trỏ URL owner — chỉ sau khi URL production trả 200.

## 5. Checklist IT khi đăng production

- [ ] URL owner trả HTTP 200, canonical self-reference.
- [ ] Robots `index, follow`; bỏ `noindex` của preview.
- [ ] **Gỡ khối `<aside id="vf3lp-internal-check">` và script `vf3lp-internal-check-js` khỏi HTML production** (xoá hẳn, không ẩn bằng CSS).
- [ ] Copy ảnh sang CDN auto365.vn; đổi og:image, twitter:image, Article/CollectionPage image sang URL CDN (không để `preview-365group.pages.dev`).
- [ ] Thay link card sibling dạng `../vf6/` sang URL production tương ứng.
- [ ] `JSON.parse` JSON-LD trên bản deploy; validate Schema.
- [ ] Form `/api/leads`: test lead có cờ test, chỉ hiện "đã nhận" khi `{success:true, lead_id}`; kiểm CRM nhận `service = Báo giá bi gầm VinFast Herio Green`, `car_model`, `product`.
- [ ] Thêm vào sitemap; thêm card trên Hub VinFast.
