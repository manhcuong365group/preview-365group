# 02 — Hướng dẫn CMS/SEO V2.2: Hub Bi gầm Ford

| Trường | Giá trị |
|---|---|
| Preview | https://preview-365group.pages.dev/bi-gam/ford/ |
| Canonical production | https://auto365.vn/nang-cap-anh-sang-bi-gam/ford |
| Source | `auto365/bi-gam/ford/content-src.html` (sửa ở đây) |
| Build | `node scripts/build-bi-gam-ford.mjs && node scripts/export-bi-gam-ford-docs.mjs` |
| Nội dung + SHA | [01_Noi_dung_Bi_gam_Ford.md](01_Noi_dung_Bi_gam_Ford.md) |
| Master data | [04_Master_Data_Bi_gam_Ford.csv](04_Master_Data_Bi_gam_Ford.csv) |
| Ngày lập | 07/11/2026 — **bản nháp, chưa duyệt** |

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
| Meta description | Tra cứu bi gầm Ford theo dòng xe, xem hồ sơ X-Light, GTR, AES đã lắp tại Auto365; kiểm tra cấu hình, chi phí và điểm tiếp nhận trước khi thi công. |
| H1 | Bi gầm Ford theo từng dòng xe |
| Robots | Preview: `noindex, nofollow, noarchive` + header `X-Robots-Tag: noindex`. **Production: `index, follow`, kiểm header không còn noindex** |
| OG image | Preview dùng `m-everest.webp`; production thay bằng ảnh trên CDN auto365.vn (đề xuất FOR-IMG-01) |

## 3. Schema (JSON-LD, sinh tự động khi build)

| Khối | Nguồn dữ liệu |
|---|---|
| CollectionPage | `dateModified` từ dòng "Cập nhật" (2026-11-07); `about` = Brand Ford. **Chưa có `reviewedBy`/`lastReviewed`** — chỉ thêm byline "Rà soát kỹ thuật" + ngày khi anh Đạo duyệt, build tự sinh |
| BreadcrumbList | Trang chủ › Nâng cấp ánh sáng › Bi gầm › Ford |
| ItemList `#dong-xe` | 7 thẻ dòng xe có link |
| ItemList `#xe-thuc-te` | 21 bài case (không phải 21 xe khác nhau đã xác minh; chưa có case_id) |
| FAQPage | 8 câu, đúng text hiển thị |

## 4. Khối trên trang và nguồn

| Khối | Nguồn |
|---|---|
| 13 dòng xe (Sedan 4 · SUV 6 · Bán tải 2 · Xe khách 1) | Dải Ford ở trang theo-hang-xe + dòng đã ngừng bán/ít phổ biến nhưng có case; dòng không có dữ liệu thì bỏ |
| Hồ sơ (21) | Bài case bi gầm Ford đã đăng auto365.vn, đối chiếu sitemap 07/11/2026; hãng đèn: AES, GTR, X-Light. Không tính: đèn gầm dạng rời, bi LED, camera, video trùng nội dung bài viết, bài "mẫu đèn × dòng xe" không nêu xe cụ thể |
| Box lưu ý | Ví dụ kích thước hốc/đời xe lấy từ tiêu đề bài case (2.0 inch = F10 2.0 New / AES SV 2.0 Max; 3.0 inch = AES SV 3.0 Max) |
| Gợi ý theo nhu cầu (3 nhóm) | Link "Đã lắp" là bài case trong danh sách hồ sơ |
| Cẩm nang đèn bi gầm (8) | Bài kiến thức chung, dùng chung với hub Kia |
| FAQ HCM | Auto365.vn - Trụ Sở Chính (4/4/1/7 Đường Số 3, Phường Hiệp Bình), link bản đồ, hotline 0365 365 911 |
| Vì sao chọn, chi nhánh, form | Khối chuẩn lấy từ theo-hang-xe khi build; `data-service` = "Bi gầm Ford"; câu "do kỹ thuật viên Nguyễn Quang Đạo kiểm duyệt" của thẻ tư vấn đã thay bằng câu trung tính (chưa duyệt) |

## 5. Image Pack V2.2 (07/11/2026)

Thumbnail dòng xe: `../theo-hang-xe/hinh/m-*.webp` (hồ sơ trang theo-hang-xe). Dòng xe chưa có thumbnail (Focus, EcoSport, Escape, Transit) dùng ảnh bìa bài case mới nhất của dòng đó (ảnh Auto365, `object-fit:cover`). Dòng chưa có ảnh lẫn case (Explorer) hiển thị tên chữ. Không có ảnh trước–sau/beam test.

| Asset ID | Tệp | Kích thước | Bytes | Loại | Nguồn / quyền | Vị trí, tải | ALT / caption |
|---|---|---|---:|---|---|---|---|
| FOR-IMG-01 | `hinh/hero-ford-bi-gam.webp` | 1100 × 638 webp | 71.206 | Ảnh bìa bài case (có thể có chữ đồ họa) | Auto365 — bài case đã đăng | Hero, eager | Ford Ranger XLS 2020 lắp bi gầm AES SV 3.0 Max tại Auto365 |
| FOR-IMG-02 | `hinh/ly-do-ky-thuat-vien-lap-bi-gam.webp` | 1000 × 563 webp | 45.358 | Ảnh chụp thực tế quy trình | Chủ quản cung cấp 04/11/2026 (dùng chung hub Kia) | Vì sao chọn, lazy | caption: Ảnh thực tế: kỹ thuật viên lắp bi gầm vào hốc đèn cản trước |
| FOR-IMG-03 | `auto365vn-ford-ranger-wildtrak-2026-nang-cap-bi-gam-x-light-f10-turbo-v2-img_6a8e669a862655.19242543.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Ford Ranger Wildtrak 2026 lắp bi gầm X-Light F10 Turbo V2 4300K tại Auto365 |
| FOR-IMG-04 | `ford-everest-2025-sport-lap-bi-gam-x-light-f10-hyper-2-0-1791450683.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Ford Everest 2025 Sport lắp bi gầm X-Light F10 Hyper 2.0 bản 5000K tại Auto365 |
| FOR-IMG-05 | `auto365vn-ford-everest-2022-lap-bi-gam-x-light-f10-turbo-v2-4300k-img_6a6d71a140fbc4.95876056.jpg.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Ford Everest 2022 lắp bi gầm X-Light F10 Turbo V2 4300K: Giá và cấu hình tại Auto365 |
| FOR-IMG-06 | `ford-escape-xls-23l-2013-lap-bi-gam-x-light-x3-ultra-4300k-7-1791521645.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Ford Escape XLS 2.3L 2013 lắp X-Light X3 Ultra 4300K tại Auto365 |
| FOR-IMG-07 | `ford-ranger-raptor-nang-cap-bi-gam-x3-ultra-1793069813.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Ford Ranger Raptor 2024 lắp bi gầm X-Light X3 Ultra 4300K tại Auto365 |
| FOR-IMG-08 | `hinh/m-fiesta.webp` | 640 × 400 webp | 30.664 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — IFCAR, Public domain — [trang file gốc](https://commons.wikimedia.org/wiki/File:2011_Ford_Fiesta_S_sedan_front_--_07-10-2010.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Fiesta (đã ngừng bán), lazy | Ford Fiesta |
| FOR-IMG-09 | `hinh/m-laser.webp` | 640 × 400 webp | 34.334 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — OSX, Public domain — [trang file gốc](https://commons.wikimedia.org/wiki/File:2001_Ford_Laser_%28KQ%29_GLXi_sedan_%282015-07-03%29_01.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Laser (đã ngừng bán), lazy | Ford Laser |
| FOR-IMG-10 | `hinh/m-mondeo.webp` | 640 × 400 webp | 48.056 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Rudolf Stricker, CC BY-SA 3.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:Ford_Mondeo_front_20080303.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Mondeo (đã ngừng bán), lazy | Ford Mondeo |

## 6. Khi đăng production

1. Upload ảnh tương đối, đổi đường dẫn; dùng header/footer production.
2. Đổi robots, OG image; xoá khối "Kiểm tra nội bộ" và script `#bgford-branch-preview`.
3. Gửi lead test (service "Bi gầm Ford", xe ở `car_model`); kiểm schema; kiểm responsive.
