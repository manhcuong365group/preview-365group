# Design system — 3M Crystalline CR BLK Pro

Tài liệu này là quy chuẩn giao diện cho landing page CR BLK Pro. Các token được đặt theo cách đặt tên quen thuộc của Tailwind CSS để dễ chuyển sang utility class hoặc component framework.

## Mục tiêu

- Ưu tiên đọc nhanh: giá, cấu hình 40/35/15, bằng chứng thi công và CTA.
- Tạo cảm giác kỹ thuật, chính hãng và đáng tin cậy; không dùng hiệu ứng làm giảm khả năng đọc.
- Mobile-first, vùng bấm tối thiểu 44px và nội dung không bị bóp/cắt.

## Tokens

| Nhóm | Token Tailwind tương đương | Giá trị hiện tại |
|---|---|---|
| Mực chính | `text-ink` | `#10131a` |
| Mực phụ | `text-ink-2` | `#171d27` |
| Nền trang | `bg-paper` | `#ffffff` |
| Nền nhấn | `bg-cream` | `#f7f4ee` |
| Chữ phụ | `text-muted` | `#636b79` |
| Viền | `border-line` | `#dde1e7` |
| Vàng thương hiệu | `amber-gold` | `#d8aa4d` |
| Đỏ CTA | `red-accent` | `var(--accent)` |
| Xanh liên hệ | `blue-link` | `#087be8` |
| Thành công | `green-success` | `#18a957` |

## Typography

- Font hệ thống: Inter, `ui-sans-serif`, `system-ui`.
- H1: `text-5xl` đến `text-7xl`, weight 800–900, tracking âm.
- H2: `text-3xl` đến `text-4xl`; mục hệ thống dùng tối đa 34px.
- H3/card title: `text-base` đến `text-xl`, weight 700–800.
- Body: `text-base`, line-height 1.6; mô tả phụ dùng `text-xs` hoặc `text-sm`.
- Không viết hoa toàn bộ nội dung dài; chỉ eyebrow dùng uppercase và letter-spacing.

## Layout & spacing

- Container chuẩn: `max-w-[1180px]`, ngang `px-6`; desktop tối đa 1200px.
- Khoảng cách section: 28–52px; giữa các card: 10–18px.
- Grid desktop: 3 cột; tablet: 2 cột; mobile: 1 cột.
- Ảnh dùng `w-full h-auto`; chỉ dùng `object-cover` cho thumbnail có chủ đích. Ảnh chứng nhận dùng `object-contain` để không cắt thông tin.

## Components

### Section heading

Eyebrow ngắn, H2 rõ intent, mô tả tối đa 2–3 dòng. Không lặp lại cùng một tiêu đề ở các section liền nhau.

### Card

`rounded-xl` hoặc `rounded-2xl`, viền `border-line`, nền trắng, shadow nhẹ. Card có thể bấm phải có trạng thái hover/focus rõ ràng nhưng không nhảy layout.

### CTA & liên hệ

CTA chính dùng đỏ thương hiệu; gọi điện dùng xanh lá; Zalo dùng xanh dương. Mọi số điện thoại dùng `tel:` và mọi link ngoài dùng `target="_blank" rel="noopener noreferrer"`.

### Case card

Thứ tự cố định: ảnh → tên xe → `Cấu hình đã dán: CR BLK 40 / 35 / 15` → link hồ sơ. Không đặt badge che lên ảnh.

### Warranty note

Luôn ghi: **Bảo hành lên đến 10 năm theo điều kiện 3M**, kèm hướng dẫn đối chiếu mã phim và eWarranty; không biến claim thành cam kết vô điều kiện.

## Responsive checklist

- Không có nội dung tràn ngang ngoài carousel case có chủ đích.
- H2 và paragraph không bị giới hạn chiều rộng quá hẹp.
- Form, nút và liên kết có vùng chạm tối thiểu 44px.
- Kiểm tra ở 320px, 375px, 768px, 1024px và 1440px.

## Accessibility & QA

- Mỗi ảnh có alt mô tả xe, mã phim hoặc hồ sơ.
- Focus-visible phải nhìn thấy trên mọi button/link.
- Tương phản chữ thường tối thiểu WCAG AA.
- Trước khi publish: kiểm tra console, link ảnh/OG 200, schema hợp lệ và xác nhận staging vẫn `noindex`.

