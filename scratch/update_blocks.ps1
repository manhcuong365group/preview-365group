$htmlPath = "auto365\bi-gam\vinfast-vf3\index.html"
$content = Get-Content -Path $htmlPath -Raw -Encoding UTF8

# Extract FAQ block
$faqRegex = '(?s)<section data-reveal class="vf3lp-band vf3lp-band--soft">\s*<div class="vf3lp-in">\s*<div class="vf3lp-head">\s*<h2 id="vf3lp-faq".*?</section>'
$faqBlock = [regex]::Match($content, $faqRegex).Value

# Remove FAQ block from original position
$content = $content -replace $faqRegex, ""

# Define the new Advantages block
$advBlock = '<section data-reveal class="vf3lp-band vf3lp-band--soft">
  <div class="vf3lp-in">
    <div class="vf3lp-head">
      <h2 id="vf3lp-bh" class="vf3lp-h2">Vì sao nên độ bi gầm tại Auto365?</h2>
    </div>
    <div class="vf3lp-grid">
      <article class="vf3lp-card">
        <div class="vf3lp-body">
          <h3>100+ Chi nhánh toàn quốc</h3>
          <p>Hệ thống Auto365 phủ sóng khắp 3 miền, dễ dàng hỗ trợ lắp đặt, bảo hành nhanh chóng ở bất kỳ đâu trên toàn quốc.</p>
        </div>
      </article>
      <article class="vf3lp-card">
        <div class="vf3lp-body">
          <h3>Sản phẩm chính hãng</h3>
          <p>Cam kết 100% các dòng bi gầm X-Light, GTR... chính hãng, đầy đủ tem mác, mã QR, được kích hoạt bảo hành điện tử chính hãng.</p>
        </div>
      </article>
      <article class="vf3lp-card">
        <div class="vf3lp-body">
          <h3>Kỹ thuật chuẩn chỉ</h3>
          <p>Lắp ráp qua pát chuyên dụng, giữ zin xe. Căn chỉnh đèn bằng máy laser chuyên dụng, ánh sáng gom cắt đẹp, không gây chói mắt người đối diện.</p>
        </div>
      </article>
    </div>
  </div>
</section>'

# Replace Warranty block with Advantages block
$warrantyRegex = '(?s)<section data-reveal class="vf3lp-band vf3lp-band--soft">\s*<div class="vf3lp-in">\s*<div class="vf3lp-head">\s*<h2 id="vf3lp-bh" class="vf3lp-h2">Bảo hành thiết bị và thi công.*?</div></article></div></div></section>'
$content = $content -replace $warrantyRegex, $advBlock

# Append FAQ block after Timeline (before the footer note section)
$footerNoteStart = '<section data-reveal class="vf3lp-band vf3lp-band--soft"><div class="vf3lp-in"><p class="vf3lp-note">Rà soát kỹ thuật:'
$content = $content.Replace($footerNoteStart, $faqBlock + "`r`n" + $footerNoteStart)

# Write back
Set-Content -Path $htmlPath -Value $content -Encoding UTF8
Write-Output "Done"
