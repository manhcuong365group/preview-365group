# 02 — Hướng dẫn CMS/SEO — Hub Nâng cấp ánh sáng V1.8

Tiêu chuẩn: Auto365 SEO/GEO/HTML V1.8 (06/10/2026)
Bản nguồn: `auto365/nang-cap-anh-sang/index.html` — SHA-256 ghi trong 01 cùng phiên bản
Hồ sơ bàn giao: `docs/nang-cap-anh-sang/` (nội bộ, không deploy lên Cloudflare)
URL preview: `https://preview-365group.pages.dev/nang-cap-anh-sang/` (noindex có chủ đích của staging)
URL production: `https://auto365.vn/nang-cap-anh-sang` — đang là trang danh mục "Độ đèn ô tô"; hub sẽ **thay nội dung tại URL này**, giữ nguyên URL
Ngày hồ sơ: 10/10/2026, Asia/Saigon

## 1. Vai trò URL

| URL | Vai trò | Ghi chú |
| --- | --- | --- |
| /nang-cap-anh-sang | Hub tổng: chọn nhóm giải pháp, mẫu tiêu biểu, case, kiến thức, pháp lý, FAQ | Trang này |
| /nang-cap-anh-sang-bi-led | Đèn chính Bi LED | Hub link tới, không lặp nội dung chi tiết |
| /nang-cap-anh-sang-bi-laser | Đèn chính có Laser | — |
| /nang-cap-anh-sang-bi-led-mini | Bi nhỏ theo khả năng lắp | — |
| /nang-cap-anh-sang-bi-gam | Bi gầm theo xe | — |
| /den-gam-dang-roi | Đèn gầm lắp bằng pát riêng | — |
| /nang-cap-anh-sang-bong-led | Thay bóng theo chân bóng/chóa | — |
| /nang-cap-anh-sang-den-tro-sang | Đèn trợ sáng theo mục đích | — |
| /tin-tuc/xe-thuc-te-tai-auto365 | Toàn bộ case | Nút "Xem tất cả case" |
| /chi-nhanh | Hệ thống 91 điểm, 33 tỉnh/thành | Nút "Xem toàn bộ hệ thống" |

Các trang con nên có link quay về hub (breadcrumb hoặc khối "Xem tổng quan nâng cấp ánh sáng").

## 2. Metadata & on-page

| Trường | Giá trị |
| --- | --- |
| Title | Độ đèn ô tô: Bi LED, Bi Laser, bi gầm, bóng LED \| Auto365 |
| Meta description | Độ đèn ô tô: so sánh Bi LED, Bi Laser, bi gầm và bóng LED theo xe, nhu cầu, giá sản phẩm, chi phí lắp cùng lưu ý kỹ thuật tại Auto365. |
| H1 | Độ đèn ô tô: Bi LED, Bi Laser, bi gầm, bóng LED và đèn trợ sáng (duy nhất) |
| Canonical | https://auto365.vn/nang-cap-anh-sang |
| Robots | Preview: `noindex,nofollow`. **Production: bỏ noindex** (xem mục 6) |
| Rà soát kỹ thuật | Nguyễn Quang Đạo — **đã duyệt bản 10/10/2026** (chủ quản xác nhận). Schema: `reviewedBy` + `lastReviewed` 2026-10-10 trên CollectionPage |
| dateModified | 2026-10-10 — ngày nội dung sửa thực tế; không đổi chỉ vì kiểm lại |
| Landmark | Một `<main id="main-content">` + skip link |

Thứ tự H2: Sản phẩm → Xe thực tế → Thương hiệu → Vì sao chọn (kèm trụ sở + hệ thống) → 7 nhóm → Quy trình → Theo nhu cầu → Chóa hay projector → Công nghệ nguồn sáng → So sánh 7 nhóm → Đọc thông số → Lỗi thường gặp → Pháp lý → Video → Cẩm nang → FAQ → Form → Kiểm duyệt.

## 3. Schema (một `@graph`)

| @id | @type | Quan hệ |
| --- | --- | --- |
| https://auto365.vn/#website | WebSite | publisher → #organization |
| https://auto365.vn/nang-cap-anh-sang#breadcrumb | BreadcrumbList | Trang chủ › Nâng cấp ánh sáng |
| https://auto365.vn/nang-cap-anh-sang#webpage | CollectionPage | isPartOf #website, breadcrumb, publisher #organization, about #tru-so-chinh, reviewedBy Nguyễn Quang Đạo, hasPart 7 danh mục |
| https://auto365.vn/nang-cap-anh-sang#products | ItemList (trong CollectionPage) | 129 Product; Offer giá VND, **không khai availability**; AES Turbo BM dùng AggregateOffer 9–10 triệu |
| https://auto365.vn/#organization | Organization | Auto365, parentOrganization 365Group |
| https://auto365.vn/#tru-so-chinh | AutoPartsStore | "Auto365.vn - Trụ Sở Chính", 4/4/1/7 Đường số 3, P. Hiệp Bình, TP.HCM, 08:30–18:30, parentOrganization #organization |
| https://auto365.vn/nang-cap-anh-sang#faq | FAQPage | 6 câu, khớp FAQ hiển thị |

**SEO đối chiếu:** `@id` của Organization/Trụ Sở Chính/Person với registry thực thể trên auto365.vn trước khi đăng; nếu registry dùng @id khác thì đổi theo registry.

## 4. Dữ liệu sản phẩm & case

- 129 mẫu tiêu biểu từ 7 danh mục (trang đầu mỗi danh mục, lấy 08–10/10/2026). Bảng: `04_Master_Data_San_Pham_Hub_Anh_Sang.csv` — **chủ quản xác nhận 10/10/2026 giá/VAT/đơn vị đúng theo PDP**; giá có hiệu lực theo PDP tại ngày này.
- Đơn vị/VAT trên card lấy từ ghi chú giá trên chính PDP ("Giá bộ đèn tham khảo, chưa bao gồm VAT"); giữ "/cặp" cho bi gầm X-Light (đã chốt 02/10) và AES Turbo BM (theo PDP).
- Banner F+ Pro Mini dùng bản **không ghi giá** (banner gốc ghi "bao gồm VAT" lệch PDP).
- Case: nguồn `index_ajax.php?…action=newsroomSearch&case_hub=xe-thuc-te-tai-auto365` lọc nhóm ánh sáng = 362 case (10/10/2026). Năm xe lấy từ tên xe trước chữ "lắp", rồi mới đến `nam_xe` (bài Acura MDX 2008 có `nam_xe=2025` — **CMS nên sửa trường này**). Tiêu đề case được làm gọn khi hiển thị (bỏ đoạn quảng cáo, từ nói quá, chữ in hoa).
- 24 case đầu nằm trong DOM; phần còn lại trong `<template>` (vẫn có trong HTML nguồn), dựng ra khi khách lọc/xem thêm.

## 5. Pháp lý (đã viết lại 10/10)

- Luật TTATGT đường bộ 36/2024/QH15, Điều 20 — link Cổng Văn bản Chính phủ.
- Nghị định 168/2024/NĐ-CP, điểm a khoản 3 Điều 13 — trang nêu có quy định xử lý lắp thêm đèn ngoài thiết kế và ngoại lệ đèn sương mù dạng rời lắp theo quy định; **không ghi mức phạt cụ thể**.
- Nghị định 238/2026/NĐ-CP (ban hành 26/06/2026, hiệu lực 15/08/2026) — đã đọc bản gốc trên chinhphu.vn ngày 10/10/2026: Điều 3 chỉ sửa **điểm b khoản 8 Điều 13** (biển số); điểm a khoản 3 Điều 13 **không thay đổi**. Trang ghi rõ điều này.
- IEC 60529 — link webstore.iec.ch.

## 6. Checklist khi lên production (A03)

- [ ] HTTP 200 tại https://auto365.vn/nang-cap-anh-sang, canonical tự trỏ.
- [ ] Bỏ `<meta name="robots" content="noindex,nofollow">`; kiểm thêm `X-Robots-Tag`, robots.txt, WAF không chặn Googlebot/OAI-SearchBot.
- [ ] Ảnh trong `hinh/` chuyển lên CDN auto365 và đổi đường dẫn tương đối thành URL tuyệt đối; cập nhật `og:image`.
- [ ] Endpoint form `/api/leads` đúng môi trường; chỉ báo thành công khi phản hồi `{"success": true}`; thử bằng lead kiểm thử đã thống nhất, không tạo lead giả.
- [ ] Sitemap có URL; URL Inspection trên GSC; ghi Google-selected canonical.
- [ ] Rich Results Test / Schema validator cho bản live.
- [ ] Đo Core Web Vitals trên production (field khi có dữ liệu CrUX).

## 7. Đo lab trên preview (A11) — 10/10/2026

Công cụ: Puppeteer (Chromium headless) trên bản local, đo LCP/CLS bằng PerformanceObserver. Số lab, không thay field data.

| Cấu hình | LCP | CLS | Tải lần đầu | Request | DOM |
| --- | ---: | ---: | ---: | ---: | ---: |
| Mobile 390×844, CPU ×4, 1,6 Mbps, RTT 150 ms | 1,45 s | 0,044 | ~1,26 MB | 27 | 4.137 |
| Desktop 1440×900, không giới hạn | 0,44 s | 0,003 | ~1,08 MB | 29 | 4.137 |

Trước khi đưa case vào template: DOM 7.178, 576 ảnh. Sau: DOM 4.137, 238 ảnh (ảnh lazy-load).

## Trước khi đăng production — xoá khối kiểm tra nội bộ

- Xoá `<aside id="internal-check">` và script đi kèm ở cuối `<main>` (khối này tự hiện trên pages.dev/localhost, tự ẩn ở domain khác nhưng vẫn nằm trong HTML).
- Không đưa thư mục `nang-cap-anh-sang/kiem-tra-noi-bo/` lên production.
- Nếu còn trong bản đăng: lỗi chặn BLOCK_06 (V1.8 §12).
