# 03 — Phiếu duyệt nội bộ: Bảng tra chân bóng đèn ô tô (V2.3)

| Mục | Giá trị |
|---|---|
| URL preview | https://preview-365group.pages.dev/bang-tra-chan-bong-den/ |
| Canonical | https://auto365.vn/bang-tra-chan-bong-den |
| Bản kiểm (SHA-256) | `1d70dee5dbb4f7eab29fef9dfc3b0b8d8f9998437f4a95e6c1a0c023ac5c1626` (bản 26/11/2026: thêm mã hàng cb-001…cb-331, sửa câu "Phạm vi xác nhận", nội dung bảng không đổi so với bản reviewer chấm 24–25/11 `a9605f…`) |
| Kiểm duyệt kỹ thuật | Anh Nguyễn Quang Đạo — duyệt 20/11/2026; duyệt 12 dòng Audi/Lexus 21/11/2026; xác nhận toàn bảng 331 dòng cho xe lưu hành tại Việt Nam 24/11/2026 (lastReviewed 2026-11-24) |
| Chuẩn | Auto365 V2.3; ngưỡng: Tổng ≥95 · SEO ≥28,50/30 · GEO ≥23,75/25 |
| Lưu ý | Điểm tự chấm của team, chờ reviewer xác nhận |

## Tự chấm 25/11/2026

| Nhóm | Điểm | Căn cứ |
|---|---:|---|
| Nội dung /30 | 28,5 | 331 dòng đã xác nhận; giải thích mã chân, LED nguyên bản, bước kiểm xe; 6 ảnh thiết kế |
| SEO /30 | 29,0 | 1 H1, bảng semantic, nhãn đếm hãng khớp dữ liệu, JSON-LD hợp lệ, link ngoài nofollow, không link web đối thủ |
| GEO /25 | ≈24,0 | Câu "Phạm vi xác nhận" cuối trang; hồ sơ nguồn theo nhóm bên dưới |
| UX /15 | 14,5 | Bộ lọc đúng ở 320/390/768/1440; mobile không tràn; nút Xóa bộ lọc cạnh ô Hãng xe |
| **Tổng** | **≈96** | Qua 3 ngưỡng |

## Lỗi reviewer đã đóng
- P1 bộ lọc mobile không ẩn dòng (20/11) — đóng.
- P2 nhãn đếm hãng BMW 51 / Volkswagen 12 (21/11) — đóng, hiện 32 / 10.
- Link sang web đối thủ — gỡ hết; nguồn chỉ lưu nội bộ.

## Hồ sơ nguồn dữ liệu (đóng CX C1/G1–G3/U3)

Hồ sơ chi tiết từng dòng: [ho-so-doi-chieu-331-dong.csv](ho-so-doi-chieu-331-dong.csv) — cột: dòng xe, năm, cấu hình cụm đèn, phạm vi, Cos/Pha/Gầm, nguồn/trang/mục, link, cấp bằng chứng, người kiểm, ngày kiểm, SHA bản trang.

| Nhóm | Số dòng | Nguồn | Người / ngày kiểm |
|---|---:|---|---|
| Xe phổ thông (Toyota, Hyundai, Kia, BMW, Ford, Mitsubishi, Mazda, Chevrolet, Honda, VinFast, Isuzu, Suzuki) | 197 | Bảng tra kỹ thuật nội bộ Auto365, cập nhật từ các ca thay đèn thực tế tại hệ thống | Nguyễn Quang Đạo — 24/11/2026 |
| Có sách HDSD / catalog / trang hãng Việt Nam | 39 | Tài liệu ghi theo từng dòng trong hồ sơ | Nguyễn Quang Đạo — 20/11/2026 |
| Có thông số công bố công khai tại Việt Nam | 83 | Link theo từng dòng trong hồ sơ | Nguyễn Quang Đạo — 20/11/2026 |
| Audi A4/A5/Q5, Lexus RX350/IS250/LX570/LX470 (bản Xenon) | 12 | Xác nhận kỹ thuật Auto365 theo cấu hình Xenon bản lưu hành tại Việt Nam | Nguyễn Quang Đạo — 21/11/2026 |
| **Tổng** | **331** | | |

Phạm vi áp dụng: toàn bộ 331 dòng áp dụng cho xe đang lưu hành tại Việt Nam (chính hãng và xe nhập). Trang hiển thị câu "Phạm vi xác nhận" ở mục "Nguồn và phạm vi dữ liệu".

## Bổ sung 26/11/2026 — trả lời phiếu reviewer 25/11

| Yêu cầu reviewer | Xử lý |
|---|---|
| 1. Ma trận nguồn có mã hàng/khóa dữ liệu | Mỗi dòng trên trang có id `cb-001`…`cb-331` (mở được bằng `#cb-001`); cột đầu của hồ sơ CSV dùng đúng mã này |
| 1. Model/năm/phiên bản, cấu hình cụm đèn, mã Cos/Pha/Gầm | Có trong hồ sơ CSV, khớp từng dòng trên trang |
| 1. Tài liệu/trang/mục, ngày/người đối chiếu | Cột "Nguồn/trang/mục", "Cấp bằng chứng", "Người kiểm", "Ngày kiểm" |
| 2. Ưu tiên hàng từng lấy nguồn thị trường khác, hàng Bi-Xenon/D3S | 42 dòng catalog nước ngoài: anh Đạo xác nhận áp dụng xe lưu hành tại VN 24/11; 12 dòng Audi/Lexus Xenon: anh Đạo duyệt 21/11 |
| 4. Liên kết người rà soát với đúng revision | Cột SHA-256 trong hồ sơ = bản trang hiện tại |

Hồ sơ CSV và phiếu này gửi kèm reviewer (không công khai trên trang).

## Bổ sung 26/11/2026 (lần 2) — mục 3 phiếu reviewer

| Yêu cầu | Xử lý |
|---|---|
| 3. Tránh lời xác nhận toàn bảng | Câu trên trang đổi thành "Bảng được kỹ thuật Auto365 (anh Nguyễn Quang Đạo) rà soát cho xe lưu hành tại Việt Nam… Mã chân có thể khác theo phiên bản và cấu hình cụm đèn; kỹ thuật viên kiểm tra trên xe trước khi thay bóng." |
| 3. Hàng chưa đủ căn cứ ghi CX trong hồ sơ | 209 dòng (197 nhóm C + 12 nhóm D) ghi cột "Cần Kỹ thuật bổ sung" = CX – chờ tài liệu/trang/mục hoặc mã ca thay thực tế. 122 dòng nhóm A/B có nguồn theo dòng |
| 4. Revision | SHA trong hồ sơ = bản trang hiện tại (dòng "Bản kiểm" ở đầu phiếu) |

Tự đánh giá: C1/G3/U3 còn CX cho 209 dòng cho tới khi Kỹ thuật bổ sung tài liệu.

## Việc còn mở — Kỹ thuật (anh Nguyễn Quang Đạo) bổ sung

Mục tiêu: đóng CX C1/G3/U3 cho 209 dòng. Một tài liệu có thể dùng cho nhiều dòng; không cần 331 nguồn riêng. Không điền mã/nguồn theo suy đoán.

| Nhóm | Số dòng | Cần gửi | Trạng thái |
|---|---:|---|---|
| C — Xe phổ thông (Toyota, Hyundai, Kia, BMW, Ford, Mitsubishi, Mazda, Chevrolet, Honda, VinFast, Isuzu, Suzuki) | 197 | File bảng tra kỹ thuật nội bộ (tên file + ngày bản); kèm mã phiếu/ca thay thực tế theo dòng xe nếu có (VD: "Vios 2018 – Trụ sở chính – ngày…") | Chờ Kỹ thuật |
| D — Audi A4/A5/Q5, Lexus RX350/IS250/LX570/LX470 (Xenon) | 12 | Sách HDSD, ảnh tem/bóng tháo ra, hoặc ca đã làm tại cơ sở | Chờ Kỹ thuật |

Khi nhận được: Content/SEO điền cột "Nguồn/trang/mục" + "Link" trong hồ sơ CSV theo mã hàng cb-xxx, đổi cột "Cần Kỹ thuật bổ sung" từ CX sang "Đã bổ sung", cập nhật SHA nếu trang đổi, rồi gửi reviewer chấm lại.

Nếu không có tài liệu: trang giữ trạng thái "qua phần đã kiểm", chưa nghiệm thu đầy đủ; phương án ẩn bớt dòng chưa có căn cứ cần sếp duyệt trước.
