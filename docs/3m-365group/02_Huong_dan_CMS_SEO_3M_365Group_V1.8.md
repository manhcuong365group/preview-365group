# 02 — Hướng dẫn CMS/SEO — Phim cách nhiệt ô tô 3M (365Group) V1.8

- Nguồn: `auto365/3m-365group/index.html` — SHA-256 `f8995f098dfc2ac4503f57512a6a65cd8ca34a73f2c78d0eb23f0412436fb1e8` (cùng phiên bản với 01 và 03)
- Preview: `https://preview-365group.pages.dev/3m-365group/` (noindex đúng chủ đích)
- Đơn vị xuất bản: 365Group — nhà phân phối chính thức phim cách nhiệt ô tô 3M tại Việt Nam (chủ trang xác nhận 22/10/2026). Giọng bài: nhà phân phối, không viết như trang của 3M.
- Kiểm duyệt kỹ thuật: Nguyễn Quang Đạo, 22/10/2026 (user xác nhận). Trang hiện dòng kiểm duyệt dưới hero và trong "Về bài viết này"; WebPage có `reviewedBy` (url hồ sơ auto365.vn/tac-gia/nguyen-quang-dao) và `lastReviewed` 2026-10-22.

## 1. Vai trò URL

| Mục | Quyết định |
| --- | --- |
| Domain/URL đích | **Chưa chốt.** Đề xuất đặt trên `3m.365group.com.vn` (site nhà phân phối), không đặt trên auto365.vn để tránh trùng ý định với pillar `auto365.vn/phim-cach-nhiet-3m` |
| Canonical | Chưa đặt vì chưa có URL đích. Khi chốt: canonical tự trỏ URL đó |
| Link nội bộ | Đang là đường dẫn preview tương đối (`../ceramic-ir/`, `../crystalline-cr-blk/`, `../3m-cr-blk-pro/`, `../3m-crystalline-hybrid/`, `../danh-gia-3m-ceramic-nr/`, `../he-thong/`, `../thong-so-phim-cach-nhiet-o-to/`). Khi lên production đổi sang URL thật. Thẻ "Hybrid PRO" chưa có trang riêng, đang trỏ `#tim-dai-ly` |

## 2. Metadata & on-page

| Trường | Giá trị |
| --- | --- |
| Title (65 ký tự) | Phim cách nhiệt ô tô 3M – 3 dòng công nghệ, 6 cấu hình \| 365Group |
| Meta description (154 ký tự) | Phim cách nhiệt ô tô 3M: 3 dòng công nghệ Ceramic NR, Ceramic IR, Crystalline CR BLK tạo nên 6 cấu hình. So sánh TSER, bảo hành và tìm đại lý 3M gần nhất. |
| H1 | Phim cách nhiệt ô tô 3M™ |
| og:image | `hinh/hero-3m-pro-shop-training-center.webp` (701×436 — dưới chuẩn 1200×630, cần ảnh gốc lớn hơn) |
| Robots | Preview `noindex,nofollow` → production `index,follow` |

Thứ tự H2: 3 dòng phim → 6 cấu hình → Xe thực tế đã dán theo cấu hình → So sánh nhanh → Thông số kỹ thuật → Chứng nhận từ 3M → Hệ thống đại lý → Vì sao 365Group chọn phân phối phim 3M → Câu hỏi thường gặp → Về bài viết này. Tagline hero là `<p>`, không dùng H2.

## 3. Schema (một `@graph`)

`Organization` (#365group, url `3m.365group.com.vn`, telephone, email) · `Brand` (#3m) · `FAQPage` (4 câu, khớp nguyên văn phần hiển thị) · `WebPage` (publisher/author #365group, about #3m, `dateModified` 2026-10-22, `citation` trang 3M Việt Nam) · `ItemList` 6 `Product` (brand 3M, description = mã phim + bảo hành).

Thiếu khi lên production: `url`/`@id` tuyệt đối cho WebPage, `BreadcrumbList`, `WebSite`; `Offer` cho Product (chỉ thêm khi có giá theo cấu hình được duyệt).

## 4. Dữ liệu & nguồn

| Nội dung | Nguồn |
| --- | --- |
| Thông số 11 mã CR BLK 15–80, IR 15/25/50 (TSER, VLT, UVR, giảm lóa, IRR) | Bảng "Thông số kỹ thuật" 3M \| 365Group do chủ trang gửi 22/10/2026 |
| Thông số NR 35/25/15/5 (TSER 51/59/65/69, VLT 43/29/14/7, UV 99, giảm lóa 52/68/84/93, IRR 79/86/86/91) và TSER NR 35 ≈ 51% | Catalog 3M Ceramic NR VN 03/2026 (đo trên kính ô tô xanh 6 mm), bộ số đã khóa dùng cho các trang mã NR |
| Câu mô tả Ceramic NR "Lai Nano Ceramic và Nano Reflective" | Câu đã duyệt cho dòng NR |
| 5 xe thực tế (Hyundai Accent 2025 – Ceramic NR; Toyota Camry – Crystalline Hybrid; Ford Everest – Crystalline CR BLK; VinFast VF8 – Hybrid PRO; Volvo XC90 – CR BLK PRO) | Bài thi công đã đăng trên auto365.vn, ảnh lấy từ bộ ảnh case của pillar phim cách nhiệt 3M; mỗi thẻ dẫn về bài gốc. Ceramic IR chưa có bài |
| Bảo hành 10 năm cho cả 6 cấu hình, điều kiện kích hoạt bảo hành điện tử | Chủ trang xác nhận 22/10/2026; ghi chú trên bảng thông số 365Group |
| Giá tham khảo trọn xe 5,9–18,3 triệu (gồm công) | Trang 3M đã đăng của Auto365 (pillar phim cách nhiệt 3M) — là giá bán lẻ Auto365, không phải giá nhà phân phối |
| 224 đại lý / 32 tỉnh / 3 nhóm | Mockup, chủ trang xác nhận giữ 22/10/2026. Lưu ý: `3m.365group.com.vn` đang ghi "160+ đại lý" — cần thống nhất |
| Hotline 0363 365 365, email, văn phòng Hiệp Bình | Trang `3m.365group.com.vn` |
| Ô lợi ích "Bảo hành điện tử 10 năm" (thay ô "Không gây nhiễu tín hiệu" chưa có nguồn) | Ghi chú bảng thông số 365Group |
| Kinh nghiệm hãng (hơn 55 năm, bằng sáng chế 1966), thợ ủy quyền | Trang Cá nhân hóa ô tô của 3M Việt Nam, ghi "theo 3M" |
| 4 chứng nhận | Distributor Certificate 3M Việt Nam – 365 Group (01/03/2023–31/12/2026); 3M Pro Shop Certificate – Auto365 Center; 3M Preferred Installer; ảnh lễ trao chứng nhận Training Center |
| Ảnh xe thẻ cấu hình | Ảnh tách nền dùng chung với trang bi gầm theo hãng xe — minh họa phân khúc giá, không phải xe đã dán đúng gói |

## 5. Việc cần làm trước khi đăng

1. Chốt URL đích, canonical, đổi toàn bộ link nội bộ sang URL thật.
3. Thống nhất số đại lý với `3m.365group.com.vn`.
4. Ảnh hero/og bản gốc ≥ 1600px.
5. Gia hạn ảnh Distributor Certificate sau 31/12/2026.
6. Xoá khối "Kiểm tra nội bộ" (tự ẩn ngoài pages.dev/localhost nhưng nên xoá khỏi HTML).
