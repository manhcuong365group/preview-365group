# Hướng dẫn CMS/SEO — Bi gầm VinFast VF5 V1.8

## Bản hiện hành — 24/10/2026

| Mục | Giá trị |
|---|---|
| URL đích | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/vf5 (chưa đăng) |
| Preview | https://preview-365group.pages.dev/bi-gam/vinfast/vf5/ |
| Title | Bi gầm VinFast VF5: Giá, cấu hình và lựa chọn phù hợp \| Auto365 |
| H1 | Bi gầm VinFast VF5: phương án lắp, giá và lựa chọn phù hợp |
| Meta description | Giữ nguyên thẻ `meta name="description"` trong `index.html` |
| Breadcrumb | Trang chủ (https://auto365.vn/) › Độ bi gầm › Bi gầm VinFast › VF5 |
| Bản nguồn | `index.html` SHA-256 `fb2638b2a4192567a0cc6b012b50329cd41f65b6ca103044942eda12cb179a86` (24/10/2026) |

## Khi đăng production

1. Canonical, `og:url`, `@id`/`url` JSON-LD đã ở auto365.vn; kiểm tra lại đúng URL cuối.
2. `noindex` chỉ dùng trên preview; bản production phải `index, follow`.
3. Xoá khối `#vf3lp-internal-check` (và CSS `.vf3lp-internal-check`).
4. FAQPage: 6 câu schema = 6 câu hiển thị (đã đối chiếu 1:1).
5. CollectionPage/ItemList: 17 mục, đúng thứ tự 17 card sản phẩm; nút "Xem tất cả 17 mẫu cho VF5" mở đủ 17 mẫu tại chỗ.
6. Ảnh trên preview là **ảnh AI mô phỏng** (`hinh/<slug>-minh-hoa-0N.webp`) để duyệt bố cục; alt ghi "Ảnh minh họa AI (không phải ảnh thi công thực tế)" và có caption hiển thị cạnh hero/ảnh khối. Không dùng làm bằng chứng hốc lắp, vị trí lắp hay vùng sáng VF5. **Phải thay bằng ảnh thật trước production** (ảnh xe VF5 thật/ảnh hãng chỉ nhận diện xe; ảnh kỹ thuật chỉ từ hồ sơ khảo sát/thi công thật). OG/Twitter/Article.image giữ ảnh riêng, đổi sang asset CMS khi đăng.
7. Trang **không có** khối video và không có case bi gầm VF5 (chưa có trên auto365.vn). Mục "Xe VinFast đã lắp bi gầm tại Auto365" hiển thị case xe VinFast khác (Fadil, VF7, VF3, Limo Green, VF6), không gắn nhãn VF5.
8. Khi có bài case/video bi gầm VF5 thật: thêm vào mục case, đổi nhãn mẫu tương ứng trong bảng so sánh, cập nhật phiếu 03/04.
9. dateModified/"Cập nhật" = ngày đăng; lastReviewed giữ 2026-10-24.
