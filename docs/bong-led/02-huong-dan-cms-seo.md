# Bóng LED ô tô — Hướng dẫn đưa lên CMS / SEO

Áp dụng cho bản HTML có SHA-256 `29467dbd83beb00cc5efefcd7f39c304d38bf0bc2c41e87bdd96eaadd6c37548` (xem `01-noi-dung-ban-duyet.md`).

## 1. URL và thẻ đầu trang

| Thẻ | Preview (giữ nguyên) | Production (đổi khi đưa lên) |
|---|---|---|
| URL | preview-365group.pages.dev/bong-led/ | **https://auto365.vn/nang-cap-anh-sang-bong-led** |
| `<title>` | Bóng LED ô tô: bảng giá, chọn chân theo xe \| Auto365 | giữ nguyên |
| Meta description | Xem bóng LED ô tô X-Light và NaoEvo, so sánh giá, chân bóng và bảo hành. Đối chiếu cấu hình đèn, điện áp và thông tin lắp đặt trước khi chọn mua tại Auto365. | giữ nguyên |
| H1 | Bóng LED ô tô: chọn đúng chân, đúng cấu hình xe | giữ nguyên |
| Canonical | https://auto365.vn/nang-cap-anh-sang-bong-led | giữ nguyên (tự trỏ) |
| Meta robots | `noindex,follow` | **`index,follow`** |
| Header HTTP | `X-Robots-Tag: noindex, follow` (file `_headers` của pages.dev) | **không gửi `X-Robots-Tag: noindex`** |
| og:url | https://auto365.vn/nang-cap-anh-sang-bong-led | giữ nguyên |

> Không copy file `auto365/_headers` sang production. Preview phải luôn giữ `noindex`.

## 2. Ảnh

| Ảnh | File trên preview | Việc cần làm trên production |
|---|---|---|
| 6 banner giữa trang | `hinh/banner-*.webp` (1200×514) | Upload lên thư viện ảnh auto365.vn, thay đường dẫn `hinh/...` bằng URL mới |
| Ảnh sản phẩm, case, cẩm nang | Đã là URL `https://auto365.vn/uploads/...` | Không cần làm gì |
| og:image | Ảnh S6 Pro V2 | Có thể thay bằng 1 banner (khuyến nghị 1200×630) |
| Ảnh đại diện trang (CollectionPage) | — | **Điền ảnh đại diện trong CMS** để schema không còn trỏ `noimage.png` |

Tất cả 58 ảnh có `alt`; ảnh ngoài màn hình đầu dùng `loading="lazy"`.

## 3. Schema (JSON-LD trong `<head>`)

Đang có: `Organization`, `WebSite`, `CollectionPage`, `BreadcrumbList`, `ItemList` (25 mã đang bán), `FAQPage` (6 câu).

- **Không** thêm `Product`/`Offer`/`aggregateRating`/`review` trên hub; các loại này thuộc trang sản phẩm.
- Template production hiện sinh `"brand": {"@id": "#brand-auto365"}` cho 20 sản phẩm → **Dev sửa** để brand lấy từ hãng thật (X-Light / NaoEvo). Auto365 chỉ ở vai trò `seller`/`publisher`.
- FAQPage phải trùng từng chữ với 6 câu hiển thị trong `#faq`. Sửa câu nào thì sửa cả hai chỗ.
- Kiểm bằng https://search.google.com/test/rich-results sau khi đăng.

## 4. CTA, form và đo lường

| Thành phần | Cấu hình |
|---|---|
| Hotline | `tel:0365365911` |
| Zalo | `https://zalo.me/0365365911` |
| Form giữa trang `#mid-sales-form` | POST `/api/leads` (FormData): `fullname, phone, car_model, province, priority, service, source_page, source_url, request_id, referrer, utm_*`. Thành công khi HTTP 2xx + `{"success": true}`; `lead_id` nếu có sẽ được hiển thị |
| Khi gửi lỗi | Giữ thông tin khách, hiện nút Gọi / Sao chép nội dung / Mở Zalo |
| dataLayer | `lead_form_submit` (chỉ khi thành công, không chứa tên/SĐT) |
| Sự kiện phụ (`auto365:led`) | `phone_click`, `zalo_open`, `copy_request`, `filter`, `quick_filter`, `fit_check` |

Dev cần xác nhận `/api/leads` trên auto365.vn trả `{"success": true}` (giống form CR BLK).

## 5. Liên kết nội bộ

- Từ hub đi ra: 27 trang sản phẩm, 6 bài case, 8 bài cẩm nang (chân bóng H4/H7/9005/9006, bảng mã chân bóng, thành phần đèn pha cos…), `/chi-nhanh`.
- **Cần thêm link trỏ về hub** từ: `/nang-cap-anh-sang`, các bài chân bóng (`/chan-den-h4`, `/chan-den-h7`, `/chan-den-9005`, `/chan-den-9006`, `/su-khac-biet-cua-chan-den-h4-va-h7`, `/bang-ma-tra-chan-bong-den-cho-tat-ca-cac-dong-xe-2023`) và 27 trang sản phẩm. Anchor tự nhiên theo ngữ cảnh, không lặp một anchor thương mại.

## 6. Checklist sau khi đăng

- [ ] URL trả 200, `index,follow`, không có `X-Robots-Tag: noindex`
- [ ] Canonical tự trỏ; title/H1/meta đúng bảng mục 1
- [ ] Ảnh banner hiển thị từ thư viện auto365.vn
- [ ] Rich Results Test: không lỗi, brand đúng hãng, không còn `noimage.png`
- [ ] Gửi 1 lead thử → có trong CRM, `lead_form_submit` bắn 1 lần
- [ ] GSC URL Inspection: indexable, Google chọn đúng canonical → Request indexing
- [ ] URL có trong sitemap
- [ ] PageSpeed Insights mobile: ghi LCP, CLS, INP, ảnh LCP
- [ ] Bảng bảo hành / FAQ trên production khớp 24/24/12 tháng
