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
| Địa chỉ trên trang | 4/4/1/7 Đường số 3, Khu phố 31, P. Hiệp Bình, TP.HCM | 3M Pro Shop & 3M Training Center thuộc hệ sinh thái Trụ Sở Chính ; địa chỉ chính toàn trang 4/4/1/7, mục Đường đến ghi thêm địa chỉ riêng 3M Pro Shop 4/4/3/3 (10/11) |
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
| CTA trên case | R2 | Chủ trang chốt bỏ nút riêng trên thẻ (10/11); thẻ dẫn bài case, CTA chung "Nhận tư vấn" + dải CTA dưới mục case |
| Form chặn mọi số điện thoại (P0) | R3 | Sửa regex (commit `c2ecb99e`), test 0900000000 / 090 000 0000 / +849… |
| Popup giữ dữ liệu cũ | R3 | Reset khi mở từ nút chung |
| "Về Auto365" dẫn nhầm, nhãn đánh giá sai hồ sơ | R2, R3 | Sửa đích link |
| Dịch vụ nằm quá sâu | R1, R3 | Chủ trang chốt giữ thứ tự: giới thiệu (Vì sao chọn, Chứng nhận) trước, dịch vụ sau; hero có nút "Xem dịch vụ tại Thủ Đức" (10/11) |
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

## Đối ứng phiếu V2.2 R2 (10/11/2026)

### P0-02 — Biên bản QA form (Frontend, 10/11/2026)

Test trên preview local, mobile 375px, mô phỏng phản hồi `/api/leads` + 1 lần gọi thật trên preview (pages.dev trả 405 — bình thường, không có API). Cùng một hàm xử lý cho form cuối trang và popup tư vấn.

| Ca test | Số request | Thông báo hiển thị | Dữ liệu khách |
|---|---|---|---|
| SĐT sai (`123`) | 0 | "Vui lòng nhập số điện thoại hợp lệ." | Giữ |
| Hợp lệ, bấm gửi 2 lần liên tiếp | 1 | "Đã nhận yêu cầu tư vấn…" (chỉ khi `success:true`) | Xoá sau thành công |
| HTTP 500 | 1 | "Chưa gửi được. Vui lòng gọi 0365 365 365 hoặc nhắn Zalo." | Giữ |
| HTTP 200 nhưng `success:false` | 1 | như trên | Giữ |
| Mất mạng | 1 | như trên | Giữ |
| Treo > 15 giây (thêm `AbortSignal.timeout(15000)` ngày 10/11) | 1 | như trên, nút gửi mở lại | Giữ |
| API thật trên pages.dev (405) | 1 | như trên | Giữ |
| Popup, SĐT có khoảng trắng `090 000 0000` | 1 | Thành công | — |
| Popup: focus nằm trong dialog, phím Esc đóng (dialog gốc) | — | Đạt | — |

Còn lại cho IT/CRM (P0-03): gửi lead QA trên production, đối chiếu mã lead → CRM → đầu mối.

### P0-01 / P0-05 — Bảng địa điểm để Vận hành ký

| Trường | Auto365.vn – Trụ Sở Chính | 3M Pro Shop & 3M Training Center |
|---|---|---|
| Địa chỉ | 4/4/1/7 Đường số 3, Khu phố 31, P. Hiệp Bình, TP.HCM | 4/4/3/3 Đường số 3, P. Hiệp Bình, TP.HCM (theo trang auto365.vn/3m-pro-shop-tru-so-chinh) |
| Quan hệ | Cơ sở chính | Phát triển trong hệ sinh thái Auto365.vn – Trụ Sở Chính, thuộc 365Group |
| Google Maps | https://maps.app.goo.gl/sPeztDd996rHyLQM8 | hồ sơ "3M Pro Shop - Trụ Sở Chính" (CID 0xf92a0b6f200ee23b) |
| Hotline | 0365 365 365 (Phim · PPF · Wrap · Nội thất da); 0365 365 911 (Đèn · Camera · Phụ kiện · Xe điện) | Maps đang ghi 0587 365 365 — Vận hành xác nhận |
| Giờ mở cửa | 08:30 – 18:30, Thứ 2 – Chủ nhật (chủ trang chốt) | Vận hành xác nhận |
| Tư vấn, kiểm tra xe | Miễn phí (chủ trang chốt) | — |
| Trang hiển thị | 4/4/1/7 là địa chỉ chính (chủ trang chốt) | 4/4/3/3 ghi trong mục Đường đến (10/11) |
| Việc ngoài web | Maps còn ghi 4/23A + đóng Chủ nhật → người quản lý GBP sửa | Kiểm giờ + hotline trên Maps |

Vận hành ký: ____________ Ngày: ________

### P0-07 — Bảng nguồn clip/ảnh để Media ký

Chủ trang báo Media đã xác nhận (09/11/2026). Bảng để ký văn bản:

| Clip (YouTube ID) | Xe – sản phẩm | Nơi quay / thi công | Quyền dùng |
|---|---|---|---|
| `7-SRUonBS_o` | Mercedes GLC 300 – PPF 3M 200 Gloss | Trụ Sở Chính | Kênh Auto365 |
| `adTg0iqT3P0` | Ford Ranger Raptor – PPF 3M 150 Gloss | Trụ Sở Chính | Kênh Auto365 |
| `VhKw2KJCR8I` | VinFast VF8 – PPF 3M 50 Gloss | Trụ Sở Chính | Kênh Auto365 |
| `-H8RM4u4qck` | BMW 530i – PPF 3M 200 Gloss | Trụ Sở Chính | Kênh Auto365 |
| 48 case | theo bài đã đăng auto365.vn, mỗi bài ghi Trụ Sở Chính | Trụ Sở Chính | auto365.vn |
| Ảnh xưởng, sảnh, chứng nhận | ảnh thật tại cơ sở | Trụ Sở Chính / 3M Pro Shop | Auto365 |

Media ký: ____________ Ngày: ________

### Tổng trạng thái R2

| Mã | Phần web | Còn chờ |
|---|---|---|
| P0-01 | Mục Đường đến ghi riêng 3M Pro Shop 4/4/3/3, đã lên pages.dev | Vận hành ký bảng địa điểm |
| P0-02 | Xong + biên bản QA ở trên | — |
| P0-03 | Form gửi đúng trường | IT/CRM test lead production |
| P0-04 | Link đúng hồ sơ 3M Pro Shop, hiển thị 5,0 (chủ trang chốt) | Local SEO xác nhận |
| P0-05 | Xong (theo chốt chủ trang) | Vận hành ký |
| P0-06 | Preview noindex, canonical `/auto365-tru-so-chinh` | SEO/IT tạo URL 200 trên production |
| P0-07 | Xong | Media ký bảng |
| P1-01 | Ẩn có chủ đích | Kinh doanh cấp bảng giá |
| P1-02 | Chủ trang chốt bỏ nút "Tôi cũng đi xe này" (10/11): bấm thẻ mở bài case thực tế; tư vấn qua nút "Nhận tư vấn" chung | — |
| P1-03 | Chủ trang chốt: giới thiệu trước, dịch vụ sau; hero có nút "Xem dịch vụ tại Thủ Đức" | Giá/thời gian cần Kinh doanh |
| P1-04 | Xong + thanh mục lục mobile | Test máy thật |

## Kết quả U3 V2.2 R4 (10/11/2026) — PASS

Phiếu `AUTO365-U3-HQ-PREVIEW-20261110-R4`: **PASS U3 V2.2 trong phạm vi preview**, đóng P0-01, P0-02, P0-04, P1-02, P1-04; U1/U2/U3 PASS. Bộ chọn xe giữ ẩn (chưa có giá theo xe), không mở ticket mới.

Việc làm lúc go-live (đã chốt phương án, không phải lỗi preview):

| Mã | Việc |
|---|---|
| REL-01 | Route production `/auto365-tru-so-chinh` trả 200; đồng bộ canonical, schema.url, internal link, sitemap |
| REL-02 | Vận hành/KD chốt giờ 08:30–18:30, lịch tuần, "miễn phí", điểm tiếp nhận |
| REL-03 | IT/CRM đối soát lead, CRM, tracking |
| REL-04 | Thay đường dẫn asset preview trong structured data, gỡ banner demo, bỏ noindex |

## Bổ sung chiều 10/11/2026 — anh Nguyễn Quang Đạo đã duyệt 10/11/2026

2 FAQ thời gian thi công (phim 2–4 giờ, PPF theo phạm vi; khách Bình Dương/Biên Hòa/Vũng Tàu về trong ngày) và khối "Khi nào chưa cần làm?" (phim, đèn, PPF/Wrap, camera, bọc da). `lastReviewed` giữ 2026-11-10.
