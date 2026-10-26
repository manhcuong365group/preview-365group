# Hướng dẫn CMS/SEO — Bi gầm VinFast Lux SA2.0 V1.8

| Mục | Nội dung |
|---|---|
| Bản | `index.html` SHA-256 `e6bfc1736cafa1afd6b5157c415a17f27ecba1a3c598563095a404fc264915e4` (22/10/2026) |
| URL đích dự kiến | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/lux-sa20 — chờ SEO chốt |
| Title | Bi gầm VinFast Lux SA2.0: Giá, cấu hình và case thực tế \| Auto365 (giữ nguyên) |
| H1 | Giữ nguyên như preview |
| Meta description | Tư vấn bi gầm Lux SA2.0: giá thiết bị 3,5–6 triệu/bộ, cấu hình tham khảo và xe đã lắp tại Auto365. Kiểm tra hốc đèn, bộ gá, hệ điện trước khi chọn. (dùng chung og:description, twitter:description) |

## Việc khi đăng production

1. Đổi canonical, og:url, mọi `@id`/`url` trong JSON-LD và BreadcrumbList (4 cấp) từ `v2.auto365.vn` sang host cuối cùng.
2. `noindex` chỉ giữ trên preview; production phải index.
3. Xoá khối `#vf3lp-internal-check` và script `#vf3lp-internal-check-js`.
4. FAQ: 6 câu hiển thị = 6 Question trong FAQPage — sửa câu nào thì sửa cả hai.
5. ItemList: numberOfItems 16 = 16 thẻ sản phẩm; URL mỗi ListItem = href thẻ.
6. Ảnh: toàn bộ ảnh thật trong `hinh/` (WebP) và ảnh bài case trên auto365.vn — upload giữ alt.
7. Video: w3LC1LS9s68 (X-Light F10 Turbo V2 5500K trên Lux SA2.0); vCnfKrscBU4 (GTR G1 Turbo trên Lux SA — không ghi V2).
8. dateModified/"Cập nhật" = ngày đăng; lastReviewed giữ ngày duyệt kỹ thuật.
