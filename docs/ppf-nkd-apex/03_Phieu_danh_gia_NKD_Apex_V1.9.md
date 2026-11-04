# 03 — Phiếu tự chấm PPF NKD Apex (V1.9)

- Nguồn: `auto365/ppf-nkd-apex/index.html` — SHA-256 `d1b59a250786bf0ff430b86c117ae6f37245ffe6472a9eab87e0815186ff7bad` (cùng phiên bản với 01, 02, 03)
- Preview: https://preview-365group.pages.dev/ppf-nkd-apex/ (noindex, follow — đúng chủ đích staging)
- Kiểm duyệt: Đặng Minh Hoàng (user xác nhận đã duyệt) · lastReviewed 2026-11-03 · dateModified 2026-11-04

## Xử lý phiếu tái kiểm R2 (03/11/2026)

| Mã | Trạng thái | Việc đã làm |
|---|---|---|
| Phạm vi giá/VAT | Đã sửa | Kinh doanh chốt 04/11: giá toàn xe, gồm phim + công + VAT, áp dụng các cơ sở; đồng bộ trả lời nhanh, bảng, FAQ, Offer (valueAddedTaxIncluded) |
| Bảo hành | Một phần | Ghi 3 năm theo điều kiện NKD, tính từ ngày thi công. **Còn thiếu**: danh sách trường hợp loại trừ (chờ chính sách NKD) |
| Nguồn kỹ thuật | Đã có nguồn | Catalog NKD do hãng cung cấp (user 04/11); câu chữ thu hẹp đúng phạm vi catalog (vật liệu "catalog ghi", QUV "thử nghiệm", tự phục hồi "trang thông số không có chỉ tiêu"). Gửi kèm PDF khi tái kiểm |
| Reviewer | Đã duyệt | Anh Đặng Minh Hoàng duyệt (user xác nhận 04/11) |
| Link hub 404 | Đã sửa | Đổi `/ppf-o-to` → `/ppfwrap-film` (đang chạy) trong bài + breadcrumb |
| Ảnh | Đã sửa | Ảnh chụp tại Auto365; caption ghi kỹ thuật viên Auto365; ảnh hộp phim có caption, không gắn mã cụ thể; thêm width/height |
| Đa thiết bị | Đã kiểm (giả lập) | 360×800, 390×844, 768×1024, 820×1180, desktop: scrollWidth ≤ viewport ở cả 2 trang (04/11). Chưa test máy thật |
| Form | Một phần | Validate rỗng/số sai/consent OK; fallback method/action. Gửi lead thật chờ production |

## Tự chấm (04/11/2026)

| Mã | Tối đa | Điểm | Căn cứ / còn thiếu |
|---|---:|---:|---|
| C1 | 10 | 9,4 | Giá/VAT/phạm vi do Kinh doanh chốt; thông số theo catalog hãng |
| C2 | 10 | 9,3 | Thiếu danh sách loại trừ bảo hành |
| C3 | 10 | 9,5 | Văn trung tính, không so sánh/upsell |
| S1 | 10 | 9,5 | Intent SKU rõ; URL production chờ đăng |
| S2 | 10 | 9,5 | 1 H1, mục lục, title/meta, FAQ = schema |
| S3 | 10 | 9,2 | Hub tạm `/ppfwrap-film` đến khi `/ppf-o-to` lên production |
| G1 | 10 | 9,4 | Trả lời nhanh có giá toàn xe gồm VAT, bảo hành từ ngày thi công |
| G2 | 10 | 9,1 | Giới hạn PPF, QUV ≠ tuổi thọ; thiếu loại trừ bảo hành |
| G3 | 5 | 4,5 | Catalog hãng, reviewer duyệt, ảnh chụp tại Auto365 |
| U1 | 5 | 4,6 | 5 kích thước giả lập không tràn; chưa máy thật |
| U2 | 5 | 4,4 | Hotline + form; lead CRM chờ production |
| U3 | 5 | 4,5 | 01–03 cùng SHA; chờ nghiệm thu production |
| **Tổng** | 100 | **92,9** | SEO 28,2/30 (ngưỡng 28,5) · GEO 23,0/25 (ngưỡng 23,75) |

**Trạng thái:** tổng chưa đạt ngưỡng 95; SEO chưa đạt ngưỡng và GEO chưa đạt ngưỡng. Điều kiện còn mở: loại trừ bảo hành (G2/C2), hub `/ppf-o-to` production (S3), lead test CRM (U2).
