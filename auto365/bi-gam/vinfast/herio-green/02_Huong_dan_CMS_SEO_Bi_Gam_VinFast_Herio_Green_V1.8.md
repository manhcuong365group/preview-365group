# Hướng dẫn CMS / SEO V1.9 — Bi gầm VinFast Herio Green

| Mục | Giá trị |
|---|---|
| Trang preview | https://preview-365group.pages.dev/bi-gam/vinfast/herio-green/ |
| URL production (owner) | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/herio-green |
| Hub cha | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast |
| Loại trang | MODEL_GUIDE — tư vấn bi gầm theo dòng xe (không phải case thi công) |
| Dựng | 07/11/2026 từ khung trang VF5 (Herio Green cùng nền tảng VF 5) |
| Kiểm duyệt kỹ thuật | anh Nguyễn Quang Đạo — xác nhận 17 mẫu lắp được Herio Green (07/11/2026) |
| SHA-256 index.html | `2abccf470e41096e30e0ac3db459d9881e37d48bd3ce9ecc47306223e6d29233` |

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

Từ 10/11/2026: 5 ảnh (hero, cản trước, lắp, bi gầm, hoàn thiện) là **ảnh thực tế Herio Green tại Auto365**; riêng ảnh vùng sáng Cos (05) vẫn là **minh họa AI**, không phải phép đo — thay khi có ảnh chụp tường thật.

| File | ALT hiện tại |
|---|---|
| hinh/herio-green_01-hero-toan-xe.jpg (hero, OG, Twitter, schema image) | Ảnh thực tế VinFast Herio Green lắp bi gầm tại Auto365 |
| hinh/herio-green_02-hoc-den-truoc-lap.jpg | Ảnh thực tế cản trước VinFast Herio Green sau lắp bi gầm tại Auto365 |
| hinh/herio-green_03-ky-thuat-vien-lap.jpg | Ảnh thực tế kỹ thuật viên Auto365 lắp bi gầm trên VinFast Herio Green |
| hinh/herio-green_04-bi-gam-sau-lap.jpg | Ảnh thực tế bi gầm trên cản trước VinFast Herio Green tại Auto365 |
| hinh/herio-green_05-vung-sang-cos.jpg | Vùng sáng Cos trên tường (minh họa AI, không phải phép đo) |
| hinh/herio-green_07-ban-giao-xe.jpg | Ảnh thực tế VinFast Herio Green hoàn thiện sau lắp bi gầm tại Auto365 |
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

## Nhật ký

| Ngày | Nội dung |
|---|---|
| 09/11/2026 | Vá audit V2.2 R1 (reviewer 08/11, 78/95): F10 New ghi thống nhất "bản 12–16V" ở thẻ, gợi ý, so sánh động, popup/form; công suất 45W Cos/55W Pha; ghi chú bản 24V 4.500.000đ; thêm đèn zin Halogen Projector có nguồn VinFast; sửa lời dẫn form gọi lại; nút Báo giá từng dòng bảng so sánh; dateModified 2026-11-09 |
