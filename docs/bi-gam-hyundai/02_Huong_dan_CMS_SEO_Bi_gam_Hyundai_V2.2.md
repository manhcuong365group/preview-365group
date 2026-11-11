# 02 — Hướng dẫn CMS/SEO V2.2: Hub Bi gầm Hyundai

| Trường | Giá trị |
|---|---|
| Preview | https://preview-365group.pages.dev/bi-gam/hyundai/ |
| Canonical production | https://auto365.vn/nang-cap-anh-sang-bi-gam/hyundai |
| Source | `auto365/bi-gam/hyundai/content-src.html` (sửa ở đây) |
| Build | `node scripts/build-bi-gam-hyundai.mjs && node scripts/export-bi-gam-hyundai-docs.mjs` |
| Nội dung + SHA | [01_Noi_dung_Bi_gam_Hyundai.md](01_Noi_dung_Bi_gam_Hyundai.md) |
| Master data | [04_Master_Data_Bi_gam_Hyundai.csv](04_Master_Data_Bi_gam_Hyundai.csv) |
| Ngày lập | 07/11/2026 — **ĐÃ DUYỆT 07/11/2026** (anh Nguyễn Quang Đạo, chủ quản xác nhận) |

## 1. Vai trò URL

| URL | Vai trò | Không làm |
|---|---|---|
| `/nang-cap-anh-sang-bi-gam` | Hub bi gầm chung | — |
| `/nang-cap-anh-sang-bi-gam/theo-hang-xe` | Tra cứu theo hãng | — |
| **`/nang-cap-anh-sang-bi-gam/hyundai`** | **Trang hãng Hyundai: chọn dòng xe, chọn theo nhu cầu, tiếp cận bài hồ sơ, bài tư vấn dòng xe (qua thẻ dòng xe), cẩm nang đèn và điểm tư vấn** | Không liệt kê bảng giá/SKU; không canonical bài case về trang này |
| `bi-gam-hyundai-accent`, `bi-gam-hyundai-elantra`, `bi-gam-hyundai-creta`, `bi-gam-hyundai-tucson`, `bi-gam-hyundai-santa-fe`, `bi-gam-hyundai-custin` | Bài tư vấn dòng xe | — |
| Bài case trên auto365.vn | Chứng minh một xe / một cấu hình cụ thể | — |

Thẻ dòng xe: "Có tư vấn" → bài tư vấn (Accent, Elantra, Creta, Tucson, Santa Fe, Custin); "Có hồ sơ" → bài case mới nhất (—); "Tư vấn cấu hình" → điền sẵn dòng xe vào form (Grand i10, Getz, i20, Grand i10 Sedan, Avante, Venue, Palisade, Ioniq 5, Kona, Stargazer, Grand Starex).

## 2. Metadata

| Trường | Giá trị |
|---|---|
| Title | Lắp bi gầm Hyundai: chọn đèn theo dòng xe Santa Fe, Custin, Creta, Tucson \| Auto365 |
| Meta description | Tra cứu 22 dòng Hyundai, xem 9 hồ sơ lắp bi gầm X-Light và tìm chi nhánh Auto365 để kiểm tra cấu hình, nhận báo giá theo đời xe. |
| H1 | Lắp bi gầm Hyundai: chọn đèn theo từng dòng xe |
| Robots | Preview: `noindex, nofollow, noarchive` + header `X-Robots-Tag: noindex`. **Production: `index, follow`, kiểm header không còn noindex** |
| OG image | Preview dùng `m-santa-fe.webp`; production thay bằng ảnh trên CDN auto365.vn (đề xuất HYU-IMG-01) |

## 3. Schema (JSON-LD, sinh tự động khi build)

| Khối | Nguồn dữ liệu |
|---|---|
| CollectionPage | `dateModified` từ dòng "Cập nhật" (2026-11-07); `about` = Brand Hyundai. `reviewedBy` (Nguyễn Quang Đạo) + `lastReviewed` 2026-11-07 lấy từ byline "Rà soát kỹ thuật" |
| BreadcrumbList | Trang chủ › Nâng cấp ánh sáng › Bi gầm › Hyundai |
| ItemList `#dong-xe` | 6 thẻ dòng xe có link |
| ItemList `#xe-thuc-te` | 8 bài case (mỗi bài là một xe khác nhau — chủ quản xác nhận 07/11; mã case_id nội bộ chưa có) |
| FAQPage | 9 câu, đúng text hiển thị |

## 4. Khối trên trang và nguồn

| Khối | Nguồn |
|---|---|
| 17 dòng xe (Hatchback 3 · Sedan 4 · SUV 7 · MPV 3) | Dải Hyundai ở trang theo-hang-xe + dòng đã ngừng bán/ít phổ biến nhưng có case; dòng không có dữ liệu thì bỏ |
| Hồ sơ (8) | Bài case bi gầm Hyundai đã đăng auto365.vn, đối chiếu sitemap 07/11/2026; hãng đèn: X-Light. Không tính: đèn gầm dạng rời, bi LED, camera, video trùng nội dung bài viết, bài "mẫu đèn × dòng xe" không nêu xe cụ thể |
| Box lưu ý | Ví dụ kích thước hốc/đời xe lấy từ tiêu đề bài case (2.0 inch = F10 2.0 New / AES SV 2.0 Max; 3.0 inch = AES SV 3.0 Max) |
| Gợi ý theo nhu cầu (3 nhóm) | Link "Đã lắp" là bài case trong danh sách hồ sơ |
| Mẫu đèn · lens trên thẻ hồ sơ (thay bảng tra `#bang-tra` đã gỡ 10/11) | Dữ liệu từng ca: hãng, mẫu bi gầm, lens; bộ lọc hãng dùng cùng dữ liệu |
| FAQ "Xe Hyundai nên chọn bi gầm 2.0 hay 3.0 inch?" | Ví dụ hai cỡ lens có nguồn; dẫn về khối hồ sơ `#xe-thuc-te` |
| Cẩm nang đèn bi gầm (8) | Bài kiến thức chung, dùng chung với hub Kia |
| FAQ HCM | Auto365.vn - Trụ Sở Chính (4/4/1/7 Đường Số 3, Phường Hiệp Bình), link bản đồ, hotline 0365 365 911 |
| Vì sao chọn, chi nhánh, form | Khối chuẩn lấy từ theo-hang-xe khi build; `data-service` = "Bi gầm Hyundai"; thẻ tư vấn giữ câu trung tính (không nêu tên người duyệt trong khối dùng chung); người rà soát ghi ở byline và schema |

## 5. Image Pack V2.2 (07/11/2026)

Thumbnail dòng xe: `../theo-hang-xe/hinh/m-*.webp` (hồ sơ trang theo-hang-xe).   Không có ảnh trước–sau/beam test.

| Asset ID | Tệp | Kích thước | Bytes | Loại | Nguồn / quyền | Vị trí, tải | ALT / caption |
|---|---|---|---:|---|---|---|---|
| HYU-IMG-01 | `hinh/hero-hyundai-bi-gam.webp` | 1100 × 638 webp | 91.222 | Ảnh chụp thực tế trong bài case, không chữ đồ họa | Auto365 — bài case đã đăng (nguồn ghi trong comment hero-src) | Hero, eager | Hyundai Creta 2022 lắp bi gầm X-Light F10 Turbo V2 4300K tại Auto365 |
| HYU-IMG-02 | `hinh/ly-do-ky-thuat-vien-lap-bi-gam.webp` | 1000 × 563 webp | 45.358 | Ảnh chụp thực tế quy trình | Chủ quản cung cấp 04/11/2026 (dùng chung hub Kia) | Vì sao chọn, lazy | caption: Ảnh thực tế: kỹ thuật viên lắp bi gầm vào hốc đèn cản trước |
| HYU-IMG-03 | `hyundai-santa-fe-2020-premium-lap-bi-gam-f10-2-new-1792487027.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Hyundai Santa Fe 2020 Premium lắp bi gầm X-Light F10 2.0 New tại Auto365 |
| HYU-IMG-04 | `auto365vn-hyundai-custin-2024-lap-bi-gam-x-light-301-v2-15-img_6ab3a6d0b9aff5.32629948.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Hồ sơ nâng cấp bi gầm X-Light 301 V2 trên Hyundai Custin 2024 tại Auto365 |
| HYU-IMG-05 | `hyundai-santa-fe-2017-tieu-chuan-lap-bi-gam-f10-turbo-v2-1792125417.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Hyundai Santa Fe 2017 Tiêu chuẩn lắp bi gầm X-Light F10 Turbo V2 4300K tại Auto365 |
| HYU-IMG-06 | `auto365vn-1jpg-img_68ef543b7fd388.31126613_.jpg.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Hyundai Tucson nâng cấp đèn bi gầm X-Light X3 Ultra tại Auto365 |
| HYU-IMG-07 | `auto365vn-hyundai-custin-nang-cap-bi-gam-x-light-f10-turbo-v2-img_6a6855c9d7c390.77278845.jpg.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Hyundai Custin lắp Bi gầm X-Light F10 Turbo V2 5500K: Giá và lưu ý kỹ thuật tại Auto365 |
| HYU-IMG-08 | `hinh/m-getz.webp` | 640 × 400 webp | 37.688 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — M 93, CC BY-SA 3.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:Hyundai_Getz_Facelift_front-1.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Getz, lazy | Hyundai Getz |
| HYU-IMG-09 | `hinh/m-i20.webp` | 640 × 400 webp | 48.330 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Vauxford, CC BY-SA 4.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:2010_Hyundai_i20_Comfort_1.2_Front.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe i20, lazy | Hyundai i20 |
| HYU-IMG-10 | `hinh/m-avante.webp` | 640 × 400 webp | 36.402 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Chu, CC BY-SA 3.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:20100804_hyundai_avante_1.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Avante, lazy | Hyundai Avante |
| HYU-IMG-11 | `hinh/m-kona.webp` | 640 × 400 webp | 40.538 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Elise240SX, CC BY-SA 4.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:2018_Hyundai_Kona_Preferred_in_Tangerine_Comet,_Front_Left,_06-12-2022.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Kona, lazy | Hyundai Kona |
| HYU-IMG-12 | `hinh/m-grand-starex.webp` | 640 × 400 webp | 38.986 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Ethan Llamas, CC BY-SA 4.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:Hyundai_Grand_Starex_2.5_GLS_TCI_2018.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Grand Starex, lazy | Hyundai Grand Starex |

## 6. Khi đăng production

1. Upload ảnh tương đối, đổi đường dẫn; dùng header/footer production.
2. Đổi robots, OG image; xoá khối "Kiểm tra nội bộ" và script `#bghyundai-branch-preview`.
3. Gửi lead test (service "Bi gầm Hyundai", xe ở `car_model`); kiểm schema; kiểm responsive.

## 7. Nguồn lens theo ca (09/11/2026 — nay hiển thị trên thẻ hồ sơ)

| Xe trong hồ sơ | Mẫu đèn | Lens | Căn cứ |
|---|---|---|---|
| [Santa Fe 2020 Premium](https://auto365.vn/hyundai-santa-fe-2020-premium-lap-bi-gam-f10-2-new) | X-Light F10 2.0 New | 2.0 | bài case |
| [Santa Fe 2017 Tiêu chuẩn](https://auto365.vn/hyundai-santa-fe-2017-tieu-chuan-lap-bi-gam-f10-turbo-v2) | X-Light F10 Turbo V2 4300K | 3.0 | bài case |
| [Custin 2024](https://auto365.vn/ho-so-nang-cap-bi-gam-x-light-301-v2-tren-hyundai-custin-2024) | X-Light 301 V2 | 3.0 | thông số mẫu [https://x-light.vn/bi-gam-xlight-301-v2](https://x-light.vn/bi-gam-xlight-301-v2) |
| [Elantra N Line 2023](https://auto365.vn/elantra-n-line-2023-lap-bi-gam-x-light-f10-turbo-v2-4300k) | X-Light F10 Turbo V2 4300K | 3.0 | bài case |
| [Creta 2022](https://auto365.vn/hyundai-creta-2022-lap-bi-gam-x-light-f10-turbo-v2-4300k) | X-Light F10 Turbo V2 4300K | 3.0 | bài case |
| [Custin 2023](https://auto365.vn/hyundai-custin-lap-bi-gam-x-light-f10-turbo-v2-5500k) | X-Light F10 Turbo V2 5500K | 3.0 | bài case |
| [Tucson](https://auto365.vn/hyundai-tucson-nang-cap-den-bi-gam-x-light-x3-ultra) | X-Light X3 Ultra | 3.0 | bài case |
| [Custin](https://auto365.vn/hyundai-custin-do-den-bi-gam-x-light-f10-pro) | X-Light F10 Pro | 3.0 | thông số mẫu [https://auto365.vn/bi-gam-xlight-f10-pro](https://auto365.vn/bi-gam-xlight-f10-pro) |


## Bản vá 11/11/2026 (tái kiểm 10/11)

| Mục | Giá trị |
|---|---|
| Dòng xe | 22 |
| Hồ sơ case | 9 |

- Mỗi thẻ hồ sơ hiển thị **mẫu bi gầm · lens** lấy từ dữ liệu từng ca (đối chiếu 100% với bảng lens đã duyệt 09/11 cho Hyundai/Mitsubishi/Ford/Honda). Không khôi phục bảng `#bang-tra` theo quyết định của chủ quản 10/11; FAQ 2.0/3.0 inch dẫn về khối hồ sơ `#xe-thuc-te`.
- Bộ lọc hãng đèn dựng từ dữ liệu từng ca (không suy từ tiêu đề): ca "SV 3.0 Max" thuộc AES.
- FAQ chi phí có link **danh sách mẫu bi gầm và giá tham khảo** (`https://auto365.vn/nang-cap-anh-sang-bi-gam#san-pham`), tách giá đèn theo mẫu khỏi báo giá hoàn thiện theo xe.
- Mobile: khoảng cuộn tới mục 124px (tiêu đề không bị thanh đầu trang che). Tìm xe bỏ dấu (Coupé = Coupe) và bỏ chữ "Hybrid".
- Bộ tìm chi nhánh: link "Xem tất cả" chuẩn hoá Hồ Chí Minh/HCM/Sài Gòn → `TP.HCM` khi sang danh bạ.
