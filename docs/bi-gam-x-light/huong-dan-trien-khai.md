# Hub bi gầm X-Light — Hồ sơ bàn giao lên production

- **Bản HTML áp dụng:** `auto365/bi-gam-x-light/index.html`, SHA-256 `3288bafde829ce3e1a2383504615d4099e5195cd269638515400ffa4d1a04570` (commit `956f7064`). Nếu file đổi thì cập nhật lại mã này.
- **Preview:** https://preview-365group.pages.dev/bi-gam-x-light/
- **URL production:** https://auto365.vn/nang-cap-anh-sang-bi-gam-x-light
- **Người duyệt chuyên môn:** Nguyễn Quang Đạo, ngày 30/09/2026 (trang ghi "Cập nhật 30/09/2026"; schema `dateModified` 2026-09-30).

## 1. URL và thẻ đầu trang

| Thẻ | Preview (giữ nguyên) | Production |
|---|---|---|
| URL | preview-365group.pages.dev/bi-gam-x-light/ | **https://auto365.vn/nang-cap-anh-sang-bi-gam-x-light** (trả HTTP 200) |
| `<title>` | Bi gầm X-Light: Giá sản phẩm, so sánh mẫu & tư vấn \| Auto365 | giữ nguyên |
| Meta description | So sánh bi gầm X-Light theo lens, Cos/Pha, nhiệt màu, điện áp và giá. Xem mẫu hiện hành, case xe thực tế, chi phí lắp đặt và gửi cấu hình để Auto365 tư vấn theo xe. | giữ nguyên |
| H1 | Bi gầm X-Light: các dòng hiện có và cách chọn phù hợp | giữ nguyên |
| Canonical | https://auto365.vn/nang-cap-anh-sang-bi-gam-x-light | giữ nguyên (tự trỏ) |
| Meta robots | `noindex, follow` | **`index, follow`** |
| Header HTTP | `X-Robots-Tag: noindex, follow` (file `auto365/_headers`) | **không gửi `X-Robots-Tag: noindex`** |
| og:url, `@id` trong schema | đã trỏ URL production | giữ nguyên |

> Không copy `auto365/_headers` sang production. Preview phải luôn giữ `noindex`.
>
> **Xoá khối kiểm tra nội bộ** trước khi đăng: đoạn từ comment `<!-- INTERNAL-CHECK ... -->` tới hết `<script id="xl-internal-check-js">` ở cuối bài (sau `#faq`), cùng `<style id="xl-internal-check-css">` trong `<head>`. Khối này tự ẩn ngoài `pages.dev`, nhưng vẫn phải xoá khỏi mã production.

## 2. Ảnh

| Ảnh | Trên preview | Việc cần làm |
|---|---|---|
| Ảnh chia khối Land Rover, Honda | `hinh/case-media-1-landrover.webp`, `hinh/case-media-3-honda-black.webp` | Upload lên thư viện ảnh auto365.vn, thay đường dẫn `hinh/...` bằng URL mới |
| Ảnh sản phẩm, case, logo hãng | Đã là URL `https://auto365.vn/uploads/...` | Không cần làm gì |
| og:image | Ảnh sản phẩm X-Light trên auto365.vn | Giữ, hoặc thay bằng ảnh 1200×630 |

## 3. Schema (JSON-LD trong `<head>`)

9 node: `Person` (reviewer), `Service`, `TechArticle`, `CollectionPage`, `BreadcrumbList`, `ItemList` (15 mẫu), `Brand`, `AutoPartsStore` (hotline +84365365911), `FAQPage` (11 câu).

- **Không** thêm `Product`/`Offer`/`aggregateRating` trên hub; các loại này thuộc trang sản phẩm.
- FAQPage phải trùng từng chữ với 11 câu hiển thị trong `#faq`. Sửa câu nào thì sửa cả hai chỗ.
- Sau khi đăng: kiểm bằng https://search.google.com/test/rich-results (không lỗi, cảnh báo chấp nhận được).

## 4. Form, CRM và đo lường

- Form gửi `POST /api/leads` **cùng domain** (FormData, header `Idempotency-Key`). Trên auto365.vn chạy được ngay; trên preview luôn báo chưa gửi được (405) — **không chạy Ads vào link preview**.
- Chỉ báo thành công khi API trả `{"success": true}`.
- Trường gửi kèm: họ tên, SĐT, xe, tỉnh, nhu cầu, `selected_model`/`selected_id`/`selected_url`, `package_price`, `configuration_id`, `vehicle_group`, UTM, gclid/gbraid/wbraid/fbclid, `source_url`, `lead_id`.
- Sự kiện dataLayer: `view_recommendation`, `select_product`, `click_call`, `click_zalo`, `lead_form_submit`. Gắn conversion Ads/GA4 vào `lead_form_submit` **chỉ khi API xác nhận thành công**.
- Lead test đã gửi 30/09 vào API production: **mã 60** ("TEST X-LIGHT (Claude) - vui long xoa", SĐT 0900000000). CRM kiểm các trường rồi xoá.

## 5. Liên kết nội bộ cần gắn (sau khi URL production trả 200)

Đoạn HTML dán sẵn + checklist từng trang: [doan-link-ve-hub.md](doan-link-ve-hub.md).

Anchor gợi ý, đặt trong đoạn văn có ngữ cảnh, **mỗi trang 1 link**, không lặp anchor ở mọi đoạn.

### 5.1. Hub bi gầm tổng

| Trang | Vị trí | Câu gợi ý |
|---|---|---|
| https://auto365.vn/nang-cap-anh-sang-bi-gam | Khối thương hiệu / mục X-Light | "Xem và **so sánh các mẫu bi gầm X-Light** theo lens, điện áp và nhiệt màu." |

### 5.2. 15 trang sản phẩm X-Light

Đặt gần khối thông số hoặc cuối mô tả: "Phân vân giữa các mẫu? **So sánh các mẫu bi gầm X-Light** và xem xe đã lắp thực tế."

| # | Sản phẩm | URL |
|---|---|---|
| 1 | X-Light F10 Turbo V2 | https://auto365.vn/den-bi-gam-x-light-f10-turbo-v2 |
| 2 | X-Light 301 V2 | https://auto365.vn/den-bi-gam-x-light-301-v2 |
| 3 | X-Light X3 Ultra | https://auto365.vn/bi-gam-x-light-x3-ultra |
| 4 | X-Light F10 2.0 New | https://auto365.vn/den-bi-gam-x-light-f10-2-new |
| 5 | X-Light F10 Pro V2 | https://auto365.vn/den-bi-gam-x-light-f10-pro-v2 |
| 6 | X-Light F10 New 2025 | https://auto365.vn/den-bi-gam-x-light-f10-new-2025 |
| 7 | X-Light F10 Turbo 24V V2 | https://auto365.vn/den-bi-gam-x-light-f10-turbo-24v-v2 |
| 8 | F10 Hyper 2.0 | https://auto365.vn/bi-gam-xligh-f10-hyper-2 |
| 9 | F10 Pro 3 nhiệt màu | https://auto365.vn/bi-gam-xlight-f10-pro |
| 10 | F10 2.0 2024 | https://auto365.vn/x-light-f10-2024 |
| 11 | F10 Turbo 24V | https://auto365.vn/bi-gam-x-light-f10-turbo-24v |
| 12 | F10 Turbo | https://auto365.vn/bi-gam-x-light-f10-turbo |
| 13 | F10 2.0 inch | https://auto365.vn/bi-gam-x-light-f10-20-inch |
| 14 | F10 2022 có mắt quỷ | https://auto365.vn/bi-gam-led-x-light-f10-2022-co-mat-quy |
| 15 | F10 New | https://auto365.vn/bi-gam-x-light-f10 |

### 5.3. 30 bài case

Đặt ở phần kết luận / "lưu ý trước khi lắp": "Xe khác đời hoặc nhu cầu khác? **Xem các mẫu X-Light khác** và xe đã lắp tại Auto365."

| # | Case | URL |
|---|---|---|
| 1 | Land Rover LR2 S 2010 – F10 Turbo V2 4300K | https://auto365.vn/land-rover-lr2-s-2010-lap-bi-gam-x-light-f10-turbo-v2-4300k |
| 2 | VinFast Fadil Premium 2021 – 301 V2 | https://auto365.vn/vinfast-fadil-premium-2021-lap-bi-gam-x-light-301-v2 |
| 3 | Hyundai Custin 2024 – 301 V2 | https://auto365.vn/ho-so-nang-cap-bi-gam-x-light-301-v2-tren-hyundai-custin-2024 |
| 4 | Toyota Corolla Altis 2015 – 301 V2 | https://auto365.vn/toyota-corolla-altis-2015-lap-bi-gam-x-light-301-v2 |
| 5 | Honda CR-V 1.5L L 2018 – F10 New | https://auto365.vn/honda-cr-v-15l-l-2018-lap-bi-gam-x-light-f10-new |
| 6 | Honda City RS 2022 – F10 Turbo V2 | https://auto365.vn/honda-city-rs-2022-lap-bi-gam-x-light-f10-turbo-v2 |
| 7 | Mazda CX-5 2021 – F10 Hyper 2.0 | https://auto365.vn/mazda-cx-5-2021-lap-bi-gam-x-light-f10-hyper-2-0 |
| 8 | Mitsubishi Outlander 2022 – F10 Turbo V2 4300K | https://auto365.vn/mitsubishi-outlander-2022-lap-x-light-f10-turbo-v2-4300k |
| 9 | Elantra N Line 2023 – F10 Turbo V2 4300K | https://auto365.vn/elantra-n-line-2023-lap-bi-gam-x-light-f10-turbo-v2-4300k |
| 10 | Toyota Vios 1.5E CVT 2018 – X3 Ultra 4300K | https://auto365.vn/toyota-vios-15e-cvt-2018-lap-bi-gam-x-light-x3-ultra-4300k |
| 11 | Toyota Vios 1.5E CVT 2021 – F10 2.0 New | https://auto365.vn/toyota-vios-15e-cvt-2021-lap-bi-gam-x-light-f10-20-new |
| 12 | Ford Ranger Wildtrak 2026 – F10 Turbo V2 4300K | https://auto365.vn/ford-ranger-wildtrak-2026-lap-x-light-f10-turbo-v2 |
| 13 | BMW X5 E70 2010 – F10 Turbo V2 | https://auto365.vn/bmw-x5-e70-2010-lap-x-light-f10-turbo-v2-gia-cau-hinh |
| 14 | Mitsubishi Xpander Cross 2023 – F10 2.0 New | https://auto365.vn/mitsubishi-xpander-cross-2023-lap-bi-gam-x-light-f10-20-new-gia-va-cau-hinh |
| 15 | Mazda CX-5 2016 2.0L – F10 Turbo V2 4300K | https://auto365.vn/mazda-cx-5-2016-lap-bi-gam-x-light-f10-turbo-v2-4300k |
| 16 | Kia Carnival 2004 – 301 V2 | https://auto365.vn/kia-carnival-2004-lap-bi-gam-x-light-301-v2-gia-va-cau-hinh |
| 17 | Ford Transit 2012 16 chỗ – X3 Ultra | https://auto365.vn/ford-transit-2012-16-cho-lap-bi-gam-x-light-x3-ultra-gia-cau-hinh |
| 18 | Hyundai Creta 2022 – F10 Turbo V2 4300K | https://auto365.vn/hyundai-creta-2022-lap-bi-gam-x-light-f10-turbo-v2-4300k |
| 19 | Porsche Cayenne S 2014 – F10 Turbo V2 4300K | https://auto365.vn/porsche-cayenne-s-2014-lap-bi-gam-x-light-f10-turbo-v2 |
| 20 | Ford Everest Titanium 2021 – F10 Pro V2 | https://auto365.vn/ford-everest-2021-nang-cap-bi-gam-x-light-f10-pro-v2 |
| 21 | Mazda CX-8 2021 Luxury – F10 Hyper 2.0 | https://auto365.vn/mazda-cx-8-2021-luxury-lap-bi-gam-x-light-f10-hyper-20-gia-va-cau-hinh-thuc-te |
| 22 | Toyota Camry 2008 – X3 Ultra 4300K | https://auto365.vn/toyota-camry-2008-lap-bi-gam-x-light-x3-ultra-4300k |
| 23 | Mitsubishi Triton 2024 – F10 Hyper 2.0 | https://auto365.vn/mitsubishi-triton-2024-bi-gam-x-light-f10-hyper-2-0 |
| 24 | Suzuki XL7 2023 – F10 2.0 New | https://auto365.vn/suzuki-xl7-nang-cap-bi-gam-x-light-f10-2-0-new |
| 25 | Toyota Vios 2020 – F10 Hyper 2.0 | https://auto365.vn/toyota-vios-do-bi-gam-x-light-f10-hyper-2 |
| 26 | Mitsubishi Outlander 2021 – 301 V2 | https://auto365.vn/mitsubishi-outlander-nang-cap-bi-gam-x-light-301-v2 |
| 27 | VinFast Limo Green – F10 2.0 New | https://auto365.vn/nang-cap-bi-gam-xlight-f10-2-new-cho-vinfast-limo-green |
| 28 | Toyota Innova Cross 2025 – F10 2.0 New 2025 | https://auto365.vn/toyota-innova-cross-do-bi-gam-x-light-f10-2-new |
| 29 | Honda City – F10 New | https://auto365.vn/honda-city-nang-cap-den-bi-gam-x-light-f10-new |
| 30 | Hyundai Tucson – X3 Ultra | https://auto365.vn/hyundai-tucson-nang-cap-den-bi-gam-x-light-x3-ultra |

Nếu CMS có khối "bài liên quan" tự động theo tag, có thể gắn tag X-Light thay cho sửa tay từng case, miễn link là HTML thật (không chỉ render bằng JS).

## 6. Search Console

1. URL Inspection → `https://auto365.vn/nang-cap-anh-sang-bi-gam-x-light` → Test live URL (Page indexing: "URL is available to Google", canonical = chính URL).
2. Request indexing.
3. Kiểm sitemap có chứa URL mới.
4. Sau 2–4 tuần: xem báo cáo Performance theo truy vấn "bi gầm x-light", "x-light f10 turbo v2", "x-light pro v2"… để biết hub, sản phẩm hay case đang nhận truy vấn nào.

## 7. Phiếu nghiệm thu

| # | Hạng mục | Cách kiểm | Kết quả | Người kiểm | Ngày |
|---|---|---|---|---|---|
| 1 | URL production trả 200 | `curl -I` | | | |
| 2 | Không còn `noindex` (meta + header) | Xem nguồn trang, `curl -I` | | | |
| 3 | Canonical tự trỏ | Xem nguồn trang | | | |
| 4 | 2 ảnh `hinh/` đã thay URL auto365.vn | Mở trang, không ảnh vỡ | | | |
| 5 | Rich Results Test không lỗi | search.google.com/test/rich-results | | | |
| 6 | Form gửi thật trên production, API trả `success: true` | Gửi 1 lead test, đánh dấu TEST | | | |
| 7 | Lead trong CRM đủ mẫu/giá/nguồn/UTM | CRM | | | |
| 8 | Conversion GA4/Ads bắn đúng 1 lần | GA4 DebugView / Tag Assistant | | | |
| 9 | Link từ hub tổng, 15 sản phẩm, 30 case | Xem nguồn từng trang | | | |
| 10 | GSC: URL is on Google | URL Inspection | | | |
| 11 | Mobile thật (iPhone + Android): lọc, so sánh, form, gọi, Zalo | Thao tác tay | | | |
| 12 | Xoá lead test mã 60 và lead test ở mục 6 | CRM | | | |
