# 02 — Hướng dẫn CMS/SEO hub Bi gầm Chevrolet (V2.2)

| Mục | Giá trị |
|---|---|
| URL production đề xuất | https://auto365.vn/nang-cap-anh-sang-bi-gam/chevrolet |
| Preview | https://preview-365group.pages.dev/bi-gam/chevrolet/ |
| Title | Lắp bi gầm Chevrolet: chọn đèn theo dòng xe Captiva, Orlando, Trailblazer, Colorado \| Auto365 |
| H1 | Lắp bi gầm Chevrolet: chọn đèn theo từng dòng xe |
| Meta description | Xem hồ sơ bi gầm Chevrolet Captiva, Orlando và Colorado; gửi đời xe để Auto365 kiểm tra cấu hình, phụ kiện và báo chi phí. |
| Schema | CollectionPage (reviewedBy, lastReviewed 2026-11-16), BreadcrumbList, ItemList (dòng xe, hồ sơ), FAQPage |
| Robots preview | noindex, nofollow — production bỏ |
| Dòng xe trên lưới | 11 dòng: Cruze, Spark, Aveo, Lacetti, Matiz · Captiva, Trailblazer, Trax · Orlando, Vivant · Colorado |
| Hồ sơ case | 5 bài đã đăng trên auto365.vn (Captiva 2015, Colorado, Orlando ×2, Trailblazer) |

## Nguồn dữ liệu
- Case: bài đã đăng trên auto365.vn (sitemap 16/11/2026), mỗi thẻ link bài gốc. Bỏ bài Chevrolet Cruze 2016 vì video ghi bi gầm "Taiwan", không thuộc hãng Auto365 phân phối.
- Mẫu đèn · lens trên thẻ: theo tiêu đề bài; lens 3.0 inch của Colorado (X-Light F10) theo xác nhận anh Đạo 16/11/2026. 18/11/2026 bỏ 2 ca GTR 2019 (bài nguồn đã gỡ, 404).
- Ảnh thẻ dòng xe: ảnh designer Auto365 (17/11/2026), file gốc PNG ở _src-media/bi-gam-chevrolet;
- Ảnh đầu trang: ảnh case Captiva LTZ 2015 trên CDN auto365.vn.
- Khối "Vì sao chọn", chi nhánh, form: dùng chung với các hub hãng xe (build tự lấy).

## Build
```
node scripts/build-bi-gam-chevrolet.mjs
node scripts/export-bi-gam-chevrolet-docs.mjs
```

## Quy ước kế thừa từ các hub hãng xe (bản vá 11/11/2026)
- Mỗi thẻ hồ sơ hiển thị **mẫu bi gầm · lens**; FAQ 2.0/3.0 inch dẫn về khối hồ sơ `#xe-thuc-te`.
- Bộ lọc hãng đèn dựng từ dữ liệu từng ca.
- FAQ chi phí có link danh sách mẫu bi gầm và giá tham khảo (`https://auto365.vn/nang-cap-anh-sang-bi-gam#san-pham`).
- Mobile: khoảng cuộn tới mục 124px; tìm xe bỏ dấu.
- Bộ tìm chi nhánh: "Xem tất cả" chuẩn hoá HCM → `TP.HCM`.
- Hồ sơ case ≤6 xếp một hàng ngang, cuộn bằng mũi tên.
