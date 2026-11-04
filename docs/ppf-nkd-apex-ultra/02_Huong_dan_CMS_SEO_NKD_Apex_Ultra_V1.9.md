# 02 — Hướng dẫn CMS/SEO — PPF NKD Apex Ultra (V1.9)

- Nguồn: `auto365/ppf-nkd-apex-ultra/index.html` — SHA-256 `ad237b8afdc0f1d63ffaf98ec68ba16c47d27b8d708aa5f77eb85f47709039cf` (cùng phiên bản với 01, 02, 03)
- Preview: https://preview-365group.pages.dev/ppf-nkd-apex-ultra/ (noindex, follow — đúng chủ đích staging)
- Kiểm duyệt: Đặng Minh Hoàng (user xác nhận đã duyệt) · lastReviewed 2026-11-03 · dateModified 2026-11-04

## Cấu hình hiện hành (bản 04/11/2026)

| Trường | Giá trị |
|---|---|
| Loại trang | Trang sản phẩm (SKU) kèm giá dịch vụ dán toàn xe và đầu mối tư vấn |
| URL production | `https://auto365.vn/ppf-nkd-apex-ultra` (canonical tự trỏ; production chưa xuất bản — 404 tại 03/11 là trạng thái chờ đăng) |
| Title | PPF NKD Apex Ultra 8,5 mil – Thông số và giá dán | Auto365 |
| Meta description | NKD PPF Apex Ultra dày 8,5 mil, phủ MULTIPURIFY, bảo hành công bố 5 năm. Giá dán toàn xe đã gồm VAT: Sedan 38, SUV 42, MPV 46 triệu. |
| H1 | PPF NKD Apex Ultra: thông số, giá dán và bảo hành |
| Robots | Preview: `noindex,follow`. **Gỡ khi lên production** |
| Breadcrumb | Trang chủ › PPF & Wrap film (`/ppfwrap-film`) › PPF NKD Apex Ultra. Khi hub `/ppf-o-to` lên production và bật 301 `/ppfwrap-film` → `/ppf-o-to`, đổi link trong bài + breadcrumb sang `/ppf-o-to` |
| Schema | @graph: BreadcrumbList, WebPage (reviewedBy Đặng Minh Hoàng, lastReviewed), Organization, Product (additionalProperty + AggregateOffer 3 Offer, valueAddedTaxIncluded), FAQPage 6 câu |
| Giá | Sedan 38.000.000 · SUV 42.000.000 · MPV 46.000.000 VNĐ — **giá dán toàn xe, đã gồm phim, công thi công và VAT, áp dụng tại các cơ sở Auto365** (Kinh doanh chốt 04/11/2026) |
| Bảo hành | 5 năm theo điều kiện của NKD, **tính từ ngày thi công** (Kinh doanh 04/11/2026) |
| Thông số | 8,5 mil (≈215,9 µm) · Polycaprolactone · MULTIPURIFY · ≥143 GU · mô-đun 100% 8,6 MPa · độ bền kéo 25,8 MPa · giãn dài khi đứt 370% · QUV340 3.000 giờ — theo catalog NKD do hãng cung cấp (trang 1) |
| Ảnh | Chụp tại Auto365 (user xác nhận 04/11/2026). Đang nhúng base64 cho bản demo; khi lên CMS tách thành file webp, giữ width/height và alt hiện có |
| Hotline | Phim & PPF 0365 365 365 |
| Form | `#leadForm` POST `/api/leads` (meta `auto365-lead-endpoint`), `source_page=ppf-nkd-apex-ultra`, `product_interest=PPF NKD Apex Ultra`, UTM; chỉ báo thành công khi `{"success": true}`; có `method=post action=/api/leads` làm fallback khi tắt JS. Trên pages.dev trả 405 là bình thường |
| Không làm | Không so sánh/upsell với phiên bản khác cùng dòng (user 03/11) |

## Việc IT khi tích hợp

1. Tạo trang `/ppf-nkd-apex-ultra`, dán nội dung trong `.nkd-*`/khối bài; giữ CSS inline của trang.
2. Upload ảnh, đổi src base64 → URL, giữ width/height + alt.
3. Gỡ `noindex`; kiểm canonical, HTTP 200, sitemap.
4. Gửi 1 lead test (`test:true`) và xác nhận CRM nhận đúng `source_page`; ghi số lead vào 03.
5. Kiểm 360/390/768/820/1440 trên production.
