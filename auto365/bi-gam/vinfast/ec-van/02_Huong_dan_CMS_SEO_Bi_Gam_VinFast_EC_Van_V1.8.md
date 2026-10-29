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
| Bản nguồn | `index.html` SHA-256 `26a4880446a731b8f526290510ccc70f6ce51c1e82a4f2eec47232c379291660` (24/10/2026) |

## Khi đăng production

1. Canonical, `og:url`, `@id`/`url` JSON-LD đã là auto365.vn — giữ nguyên.
2. `og:image`, `twitter:image` và `Article.image` đang trỏ ảnh trên preview (`hinh/vinfast-ec-van-anh-hang.webp`). Upload ảnh lên CMS rồi thay URL.
3. `noindex` chỉ dùng trên preview; bản production phải `index, follow`.
4. Xoá khối `#vf3lp-internal-check` (và CSS `.vf3lp-internal-check`).
5. FAQPage: 9 câu schema = 9 câu hiển thị (đối chiếu nguyên văn sau chuẩn hóa khoảng trắng, 28/10/2026).
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


## Cập nhật 28/10/2026 — sau audit V1.9 (R3/R4) — bản hiện hành

- Sửa popup chọn tỉnh tự đóng (stopPropagation trong handler popup): tìm/chọn tỉnh giữ mở danh sách cơ sở.
- Số liệu bộ tìm lấy từ chính dữ liệu: 88 cơ sở đang hoạt động, 33 tỉnh; Bắc 41 · Trung 26 · Nam 21. Thẻ ghi rõ phạm vi danh sách tra cứu (điểm tạm ngừng/đang chuẩn bị không hiển thị).
- Danh sách 88 cơ sở trong HTML mở được qua details/summary (không còn display:none).
- Cơ sở chưa có số riêng hiển thị "Hotline hỗ trợ 0365 365 911" (không gán làm số cơ sở).
- FAQPage: 9/9 câu trả lời khớp nguyên văn HTML.
- Thông số xe ghi rõ chuẩn đo (NEDC/WLTP) và phạm vi phiên bản; VF5 bỏ chiều dài cơ sở do nguồn VinFast mâu thuẫn (2.730 vs 2.514 mm).
- Khối nội bộ không còn ghi "đạt V1.8" như kết quả hiện hành; lastReviewed giữ 2026-10-26, dateModified 2026-10-28.
- Còn mở: bảng phạm vi đời/phiên bản xe (chờ kỹ thuật), chuẩn dịch vụ theo nhóm cơ sở (Operations), thay ảnh AI, map URL, test lead–CRM trên chính trang.

## Bản hiện hành 29/10/2026 (thay mục 28/10 ở các điểm sau)

- Danh sách 88 cơ sở trong HTML: theo quyết định của chủ trang 28/10, khối dự phòng giữ trong DOM nhưng ẩn (div.vf3lp-bf-ssr, display:none); không có details/summary. Mục "mở qua details/summary" ở trên là lịch sử.
- Thẻ giải thích phạm vi danh sách tra cứu: đã gỡ theo yêu cầu chủ trang. Bộ tìm ghi "88 cơ sở trong danh bạ · 33 tỉnh thành"; khối quyền lợi giữ "90+ chi nhánh" là quy mô hệ thống (chờ Operations xác nhận phạm vi).
- Nhãn ảnh: chữ "AI" đã gỡ khỏi caption/alt theo yêu cầu chủ trang; alt dùng mô tả trung tính dạng "minh họa …", không mô tả là ảnh thi công hay kết quả đo.
- Câu "Đã duyệt theo Auto365 Quy chuẩn SEO/GEO V1.8" trong khối nội bộ đã bỏ.
- Tổng quan xe rút còn 2 câu theo yêu cầu chủ trang.
