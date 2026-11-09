# 02 — Hướng dẫn CMS/SEO V2.2: Hub Bi gầm Honda

| Trường | Giá trị |
|---|---|
| Preview | https://preview-365group.pages.dev/bi-gam/honda/ |
| Canonical production | https://auto365.vn/nang-cap-anh-sang-bi-gam/honda |
| Source | `auto365/bi-gam/honda/content-src.html` (sửa ở đây) |
| Build | `node scripts/build-bi-gam-honda.mjs && node scripts/export-bi-gam-honda-docs.mjs` |
| Nội dung + SHA | [01_Noi_dung_Bi_gam_Honda.md](01_Noi_dung_Bi_gam_Honda.md) |
| Master data | [04_Master_Data_Bi_gam_Honda.csv](04_Master_Data_Bi_gam_Honda.csv) |
| Ngày lập | 07/11/2026 — **ĐÃ DUYỆT 07/11/2026** (anh Nguyễn Quang Đạo, chủ quản xác nhận) |

## 1. Vai trò URL

| URL | Vai trò | Không làm |
|---|---|---|
| `/nang-cap-anh-sang-bi-gam` | Hub bi gầm chung | — |
| `/nang-cap-anh-sang-bi-gam/theo-hang-xe` | Tra cứu theo hãng | — |
| **`/nang-cap-anh-sang-bi-gam/honda`** | **Trang hãng Honda: chọn dòng xe, chọn theo nhu cầu, tiếp cận bài hồ sơ, bài tư vấn dòng xe (qua thẻ dòng xe), cẩm nang đèn và điểm tư vấn** | Không liệt kê bảng giá/SKU; không canonical bài case về trang này |
| `bi-gam-honda-city`, `bi-gam-honda-cr-v` | Bài tư vấn dòng xe | — |
| Bài case trên auto365.vn | Chứng minh một xe / một cấu hình cụ thể | — |

Thẻ dòng xe: "Có tư vấn" → bài tư vấn (City, CR-V); "Có hồ sơ" → bài case mới nhất (Civic, HR-V, BR-V, Odyssey); "Tư vấn cấu hình" → điền sẵn dòng xe vào form (Civic Type R, Accord).

## 2. Metadata

| Trường | Giá trị |
|---|---|
| Title | Bi gầm Honda theo từng dòng xe: City, CR-V, Civic, HR-V \| Auto365 |
| Meta description | Tra cứu bi gầm Honda theo dòng và đời xe, xem 15 hồ sơ lắp đèn X-Light hoặc GTR và tìm điểm Auto365 tư vấn cấu hình, chi phí. |
| H1 | Bi gầm Honda theo từng dòng xe |
| Robots | Preview: `noindex, nofollow, noarchive` + header `X-Robots-Tag: noindex`. **Production: `index, follow`, kiểm header không còn noindex** |
| OG image | Preview dùng `m-city.webp`; production thay bằng ảnh trên CDN auto365.vn (đề xuất HON-IMG-01) |

## 3. Schema (JSON-LD, sinh tự động khi build)

| Khối | Nguồn dữ liệu |
|---|---|
| CollectionPage | `dateModified` từ dòng "Cập nhật" (2026-11-07); `about` = Brand Honda. `reviewedBy` (Nguyễn Quang Đạo) + `lastReviewed` 2026-11-07 lấy từ byline "Rà soát kỹ thuật" |
| BreadcrumbList | Trang chủ › Nâng cấp ánh sáng › Bi gầm › Honda |
| ItemList `#dong-xe` | 6 thẻ dòng xe có link |
| ItemList `#xe-thuc-te` | 15 bài case (mỗi bài là một xe khác nhau — chủ quản xác nhận 07/11; mã case_id nội bộ chưa có) |
| FAQPage | 9 câu, đúng text hiển thị |

## 4. Khối trên trang và nguồn

| Khối | Nguồn |
|---|---|
| 8 dòng xe (Sedan/Hatchback 4 · SUV 2 · MPV 2) | Dải Honda ở trang theo-hang-xe + dòng đã ngừng bán/ít phổ biến nhưng có case; dòng không có dữ liệu thì bỏ |
| Hồ sơ (15) | Bài case bi gầm Honda đã đăng auto365.vn, đối chiếu sitemap 07/11/2026; hãng đèn: GTR, X-Light. Không tính: đèn gầm dạng rời, bi LED, camera, video trùng nội dung bài viết, bài "mẫu đèn × dòng xe" không nêu xe cụ thể |
| Box lưu ý | Ví dụ kích thước hốc/đời xe lấy từ tiêu đề bài case (2.0 inch = F10 2.0 New / AES SV 2.0 Max; 3.0 inch = AES SV 3.0 Max) |
| Gợi ý theo nhu cầu (3 nhóm) | Link "Đã lắp" là bài case trong danh sách hồ sơ |
| Bảng tra "Xe Honda đã lắp mẫu bi gầm nào?" (`#bang-tra`, bổ sung GEO 07/11, anh Đạo duyệt 07/11) | Sinh từ danh sách case: dòng xe, đời/phiên bản theo tiêu đề bài (bài không nêu đời chỉ ghi dòng xe; 3 bài lấy năm ghi rõ trong nội dung), mẫu đèn, lens chỉ khi tên mẫu nêu rõ (F10 2.0 New, AES SV 2.0/3.0 Max), link bài |
| FAQ "Xe Honda nên chọn bi gầm 2.0 hay 3.0 inch?" | Dẫn đúng các xe đã lắp lens 2.0/3.0 trong bảng tra (bổ sung GEO 07/11) |
| Cẩm nang đèn bi gầm (8) | Bài kiến thức chung, dùng chung với hub Kia |
| FAQ HCM | Auto365.vn - Trụ Sở Chính (4/4/1/7 Đường Số 3, Phường Hiệp Bình), link bản đồ, hotline 0365 365 911 |
| Vì sao chọn, chi nhánh, form | Khối chuẩn lấy từ theo-hang-xe khi build; `data-service` = "Bi gầm Honda"; thẻ tư vấn giữ câu trung tính (không nêu tên người duyệt trong khối dùng chung); người rà soát ghi ở byline và schema |

## 5. Image Pack V2.2 (07/11/2026)

Thumbnail dòng xe: `../theo-hang-xe/hinh/m-*.webp` (hồ sơ trang theo-hang-xe).   Không có ảnh trước–sau/beam test.

| Asset ID | Tệp | Kích thước | Bytes | Loại | Nguồn / quyền | Vị trí, tải | ALT / caption |
|---|---|---|---:|---|---|---|---|
| HON-IMG-01 | `hinh/hero-honda-bi-gam.webp` | 1100 × 638 webp | 93.670 | Ảnh chụp thực tế trong bài case, không chữ đồ họa | Auto365 — bài case đã đăng (nguồn ghi trong comment hero-src) | Hero, eager | Honda CR-V G 2024 lắp bi gầm X-Light F10 Turbo V2 tại Auto365 |
| HON-IMG-02 | `hinh/ly-do-ky-thuat-vien-lap-bi-gam.webp` | 1000 × 563 webp | 45.358 | Ảnh chụp thực tế quy trình | Chủ quản cung cấp 04/11/2026 (dùng chung hub Kia) | Vì sao chọn, lazy | caption: Ảnh thực tế: kỹ thuật viên lắp bi gầm vào hốc đèn cản trước |
| HON-IMG-03 | `auto365vn-honda-cr-v-2024-lap-x-light-f10-turbo-v2-9-img_6a8bc72fd63098.50487058.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Honda CR-V G 2024 lắp X-Light F10 Turbo V2: Giá, cấu hình tại Auto365 |
| HON-IMG-04 | `honda-civic-2021-rs-lap-bi-gam-x-light-f10-new-2025-1791532799.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Honda Civic 2021 RS lắp bi gầm X-Light F10 New 2025 tại Auto365 |
| HON-IMG-05 | `honda-br-v-l-2023-lap-bi-gam-x-light-f10-turbo-5500k-6-1792394289.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Honda BR-V L 2023 lắp bi gầm X-Light F10 Turbo 5500K tại Auto365 |
| HON-IMG-06 | `honda-hrv-nang-cap-bi-gam-x3-ultra-3000k-1793418467.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Honda HR-V 2021 lắp bi gầm X-Light X3 Ultra 3000K tại Auto365 |
| HON-IMG-07 | `honda-city-rs-2024-lap-bi-gam-x-light-x3-ultra-5500k-7-1793254327.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Honda City RS 2024 lắp bi gầm X-Light X3 Ultra 5500K tại Auto365 |
| HON-IMG-08 | `hinh/m-odyssey.webp` | 640 × 400 webp | 30.692 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Anonymousfox36, CC BY-SA 4.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:Honda_Odyssey_V_second_facelift_%28front%29.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Odyssey, lazy | Honda Odyssey |
| HON-IMG-09 | `hinh/m-accord.webp` | 640 × 400 webp | 23.372 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Elise240SX, CC BY-SA 4.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:2020_Honda_Accord_Touring_in_Platinum_White_Pearl,_Front_Left,_09-03-2022.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Accord, lazy | Honda Accord |

## 6. Khi đăng production

1. Upload ảnh tương đối, đổi đường dẫn; dùng header/footer production.
2. Đổi robots, OG image; xoá khối "Kiểm tra nội bộ" và script `#bghonda-branch-preview`.
3. Gửi lead test (service "Bi gầm Honda", xe ở `car_model`); kiểm schema; kiểm responsive.

## 7. Nguồn lens bảng tra (09/11/2026)

| Xe trong hồ sơ | Mẫu đèn | Lens | Căn cứ |
|---|---|---|---|
| [HR-V 2021](https://auto365.vn/honda-hr-v-2021-lap-bi-gam-x-light-x3-ultra-3000k) | X-Light X3 Ultra 3000K | 3.0 | bài case |
| [City RS 2024](https://auto365.vn/honda-city-rs-2024-lap-bi-gam-x-light-x3-ultra-5500k) | X-Light X3 Ultra 5500K | 3.0 | bài case |
| [BR-V L 2023](https://auto365.vn/honda-br-v-l-2023-lap-bi-gam-x-light-f10-turbo-5500k) | X-Light F10 Turbo 5500K | 3.0 | bài case |
| [Civic 2021 RS](https://auto365.vn/honda-civic-2021-rs-lap-bi-gam-x-light-f10-new-2025) | X-Light F10 New 2025 | 3.0 | bài case |
| [City RS 2021](https://auto365.vn/honda-city-rs-2021-lap-bi-gam-gtr-g1-turbo) | GTR G1 Turbo | 3.0 | thông số mẫu [https://auto365.vn/bi-gam-gtr-g1-turbo](https://auto365.vn/bi-gam-gtr-g1-turbo) |
| [CR-V 1.5L L 2018](https://auto365.vn/honda-cr-v-15l-l-2018-lap-bi-gam-x-light-f10-new) | X-Light F10 New 2025 | 3.0 | thông số mẫu [https://x-light.vn/bi-gam-x-light-f10-new-2025](https://x-light.vn/bi-gam-x-light-f10-new-2025) |
| [City RS 2022](https://auto365.vn/honda-city-rs-2022-lap-bi-gam-x-light-f10-turbo-v2) | X-Light F10 Turbo V2 | 3.0 | bài case |
| [CR-V G 2024](https://auto365.vn/honda-cr-v-g-2024-lap-x-light-f10-turbo-v2-gia-cau-hinh) | X-Light F10 Turbo V2 | 3.0 | bài case |
| [CR-V 2023 bản L](https://auto365.vn/honda-cr-v-lap-bi-gam-x-light-301-v2) | X-Light 301 V2 | 3.0 | thông số mẫu [https://x-light.vn/bi-gam-xlight-301-v2](https://x-light.vn/bi-gam-xlight-301-v2) |
| [City](https://auto365.vn/honda-city-nang-cap-den-bi-gam-x-light-f10-new) | X-Light F10 New 2025 | 3.0 | thông số mẫu [https://x-light.vn/bi-gam-x-light-f10-new-2025](https://x-light.vn/bi-gam-x-light-f10-new-2025) |
| [Civic](https://auto365.vn/honda-civic-lap-bi-gam-xlight-301-v2) | X-Light 301 V2 | 3.0 | bài case |
| [Civic](https://auto365.vn/honda-civic-nang-cap-bi-gam-phim-cach-nhiet) | X-Light F10 Pro | 3.0 | thông số mẫu [https://auto365.vn/bi-gam-xlight-f10-pro](https://auto365.vn/bi-gam-xlight-f10-pro) |
| [City](https://auto365.vn/honda-city-do-bi-gam-gtr-g1-turbo) | GTR G1 Turbo | 3.0 | thông số mẫu [https://auto365.vn/bi-gam-gtr-g1-turbo](https://auto365.vn/bi-gam-gtr-g1-turbo) |
| [CR-V](https://auto365.vn/honda-cr-v-do-den-bi-gam-gtr-g1-turbo) | GTR G1 Turbo | 3.0 | thông số mẫu [https://auto365.vn/bi-gam-gtr-g1-turbo](https://auto365.vn/bi-gam-gtr-g1-turbo) |
| [Odyssey](https://auto365.vn/honda-odyssey-do-den-bi-gam-g1-turbo) | GTR G1 Turbo | 3.0 | thông số mẫu [https://auto365.vn/bi-gam-gtr-g1-turbo](https://auto365.vn/bi-gam-gtr-g1-turbo) |
