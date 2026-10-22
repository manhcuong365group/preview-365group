# 02 — Hướng dẫn CMS/SEO — Phim cách nhiệt ô tô 3M (365Group) V1.8

- Nguồn: `auto365/3m-365group/index.html` — SHA-256 `a69947ed3002a90a45952cc584fe813c77d917febf785603c1690ea9eb932e44` (cùng phiên bản với 01 và 03)
- Preview: `https://preview-365group.pages.dev/3m-365group/` (noindex đúng chủ đích)
- Đơn vị xuất bản: 365Group — nhà phân phối chính thức phim cách nhiệt ô tô 3M tại Việt Nam (chủ trang xác nhận 22/10/2026). Giọng bài: nhà phân phối, không viết như trang của 3M.
- Kiểm duyệt kỹ thuật: Nguyễn Quang Đạo, 22/10/2026 (user xác nhận). Trang hiện dòng kiểm duyệt dưới hero và trong "Về bài viết này"; WebPage có `reviewedBy` (url hồ sơ auto365.vn/tac-gia/nguyen-quang-dao) và `lastReviewed` 2026-10-22.

## 1. Vai trò URL

| Mục | Quyết định |
| --- | --- |
| URL đích | `https://3m.365group.com.vn/phim-cach-nhiet-3m` (chủ trang chốt 22/10/2026) |
| Canonical | Tự trỏ `https://3m.365group.com.vn/phim-cach-nhiet-3m`; og:url cùng giá trị |
| Link nội bộ | Trỏ trang thật trên 3m.365group.com.vn: Ceramic NR `/phim-cach-nhiet-3m-ceramic-nr.html`, Ceramic IR `/3m-ceramic-ir.html`, Crystalline CR BLK `/3m-crystalline-cr-blk.html`, CR BLK PRO `/3m-crystalline-cr-blk-pro.html`, thông số `/thong-so-ky-thuat-3m.html`, đại lý `/dai-ly-phim-cach-nhiet-3m-vn.html`, đại lý khác `/danh-sach-dai-ly-3m.html`, tra cứu bảo hành `/bao-hanh-3m.html`. Crystalline Hybrid và Hybrid PRO chưa có trang trên site 365Group → trỏ `auto365.vn/phim-cach-nhiet-o-to-3m-crystalline-hybrid` và `…-crystalline-hybrid-pro` |
| Phân biệt với pillar Auto365 | `auto365.vn/phim-cach-nhiet-o-to-3m` là trang bán lẻ/thi công; trang này là trang nhà phân phối. Hai trang khác domain, khác vai trò |

## 2. Metadata & on-page

| Trường | Giá trị |
| --- | --- |
| Title (65 ký tự) | Phim cách nhiệt ô tô 3M – 3 dòng công nghệ, 6 cấu hình \| 365Group |
| Meta description (154 ký tự) | Phim cách nhiệt ô tô 3M: 3 dòng công nghệ Ceramic NR, Ceramic IR, Crystalline CR BLK tạo nên 6 cấu hình. So sánh TSER, bảo hành và tìm đại lý 3M gần nhất. |
| H1 | Phim cách nhiệt ô tô 3M™ |
| og:image | `hinh/hero-3m-pro-shop-training-center.webp` — khi đăng đổi sang đường dẫn tuyệt đối trên 3m.365group.com.vn (701×436 — dưới chuẩn 1200×630, cần ảnh gốc lớn hơn) |
| Robots | Preview `noindex,nofollow` → production `index,follow` |

Thứ tự H2: 3 dòng phim → 6 cấu hình → Xe thực tế đã dán theo cấu hình → So sánh nhanh → Thông số kỹ thuật → Chứng nhận từ 3M → Hệ thống đại lý → Vì sao 365Group chọn phân phối phim 3M → Câu hỏi thường gặp → Về bài viết này. Tagline hero là `<p>`, không dùng H2.

## 3. Schema (một `@graph`)

`Organization` (#365group, url `3m.365group.com.vn`, telephone, email) · `Brand` (#3m) · `FAQPage` (4 câu, khớp nguyên văn phần hiển thị) · `WebPage` (publisher/author #365group, about #3m, `dateModified` 2026-10-22, `citation` trang 3M Việt Nam) · `ItemList` 6 `Product` (brand 3M, description = mã phim + bảo hành).

Đã có: `WebSite` (#website), `BreadcrumbList` (Trang chủ → Phim cách nhiệt ô tô 3M), `WebPage` @id/url tuyệt đối, Organization @id `https://3m.365group.com.vn/#organization`. Còn thiếu: `Offer` cho Product (chỉ thêm khi có giá theo cấu hình được duyệt).

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

## 4b. Form tư vấn (#tu-van)

- `POST /api/leads` (đường dẫn tương đối), multipart FormData: phone (chuẩn hoá 10 số, bỏ +84), fullname, vehicle, service (cấu hình), province, consent=1, source_page "Phim cách nhiệt ô tô 3M – 365Group", source_url, referrer, utm_* (nếu có), note "Dòng xe: …".
- Kiểm tra phía trình duyệt: số 10 chữ số bắt đầu bằng 0; bắt buộc tích đồng ý. Chỉ báo "Đã gửi" khi phản hồi JSON đúng `{"success": true}`; lỗi mạng/khác → giữ dữ liệu, mời gửi lại hoặc gọi 0363 365 365. Không có mailto dự phòng.
- **Cần IT xác nhận trước khi đăng:** trang đặt trên 3m.365group.com.vn nên `/api/leads` phải tồn tại trên domain này (hoặc đổi action sang endpoint auto365.vn có CORS). Trên preview, `/api/leads` chưa có → form báo lỗi đúng chủ đích (đã thử 22/10/2026). API không kiểm tra số/đồng ý phía server.
- Đã thử: số sai → báo lỗi; thiếu đồng ý → báo lỗi; 404 → giữ dữ liệu + hotline; giả lập `{"success":true}` → báo đã gửi, xoá form, bắn `generate_lead`.

## 5. Việc cần làm trước khi đăng

3. Thống nhất số đại lý với `3m.365group.com.vn`.
4. Ảnh hero/og bản gốc ≥ 1600px.
5. Gia hạn ảnh Distributor Certificate sau 31/12/2026.
6. Xoá khối "Kiểm tra nội bộ" (tự ẩn ngoài pages.dev/localhost nhưng nên xoá khỏi HTML).
