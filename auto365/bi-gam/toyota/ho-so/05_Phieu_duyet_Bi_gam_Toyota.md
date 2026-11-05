# 05 — Phiếu duyệt: Hub Bi gầm Toyota

| Trường | Giá trị |
|---|---|
| Trang | `auto365/bi-gam/toyota` → canonical `https://auto365.vn/nang-cap-anh-sang-bi-gam/toyota` |
| Bản duyệt | Bản 04/11/2026 — SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_Toyota.md) |
| Kết quả | **ĐÃ DUYỆT 04/11/2026** |
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
| 22 case + 8 bài cẩm nang đèn | Lấy từ bài đã đăng trên auto365.vn |

## Ngoài phạm vi trang

- Danh bạ chi nhánh (rating, link Maps): sửa tại trang /chi-nhanh.
- Lead test, CRM/tracking: chỉ kiểm được trên production (preview không có backend).
- Các bước khi lên production (robots/index, canonical thực tế, cấu hình máy chủ, GSC/CWV): theo quy trình triển khai riêng của IT.

## Phiếu nghiệm thu U3 V1.9 — PASS · ĐÃ DUYỆT 04/11/2026

Đóng U1/U2/U3 trong phạm vi bản demo Toyota ngày 04/11/2026 (bảng mã T01–T04 trong PDF dùng nghĩa riêng — xem đối chiếu bên dưới). Bản PDF: [PHIEU_NGHIEM_THU_U3_BI_GAM_TOYOTA_V1_9_DA_DUYET_FINAL_20261104.pdf](../../auto365/bi-gam/toyota/ho-so/PHIEU_NGHIEM_THU_U3_BI_GAM_TOYOTA_V1_9_DA_DUYET_FINAL_20261104.pdf) — hiển thị trên trang preview ngay dưới ô kiểm nội bộ.

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

Đối chiếu mã trong PDF U3 (trang 2): PDF "T01" = Innova/Innova Cross dùng chung URL (quyết định kiến trúc, giữ); PDF "T02" = asset/OG/môi trường → T08; PDF "T03" = khối nội bộ/noindex → checklist môi trường (T08); PDF "T04" = form/tracking → T06. Kết quả U1/U2/U3 trong PDF giữ nguyên. PDF ghi "8 FAQ": bản hiện hành có 9 FAQ, khớp FAQPage — đọc theo số 9.
