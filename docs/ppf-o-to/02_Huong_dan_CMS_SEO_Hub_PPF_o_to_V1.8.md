# 02 — Hướng dẫn CMS/SEO — Hub PPF ô tô V1.8

- Nguồn: `auto365/ppf-o-to/index.html` — SHA-256 `5731f428f97a44e3416b28c7601986af5a4fd803498595f393fb47f82cec6968` (cùng phiên bản với 01 và 03)
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

Thứ tự H2: Sản phẩm PPF → Xe thực tế → Vì sao → (Trụ sở + 90+ chi nhánh) → PPF là gì / Dán toàn xe hay từng phần / Quy trình → Kiến thức (7 mục, mục đầu là bảng chọn phạm vi theo nhu cầu) → So sánh PPF–ceramic–wrap → Chăm sóc → Tư vấn → Video → Cẩm nang → FAQ (7) → CTA.

Khung nội dung tối đa 1296px; H1 30px, H2 20px, chữ thân 15px (theo trang bi gầm X-Light).

## 3. Schema (một `@graph`)

`WebSite` · `Organization` (#organization) · `BreadcrumbList` · `WebPage` (author Team Content Auto365, `reviewedBy` Đặng Minh Hoàng, `lastReviewed` 2026-10-19, `datePublished` 2026-10-19, `dateModified` 2026-10-20, `mainEntity` → ItemList) · `ItemList` 9 `Product` + `Offer` (VND, `valueAddedTaxIncluded: true`, giá khớp card) · `Service` · `FAQPage` (7 câu, khớp nguyên văn phần hiển thị).

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
| Vật liệu PVC/TPU/TPH (xu hướng chung, không thay thông số dòng phim) | Bài kiến thức trên `auto365.vn/ppfwrap-film` (đã đăng) |
| Chăm sóc: rửa lần đầu theo hướng dẫn bàn giao, tránh chất mài mòn/đánh bóng/rubbing compound | [3M Pro Series FAQ](https://www.3m.com/3M/en_US/p/dc/v100997005/) — chỉ dùng làm hướng chung, thời điểm cụ thể theo dòng phim |
| Ảnh hero, form, CTA | Hồ sơ thi công [VinFast VF 8 dán PPF 3M 50 Gloss full xe](https://auto365.vn/vinfast-vf-8-dan-ppf-3m-50-gloss) tại Auto365.vn - Trụ Sở Chính |
| Quy định đổi màu xe | Thông tư 79/2024/TT-BCA (đăng ký xe), chưa rà văn bản hợp nhất; [SGGP](https://www.sggp.org.vn/xe-thay-doi-mau-son-tu-cai-tao-chua-nop-phat-se-bi-tu-choi-kiem-dinh-post775883.html); [Thư viện Pháp luật](https://thuvienphapluat.vn/hoi-dap-phap-luat/doi-mau-son-xe-o-to-co-phai-xin-cap-lai-giay-dang-ky-xe-306493.html). Không ghi mức phạt; đã bỏ quy tắc 50% diện tích (chưa xác minh điều khoản hiện hành) |

## 5b. Sửa theo audit PPF19 (19/10/2026), bản 20/10/2026

| Mã | Đã sửa trên trang | Còn chờ (ngoài trang) |
| --- | --- | --- |
| PPF19-01 | Hero, ảnh cạnh form, nền CTA đổi sang ảnh thật dán PPF trên VinFast VF 8 (capo, cửa/hông, xe hoàn thiện); ALT/caption theo bài case. Bỏ file ảnh dán phim kính | — |
| PPF19-02 | Chăm sóc: bỏ "7 ngày", "cồn chuyên dụng", "đánh bóng 6 tháng"; rửa lần đầu theo hướng dẫn bàn giao; hỏi kỹ thuật viên về dung dịch; tránh chất mài mòn/đánh bóng | Tài liệu chăm sóc từng dòng phim |
| PPF19-03 | TPH = tên gọi thương mại; bảng vật liệu ghi là xu hướng chung; bỏ "dày hơn chịu đá văng tốt hơn", "6–12 tháng", "30.000 cửa hàng/ISO 9001"; nhãn AX = trang sản phẩm Auto365 (nguồn phân phối) | Tài liệu kỹ thuật AX Film |
| PPF19-04 | "Hơn 90 chi nhánh… Khi đặt lịch, Auto365 xác nhận cơ sở nhận thi công đúng dòng PPF, phạm vi dán và nơi tiếp nhận bảo hành" | Danh sách cơ sở nhận PPF |
| PPF19-05 | Giá toàn xe (user xác nhận); dán từng phần báo giá riêng | Panel bao gồm theo loại xe |
| PPF19-06 | Thêm mục "Chọn phạm vi dán theo nhu cầu" (bảng 5 tình huống) | — |
| PPF19-07 | Lọc case 0 kết quả: thông báo + nút "Bỏ lọc" (role=status) | — |
| PPF19-08 | Ghi chú dưới sơ đồ: minh họa, không phải danh sách panel báo giá | — |
| PPF19-09 | Bỏ quy tắc 50%; hướng khách hỏi cơ quan đăng ký xe | Rà điều khoản hiện hành |
| PPF19-10 | — | Đường tới toàn bộ catalog; mapping /ppfwrap-film; trang Wrap trước 301 |
| PPF19-11 | Bộ 01–03 cùng SHA-256 | Hotline tư vấn trên PDP PPF (0365 365 911) vs hub (0365 365 365) |
| PPF19-12 | Ghi ở mục "Trước khi đăng production" | IT bỏ khối nội bộ khỏi HTML xuất bản |

## 6. Form tư vấn

POST `/api/leads` (FormData): `fullname, phone, car_brand, car_model, product_group, area, product_interest, consent, service, source_page=ppf-o-to-hub, source_url, referrer, utm_*`. Chỉ báo thành công khi `{"success": true}`.

Lead test: 19/10/2026 21:04 → `{success:true, lead_id 205, test:true}`; CRM đã nhận đủ trường và đã xoá; user đã thấy form chạy (19/10/2026).

## 7. Checklist khi lên production

L1 nội dung khớp 01 · L2 HTTP 200, canonical tự trỏ, `index,follow` · L3 URL Inspection · L4 Rich Results (Product, FAQPage) · L5 thiết bị thật · L6 PageSpeed · L7 link, điện thoại, form · L8 HTML có đủ văn bản/bảng/a href · 301 `/ppfwrap-film` hoạt động · landing Wrap đã có.

## Trước khi đăng production

Xoá hẳn khối `<aside id="internal-check">` và script hiển thị của nó khỏi HTML xuất bản (không chỉ ẩn bằng CSS/hostname). Giữ noindex cho preview; production dùng `index,follow`.
