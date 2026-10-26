# Hướng dẫn CMS/SEO — Bi gầm VinFast VF8 V1.8

## Bản hiện hành — 24/10/2026

| Mục | Giá trị |
|---|---|
| URL đích dự kiến | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/vf8 |
| Preview | https://preview-365group.pages.dev/bi-gam/vinfast/vf8/ |
| Title | Bi gầm VinFast VF8: Giá, cấu hình và lựa chọn phù hợp \| Auto365 |
| H1 | Bi gầm VinFast VF8: phương án lắp, giá và lựa chọn phù hợp |
| Meta description | Giữ nguyên thẻ `meta name="description"` trong `index.html` |
| Breadcrumb | Trang chủ (https://auto365.vn/) › Độ bi gầm › Bi gầm VinFast › VF8 |
| Bản nguồn | `index.html` SHA-256 `54820287cf2f881ad2c656930e044abd56900d92e0b45aaa35e2f9b8024ae7e2` (24/10/2026) |

## Khi đăng production

1. Canonical, `og:url`, `@id`/`url` JSON-LD và breadcrumb đã dùng https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/vf8.
2. `noindex` chỉ dùng trên preview; bản production phải `index, follow`.
3. Xoá khối `#vf3lp-internal-check` (và CSS `.vf3lp-internal-check`).
4. FAQPage: 6 câu schema = 6 câu hiển thị.
5. CollectionPage/ItemList: 17 mục, đúng thứ tự 17 card sản phẩm (15 mẫu lens 3.0 inch + 2 mẫu lens 2.0 inch).
6. Không có video và không có case bi gầm VF8 — không thêm câu "đã lắp trên VF8". Mục case hiển thị case VinFast khác.
7. Nút "Xem tất cả 17 mẫu cho VF8" mở đủ 17 mẫu tại chỗ; link sang hub ghi "Xem danh mục bi gầm".
8. Ảnh trên preview là **ảnh AI mô phỏng** (`hinh/<slug>-minh-hoa-0N.webp`) để duyệt bố cục; alt ghi "Ảnh minh họa AI (không phải ảnh thi công thực tế)" và có caption hiển thị cạnh hero/ảnh khối. Không dùng làm bằng chứng hốc lắp, vị trí lắp hay vùng sáng VF8. **Phải thay bằng ảnh thật trước production** (ảnh xe VF8 thật/ảnh hãng chỉ nhận diện xe; ảnh kỹ thuật chỉ từ hồ sơ khảo sát/thi công thật). OG/Twitter/Article.image giữ ảnh riêng, đổi sang asset CMS khi đăng.
9. dateModified/"Cập nhật" = ngày đăng; lastReviewed giữ 24/10/2026.
