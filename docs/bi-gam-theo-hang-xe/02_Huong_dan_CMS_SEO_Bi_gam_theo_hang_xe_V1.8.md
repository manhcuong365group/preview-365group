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
| Meta description | Tra cứu bi gầm theo 21 hãng xe: dòng xe, mẫu đèn đã lắp thực tế (X-Light, GTR, AES), video, quy trình 7 bước và hệ thống 90+ chi nhánh Auto365. |
| Ngày | `dateModified` = ngày trong dòng "Cập nhật …" dưới sapo (build tự đọc). Mỗi lần sửa nội dung đổi ngày này thành ngày sửa. CMS điền `datePublished` khi đăng |

## 3. Schema (JSON-LD, build tự sinh)

`CollectionPage` (dateModified) · `BreadcrumbList` (3 cấp) · `Organization` (@id `https://auto365.vn/#organization`) · `ItemList` dòng xe có case · `ItemList` xe thực tế (toàn bộ case) · `ItemList` cẩm nang · `FAQPage` (6 câu, khớp chữ hiển thị). Link VinFast preview được đổi sang canonical `/nang-cap-anh-sang-bi-gam/vinfast/vfX` trong schema.

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

## 7. Bảng URL theo môi trường (F06-R2, kiểm 20/10/2026)

| Trang | Preview | Production (canonical / graph) | HTTP production 20/10 | Việc khi đăng |
|---|---|---|---:|---|
| Hub bi gầm | — | https://auto365.vn/nang-cap-anh-sang-bi-gam | 200 | Thêm link về trang theo-hang-xe |
| Theo hãng xe (trang này) | /bi-gam/theo-hang-xe/ | https://auto365.vn/nang-cap-anh-sang-bi-gam/theo-hang-xe | 404 | Tạo trang trên CMS đúng slug; bỏ `noindex` meta và header `X-Robots-Tag` của preview |
| VinFast VF3 | /bi-gam/vinfast-vf3/ | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/vf3 | 200 | — |
| VinFast VF6 | /bi-gam/vinfast/vf6/ | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/vf6 | 200 | — |
| VinFast VF7 | /bi-gam/vinfast/vf7/ | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/vf7 | 404 | Đăng VF7 trước hoặc cùng lúc; nếu chưa đăng thì bỏ VF7 khỏi `ItemList dong-xe` |

Trong HTML trang, link VinFast trỏ đường dẫn preview; build đổi sang URL production trong schema (`abs()`). Khi CMS nhận bản này, thay các href preview bằng URL production ở cột 3. Ảnh dùng đường dẫn tương đối `hinh/…`: CMS cần tải lên và đổi đường dẫn; `og:image` phải là URL tuyệt đối trên auto365.vn.

## 8. Registry dữ liệu (F04-R2)

`04_Master_Data_Bi_gam_theo_hang_xe.csv` xuất từ `content-src.html` theo các trường: `content_type` (dong-xe-co-ho-so / dong-xe-chi-co-tu-van / chua-co-ho-so / ho-so-xe / tu-van-dong-xe / sku-x-xe / kien-thuc), `brand_key`, `model_key`, `vehicle_year`, `guide_url`, `case_url`, `sku_id`, `sku_url`, `sku_status`, `source`, `published`, `checked_at`, `review_scope`.

- `vehicle_year` để trống có chủ đích: tiêu đề bài có thể chứa năm phiên bản đèn, chưa có trường đời xe riêng từ hồ sơ gốc.
- `sku_id` dò từ tiêu đề bài, `sku_status` ghi "chưa xác nhận phiên bản" cho tới khi Media/Kinh doanh đối chiếu.
- Trang không hiển thị năm xe. Dòng xe `chua-co-ho-so` mở popup "Mẫu bi gầm tham khảo": tối đa 3 mẫu kèm tên + link xe đã lắp, câu mở đầu ghi đúng nguồn (cùng hãng / trộn / hãng khác), không phải cấu hình đã xác nhận cho xe đó.

**Cập nhật 21/10/2026:** tạm bỏ link tới trang VinFast VF7 (production còn 404) theo chỉ đạo chủ quản; thẻ VF7 dẫn về bài case "VinFast VF7 Plus 2025 lắp bi gầm X-Light F10 Turbo V2 5500K". Khi VF7 production trả 200: trong `content-src.html` thêm lại `'../vinfast/vf7/'` làm phần tử thứ 7 của mục VF7 trong mảng `C`, rồi build.

## 9. Bản hiện hành (22/10/2026)

- 21 hãng · 219 thẻ dòng xe (161 chưa có hồ sơ) · 97 case · 24 cẩm nang (12 "Tư vấn dòng xe", 5 "Mẫu đèn × dòng xe", 7 "Kiến thức") · 6 FAQ (khớp FAQPage).
- Schema: `ItemList dong-xe` 24 mục chọn lọc; `ItemList xe-thuc-te` 97 mục, URL lấy từ `href` của thẻ case (build dừng nếu href rỗng/null/undefined); `ItemList cam-nang` 24 mục.
- `04` xuất từ registry `P` đầy đủ; `sku_status` 3 trạng thái: phiên bản ghi trong tiêu đề / tên chung xác nhận qua bài gốc / chưa đủ dữ kiện. Export dừng nếu có SKU mà không có slug.
- **Khi lên production:** xoá hẳn khối `<aside id="bght-internal-check">` và `<script id="bght-internal-check-js">` khỏi HTML đầu ra (không chỉ ẩn), bỏ `noindex`, đổi link VinFast theo bảng mục 7, thêm lại link VF7 khi trang VF7 trả 200.

**Cập nhật 22/10/2026:** VF3, VF6, VF7 production đều trả 200. Thẻ 3 dòng xe dẫn thẳng tới URL production (`https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/vf3|vf6|vf7`), khớp schema; đã thêm lại link VF7. Còn trang này (`/nang-cap-anh-sang-bi-gam/theo-hang-xe`) chờ đăng.
