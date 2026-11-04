# 02 — Hướng dẫn CMS/SEO V1.9: Hub Bi gầm Toyota

| Trường | Giá trị |
|---|---|
| Preview | https://preview-365group.pages.dev/bi-gam/toyota/ |
| Canonical production | https://auto365.vn/nang-cap-anh-sang-bi-gam/toyota |
| Source | `auto365/bi-gam/toyota/content-src.html` (sửa ở đây) |
| Build | `node scripts/build-bi-gam-toyota.mjs && node scripts/export-bi-gam-toyota-docs.mjs` |
| Nội dung + SHA | [01_Noi_dung_Bi_gam_Toyota.md](01_Noi_dung_Bi_gam_Toyota.md) |
| Master data | [04_Master_Data_Bi_gam_Toyota.csv](04_Master_Data_Bi_gam_Toyota.csv) |
| Ngày cập nhật | 04/11/2026 — anh Nguyễn Quang Đạo duyệt 04/11 (bản vá theo reviewer 03/11) |

## 1. Vai trò URL

| URL | Vai trò | Không làm |
|---|---|---|
| `/nang-cap-anh-sang-bi-gam` | Hub bi gầm chung (mẫu đèn, giá, so sánh) | — |
| `/nang-cap-anh-sang-bi-gam/theo-hang-xe` | Tra cứu theo hãng | — |
| **`/nang-cap-anh-sang-bi-gam/toyota`** | **Trang hãng Toyota: chọn dòng xe, chọn theo nhu cầu, tiếp cận bài hồ sơ, bài tư vấn dòng xe (qua thẻ dòng xe), cẩm nang đèn và điểm tư vấn** | Không liệt kê bảng giá/SKU (để bài tư vấn dòng xe, PDP làm); không canonical bài case về trang này |
| `/bi-gam-toyota-vios`, `-camry`, `-fortuner`, `-innova`, `-veloz-cross`, `-corolla-altis` | Bài tư vấn dòng xe: mẫu lắp được, giá tham khảo, case | — |
| Bài case trên auto365.vn | Chứng minh một xe / một cấu hình cụ thể | — |

Toyota chưa có trang dòng xe riêng dạng `/nang-cap-anh-sang-bi-gam/toyota/<dòng>` như VinFast. Thẻ dòng xe "Có hồ sơ" trỏ về bài tư vấn dòng xe đã đăng; riêng Corolla Cross và Hilux (chưa có bài tư vấn) trỏ về bài case.

## 2. Metadata

| Trường | Giá trị |
|---|---|
| Title | Bi gầm Toyota theo từng dòng xe: Vios, Camry, Fortuner, Innova \| Auto365 (72 ký tự) |
| Meta description (= og:description = CollectionPage.description) | Tra cứu bi gầm Toyota theo dòng xe, xem hồ sơ X-Light, GTR, AES đã lắp tại Auto365; kiểm tra cấu hình, chi phí và điểm tiếp nhận trước khi thi công. (148 ký tự) |
| H1 | Bi gầm Toyota theo từng dòng xe (một H1, phần sau hiển thị dòng dưới) |
| Robots | Preview: meta `noindex, nofollow, noarchive` và header `X-Robots-Tag: noindex` (Cloudflare Pages). **Production: meta `index, follow` và kiểm header không còn `X-Robots-Tag: noindex`** |
| OG image | Preview dùng `m-fortuner.webp`; production thay bằng URL ảnh trên CDN auto365.vn |

## 3. Liên kết dòng xe và tài nguyên

| Dòng xe | URL trong HTML | Loại | HTTP 03/11 |
|---|---|---|---:|
| Vios | https://auto365.vn/bi-gam-toyota-vios | Bài tư vấn | 200 |
| Corolla Altis | https://auto365.vn/bi-gam-toyota-corolla-altis | Bài tư vấn | 200 |
| Camry | https://auto365.vn/bi-gam-toyota-camry | Bài tư vấn | 200 |
| Fortuner | https://auto365.vn/bi-gam-toyota-fortuner | Bài tư vấn | 200 |
| Veloz Cross | https://auto365.vn/bi-gam-toyota-veloz-cross | Bài tư vấn | 200 |
| Innova, Innova Cross | https://auto365.vn/bi-gam-toyota-innova | Bài tư vấn (chung 2 thẻ) | 200 |
| Corolla Cross | https://auto365.vn/toyota-cross-do-den-bi-gam-f10-2-0-2024 | Bài case | 200 |
| Hilux | https://auto365.vn/toyota-hilux-2020-lap-bi-gam-aes-sv-30-max | Bài case | 200 |

**Tài nguyên tương đối (CMS upload / đổi đường dẫn khi đưa lên production):**

| Tài nguyên | Đường dẫn trên preview |
|---|---|
| Ảnh hero (Toyota Vios 2021 lắp X-Light F10 2.0 New tại Auto365) | `hinh/hero-toyota-vios-bi-gam-x-light-f10-2-new.webp` |
| Ảnh 15 dòng xe | `../theo-hang-xe/hinh/m-*.webp` |
| Ảnh 5 dòng đã ngừng bán (Yaris, Corolla Altis, Rush, Innova, Previa) | `hinh/m-{yaris,corolla-altis,rush,innova,previa}.webp` — ảnh Wikimedia Commons đã tách nền, giấy phép CC BY-SA: Yaris © Ethan Llamas (CC BY-SA 4.0), Corolla Altis © WC-QHS (CC BY-SA 4.0), Rush © LuvsMG481 (CC BY-SA 4.0), Innova © Raflypradana01 (CC BY-SA 4.0), Previa © Dinkun Chen (CC BY-SA 4.0). Production: giữ ghi công tác giả theo giấy phép hoặc thay bằng ảnh có quyền dùng |
| Ảnh "Vì sao chọn" | 5 ảnh chủ quản cung cấp 04/11: `hinh/ly-do-he-thong-90-chi-nhanh-33-tinh-thanh.webp`, `hinh/ly-do-tra-cuu-bao-hanh-dien-tu-phieu-ban-giao.webp`, `hinh/ly-do-ky-thuat-vien-lap-bi-gam.webp`, `hinh/ly-do-can-chinh-cos-toyota-yaris-cross-bang-test.webp`, `hinh/ly-do-tu-van-theo-tung-dong-toyota.webp`; 1 ảnh case Camry trên `auto365.vn/uploads/images/news/` |
| Logo 8 hãng đèn | Đã là URL tuyệt đối `auto365.vn/uploads/images/brand/...` |

Ảnh case và cẩm nang đã là URL tuyệt đối `auto365.vn/uploads/...`. Header/footer lấy từ shell trang VF6 (giống hub VinFast); khi tích hợp dùng header/footer production.

## 4. Schema (JSON-LD, sinh tự động khi build)

| Khối | Nguồn dữ liệu |
|---|---|
| CollectionPage | `dateModified` lấy từ dòng "Cập nhật"; `about` = Brand Toyota. `reviewedBy` (Nguyễn Quang Đạo) + `lastReviewed` 2026-11-04 lấy từ byline "Rà soát kỹ thuật" |
| BreadcrumbList | Trang chủ › Nâng cấp ánh sáng › Bi gầm › Toyota |
| ItemList `#dong-xe` | 9 thẻ dòng xe có hồ sơ (URL ở mục 3) |
| ItemList `#xe-thuc-te` | 22 **bài hồ sơ** lắp đặt (không phải 22 xe khác nhau) |
| FAQPage | 9 câu, đúng text hiển thị |

Kiểm bằng Schema Markup Validator (validator.schema.org), đối chiếu số phần tử với thẻ hiển thị.

## 5. Khối trên trang và nguồn

| Khối | Nguồn | Cập nhật |
|---|---|---|
| Sapo | Viết theo khung VinFast; liệt kê hãng đèn có trong tập case (X-Light, GTR, AES, Titan) | Sửa trong source |
| 20 dòng xe (Hatchback 2 · Sedan 3 · SUV 8 · MPV 6 · Bán tải 1 — Wigo, Yaris là hatchback theo toyota.com.vn) | Dải Toyota ở trang theo-hang-xe (LINEUP) | Mảng `M` |
| Bài hồ sơ (22) | Toàn bộ case Toyota trong dữ liệu trang theo-hang-xe (bài đã đăng auto365.vn), kiểm 200 ngày 03/11/2026 | Mảng `C` |
| Cẩm nang đèn bi gầm (8) | Bài kiến thức chung về đèn (đèn chính hay bi gầm, sáng yếu, hai bên sáng không đều, giảm sáng do tản nhiệt, hốc 2.0 inch, đi mưa, chọn mẫu); không lặp 6 bài tư vấn dòng xe vì đã gắn ở thẻ dòng xe | Mảng `G` |
| Box lưu ý | Hốc 2.0/3.0 inch (ví dụ từ case Vios 2021, Fortuner, Camry, Innova Cross); nguồn điện xe đời cũ và bản hybrid | **Chờ rà soát kỹ thuật** |
| Chọn theo nhu cầu (3 nhóm) | Đô thị/dịch vụ · gia đình/đi tỉnh · SUV/bán tải, mỗi nhóm 3 case thật | **Chờ rà soát kỹ thuật** |
| Vì sao chọn, chi nhánh, form | Khối chuẩn lấy từ theo-hang-xe khi build; `data-service`/`data-source-page` = "Bi gầm Toyota". | Tự đồng bộ |
| Hotline | 0365 365 911 | — |

## 6. Khi đăng production

1. Upload ảnh tương đối, đổi đường dẫn (mục 3); dùng header/footer production.
2. Đổi meta robots + kiểm header `X-Robots-Tag`, OG image; xoá khối "Kiểm tra nội bộ" (`#bgvf-internal-check` + script đi kèm) và script `#bgty-branch-preview` nếu không cần.
3. Gửi 1 lead test qua form trên production; kiểm `source_page`, `service`, `car_model`.
4. Kiểm schema theo mục 4; kiểm responsive desktop/tablet/mobile.
