# Auto365 Hub Phim Cách Nhiệt V3 — Knowledge Library Implementation Plan

> **Execution:** Inline Execution trong `/mnt/data`, không đụng repo/live, không commit/push.

**Goal:** Dựng prototype V3 tách hoàn toàn Knowledge Map (điều hướng editorial) khỏi Library Filter (tìm/lọc corpus), đủ khả năng scale lên hàng trăm bài mà không biến hub thành archive dài.

**Architecture:** Một hub landing dùng Knowledge Map 8 nhánh để định hướng intent, sau đó thư viện độc lập có search/filter/pagination. Knowledge Map không điều khiển filter; filter chỉ tác động lên article library. Dữ liệu trong prototype là demo-only và được đánh dấu noindex.

**Tech Stack:** HTML5, CSS thuần, JavaScript thuần, Python static test.

## Global Constraints
- Domain link mặc định: `https://auto365.vn/...`.
- Không dùng base64 image.
- Không external JavaScript dependency.
- `noindex,nofollow` vì là prototype.
- Light editorial/premium, giữ tinh thần V14.3.1.
- Responsive mobile và `prefers-reduced-motion`.
- Tree và Filter phải là hai component độc lập.
- Không biến hãng xe/model/thương hiệu thành tầng taxonomy thứ ba trong prototype.

## Task 1 — Knowledge Map độc lập
- [x] 8 nhánh editorial cố định.
- [x] Mỗi nhánh có mô tả, vai trò, bài nền tảng gợi ý và CTA.
- [x] Không có select/input/filter bên trong Knowledge Map.

## Task 2 — Library Filter độc lập
- [x] Search text.
- [x] Nhánh chủ đề.
- [x] Thương hiệu phim.
- [x] Hãng xe.
- [x] Loại nội dung.
- [x] Nhu cầu.
- [x] Năm cập nhật.
- [x] Active chips + reset.
- [x] Mobile filter drawer.

## Task 3 — Content modules
- [x] Hero + Quick Answer.
- [x] Learning path.
- [x] Cornerstone articles.
- [x] Comparison/data block.
- [x] Real-case showcase.
- [x] 12-card library demo + pagination.
- [x] Trust/methodology.
- [x] Author/reviewer.
- [x] Related hubs + CTA.

## Task 4 — Verification
- [x] Static structural tests.
- [x] JS syntax check.
- [x] CSS brace check.
- [x] Local HTTP smoke test.
- [x] ZIP source package.
