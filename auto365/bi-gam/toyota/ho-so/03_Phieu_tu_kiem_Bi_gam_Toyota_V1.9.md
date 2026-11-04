# 03 — Phiếu tự kiểm V1.9: Hub Bi gầm Toyota

| Trường | Giá trị |
|---|---|
| Trang | https://preview-365group.pages.dev/bi-gam/toyota/ |
| Bản kiểm | SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_Toyota.md) |
| Ngày tự kiểm | 04/11/2026 (bản vá theo reviewer 03/11) |
| Chuẩn | V1.9 — 12 tiêu chí C1–C3, S1–S3, G1–G3, U1–U3; ngưỡng tổng ≥95, SEO ≥28,5/30, GEO ≥23,75/25 |
| Điểm reviewer gần nhất | 03/11/2026, SHA `a2cfcc07…`: C/S/G **77,0/85** (C 27,0 · SEO 28,5 · GEO 21,5), U1–U3 CX — **CHƯA QUA** |
| Trạng thái | **ĐÃ DUYỆT 04/11/2026** — anh Nguyễn Quang Đạo rà soát kỹ thuật (chủ quản xác nhận); chờ reviewer chấm lại |

## 1. Reviewer 03/11/2026 — xử lý 04/11/2026

| Mã | Vấn đề | Đã làm 04/11 | Còn mở |
|---|---|---|---|
| T01 | Wigo, Yaris xếp nhóm Sedan | Tách tab Hatchback (2): Wigo, Yaris; Sedan (3): Vios, Corolla Altis, Camry; SUV 8, MPV 6, Bán tải 1 — tổng 20. 01/04 xuất lại theo nhóm mới | — |
| T02 | Thẻ "Tư vấn đúng theo từng xe" ghi "do kỹ thuật viên Nguyễn Quang Đạo kiểm duyệt" trong khi 05 chưa duyệt | Anh Đạo đã duyệt 04/11: giữ câu như hub VinFast; thêm byline "Rà soát kỹ thuật: Nguyễn Quang Đạo (04/11/2026)", schema `reviewedBy` + `lastReviewed` 2026-11-04; 05 ghi ĐÃ DUYỆT — hết mâu thuẫn | — |
| T04 | "Thi công tại 90+ chi nhánh" / "91 điểm tiếp nhận" chưa có nguồn xác nhận phạm vi | Giữ như hub VinFast (đã duyệt); anh Đạo duyệt câu này trên trang Toyota 04/11 | — |
| T05 | Phiếu 03 ghi ≈91,7 nhưng cộng ra 92,7; cấp điểm U khi chưa kiểm | Bỏ tổng /100 tự chấm; U1–U3 để CX (mục 2) | — |
| T06 | Chưa kiểm mobile/tablet, chưa gửi lead tới nơi nhận thật | QA lại desktop/mobile/tablet bản 04/11 (mục 3). Lead: preview là pages.dev, `/api/leads` không có backend (405) — **không gửi được trên preview** | Lead test + CRM/tracking khi lên production |
| T07 | 5 thẻ dùng tên xe thay ảnh | Thêm ảnh 5 xe (Wikimedia Commons, CC BY-SA, đã tách nền — ghi công ở 02) | — |
| T08 | Production | — | Checklist production ở 02 |

## 2. Tự chấm bản 04/11 (trên preview, sau duyệt)

| Mã | Tiêu chí | Điểm | Căn cứ |
|---|---|---:|---|
| C1 | Chính xác và nhất quán | 9,5/10 | Nhóm Hatchback đúng; nội dung kỹ thuật đã rà soát; trang, schema, 05 thống nhất |
| C2 | Đầy đủ theo vai trò | 9,2/10 | Như reviewer |
| C3 | Tự nhiên và hữu ích | 9,5/10 | Như reviewer |
| | **Content** | **28,2/30** | |
| S1 | Intent và URL | 9,6/10 | Như reviewer |
| S2 | On-page | 9,5/10 | Như reviewer |
| S3 | Liên kết, triển khai | 9,4/10 | Như reviewer |
| | **SEO** | **28,5/30** | |
| G1 | Trả lời rõ | 9,3/10 | Như reviewer |
| G2 | Lập luận, giới hạn | 9,5/10 | Ví dụ kỹ thuật, hybrid đã rà soát |
| G3 | Nguồn, truy nguyên | 4,8/5 | Người rà soát đứng tên + ngày trên trang và schema; case link bài gốc |
| | **GEO** | **23,6/25** | |
| | **Tổng C/S/G** | **80,3/85** | 28,2 + 28,5 + 23,6 |
| U1 | Đa thiết bị | CX | Desktop/tablet/mobile kiểm trên trình duyệt; chưa test máy thật |
| U2 | Hành động, tương tác | CX | Lead chỉ kiểm được trên production |
| U3 | Bàn giao | 5/5 | 01–05 cùng build, 05 ĐÃ DUYỆT |

## 3. Biên bản QA 04/11/2026 (bản vá)

| Phép thử | Kết quả |
|---|---|
| Tab Hatchback (2) / Sedan (3) / SUV (8) / MPV (6) / Bán tải (1) | Đúng thẻ, tổng 20 |
| Byline + thẻ "Tư vấn đúng theo từng xe" | Rà soát kỹ thuật Nguyễn Quang Đạo (04/11/2026); schema có `reviewedBy` |
| Badge hero, link danh bạ | Như hub VinFast |
| Desktop 1280px, tablet 768px, mobile 375px | Không tràn ngang |
| Lọc case, Bỏ lọc, FAQ, thẻ chưa có hồ sơ tự điền xe | Chạy đúng |
| Schema | CollectionPage, BreadcrumbList, Organization, ItemList (9), ItemList (22), FAQPage; có `reviewedBy` + `lastReviewed` |
