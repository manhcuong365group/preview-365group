# CR BLK Pro Tailwind UI Kit Design

## Mục tiêu

Đưa landing page CR BLK Pro về một hệ thống giao diện Auto365 nhất quán, responsive và dễ tái sử dụng; giữ toàn bộ nội dung, SEO, schema, URL và hành vi đang hoạt động.

## Token layer

Tạo nhóm CSS custom properties theo cú pháp/scale Tailwind: màu semantic, typography, spacing bội số 4px, radius, elevation và breakpoints `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px. Không thêm Tailwind runtime hay dependency mới; trang vẫn là HTML/CSS tĩnh.

## Component layer

Chuẩn hóa sáu component có tính lặp lại:

1. Section header — eyebrow tùy chọn, H2, description.
2. Button/link — primary, outline, text link; vùng bấm tối thiểu 44px.
3. Card — base, price, case, location/system, knowledge.
4. Filter chip — trạng thái default/active/focus.
5. Form control — input, select, textarea, label, error/focus.
6. Media card — ảnh giữ đúng tỷ lệ; thumbnail cắt có chủ đích; chứng nhận không cắt mất nội dung.

## Quy tắc visual

- Nền mặc định trắng; màu đỏ Auto365 cho CTA/chip active; vàng giới hạn cho hero và metadata kỹ thuật.
- H1 dùng 48–74px; H2 dùng 28–36px; H3 16–20px; body 15–16px.
- Spacing chỉ dùng scale 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px.
- Card dùng border mảnh, radius 16px và shadow nhẹ; không dùng hiệu ứng glass hoặc gradient tại các section nội dung.
- Desktop dùng grid 3 cột khi phù hợp; tablet 2 cột; mobile 1 cột. Case carousel vẫn được phép cuộn ngang trên mobile.

## Phạm vi áp dụng

Áp dụng cho hero, price cards, case/filter, hệ thống Auto365, khối lý do, media, FAQ, form tư vấn và footer. Không đổi copy, link, dữ liệu giá, ảnh, schema hoặc JavaScript tương tác trừ thay đổi class/style cần thiết.

## Kiểm tra nghiệm thu

- Không phát sinh lỗi HTML/JS.
- Hành vi FilmMatch, filter case, click card giá mở modal và form tư vấn vẫn hoạt động.
- Không có horizontal overflow tại 320px ngoài carousel case.
- Kiểm tra hiển thị tại 320, 375, 768, 1024 và 1440px.
- Không giảm tương phản, alt ảnh hoặc vùng bấm.
