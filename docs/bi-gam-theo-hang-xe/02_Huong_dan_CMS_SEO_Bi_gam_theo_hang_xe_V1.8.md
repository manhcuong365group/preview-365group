# 02 — Hướng dẫn CMS/SEO: Bi gầm theo hãng xe (V1.8)

Ngày: 19/10/2026 · Bản preview khớp SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_theo_hang_xe.md).

## 1. Vai trò URL

| Trường | Giá trị |
|---|---|
| URL đích | `https://auto365.vn/nang-cap-anh-sang-bi-gam/theo-hang-xe` (canonical đã đặt sẵn) |
| Vai trò | Trang con của hub `/nang-cap-anh-sang-bi-gam`: tra cứu theo hãng, dòng xe → dẫn tới case thực tế, bài tư vấn theo dòng xe và trang sản phẩm |
| Không cạnh tranh với | Hub bi gầm tổng (chọn theo sản phẩm), trang X-Light (thương hiệu đèn), trang VinFast VF3/VF6/VF7 (trang dòng xe riêng — thẻ dòng xe dẫn tới các trang này) |
| Preview | `https://preview-365group.pages.dev/bi-gam/theo-hang-xe/` — `noindex, nofollow, noarchive`; **bỏ meta robots khi đăng production** |

## 2. Thẻ meta

| Thẻ | Nội dung |
|---|---|
| Title (68 ký tự) | Bi gầm theo hãng xe: chọn mẫu theo dòng xe và case thực tế \| Auto365 |
| H1 | Bi gầm ô tô theo hãng xe |
| Meta description | Tra cứu bi gầm theo 20 hãng xe: dòng xe, mẫu đèn đã lắp thực tế (X-Light, GTR, AES), video, quy trình 7 bước và hệ thống 90+ chi nhánh Auto365. |
| Ngày | `dateModified` = ngày trong dòng "Cập nhật …" dưới sapo (build tự đọc). Mỗi lần sửa nội dung đổi ngày này thành ngày sửa. CMS điền `datePublished` khi đăng |

## 3. Schema (JSON-LD, build tự sinh)

`CollectionPage` (dateModified) · `BreadcrumbList` (3 cấp) · `Organization` (@id `https://auto365.vn/#organization`) · `ItemList` dòng xe có case · `ItemList` xe thực tế (toàn bộ case) · `ItemList` cẩm nang · `FAQPage` (5 câu, khớp chữ hiển thị). Link VinFast preview được đổi sang canonical `/nang-cap-anh-sang-bi-gam/vinfast/vfX` trong schema.

`reviewedBy` Nguyễn Quang Đạo, `lastReviewed` = ngày trong `<time class="bght-rv">` của byline (hiện 2026-10-19). Lần duyệt sau đổi ngày này.

## 4. Nguồn dữ liệu

| Dữ liệu | Nguồn | Cập nhật |
|---|---|---|
| Case "Xe thực tế" | Bài lắp đặt đã đăng trên auto365.vn (sitemap blog) | `node scripts/sync-bi-gam-theo-hang-xe.mjs` — chỉ thêm bài mới, liệt kê bài không khớp dòng xe để duyệt tay |
| Bài tư vấn theo dòng xe, cẩm nang | Chuyên mục `/tin-tuc/tu-van-nang-cap-theo-xe`, `/tin-tuc/cam-nang-anh-sang-o-to` | Cùng script sync |
| Giới thiệu hãng | Website chính thức của hãng tại Việt Nam (link hiển thị dưới đoạn giới thiệu, tra cứu 19/10/2026); Chevrolet, Daewoo: mẫu từng phân phối tại Việt Nam | Sửa tay `INTRO` / `ISRC` trong content-src |
| "Gợi ý ánh sáng", đề xuất đèn | Tính từ số case thực tế theo hãng (không phải khuyến nghị cố định) | Tự động |
| Form tư vấn | Khối nr-lead, lead.js production gửi `/api/leads`; chỉ báo thành công khi `{"success": true}` | Không sửa trên trang |
| 6 thẻ "Vì sao chọn" | Đồng bộ trang bi gầm X-Light (đã duyệt); 90+ chi nhánh theo `/chi-nhanh` | Sửa tay |

Không ghi giá trên trang này; giá xem trên trang sản phẩm.

## 5. Quy trình cập nhật

```bash
node scripts/sync-bi-gam-theo-hang-xe.mjs        # lấy bài mới + build
node scripts/build-bi-gam-theo-hang-xe.mjs       # khi sửa content-src.html
node scripts/export-bi-gam-theo-hang-xe-docs.mjs # xuất lại 01 + 04 (SHA mới)
```

Chỉ sửa `content-src.html`; `index.html` là bản build. Sau mỗi lần build phải xuất lại 01/04 để SHA khớp.

## 6. Kiểm tra trước khi đăng (L1–L8)

1. Bỏ `noindex`; canonical trả 200.
2. Hub `/nang-cap-anh-sang-bi-gam` và trang VinFast VF3/VF6/VF7 có link về trang này.
3. Kiểm 142 link auto365.vn trong trang trả 200 (kiểm 19/10/2026 trên preview: không có link lỗi).
4. Rich Results Test: FAQPage, BreadcrumbList, ItemList hợp lệ.
5. Mobile 375px không tràn ngang; popup đề xuất đèn mở/đóng được.
6. Nút gọi `tel:0365365911` đúng hotline.
7. Đo LCP/CLS trên production.
8. Bản CMS khớp SHA trong 01.
