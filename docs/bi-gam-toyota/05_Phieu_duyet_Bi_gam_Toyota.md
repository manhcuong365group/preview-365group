# 05 — Phiếu duyệt: Hub Bi gầm Toyota

| Trường | Giá trị |
|---|---|
| Trang | `auto365/bi-gam/toyota` → canonical `https://auto365.vn/nang-cap-anh-sang-bi-gam/toyota` |
| Bản duyệt | Bản 04/11/2026 — SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_Toyota.md) |
| Kết quả | **ĐÃ DUYỆT 04/11/2026; phiếu U3 R2 ĐÃ DUYỆT 05/11/2026** |
| Biên soạn | Team Content Auto365 |
| Rà soát kỹ thuật nội dung | Nguyễn Quang Đạo — Kiểm duyệt kỹ thuật đèn ô tô (`lastReviewed` 2026-11-04) |
| Căn cứ ghi nhận | Chủ quản xác nhận 04/11/2026: anh Đạo đã duyệt trang |

## Phạm vi đã duyệt

| Mục | Kết quả |
|---|---|
| Sapo, box "Xe Toyota lắp bi gầm cần lưu ý gì?" (hốc 2.0/3.0 inch, xe đời cũ, hybrid) | Duyệt |
| 20 dòng xe chia Hatchback / Sedan / SUV / MPV / Bán tải; 9 dòng có hồ sơ | Duyệt |
| Khối nhu cầu 3 nhóm, 9 FAQ | Duyệt |
| "Thi công tại 90+ chi nhánh", thẻ "Tư vấn đúng theo từng xe" (như hub VinFast) | Duyệt |
| 26 case (07/11 thêm Corolla Cross ×2, Vios Titan 301, Fortuner V30+F10) + 8 bài cẩm nang đèn | Lấy từ bài đã đăng trên auto365.vn |

## Ngoài phạm vi trang

- Danh bạ chi nhánh (rating, link Maps): sửa tại trang /chi-nhanh.
- Lead test, CRM/tracking: chỉ kiểm được trên production (preview không có backend).
- Các bước khi lên production (robots/index, canonical thực tế, cấu hình máy chủ, GSC/CWV): theo quy trình triển khai riêng của IT.


## Đối chiếu mã lỗi theo báo cáo 03/11 (đính chính hồ sơ 05/11/2026)

| Mã (báo cáo 03/11) | Nội dung | Trạng thái 05/11 |
|---|---|---|
| T01 | Wigo/Yaris xếp nhóm Sedan | Đã đóng 04/11 (Hatchback 2) |
| T02 | Mâu thuẫn trạng thái reviewer | Đã đóng 04/11 (byline + schema + 05) |
| T03 | Địa chỉ 8 cơ sở Quảng Ninh ghi "Thành phố Quảng Ninh" | Đã sửa 05/11: thành phần cấp tỉnh → "tỉnh Quảng Ninh" trong snapshot `#bgty-branch-preview` (0 chuỗi sai, 8 bản ghi đúng). Số nhà/đường/phường giữ nguyên theo danh bạ |
| T04 | Phạm vi "Thi công tại 90+ chi nhánh" | Đã duyệt 04/11 (05) |
| T05 | Phép cộng điểm | Đã đóng |
| T06 | QA thiết bị/tương tác | PASS theo phiếu U3; lead/CRM kiểm trên production |
| T07 | 5 thẻ xe chưa có ảnh | Đã bổ sung (ghi công ở 02) |
| T08 | Production | Checklist triển khai ở 02 |


## Phiếu nghiệm thu U3 V1.9 (R2) — PASS · ĐÃ DUYỆT 05/11/2026

Người kiểm tra SEO: Ngọc Trân; rà soát kỹ thuật: Nguyễn Quang Đạo (04/11/2026). Đóng T01–T07 theo mã gốc (gồm T03 — 8/8 địa chỉ Quảng Ninh), U1/U2/U3; ghi đúng 9 FAQ, ItemList 9 + 22. Bản PDF: [PHIEU_U3_BI_GAM_TOYOTA_V19_PASS_DA_DUYET_20261105.pdf](../../auto365/bi-gam/toyota/ho-so/PHIEU_U3_BI_GAM_TOYOTA_V19_PASS_DA_DUYET_20261105.pdf) — hiển thị trên trang preview ngay dưới ô kiểm nội bộ. T08 (production) theo checklist phát hành.

## Phụ lục U3 06/11/2026

Anh Nguyễn Quang Đạo duyệt 06/11/2026 các thay đổi sau phiếu U3 05/11: (1) sửa form — `service` cố định, dòng xe lấy từ ô xe khi gửi; (2) khối Chọn nhanh, CTA dưới lưới xe; (3) câu "Nên gọi trước để xác nhận cơ sở và lịch lắp" ở CTA cuối. `lastReviewed` = 2026-11-06. Phiếu PDF 05/11 giữ nguyên.

## Ghi nhận R4 V2.2 (07/11/2026)

Reviewer R4 06/11 đóng V22-TY-01. Vá R4-01/02/03 ngày 07/11 (link nguồn, Image Pack, phụ lục 03). PDF V1.9 05/11 giữ làm lịch sử; chờ reviewer chốt phụ lục U3 V2.2.
