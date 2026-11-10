# Hướng dẫn CMS/SEO — Bi gầm VinFast Minio Green (V1.9)

| Mục | Giá trị |
|---|---|
| Trang | Bi gầm VinFast Minio Green (MODEL_GUIDE, tư vấn theo dòng xe) |
| Preview | https://preview-365group.pages.dev/bi-gam/vinfast/minio-green/ |
| URL production | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/minio-green |
| SHA-256 index.html | `70e6c1660490c14961d6b6e78b96db125e5187371a5979940c407319d974c102` |
| Dựng | 07/11/2026, từ khung trang VF9 |
| Kỹ thuật xác nhận | Anh Nguyễn Quang Đạo — 9 mẫu, 07/11/2026 (bảng `XAC_NHAN_TUONG_THICH_MINIO_GREEN_20261107.md`) |
| datePublished / dateModified / lastReviewed | 2026-11-07 / 2026-11-09 / 2026-11-07 |

## 1. Metadata

- **Title:** `Bi gầm VinFast Minio Green: Giá, cấu hình và lựa chọn phù hợp | Auto365`
- **Meta description (160 ký tự):** `Bi gầm VinFast Minio Green: 9 mẫu X-Light, GTR, AES lens 3.0 và 2.0 inch được kỹ thuật xác nhận, giá từ 4,5 triệu/bộ chưa VAT, kiểm tra pát, điện trước khi lắp.`
- **H1:** `Bi gầm VinFast Minio Green: phương án lắp, giá và lựa chọn phù hợp`
- **Canonical:** self, URL production ở trên.
- **Robots:** preview `noindex, nofollow, noarchive` (đúng cho staging). **Production: đổi sang `index, follow`**, kiểm cả meta và header `X-Robots-Tag`.
- **Breadcrumb:** Trang chủ → Nâng cấp ánh sáng → Bi gầm → VinFast → Minio Green.

## 2. Nội dung chính

- Tổng quan: Minio Green là xe điện mini dòng Green của VinFast, hướng tới chạy dịch vụ và di chuyển đô thị, dùng chung nền tảng với VF 3.
- 9 mẫu bi gầm (X-Light 5, GTR 1, AES 3), lens 3.0 inch và 2.0 inch; giá thiết bị 4,5–6 triệu đồng/bộ, chưa VAT; pát, công, phụ kiện báo sau khi xem xe.
- 9 mẫu: X-Light 301 V2, GTR G1 Turbo V2, X-Light F10 Turbo V2, AES SV 3.0 Pro, X-Light F10 Pro V2, X-Light X3 Ultra, AES SV 3.0 Max, X-Light F10 2.0 New, AES SV 2.0 Max.
- Bảng so sánh 7 mẫu chính; bộ lọc hãng; gợi ý theo nhu cầu (đi phố, mưa/đường tối, đi tỉnh, tiết kiệm).
- FAQ: câu đầu dùng xác nhận kỹ thuật "Kỹ thuật Auto365 (anh Nguyễn Quang Đạo, 07/11/2026) đã xác nhận 9 mẫu…". **Không** ghi "mọi đời".

## 3. Schema (một khối JSON-LD `@graph`)

Organization, WebSite, Person (Nguyễn Quang Đạo), BreadcrumbList, Article, CollectionPage (reviewedBy + lastReviewed), ItemList (numberOfItems = 9), Product ×9, FAQPage, Car. Kiểm `JSON.parse` trên HTML đã deploy; nội dung FAQ schema phải khớp FAQ hiển thị.

## 4. Ảnh và ALT

Ảnh 01/02/03/04/07 là **ảnh thực tế Minio Green tại Auto365 (10/11/2026)**; ảnh 05/06 Cos/Pha vẫn là **mô phỏng AI có nhãn** — thay khi có ảnh tường đo thật.

| File | Vị trí | ALT |
|---|---|---|
| minio-green_01-hero-toan-xe.jpg | Hero, OG, Twitter, Article.image | VinFast Minio Green sau khi lắp bi gầm tại Auto365, ảnh thực tế |
| minio-green_02-hoc-den-gam-zin.jpg | Tổng quan | Mặt trước VinFast Minio Green tại Auto365, ảnh thực tế |
| minio-green_03-ky-thuat-vien-dang-lap.jpg | Thẻ lưu ý lắp | Kỹ thuật viên Auto365 lắp bi gầm vào hốc cản…, ảnh thực tế |
| minio-green_04-bi-gam-sau-lap.jpg | Thẻ báo giá | Cận cảnh bi gầm sau khi lắp…, ảnh thực tế tại Auto365 |
| minio-green_05-vung-sang-cos.jpg | Lý do chọn | Ảnh minh họa AI đường cắt Cos trên tường đo, không phải phép đo |
| minio-green_06-vung-sang-pha.jpg | Lý do chọn | Ảnh minh họa AI vùng sáng Pha trên tường đo, không phải phép đo |
| minio-green_07-ban-giao-xe.jpg | Lý do chọn (2 thẻ) | VinFast Minio Green sau khi lắp / hoàn thiện, ảnh thực tế tại Auto365 |

Khi có ảnh thật: giữ tên file, sửa ALT bỏ "minh họa AI", cập nhật width/height, khối nội bộ và phiếu 03/04.

## 5. Liên kết

- Lên: hub https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast và https://auto365.vn/nang-cap-anh-sang-bi-gam.
- Ngang: thẻ các mẫu VinFast khác (VF3, VF9, VF Wild, Herio Green, VF5, VF6, VF7, VF8, VF e34, VF MPV 7, Limo Green, Fadil, Lux SA2.0, EC Van). Khi map production, các link tương đối `../x/` phải đổi sang URL production tương ứng.
- Hub VinFast production cần thêm thẻ Minio Green trỏ URL production **sau khi** URL trả 200.

## 6. Checklist IT khi đăng production

- [ ] Gỡ hẳn `<aside id="vf3lp-internal-check">` và script `vf3lp-internal-check-js` khỏi HTML (không chỉ ẩn).
- [ ] Đổi og:image, twitter:image, Article.image từ `preview-365group.pages.dev` sang CDN auto365.vn.
- [ ] Robots `index, follow`; canonical self; sitemap trang + ảnh.
- [ ] Form `/api/leads`: chỉ báo thành công khi `{"success": true}` kèm `lead_id`; field `service`/`source_page`/`car_model` = VinFast Minio Green; `product_url` của modal báo giá phải là auto365.vn.
- [ ] Mọi ảnh/CSS/JS trả 200, không mixed content.
- [x] Thay ảnh AI bằng ảnh thực tế (5/7 ảnh, 10/11). Còn 2 ảnh Cos/Pha mô phỏng có nhãn.

## Nhật ký

| Ngày | Nội dung |
|---|---|
| 07/11/2026 | Dựng trang từ khung VF9, 9 mẫu theo VF 3 cùng nền tảng |
| 07/11/2026 | Anh Nguyễn Quang Đạo xác nhận 9 mẫu; reviewedBy + lastReviewed 2026-11-07 |
| 07/11/2026 | Bộ 7 ảnh minh họa AI; khôi phục khung ảnh 03/04 |
| 07/11/2026 | Viết lại hồ sơ 02/03/04 riêng cho Minio Green; tự kiểm U1–U3 |
| 09/11/2026 | Vá audit content 08/11 (7,2/10): sapo trước Trả lời nhanh (74 từ), meta 160 ký tự nhắc lens 2.0/3.0; dòng phạm vi dưới H2; bảng so sánh đủ 9 mẫu + cột kích thước thân theo trang SP (X3 Ultra, AES SV 2.0 Max xác nhận bằng trang SP); JS so sánh bỏ "Cần xác nhận theo mã"; caption "Ảnh minh họa AI" / "Mô phỏng vùng sáng" trên 8 ảnh; bảng chọn theo nhu cầu + "Khi nào chưa cần nâng cấp" + kết luận; quy trình 7 bước dạng bảng; FAQ 6 câu (bảo hành 72 từ), 3 câu chi nhánh chuyển sang mục tiếp nhận; dateModified 2026-11-09 |
| 10/11/2026 | Thay 5 ảnh thực tế Minio Green tại Auto365 (01 hero 1600×902, 02 mặt trước 1600×1067, 03 đang lắp, 04 cận bi gầm, 07 hoàn thiện); bỏ nhãn AI, sửa ALT/OG/caption; 05/06 Cos/Pha vẫn mô phỏng AI có nhãn; dateModified 2026-11-10; G3 4,0 → 4,4, tổng 95,8 |
