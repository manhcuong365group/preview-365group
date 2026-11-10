# 02 — Hướng dẫn CMS/SEO hub Bi gầm Mazda (V2.2)

| Mục | Giá trị |
|---|---|
| URL production đề xuất | https://auto365.vn/nang-cap-anh-sang-bi-gam/mazda |
| Preview | https://preview-365group.pages.dev/bi-gam/mazda/ |
| Title | Lắp bi gầm Mazda: chọn đèn theo dòng xe Mazda 2, Mazda 6, CX-5, CX-8 | Auto365 |
| H1 | Lắp bi gầm Mazda: chọn đèn theo từng dòng xe |
| Meta description | Tra cứu bi gầm Mazda theo dòng và đời xe, xem 12 hồ sơ lắp đèn X-Light, GTR, AES hoặc Titan và tìm điểm Auto365 tư vấn cấu hình, chi phí. |
| Schema | CollectionPage, BreadcrumbList, ItemList (dòng xe, hồ sơ), FAQPage |
| Robots preview | noindex, nofollow — production bỏ |
| Dòng xe trên lưới | 9 dòng |
| Hồ sơ case | 12 bài đã đăng trên auto365.vn |

## Nguồn dữ liệu
- Case: bài đã đăng trên auto365.vn (sitemap blog 10/11/2026), mỗi thẻ link bài gốc.
- Ảnh thẻ dòng xe: bộ ảnh theo-hang-xe hoặc Wikimedia Commons (đã tách nền, ghi công dưới lưới xe).
- Khối "Vì sao chọn", chi nhánh, form: dùng chung với các hub hãng xe (build tự lấy).

## Build
```
node scripts/build-bi-gam-mazda.mjs
node scripts/export-bi-gam-mazda-docs.mjs
```
