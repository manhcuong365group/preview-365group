# 02 — Hướng dẫn CMS/SEO V1.8: Hub Bi gầm VinFast

| Trường | Giá trị |
|---|---|
| Preview | https://preview-365group.pages.dev/bi-gam/vinfast/ |
| Canonical production | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast (URL đang 200 — bản cũ, sẽ thay bằng bản này) |
| Source | `auto365/bi-gam/vinfast/content-src.html` (sửa ở đây) |
| Build | `node scripts/build-bi-gam-vinfast.mjs && node scripts/export-bi-gam-vinfast-docs.mjs` |
| Nội dung + SHA | [01_Noi_dung_Bi_gam_VinFast.md](01_Noi_dung_Bi_gam_VinFast.md) |
| Master data | [04_Master_Data_Bi_gam_VinFast.csv](04_Master_Data_Bi_gam_VinFast.csv) |
| Ngày cập nhật | 22/10/2026 |

## 1. Vai trò URL

| URL | Vai trò | Không làm |
|---|---|---|
| `/nang-cap-anh-sang-bi-gam` | Hub bi gầm chung (mẫu đèn, giá, so sánh) | — |
| `/nang-cap-anh-sang-bi-gam/theo-hang-xe` | Tra cứu theo 21 hãng | — |
| **`/nang-cap-anh-sang-bi-gam/vinfast`** | **Trang hãng VinFast: chọn dòng xe → trang dòng xe hoặc tư vấn; case VinFast; câu hỏi riêng xe điện** | Không liệt kê bảng giá/mẫu đèn (để trang dòng xe và hub làm) |
| `/vinfast/vf3`, `/vf6`, `/vf7`, `/fadil`, `/limo-green`, `/lux-sa20` | Trang dòng xe: mẫu đèn lắp được, giá, case riêng | — |

## 2. Metadata

| Trường | Giá trị |
|---|---|
| Title | Bi gầm VinFast theo từng dòng xe: VF 3, VF 6, VF 7, Limo Green \| Auto365 (72 ký tự) |
| Meta description | Chọn dòng xe VinFast để xem cấu hình bi gầm, hình ảnh xe thực tế đã lắp tại Auto365 (X-Light, GTR, AES) và nhận tư vấn tại hệ thống 90+ chi nhánh. (146 ký tự) |
| H1 | Bi gầm VinFast theo từng dòng xe (một H1, phần sau hiển thị dòng dưới) |
| Robots | Preview: `noindex, nofollow, noarchive` — **production đổi thành `index, follow`** |
| OG image | Production thay bằng URL ảnh trên CDN auto365.vn |

## 3. Schema (JSON-LD, sinh tự động khi build)

| Khối | Nguồn dữ liệu |
|---|---|
| CollectionPage | `dateModified` lấy từ dòng "Cập nhật" trên trang; `about` = Brand VinFast. Khi có kiểm duyệt kỹ thuật: thêm `reviewedBy` + `lastReviewed` và byline hiển thị cùng ngày |
| BreadcrumbList | Trang chủ › Nâng cấp ánh sáng › Bi gầm › VinFast (khớp breadcrumb hiển thị) |
| ItemList `#dong-xe` | Thẻ dòng xe có trang riêng (6) |
| ItemList `#xe-thuc-te` | 11 case, URL bài trên auto365.vn |
| FAQPage | 4 câu, đúng text hiển thị |

## 4. Khối trên trang và nguồn

| Khối | Nguồn | Cập nhật |
|---|---|---|
| 18 dòng xe | Dải sản phẩm VinFast; ảnh xe từ `theo-hang-xe/hinh`, `vinfast-vf3/hinh`; Lux A2.0 (bảng màu) và President (render) từ vinfastauto.com, cắt/tách nền | Thêm dòng xe: sửa mảng `M` trong source |
| Xe thực tế (11) | Khối case trên `auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/vf3` (đã đăng) | Sửa mảng `C` |
| Cẩm nang (8) | Khối cẩm nang trên trang VF3 production (bài bi gầm mới nhất) | Sửa mảng `G` |
| Chi nhánh, form tư vấn | Khối chuẩn lấy từ theo-hang-xe khi build | Tự đồng bộ |
| Hotline | 0365 365 911 (đường dây ánh sáng/phụ kiện) | — |

## 5. Liên kết (kiểm 22/10/2026)

| Nhóm | Kết quả |
|---|---|
| 25 link auto365.vn trong nội dung (case, cẩm nang, breadcrumb, tin tức, trang dòng xe) | 200 |
| `/xe-thuc-te` | 404 → đã đổi nút "Xem tất cả case" sang `/tin-tuc?q=VinFast` (200) |
| Trang dòng xe production `/vinfast/vf3`, `/vf6`, `/vf7` | 200 |
| `/vinfast/fadil`, `/limo-green`, `/lux-sa20` | 404 — CMS đăng 3 trang này trước hoặc cùng lúc với hub |

## 6. Khi đăng production

1. Đăng 3 trang con còn 404 (mục 5).
2. Đổi robots, OG image; xoá khối "Kiểm tra nội bộ" (`#bgvf-internal-check` + script đi kèm).
3. Gửi 1 lead test qua form, xác nhận `{"success": true}` và CRM nhận đúng `data-service="Bi gầm VinFast"`.
4. Kiểm Rich Results Test cho CollectionPage/ItemList/FAQPage.
