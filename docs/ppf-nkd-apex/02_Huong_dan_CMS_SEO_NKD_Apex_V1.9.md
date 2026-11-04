# 02 — Hướng dẫn CMS/SEO — PPF NKD Apex (V1.9)

- Nguồn: `auto365/ppf-nkd-apex/index.html` — SHA-256 `3f562e85eead438ba430d2accb482a051922c15d316f5cc41a9436bbf66c6f6e` (cùng phiên bản với 01, 02, 03)
- Preview: https://preview-365group.pages.dev/ppf-nkd-apex/ (noindex, follow — đúng chủ đích staging)
- Kiểm duyệt: Đặng Minh Hoàng (user xác nhận đã duyệt) · lastReviewed 2026-11-03 · dateModified 2026-11-04

## Cấu hình hiện hành (bản 04/11/2026)

| Trường | Giá trị |
|---|---|
| Loại trang | Trang sản phẩm (SKU) kèm giá dịch vụ dán toàn xe và đầu mối tư vấn |
| URL production | `https://auto365.vn/ppf-nkd-apex` (canonical tự trỏ; production chưa xuất bản — 404 tại 03/11 là trạng thái chờ đăng) |
| Title | PPF NKD Apex 7,5 mil – Thông số, giá dán | Auto365 |
| Meta description | PPF NKD Apex 7,5 mil, lớp phủ MULTIPURIFY, bảo hành 3 năm có điều kiện. Giá dán toàn xe đã gồm VAT: Sedan 28, SUV 30, MPV 33 triệu tại Auto365. |
| H1 | PPF NKD Apex 7,5 mil: đặc điểm và giá dán toàn xe |
| Robots | Preview: `noindex,follow`. **Gỡ khi lên production** |
| Breadcrumb | Trang chủ › PPF & Wrap film (`/ppfwrap-film`) › PPF NKD Apex. Khi hub `/ppf-o-to` lên production và bật 301 `/ppfwrap-film` → `/ppf-o-to`, đổi link trong bài + breadcrumb sang `/ppf-o-to` |
| Schema | @graph: BreadcrumbList, WebPage (reviewedBy Đặng Minh Hoàng, lastReviewed), Organization, Product (additionalProperty + AggregateOffer 3 Offer, valueAddedTaxIncluded), FAQPage 5 câu |
| Giá | Sedan 28.000.000 · SUV 30.000.000 · MPV 33.000.000 VNĐ — **giá dán toàn xe, đã gồm phim, công thi công và VAT, áp dụng tại các cơ sở Auto365** (Kinh doanh chốt 04/11/2026) |
| Bảo hành | 3 năm theo điều kiện của NKD, **tính từ ngày thi công** (Kinh doanh 04/11/2026) |
| Thông số | 7,5 mil (≈190,5 µm) · Polycaprolactone · MULTIPURIFY · ≥143 GU · mô-đun 100% 8,2 MPa · độ bền kéo 24,6 MPa · giãn dài khi đứt 345% · QUV340 3.000 giờ — theo catalog NKD do hãng cung cấp (trang 1) |
| Ảnh | Chụp tại Auto365 (user xác nhận 04/11/2026). Đang nhúng base64 cho bản demo; khi lên CMS tách thành file webp, giữ width/height và alt hiện có |
| Hotline | Phim & PPF 0365 365 365 |
| Form | `#leadForm` POST `/api/leads` (meta `auto365-lead-endpoint`), `source_page=ppf-nkd-apex`, `product_interest=PPF NKD Apex`, UTM; chỉ báo thành công khi `{"success": true}`; có `method=post action=/api/leads` làm fallback khi tắt JS. Trên pages.dev trả 405 là bình thường |
| Không làm | Không so sánh/upsell với phiên bản khác cùng dòng (user 03/11) |

## Việc IT khi tích hợp

1. Tạo trang `/ppf-nkd-apex`, dán nội dung trong `.nkd-*`/khối bài; giữ CSS inline của trang.
2. Upload ảnh, đổi src base64 → URL, giữ width/height + alt.
3. Gỡ `noindex`; kiểm canonical, HTTP 200, sitemap.
4. Gửi 1 lead test (`test:true`) và xác nhận CRM nhận đúng `source_page`; ghi số lead vào 03.
5. Kiểm 360/390/768/820/1440 trên production.
