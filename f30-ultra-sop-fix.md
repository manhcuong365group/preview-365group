# Kế hoạch sửa đổi Landing Page X-Light F30 Ultra theo SOP-SEO-GEO-01

Kế hoạch này chi tiết các bước cần thực hiện trên file [xlight-f30-ultra.html](file:///d:/project/preview-365group/auto365/xlight-f30-ultra/xlight-f30-ultra.html) để đáp ứng đầy đủ các tiêu chí nghiệm thu của tài liệu SOP.

---

## 🎯 Mục tiêu
Đạt trạng thái 🟢 **READY TO PUBLISH** cho trang Landing Page sản phẩm X-Light F30 Ultra bằng cách cập nhật nội dung, chuẩn hóa Schema `@graph` (ở dạng thủ công/tĩnh theo yêu cầu của bạn), và rà soát các cổng nghiệm thu kỹ thuật.

---

## 📋 Chi tiết các hạng mục thay đổi

### 1. Cập nhật nội dung thân bài (Content)
*   **Hạng mục 1.1:** Sửa từ khóa cũ tại dòng 1748.
    *   *Từ cũ:* `Đèn gầm lắp rời cần được thi công...`
    *   *Từ mới:* `Đèn gầm dạng rời cần được thi công...`
*   **Hạng mục 1.2:** Chuẩn hóa câu tuyên bố hiệu năng "3–4 làn đường" tại dòng 1396-1397.
    *   *Nội dung cũ:* `...hỗ trợ quan sát 3 đến 4 làn đường trong điều kiện phù hợp.`
    *   *Nội dung mới:* `...trong điều kiện phù hợp, vùng sáng có thể bao phủ khoảng 3–4 làn đường (tùy cách căn chỉnh và điều kiện vận hành thực tế).`

### 2. Chuẩn hóa Schema Structured Data sang cấu trúc `@graph` (Thủ công)
Hợp nhất các thẻ script LD+JSON riêng lẻ ở cuối file thành một cấu trúc `@graph` duy nhất chứa:
1.  **WebPage**
2.  **BreadcrumbList**
3.  **Product**
4.  **FAQPage** (chứa 15 câu FAQ tĩnh đã kiểm tra khớp 100% nội dung hiển thị)

**Đảm bảo trùng khớp hoàn toàn 6 vị trí URL:**
*   WebPage `@id` -> `https://auto365.vn/den-gam-dang-roi-x-light-f30-ultra#webpage`
*   WebPage `url` -> `https://auto365.vn/den-gam-dang-roi-x-light-f30-ultra`
*   Breadcrumb `@id` -> `https://auto365.vn/den-gam-dang-roi-x-light-f30-ultra#breadcrumb`
*   Breadcrumb vị trí 3 `item` -> `https://auto365.vn/den-gam-dang-roi-x-light-f30-ultra`
*   Product `@id` -> `https://auto365.vn/den-gam-dang-roi-x-light-f30-ultra#product`
*   Product `offers.url` -> `https://auto365.vn/den-gam-dang-roi-x-light-f30-ultra`

---

## 🔍 Kế hoạch kiểm tra & Nghiệm thu (Verification)
*   **Kiểm tra tính hợp lệ của Schema:** Xác thực chuỗi JSON-LD sau khi gộp bằng các công cụ kiểm tra cú pháp để đảm bảo không bị lỗi dấu phẩy hay đóng mở ngoặc.
*   **Kiểm tra CTA (Gọi/Tư vấn):** Đảm bảo thuộc tính `href` của các nút CTA (`tel:19009365` và `#f30-tu-van`) hoạt động chính xác, không bị lỗi `about:invalid#zCSafez` sau khi render.
