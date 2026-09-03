# Design.md — CR BLK Pro (đồng bộ Auto365)

Quy chuẩn gọn cho trang CR BLK Pro, bám theo giao diện hiện có của Auto365 và cách tổ chức token trong Tailwind CSS Theme. Tailwind Theme dùng CSS variables làm nguồn token cho màu, font, breakpoint và spacing; tài liệu này chỉ định nghĩa các token cần thiết cho trang, không tạo một design system mới.

## Nguyên tắc

- Giữ cảm giác Auto365: nền trắng, chữ đen/xám, điểm nhấn đỏ; vàng chỉ dùng cho hero hoặc thông tin kỹ thuật.
- Nội dung ưu tiên theo thứ tự: cấu hình 40/35/15 → giá → bằng chứng/case → tư vấn.
- Container, card và khoảng cách phải giống các trang Auto365 hiện có; không dùng gradient hoặc shadow nặng ngoài hero.

## Theme tokens

```css
@theme {
  --color-ink: #10131a;
  --color-muted: #636b79;
  --color-paper: #ffffff;
  --color-line: #dde1e7;
  --color-accent: #ed0016;
  --color-gold: #d8aa4d;
  --radius-card: 16px;
  --shadow-card: 0 8px 24px rgb(15 20 28 / 8%);
  --font-sans: Inter, ui-sans-serif, system-ui, sans-serif;
}
```

Khi triển khai bằng Tailwind, dùng các lớp tương ứng như `bg-paper`, `text-ink`, `text-muted`, `border-line`, `text-accent`, `rounded-card` và `shadow-card`. Trong file HTML hiện tại, các token tương ứng nằm trong `:root` và phải được ưu tiên tái sử dụng.

## Layout

- Container: `max-width: 1180px`, ngang `24px` desktop và `16px` mobile.
- Section: padding dọc 28–52px; không để hai section liền nhau có khoảng trắng quá lớn.
- Grid: 3 cột desktop, 2 cột tablet, 1 cột mobile; gap 14–18px.
- Ảnh nội dung dùng `width: 100%; height: auto`; thumbnail mới dùng `object-cover`.

## Typography

- H1 hero: 48–74px desktop, giảm theo viewport.
- H2 section: 28–36px; riêng mục hệ thống tối đa 34px.
- H3 card: 16–20px, đậm vừa phải.
- Body: 15–16px, line-height 1.55–1.6; mô tả phụ 12–14px.

## Component rules

- Card: nền trắng, viền `line`, bo góc 16px, shadow nhẹ; hover chỉ nâng 2–3px.
- CTA chính: đỏ Auto365; gọi điện: xanh lá; liên kết phụ: đỏ hoặc xanh dương.
- Case card: ảnh → tên xe → `Cấu hình đã dán: CR BLK 40 / 35 / 15` → link hồ sơ. Không đặt badge che ảnh.
- Hệ thống Auto365: mỗi mục phải có mô tả ngắn, link riêng và số điện thoại đúng địa điểm.
- Bảo hành: ghi “lên đến 10 năm theo điều kiện 3M”, kèm eWarranty; không diễn đạt như cam kết vô điều kiện.

## Responsive & QA

- Kiểm tra 320, 375, 768, 1024 và 1440px.
- Không để H2/paragraph bị bóp chiều rộng hoặc tràn ngang.
- Vùng bấm tối thiểu 44px; ảnh có `alt`; link ngoài có `noopener noreferrer`.
- Trước khi live: kiểm tra console, ảnh/OG trả 200, schema hợp lệ và staging giữ `noindex`.

## Nguồn tham chiếu

- Giao diện và cấu trúc nội dung: [Auto365 — Phim cách nhiệt](https://auto365.vn/phim-cach-nhiet).
- Cách tổ chức design tokens: [Tailwind CSS Theme](https://tailwindcss.com/docs/theme).
