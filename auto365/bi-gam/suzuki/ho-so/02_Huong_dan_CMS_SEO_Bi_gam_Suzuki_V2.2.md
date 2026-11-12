# 02 — Hướng dẫn CMS/SEO hub Bi gầm Suzuki (V2.2)

| Mục | Giá trị |
|---|---|
| URL production đề xuất | https://auto365.vn/nang-cap-anh-sang-bi-gam/suzuki |
| Preview | https://preview-365group.pages.dev/bi-gam/suzuki/ |
| Title | Lắp bi gầm Suzuki: chọn đèn theo dòng xe XL7, Ertiga, Swift, Vitara \| Auto365 |
| H1 | Lắp bi gầm Suzuki: chọn đèn theo từng dòng xe |
| Meta description | Tra cứu bi gầm Suzuki theo dòng và đời xe, xem 5 hồ sơ lắp đèn X-Light, GTR hoặc AES và tìm điểm Auto365 tư vấn cấu hình, chi phí. |
| Schema | CollectionPage, BreadcrumbList, ItemList (dòng xe, hồ sơ), FAQPage |
| Robots preview | noindex, nofollow — production bỏ |
| Dòng xe trên lưới | 8 dòng |
| Hồ sơ case | 5 bài đã đăng trên auto365.vn |

## Nguồn dữ liệu
- Case: bài đã đăng trên auto365.vn (sitemap blog 10/11/2026), mỗi thẻ link bài gốc.
- Ảnh thẻ dòng xe: bộ ảnh theo-hang-xe hoặc Wikimedia Commons (đã tách nền, ghi công dưới lưới xe).
- Khối "Vì sao chọn", chi nhánh, form: dùng chung với các hub hãng xe (build tự lấy).

## Build
```
node scripts/build-bi-gam-suzuki.mjs
node scripts/export-bi-gam-suzuki-docs.mjs
```


## Bản vá 11/11/2026 (tái kiểm 10/11)

| Mục | Giá trị |
|---|---|
| Dòng xe | 8 |
| Hồ sơ case | 5 |

- Mỗi thẻ hồ sơ hiển thị **mẫu bi gầm · lens** lấy từ dữ liệu từng ca (đối chiếu 100% với bảng lens đã duyệt 09/11 cho Hyundai/Mitsubishi/Ford/Honda). Không khôi phục bảng `#bang-tra` theo quyết định của chủ quản 10/11; FAQ 2.0/3.0 inch dẫn về khối hồ sơ `#xe-thuc-te`.
- Bộ lọc hãng đèn dựng từ dữ liệu từng ca (không suy từ tiêu đề).
- FAQ chi phí có link **danh sách mẫu bi gầm và giá tham khảo** (`https://auto365.vn/nang-cap-anh-sang-bi-gam#san-pham`), tách giá đèn theo mẫu khỏi báo giá hoàn thiện theo xe.
- Mobile: khoảng cuộn tới mục 124px (tiêu đề không bị thanh đầu trang che). Tìm xe bỏ dấu và bỏ chữ "Hybrid" (ví dụ "XL7 Hybrid" vẫn ra XL7).
- Bộ tìm chi nhánh: link "Xem tất cả" chuẩn hoá Hồ Chí Minh/HCM/Sài Gòn → `TP.HCM` khi sang danh bạ.
