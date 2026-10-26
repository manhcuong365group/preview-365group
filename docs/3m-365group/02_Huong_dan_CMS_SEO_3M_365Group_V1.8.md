# 02 — Hướng dẫn CMS/SEO — Phim cách nhiệt ô tô 3M (365Group) V1.8

- Nguồn: `auto365/3m.365group.com.vn/phim-cach-nhiet-3m/index.html` — SHA-256 `67b5036e40169af59f0530fdab5f3179bed3d2cfc738546573d0629aea27f84a` (cùng phiên bản với 01 và 03)
- Preview: `https://preview-365group.pages.dev/3m.365group.com.vn/phim-cach-nhiet-3m/` (noindex đúng chủ đích)
- Đơn vị xuất bản: 365Group — nhà phân phối chính thức phim cách nhiệt ô tô 3M tại Việt Nam (chủ trang xác nhận 22/10/2026). Giọng bài: nhà phân phối, không viết như trang của 3M.
- Kiểm duyệt kỹ thuật: **Đặng Minh Hoàng** – Giám đốc điều hành 3M Pro Shop & 3M Training Center, chủ trang chỉ định 23/10/2026. Hiện ở dòng dưới hero và khung "Về bài viết này"; WebPage có `reviewedBy` (url auto365.vn/tac-gia/dang-minh-hoang, worksFor = Organization 365Group) và `lastReviewed` 2026-10-23. Không ghi "chuyên gia 3M"/"3M xác nhận". Anh Đạo không đứng tên trang này. Nên có trang hồ sơ anh Hoàng trên site 365Group để thay link auto365.vn.

## 1. Vai trò URL

| Mục | Quyết định |
| --- | --- |
| URL đích | `https://3m.365group.com.vn/phim-cach-nhiet-3m` (chủ trang chốt 22/10/2026). **Hiện trả 404 — phải triển khai trang tại đúng URL này trước khi bỏ noindex** |
| Canonical | Tự trỏ `https://3m.365group.com.vn/phim-cach-nhiet-3m`; og:url cùng giá trị |
| Link nội bộ | Trỏ trang thật trên 3m.365group.com.vn: Ceramic NR `/phim-cach-nhiet-3m-ceramic-nr.html`, Ceramic IR `/3m-ceramic-ir.html`, Crystalline CR BLK `/3m-crystalline-cr-blk.html`, CR BLK PRO `/3m-crystalline-cr-blk-pro.html`, thông số `/thong-so-ky-thuat-3m.html`, đại lý `/dai-ly-phim-cach-nhiet-3m-vn.html` (thẻ "Đại lý 3M khác" = "Xem tất cả đại lý"; `/danh-sach-dai-ly-3m.html` trả 404 nên đã bỏ), tìm theo khu vực: TP.HCM `/dai-ly-3m-hcm.html`, Hà Nội `/dai-ly-3m-ha-noi.html`, các tỉnh khác → danh sách toàn quốc; menu Trang chủ `/index.html`, Về 365Group `/365-group.html`; khối Tài liệu: `/thong-so-ky-thuat-3m.html`, `/bang-gia-3m.html`, `/download-3m.html`, `/bao-hanh-3m.html` (tất cả kiểm 200 ngày 23/10/2026); tra cứu bảo hành `/bao-hanh-3m.html`. Crystalline Hybrid và Hybrid PRO chưa có trang trên site 365Group → trỏ `auto365.vn/phim-cach-nhiet-o-to-3m-crystalline-hybrid` và `…-crystalline-hybrid-pro` |
| Phân biệt với pillar Auto365 | `auto365.vn/phim-cach-nhiet-o-to-3m` là trang bán lẻ/thi công; trang này là trang nhà phân phối. Hai trang khác domain, khác vai trò |

## 2. Metadata & on-page

| Trường | Giá trị |
| --- | --- |
| Title | Phim cách nhiệt 3M: Dòng phim, thông số & đại lý \| 365Group (theo phiếu tái kiểm 22/10) |
| Meta description | Tra cứu phim cách nhiệt 3M tại 365Group: Ceramic NR, Ceramic IR, Crystalline CR BLK; thông số theo mã, tài liệu kỹ thuật, bảo hành và hệ thống đại lý. |
| H1 | Phim cách nhiệt 3M (chủ trang bỏ vế "Danh mục và thông số từ 365Group" 23/10/2026; vai trò 365Group đã nêu ở dòng nhỏ phía trên H1) |
| og:image | `https://3m.365group.com.vn/hinh/phim-cach-nhiet-3m/og-phim-cach-nhiet-3m.jpg` — ảnh 1200×630 dựng từ ảnh mặt tiền 3M Pro Shop | Training Center + tiêu đề (file `auto365/3m.365group.com.vn/phim-cach-nhiet-3m/hinh/og-phim-cach-nhiet-3m.jpg`); có og:image:width/height/alt, twitter:card. IT upload đúng đường dẫn khi đăng |
| Robots | Preview `noindex,nofollow` → production `index,follow` |

Breadcrumb hiển thị (Trang chủ › Phim cách nhiệt ô tô 3M) khớp BreadcrumbList. Thứ tự H2: 3 dòng phim → 6 cấu hình → So sánh nhanh → Nhận tư vấn (form) → Thông số kỹ thuật → Tài liệu và hỗ trợ → Chứng nhận từ 3M → Hệ thống đại lý → Hồ sơ thi công tham khảo (5 bài auto365.vn, mở trang mới) → Vì sao 365Group chọn phân phối phim 3M → Câu hỏi thường gặp → Về bài viết này. Tagline hero là `<p>`, không dùng H2.

## 2b. Khối thêm theo góp ý sếp (24/10/2026)

Giữ nguyên layout và nội dung trang (chủ trang yêu cầu không dựng lại theo brief giao diện 23/10; bản dựng lại commit 725ed18f đã được thay bằng bản cũ). Chỉ thêm trong section "Vì sao 365Group chọn phân phối phim 3M":
- Khối #cong-nghe "Công nghệ phim ô tô 3M": Crystalline 200 lớp, UV 99–99,9%, bảo hành điện tử 10 năm, cấu tạo 4 lớp (lớp phủ, phim nền MOF, keo PSA, lớp lót Polyester) theo bảng 260815.
- Khối #bao-chi "Báo chí nói về 3M Pro Shop & 3M Training Center": 8 bài (22–23/06/2026) lấy từ trang báo chí trong repo; bài Tinh Tế ghi "bài quảng cáo".

## 2c. Thẻ giá gói (24/10/2026)

Theo mẫu chủ trang gửi (giống pillar Auto365 V11.12): 6 thẻ cấu hình trong một lưới 3 + 3 (desktop), 2 cột tablet, 1 cột mobile (chủ trang chọn 24/10). Mỗi thẻ: ảnh xe minh họa + nhãn, bảng thông tin (kính lái, sườn/lưng, dòng/công nghệ, VLT/UVR/giảm lóa), hộp "Giá tham khảo trọn xe" Minicar/Sedan/SUV-MPV (đồng, theo bảng 260815), link dòng phim, nút "Nhận báo giá gói này" mở form #tu-van và chọn sẵn cấu hình. Không đặt nhãn "Khuyên dùng" (chưa có căn cứ duyệt). Khối báo chí có link "Xem tất cả bài báo chí" tới auto365.vn/bao-chi-noi-ve-auto365-365group-3m-pro-shop.

## 2d. Bỏ bảng So sánh nhanh (24/10/2026)

Chủ trang yêu cầu bỏ bảng "So sánh nhanh 6 cấu hình" vì trùng với 6 thẻ giá. Mỗi thẻ thêm dòng "TSER kính lái" (51% / 54% / 54–56% / 54–56% / 58% / 58%); 2 ghi chú (TSER, nguồn giá + Minicar + cửa sổ trời) chuyển xuống ngay dưới lưới thẻ (#bang-gia). Link cũ #so-sanh đổi sang #bang-gia.

## 2e. Chỉnh theo góp ý 24/10/2026

- Bỏ dòng tác giả/kiểm duyệt/ngày dưới hero; thông tin này giữ trong khung "Về bài viết này" cuối trang.
- Bỏ bộ lọc dòng phim của bảng 12 mã (bảng cuộn ngang trên mobile, cột chỉ số cố định).
- "Cách đọc các chỉ số": cả khối là accordion đóng mặc định; bên trong 5 mục accordion (TSER mở sẵn khi mở khối).
- "Công nghệ phim ô tô 3M": 3 thẻ cùng kiểu thẻ "Vì sao" + dải 4 bước cấu tạo phim Crystalline.
- Báo chí: mỗi bài có logo báo (favicon 96 px lưu tại hinh/logo-bao-*.webp; Thể thao & Văn hóa chưa có logo đủ nét nên dùng chữ "TT&VH"); 4 cột desktop, 2 cột mobile; link "Xem tất cả bài báo chí" dạng chữ.

## 2f. Ba dòng phim dạng tab kiểu 3M + vá R3 (26/10/2026)

- Theo yêu cầu sếp ("trình bày như 3M cho giống hãng"): khối 3 dòng phim đổi thành tab 3M™ Crystalline Series / 3M™ Ceramic IR Series / 3M™ Ceramic NR Series (role=tablist, phím ←/→). Mỗi tab: ảnh xe tại 3M Pro Shop, mô tả, "Đặc điểm chính" (giảm nhiệt TSER đến … + mã kính lái riêng, IRR, UV, VLT, giảm lóa, công nghệ, màu, bảo hành, giá trọn xe từ …), link dòng phim, PDF, bảng 12 mã. Số liệu theo bảng 260815; mức "đến" ghi rõ mã đậm nhất, mã kính lái ghi riêng.
- Vá R3: link "Xem bảng thông số chi tiết" → #thong-so; logo → trang chủ 365Group; chỉ giữ scroll-padding-top; bỏ câu "bảng so sánh phía trên"; nhãn giá "SUV" theo PDF (bỏ "/ MPV"); chú thích Preferred Installer ghi "Auto365.vn - Trụ Sở Chính"; nút form "Gửi yêu cầu đại lý tư vấn"; script form kiểm tra r.ok trước khi đọc JSON; VLT kính lái thêm vào 6 thẻ + ghi chú cấu hình PRO (CR BLK 40, VLT 41%, nên xem mẫu thực tế); emoji dải lợi ích → icon SVG; báo chí hiện 4 bài, 4 bài còn lại trong "Xem thêm".
- Chưa làm (cần quyết định/dữ liệu ngoài trang): hero đổi sang ảnh khoang xe/kính (chưa có tư liệu); điều kiện giá "đã gồm công/VAT/phát sinh" và phạm vi MPV (chờ Kinh doanh – FAQ vẫn ghi "đã gồm công thi công" theo pillar Auto365 đã đăng); đồng bộ giao diện trang đại lý và hotline 0363 365 365 / 1900 9365; bộ lọc nhóm đại lý; route production 200 + tài nguyên; nghiệm thu lead.

## 3. Schema (một `@graph`)

`Organization` (#365group, url `3m.365group.com.vn`, telephone, email) · `Brand` (#3m) · `FAQPage` (4 câu, khớp nguyên văn phần hiển thị) · `WebPage` (publisher/author #365group, about #3m, `dateModified` 2026-10-23, `citation` trang 3M Việt Nam) · `ItemList` 6 `Product` (brand 3M, description = mã phim + bảo hành).

Đã có: `WebSite` (#website, tên "365Group – Nhà phân phối phim cách nhiệt 3M"), `BreadcrumbList` (Trang chủ → Phim cách nhiệt ô tô 3M), `WebPage` @id/url tuyệt đối, Organization @id `https://3m.365group.com.vn/#organization`. Mỗi Product có `AggregateOffer` (VND, lowPrice = Minicar, highPrice = SUV, offerCount 3, mô tả giá Minicar/Sedan/SUV) theo bảng 260815 — khớp giá hiện trên thẻ và bảng so sánh. Không ghi VAT vì bảng không nêu.

## 4a. Nguồn chính (23/10/2026)

Giá trọn xe Minicar / Sedan / SUV đã hiện trên 6 thẻ cấu hình (dòng "Trọn xe"), cột "Giá trọn xe" của bảng so sánh và Offer schema; ghi chú dưới bảng nêu nguồn, định nghĩa Minicar, giá cửa sổ trời.

**Bảng giá & thông số 3M AutoFilm – 365Group, mã 260815** (NAS Marketing/3M AUTOFILM/IN AN/BANG GIA/260815 Bảng Giá 3M.pdf), áp dụng từ 06/2026:
- 6 cấu hình đúng tên trên bảng: Crystalline CR BLK PRO, Crystalline CR BLK, Crystalline Hybrid Pro, Crystalline Hybrid, **Ceramic Hybrid** (dòng NR – trước ghi "Ceramic NR"), Ceramic IR. Hybrid/Hybrid Pro dùng **NR 25/15/5** cho kính sườn/lưng.
- 12 mã thông số: CR BLK 15/35/40/50/60, NR 5/15/25/35, IR 15/25/50, đo trên kính ô tô xanh 6 mm (Auto75, VLT 73%). Đã bỏ CR BLK 30/70/80 (bảng cũ 11/2025). Ceramic IR đổi theo bảng: TSER 63/61/54, VLT 16/25/50, UVR 99,9/99,9/99,8 — khớp Auto365, xử lý mục 5.1 phiếu tái kiểm.
- Bảo hành 10 năm khi đã dán và kích hoạt bảo hành điện tử; giá trọn xe 5,9–18,3 triệu (Ceramic Hybrid minicar → CR BLK PRO SUV).
- Số đại lý 224 / 32 tỉnh: chủ trang xác nhận 23/10/2026.

## 4. Dữ liệu & nguồn

| Nội dung | Nguồn |
| --- | --- |
| Thông số 11 mã CR BLK 15–80, IR 15/25/50 (TSER, VLT, UVR, giảm lóa, IRR) | Bảng "Thông số kỹ thuật" 3M \| 365Group do chủ trang gửi 22/10/2026 |
| Thông số NR 35/25/15/5 (TSER 51/59/65/69, VLT 43/29/14/7, UV 99, giảm lóa 52/68/84/93, IRR 79/86/86/91) và TSER NR 35 ≈ 51% | Catalog 3M Ceramic NR VN 03/2026 (đo trên kính ô tô xanh 6 mm), bộ số đã khóa dùng cho các trang mã NR |
| Câu mô tả Ceramic NR "Lai Nano Ceramic và Nano Reflective" | Câu đã duyệt cho dòng NR |
| 5 xe thực tế (Hyundai Accent 2025 – Ceramic NR; Toyota Camry – Crystalline Hybrid; Ford Everest – Crystalline CR BLK; VinFast VF8 – Hybrid PRO; Volvo XC90 – CR BLK PRO) | Bài thi công đã đăng trên auto365.vn, ảnh lấy từ bộ ảnh case của pillar phim cách nhiệt 3M (Volvo XC90 dùng ảnh chính của bài, cắt bỏ chữ); mỗi thẻ dẫn về bài gốc, đã đối chiếu cấu hình với H1 và mã kính trong từng bài 23/10/2026. Ceramic IR chưa có bài |
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

## 4b1. Tài liệu tải về (23/10/2026)

- `tai-lieu/bang-gia-thong-so-3m-autofilm-260815.pdf` (2 trang A4 ngang, 0,45 MB) – bản nén từ PDF in 22 MB trên NAS (260815 Bảng Giá 3M.pdf), nội dung giữ nguyên. Thẻ đầu khối Tài liệu ghi mã 260815, áp dụng từ 06/2026; câu nguồn của bảng thông số link tới file này. Chủ trang cho phép đăng 23/10/2026. Khi đăng production: upload vào `https://3m.365group.com.vn/tai-lieu/` (giữ tên file); khi có bảng giá mới, đổi file + mã + ngày áp dụng.

## 4b2. Thuật ngữ & link ngoài (23/10/2026)

- Mục #thuat-ngu "Cách đọc các chỉ số" dưới bảng thông số: TSER, VLT, UVR, Glare R, IRR + điều kiện đo; schema `DefinedTermSet` 5 `DefinedTerm` khớp nguyên văn.
- Crystalline Hybrid, Hybrid PRO: nút "Xem trên auto365.vn ↗" (target _blank) vì site 365Group chưa có trang riêng; khi có, đổi sang link nội bộ.

## 4c. Giao diện (sửa 23/10/2026)

- Menu ≤1.200 px: nút ☰ có aria-expanded/aria-controls, đóng bằng Esc hoặc khi chọn mục.
- Anchor: `scroll-padding-top`/`scroll-margin-top` 76 px theo header sticky 65 px.
- Bảng 15 mã: thêm bộ lọc Tất cả / Crystalline CR BLK / Ceramic IR / Ceramic NR; khi lọc một dòng bảng vừa màn hình 375 px, không cần cuộn ngang.
- ≤1.024 px hero một cột; ≤480 px thẻ cấu hình một cột, chữ mô tả 13 px.
- Đã render thử 375, 820, 1.366 px (desktop app, 23/10/2026): không tràn ngang trang. Chưa thử thiết bị thật.

## 5. Việc cần làm trước khi đăng

0. Triển khai trang tại `https://3m.365group.com.vn/phim-cach-nhiet-3m` (đang 404), upload ảnh `hinh/phim-cach-nhiet-3m/`, bỏ noindex, đưa vào sitemap; xoá khối "Kiểm tra nội bộ" khỏi HTML.

3. Thống nhất số đại lý với `3m.365group.com.vn`.
5. Gia hạn ảnh Distributor Certificate sau 31/12/2026.
6. Xoá khối "Kiểm tra nội bộ" (tự ẩn ngoài pages.dev/localhost nhưng nên xoá khỏi HTML).
