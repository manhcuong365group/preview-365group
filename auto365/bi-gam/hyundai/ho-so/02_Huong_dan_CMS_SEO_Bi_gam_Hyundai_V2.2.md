# 02 — Hướng dẫn CMS/SEO V2.2: Hub Bi gầm Hyundai

| Trường | Giá trị |
|---|---|
| Preview | https://preview-365group.pages.dev/bi-gam/hyundai/ |
| Canonical production | https://auto365.vn/nang-cap-anh-sang-bi-gam/hyundai |
| Source | `auto365/bi-gam/hyundai/content-src.html` (sửa ở đây) |
| Build | `node scripts/build-bi-gam-hyundai.mjs && node scripts/export-bi-gam-hyundai-docs.mjs` |
| Nội dung + SHA | [01_Noi_dung_Bi_gam_Hyundai.md](01_Noi_dung_Bi_gam_Hyundai.md) |
| Master data | [04_Master_Data_Bi_gam_Hyundai.csv](04_Master_Data_Bi_gam_Hyundai.csv) |
| Ngày lập | 07/11/2026 — **bản nháp, chưa duyệt** |

## 1. Vai trò URL

| URL | Vai trò | Không làm |
|---|---|---|
| `/nang-cap-anh-sang-bi-gam` | Hub bi gầm chung | — |
| `/nang-cap-anh-sang-bi-gam/theo-hang-xe` | Tra cứu theo hãng | — |
| **`/nang-cap-anh-sang-bi-gam/hyundai`** | **Trang hãng Hyundai: chọn dòng xe, chọn theo nhu cầu, tiếp cận bài hồ sơ, bài tư vấn dòng xe (qua thẻ dòng xe), cẩm nang đèn và điểm tư vấn** | Không liệt kê bảng giá/SKU; không canonical bài case về trang này |
| `bi-gam-hyundai-accent`, `bi-gam-hyundai-elantra`, `bi-gam-hyundai-creta`, `bi-gam-hyundai-tucson`, `bi-gam-hyundai-santa-fe` | Bài tư vấn dòng xe | — |
| Bài case trên auto365.vn | Chứng minh một xe / một cấu hình cụ thể | — |

Thẻ dòng xe: "Có tư vấn" → bài tư vấn (Accent, Elantra, Creta, Tucson, Santa Fe); "Có hồ sơ" → bài case mới nhất (—); "Tư vấn cấu hình" → điền sẵn dòng xe vào form (Grand i10, Grand i10 Sedan, Venue, Palisade, Ioniq 5, Stargazer).

## 2. Metadata

| Trường | Giá trị |
|---|---|
| Title | Bi gầm Hyundai theo từng dòng xe: Santa Fe, Custin, Creta, Tucson \| Auto365 |
| Meta description | Tra cứu bi gầm Hyundai theo dòng xe, xem hồ sơ X-Light, GTR, AES đã lắp tại Auto365; kiểm tra cấu hình, chi phí và điểm tiếp nhận trước khi thi công. |
| H1 | Bi gầm Hyundai theo từng dòng xe |
| Robots | Preview: `noindex, nofollow, noarchive` + header `X-Robots-Tag: noindex`. **Production: `index, follow`, kiểm header không còn noindex** |
| OG image | Preview dùng `m-santa-fe.webp`; production thay bằng ảnh trên CDN auto365.vn (đề xuất HYU-IMG-01) |

## 3. Schema (JSON-LD, sinh tự động khi build)

| Khối | Nguồn dữ liệu |
|---|---|
| CollectionPage | `dateModified` từ dòng "Cập nhật" (2026-11-07); `about` = Brand Hyundai. **Chưa có `reviewedBy`/`lastReviewed`** — chỉ thêm byline "Rà soát kỹ thuật" + ngày khi anh Đạo duyệt, build tự sinh |
| BreadcrumbList | Trang chủ › Nâng cấp ánh sáng › Bi gầm › Hyundai |
| ItemList `#dong-xe` | 5 thẻ dòng xe có link |
| ItemList `#xe-thuc-te` | 7 bài case (không phải 7 xe khác nhau đã xác minh; chưa có case_id) |
| FAQPage | 8 câu, đúng text hiển thị |

## 4. Khối trên trang và nguồn

| Khối | Nguồn |
|---|---|
| 11 dòng xe (Hatchback 1 · Sedan 3 · SUV 6 · MPV 1) | Dải Hyundai ở trang theo-hang-xe + dòng đã ngừng bán/ít phổ biến nhưng có case; dòng không có dữ liệu thì bỏ |
| Hồ sơ (7) | Bài case bi gầm Hyundai đã đăng auto365.vn, đối chiếu sitemap 07/11/2026; hãng đèn: X-Light. Không tính: đèn gầm dạng rời, bi LED, camera, video trùng nội dung bài viết, bài "mẫu đèn × dòng xe" không nêu xe cụ thể |
| Box lưu ý | Ví dụ kích thước hốc/đời xe lấy từ tiêu đề bài case (2.0 inch = F10 2.0 New / AES SV 2.0 Max; 3.0 inch = AES SV 3.0 Max) |
| Gợi ý theo nhu cầu (3 nhóm) | Link "Đã lắp" là bài case trong danh sách hồ sơ |
| Cẩm nang đèn bi gầm (8) | Bài kiến thức chung, dùng chung với hub Kia |
| FAQ HCM | Auto365.vn - Trụ Sở Chính (4/4/1/7 Đường Số 3, Phường Hiệp Bình), link bản đồ, hotline 0365 365 911 |
| Vì sao chọn, chi nhánh, form | Khối chuẩn lấy từ theo-hang-xe khi build; `data-service` = "Bi gầm Hyundai"; câu "do kỹ thuật viên Nguyễn Quang Đạo kiểm duyệt" của thẻ tư vấn đã thay bằng câu trung tính (chưa duyệt) |

## 5. Image Pack V2.2 (07/11/2026)

Thumbnail dòng xe: `../theo-hang-xe/hinh/m-*.webp` (hồ sơ trang theo-hang-xe).   Không có ảnh trước–sau/beam test.

| Asset ID | Tệp | Kích thước | Bytes | Loại | Nguồn / quyền | Vị trí, tải | ALT / caption |
|---|---|---|---:|---|---|---|---|
| HYU-IMG-01 | `hinh/hero-hyundai-bi-gam.webp` | 1100 × 638 webp | 79.212 | Ảnh bìa bài case (có thể có chữ đồ họa) | Auto365 — bài case đã đăng | Hero, eager | Hyundai Creta 2022 lắp bi gầm X-Light F10 Turbo V2 4300K tại Auto365 |
| HYU-IMG-02 | `hinh/ly-do-ky-thuat-vien-lap-bi-gam.webp` | 1000 × 563 webp | 45.358 | Ảnh chụp thực tế quy trình | Chủ quản cung cấp 04/11/2026 (dùng chung hub Kia) | Vì sao chọn, lazy | caption: Ảnh thực tế: kỹ thuật viên lắp bi gầm vào hốc đèn cản trước |
| HYU-IMG-03 | `hyundai-santa-fe-2020-premium-lap-bi-gam-f10-2-new-1792487027.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Hyundai Santa Fe 2020 Premium lắp bi gầm X-Light F10 2.0 New tại Auto365 |
| HYU-IMG-04 | `auto365vn-hyundai-custin-2024-lap-bi-gam-x-light-301-v2-15-img_6ab3a6d0b9aff5.32629948.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Hồ sơ nâng cấp bi gầm X-Light 301 V2 trên Hyundai Custin 2024 tại Auto365 |
| HYU-IMG-05 | `hyundai-santa-fe-2017-tieu-chuan-lap-bi-gam-f10-turbo-v2-1792125417.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Hyundai Santa Fe 2017 Tiêu chuẩn lắp bi gầm X-Light F10 Turbo V2 4300K tại Auto365 |
| HYU-IMG-06 | `auto365vn-1jpg-img_68ef543b7fd388.31126613_.jpg.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Hyundai Tucson nâng cấp đèn bi gầm X-Light X3 Ultra tại Auto365 |
| HYU-IMG-07 | `auto365vn-hyundai-custin-nang-cap-bi-gam-x-light-f10-turbo-v2-img_6a6855c9d7c390.77278845.jpg.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Hyundai Custin lắp Bi gầm X-Light F10 Turbo V2 5500K: Giá và lưu ý kỹ thuật tại Auto365 |

## 6. Khi đăng production

1. Upload ảnh tương đối, đổi đường dẫn; dùng header/footer production.
2. Đổi robots, OG image; xoá khối "Kiểm tra nội bộ" và script `#bghyundai-branch-preview`.
3. Gửi lead test (service "Bi gầm Hyundai", xe ở `car_model`); kiểm schema; kiểm responsive.
