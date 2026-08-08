# AUTO365 Newsroom V2.6.2 Layout + Branch CTA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Nâng V2.6.1 thành V2.6.2 với taxonomy dễ đọc hơn, Xe thực tế và Đọc theo loại bài hiển thị 3 card × 2 hàng bằng Swiper, video 2 card đồng cấp, báo chí có rail ngang, và thêm block chi nhánh + CTA thật.

**Architecture:** Giữ Global Finder và Vehicle Finder độc lập. `filters.js` chỉ quản lý state/filter/render; `mockup.js` chỉ quản lý Swiper, FAQ và UI helper. Không thay taxonomy/data contract hiện có ngoài các thuộc tính cần cho presentation.

**Tech Stack:** HTML5, CSS3, JavaScript thuần, Swiper 14 CDN, pytest contract tests.

## Global Constraints
- Prototype `noindex,nofollow`; không đụng production.
- Domain/link mặc định dùng `https://auto365.vn/...`.
- Vehicle Finder không chia sẻ state với Global Finder.
- Xe thực tế desktop: 3 card/row × 2 rows; tablet/mobile vẫn swipe ngang.
- Article feed desktop: 3 card/row × 2 rows; tablet/mobile vẫn swipe ngang.
- Video: 2 card đồng cấp, ảnh 16:9 trên, text dưới; mobile swipe ngang.
- Press: 1 lead + secondary rail chạy ngang; mobile swipe ngang.
- Branch CTA: dùng dữ liệu live từ `/chi-nhanh`, CTA chi nhánh + Zalo + hotline CSKH 1900 9365.
- Không dùng `href="#"`; ảnh có alt; button có type.

---

### Task 1: Contract tests cho layout mới
- [ ] Thêm test fail cho 3×2 vehicle/article Swiper, video equal cards, press rail, branch block, CTA link/hotline, taxonomy opacity.
- [ ] Chạy pytest và xác nhận fail vì V2.6.1 chưa có yêu cầu mới.

### Task 2: HTML structure
- [ ] Cập nhật tiêu đề version/meta.
- [ ] Đổi video thành Swiper 2 card đồng cấp.
- [ ] Thêm navigation cho press secondary rail.
- [ ] Thêm block Hệ thống chi nhánh trước CTA cuối với link `/chi-nhanh`, Zalo và hotline 1900 9365.
- [ ] Giữ Global/Vehicle finder riêng.

### Task 3: CSS presentation
- [ ] Tăng độ hiện taxonomy image lên mức hỗ trợ text, không lấn typography.
- [ ] Vehicle/article desktop 3 card × 2 rows và fallback cùng contract.
- [ ] Video equal card Swiper desktop 2.1 card, mobile 1.12 card.
- [ ] Press secondary rail ngang, lead giữ riêng.
- [ ] Styling branch block + stronger CTA.

### Task 4: Swiper JS
- [ ] Vehicle/article options desktop `slidesPerView: 3`, `grid.rows: 2`.
- [ ] Khởi tạo video Swiper và press rail 1-row ngang.
- [ ] Giữ resilient fallback khi CDN fail.

### Task 5: Verification/package
- [ ] pytest toàn bộ.
- [ ] `node --check filters.js` và `node --check mockup.js`.
- [ ] Audit duplicate id, alt, button type, hash-only links, external CTA links.
- [ ] Build standalone HTML và ZIP.
