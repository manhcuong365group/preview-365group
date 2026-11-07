# 03 — Phiếu tự kiểm V1.9: Hub Bi gầm Toyota

| Trường | Giá trị |
|---|---|
| Trang | https://preview-365group.pages.dev/bi-gam/toyota/ |
| Bản kiểm | SHA-256 ghi trong [01](01_Noi_dung_Bi_gam_Toyota.md) |
| Ngày tự kiểm | 05/11/2026 (vá R2) |
| Chuẩn | V1.9 — 12 tiêu chí C1–C3, S1–S3, G1–G3, U1–U3; ngưỡng tổng ≥95, SEO ≥28,5/30, GEO ≥23,75/25 |
| Điểm reviewer gần nhất | 03/11/2026, SHA `a2cfcc07…`: C/S/G **77,0/85** (C 27,0 · SEO 28,5 · GEO 21,5), U1–U3 CX — **CHƯA QUA** |
| Trạng thái | **ĐÃ DUYỆT 04/11/2026** — anh Nguyễn Quang Đạo rà soát kỹ thuật (chủ quản xác nhận); vá R2 05/11; **phiếu U3 PASS · ĐÃ DUYỆT 05/11/2026** (đóng T01–T07, U1–U3) |

## 1. Reviewer 03/11/2026 — xử lý 04/11/2026

| Mã | Vấn đề | Đã làm 04/11 | Còn mở |
|---|---|---|---|
| T01 | Wigo, Yaris xếp nhóm Sedan | Tách tab Hatchback (2): Wigo, Yaris; Sedan (3): Vios, Corolla Altis, Camry; SUV 8, MPV 6, Bán tải 1 — tổng 20. 01/04 xuất lại theo nhóm mới | — |
| T02 | Thẻ "Tư vấn đúng theo từng xe" ghi "do kỹ thuật viên Nguyễn Quang Đạo kiểm duyệt" trong khi 05 chưa duyệt | Anh Đạo đã duyệt 04/11: giữ câu như hub VinFast; thêm byline "Rà soát kỹ thuật: Nguyễn Quang Đạo (04/11/2026)", schema `reviewedBy` + `lastReviewed` 2026-11-04; 05 ghi ĐÃ DUYỆT — hết mâu thuẫn | — |
| T03 | Địa chỉ 8 cơ sở Quảng Ninh ghi "Thành phố Quảng Ninh" | Mở ở bản 04/11 (R2 ghi nhận). Sửa 05/11: snapshot cơ sở đổi thành "tỉnh Quảng Ninh", 0 chuỗi sai còn lại | — |
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
| G3 | Nguồn, truy nguyên | 5/5 | Anh Đạo duyệt 04/11, tên + ngày trên trang và schema (`reviewedBy`, `lastReviewed`); case link bài gốc |
| | **GEO** | **23,8/25** | Qua ngưỡng 23,75 |
| | **Tổng C/S/G** | **80,5/85** | 28,2 + 28,5 + 23,8 |
| U1 | Đa thiết bị | 5/5 | Desktop/tablet/mobile trên trình duyệt + chủ quản test điện thoại thật OK 04/11/2026 |
| U2 | Hành động, tương tác | 5/5 | Bộ lọc, tra cứu cơ sở, CTA, form và tracking — phiếu U3 04/11 PASS, đã đóng |
| U3 | Bàn giao | 5/5 | 01–05 cùng build, 05 ĐÃ DUYỆT |
| | **Tổng** | **≈95,5/100** | 80,5 + 15,0 — qua 3 ngưỡng (≥95, SEO 28,5 ≥28,5, GEO 23,8 ≥23,75); phiếu U3 ĐÃ DUYỆT 05/11 (8/8 địa chỉ Quảng Ninh, 9 FAQ) |

## 3. Biên bản QA 04/11/2026 (bản vá)

| Phép thử | Kết quả |
|---|---|
| Tab Hatchback (2) / Sedan (3) / SUV (8) / MPV (6) / Bán tải (1) | Đúng thẻ, tổng 20 |
| Byline + thẻ "Tư vấn đúng theo từng xe" | Rà soát kỹ thuật Nguyễn Quang Đạo (04/11/2026); schema có `reviewedBy` |
| Badge hero, link danh bạ | Như hub VinFast |
| Desktop 1280px, tablet 768px, mobile 375px | Không tràn ngang |
| Lọc case, Bỏ lọc, FAQ, thẻ chưa có hồ sơ tự điền xe | Chạy đúng |
| Schema | CollectionPage, BreadcrumbList, Organization, ItemList (9), ItemList (22), FAQPage; có `reviewedBy` + `lastReviewed` |
| Điện thoại thật (chủ quản, 04/11/2026) | OK |

## 4. Reviewer R2 04/11 — xử lý 05/11/2026

- R2-01: 8 địa chỉ Quảng Ninh đã sửa thành phần cấp tỉnh (T03 đóng).
- R2-02: bảng mã thống nhất ở phiếu 05.
- R2-03: 02 bỏ 2 dòng "Chờ rà soát kỹ thuật"; 03 thêm T03; số FAQ đúng là 9.

## 5. Phụ lục V2.2 — delta theo R4 (07/11/2026)

Điểm V1.9 95,5 ở trên giữ làm lịch sử, không phải điểm V2.2. Bản nguồn: SHA ghi trong 01 cùng build. Phạm vi: demo frontend; backend/CRM/tracking/production = CX.

| Mục | Kết quả |
|---|---|
| V22-TY-01 form | Đóng (reviewer R4 kiểm trực tiếp CTX-01–04, 06; CTX-05 đối chiếu source; CTX-07 form nổi chưa thử chuyển ngữ cảnh) |
| R4-01 link nguồn | Mã hóa `(`/`)` trong 5 link Commons; export lại, kiểm 5/5 HTTP 200 |
| R4-02 Image Pack | Mục 9 ở 02: mapping 6 caption, TY-IMG-13 Camry, tài sản dùng chung, OG; bỏ dòng "chờ Media" |
| Ghi công ảnh | Dòng ghi công CC BY-SA 4.0 công khai dưới lưới xe |
| QA hiển thị phần mới | Chọn nhanh, CTA dưới lưới, caption, dòng ghi công: 375 / 768 / 1366 px, không tràn ngang (07/11, trình duyệt) |

| Nhóm | Tự chấm V2.2 (preview) |
|---|---|
| Content | 28,5/30 |
| SEO | 28,7/30 |
| GEO | 23,8/25 (G3 4,9 sau khi đóng R4-01/02) |
| U1–U3 | CX tới khi reviewer chốt phụ lục U3 V2.2 |
