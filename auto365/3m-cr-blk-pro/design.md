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

### Type scale

| Token | Size | Line-height | Weight dùng chính |
|---|---:|---:|---:|
| `text-xs` | 12px | 1.45 | 500–700 |
| `text-sm` | 14px | 1.5 | 400–600 |
| `text-base` | 16px | 1.6 | 400–500 |
| `text-lg` | 18px | 1.55 | 500–700 |
| `text-xl` | 20px | 1.35 | 700 |
| `text-2xl` | 24px | 1.2 | 700–800 |
| `text-3xl` | 30px | 1.12 | 700–800 |
| `text-4xl` | 36px | 1.08 | 700–800 |
| `text-hero` | clamp(48px, 5.4vw, 74px) | 1.02 | 800–900 |

Font weights chuẩn: `font-normal` 400, `font-medium` 500, `font-semibold` 600, `font-bold` 700, `font-extrabold` 800, `font-black` 900. Không dùng weight lẻ ngoài scale này.

### Spacing scale

Dùng scale 4px: `space-0` 0, `space-1` 4px, `space-2` 8px, `space-3` 12px, `space-4` 16px, `space-5` 20px, `space-6` 24px, `space-8` 32px, `space-10` 40px, `space-12` 48px, `space-16` 64px.

- Khoảng cách nội dung trong card: `p-4` đến `p-6`.
- Gap giữa card: `gap-3` đến `gap-5`.
- Section dọc: `py-8` mobile, `py-12` desktop.
- Heading và mô tả: `mb-3` hoặc `mb-4`; tránh margin tùy ý.

### Shape, border, elevation

- `rounded-sm`: 8px cho control nhỏ; `rounded-card`: 16px cho card; `rounded-lg`: 20px cho panel lớn.
- Border mặc định 1px `border-line`; focus 2px `ring-accent`.
- `shadow-card`: 0 8px 24px rgb(15 20 28 / 8%); chỉ dùng shadow-lg cho modal/hero.

### Breakpoints

`sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px. Thiết kế mobile trước; chỉ thay đổi grid, type và padding từ `md` trở lên.

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

## Component contracts

| Component | Padding | Gap | Type |
|---|---|---|---|
| Section heading | `0` | `gap-3` | eyebrow `text-xs`, H2 `text-3xl` |
| Standard card | `p-5` | `gap-3` | title `text-lg font-bold`, body `text-sm` |
| Price card | `p-6` | `gap-2` | price `text-3xl font-extrabold` |
| Case card | `p-4` | `gap-2` | vehicle `text-xl font-bold`, config `text-sm` |
| Button | `px-5 py-3` (min-height 44px) | `gap-2` | `text-sm font-bold` |
| Form field | `px-4 py-3` (min-height 44px) | `gap-2` | label `text-sm font-semibold` |

Mỗi component dùng đúng contract trên; nếu cần ngoại lệ phải ghi rõ trong CSS component và không tạo token mới tùy tiện.

## Responsive & QA

- Kiểm tra 320, 375, 768, 1024 và 1440px.
- Không để H2/paragraph bị bóp chiều rộng hoặc tràn ngang.
- Vùng bấm tối thiểu 44px; ảnh có `alt`; link ngoài có `noopener noreferrer`.
- Trước khi live: kiểm tra console, ảnh/OG trả 200, schema hợp lệ và staging giữ `noindex`.

## Nguồn tham chiếu

- Giao diện và cấu trúc nội dung: [Auto365 — Phim cách nhiệt](https://auto365.vn/phim-cach-nhiet).
- Cách tổ chức design tokens: [Tailwind CSS Theme](https://tailwindcss.com/docs/theme).
