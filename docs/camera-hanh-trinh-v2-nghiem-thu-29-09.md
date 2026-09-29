# Camera hành trình V2 — Biên bản đối chiếu claim & 15 bài test (29/09/2026)

Bản kiểm: preview https://manhcuong365group.github.io/preview-365group/camera-hanh-trinh-v2/ — commit `568b33cc` (vòng 2).
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
| 10 | 70mai A810 | 4G qua phụ kiện | https://www.70mai.com/global/a810/ | Khớp — trang hãng global ghi "4G Connectivity (Optional)", cần Hardwire Kit UP04 mua riêng, chỉ bán ở một số khu vực → cần xác nhận UP04 có bán tại VN | |
| 11 | 70mai A210 | 1080P; GPS; Wi-Fi; Giám sát đỗ xe | https://www.70mai.com/vn/a210/ | Khớp | |
| 12 | 70mai 4K A810 Lite | 4K; GPS; Wi-Fi; Giám sát đỗ xe | https://www.70mai.com/vn/a810lite/ | Khớp phần đã ghi. ADAS: trang hãng không nêu, **kỹ thuật (Nguyễn Quang Đạo) xác nhận 29/09 giữ theo PDP Auto365**. Đồng bộ thêm theo PDP: bản Trước + sau 3.190.000đ, 4G qua bộ kit | |
| 13 | 70mai M310 | 1296P; Giám sát đỗ xe | https://www.70mai.com/vn/m310/ | Khớp — trang hãng ghi "Điều khiển ứng dụng" (kết nối Wi-Fi với điện thoại) | |
| 14 | 70mai A200 | 1080P; Giám sát đỗ xe | https://www.70mai.com/vn/a200/ | Khớp — trang hãng ghi "Điều khiển ứng dụng" (kết nối Wi-Fi với điện thoại) | |
| 15 | 70MAI T800 4K | Ghi 3 kênh; 1080P; GPS; Wi-Fi; ADAS; Giám sát đỗ xe | https://www.70mai.com/vn/t800/ | Khớp | |
| 16 | 70MAI 4K A810S | Ghi trước + sau; 4K; GPS; Wi-Fi; ADAS; Giám sát đỗ xe | https://www.70mai.com/vn/a810s/ | Khớp | |
| 17 | VietMap L110 | 2K; GPS; Wi-Fi; Cảnh báo tốc độ/giao thông; Giám sát đỗ xe | https://vietmap.vn/vietmap-l110 | Khớp | |
| 18 | Vietmap V740 | Ghi trước + sau; 1080P; GPS; Wi-Fi; ADAS; Cảnh báo tốc độ/giao thông; Giám sát đỗ xe | https://vietmap.vn/vietmap-v740 | Khớp | |
| 19 | 70mai Omni | 1080P; GPS; ADAS; Giám sát đỗ xe | https://www.70mai.com/vn/omni/ | Khớp phần ứng dụng. Bộ nhớ eMMC: **kỹ thuật (Nguyễn Quang Đạo) xác nhận 29/09 theo PDP Auto365** — "eMMC tích hợp 32GB / 64GB / 128GB tùy phiên bản" | |
| 20 | Vietmap R440: Màn hình gương thế hệ mới | Ghi trước + sau; 4K; GPS; Wi-Fi; Cảnh báo tốc độ/giao thông; Giám sát đỗ xe | https://vietmap.vn/vietmap-r440 | Khớp | |
| 21 | Vietmap S720 | 4K; GPS; Wi-Fi; Cảnh báo tốc độ/giao thông; Giám sát đỗ xe | https://vietmap.vn/vietmap-s720 | Khớp | |
| 22 | VIETMAP S860 | Ghi trước + sau; 3K; GPS; Wi-Fi; Cảnh báo tốc độ/giao thông; Giám sát đỗ xe | https://vietmap.vn/vietmap-s860 | Khớp | |
| 23 | GƯƠNG 70MAI S500 | Ghi trước + sau; 1944P; Giám sát đỗ xe | https://www.70mai.com/vn/s500/ | Khớp — trang hãng ghi "Điều khiển ứng dụng" (kết nối Wi-Fi với điện thoại) | |
| 24 | VIETMAP H68 | 1080P; GPS; Wi-Fi; Cảnh báo tốc độ/giao thông | https://vietmap.vn/vietmap-h68 | Khớp | |
| 25 | VIETMAP H9S | 1080P; Wi-Fi | https://vietmap.vn/vietmap-h9s | Khớp | |
| 26 | VIETMAP H86 | Ghi trước + sau; 4K; GPS; Wi-Fi; Cảnh báo tốc độ/giao thông; Giám sát đỗ xe | https://vietmap.vn/vietmap-h86 | Khớp | |
| 27 | X5 TEYES | 1080P; ADAS | https://vietmap.vn/camera-hanh-trinh-x5-teyes | Khớp | |
| 28 | VIETMAP C1 | 1080P; Wi-Fi; Giám sát đỗ xe | https://vietmap.vn/vietmap-c1 | Khớp | |
| 29 | VIETMAP TS-H2K | Ghi trước + sau; 1080P; Wi-Fi; Giám sát đỗ xe | https://vietmap.vn/vietmap-ts-h2k | Khớp | |
| 30 | VIETMAP TS-5K | Ghi trước + sau; 4K; GPS; Wi-Fi; ADAS; Giám sát đỗ xe | https://vietmap.vn/vietmap-ts-5k | Khớp | |
| 31 | XIAOMI 70MAI A800S 4K FULL HD (BẢN FULL CAMER | Ghi trước + sau; 4K; GPS; Wi-Fi; ADAS; Giám sát đỗ xe | https://www.70mai.com/vn/a800s/ | Khớp | |
| 32 | XIAOMI 70MAI A500S | 1944P; GPS; Wi-Fi; ADAS; Giám sát đỗ xe | https://www.70mai.com/vn/a500s/ | Khớp | |
| 33 | VIETMAP TS-C9P | 2K; GPS; Wi-Fi | https://vietmap.vn/vietmap-ts-c9p | Khớp | |
| 34 | VIETMAP KC01 CẢNH BÁO GIAO THÔNG | Ghi trước + sau; 2K; GPS; Wi-Fi; Cảnh báo tốc độ/giao thông; Giám sát đỗ xe | https://vietmap.vn/vietmap-kc01-canh-bao-giao-thong | Khớp | |

Mục 11–34 đối chiếu tự động theo từ khoá trên trang hãng (bỏ header/nav/footer), reviewer cần xem lại trước khi ký.

**Tổng: 34/81 mẫu có nguồn hãng**, các claim chưa thấy trên trang hãng (A810 Lite ADAS, Omni eMMC) đã được kỹ thuật xác nhận 29/09 theo PDP Auto365.

Chưa đối chiếu được (47 mẫu): BlackVue (blackvue.com bật xác minh chống bot), DDPAI (trang hãng không còn các mẫu này), Thinkware, Ellicam, UTOUR, Nextbase, HTD, HP, Yuemi, 70mai A800SE/M300/M310 Plus (trang hãng VN 404), VIETMAP D22/P2/V5/C9/G40/C61 PRO/C65/G79/X9S/IR22/A50 (không có trong sitemap vietmap.vn). Cần kỹ thuật kiểm tay hoặc lấy tài liệu từ nhà phân phối.

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
| 12 | 5 ca xe + 5 claim ngẫu nhiên | **Đạt một phần** | 34 mẫu có nguồn hãng (mục 1). Ca xe: cần reviewer ký nguồn/ngày từng ca. |
| 13 | 4 VideoObject | **Đạt** | Đủ name/description/thumbnail/embed/uploadDate thật; 4 video oEmbed 200 (xem được). |
| 14 | Production HTTP/robots/canonical/sitemap | **CX** | Bản mới chưa lên production. Hiện `/camera-hanh-trinh-o-to` và `/camera-hanh-trinh-o-to-2025` đều 200, index, tự canonical → cần SEO chốt 301/canonical cho URL 2025. Preview: noindex ✓. |
| 15 | Mobile + hiệu năng + lead | **Đạt một phần** | 375px không cuộn ngang; lab mobile (mục 3) LCP ~0,8s, CLS ≤0,002. **CX**: CWV thực (CrUX) sau khi lên production, CRM nhận lead thử. |

## 3. Hiệu năng lab (mobile)

Puppeteer, iPhone 12, mạng 1,6 Mbps / 150 ms, CPU chậm 4×, 5 lượt, trung vị:

| Chỉ số | Trước (7b26570e) | Sau (568b33cc) |
|---|---|---|
| FCP / LCP | ~0,85 s | ~0,84 s |
| CLS | 0,002 | ≤ 0,002 |
| Tổng thời gian chặn (TBT) | ~2,5 s | ~1,1 s |
| Load | ~3,7 s | ~2,1 s |
| Thời gian layout | ~2,3 s | ~0,75 s |

Thay đổi: tự host font Inter (latin + vietnamese, bỏ Google Fonts) để khỏi dàn trang lại khi font về; `content-visibility:auto` cho các section dưới màn hình đầu (trừ catalog/case có modal); link neo và URL có `#` render đủ trang trước khi cuộn (đã test mọi link neo desktop + mobile). Số liệu lab trên máy dev, không thay cho CWV thực.

## 4. Còn chờ bộ phận khác

- **Quản lý sản phẩm:** bảng offer theo bộ (VAT/công lắp/phụ kiện) cho 80 model, giá 18 mẫu "Liên hệ", `offer_id` cho các phiên bản.
- **Kỹ thuật:** ký bảng claim mục 1; kiểm tay BlackVue và các mẫu chưa có trang hãng; xác nhận bộ 4G UP04 có bán tại VN (A810, A810 Lite).
- **Dev auto365.vn:** xác nhận `/api/leads` trả `{"success": true}`, test CRM.
- **SEO:** xử lý trùng `/camera-hanh-trinh-o-to-2025`, GSC/sitemap sau khi lên production, đo CWV.
