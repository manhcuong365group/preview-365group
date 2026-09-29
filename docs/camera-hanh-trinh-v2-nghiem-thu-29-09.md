# Camera hành trình V2 — Biên bản đối chiếu claim & 15 bài test (29/09/2026)

Bản kiểm: preview https://manhcuong365group.github.io/preview-365group/camera-hanh-trinh-v2/ — commit `7b26570e`.
Người chạy: dev (Claude Code). Ký duyệt claim: **Nguyễn Quang Đạo** (reviewer kỹ thuật). Ký test: QA.

## 1. Đối chiếu claim với trang chính thức của hãng

Đã ghi vào `data/catalog.ssot.js` (`official_source`, `official_checked_at`, `official_claims`) và hiện ở hàng **Nguồn hãng** trong bảng so sánh.

| # | Model | Claim trên trang | Nguồn hãng | Kết quả | Ký |
|---:|---|---|---|---|---|
| 1 | VIETMAP SpeedMap M2 | 4G tích hợp; cảnh báo giao thông | https://vietmap.vn/vietmap-speedmap-m2 | Khớp | |
| 2 | VIETMAP SpeedMap M1 | GPS; cảnh báo tốc độ giới hạn; trước 2K | https://vietmap.vn/vietmap-speedmap-m1 | Khớp | |
| 3 | VIETMAP VM350 | Ghi trước + trong xe; 3G/4G | https://vietmap.vn/vietmap-vm350 | Khớp | |
| 4 | VIETMAP VM300 | Ghi trước + trong xe; Hotspot 4G | https://vietmap.vn/vietmap-vm300-1 | Khớp | |
| 5 | VIETMAP DA250 | Ghi trước + trong xe; Hotspot 4G | https://vietmap.vn/vietmap-da250 | Khớp | |
| 6 | VIETMAP TS-2K Lite | Trước + sau; hộp gồm thẻ nhớ 64GB U3 | https://vietmap.vn/vietmap-ts-2k-lite | Khớp | |
| 7 | 70mai M800 | Bộ nhớ eMMC tích hợp; 2 kênh | https://www.70mai.com/vn/m800/ | Khớp (dung lượng 128GB lấy từ PDP Auto365) | |
| 8 | 70mai A510 | GPS & ADAS tích hợp; 1944P; 2 kênh | https://www.70mai.com/vn/a510/ | Khớp | |
| 9 | 70mai T400 | 3 kênh trước – trong – sau; 1440P | https://www.70mai.com/vn/t400/ | Khớp | |
| 10 | 70mai A810 | 4G qua phụ kiện | https://www.70mai.com/vn/a810/ | **Không công bố** trên trang hãng VN (chỉ nêu Hardwire Kit UP03). Chưa sửa dữ liệu — cần kỹ thuật xác nhận giữ hay chuyển `lte: unknown`. | |

Chưa đối chiếu được: BlackVue (blackvue.com chặn truy cập tự động, 403) — cần kỹ thuật kiểm tay. 70mai A800SE: trang hãng VN trả 404.

## 2. Bộ 15 bài test (kế hoạch 28/09)

| # | Bài test | Kết quả | Bằng chứng |
|---:|---|---|---|
| 1 | SpeedMap M2: nguồn/card/noscript/so sánh/PDP | **Đạt** | 8.980.000đ ở catalog, card, noscript, bảng so sánh; PDP schema `price: 8980000`. |
| 2 | 81 bản ghi ↔ HTML/ItemList/filter | **Đạt** | 81 card HTML, 81 dòng noscript, ItemList 81 URL khớp; 18 mẫu "Liên hệ", không giá đoán. `scripts/check-camera-v2.mjs` ✓. |
| 3 | Cùng model 2 phiên bản | **Đạt một phần** | A510 ghi "Camera trước" 2.690.000đ + bản Trước + sau 2.990.000đ trong `other_variants`. Chưa có `offer_id` riêng (chờ bảng offer của QLSP). |
| 4 | 4K + trước + dưới 2 triệu | **Đạt** | Lọc cho 0 kết quả + hộp gỡ từng điều kiện; advisor chỉ gắn "PHÙ HỢP" cho mẫu đúng hướng ghi/giá. |
| 5 | Hãng 70mai + chọn nhanh | **Đạt** | Lọc 70mai → 20 mẫu, 100% 70mai. |
| 6 | Trước–sau vs trước–cabin | **Đạt** | Chọn "Trước + sau" chỉ ra front-rear; "Trước + cabin" ra DA250, VM350, DR900X DMS. |
| 7 | Parking + 4G | **Đạt** | Ra M2 (SIM tích hợp), A810 (qua phụ kiện), DR750X; bảng ghi "cần bộ nguồn/hardwire kit riêng". Xem ghi chú A810 ở mục 1. |
| 8 | So sánh M2/TS-2K Lite/M800 | **Đạt** | Bộ nhớ, camera sau, nguồn parking, VAT/công lắp, bảo hành, nguồn hãng hiện đúng hoặc "Chưa xác nhận". |
| 9 | Mở/đóng tư vấn từ card & so sánh | **Đạt** | Một modal tại một thời điểm; `product_id` đúng; đóng thì mở lại bảng so sánh, focus về nút. |
| 10 | Form OK / API lỗi / mạng lỗi | **Đạt (giả lập)** | POST `/api/leads`; chỉ báo "Đã gửi" khi `{"success": true}`; `success:false`, HTTP 500, mất mạng → giữ dữ liệu + hotline 0365 365 911. **CX** với backend thật. |
| 11 | `?page=2#catalog` / tắt JS | **Đạt** | Không còn link `?page=`; tham số bị bỏ qua, canonical sạch; nút "Xem thêm" 12→24; noscript đủ 81 link. |
| 12 | 5 ca xe + 5 claim ngẫu nhiên | **Đạt một phần** | 10 claim đối chiếu hãng (mục 1). Ca xe: cần reviewer ký nguồn/ngày từng ca. |
| 13 | 4 VideoObject | **Đạt** | Đủ name/description/thumbnail/embed/uploadDate thật; 4 video oEmbed 200 (xem được). |
| 14 | Production HTTP/robots/canonical/sitemap | **CX** | Bản mới chưa lên production. Hiện `/camera-hanh-trinh-o-to` và `/camera-hanh-trinh-o-to-2025` đều 200, index, tự canonical → cần SEO chốt 301/canonical cho URL 2025. Preview: noindex ✓. |
| 15 | Mobile + hiệu năng + lead | **Đạt một phần** | 375px không cuộn ngang, form 2 trường/hàng, video cuộn ngang. **CX**: CWV thực, CRM nhận lead thử. |

## 3. Còn chờ bộ phận khác

- **Quản lý sản phẩm:** bảng offer theo bộ (VAT/công lắp/phụ kiện) cho 80 model, giá 18 mẫu "Liên hệ", `offer_id` cho các phiên bản.
- **Kỹ thuật:** ký bảng claim mục 1; xác nhận A810 4G; kiểm tay BlackVue.
- **Dev auto365.vn:** xác nhận `/api/leads` trả `{"success": true}`, test CRM.
- **SEO:** xử lý trùng `/camera-hanh-trinh-o-to-2025`, GSC/sitemap sau khi lên production, đo CWV.
