# 02 — Hướng dẫn CMS/SEO — Hub PPF ô tô V1.8

- Nguồn: `auto365/ppf-o-to/index.html` — SHA-256 `f122aeb5101c6586ee1ed0a541e345fd2be040906bdd1bae70078bcc605339a7` (cùng phiên bản với 01 và 03)
- Preview: `https://preview-365group.pages.dev/ppf-o-to/` (noindex đúng chủ đích)
- Kiểm duyệt: Đặng Minh Hoàng, 19/10/2026 (user xác nhận). `dateModified` = ngày phát hành bản; `lastReviewed` giữ ngày duyệt.

## 1. Vai trò URL

| Mục | Quyết định |
| --- | --- |
| URL hub | `https://auto365.vn/ppf-o-to` (user chốt 19/10/2026) |
| Thay thế | Hub **thay thế** danh mục `https://auto365.vn/ppfwrap-film`. Khi lên production: 301 `/ppfwrap-film` → `/ppf-o-to`; cập nhật menu "PPF/Wrap film", breadcrumb và link nội bộ đang trỏ `/ppfwrap-film` |
| Wrap đổi màu | Làm **bài riêng** (user 19/10/2026). Hub này chỉ chứa PPF; các mã AX Wrap cần landing riêng trước khi bật 301, để không mất trang đích cho ~80 mã wrap |
| Canonical | Tự trỏ `https://auto365.vn/ppf-o-to` |

## 2. Metadata & on-page

| Trường | Giá trị |
| --- | --- |
| Title (64 ký tự) | Dán PPF ô tô: bảo vệ sơn, chọn dòng phim & phạm vi dán \| Auto365 |
| Meta description (150 ký tự) | Dán PPF ô tô tại Auto365: PPF TPU là gì, so sánh 3M và AX Film (giá, độ dày, bảo hành), dán toàn xe hay từng phần, quy trình, chăm sóc, 90+ chi nhánh. |
| H1 | Dán PPF ô tô |
| og:image | `https://auto365.vn/uploads/images/thumbnails/800x450xcrop/news/bmw-330i-dan-ppf-3m-1791785952.webp` |
| Robots | Preview `noindex,nofollow` → production đổi `index,follow` |

Thứ tự H2: Sản phẩm PPF → Xe thực tế → Vì sao → (Trụ sở + 90+ chi nhánh) → PPF là gì / Dán toàn xe hay từng phần / Quy trình → Kiến thức (6 mục) → So sánh PPF–ceramic–wrap → Chăm sóc → Tư vấn → Video → Cẩm nang → FAQ (7) → CTA.

Khung nội dung tối đa 1296px; H1 30px, H2 20px, chữ thân 15px (theo trang bi gầm X-Light).

## 3. Schema (một `@graph`)

`WebSite` · `Organization` (#organization) · `BreadcrumbList` · `WebPage` (author Team Content Auto365, `reviewedBy` Đặng Minh Hoàng, `lastReviewed` 2026-10-19, `datePublished`/`dateModified` 2026-10-19, `mainEntity` → ItemList) · `ItemList` 9 `Product` + `Offer` (VND, `valueAddedTaxIncluded: true`, giá khớp card) · `Service` · `FAQPage` (7 câu, khớp nguyên văn phần hiển thị).

Nếu CMS đã sinh `Organization`/`WebSite`/`BreadcrumbList` sẵn, bỏ các node trùng trong graph của hub, giữ `@id` để nối.

## 4. Dữ liệu sản phẩm & case

- 9 dòng PPF: 3M 50/100/150/200 Gloss; AX G Series, K Series Ver 2, X Series Ver 2, Clear/Gloss Carbon Fiber. Giá, độ dày, bảo hành lấy theo trang sản phẩm auto365.vn ngày 19/10/2026; ô "Theo trang sản phẩm" = PDP chưa ghi rõ.
- Giá trên card = **giá dán toàn xe** theo trang sản phẩm, gồm VAT (user xác nhận 19/10/2026). Card ghi "/ toàn xe · gồm VAT"; Offer có `description` "Giá dán toàn xe, đã gồm VAT"; FAQ chi phí nêu khoảng 20.000.000đ–104.000.000đ toàn xe. Dán từng phần báo giá riêng.
- 13 case PPF, lọc theo dòng phim (3M/AX) và hãng xe; 12 bài cẩm nang mới nhất lọc theo chủ đề; 4 video YouTube của Auto365.
- Hotline Phim & PPF: 0365 365 365 (user chốt 19/10/2026); Zalo `zalo.me/0365365365`.

## 5. Nguồn

| Nội dung | Nguồn |
| --- | --- |
| Cấu tạo, độ dày 7.5 mil, tự phục hồi khi gặp nhiệt, bảo hành 10 năm (3M 150 Gloss) | [Technical Data Sheet 3M PPF Series 150 Gloss, Rev A 03/2024](https://multimedia.3m.com/mws/media/2395419O/3m-paint-protection-film-series-150-gloss-product-bulletin-rev-a.docx) |
| Thông số các dòng AX Film | Trang sản phẩm Auto365 (chưa tìm được trang chính thức của hãng AX Film) |
| Vật liệu PVC/TPU/TPH, kinh nghiệm rửa xe ≥7 ngày, chăm sóc | Bài kiến thức trên `auto365.vn/ppfwrap-film` (đã đăng) |
| Quy định đổi màu xe | Thông tư 79/2024/TT-BCA (đăng ký xe); [SGGP](https://www.sggp.org.vn/xe-thay-doi-mau-son-tu-cai-tao-chua-nop-phat-se-bi-tu-choi-kiem-dinh-post775883.html); [Thư viện Pháp luật](https://thuvienphapluat.vn/hoi-dap-phap-luat/doi-mau-son-xe-o-to-co-phai-xin-cap-lai-giay-dang-ky-xe-306493.html). Không ghi mức phạt |

## 6. Form tư vấn

POST `/api/leads` (FormData): `fullname, phone, car_brand, car_model, product_group, area, product_interest, consent, service, source_page=ppf-o-to-hub, source_url, referrer, utm_*`. Chỉ báo thành công khi `{"success": true}`.

Lead test: 19/10/2026 21:04 → `{success:true, lead_id 205, test:true}`; CRM đã nhận đủ trường và đã xoá; user đã thấy form chạy (19/10/2026).

## 7. Checklist khi lên production

L1 nội dung khớp 01 · L2 HTTP 200, canonical tự trỏ, `index,follow` · L3 URL Inspection · L4 Rich Results (Product, FAQPage) · L5 thiết bị thật · L6 PageSpeed · L7 link, điện thoại, form · L8 HTML có đủ văn bản/bảng/a href · 301 `/ppfwrap-film` hoạt động · landing Wrap đã có.

## Trước khi đăng production

Xoá khối `<aside id="internal-check">` và script hiển thị của nó (chỉ dành cho preview).
