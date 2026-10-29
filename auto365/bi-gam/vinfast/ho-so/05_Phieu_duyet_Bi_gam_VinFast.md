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

## Bản vá 23/10/2026 theo phiếu reviewer — ĐÃ DUYỆT 23/10/2026

Reviewer 22/10/2026 chấm 92,0/100 (chưa đạt) và yêu cầu thu hẹp phạm vi câu kỹ thuật công khai. Chủ quản xác nhận 23/10/2026: anh Nguyễn Quang Đạo đã duyệt toàn bộ câu mới trong bảng dưới. `lastReviewed` = 2026-10-23, byline "Rà soát kỹ thuật" = 23/10/2026. Không còn mục nội dung chờ duyệt.

| Vị trí | Câu cũ (đã duyệt 22/10) | Câu mới (duyệt 23/10) |
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
| Sapo (chủ quản viết 23/10) | Chọn dòng xe VinFast để xem cấu hình, hình ảnh xe thực tế… | Độ bi gầm VinFast là giải pháp nâng cấp ánh sáng đòi hỏi sự tương thích cao với hệ thống điện và thiết kế hốc đèn đặc thù của từng dòng xe. Nhằm giúp chủ xe tra cứu chính xác, Auto365 tổng hợp các hồ sơ thi công thực tế của nhiều mẫu bi gầm (X-Light, GTR, AES) trên từng phiên bản xe VinFast. |
| Khối chi nhánh | — | Câu nhận diện "Auto365.vn - Trụ Sở Chính thuộc hệ sinh thái 365Group…" (mẫu reviewer). |
| Khối "Vì sao chọn Auto365" | 4 thẻ icon | 6 thẻ có ảnh + dải logo hãng đèn, lấy nguyên từ trang theo-hang-xe (đã duyệt ở trang đó); tiêu đề thêm "VinFast" |

## Bản vá R2 24/10/2026 — ĐÃ DUYỆT 24/10/2026

Reviewer R2 23/10/2026: 94,8/100 (chưa đạt). Chủ quản xác nhận 24/10/2026: anh Nguyễn Quang Đạo đã duyệt cả hai câu dưới đây. `lastReviewed` = 2026-10-24. Không còn mục nội dung chờ duyệt.

| Vị trí | Câu đã duyệt 23/10 | Câu mới |
|---|---|---|
| Sapo | …hồ sơ thi công thực tế của nhiều mẫu bi gầm (X-Light, GTR, AES) trên từng phiên bản xe VinFast. | …hồ sơ thi công thực tế của nhiều mẫu bi gầm (X-Light, GTR) trên từng phiên bản xe VinFast. (10 bài hồ sơ đang dẫn: 8 X-Light, 2 GTR, 0 AES) |
| Thẻ "Tư vấn đúng theo từng xe" (chỉ trang VinFast) | Kiểm tra hốc đèn và hệ điện 12V/24V trước khi đề xuất mẫu; | Kiểm tra hốc đèn, hệ điện phụ trợ và điện áp cấp nguồn theo tài liệu của từng xe trước khi đề xuất mẫu; |

## Thay đổi 24/10/2026 sau lượt duyệt (chủ quản yêu cầu)

| Mục | Nội dung |
|---|---|
| Ảnh 6 thẻ "Vì sao chọn" | Thay ảnh xe hãng khác (Hyundai, Toyota) bằng ảnh xe VinFast thật tại Auto365 lấy từ các trang VF 6, Fadil, Limo Green; alt ghi đúng dòng xe |
| Câu nhận diện khối chi nhánh | Ghi đủ thương hiệu đèn: X-Light, GTR, AES, Titan, Henvvei, Red Lighting, Matrix Light và Fogway (khớp dải logo trên trang) |
| Khối nhu cầu | 3 thẻ cao bằng nhau, dòng "Đã lắp" và link nằm sát đáy |
| Lỗi hiển thị | Khối "Vì sao chọn" lấy từ theo-hang-xe dư 1 thẻ đóng </div> làm khung trang đóng sớm → CTA cuối trang mất màu nút và font; build đã tự cân lại |

## Thay đổi 26/10/2026 theo reviewer R3 (không đổi nội dung kỹ thuật)

| Mục | Nội dung |
|---|---|
| Link Lux SA2.0 | `/lux-sa20` (404) → `/lux-sa2-0` (200, canonical của trang) ở thẻ xe và ItemList |
| Mô tả meta / OG / CollectionPage | "Tra cứu bi gầm VinFast theo dòng xe, xem hồ sơ X-Light và GTR đã lắp tại Auto365; kiểm tra cấu hình, chi phí và điểm tiếp nhận trước khi thi công." — thu hẹp cùng phạm vi sapo đã duyệt 24/10 |

Hai thay đổi trên là sửa đích liên kết và mô tả cho máy đọc, không thêm claim kỹ thuật mới; `lastReviewed` giữ 2026-10-24.

| Sapo — câu thứ 3 (26/10, chủ quản đồng ý) | "Xe chưa có hồ sơ được kỹ thuật viên kiểm tra trước khi chốt cấu hình; chi phí gồm thiết bị, phụ kiện, công lắp và VAT theo báo giá." — cùng ý FAQ chi phí đã duyệt 23/10, không thêm claim kỹ thuật |
| Sapo rút gọn (26/10, chủ quản yêu cầu) | "Bi gầm VinFast cần chọn theo hốc đèn và hệ thống điện của từng dòng xe. Auto365 tổng hợp hồ sơ thi công thực tế (X-Light, GTR) trên từng phiên bản; xe chưa có hồ sơ được kiểm tra trước khi báo cấu hình và chi phí." — giữ đủ 3 ý đã duyệt (chọn theo hốc đèn/điện từng xe; hồ sơ X-Light, GTR; xe chưa có hồ sơ kiểm tra trước khi báo giá), không thêm claim |
| Thêm VF Wild (26/10, chủ quản yêu cầu) | Thẻ VF Wild nhóm Xe điện, trạng thái "Liên hệ tư vấn" (chưa có hồ sơ lắp); lưới 18 → 19 dòng, khớp danh sách VinFast ở trang theo-hang-xe. Không thêm claim kỹ thuật |

## Duyệt 26/10/2026

Chủ quản xác nhận 26/10/2026: anh Nguyễn Quang Đạo đã xác nhận các thay đổi ngày 26/10 — sapo 2 câu rút gọn, tab "Xe xăng" + VF e34 về nhóm Xe điện, thêm VF Wild, link Lux SA2.0 `/lux-sa2-0`, mô tả meta/OG/CollectionPage. `lastReviewed` = 2026-10-26. Không còn mục chờ duyệt.

## Bản vá R4 27/10/2026 (V1.9) — ĐÃ DUYỆT 27/10/2026

| Mục | Nội dung |
|---|---|
| FAQ mới — nơi làm | "Ở tỉnh khác thì lắp bi gầm VinFast tại đâu?" — tìm điểm theo tỉnh trong danh bạ, liên hệ trước xác nhận lịch; cấu hình, phụ kiện, chi phí xác nhận sau kiểm tra xe tại điểm phù hợp (câu mẫu reviewer R4) |
| FAQ mới — thông tin cần chuẩn bị | "Xe chưa có hồ sơ lắp thì cần chuẩn bị thông tin gì?" — dòng xe, đời/phiên bản, nhu cầu, ảnh hốc đèn gầm nếu có; cấu hình và chi phí chốt sau kiểm tra xe |
| Danh sách tỉnh | 33 tỉnh/thành, 91 điểm, sinh từ danh bạ auto365.vn/chi-nhanh lúc build; mỗi tỉnh link tới danh bạ lọc theo tỉnh |

Chủ quản xác nhận 27/10/2026: anh Nguyễn Quang Đạo đã duyệt 2 FAQ mới và danh sách tỉnh. `lastReviewed` = 2026-10-27. Không còn mục chờ duyệt.

## Thay đổi 29/10/2026 theo reviewer R6 (không đổi nội dung kỹ thuật)

| Mục | Thay đổi | Căn cứ |
|---|---|---|
| Thẻ "Xe dịch vụ chạy đêm, đi mưa" | "Limo Green lắp được cả mẫu lens 2.0 và 3.0 inch" → ghi 2 mã đã có case: X-Light F10 New (3.0 inch), X-Light F10 2.0 New (2.0 inch) + "Từng mã đèn vẫn cần kiểm tra xe trước khi chốt phương án" | Trang con Limo Green (anh Đạo duyệt) và 2 bài case đã đăng auto365.vn |
| Thẻ "Xe điện đi phố" (28/10) | Bỏ câu pin cao áp lặp, dẫn về box lưu ý hệ điện | Cảnh báo giữ ở box lưu ý + FAQ |

`lastReviewed` giữ 2026-10-27.

## Duyệt 29/10/2026 — xác nhận nguồn từng case

Chủ quản xác nhận 29/10/2026: anh Nguyễn Quang Đạo đã xác nhận nguồn của từng case trên hub (10 bài hồ sơ, gồm 2 case Limo Green: X-Light F10 New 3.0 inch và F10 2.0 New 2.0 inch) và bản vá R6. `lastReviewed` → 2026-10-29.
