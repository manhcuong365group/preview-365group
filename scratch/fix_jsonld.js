const fs = require('fs');
const file = 'auto365/bong-led/index.html';
let html = fs.readFileSync(file, 'utf8');

const newJsonLd = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Bóng LED X-Light có tích hợp chung cả Pha (chiếu xa) và Cos (chiếu gần) không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tùy thuộc vào chuẩn chân bóng của xe. Với chân H4, bóng LED X-Light đã tích hợp sẵn cả 2 chế độ Pha và Cos. Đối với các xe dùng chóa đèn tách biệt (ví dụ chân H7 cho Cos và 9005 cho Pha), bạn sẽ cần nâng cấp riêng từng vị trí. Auto365 sẽ xác nhận cấu hình chóa đèn trước khi tư vấn."
      }
    },
    {
      "@type": "Question",
      "name": "Ánh sáng 6000K của X-Light S6 Pro V2 đi mưa và sương mù có tốt không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "4300K có sắc ánh sáng ấm hơn 6000K. Khả năng quan sát trong mưa hoặc sương mù còn phụ thuộc cụm đèn, cách phân bố ánh sáng, phản xạ mặt đường và điều kiện thử. Cần đối chiếu trên cấu hình cụ thể; không kết luận chỉ từ nhiệt màu."
      }
    },
    {
      "@type": "Question",
      "name": "Sau này tôi có thể tự tháo bóng LED X-Light để về lại Halogen \\"zin\\" không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hoàn toàn được. Quá trình nâng cấp tại Auto365 sử dụng giắc cắm zin (Plug & Play) và không cắt chế chóa đèn. Nếu sau này cần bán xe hoặc về zin, kỹ thuật viên có thể dễ dàng tháo bóng LED và lắp lại Halogen nguyên bản mà không làm hỏng kết cấu."
      }
    },
    {
      "@type": "Question",
      "name": "Công suất bóng X-Light (55W-65W) có làm hao bình ắc-quy hoặc quá tải điện không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Không. Công suất 55W-65W của bóng LED X-Light thực chất chỉ bằng hoặc thậm chí thấp hơn bóng Halogen nguyên bản (thường là 55W/60W). Do đó, máy phát và bình ắc-quy của xe hoàn toàn tải được ổn định mà không cần độ chế thêm rơ-le."
      }
    },
    {
      "@type": "Question",
      "name": "Tuổi thọ công bố là 30.000 giờ, tại sao X-Light chỉ bảo hành 24 tháng?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bảo hành áp dụng theo từng mã và điều kiện của sản phẩm. S3 Pro V2 và S6 Pro V2 công bố 24 tháng; T10 công bố 12 tháng. Khi đặt mua, xác nhận chứng từ, phạm vi và điểm tiếp nhận của đúng sản phẩm."
      }
    },
    {
      "@type": "Question",
      "name": "Thay bóng LED X-Light có chắc chắn 100% qua được đăng kiểm không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Phương án thay bóng phụ thuộc cấu hình cụm đèn, chân giắc, ngàm, nắp chụp và hệ điện. Auto365 cần kiểm tra xe trước khi xác nhận phụ kiện, mức can thiệp và chi phí lắp."
      }
    }
  ]
}
</script>`;

const jsonLdRegex = /<script type="application\/ld\+json">\s*\{\s*"@context": "https:\/\/schema\.org",\s*"@type": "FAQPage",[\s\S]*?<\/script>/;
html = html.replace(jsonLdRegex, newJsonLd);

fs.writeFileSync(file, '\ufeff' + (html.charCodeAt(0) === 0xFEFF ? html.slice(1) : html), 'utf8');
console.log('Fixed JSON-LD FAQ.');
