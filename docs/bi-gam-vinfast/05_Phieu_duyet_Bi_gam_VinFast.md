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
| CRM | Chủ quản xác nhận 22/10/2026: CRM nhận lead 228, có dòng xe "VinFast VF 8" — ngữ cảnh xe từ thẻ dòng xe → form → CRM đạt |
| Còn | Xoá lead test 228 khỏi CRM |

## Bản vá 23/10/2026 theo phiếu reviewer — chờ duyệt lại

Reviewer 22/10/2026 chấm 92,0/100 (chưa đạt) và yêu cầu thu hẹp phạm vi câu kỹ thuật công khai. Câu mới dưới đây **chưa được anh Đạo duyệt**; `lastReviewed` giữ 2026-10-22, byline giữ ngày duyệt cũ.

| Vị trí | Câu cũ (đã duyệt 22/10) | Câu mới (chờ duyệt) |
|---|---|---|
| Box lưu ý — Nguồn điện | Với xe điện, kỹ thuật viên kiểm tra và đấu nguồn theo giắc zin, không can thiệp pin cao áp. | Kỹ thuật viên kiểm tra điểm cấp nguồn, tải bổ sung, dây/giắc và bảo vệ mạch theo đúng đời và phiên bản xe. Không mặc định mọi xe đều có sẵn giắc đèn gầm hoặc dùng chung một phương án đấu nối; phương án tư vấn không can thiệp hệ thống pin cao áp. |
| Box lưu ý — Đường cắt cos | Cân chỉnh trên bảng test sau khi lắp để không gây chói xe đối diện. | Cân chỉnh trên bảng test sau khi lắp; lắp đặt và căn chỉnh phù hợp hỗ trợ hạn chế nguy cơ gây chói xe đối diện. |
| Khối nhu cầu — xe điện | Bi gầm đấu nguồn theo giắc zin của đèn gầm, không can thiệp pin cao áp. | Kỹ thuật viên kiểm tra điểm cấp nguồn, dây/giắc theo đời và phiên bản xe; phương án tư vấn không can thiệp hệ thống pin cao áp. |
| Khối nhu cầu — xe dịch vụ | …cân chỉnh đường cắt cos sau khi lắp để không gây chói xe đối diện. | …cân chỉnh đường cắt cos sau khi lắp; lắp đặt và căn chỉnh phù hợp hỗ trợ hạn chế nguy cơ gây chói xe đối diện. |
| Thẻ "Thi công chuyên nghiệp" | Kỹ thuật viên kiểm tra xe, đấu nối theo giắc và cân chỉnh trước bàn giao. | Kỹ thuật viên kiểm tra xe, điểm cấp nguồn, đấu nối và cân chỉnh trước bàn giao. |
| FAQ hệ thống điện | Bi gầm được đấu vào nguồn đèn gầm theo giắc zin, công suất nhỏ… | Đoạn nguồn điện như box lưu ý (không còn "công suất nhỏ"). |
| FAQ đăng kiểm | …cân chỉnh không gây chói. Chi tiết xem bài Quy định lắp bi gầm ô tô… | …lắp đặt và căn chỉnh phù hợp hỗ trợ hạn chế nguy cơ gây chói. Trước khi lắp, chủ xe nên cùng kỹ thuật viên đối chiếu quy định hiện hành và cấu hình xe thực tế. (bài quy định chưa có URL production) |
| FAQ mới — chi phí | — | Tổng chi phí gồm giá đèn theo mẫu và phiên bản, phụ kiện (pát, dây, giắc nếu cần), công lắp và VAT; giá hoàn thiện chốt sau khi kiểm tra xe; giá thiết bị tham khảo ở trang từng dòng xe. |
| FAQ mới — bảo hành | — | Thời hạn bảo hành đèn theo chính sách từng mẫu và phiên bản (trang sản phẩm, phiếu bàn giao); phụ kiện và công lắp theo phiếu bàn giao; tra cứu bảo hành điện tử, hotline 0365 365 911 hoặc chi nhánh đã lắp. |
| Sapo (kiêm trả lời nhanh) | Chọn dòng xe VinFast để xem cấu hình, hình ảnh xe thực tế… | Bi gầm VinFast cần chọn theo đời, phiên bản và vị trí lắp. Auto365 có trang hồ sơ cho 6 dòng (X-Light, GTR, AES); xe khác được kiểm tra trước khi chốt cấu hình. Chi phí xác nhận theo đèn, phụ kiện, công lắp và VAT trong báo giá. |
| Khối chi nhánh | — | Câu nhận diện "Auto365.vn - Trụ Sở Chính thuộc hệ sinh thái 365Group…" (mẫu reviewer). |
