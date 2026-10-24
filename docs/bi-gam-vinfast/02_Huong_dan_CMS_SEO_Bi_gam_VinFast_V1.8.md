# 02 — Hướng dẫn CMS/SEO V1.8: Hub Bi gầm VinFast

| Trường | Giá trị |
|---|---|
| Preview | https://preview-365group.pages.dev/bi-gam/vinfast/ |
| Canonical production | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast (URL đang 200 — bản cũ, sẽ thay bằng bản này) |
| Source | `auto365/bi-gam/vinfast/content-src.html` (sửa ở đây) |
| Build | `node scripts/build-bi-gam-vinfast.mjs && node scripts/export-bi-gam-vinfast-docs.mjs` |
| Nội dung + SHA | [01_Noi_dung_Bi_gam_VinFast.md](01_Noi_dung_Bi_gam_VinFast.md) |
| Master data | [04_Master_Data_Bi_gam_VinFast.csv](04_Master_Data_Bi_gam_VinFast.csv) |
| Ngày cập nhật | 24/10/2026 (bản vá theo phiếu reviewer R2 23/10/2026) |

## 1. Vai trò URL

| URL | Vai trò | Không làm |
|---|---|---|
| `/nang-cap-anh-sang-bi-gam` | Hub bi gầm chung (mẫu đèn, giá, so sánh) | — |
| `/nang-cap-anh-sang-bi-gam/theo-hang-xe` | Tra cứu theo 21 hãng | — |
| **`/nang-cap-anh-sang-bi-gam/vinfast`** | **Trang hãng VinFast: chọn dòng xe, chọn theo nhu cầu, tiếp cận bài hồ sơ và điểm tư vấn** | Không liệt kê bảng giá/SKU (để trang dòng xe, PDP làm); không canonical bài case về trang này |
| `/vinfast/vf3`, `/vf6`, `/vf7`, `/fadil`, `/limo-green`, `/lux-sa20` | Trang dòng xe: mẫu lắp được, giá, case riêng | — |
| Bài case trên auto365.vn | Chứng minh một xe / một cấu hình cụ thể | — |

## 2. Metadata

| Trường | Giá trị |
|---|---|
| Title | Bi gầm VinFast theo từng dòng xe: VF 3, VF 6, VF 7, Limo Green \| Auto365 (72 ký tự) |
| Meta description | Chọn dòng xe VinFast để xem cấu hình bi gầm, hình ảnh xe thực tế đã lắp tại Auto365 (X-Light, GTR, AES) và nhận tư vấn tại hệ thống 90+ chi nhánh. (146 ký tự) |
| H1 | Bi gầm VinFast theo từng dòng xe (một H1, phần sau hiển thị dòng dưới) |
| Robots | Preview: meta `noindex, nofollow, noarchive` và header `X-Robots-Tag: noindex` (Cloudflare Pages). **Production: meta `index, follow` và kiểm header không còn `X-Robots-Tag: noindex`** — đổi riêng meta không đủ |
| OG image | Production thay bằng URL ảnh trên CDN auto365.vn |

## 3. Map đường dẫn preview → production (P0)

Mọi link tới trang dòng xe trong nội dung **đã là URL tuyệt đối production** từ bản 23/10 (thẻ dòng xe, CTA khối nhu cầu, ItemList, 01, 04). Không còn href tương đối kiểu `vf6/`, `../vinfast-vf3/`.

| Dòng xe | URL trong HTML | HTTP 22/10/2026 |
|---|---|---:|
| VF 3 | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/vf3 | 200 |
| VF 6 | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/vf6 | 200 |
| VF 7 | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/vf7 | 200 |
| Limo Green | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/limo-green | **404** |
| Fadil | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/fadil | **404** |
| Lux SA2.0 | https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast/lux-sa20 | **404** |

**Điều kiện phát hành:** đăng đủ 3 trang 404 (kiểm HTTP 200, canonical, robots, nội dung) **trước hoặc cùng lúc** với hub. Nếu chưa đăng kịp, đổi 3 thẻ đó sang "Liên hệ tư vấn" (bỏ khỏi mảng có link và ItemList) rồi build lại — không để link 404 lên production. Lux A2.0 và Lux SA2.0 là hai thẻ khác nhau.

Trên preview, bấm 3 thẻ này sẽ ra trang 404 của production — đúng như dự kiến cho tới khi đăng.

**Tài nguyên tương đối (CMS phải upload / đổi đường dẫn khi đưa lên production):**

| Tài nguyên | Đường dẫn trên preview |
|---|---|
| Ảnh hero 3 xe | `hinh/hero-vinfast-3-xe.webp` |
| Ảnh Lux A2.0, President | `hinh/xe-vinfast-lux-a20.webp`, `hinh/xe-vinfast-president.webp` |
| Ảnh 13 dòng xe khác | `../theo-hang-xe/hinh/m-*.webp` |
| 6 ảnh khối "Vì sao chọn" (ảnh xe VinFast thật tại Auto365, lấy từ trang dòng xe) | `limo-green/hinh/ly-do-limo-green-chi-nhanh.webp`, `vf6/hinh/ly-do-vf6-phieu-ban-giao.webp`, `fadil/hinh/ly-do-fadil-ban-giao.webp`, `vf6/hinh/kiem-tra-duong-cat-cos-bang-test.webp`, `fadil/hinh/ly-do-fadil-tu-van-cau-hinh.webp`, `vf6/hinh/ly-do-vf6-tu-van-cau-hinh.webp` — cùng ảnh với các trang dòng xe, dùng chung URL khi các trang đó lên production |
| Logo 8 hãng đèn | Đã là URL tuyệt đối `auto365.vn/uploads/images/brand/...` |
| Ảnh VF e34, Fadil, Lux SA2.0 | `../vinfast-vf3/hinh/xe-vinfast-*.{jpg,webp}` |

Ảnh case và cẩm nang đã là URL tuyệt đối `auto365.vn/uploads/...`.

**Header/footer:** lấy từ shell trang VF6 và còn nhiều link sang `v2.auto365.vn`. Khi tích hợp vào layout production, dùng header/footer của production; không find/replace mù toàn bộ URL tài nguyên — asset nào vẫn dùng `v2` phải được IT xác nhận.

## 4. Schema (JSON-LD, sinh tự động khi build)

| Khối | Nguồn dữ liệu |
|---|---|
| CollectionPage | `dateModified` lấy từ dòng "Cập nhật"; `about` = Brand VinFast; `reviewedBy` (Nguyễn Quang Đạo) + `lastReviewed` lấy từ byline "Rà soát kỹ thuật" |
| BreadcrumbList | Trang chủ › Nâng cấp ánh sáng › Bi gầm › VinFast (khớp breadcrumb hiển thị) |
| ItemList `#dong-xe` | 6 thẻ dòng xe có trang riêng (URL production) |
| ItemList `#xe-thuc-te` | 10 **bài hồ sơ** lắp đặt (không phải 10 xe khác nhau — chưa có case_id để xác nhận trùng xe) |
| FAQPage | 6 câu, đúng text hiển thị |

**Cách kiểm schema:** kiểm cú pháp và quan hệ bằng Schema Markup Validator (validator.schema.org), đối chiếu số phần tử với thẻ hiển thị. Không dùng Rich Results Test làm tiêu chí đạt cho CollectionPage/ItemList (không phải loại rich result), và FAQ rich result Google đã ngừng hiển thị từ 05/2026 — giữ FAQPage vì khớp nội dung, không kỳ vọng hiển thị rich result.

## 5. Khối trên trang và nguồn

| Khối | Nguồn | Cập nhật |
|---|---|---|
| Sapo (kiêm trả lời nhanh) | Chủ quản viết 23/10; R2 thu hẹp còn X-Light, GTR (tập hồ sơ đang dẫn chưa có bài AES trên VinFast) | Sửa trong source |
| Vì sao chọn Auto365 (6 thẻ ảnh + logo hãng đèn) | Khối của theo-hang-xe, build tự lấy (cân lại 1 thẻ </div> dư ở khối gốc); riêng trang VinFast thay 6 ảnh bằng ảnh xe VinFast và thay câu "hệ điện 12V/24V" bằng "hệ điện phụ trợ và điện áp cấp nguồn theo tài liệu của từng xe" | Sửa ở theo-hang-xe rồi build lại |
| 18 dòng xe | Dải sản phẩm VinFast; ảnh mục 3 | Mảng `M` |
| Chọn theo nhu cầu (3 nhóm) | Phần tư vấn nhu cầu đã duyệt ở các trang dòng xe + case thật | Sửa trong source |
| Bài hồ sơ (10) | Khối case trên trang VF3 production, **đã bỏ bài tư vấn `/bi-gam-vinfast-fadil`** (chuyển sang cẩm nang) | Mảng `C` |
| Cẩm nang (5) | Chọn theo VinFast / xe điện / vùng sáng / hốc đèn / kiểm tra (không còn lấy 8 bài mới nhất toàn hệ thống) | Mảng `G` |
| Chi nhánh, form | Khối chuẩn lấy từ theo-hang-xe khi build; thêm câu nhận diện Trụ Sở Chính; `data-service`/`data-source-page` = "Bi gầm VinFast" | Tự đồng bộ |
| Nhãn nhu cầu trong form | Hiển thị "Đèn – Bi gầm, Bi LED"; giá trị gửi API giữ `Đèn – Bi LED` (hợp đồng backend không đổi) | Build tự thay ở form nội dung + nút nổi |
| Hotline | 0365 365 911 | — |

## 6. Liên kết (kiểm 22/10/2026)

| Nhóm | Kết quả |
|---|---|
| Link auto365.vn trong nội dung (case, cẩm nang, breadcrumb, tin tức, trang dòng xe) | 200, trừ 3 trang dòng xe ở mục 3 |
| `/xe-thuc-te` | 404 → nút "Xem tất cả case" dùng `/tin-tuc?q=VinFast` (200) |
| Bài "Quy định lắp bi gầm ô tô" | Chưa có URL production → FAQ đăng kiểm bỏ câu dẫn, thay bằng nhắc đối chiếu quy định hiện hành |

## 7. Khi đăng production

1. Đăng 3 trang dòng xe 404, hoặc đổi trạng thái 3 thẻ (mục 3).
2. Upload ảnh tương đối, đổi đường dẫn (mục 3); dùng header/footer production.
3. Đổi meta robots + kiểm header `X-Robots-Tag`, OG image; xoá khối "Kiểm tra nội bộ" (`#bgvf-internal-check` + script đi kèm).
4. Gửi 1 lead test qua form trên production; kiểm `source_page`, `service`, `car_model`, URL nguồn và CRM nhận đúng.
5. Kiểm schema theo mục 4; kiểm responsive desktop/tablet/mobile.
