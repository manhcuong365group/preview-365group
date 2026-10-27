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
| Bản nguồn | `index.html` SHA-256 `a7e596880e6d7cf2b585ea0eb2bc23ff2833d5870beff6c162703e9dccaf1bbe` (24/10/2026) |

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
10. dateModified/"Cập nhật" = ngày đăng; lastReviewed giữ 26/10/2026.


## Bản hiện hành V1.9 — 27/10/2026

Sửa theo audit V1.9 R2 (27/10/2026). Điểm 96,x là tự chấm V1.8 (lịch sử); kết quả V1.9 chờ sếp tái chấm.

| Mã | Trạng thái sau sửa |
|---|---|
| N1 Thực thể | Giữ Auto365.vn - Trụ Sở Chính, 365Group, hãng đèn, reviewer |
| N2 Cơ sở | Thêm bộ tìm cơ sở kiểu auto365.vn/tin-tuc: Gần tôi, tìm kiếm, 3 miền → tỉnh → cơ sở; link tỉnh/cơ sở dạng a href có sẵn trong HTML (SSR); dữ liệu 88 cơ sở đang hoạt động / 33 tỉnh từ danh bạ he-thong |
| N3 Dịch vụ | Xác nhận kỹ thuật 17 mẫu (anh Nguyễn Quang Đạo, 26/10/2026); pát/điện chốt theo từng xe |
| N4 Bằng chứng | 6 nhãn AI hiển thị / 8 vị trí ảnh AI; case xe khác giữ đúng tên xe |
| N5 Giá | Giá thiết bị/bộ, chưa VAT; pát/công báo riêng; bảo hành theo mã |
| N6 Nguồn/ngày | lastReviewed 2026-10-26; dateModified 2026-10-27 |
| N7 Truy cập | Link tỉnh/cơ sở đọc được trước tương tác; FAQPage 9 câu khớp DOM |
| N8 Hồ sơ | Phiếu này; còn CX: production, CRM từ chính trang, CWV |

Thêm 3 FAQ địa phương (tìm nơi kiểm tra ở tỉnh khác, thông tin cần gửi, bảo hành khác tỉnh). Popup đi tỉnh diễn đạt theo từng mã. Bỏ câu giá F10 New 12V/24V và câu xác nhận reviewer khỏi tổng quan (giá bản 12V vẫn ghi trên thẻ; xác nhận reviewer ở dòng Rà soát kỹ thuật).

Trước production vẫn còn: thay ảnh AI, map URL (Lux /lux-sa2-0, link v2), test form trên chính URL, xoá lead test.
