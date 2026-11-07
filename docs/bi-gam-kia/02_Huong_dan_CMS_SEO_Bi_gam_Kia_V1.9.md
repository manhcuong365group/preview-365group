# 02 — Hướng dẫn CMS/SEO V1.9: Hub Bi gầm Kia

| Trường | Giá trị |
|---|---|
| Preview | https://preview-365group.pages.dev/bi-gam/kia/ |
| Canonical production | https://auto365.vn/nang-cap-anh-sang-bi-gam/kia |
| Source | `auto365/bi-gam/kia/content-src.html` (sửa ở đây) |
| Build | `node scripts/build-bi-gam-kia.mjs && node scripts/export-bi-gam-kia-docs.mjs` |
| Nội dung + SHA | [01_Noi_dung_Bi_gam_Kia.md](01_Noi_dung_Bi_gam_Kia.md) |
| Master data | [04_Master_Data_Bi_gam_Kia.csv](04_Master_Data_Bi_gam_Kia.csv) |
| Ngày cập nhật | 05/11/2026 (vá audit 05/11, anh Đạo duyệt) |

## 1. Vai trò URL

| URL | Vai trò | Không làm |
|---|---|---|
| `/nang-cap-anh-sang-bi-gam` | Hub bi gầm chung | — |
| `/nang-cap-anh-sang-bi-gam/theo-hang-xe` | Tra cứu theo hãng | — |
| **`/nang-cap-anh-sang-bi-gam/kia`** | **Trang hãng Kia: chọn dòng xe, chọn theo nhu cầu, tiếp cận bài hồ sơ, bài tư vấn dòng xe (qua thẻ dòng xe), cẩm nang đèn và điểm tư vấn** | Không liệt kê bảng giá/SKU; không canonical bài case về trang này |
| `/bi-gam-kia-morning`, `-seltos`, `-carens`, `-sedona` | Bài tư vấn dòng xe | — |
| Bài case trên auto365.vn | Chứng minh một xe / một cấu hình cụ thể | — |

Thẻ dòng xe "Có hồ sơ": Morning, Seltos, Carens, Sedona → bài tư vấn; K3, Forte, Sportage, Sorento, Carnival → bài case (chưa có bài tư vấn riêng).

## 2. Metadata

| Trường | Giá trị |
|---|---|
| Title | Bi gầm Kia theo từng dòng xe: Carnival, Sportage, Carens, Morning \| Auto365 |
| Meta description | Tra cứu bi gầm Kia theo dòng xe, xem hồ sơ X-Light, GTR, AES đã lắp tại Auto365; kiểm tra cấu hình, chi phí và điểm tiếp nhận trước khi thi công. |
| H1 | Bi gầm Kia theo từng dòng xe |
| Robots | Preview: `noindex, nofollow, noarchive` + header `X-Robots-Tag: noindex`. **Production: `index, follow`, kiểm header không còn noindex** |
| OG image | Preview dùng `m-carnival.webp`; production thay bằng ảnh trên CDN auto365.vn |

## 3. Tài nguyên

| Tài nguyên | Đường dẫn trên preview |
|---|---|
| Ảnh hero (Kia Carnival 2.2D Luxury 2025 lắp AES SV 3.0 Max tại Auto365, ảnh trong bài case) | `hinh/hero-kia-carnival-2025-bi-gam-aes-sv-30-max.webp` |
| Ảnh 11 dòng xe | `../theo-hang-xe/hinh/m-*.webp` |
| Ảnh Forte, Sedona (đã ngừng bán) | `hinh/m-forte.webp`, `hinh/m-sedona.webp` — Wikimedia Commons đã tách nền: Forte © Mr.choppers (CC BY-SA 3.0), Sedona — Bull-Doser (Public domain). Production: giữ ghi công hoặc thay ảnh có quyền dùng |
| Ảnh "Vì sao chọn" | `hinh/ly-do-ky-thuat-vien-lap-bi-gam.webp` + 5 ảnh case Kia trên `auto365.vn/uploads/images/news/` (Carnival 2025, Carens 2023, Morning 2016, Sportage 2022, Sedona 2017) |

## 4. Schema (JSON-LD, sinh tự động khi build)

| Khối | Nguồn dữ liệu |
|---|---|
| CollectionPage | `dateModified` từ dòng "Cập nhật"; `about` = Brand Kia; `reviewedBy` (Nguyễn Quang Đạo) + `lastReviewed` 2026-11-05 lấy từ byline "Rà soát kỹ thuật" |
| BreadcrumbList | Trang chủ › Nâng cấp ánh sáng › Bi gầm › Kia |
| ItemList `#dong-xe` | 9 thẻ dòng xe có hồ sơ |
| ItemList `#xe-thuc-te` | 15 hồ sơ nội dung: 13 bài case + 2 video (không phải 15 xe khác nhau; một ca lắp có thể có cả bài và video) |
| FAQPage | 9 câu, đúng text hiển thị |

## 5. Khối trên trang và nguồn

| Khối | Nguồn |
|---|---|
| 13 dòng xe (Hatchback 1 · Sedan 4 · SUV 4 · MPV 4) | Dải Kia ở trang theo-hang-xe; giữ dòng đã ngừng bán có hồ sơ (Forte, Sedona), bỏ dòng ngừng bán không có dữ liệu |
| Hồ sơ (15) | 13 bài case (thêm Seltos 2024 X-Light F10 Turbo V2, 05/11) + 2 video Kia (Carnival AES SV 3.0 Max mặt dưỡng in 3D, Sedona combo GTR G1 Ultra) đã đăng auto365.vn |
| Box lưu ý — nguồn điện | Sportage 2022, Carnival 2022 bản Premium: link giắc chuyển LED gầm chuyên dụng (trang phụ kiện auto365.vn) |
| Cẩm nang đèn bi gầm (8) | Bài kiến thức chung về đèn, không lặp bài tư vấn dòng xe |
| FAQ HCM | Đề xuất Auto365.vn - Trụ Sở Chính (4/4/1/7 Đường Số 3, Phường Hiệp Bình), link bản đồ, hotline 0365 365 911 |
| Vì sao chọn, chi nhánh, form | Khối chuẩn lấy từ theo-hang-xe khi build; `data-service` = "Bi gầm Kia". Thẻ "Tư vấn đúng theo từng xe" giữ câu "do kỹ thuật viên Nguyễn Quang Đạo kiểm duyệt" (anh Đạo duyệt 04/11). Placeholder form "VD: Kia Sportage 2022" |

## 6. Khi đăng production

1. Upload ảnh tương đối, đổi đường dẫn; dùng header/footer production.
2. Đổi robots, OG image; xoá khối "Kiểm tra nội bộ" và script `#bgkia-branch-preview` nếu không cần.
3. Gửi lead test; kiểm schema; kiểm responsive.

## 7. Vá theo audit 05/11/2026

| Mã | Đã làm |
|---|---|
| KIA-P0-01 | Thêm case Seltos 2024 1.5L AT – X-Light F10 Turbo V2 (bài 19/08/2026, HTTP 200); ItemList 15; 04 có dòng Seltos |
| KIA-P0-04 | 02 bỏ ghi chú cũ "chưa có reviewedBy/chưa duyệt"; 01–05 xuất cùng bản build |
| KIA-P1-01 | K5 không còn nằm trong nhóm SUV: nhóm đổi tên "Xe gia đình, hay đi tỉnh", K5 ghi rõ "sedan đi đường dài" |
| KIA-P1-02 | Khối nhu cầu: Sonet có link "ảnh lắp tham khảo (bài tổng hợp)"; thẻ Sonet giữ "Tư vấn cấu hình", không gắn nhãn case |
| KIA-P1-03 | Badge thẻ: "Có tư vấn" (bài tư vấn dòng xe) / "Có hồ sơ" (bài case); dòng phụ "Xem tư vấn + xe đã lắp" / "Xem xe đã lắp" / "Tư vấn cấu hình" |
| KIA-P1-04 | Placeholder form "VD: Kia Sportage 2022" (build thay đúng chuỗi gốc) |
| KIA-P1-05 | 04: `content_type` tách `case_article` / `case_video`; giữ ghi chú chưa có case_id |
| KIA-P1-07 | Câu giắc chuyển: "giúp hạn chế can thiệp dây zin, cần đối chiếu đúng đời và phiên bản xe trước khi dùng" |
| KIA-P0-02/03/05 | Lead → CRM, robots/canonical/sitemap, gỡ khối nội bộ: chỉ làm được khi IT đưa lên production |

## 8. Vá 06/11/2026 (audit V2.2 + lỗi form phát hiện ở Toyota R3)

| Mã | Đã làm |
|---|---|
| Form ngữ cảnh | Bỏ việc nối tên xe vào `data-service` khi bấm thẻ xe. `service` luôn là "Bi gầm Kia", dòng xe chỉ lấy từ `car_model`, nên đổi xe không còn giữ xe cũ |
| P0-02 (V2.2) | Khối nội bộ chỉ còn một trạng thái: phiếu U3 V1.9 PASS · ĐÃ DUYỆT 05/11 |
| P0-01 (V2.2) | 01–05 xuất cùng một build. Mỗi bản HTML ghi SHA trang; 02 ghi 15 hồ sơ, `reviewedBy` có trong schema |

### CRO P1 (06/11/2026)

- Khối "Chọn nhanh" sau hero (#chon-nhanh): dòng xe, xe đã lắp, giá mẫu bi gầm (/nang-cap-anh-sang-bi-gam), gửi đời xe.
- CTA dưới lưới dòng xe: Nhận tư vấn (#tu-van) + gọi 0365 365 911.
- CTA cuối trang thêm: nên gọi trước để xác nhận cơ sở và lịch lắp.
- Không đổi bố cục các khối cũ.

### Link trang file gốc Wikimedia (06/11/2026)

Đã đối chiếu tác giả + giấy phép qua Commons API.

- `hinh/m-forte.webp`: [2011 Kia Forte EX, front left (Joshua Tree).jpg](https://commons.wikimedia.org/wiki/File:2011_Kia_Forte_EX,_front_left_%28Joshua_Tree%29.jpg)
- `hinh/m-sedona.webp`: ['17-'18 Kia Sedona -- Front.jpg](https://commons.wikimedia.org/wiki/File:%2717-%2718_Kia_Sedona_--_Front.jpg)
- 6 ảnh khối "Vì sao chọn" có `figcaption` mô tả đúng loại ảnh (ảnh case ghi xe + mẫu đèn).

## 9. Image Pack V2.2 (07/11/2026)

Đo từ tệp thật (sharp). Thumbnail dòng xe khác dùng chung `../theo-hang-xe/hinh/m-*.webp` (hồ sơ trang theo-hang-xe). Không có ảnh trước–sau/beam test.

| Asset ID | Tệp | Kích thước | Bytes | Loại | Nguồn / quyền | Vai trò, giới hạn | Vị trí, tải | ALT / caption |
|---|---|---|---:|---|---|---|---|---|
| KIA-IMG-01 | `hinh/hero-kia-carnival-2025-bi-gam-aes-sv-30-max.webp` | 1100 × 638 webp | 79.998 | Ảnh chụp thực tế (ảnh bài case) | Bài case Carnival 2.2D Luxury 2025 – AES SV 3.0 Max, auto365.vn | Hero: xe Kia đã lắp tại Auto365 | Hero, eager | Kia Carnival 2.2D Luxury 2025 lắp bi gầm AES SV 3.0 Max tại Auto365 |
| KIA-IMG-02 | `hinh/ly-do-ky-thuat-vien-lap-bi-gam.webp` | 1000 × 563 webp | 45.358 | Ảnh chụp thực tế quy trình | Chủ quản cung cấp 04/11/2026 | Thao tác lắp; không đại diện một ca Kia cụ thể | Vì sao chọn, lazy | Kỹ thuật viên Auto365 lắp bi gầm vào hốc đèn trên cản trước / caption: Ảnh thực tế: kỹ thuật viên lắp bi gầm vào hốc đèn cản trước |
| KIA-IMG-03 | `hinh/m-forte.webp` | 640 × 400 webp | 17.472 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons © Mr.choppers, CC BY-SA 3.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:2011_Kia_Forte_EX,_front_left_%28Joshua_Tree%29.jpg); ghi công công khai dưới lưới xe | Thumbnail nhận diện dòng xe, không phải ảnh case | Thẻ dòng xe, lazy | Kia Forte |
| KIA-IMG-04 | `hinh/m-sedona.webp` | 640 × 400 webp | 14.754 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Bull-Doser, public domain — [trang file gốc](https://commons.wikimedia.org/wiki/File:%2717-%2718_Kia_Sedona_--_Front.jpg) | Thumbnail nhận diện dòng xe | Thẻ dòng xe, lazy | Kia Sedona |
| KIA-IMG-05 | `auto365vn-kia-carnival-22d-luxury-2025-lap-bi-gam-aes-sv-30-max-14-img_6ab62e93291146.39209539.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Ảnh case thật | Vì sao chọn, lazy | caption: Carnival 2.2D Luxury 2025 lắp AES SV 3.0 Max tại Auto365 |
| KIA-IMG-06 | `auto365vn-kia-carens-2023-lap-bi-gam-aes-sv-30-max-1-img_6ab5ef0c418627.23530488.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Ảnh case thật | Vì sao chọn, lazy | caption: Carens 2023 lắp AES SV 3.0 Max tại Auto365 |
| KIA-IMG-07 | `kia-morning-si-at-2016-lap-bi-gam-x-light-f10-20-new-8-1791511473.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Ảnh case thật | Vì sao chọn, lazy | caption: Morning Si AT 2016 lắp X-Light F10 2.0 New tại Auto365 |
| KIA-IMG-08 | `kia-sportage-2-0g-premium-2022-lap-bi-gam-x-light-f10-turbo-1792548422.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Ảnh case thật | Vì sao chọn, lazy | caption: Sportage 2.0G Premium 2022 lắp X-Light F10 Turbo tại Auto365 |
| KIA-IMG-09 | `auto365vn-kia-sedona-nang-cap-bi-gam-x-light-f10-pro-v2-img_6a5ef67002e9e9.68465652.jpg.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Ảnh case thật | Vì sao chọn, lazy | caption: Sedona lắp X-Light F10 Pro V2 tại Auto365 |

Thuật ngữ: **15 nội dung hồ sơ = 13 bài case + 2 video**, không gọi "15 xe thi công". `case_id`/`work_order_ref` chưa khóa — điền khi kỹ thuật xác minh từng ca. Sonet chỉ là bài ảnh tổng hợp tham khảo.
OG: preview chưa chốt ảnh production; đề xuất KIA-IMG-01 qua CDN auto365.vn — IT (CX).
