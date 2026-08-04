# M10 Ultra V3: chuẩn hóa schema và liên kết nội bộ

## Mục tiêu

Chuẩn hóa dữ liệu có cấu trúc của trang M10 Ultra V3 theo đúng trạng thái sản phẩm đang bán và bổ sung liên kết nội bộ có ngữ cảnh, có đích đến xác định được.

## Phạm vi thực hiện

1. Đổi schema từ `ProductGroup` về một thực thể `Product`.
   - M10 Ultra V3 đang có hai lựa chọn nhiệt màu nhưng chưa có SKU, URL và ảnh riêng cho từng lựa chọn.
   - Hai lựa chọn `5500K/5500K` và `5500K/3000K` được giữ dưới dạng thuộc tính sản phẩm.
   - Giữ trạng thái `InStock`, giá 2.000.000 VNĐ/cặp và không dùng ngôn ngữ mở bán trước.

2. Bổ sung liên kết nội bộ ngắn gọn, đúng ngữ cảnh:
   - `/den-gam-dang-roi` với neo “Đèn gầm dạng rời”.
   - `/anh-sang` với neo “Giải pháp ánh sáng Auto365”.
   - `/bui-hung-viet/` với neo “Bùi Hùng Việt” tại phần kiểm duyệt kỹ thuật. Trang hồ sơ này có trong mã nguồn hiện tại.

3. Giữ nguyên 10 câu hỏi FAQ và nội dung trả lời hiện có.

## Không đưa vào đợt này

- Liên kết hồ sơ Huỳnh Minh Tuấn vì chưa có trang hồ sơ tương ứng trong mã nguồn.
- Liên kết M10 V2, chính sách bảo hành, pháp lý/đăng kiểm hoặc chi nhánh vì chưa xác nhận được URL đích trong dự án.
- Khai báo SKU/biến thể thật, ảnh lắp đặt thực tế hoặc video thử nghiệm: sẽ thực hiện khi có dữ liệu chính thức.
- Thiết lập noindex, sitemap, robots hoặc canonical ở cấp máy chủ/CMS.

## Kiểm tra sau khi sửa

- JSON-LD đọc được và chỉ còn một `Product`, không còn `ProductGroup` hay `hasVariant`.
- Ba liên kết nội bộ sử dụng đường dẫn tương đối nội bộ, không có liên kết hồ sơ chưa tồn tại.
- Số câu hỏi FAQ vẫn là 10.
- Nội dung vẫn nhất quán: đây là đèn gầm dạng rời, không phải đèn pha nguyên cụm.

## Liên kết đề xuất cho đợt có dữ liệu trang đích

- Trang danh mục/so sánh M10 V2 khi có URL chính thức.
- Trang chính sách bảo hành Titan Moto/Auto365.
- Trang hướng dẫn quy định chiếu sáng, đăng kiểm hoặc pháp lý được Auto365 biên soạn.
- Hồ sơ chuyên gia Huỳnh Minh Tuấn khi được xuất bản.
