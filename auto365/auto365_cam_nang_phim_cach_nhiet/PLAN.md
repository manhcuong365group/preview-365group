# Auto365 Hub Phim Cách Nhiệt V2 — Knowledge Tree Implementation Plan

**Goal:** Nâng prototype Hub Phim cách nhiệt V1 thành hub có cây chủ đề cấp 2 đủ khả năng scale cho hàng trăm bài, nhưng vẫn giữ giao diện premium/light và không tạo taxonomy sâu quá mức.

**Architecture:** Một hub cha `/tin-tuc/cam-nang-phim-cach-nhiet` hiển thị 8 nhánh kiến thức cấp 2. Mỗi nhánh được gắn một `route_mode`: `subhub` nếu có search intent riêng và đủ độ sâu nội dung, `filter` nếu chỉ là chiều lọc, hoặc `collection` nếu là tập hợp discovery. Bài viết vẫn giữ 1 URL/1 canonical; nhánh phụ chỉ điều hướng/phân loại.

**Tech Stack:** Standalone HTML + CSS, không framework, không DB, noindex demo-only.

## Global Constraints

- Giữ design language của Auto365 Newsroom V14.3.1: light editorial, nhiều khoảng thở, red accent có kiểm soát.
- Không render hàng trăm bài trên hub landing.
- Cây taxonomy tối đa 2 tầng: Hub → Subtopic → Article.
- Hãng xe/model/thương hiệu không tạo tầng taxonomy thứ ba; dùng filter/tag.
- Demo-only: không schema production, không sitemap, không canonical giả, không publish/index.
- Responsive desktop/tablet/mobile; support `prefers-reduced-motion`.

---

### Task 1: Knowledge Map cấp 2

**Files:**
- Modify prototype source: `/mnt/data/Auto365_Hub_Phim_Cach_Nhiet_V1_Premium.html`
- Produce: `/mnt/data/Auto365_Hub_Phim_Cach_Nhiet_V2_Knowledge_Tree.html`

**Produces:** 8 nhánh chủ đề hiển thị trực tiếp trên hub.

- [ ] Thêm section `#knowledge-tree` ngay sau Quick Answer.
- [ ] Hiển thị 8 nhánh: Chọn phim; Thông số & đo kiểm; Thương hiệu; Giá & chi phí; Thi công & chăm sóc; Pháp lý & tầm nhìn; Theo dòng xe; Case thực tế.
- [ ] Gắn badge `Sub-hub`, `Filter`, `Collection` để thể hiện route strategy.
- [ ] Mỗi nhánh có mô tả ngắn + CTA.

### Task 2: Navigation + Scalable Library

**Produces:** Hub landing không biến thành archive dài.

- [ ] Thêm `Cây chủ đề` vào sticky hub navigation.
- [ ] Giữ 6 bài visible trong library preview.
- [ ] Thêm library navigator thể hiện filter theo nhánh, hãng xe, dòng xe, loại nội dung.
- [ ] Giữ pagination crawlable bằng anchor link demo.

### Task 3: Visual hierarchy + responsive

**Produces:** Knowledge Tree vẫn đọc tốt trên mobile.

- [ ] Desktop: 3-column composition (overview + 8 branches + route legend).
- [ ] Tablet: 2-column.
- [ ] Mobile: 1-column, nhánh trở thành stacked cards.
- [ ] Không dùng horizontal overflow cho nội dung chính.
- [ ] Giảm motion nếu `prefers-reduced-motion: reduce`.

### Task 4: Verification

- [ ] `noindex,nofollow` còn nguyên.
- [ ] Có đúng 8 `.branch-card`.
- [ ] Có đủ 3 route mode: subhub/filter/collection.
- [ ] `#knowledge-tree` có trong DOM.
- [ ] Không có ảnh base64.
- [ ] Không có external script dependency.
- [ ] File standalone mở trực tiếp được.

## Acceptance

- Hub nhìn như một knowledge center, không như category archive.
- Người dùng hiểu ngay “Phim cách nhiệt” có các nhánh nào và nên bắt đầu ở đâu.
- UI đủ generic để tái sử dụng cho Ánh sáng (~1.000 bài) và các pillar còn lại.
