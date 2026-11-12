# 02 — Hướng dẫn CMS/SEO hub Bi gầm Mazda (V2.2)

| Mục | Giá trị |
|---|---|
| URL production đề xuất | https://auto365.vn/nang-cap-anh-sang-bi-gam/mazda |
| Preview | https://preview-365group.pages.dev/bi-gam/mazda/ |
| Title | Lắp bi gầm Mazda: chọn đèn theo dòng xe Mazda 2, Mazda 6, CX-5, CX-8 \| Auto365 |
| H1 | Lắp bi gầm Mazda: chọn đèn theo từng dòng xe |
| Meta description | Tra cứu bi gầm Mazda theo dòng và đời xe, xem 13 hồ sơ lắp đèn X-Light, GTR, AES hoặc Titan và tìm điểm Auto365 tư vấn cấu hình, chi phí. |
| Schema | CollectionPage, BreadcrumbList, ItemList (dòng xe, hồ sơ), FAQPage |
| Robots preview | noindex, nofollow — production bỏ |
| Dòng xe trên lưới | 13 dòng |
| Hồ sơ case | 13 bài đã đăng trên auto365.vn |

## Nguồn dữ liệu
- Case: bài đã đăng trên auto365.vn (sitemap blog 10/11/2026), mỗi thẻ link bài gốc.
- Ảnh thẻ dòng xe: bộ ảnh theo-hang-xe hoặc Wikimedia Commons (đã tách nền, ghi công dưới lưới xe).
- Khối "Vì sao chọn", chi nhánh, form: dùng chung với các hub hãng xe (build tự lấy).

## Build
```
node scripts/build-bi-gam-mazda.mjs
node scripts/export-bi-gam-mazda-docs.mjs
```


## Bản vá 11/11/2026 (tái kiểm 10/11)

| Mục | Giá trị |
|---|---|
| Dòng xe | 13 |
| Hồ sơ case | 13 |

- Mỗi thẻ hồ sơ hiển thị **mẫu bi gầm · lens** lấy từ dữ liệu từng ca (đối chiếu 100% với bảng lens đã duyệt 09/11 cho Hyundai/Mitsubishi/Ford/Honda). Không khôi phục bảng `#bang-tra` theo quyết định của chủ quản 10/11; FAQ 2.0/3.0 inch dẫn về khối hồ sơ `#xe-thuc-te`.
- Bộ lọc hãng đèn dựng từ dữ liệu từng ca (không suy từ tiêu đề): ca "SV 3.0 Max" thuộc AES.
- FAQ chi phí có link **danh sách mẫu bi gầm và giá tham khảo** (`https://auto365.vn/nang-cap-anh-sang-bi-gam#san-pham`), tách giá đèn theo mẫu khỏi báo giá hoàn thiện theo xe.
- Mobile: khoảng cuộn tới mục 124px (tiêu đề không bị thanh đầu trang che). Tìm xe bỏ dấu và bỏ chữ "Hybrid" (ví dụ "XL7 Hybrid" vẫn ra XL7).
- Bộ tìm chi nhánh: link "Xem tất cả" chuẩn hoá Hồ Chí Minh/HCM/Sài Gòn → `TP.HCM` khi sang danh bạ.
