# 02 — Hướng dẫn CMS/SEO hub Bi gầm BMW (V2.2)

| Mục | Giá trị |
|---|---|
| URL production đề xuất | https://auto365.vn/nang-cap-anh-sang-bi-gam/bmw |
| Preview | https://preview-365group.pages.dev/bi-gam/bmw/ |
| Title | Lắp bi gầm BMW: chọn đèn theo dòng xe X3, X5, X6, 3 Series | Auto365 |
| H1 | Lắp bi gầm BMW: chọn đèn theo từng dòng xe |
| Meta description | Tra cứu bi gầm BMW theo dòng và đời xe, xem 4 hồ sơ lắp đèn X-Light, GTR hoặc AES và tìm điểm Auto365 tư vấn cấu hình, chi phí. |
| Schema | CollectionPage, BreadcrumbList, ItemList (dòng xe, hồ sơ), FAQPage |
| Robots preview | noindex, nofollow — production bỏ |
| Dòng xe trên lưới | 13 dòng |
| Hồ sơ case | 5 bài đã đăng trên auto365.vn |

## Nguồn dữ liệu
- Case: bài đã đăng trên auto365.vn (sitemap blog 10/11/2026), mỗi thẻ link bài gốc.
- Ảnh thẻ dòng xe: bộ ảnh theo-hang-xe hoặc Wikimedia Commons (đã tách nền, ghi công dưới lưới xe).
- Khối "Vì sao chọn", chi nhánh, form: dùng chung với các hub hãng xe (build tự lấy).

## Build
```
node scripts/build-bi-gam-bmw.mjs
node scripts/export-bi-gam-bmw-docs.mjs
```
