# Hướng dẫn CMS/SEO — Bi gầm VinFast EC Van V1.8

## Bản hiện hành — 24/10/2026

| Mục | Giá trị |
|---|---|
| URL đích | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/ec-van |
| Preview | https://preview-365group.pages.dev/bi-gam/vinfast/ec-van/ |
| Title | Bi gầm VinFast EC Van: Giá, cấu hình và lựa chọn phù hợp \| Auto365 |
| H1 | Bi gầm VinFast EC Van: giá, cấu hình và lựa chọn phù hợp |
| Meta description | Giữ nguyên thẻ `meta name="description"` trong `index.html` |
| Breadcrumb | Trang chủ (https://auto365.vn/) › Độ bi gầm › Bi gầm VinFast › EC Van |
| Bản nguồn | `index.html` SHA-256 `be3f1a78164aaa4ae26b8c62f2c87ffb281be37a893ab9e4f6b47321c2be5200` (24/10/2026) |

## Khi đăng production

1. Canonical, `og:url`, `@id`/`url` JSON-LD đã là auto365.vn — giữ nguyên.
2. `og:image`, `twitter:image` và `Article.image` đang trỏ ảnh trên preview (`hinh/vinfast-ec-van-anh-hang.webp`). Upload ảnh lên CMS rồi thay URL.
3. `noindex` chỉ dùng trên preview; bản production phải `index, follow`.
4. Xoá khối `#vf3lp-internal-check` (và CSS `.vf3lp-internal-check`).
5. FAQPage: 6 câu schema = 6 câu hiển thị (giữ nguyên văn).
6. CollectionPage/ItemList: 17 mục, đúng thứ tự 17 card sản phẩm. Không có X-Light F10 Pro (bản không V2).
7. Không có video, không có case EC Van: không thêm nhãn "Có case", không viết câu "đã lắp trên EC Van" cho đến khi có bài case/video thật.
8. Ảnh trên preview là **ảnh AI mô phỏng** (`hinh/<slug>-minh-hoa-0N.webp`) để duyệt bố cục; alt ghi "Ảnh minh họa AI (không phải ảnh thi công thực tế)" và có caption hiển thị cạnh hero/ảnh khối. Không dùng làm bằng chứng hốc lắp, vị trí lắp hay vùng sáng EC Van. **Phải thay bằng ảnh thật trước production** (ảnh xe EC Van thật/ảnh hãng chỉ nhận diện xe; ảnh kỹ thuật chỉ từ hồ sơ khảo sát/thi công thật). OG/Twitter/Article.image giữ ảnh riêng, đổi sang asset CMS khi đăng.
9. Nút "Xem tất cả 17 mẫu cho EC Van" phải mở đủ 17 mẫu tại chỗ; link hub ghi "Xem danh mục bi gầm".
10. dateModified/"Cập nhật" = ngày đăng; lastReviewed giữ 24/10/2026.
