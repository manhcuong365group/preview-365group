# 02 — Hướng dẫn CMS/SEO — Hub Bi LED ô tô V1.8

Tiêu chuẩn: Auto365 SEO/GEO/HTML V1.8 (06/10/2026)
Bản nguồn: `auto365/nang-cap-anh-sang-bi-led/index.html` — SHA-256 ghi trong 01 cùng phiên bản
URL preview: `https://preview-365group.pages.dev/nang-cap-anh-sang-bi-led/` (noindex có chủ đích của staging)
URL production: `https://auto365.vn/nang-cap-anh-sang-bi-led` — đang là trang danh mục "Bi LED ô tô"; hub **thay nội dung tại URL này**, giữ nguyên URL
Ngày hồ sơ: 14/10/2026, Asia/Saigon

## 1. Vai trò URL

| URL | Vai trò | Ghi chú |
| --- | --- | --- |
| /nang-cap-anh-sang-bi-led | Danh mục: chọn **mẫu** bi LED — catalog, giá theo phân khúc, lens/nhiệt màu/thông số, case, thương hiệu, lỗi thường gặp, FAQ | Trang này |
| /nang-cap-anh-sang | Hub tổng: chọn **nhóm** đèn; giữ bản đầy đủ của bảng nguồn sáng, lỗi chung, pháp lý NĐ 168/238, so sánh 7 nhóm | Trang này chỉ dẫn link về, không lặp |
| /nang-cap-anh-sang-bi-laser, /nang-cap-anh-sang-bi-led-mini, /nang-cap-anh-sang-bong-led | Danh mục ngang hàng | Mỗi nhóm 1 câu + link trong mục kiến thức đầu |
| /chinh-sach-bao-hanh | Chính sách bảo hành đèn | Nguồn của câu FAQ bảo hành |
| /tin-tuc/xe-thuc-te-tai-auto365 | Toàn bộ case | Nút "Xem tất cả case" |

**Trùng từ khóa cần xử lý trên CMS (quyết định của SEO):** `/bang-gia-do-den-bi-led` (11/2024), `/bang-gia-do-den-bi-led-o-to-thang-6` (6/2025), `/bang-gia-do-den-xe-bi-led-o-to-thang-1-2026` (1/2026) cùng nhắm "giá độ đèn bi LED" — đề xuất 301 về `/nang-cap-anh-sang-bi-led#so-sanh` hoặc giữ 1 bài bảng giá cập nhật và link về trang này.

## 2. Metadata & on-page

| Trường | Giá trị |
| --- | --- |
| Title | Bi LED ô tô (đèn bi cầu LED) chính hãng: giá, cách chọn \| Auto365 |
| Meta description | Bi LED ô tô X-Light, AES, Titan, GTR, Henvvei: so sánh giá, công suất Cos/Pha, nhiệt màu, case xe thực tế và lưu ý lắp, cân chỉnh tại Auto365. |
| H1 | Bi LED ô tô (đèn bi cầu LED) chính hãng tại Auto365 (duy nhất) |
| Canonical | https://auto365.vn/nang-cap-anh-sang-bi-led |
| Robots | Preview: `noindex,nofollow`. **Production: bỏ noindex** (mục 6) |
| Rà soát kỹ thuật | Nguyễn Quang Đạo — duyệt bản 13/10/2026. Bản sửa 14/10/2026 theo tái kiểm đã được chủ quản duyệt 14/10/2026 (F03, F12; giữ nhãn Độc quyền). Schema `reviewedBy` + `lastReviewed` 2026-10-14 |
| dateModified | 2026-10-14 |
| Landmark | Một `<main id="main-content">` + skip link |

Thứ tự H2: Gợi ý bi LED theo tiêu chí → Bi LED đang có tại Auto365 → Xe thực tế đã lắp bi LED → Vì sao nên lắp bi LED tại Auto365? → 7 bước từ tiếp nhận đến bàn giao → Xem ánh sáng bi LED trước khi chọn → Bi LED ô tô: cần biết gì trước khi lắp? → Bi LED giá bao nhiêu? Chọn theo phân khúc → Lắp bi LED đúng và dùng đúng chế độ Cos/Pha → Tư vấn bi LED theo xe → Cẩm nang bi LED & đèn pha ô tô → Câu hỏi thường gặp về bi LED ô tô → Chưa biết xe của bạn hợp mẫu bi LED nào?.

## 3. Schema (một `@graph`)

| @id | @type | Ghi chú |
| --- | --- | --- |
| https://auto365.vn/#website | WebSite |  |
| https://auto365.vn/nang-cap-anh-sang-bi-led#breadcrumb | BreadcrumbList | Trang chủ › Nâng cấp ánh sáng › Bi LED |
| https://auto365.vn/nang-cap-anh-sang-bi-led#webpage | CollectionPage | mainEntity ItemList 106 Product (= 106 card); Offer chỉ cho mẫu có giá |
| https://auto365.vn/#organization | Organization |  |
| https://auto365.vn/#tru-so-chinh | AutoPartsStore |  |
| https://auto365.vn/nang-cap-anh-sang-bi-led#faq | FAQPage | 10 câu = FAQ hiển thị |

## 4. Dữ liệu sản phẩm & case

- 106 mẫu bi LED = toàn bộ danh mục production `/nang-cap-anh-sang-bi-led` (107 mục, 5 trang phân trang), bỏ "Bi gầm LED X-Light F10" (bi gầm nằm nhầm danh mục). Bảng: `04_Master_Data_San_Pham_Bi_LED.csv`.
- 20 mẫu đầu lấy theo hub Nâng cấp ánh sáng (09–10/10/2026); 86 mẫu còn lại lấy từ PDP ngày 12/10/2026. 77 mẫu có giá, 29 mẫu đời cũ "Liên hệ"; đơn vị mặc định /bộ, 3 mẫu "(lẻ)" /chiếc, Turbo BM /cặp theo PDP. **Anh Đạo duyệt giá/đơn vị 14/10/2026.**
- "Titan Moto" là tên thương hiệu (đèn ô tô). Loại xe: 105 ô tô, 1 mẫu ô tô/xe máy (X-Light V20 Moto, PDP ghi dùng được cả ô tô).
- Case: 127 case bi LED (24 card DOM + 103 trong `<template id="caseMoreTpl">`), lọc theo hãng/dòng xe; 16 chip "Dòng xe đã lắp" lấy từ case.
- Video: 16 clip bi LED ô tô từ kênh YouTube Auto365 (8 hiển thị sẵn).

## 5. Nội dung & nguồn

- Kiến thức 5 mục (accordion, nội dung có sẵn trong HTML): Bi LED là gì/khác gì/lợi ích; Xe nào lắp được; Chọn lens, nhiệt màu, thông số; Lỗi thường gặp khi độ bi; Thương hiệu.
- Pháp lý riêng bi LED: Điều 20 Luật TTATGT đường bộ 2024 (link chinhphu.vn). NĐ 168/2024 và 238/2026 (lắp thêm đèn) dẫn link về hub, không lặp.
- Thời gian lắp: theo PDP V20L Quantum (4–5 giờ), V30 Ultra (5–7 giờ).
- Bảo hành: tóm tắt từ https://auto365.vn/chinh-sach-bao-hanh.
- Thương hiệu X-Light: 365Group phân phối chính hãng, Auto365 là đại lý ủy quyền (chứng nhận 01/01/2020).

## 6. Checklist khi lên production

- [ ] HTTP 200 tại https://auto365.vn/nang-cap-anh-sang-bi-led, canonical tự trỏ.
- [ ] Bỏ `<meta name="robots" content="noindex,nofollow">`; kiểm `X-Robots-Tag`, robots.txt, WAF không chặn Googlebot/OAI-SearchBot.
- [ ] Ảnh trong `hinh/` đưa lên CDN auto365.vn, giữ tên file và alt.
- [ ] Kiểm cú pháp/ngữ nghĩa JSON-LD (Schema Markup Validator) và khớp nội dung hiển thị. Không đặt mục tiêu FAQ rich result (Google ngừng hiển thị từ 07/05/2026) hay Product rich result trên hub nhiều sản phẩm — Product snippet nghiệm thu ở PDP.
- [ ] Kiểm Search Console › Settings › Search generative AI (include/exclude/inherit, cả property cha/con); robots/WAF cho Googlebot và OAI-SearchBot theo bot thật; ghi riêng chính sách GPTBot và Google-Extended.
- [ ] Form gửi tới `/api/leads` trên domain thật; chỉ báo thành công khi phản hồi `{"success": true}`. Lead test 162 đã gửi 13/10/2026 từ cấu hình form preview — xác nhận trong CRM rồi xoá.
- [ ] Xoá `<aside id="internal-check">` + script đi kèm; không đưa thư mục `kiem-tra-noi-bo/` lên production.
- [ ] Quyết định 301 cho 3 bài blog bảng giá bi LED (mục 1).

## 7. Đo lab trên preview

Công cụ: Puppeteer (Chromium headless) trên bản preview cục bộ `http://localhost:8765/nang-cap-anh-sang-bi-led/` lúc `2026-10-14T11:25:20.204Z`; LCP/CLS bằng PerformanceObserver, chờ 2,5 s sau load. Số lab, không thay field data/CrUX; đo lại trên pages.dev sau khi deploy.

| Cấu hình | Giới hạn | LCP | CLS | Load | Truyền tải | Request | DOM |
| --- | --- | --- | --- | --- | --- | --- | --- |
| mobile 390 | CPU x4, 1.6 Mbps, 150 ms RTT | 0.89 s | 0.030 | 5.23 s | 1339 KB | 20 | 4705 |
| desktop 1440 | không giới hạn | 0.27 s | 0.001 | 0.39 s | 2129 KB | 38 | 4705 |
