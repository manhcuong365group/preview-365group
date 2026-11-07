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
| Title | Bi gầm Mitsubishi theo từng dòng xe: Xpander, Outlander, Triton, Xforce \| Auto365 |
| Meta description | Tra cứu bi gầm Mitsubishi theo dòng xe, xem hồ sơ X-Light, GTR, AES đã lắp tại Auto365; kiểm tra cấu hình, chi phí và điểm tiếp nhận trước khi thi công. |
| H1 | Bi gầm Mitsubishi theo từng dòng xe |
| Robots | Preview: `noindex, nofollow, noarchive` + header `X-Robots-Tag: noindex`. **Production: `index, follow`, kiểm header không còn noindex** |
| OG image | Preview dùng `m-xpander-cross.webp`; production thay bằng ảnh trên CDN auto365.vn (đề xuất MIT-IMG-01) |

## 3. Schema (JSON-LD, sinh tự động khi build)

| Khối | Nguồn dữ liệu |
|---|---|
| CollectionPage | `dateModified` từ dòng "Cập nhật" (2026-11-07); `about` = Brand Mitsubishi. `reviewedBy` (Nguyễn Quang Đạo) + `lastReviewed` 2026-11-07 lấy từ byline "Rà soát kỹ thuật" |
| BreadcrumbList | Trang chủ › Nâng cấp ánh sáng › Bi gầm › Mitsubishi |
| ItemList `#dong-xe` | 8 thẻ dòng xe có link |
| ItemList `#xe-thuc-te` | 15 bài case (không phải 15 xe khác nhau đã xác minh; chưa có case_id) |
| FAQPage | 9 câu, đúng text hiển thị |

## 4. Khối trên trang và nguồn

| Khối | Nguồn |
|---|---|
| 13 dòng xe (Hatchback 1 · Sedan 1 · SUV 5 · MPV 5 · Bán tải 1) | Dải Mitsubishi ở trang theo-hang-xe + dòng đã ngừng bán/ít phổ biến nhưng có case; dòng không có dữ liệu thì bỏ |
| Hồ sơ (15) | Bài case bi gầm Mitsubishi đã đăng auto365.vn, đối chiếu sitemap 07/11/2026; hãng đèn: AES, GTR, Titan, X-Light. Không tính: đèn gầm dạng rời, bi LED, camera, video trùng nội dung bài viết, bài "mẫu đèn × dòng xe" không nêu xe cụ thể |
| Box lưu ý | Ví dụ kích thước hốc/đời xe lấy từ tiêu đề bài case (2.0 inch = F10 2.0 New / AES SV 2.0 Max; 3.0 inch = AES SV 3.0 Max) |
| Gợi ý theo nhu cầu (3 nhóm) | Link "Đã lắp" là bài case trong danh sách hồ sơ |
| Bảng tra "Xe Mitsubishi đã lắp mẫu bi gầm nào?" (`#bang-tra`, bổ sung GEO 07/11, anh Đạo duyệt 07/11) | Sinh từ danh sách case: dòng xe, đời/phiên bản theo tiêu đề bài (bài không nêu đời chỉ ghi dòng xe; 3 bài lấy năm ghi rõ trong nội dung), mẫu đèn, lens chỉ khi tên mẫu nêu rõ (F10 2.0 New, AES SV 2.0/3.0 Max), link bài |
| FAQ "Xe Mitsubishi nên chọn bi gầm 2.0 hay 3.0 inch?" | Dẫn đúng các xe đã lắp lens 2.0/3.0 trong bảng tra (bổ sung GEO 07/11) |
| Cẩm nang đèn bi gầm (8) | Bài kiến thức chung, dùng chung với hub Kia |
| FAQ HCM | Auto365.vn - Trụ Sở Chính (4/4/1/7 Đường Số 3, Phường Hiệp Bình), link bản đồ, hotline 0365 365 911 |
| Vì sao chọn, chi nhánh, form | Khối chuẩn lấy từ theo-hang-xe khi build; `data-service` = "Bi gầm Mitsubishi"; thẻ tư vấn giữ câu trung tính (không nêu tên người duyệt trong khối dùng chung); người rà soát ghi ở byline và schema |

## 5. Image Pack V2.2 (07/11/2026)

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
