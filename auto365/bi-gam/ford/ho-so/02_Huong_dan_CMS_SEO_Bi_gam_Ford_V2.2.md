# 02 — Hướng dẫn CMS/SEO V2.2: Hub Bi gầm Ford

| Trường | Giá trị |
|---|---|
| Preview | https://preview-365group.pages.dev/bi-gam/ford/ |
| Canonical production | https://auto365.vn/nang-cap-anh-sang-bi-gam/ford |
| Source | `auto365/bi-gam/ford/content-src.html` (sửa ở đây) |
| Build | `node scripts/build-bi-gam-ford.mjs && node scripts/export-bi-gam-ford-docs.mjs` |
| Nội dung + SHA | [01_Noi_dung_Bi_gam_Ford.md](01_Noi_dung_Bi_gam_Ford.md) |
| Master data | [04_Master_Data_Bi_gam_Ford.csv](04_Master_Data_Bi_gam_Ford.csv) |
| Ngày lập | 07/11/2026 — **ĐÃ DUYỆT 07/11/2026** (anh Nguyễn Quang Đạo, chủ quản xác nhận) |

## 1. Vai trò URL

| URL | Vai trò | Không làm |
|---|---|---|
| `/nang-cap-anh-sang-bi-gam` | Hub bi gầm chung | — |
| `/nang-cap-anh-sang-bi-gam/theo-hang-xe` | Tra cứu theo hãng | — |
| **`/nang-cap-anh-sang-bi-gam/ford`** | **Trang hãng Ford: chọn dòng xe, chọn theo nhu cầu, tiếp cận bài hồ sơ, bài tư vấn dòng xe (qua thẻ dòng xe), cẩm nang đèn và điểm tư vấn** | Không liệt kê bảng giá/SKU; không canonical bài case về trang này |
| `bi-gam-ford-focus`, `bi-gam-ford-ecosport`, `bi-gam-ford-escape`, `bi-gam-ford-everest`, `bi-gam-ford-ranger`, `bi-gam-ford-transit` | Bài tư vấn dòng xe | — |
| Bài case trên auto365.vn | Chứng minh một xe / một cấu hình cụ thể | — |

Thẻ dòng xe: "Có tư vấn" → bài tư vấn (Focus, EcoSport, Escape, Everest, Ranger, Transit); "Có hồ sơ" → bài case mới nhất (Ranger Raptor); "Tư vấn cấu hình" → điền sẵn dòng xe vào form (Fiesta, Laser, Mondeo, Territory, Explorer, Mustang Mach-E).

## 2. Metadata

| Trường | Giá trị |
|---|---|
| Title | Bi gầm Ford theo từng dòng xe: Ranger, Everest, Escape, EcoSport \| Auto365 |
| Meta description | Tra cứu bi gầm Ford theo dòng và đời xe, xem 21 hồ sơ lắp X-Light, GTR, AES và tìm điểm Auto365 tư vấn cấu hình, chi phí. |
| H1 | Bi gầm Ford theo từng dòng xe |
| Robots | Preview: `noindex, nofollow, noarchive` + header `X-Robots-Tag: noindex`. **Production: `index, follow`, kiểm header không còn noindex** |
| OG image | Preview dùng `m-everest.webp`; production thay bằng ảnh trên CDN auto365.vn (đề xuất FOR-IMG-01) |

## 3. Schema (JSON-LD, sinh tự động khi build)

| Khối | Nguồn dữ liệu |
|---|---|
| CollectionPage | `dateModified` từ dòng "Cập nhật" (2026-11-07); `about` = Brand Ford. `reviewedBy` (Nguyễn Quang Đạo) + `lastReviewed` 2026-11-07 lấy từ byline "Rà soát kỹ thuật" |
| BreadcrumbList | Trang chủ › Nâng cấp ánh sáng › Bi gầm › Ford |
| ItemList `#dong-xe` | 7 thẻ dòng xe có link |
| ItemList `#xe-thuc-te` | 21 bài case (mỗi bài là một xe khác nhau — chủ quản xác nhận 07/11; mã case_id nội bộ chưa có) |
| FAQPage | 9 câu, đúng text hiển thị |

## 4. Khối trên trang và nguồn

| Khối | Nguồn |
|---|---|
| 13 dòng xe (Sedan 4 · SUV 6 · Bán tải 2 · Xe khách 1) | Dải Ford ở trang theo-hang-xe + dòng đã ngừng bán/ít phổ biến nhưng có case; dòng không có dữ liệu thì bỏ |
| Hồ sơ (21) | Bài case bi gầm Ford đã đăng auto365.vn, đối chiếu sitemap 07/11/2026; hãng đèn: AES, GTR, X-Light. Không tính: đèn gầm dạng rời, bi LED, camera, video trùng nội dung bài viết, bài "mẫu đèn × dòng xe" không nêu xe cụ thể |
| Box lưu ý | Ví dụ kích thước hốc/đời xe lấy từ tiêu đề bài case (2.0 inch = F10 2.0 New / AES SV 2.0 Max; 3.0 inch = AES SV 3.0 Max) |
| Gợi ý theo nhu cầu (3 nhóm) | Link "Đã lắp" là bài case trong danh sách hồ sơ |
| Bảng tra "Xe Ford đã lắp mẫu bi gầm nào?" (`#bang-tra`, bổ sung GEO 07/11, anh Đạo duyệt 07/11) | Sinh từ danh sách case: dòng xe, đời/phiên bản theo tiêu đề bài (bài không nêu đời chỉ ghi dòng xe; 3 bài lấy năm ghi rõ trong nội dung), mẫu đèn, lens chỉ khi tên mẫu nêu rõ (F10 2.0 New, AES SV 2.0/3.0 Max), link bài |
| FAQ "Xe Ford nên chọn bi gầm 2.0 hay 3.0 inch?" | Dẫn đúng các xe đã lắp lens 2.0/3.0 trong bảng tra (bổ sung GEO 07/11) |
| Cẩm nang đèn bi gầm (8) | Bài kiến thức chung, dùng chung với hub Kia |
| FAQ HCM | Auto365.vn - Trụ Sở Chính (4/4/1/7 Đường Số 3, Phường Hiệp Bình), link bản đồ, hotline 0365 365 911 |
| Vì sao chọn, chi nhánh, form | Khối chuẩn lấy từ theo-hang-xe khi build; `data-service` = "Bi gầm Ford"; thẻ tư vấn giữ câu trung tính (không nêu tên người duyệt trong khối dùng chung); người rà soát ghi ở byline và schema |

## 5. Image Pack V2.2 (07/11/2026)

Thumbnail dòng xe: `../theo-hang-xe/hinh/m-*.webp` (hồ sơ trang theo-hang-xe).   Không có ảnh trước–sau/beam test.

| Asset ID | Tệp | Kích thước | Bytes | Loại | Nguồn / quyền | Vị trí, tải | ALT / caption |
|---|---|---|---:|---|---|---|---|
| FOR-IMG-01 | `hinh/hero-ford-bi-gam.webp` | 1100 × 638 webp | 32.330 | Ảnh chụp thực tế trong bài case, không chữ đồ họa | Auto365 — bài case đã đăng (nguồn ghi trong comment hero-src) | Hero, eager | Đèn gầm Ford Ranger XLS 2020 sau khi lắp bi gầm AES SV 3.0 Max tại Auto365 |
| FOR-IMG-02 | `hinh/ly-do-ky-thuat-vien-lap-bi-gam.webp` | 1000 × 563 webp | 45.358 | Ảnh chụp thực tế quy trình | Chủ quản cung cấp 04/11/2026 (dùng chung hub Kia) | Vì sao chọn, lazy | caption: Ảnh thực tế: kỹ thuật viên lắp bi gầm vào hốc đèn cản trước |
| FOR-IMG-03 | `auto365vn-ford-ranger-wildtrak-2026-nang-cap-bi-gam-x-light-f10-turbo-v2-img_6a8e669a862655.19242543.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Ford Ranger Wildtrak 2026 lắp bi gầm X-Light F10 Turbo V2 4300K tại Auto365 |
| FOR-IMG-04 | `ford-everest-2025-sport-lap-bi-gam-x-light-f10-hyper-2-0-1791450683.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Ford Everest 2025 Sport lắp bi gầm X-Light F10 Hyper 2.0 bản 5000K tại Auto365 |
| FOR-IMG-05 | `auto365vn-ford-everest-2022-lap-bi-gam-x-light-f10-turbo-v2-4300k-img_6a6d71a140fbc4.95876056.jpg.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Ford Everest 2022 lắp bi gầm X-Light F10 Turbo V2 4300K: Giá và cấu hình tại Auto365 |
| FOR-IMG-06 | `ford-escape-xls-23l-2013-lap-bi-gam-x-light-x3-ultra-4300k-7-1791521645.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Ford Escape XLS 2.3L 2013 lắp X-Light X3 Ultra 4300K tại Auto365 |
| FOR-IMG-07 | `ford-ranger-raptor-nang-cap-bi-gam-x3-ultra-1793069813.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Ford Ranger Raptor 2024 lắp bi gầm X-Light X3 Ultra 4300K tại Auto365 |
| FOR-IMG-08 | `hinh/m-fiesta.webp` | 640 × 400 webp | 30.664 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — IFCAR, Public domain — [trang file gốc](https://commons.wikimedia.org/wiki/File:2011_Ford_Fiesta_S_sedan_front_--_07-10-2010.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Fiesta, lazy | Ford Fiesta |
| FOR-IMG-09 | `hinh/m-laser.webp` | 640 × 400 webp | 34.334 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — OSX, Public domain — [trang file gốc](https://commons.wikimedia.org/wiki/File:2001_Ford_Laser_%28KQ%29_GLXi_sedan_%282015-07-03%29_01.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Laser, lazy | Ford Laser |
| FOR-IMG-10 | `hinh/m-mondeo.webp` | 640 × 400 webp | 48.056 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Rudolf Stricker, CC BY-SA 3.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:Ford_Mondeo_front_20080303.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Mondeo, lazy | Ford Mondeo |
| FOR-IMG-11 | `hinh/m-focus.webp` | 640 × 400 webp | 30.822 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Elise240SX, CC BY-SA 4.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:2012_Ford_Focus_SEL_Sedan_in_White_Platinum_Metallic_Tri-coat,_front_left,_2020-10-13.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Focus, lazy | Ford Focus |
| FOR-IMG-12 | `hinh/m-ecosport.webp` | 640 × 400 webp | 35.542 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Elise240SX, CC BY-SA 4.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:2018_Ford_EcoSport_SE_in_White_Platinum,_Front_Left,_07-17-2022.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe EcoSport, lazy | Ford EcoSport |
| FOR-IMG-13 | `hinh/m-escape.webp` | 640 × 400 webp | 34.884 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Elise240SX, CC BY-SA 4.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:2012_Ford_Escape_XLT_in_Steel_Blue_Metallic,_Front_Left,_04-29-2023.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Escape, lazy | Ford Escape |
| FOR-IMG-14 | `hinh/m-explorer.webp` | 640 × 400 webp | 32.452 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Mr.choppers, CC BY-SA 3.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:2020_Ford_Explorer_XLT_in_Oxford_White,_front_left.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Explorer, lazy | Ford Explorer |
| FOR-IMG-15 | `hinh/m-transit.webp` | 640 × 400 webp | 39.450 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Vauxford, CC BY-SA 4.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:2015_Ford_Transit_350_Trend_2.2_Front.jpg); ghi công công khai dưới lưới xe; ảnh bản thùng kín, cùng thân và đầu xe với bản chở khách | Thẻ dòng xe Transit, lazy | Ford Transit |

## 6. Khi đăng production

1. Upload ảnh tương đối, đổi đường dẫn; dùng header/footer production.
2. Đổi robots, OG image; xoá khối "Kiểm tra nội bộ" và script `#bgford-branch-preview`.
3. Gửi lead test (service "Bi gầm Ford", xe ở `car_model`); kiểm schema; kiểm responsive.

## 7. Nguồn lens bảng tra (09/11/2026)

| Xe trong hồ sơ | Mẫu đèn | Lens | Căn cứ |
|---|---|---|---|
| [EcoSport 2017](https://auto365.vn/ford-ecosport-2017-lap-bi-gam-sv-30-max) | AES SV 3.0 Max | 3.0 | bài case |
| [Focus 2012 2.0L](https://auto365.vn/ford-focus-2012-20l-lap-bi-gam-x-light-x3-ultra) | X-Light X3 Ultra | 3.0 | bài case |
| [Ranger Raptor 2024](https://auto365.vn/ford-ranger-raptor-2024-lap-bi-gam-x-light-x3-ultra-4300k) | X-Light X3 Ultra 4300K | 3.0 | bài case |
| [Ranger Raptor 2025 2.0L Bi-Turbo](https://auto365.vn/ford-raptor-2025-2-0l-bi-turbo-lap-f-pro-v2-va-f10-hyper-2-0) | X-Light F10 Hyper 2.0 | 2.0 | bài case |
| [Escape XLS 2.3L 2013](https://auto365.vn/ford-escape-xls-23l-2013-lap-x-light-x3-ultra-4300k) | X-Light X3 Ultra 4300K | 3.0 | bài case |
| [Everest 2025 Sport](https://auto365.vn/ford-everest-2025-sport-lap-bi-gam-x-light-f10-hyper-20-ban-5000k) | X-Light F10 Hyper 2.0 | 2.0 | bài case |
| [Escape 2007 XLT](https://auto365.vn/ford-escape-2007-xlt-lap-bi-gam-sv-3-0-max) | AES SV 3.0 Max | 3.0 | bài case |
| [Ranger XLS 2020](https://auto365.vn/ford-ranger-xls-2020-lap-bi-gam-aes-sv-30-max) | AES SV 3.0 Max | 3.0 | tên mẫu |
| [Ranger Wildtrak 2026](https://auto365.vn/ford-ranger-wildtrak-2026-lap-x-light-f10-turbo-v2) | X-Light F10 Turbo V2 4300K | 3.0 | bài case |
| [Ranger XLS 2023](https://auto365.vn/ford-ranger-xls-2023-lap-x-light-f10-new-2025) | X-Light F10 New 2025 | 3.0 | bài case |
| [Escape 2010 XLS 2.3L](https://auto365.vn/ford-escape-2010-xls-23l-lap-aes-sv-30-max-gia-cau-hinh) | AES SV 3.0 Max | 3.0 | bài case |
| [Everest Sport 2022](https://auto365.vn/ford-everest-sport-2022-lap-bi-gam-aes-sv-30-max) | AES SV 3.0 Max | 3.0 | bài case |
| [Everest Titanium 2021](https://auto365.vn/ford-everest-2021-nang-cap-bi-gam-x-light-f10-pro-v2) | X-Light F10 Pro V2 | 3.0 | bài case |
| [Transit 2012 16 chỗ](https://auto365.vn/ford-transit-2012-16-cho-lap-bi-gam-x-light-x3-ultra-gia-cau-hinh) | X-Light X3 Ultra | 3.0 | bài case |
| [Focus 2016](https://auto365.vn/ford-focus-2016-lap-bi-gam-x-light-f10-turbo-v2-4300k) | X-Light F10 Turbo V2 4300K | 3.0 | bài case |
| [Everest 2022](https://auto365.vn/ford-everest-2022-lap-bi-gam-x-light-f10-turbo-v2-4300k) | X-Light F10 Turbo V2 4300K | 3.0 | bài case |
| [EcoSport](https://auto365.vn/ford-ecosport-do-den-bi-gam-x-light-f10-pro-3-nhiet-mau) | X-Light F10 Pro | 3.0 | thông số mẫu [https://auto365.vn/bi-gam-xlight-f10-pro](https://auto365.vn/bi-gam-xlight-f10-pro) |
| [Everest](https://auto365.vn/ford-everest-do-den-bi-gam-x-light-f10-pro) | X-Light F10 Pro | 3.0 | thông số mẫu [https://auto365.vn/bi-gam-xlight-f10-pro](https://auto365.vn/bi-gam-xlight-f10-pro) |
| [Everest](https://auto365.vn/ford-everest-do-den-gtr-g1-turbo) | GTR G1 Turbo | 3.0 | thông số mẫu [https://auto365.vn/bi-gam-gtr-g1-turbo](https://auto365.vn/bi-gam-gtr-g1-turbo) |
| [Escape](https://auto365.vn/nang-cap-ford-escape-do-den-naoevo-s9-pro-va-g1-turbo) | GTR G1 Turbo | 3.0 | thông số mẫu [https://auto365.vn/bi-gam-gtr-g1-turbo](https://auto365.vn/bi-gam-gtr-g1-turbo) |
| [Ranger Raptor](https://auto365.vn/ford-raptor-do-den-bi-gam-x-light-f10-new-nhiet-mau-5500k) | X-Light F10 New | Chưa xác nhận | — |
