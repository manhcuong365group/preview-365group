# 02 — Hướng dẫn CMS/SEO V1.9: Hub Bi gầm Kia

| Trường | Giá trị |
|---|---|
| Preview | https://preview-365group.pages.dev/bi-gam/kia/ |
| Canonical production | https://auto365.vn/nang-cap-anh-sang-bi-gam/kia |
| Source | `auto365/bi-gam/kia/content-src.html` (sửa ở đây) |
| Build | `node scripts/build-bi-gam-kia.mjs && node scripts/export-bi-gam-kia-docs.mjs` |
| Nội dung + SHA | [01_Noi_dung_Bi_gam_Kia.md](01_Noi_dung_Bi_gam_Kia.md) |
| Master data | [04_Master_Data_Bi_gam_Kia.csv](04_Master_Data_Bi_gam_Kia.csv) |
| Ngày cập nhật | 04/11/2026 (bản dựng đầu, theo khung hub Bi gầm Toyota) |

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
| Ảnh hero (Kia Carnival 2004 lắp X-Light 301 V2 tại Auto365) | `hinh/hero-kia-carnival-bi-gam-x-light-301-v2.webp` |
| Ảnh 11 dòng xe | `../theo-hang-xe/hinh/m-*.webp` |
| Ảnh Forte, Sedona (đã ngừng bán) | `hinh/m-forte.webp`, `hinh/m-sedona.webp` — Wikimedia Commons đã tách nền: Forte © Mr.choppers (CC BY-SA 3.0), Sedona — Bull-Doser (Public domain). Production: giữ ghi công hoặc thay ảnh có quyền dùng |
| Ảnh "Vì sao chọn" | `hinh/ly-do-ky-thuat-vien-lap-bi-gam.webp` + 5 ảnh case Kia trên `auto365.vn/uploads/images/news/` (Carnival 2025, Carens 2023, Morning 2016, Sportage 2022, Sedona 2017) |

## 4. Schema (JSON-LD, sinh tự động khi build)

| Khối | Nguồn dữ liệu |
|---|---|
| CollectionPage | `dateModified` từ dòng "Cập nhật"; `about` = Brand Kia. Chưa có `reviewedBy` — thêm byline `bgvf-rv` khi có người rà soát kỹ thuật |
| BreadcrumbList | Trang chủ › Nâng cấp ánh sáng › Bi gầm › Kia |
| ItemList `#dong-xe` | 9 thẻ dòng xe có hồ sơ |
| ItemList `#xe-thuc-te` | 14 hồ sơ: 12 bài case + 2 video (không phải 14 xe khác nhau) |
| FAQPage | 9 câu, đúng text hiển thị |

## 5. Khối trên trang và nguồn

| Khối | Nguồn |
|---|---|
| 13 dòng xe (Hatchback 1 · Sedan 4 · SUV 4 · MPV 4) | Dải Kia ở trang theo-hang-xe; giữ dòng đã ngừng bán có hồ sơ (Forte, Sedona), bỏ dòng ngừng bán không có dữ liệu |
| Hồ sơ (14) | 12 bài case + 2 video Kia (Carnival AES SV 3.0 Max mặt dưỡng in 3D, Sedona combo GTR G1 Ultra) đã đăng auto365.vn |
| Box lưu ý — nguồn điện | Sportage 2022, Carnival 2022 bản Premium: link giắc chuyển LED gầm chuyên dụng (trang phụ kiện auto365.vn) |
| Cẩm nang đèn bi gầm (8) | Bài kiến thức chung về đèn, không lặp bài tư vấn dòng xe |
| FAQ HCM | Đề xuất Auto365.vn - Trụ Sở Chính (4/4/1/7 Đường Số 3, Phường Hiệp Bình), link bản đồ, hotline 0365 365 911 |
| Vì sao chọn, chi nhánh, form | Khối chuẩn lấy từ theo-hang-xe khi build; `data-service` = "Bi gầm Kia". Chưa duyệt: thẻ "Tư vấn đúng theo từng xe" bỏ câu "do kỹ thuật viên … kiểm duyệt" |

## 6. Khi đăng production

1. Upload ảnh tương đối, đổi đường dẫn; dùng header/footer production.
2. Đổi robots, OG image; xoá khối "Kiểm tra nội bộ" và script `#bgkia-branch-preview` nếu không cần.
3. Gửi lead test; kiểm schema; kiểm responsive.
