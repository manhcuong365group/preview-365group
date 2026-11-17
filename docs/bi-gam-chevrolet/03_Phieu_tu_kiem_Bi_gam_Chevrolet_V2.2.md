# 03 — Phiếu tự kiểm hub Bi gầm Chevrolet (đối chiếu V2.3)

| Mục | Giá trị |
|---|---|
| Ngày tự kiểm | 17/11/2026 (lần 2, sau vá theo reviewer V2.3 R1 ngày 17/11) |
| Chuẩn | Auto365 V2.3 (14/11/2026); ngưỡng giữ như V2.2: Tổng ≥95 · SEO ≥28,50/30 · GEO ≥23,75/25 |
| Lần trước | 16/11/2026, tự chấm thang V2.2: 95,3 — không đổi nhãn thành điểm V2.3 |
| Lưu ý | Đây là điểm tự chấm của team, chờ reviewer tái kiểm V2.3 xác nhận |

| Nhóm | 16/11 (V2.2) | 17/11 (V2.3) | Căn cứ thay đổi |
|---|---:|---:|---|
| Nội dung /30 | 28,1 | 28,6 | Bỏ chỉ dẫn tới bài tư vấn chưa có, link giá tới `#san-pham`; FAQ Orlando ghi "phương án đã làm"; thêm lưu ý lens chưa đủ xác định lắp vừa; 2 ca 2019 gắn nhãn "Hồ sơ lưu trữ"; 4 lưu ý gộp 1 accordion. Trừ: 3 bài nguồn (5.2) chưa sửa, mã ca/ngày thi công (5.3) CX |
| SEO /30 | 28,8 | 29,0 | Title/meta theo đề xuất reviewer; alt ảnh dòng xe đúng chức năng; FAQ schema sinh lại từ DOM (9/9 khớp); dateModified 17/11 |
| GEO /25 | 23,9 | 24,1 | Câu trả lời giá dẫn tới đích có thật; giới hạn suy luận hai ca Orlando; cẩm nang xếp bài chọn/kiểm tra bi gầm lên đầu |
| UX U1–U3 /15 | 14,5 | 14,5 | U3 preview PASS 13/13 (phiếu 06); ảnh dòng xe + 3 ảnh "Vì sao chọn" thay ảnh designer; desktop + mobile 375 không tràn. Còn CRM/`generate_lead` trên URL chính thức |
| **Tổng** | **95,3** | **≈96,2/100** | Qua 3 ngưỡng (SEO 29,0 ≥28,50; GEO 24,1 ≥23,75) |

## Đối chiếu reviewer V2.3 R1 (17/11/2026)

| Mục R1 | Xử lý | Trạng thái |
|---|---|---|
| 5.1 Chỉ dẫn tới bài tư vấn chưa có | Khối gợi ý + FAQ chi phí dẫn tới trang bi gầm `#san-pham` | Đã sửa |
| 5.2 Ba bài nguồn (Orlando F10 Pro/Turbo; tỷ lệ 150%/180%; chú thích "Colorado") | Bài trên auto365.vn, ngoài preview; hub không lặp tỷ lệ | Chuyển Content + Kỹ thuật |
| 5.3 Mã ca, ngày thi công, cơ sở | Chưa có mã ca nội bộ; ngày Colorado là ngày đăng | CX — Kỹ thuật + Vận hành |
| 5.4 Nguồn ảnh dòng xe | 11 ảnh thay bằng ảnh designer Auto365 (gốc ở `_src-media/bi-gam-chevrolet`), bỏ ảnh Wikimedia; alt "ảnh nhận diện dòng xe" | Đã sửa |
| 5.5 Hồ sơ V2.3 | Phiếu này + phiếu 05 cập nhật | Đã sửa |
| 7 Title/mô tả, gợi ý cơ khí, FAQ nhiều đời | Theo đề xuất reviewer | Đã sửa |
| 7 Ca cũ, cẩm nang | Nhãn "Hồ sơ lưu trữ" cho 2 ca 2019; cẩm nang xếp lại theo mức hữu ích | Đã sửa |
| 6 Production (GET, CRM, generate_lead, mobile thật) | — | CX sau khi IT đăng |

## Rủi ro bị trừ
- 3 bài nguồn (5.2) còn sai SKU/tên xe/tỷ lệ — người đọc bấm thẻ vẫn thấy.
- 7/11 dòng xe chưa có hồ sơ (đã nhận diện rõ "Tư vấn cấu hình", không tạo URL rỗng).

## Việc còn lại
- Content + Kỹ thuật sửa 3 bài nguồn (5.2).
- Kỹ thuật + Vận hành bổ sung mã ca/ngày thi công/cơ sở (5.3).
- Chủ quản test điện thoại thật; IT nghiệm thu form → CRM, `generate_lead` trên URL chính thức.
