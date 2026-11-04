# 03 — Phiếu tự kiểm V1.9: Hub Bi gầm Toyota

| Trường | Giá trị |
|---|---|
| Trang | https://preview-365group.pages.dev/bi-gam/toyota/ |
| Bản kiểm | SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_Toyota.md) |
| Ngày tự kiểm | 04/11/2026 (bản vá theo reviewer 03/11) |
| Chuẩn | V1.9 — 12 tiêu chí C1–C3, S1–S3, G1–G3, U1–U3; ngưỡng tổng ≥95, SEO ≥28,5/30, GEO ≥23,75/25 |
| Điểm reviewer gần nhất | 03/11/2026, SHA `a2cfcc07…`: C/S/G **77,0/85** (C 27,0 · SEO 28,5 · GEO 21,5), U1–U3 CX — **CHƯA QUA** |
| Trạng thái | **Chưa có rà soát kỹ thuật, chưa duyệt** |

## 1. Reviewer 03/11/2026 — xử lý 04/11/2026

| Mã | Vấn đề | Đã làm 04/11 | Còn mở |
|---|---|---|---|
| T01 | Wigo, Yaris xếp nhóm Sedan | Tách tab Hatchback (2): Wigo, Yaris; Sedan (3): Vios, Corolla Altis, Camry; SUV 8, MPV 6, Bán tải 1 — tổng 20. 01/04 xuất lại theo nhóm mới | — |
| T02 | Thẻ "Tư vấn đúng theo từng xe" ghi "do kỹ thuật viên Nguyễn Quang Đạo kiểm duyệt" trong khi 05 chưa duyệt | Thay bằng câu reviewer đề xuất: "Kỹ thuật viên kiểm tra hốc đèn, cấu hình điện và đời/phiên bản xe trước khi đề xuất mẫu bi gầm, phụ kiện và phương án lắp đặt." Trang không còn tên người duyệt; schema không có `reviewedBy` | Khi có duyệt thật mới thêm byline + `lastReviewed` |
| T03 | Địa chỉ Quảng Ninh ghi "Thành phố Quảng Ninh" trong gợi ý cơ sở | — | **Ngoài phạm vi trang:** dữ liệu lấy nguyên từ danh bạ auto365.vn/chi-nhanh; Operations sửa tại nguồn, build lại trang để đồng bộ snapshot |
| T04 | "Thi công tại 90+ chi nhánh" / "91 điểm tiếp nhận" chưa có nguồn xác nhận phạm vi dịch vụ bi gầm | Badge hero → "90+ điểm trong hệ thống Auto365"; link → "Xem 91 điểm trong danh bạ Auto365"; ghi chú bộ tìm: "Chọn tỉnh/thành và liên hệ để Auto365 xác nhận điểm tiếp nhận bi gầm Toyota, lịch kiểm tra và phụ kiện phù hợp với xe." | Hồ sơ chuẩn dịch vụ bi gầm dùng chung (Operations) nếu muốn mở lại câu thi công |
| T05 | Phiếu 03 ghi ≈91,7 nhưng cộng ra 92,7; cấp điểm U khi chưa kiểm | Bỏ tổng /100 tự chấm; U1–U3 để CX (mục 2) | — |
| T06 | Chưa kiểm mobile/tablet, chưa gửi lead tới nơi nhận thật | QA lại desktop/mobile/tablet bản 04/11 (mục 3). Lead: preview là pages.dev, `/api/leads` không có backend (405) — **không gửi được trên preview** | Lead test + CRM/tracking khi lên production |
| T07 | 5 thẻ dùng tên xe thay ảnh | Giữ placeholder (reviewer chấp nhận) | Ảnh đúng dòng khi có |
| T08 | Production | — | Checklist production ở 02 |

## 2. Tự chấm bản 04/11 (trên preview)

| Mã | Tiêu chí | Điểm | Căn cứ |
|---|---|---:|---|
| C1 | Chính xác và nhất quán | 9,0/10 | Đã sửa nhóm Hatchback và câu kiểm duyệt; địa chỉ Quảng Ninh chờ nguồn danh bạ; nội dung kỹ thuật chưa rà soát |
| C2 | Đầy đủ theo vai trò | 9,2/10 | Như reviewer |
| C3 | Tự nhiên và hữu ích | 9,5/10 | Như reviewer |
| | **Content** | **27,7/30** | |
| S1 | Intent và URL | 9,6/10 | Như reviewer |
| S2 | On-page | 9,5/10 | Như reviewer |
| S3 | Liên kết, triển khai | 9,4/10 | Như reviewer |
| | **SEO** | **28,5/30** | |
| G1 | Trả lời rõ | 9,3/10 | Như reviewer |
| G2 | Lập luận, giới hạn | 9,3/10 | Claim quy mô đã thu hẹp (T04); ví dụ kỹ thuật, hybrid còn chờ rà soát |
| G3 | Nguồn, truy nguyên | 3,5/5 | Không còn câu công khai tự nhận đã duyệt; vẫn thiếu xác nhận rà soát hiện hành |
| | **GEO** | **22,1/25** | Dưới ngưỡng 23,75 |
| | **Tổng C/S/G** | **78,3/85** | 27,7 + 28,5 + 22,1 |
| U1 | Đa thiết bị | CX | Biên bản mục 3 do team kiểm; chưa test máy thật |
| U2 | Hành động, tương tác | CX | Lọc, tìm, tự điền xe chạy; lead chưa kiểm được trên preview |
| U3 | Bàn giao | CX | 05 chưa duyệt |

Không ghi tổng /100 khi U còn CX. Để qua: rà soát kỹ thuật thật (G3, C1, G2) rồi đóng U1–U3.

## 3. Biên bản QA 04/11/2026 (bản vá)

| Phép thử | Kết quả |
|---|---|
| Tab Hatchback (2) / Sedan (3) / SUV (8) / MPV (6) / Bán tải (1) | Đúng thẻ, tổng 20 |
| Thẻ "Tư vấn đúng theo từng xe" | Không còn tên người kiểm duyệt |
| Badge hero, link danh bạ, ghi chú bộ tìm | Đúng câu T04 |
| Desktop 1280px, tablet 768px, mobile 375px | Không tràn ngang |
| Lọc case, Bỏ lọc, FAQ, thẻ chưa có hồ sơ tự điền xe | Chạy đúng |
| Schema | CollectionPage, BreadcrumbList, Organization, ItemList (9), ItemList (22), FAQPage; không có `reviewedBy` |
