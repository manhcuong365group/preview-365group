# 02 — Hướng dẫn CMS/SEO V2.2: Hub Bi gầm Mitsubishi

| Trường | Giá trị |
|---|---|
| Preview | https://preview-365group.pages.dev/bi-gam/mitsubishi/ |
| Canonical production | https://auto365.vn/nang-cap-anh-sang-bi-gam/mitsubishi |
| Source | `auto365/bi-gam/mitsubishi/content-src.html` (sửa ở đây) |
| Build | `node scripts/build-bi-gam-mitsubishi.mjs && node scripts/export-bi-gam-mitsubishi-docs.mjs` |
| Nội dung + SHA | [01_Noi_dung_Bi_gam_Mitsubishi.md](01_Noi_dung_Bi_gam_Mitsubishi.md) |
| Master data | [04_Master_Data_Bi_gam_Mitsubishi.csv](04_Master_Data_Bi_gam_Mitsubishi.csv) |
| Ngày lập | 07/11/2026 — **ĐÃ DUYỆT 07/11/2026** (anh Nguyễn Quang Đạo, chủ quản xác nhận) |

## 1. Vai trò URL

| URL | Vai trò | Không làm |
|---|---|---|
| `/nang-cap-anh-sang-bi-gam` | Hub bi gầm chung | — |
| `/nang-cap-anh-sang-bi-gam/theo-hang-xe` | Tra cứu theo hãng | — |
| **`/nang-cap-anh-sang-bi-gam/mitsubishi`** | **Trang hãng Mitsubishi: chọn dòng xe, chọn theo nhu cầu, tiếp cận bài hồ sơ, bài tư vấn dòng xe (qua thẻ dòng xe), cẩm nang đèn và điểm tư vấn** | Không liệt kê bảng giá/SKU; không canonical bài case về trang này |
| `bi-gam-mitsubishi-destinator`, `bi-gam-mitsubishi-outlander`, `bi-gam-mitsubishi-pajero`, `bi-gam-mitsubishi-xpander`, `bi-gam-mitsubishi-triton` | Bài tư vấn dòng xe | — |
| Bài case trên auto365.vn | Chứng minh một xe / một cấu hình cụ thể | — |

Thẻ dòng xe: "Có tư vấn" → bài tư vấn (Destinator, Outlander, Pajero, Xpander, Triton); "Có hồ sơ" → bài case mới nhất (Xforce, Xpander Cross, Zinger); "Tư vấn cấu hình" → điền sẵn dòng xe vào form (Mirage, Attrage, Pajero Sport, Grandis, Jolie).

## 2. Metadata

| Trường | Giá trị |
|---|---|
| Title | Lắp bi gầm Mitsubishi: chọn đèn theo dòng xe Xpander, Outlander, Triton, Xforce \| Auto365 |
| Meta description | Tra cứu bi gầm Mitsubishi theo dòng và đời xe, xem 15 hồ sơ lắp X-Light, GTR, AES, Titan và tìm điểm Auto365 tư vấn cấu hình, chi phí. |
| H1 | Lắp bi gầm Mitsubishi: chọn đèn theo từng dòng xe |
| Robots | Preview: `noindex, nofollow, noarchive` + header `X-Robots-Tag: noindex`. **Production: `index, follow`, kiểm header không còn noindex** |
| OG image | Preview dùng `m-xpander-cross.webp`; production thay bằng ảnh trên CDN auto365.vn (đề xuất MIT-IMG-01) |

## 3. Schema (JSON-LD, sinh tự động khi build)

| Khối | Nguồn dữ liệu |
|---|---|
| CollectionPage | `dateModified` từ dòng "Cập nhật" (2026-11-11); `about` = Brand Mitsubishi. `reviewedBy` (Nguyễn Quang Đạo) + `lastReviewed` 2026-11-11 lấy từ byline "Rà soát kỹ thuật" |
| BreadcrumbList | Trang chủ › Nâng cấp ánh sáng › Bi gầm › Mitsubishi |
| ItemList `#dong-xe` | 8 thẻ dòng xe có link |
| ItemList `#xe-thuc-te` | 15 bài case (mỗi bài là một xe khác nhau — chủ quản xác nhận 07/11; mã case_id nội bộ chưa có) |
| FAQPage | 9 câu, đúng text hiển thị |

## 4. Khối trên trang và nguồn

| Khối | Nguồn |
|---|---|
| 14 dòng xe (xem tab trên trang) | Dải Mitsubishi ở trang theo-hang-xe + dòng đã ngừng bán/ít phổ biến nhưng có case; dòng không có dữ liệu thì bỏ |
| Hồ sơ (15) | Bài case bi gầm Mitsubishi đã đăng auto365.vn, đối chiếu sitemap 07/11/2026; hãng đèn: AES, GTR, Titan, X-Light. Không tính: đèn gầm dạng rời, bi LED, camera, video trùng nội dung bài viết, bài "mẫu đèn × dòng xe" không nêu xe cụ thể |
| Box lưu ý | Ví dụ kích thước hốc/đời xe lấy từ tiêu đề bài case (2.0 inch = F10 2.0 New / AES SV 2.0 Max; 3.0 inch = AES SV 3.0 Max) |
| Gợi ý theo nhu cầu (3 nhóm) | Link "Đã lắp" là bài case trong danh sách hồ sơ |
| Mẫu đèn · lens trên thẻ hồ sơ (thay bảng tra `#bang-tra` đã gỡ 10/11) | Dữ liệu từng ca: hãng, mẫu bi gầm, lens; bộ lọc hãng dùng cùng dữ liệu |
| FAQ "Xe Mitsubishi nên chọn bi gầm 2.0 hay 3.0 inch?" | Ví dụ hai cỡ lens có nguồn; dẫn về khối hồ sơ `#xe-thuc-te` |
| Cẩm nang đèn bi gầm (8) | Bài kiến thức chung, dùng chung với hub Kia |
| FAQ HCM | Auto365.vn - Trụ Sở Chính (4/4/1/7 Đường Số 3, Phường Hiệp Bình), link bản đồ, hotline 0365 365 911 |
| Vì sao chọn, chi nhánh, form | Khối chuẩn lấy từ theo-hang-xe khi build; `data-service` = "Bi gầm Mitsubishi"; thẻ tư vấn giữ câu trung tính (không nêu tên người duyệt trong khối dùng chung); người rà soát ghi ở byline và schema |

## 5. Image Pack V2.2 (07/11/2026)

> Cập nhật 11/11/2026: thẻ dòng xe nay dùng ảnh do designer Auto365 cung cấp (NAS Marketing/WEB/261110, đã tách nền); dòng nào còn ảnh Wikimedia thì ghi công ngay dưới lưới xe trên trang. Các dòng "Wikimedia Commons" trong bảng dưới chỉ còn hiệu lực cho đúng những ảnh chưa được thay.

Thumbnail dòng xe: `../theo-hang-xe/hinh/m-*.webp` (hồ sơ trang theo-hang-xe).   Không có ảnh trước–sau/beam test.

| Asset ID | Tệp | Kích thước | Bytes | Loại | Nguồn / quyền | Vị trí, tải | ALT / caption |
|---|---|---|---:|---|---|---|---|
| MIT-IMG-01 | `hinh/hero-mitsubishi-bi-gam.webp` | 1100 × 638 webp | 77.474 | Ảnh chụp thực tế trong bài case, không chữ đồ họa | Auto365 — bài case đã đăng (nguồn ghi trong comment hero-src) | Hero, eager | Mitsubishi Xpander Cross 2023 lắp bi gầm X-Light F10 2.0 New tại Auto365 |
| MIT-IMG-02 | `hinh/ly-do-ky-thuat-vien-lap-bi-gam.webp` | 1000 × 563 webp | 45.358 | Ảnh chụp thực tế quy trình | Chủ quản cung cấp 04/11/2026 (dùng chung hub Kia) | Vì sao chọn, lazy | caption: Ảnh thực tế: kỹ thuật viên lắp bi gầm vào hốc đèn cản trước |
| MIT-IMG-03 | `mitsubishi-destinator-2026-premium-lap-bi-gam-x-light-f10-hy-1791947589.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Mitsubishi Destinator 2026 Premium lắp bi gầm X-Light F10 Hyper 2.0 tại Auto365 |
| MIT-IMG-04 | `auto365vn-outlander-2022-lap-x-light-f10-turbo-v2-4300k-img_6a9fcc3d63cac4.63837666.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Mitsubishi Outlander 2022 lắp bi gầm X-Light F10 Turbo V2 4300K tại Auto365 |
| MIT-IMG-05 | `auto365vn-mitsubishi-triton-2025-lap-aes-sv-20-max-5500k-img_6a9256174c76d5.97626076.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Mitsubishi Triton 2025 lắp AES SV 2.0 Max tại Auto365 |
| MIT-IMG-06 | `mitsubishi-xforce-hoan-thien-lap-dat-x3-ultra-1793336291.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Mitsubishi Xforce Premium 2025 lắp bi gầm X-Light X3 Ultra 3000K tại Auto365 |
| MIT-IMG-07 | `mitsubishi-pajero-2021-v6-30l-lap-bi-gam-x-light-f10-new-202-1793613489.webp` | CDN auto365.vn | — | Ảnh bài case đã đăng | Auto365 | Vì sao chọn, lazy | Mitsubishi Pajero 2021 V6 3.0L lắp bi gầm X-Light F10 New 2025 tại Auto365 |
| MIT-IMG-08 | `hinh/m-mirage.webp` | 640 × 400 webp | 32.246 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Mr.choppers, CC BY-SA 4.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:2016-2020_Mitsubishi_Mirage_M_in_Cool_Silver_Metallic,_front_right.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Mirage, lazy | Mitsubishi Mirage |
| MIT-IMG-09 | `hinh/m-grandis.webp` | 640 × 400 webp | 44.814 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Vauxford, CC BY-SA 4.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:2005_Mitsubishi_Grandis_Equippe_Automatic_2.4_Front.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Grandis, lazy | Mitsubishi Grandis |
| MIT-IMG-10 | `hinh/m-jolie.webp` | 640 × 400 webp | 38.750 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Rutger van der Maar, CC BY 2.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:Mitsubishi_Freeca_second_facelift.jpg); ghi công công khai dưới lưới xe; ảnh Mitsubishi Freeca, cùng thân xe với Jolie | Thẻ dòng xe Jolie, lazy | Mitsubishi Jolie |
| MIT-IMG-11 | `hinh/m-xforce.webp` | 640 × 400 webp | 29.732 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Ethan Llamas, CC BY-SA 4.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:2025_Mitsubishi_Xforce_1.5_GLS_in_Quartz_White,_front_right.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Xforce, lazy | Mitsubishi Xforce |
| MIT-IMG-12 | `hinh/m-pajero.webp` | 640 × 400 webp | 33.300 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Thomas doerfer, CC BY-SA 3.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:Mitsubishi_Pajero_V80.JPG); ghi công công khai dưới lưới xe | Thẻ dòng xe Pajero, lazy | Mitsubishi Pajero |
| MIT-IMG-13 | `hinh/m-xpander.webp` | 640 × 400 webp | 39.658 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Alex Neman, CC BY-SA 4.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:2018_Mitsubishi_Xpander_Sport_%28front%29,_Citraland,_West_Surabaya.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Xpander, lazy | Mitsubishi Xpander |
| MIT-IMG-14 | `hinh/m-zinger.webp` | 640 × 400 webp | 35.708 | Ảnh xe tham khảo (tách nền) | Wikimedia Commons — Dinkun Chen, CC BY-SA 4.0 — [trang file gốc](https://commons.wikimedia.org/wiki/File:MITSUBISHI_ZINGER_China.jpg); ghi công công khai dưới lưới xe | Thẻ dòng xe Zinger, lazy | Mitsubishi Zinger |

## 6. Khi đăng production

1. Upload ảnh tương đối, đổi đường dẫn; dùng header/footer production.
2. Đổi robots, OG image; xoá khối "Kiểm tra nội bộ" và script `#bgmitsubishi-branch-preview`.
3. Gửi lead test (service "Bi gầm Mitsubishi", xe ở `car_model`); kiểm schema; kiểm responsive.

## 7. Nguồn lens theo ca (09/11/2026 — nay hiển thị trên thẻ hồ sơ)

| Xe trong hồ sơ | Mẫu đèn | Lens | Căn cứ |
|---|---|---|---|
| [Pajero 2021 V6 3.0L](https://auto365.vn/mitsubishi-pajero-2021-v6-30l-lap-bi-gam-x-light-f10-new-2025) | X-Light F10 New 2025 | 3.0 | bài case |
| [Xforce Premium 2025](https://auto365.vn/mitsubishi-xforce-premium-2025-lap-bi-gam-x-light-x3-ultra-3000k) | X-Light X3 Ultra 3000K | 3.0 | bài case |
| [Zinger GLS 2011](https://auto365.vn/mitsubishi-zinger-gls-2011-lap-bi-gam-x-light-x3-ultra-4300k) | X-Light X3 Ultra 4300K | 3.0 | bài case |
| [Xpander Cross 2025](https://auto365.vn/mitsubishi-xpander-cross-2025-lap-bi-gam-f10-hyper-20) | X-Light F10 Hyper 2.0 | 2.0 | bài case |
| [Destinator 2026 Premium](https://auto365.vn/mitsubishi-destinator-2026-premium-lap-bi-gam-x-light-f10-hyper-2-0) | X-Light F10 Hyper 2.0 | 2.0 | bài case |
| [Outlander 2020](https://auto365.vn/mitsubishi-outlander-2020-lap-bi-gam-gtr-g1-turbo) | GTR G1 Turbo | 3.0 | thông số mẫu [https://auto365.vn/bi-gam-gtr-g1-turbo](https://auto365.vn/bi-gam-gtr-g1-turbo) |
| [Outlander 2022](https://auto365.vn/mitsubishi-outlander-2022-lap-x-light-f10-turbo-v2-4300k) | X-Light F10 Turbo V2 4300K | 3.0 | bài case |
| [Triton 2025](https://auto365.vn/mitsubishi-triton-2025-lap-aes-sv-20-max) | AES SV 2.0 Max | 2.0 | bài case |
| [Xforce Ultimate 2024](https://auto365.vn/mitsubishi-xforce-ultimate-2024-lap-x-light-f10-hyper-20-gia-cau-hinh) | X-Light F10 Hyper 2.0 | 2.0 | bài case |
| [Xpander Cross 2023](https://auto365.vn/mitsubishi-xpander-cross-2023-lap-bi-gam-x-light-f10-20-new-gia-va-cau-hinh) | X-Light F10 2.0 New | 2.0 | bài case |
| [Xpander 2018](https://auto365.vn/mitsubishi-xpander-2018-lap-bi-gam-x-light-301-v2-cau-hinh-thuc-te-va-chi-phi) | X-Light 301 V2 | 3.0 | thông số mẫu [https://x-light.vn/bi-gam-xlight-301-v2](https://x-light.vn/bi-gam-xlight-301-v2) |
| [Triton 2024](https://auto365.vn/mitsubishi-triton-2024-bi-gam-x-light-f10-hyper-2-0) | X-Light F10 Hyper 2.0 | 2.0 | bài case |
| [Outlander 2021](https://auto365.vn/mitsubishi-outlander-nang-cap-bi-gam-x-light-301-v2) | X-Light 301 V2 | 3.0 | bài case |
| [Pajero 2021](https://auto365.vn/mitsubishi-pajero-nang-cap-f10-pro-3-nhiet-mau) | X-Light F10 Pro | 3.0 | thông số mẫu [https://auto365.vn/bi-gam-xlight-f10-pro](https://auto365.vn/bi-gam-xlight-f10-pro) |
| [Outlander](https://auto365.vn/mitsubishi-outlander-do-bi-gam-va-camera-hanh-trinh) | Titan 301 | 3.0 | thông số mẫu [https://auto365.vn/bi-gam-titan-301](https://auto365.vn/bi-gam-titan-301) |


## Bản vá 11/11/2026 (tái kiểm 10/11)

| Mục | Giá trị |
|---|---|
| Dòng xe | 14 |
| Hồ sơ case | 15 |

- Mỗi thẻ hồ sơ hiển thị **mẫu bi gầm · lens** lấy từ dữ liệu từng ca (đối chiếu 100% với bảng lens đã duyệt 09/11 cho Hyundai/Mitsubishi/Ford/Honda). Không khôi phục bảng `#bang-tra` theo quyết định của chủ quản 10/11; FAQ 2.0/3.0 inch dẫn về khối hồ sơ `#xe-thuc-te`.
- Bộ lọc hãng đèn dựng từ dữ liệu từng ca (không suy từ tiêu đề): ca "SV 3.0 Max" thuộc AES.
- FAQ chi phí có link **danh sách mẫu bi gầm và giá tham khảo** (`https://auto365.vn/nang-cap-anh-sang-bi-gam#san-pham`), tách giá đèn theo mẫu khỏi báo giá hoàn thiện theo xe.
- Mobile: khoảng cuộn tới mục 124px (tiêu đề không bị thanh đầu trang che). Tìm xe bỏ dấu và bỏ chữ "Hybrid" (ví dụ "XL7 Hybrid" vẫn ra XL7).
- Bộ tìm chi nhánh: link "Xem tất cả" chuẩn hoá Hồ Chí Minh/HCM/Sài Gòn → `TP.HCM` khi sang danh bạ.
