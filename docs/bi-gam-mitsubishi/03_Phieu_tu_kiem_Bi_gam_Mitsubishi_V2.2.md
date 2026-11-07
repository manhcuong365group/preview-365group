# 03 — Phiếu tự kiểm V2.2: Hub Bi gầm Mitsubishi

| Trường | Giá trị |
|---|---|
| Trang | https://preview-365group.pages.dev/bi-gam/mitsubishi/ |
| Bản kiểm | SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_Mitsubishi.md) |
| Ngày tự kiểm | 07/11/2026 (chấm lại sau duyệt, test lead, QA mobile) |
| Chuẩn | V2.2 — ngưỡng tổng ≥95, SEO ≥28,5/30, GEO ≥23,75/25 |
| Trạng thái | **ĐÃ DUYỆT nội dung 07/11/2026** — anh Nguyễn Quang Đạo (chủ quản xác nhận); lead test #33 vào CRM OK; phiếu U3 tự nghiệm thu: [06](06_Phieu_nghiem_thu_U3_Bi_gam_Mitsubishi.md) |

## 1. Tự chấm (trên preview)

| Mã | Tiêu chí | Điểm | Căn cứ |
|---|---|---:|---|
| C1 | Chính xác và nhất quán | 9,0/10 | 15 case + bài tư vấn từ bài đã đăng auto365.vn; nội dung kỹ thuật anh Đạo duyệt 07/11 |
| C2 | Đầy đủ theo vai trò | 9,3/10 | 13 dòng xe, 15 case, 4 hãng đèn, 5 bài tư vấn dòng xe |
| C3 | Tự nhiên và hữu ích | 9,5/10 | Giọng trung tính, có điều kiện kiểm xe; thẻ dòng xe đồng bộ ảnh tách nền, hero ảnh thi công thật |
| | **Content** | **27,8/30** | |
| S1 | Intent và URL | 9,6/10 | Trang hãng giữa hub bi gầm và bài dòng xe |
| S2 | On-page | 9,5/10 | 1 H1, canonical, 6 khối schema sinh từ HTML, nội dung render sẵn |
| S3 | Liên kết, triển khai | 9,4/10 | Link auto365.vn trong nội dung kiểm HTTP 200 ngày 07/11; hồ sơ 01–06 |
| | **SEO** | **28,5/30** | Qua ngưỡng 28,5 |
| G1 | Trả lời rõ | 9,3/10 | Box lưu ý, FAQ dòng có hồ sơ/đời cũ/HCM/tỉnh khác/chi phí/bảo hành |
| G2 | Lập luận, giới hạn | 9,3/10 | 3 nhóm nhu cầu kèm khi nào chưa cần lắp |
| G3 | Nguồn, truy nguyên | 5/5 | Anh Đạo duyệt 07/11: tên + ngày trên trang và schema (`reviewedBy`, `lastReviewed`); case link bài gốc |
| | **GEO** | **23,6/25** | **Chưa qua ngưỡng 23,75 (thiếu 0,15)** |
| U1 | Đa thiết bị | 4,5/5 | 375 px (giả lập): không tràn ngang, tab/tìm/lọc case/bỏ lọc/tự điền xe chạy, ảnh tải đủ; 1366 px OK. **Chưa test điện thoại thật** |
| U2 | Tương tác, lead | 5/5 | Lead test #33 (service "Bi gầm Mitsubishi", xe Mitsubishi Xpander Cross 2023) gửi /api/leads → `success:true`, `test:true` ngày 07/11 |
| U3 | Bàn giao | 4,5/5 | 01–06 cùng build; phiếu U3 tự nghiệm thu, chờ reviewer ký |
| | **Tổng** | **≈93,9/100** | **Chưa đạt** (tổng <95, GEO <23,75) |

## 2. Còn thiếu để đạt

1. GEO +0,15: bổ sung lập luận/ví dụ có nguồn (vd bảng đời xe ↔ mẫu đèn đã lắp theo case, FAQ chọn 2.0 hay 3.0 inch cho từng dòng) — cần anh Đạo duyệt phần thêm.
2. U1: chủ quản test điện thoại thật.
3. U3: reviewer ký phiếu U3.
