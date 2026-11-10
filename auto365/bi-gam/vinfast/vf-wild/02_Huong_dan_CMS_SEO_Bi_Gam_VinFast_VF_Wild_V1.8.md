# Bi gầm VinFast VF Wild — Hướng dẫn CMS/SEO V1.8

Bản 07/11/2026 · Chuẩn V1.9

| Trường | Giá trị |
|---|---|
| SHA-256 index.html | `9aacd8c8778bc51b8af6a496a9965f47f4b82ed3786be8aacb406ebbd82dabb2` |
| URL preview | https://preview-365group.pages.dev/bi-gam/vinfast/vf-wild/ |
| URL production | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/vf-wild |

## 1. On-page

| Hạng mục | Giá trị |
|---|---|
| Title | Bi gầm VinFast VF Wild: Giá, cấu hình và lựa chọn phù hợp \| Auto365 |
| Meta description | Tư vấn bi gầm VinFast VF Wild: giá đèn từ 3,5 triệu đồng/bộ chưa VAT, chọn cấu hình theo nhu cầu, kiểm tra vị trí lắp, pát và hệ điện trước khi thi công. |
| H1 | Bi gầm VinFast VF Wild: phương án lắp, giá và lựa chọn phù hợp |
| H2 sản phẩm | 17 mẫu bi gầm kỹ thuật Auto365 xác nhận lắp được trên VinFast VF Wild |
| Mô tả xe | "mẫu bán tải điện của VinFast" — không thêm năm, kích thước, phiên bản khi chưa có nguồn |
| Canonical | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/vf-wild (tự trỏ) |
| Robots | Preview: `noindex, nofollow, noarchive`. Production: `index, follow` (kiểm cả X-Robots-Tag) |

## 2. Schema (1 script JSON-LD, @graph)

WebSite · Organization · Person (Nguyễn Quang Đạo, /tac-gia/nguyen-quang-dao) · BreadcrumbList (Nâng cấp ánh sáng → Bi gầm → VinFast → VF Wild) · Article · CollectionPage (reviewedBy Đạo, lastReviewed 2026-11-07, ItemList 17 mẫu) · FAQPage (6 câu, khớp FAQ hiển thị). datePublished 2026-11-07, dateModified 2026-11-09. Mỗi lần sửa: `JSON.parse` lại script, dateModified = ngày sửa.

## 3. Ảnh — bộ minh họa AI 07/11/2026, BẮT BUỘC thay ảnh chụp thực tế trước production

| File | Vị trí | ALT |
|---|---|---|
| hinh/vf-wild_01-hero-toan-xe.jpg | Hero, og:image, twitter:image, Article.image | Ảnh minh họa AI: VinFast VF Wild toàn xe |
| hinh/vf-wild_02-hoc-den-truoc-lap.jpg | Khối tổng quan | Ảnh minh họa AI: vị trí lắp bi gầm trên cản trước VinFast VF Wild, trước khi lắp đèn |
| hinh/vf-wild_03-ky-thuat-vien-dang-lap.jpg | Khối "Khi nào cần kiểm tra xe" | Ảnh minh họa AI: kỹ thuật viên lắp bi gầm vào cản trước VinFast VF Wild |
| hinh/vf-wild_04-bi-gam-sau-lap.jpg | Khối giá | Ảnh minh họa AI: bi gầm lắp trên cản trước VinFast VF Wild |
| hinh/vf-wild_05-vung-sang-cos.jpg | Khối "Lý do chọn" | Ảnh minh họa AI: vùng sáng Cos của bi gầm (minh họa AI, không phải phép đo) |
| hinh/vf-wild_06-vung-sang-pha.jpg | Khối "Lý do chọn" | Ảnh minh họa AI: vùng sáng Pha của bi gầm (minh họa AI, không phải phép đo) |
| hinh/vf-wild_07-ban-giao-xe.jpg | 2 thẻ hỗ trợ | Ảnh minh họa AI: VinFast VF Wild sau khi lắp bi gầm |

Khi có ảnh thật: giữ tên file, bỏ chữ "minh họa AI" trong ALT, không gắn SKU/địa điểm nếu chưa có hồ sơ ca.

## 4. Liên kết

- Trong: hub /nang-cap-anh-sang-bi-gam/vinfast, /nang-cap-anh-sang-bi-gam, /nang-cap-anh-sang; khối dòng xe khác (VF9, VF e34, VF5, VF6, VF7, VF8, MPV7, Limo Green, Herio Green, Minio Green, EC Van, Fadil, Lux SA2.0, VF3); cẩm nang ánh sáng; danh bạ /chi-nhanh; tác giả /tac-gia/nguyen-quang-dao.
- Thẻ đang trỏ preview (`../xxx/`) phải đổi sang URL production khi đăng.
- Hub VinFast production cần thêm thẻ VF Wild sau khi URL production trả 200.

## 5. Checklist IT khi đăng production

- [ ] Gỡ hẳn `<aside id="vf3lp-internal-check">` và script `vf3lp-internal-check-js` khỏi HTML (không chỉ ẩn).
- [ ] Đổi og:image / twitter:image / Article.image từ preview-365group.pages.dev sang CDN auto365.vn.
- [ ] Robots `index, follow`; canonical tự trỏ; thêm vào sitemap.
- [ ] Form giữ `action="/api/leads"`, chỉ báo thành công khi `{success:true, lead_id}`; test 1 lead test rồi xoá.
- [ ] Thay 7 ảnh AI bằng ảnh chụp thực tế.
- [ ] Kiểm 200 cho ảnh/CSS/JS; JSON.parse JSON-LD trên bản production.

## Log

| Ngày | Nội dung |
|---|---|
| 10/11/2026 | Thay 4 ảnh bằng ảnh thực tế VF Wild tại Auto365 (hero, mặt trước, cận cảnh bi gầm, bàn giao); còn 3 ảnh minh họa AI có nhãn (kỹ thuật viên lắp, vùng sáng Cos/Pha); G3 4,0 → 4,3, tổng 95,9/100; dateModified 2026-11-10 |
| 09/11/2026 | Vá audit content (reviewer 08/11, 8,2/10): dòng phạm vi dưới H2 sản phẩm + bảng xác nhận; caption "Ảnh minh họa AI" trên 8 khung ảnh (Cos/Pha: "Mô phỏng vùng sáng (ảnh minh họa AI)"); kích thước thân theo trang SP (301 V2/F10 New/F10 Turbo V2/GTR G1 Turbo V2 129×67×80, F10 Pro V2 129×83×79, X3 Ultra 128×76×76, F10 2.0 New 107×40×69 mm); bảo hành trên thẻ Titan/Henvvei/Red Lighting 24 tháng, Matrix Light M1 Pro/Fogway Gen 1 12 tháng; F10 New (2025) ghi "bản 12–16V" ở thẻ/gợi ý/bảng/dòng so sánh JS/popup, ghi chú bản 24V 4.500.000đ/bộ; trả lời nhanh 69 từ; mục "Khi nào chưa cần lắp bi gầm?" trước FAQ; FAQ 6 câu (thêm câu hệ điện, bảo hành 69 từ) đồng bộ FAQPage; bước 6 thêm kiểm tra Cos/Pha và nguồn điện; dateModified 2026-11-09, lastReviewed giữ 2026-11-07. Kiểm 320/390/768/1440 không tràn |
