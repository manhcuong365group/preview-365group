# 05 — Phiếu duyệt: Hub Bi gầm VinFast

| Trường | Giá trị |
|---|---|
| Trang | `auto365/bi-gam/vinfast` → canonical `https://auto365.vn/nang-cap-anh-sang-bi-gam/vinfast` |
| Bản duyệt | SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_VinFast.md) |
| Người duyệt kỹ thuật | Nguyễn Quang Đạo — Kiểm duyệt kỹ thuật đèn ô tô |
| Ngày duyệt | 22/10/2026 |
| Căn cứ ghi nhận | Chủ quản xác nhận trong phiên làm việc 22/10/2026: anh Đạo đã duyệt trang |

## Phạm vi đã duyệt (22/10/2026)

| Mục | Kết quả |
|---|---|
| Sapo, 4 điểm tin cậy ở hero, dòng cập nhật + byline | Duyệt |
| 18 dòng xe chia 3 nhóm; 6 dòng có trang riêng (VF 3, VF 6, VF 7, Limo Green, Fadil, Lux SA2.0) | Duyệt |
| Box "Xe VinFast lắp bi gầm cần lưu ý gì?" (hốc đèn 2.0/2.5/3.0 inch, đấu nguồn theo giắc zin không can thiệp pin cao áp, cân chỉnh đường cắt cos) | Duyệt |
| 4 thẻ "Vì sao chọn Auto365" (đại lý chính hãng X-Light, GTR, AES; 90+ chi nhánh) | Duyệt |
| FAQ 4 câu (hệ thống điện xe điện, dòng đã có hồ sơ, thời gian lắp, đăng kiểm) | Duyệt |
| 11 case + 8 cẩm nang | Lấy từ bài đã đăng trên auto365.vn |

## Lượt duyệt bổ sung 22/10/2026

Chủ quản xác nhận 22/10/2026: anh Nguyễn Quang Đạo đã duyệt khối "Xe VinFast của bạn dùng để làm gì?" (3 nhóm: xe điện đi phố · xe dịch vụ chạy đêm, đi mưa · dòng đời trước, đi tỉnh). Không còn mục nội dung chờ duyệt.

## Form tư vấn

| Mục | Kết quả |
|---|---|
| Nguồn form | `data-service="Bi gầm VinFast"` (+ dòng xe khi bấm thẻ dòng xe), `data-source-page="Bi gầm VinFast"` (đã sửa 22/10 — trước đó ghi nhầm "Bi gầm theo hãng xe") |
| Thẻ dòng xe → form | Bấm thẻ VF 8 → ô Dòng xe = "VinFast VF 8", service = "Bi gầm VinFast - VinFast VF 8" (kiểm trên preview) |
| Lead test | 22/10/2026 POST https://auto365.vn/api/leads (đúng các trường lead.js gửi; preview không có `/api/leads` nên form trên pages.dev trả 405 như các trang khác) → `{"success":true, "lead_id":"228"}` |
| Còn | CRM xác nhận đã nhận lead 228 có dòng xe "VinFast VF 8"; sau đó xoá lead test 228 |
