# 04 — Phiếu duyệt: Auto365.vn – Trụ Sở Chính

| Trường | Giá trị |
|---|---|
| Trang | `auto365/auto365-tru-so-chinh` → preview https://preview-365group.pages.dev/auto365-tru-so-chinh/ · canonical `https://auto365.vn/auto365-tru-so-chinh` (`/thu-duc/` chỉ chuyển hướng) |
| Bản duyệt | bản 10/11/2026 (sau commit `595c9c08`, thêm byline + WebPage schema) |
| Người kiểm duyệt nội dung | Nguyễn Quang Đạo |
| Ngày duyệt | 10/11/2026 — `lastReviewed` 2026-11-10, byline "Kiểm duyệt: Nguyễn Quang Đạo (10/11/2026)" |
| Khung chấm | UX/CRO V2.2 — R1 05/11 (80), R2 06/11 (82), R3 08/11 (56, thang mới) |
| Hotline trang | 0365 365 365 (Phim · PPF · Wrap · Nội thất da); 0365 365 911 (Đèn · Camera · Phụ kiện · Xe điện) |

## Dữ kiện chủ trang đã chốt

| Mục | Giá trị chốt | Ghi chú |
|---|---|---|
| Địa chỉ trên trang | 4/4/1/7 Đường số 3, Khu phố 31, P. Hiệp Bình, TP.HCM | 3M Pro Shop & 3M Training Center thuộc hệ sinh thái Trụ Sở Chính nên trang dùng một địa chỉ (địa chỉ riêng Pro Shop 4/4/3/3 chỉ dùng trên hồ sơ Maps) |
| Câu nhận diện | "3M Pro Shop & 3M Training Center được phát triển trong hệ sinh thái Auto365.vn – Trụ Sở Chính, thuộc 365Group." | Không dùng "Trụ Sở Chính cũng là 3M Pro Shop" |
| Giờ mở cửa | 08:30 – 18:30, Thứ 2 – Chủ nhật | Schema `Mo-Su 08:30-18:30` |
| Tư vấn | "Tư vấn và kiểm tra xe miễn phí" | Giữ chữ "miễn phí" |
| Điểm Google | 5,0 — Đánh giá Google của 3M Pro Shop | Không ghi số lượt; link mở hồ sơ Maps 3M Pro Shop |
| Case | 48 xe, đều làm tại Trụ Sở Chính, cuộn ngang 2 hàng | Theo bài đã đăng auto365.vn |
| Clip + ảnh | Media đã xác nhận nguồn | 4 clip quay tại Trụ Sở Chính |
| Phần nội dung local | Giữ | Phục vụ từ khoá khu vực |

## Xử lý góp ý

| Góp ý | Vòng | Xử lý |
|---|---|---|
| "Đặt lịch" nhưng form chỉ là yêu cầu tư vấn | R1, R2 | Nút "Nhận tư vấn" / "Gửi yêu cầu tư vấn" |
| Menu "Đội ngũ" không có nhân sự | R1, R2 | Đổi "Vì sao chọn" |
| Lọc case không kết quả | R1 | Nút "Xóa bộ lọc" |
| Case chưa ghi nơi thi công | R1, R2 | Thay 4 + thêm 9 case có ghi Trụ Sở Chính |
| Chứng nhận không rõ cấp cho ai | R2 | Chú thích 6 giấy |
| CTA trên case | R2 | "Tôi cũng đi xe này – hỏi phương án" điền sẵn xe + nhu cầu |
| Form chặn mọi số điện thoại (P0) | R3 | Sửa regex (commit `c2ecb99e`), test 0900000000 / 090 000 0000 / +849… |
| Popup giữ dữ liệu cũ | R3 | Reset khi mở từ nút chung |
| "Về Auto365" dẫn nhầm, nhãn đánh giá sai hồ sơ | R2, R3 | Sửa đích link |
| Dịch vụ nằm quá sâu | R1, R3 | Đưa lên ngay dưới hero (mobile ~1.050px, trước ~2.300px) — commit `9ecdab4c` |
| Popup "Xem dịch vụ tại Thủ Đức" thiếu 2 nhóm | R3 | Đủ 6 nhóm (thêm Nội thất da, Xe điện) |
| Link camera chỉ dẫn 70mai | R3 | Trỏ `/camera-hanh-trinh-o-to` |
| Ghi chú form dài | — | Còn "Chỉ cần số điện thoại." — commit `595c9c08` |

## Kiểm thử (10/11/2026)

| Hạng mục | Kết quả |
|---|---|
| Desktop + mobile 375px | Không tràn ngang; khối cuộn ngang (case, clip, chứng nhận) đúng chủ đích |
| Form | Validate SĐT đúng; popup tự điền nhu cầu, đóng popup khi chuyển xuống form |
| Bản live pages.dev | Đã có commit `595c9c08` |

## Trạng thái

| Hạng mục | Trạng thái |
|---|---|
| Nội dung trang | Anh Nguyễn Quang Đạo duyệt 10/11/2026 |
| UX/CRO R3 | Đã xử lý toàn bộ mục thuộc trang, chờ sếp chấm lại |
