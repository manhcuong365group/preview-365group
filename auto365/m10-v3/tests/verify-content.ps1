$pagePath = Join-Path $PSScriptRoot '..\index.html'
$page = Get-Content -LiteralPath $pagePath -Raw -Encoding UTF8

function Assert-Condition {
  param(
    [bool]$Condition,
    [string]$Message
  )

  if (-not $Condition) {
    throw $Message
  }
}

$jsonBlocks = [regex]::Matches($page, '<script type="application/ld\+json">\s*(\{[\s\S]*?\})\s*</script>')
$product = $null
foreach ($block in $jsonBlocks) {
  $candidate = $block.Groups[1].Value | ConvertFrom-Json
  if ($candidate.'@type' -eq 'Product' -or $candidate.'@type' -eq 'ProductGroup') {
    $product = $candidate
    break
  }
}

Assert-Condition ($null -ne $product) 'Expected Product JSON-LD.'
Assert-Condition ($product.'@type' -eq 'Product') 'Product schema must use one Product entity.'
Assert-Condition ($null -eq $product.hasVariant) 'Product schema must not contain hasVariant without individual SKUs.'
Assert-Condition ($product.offers.availability -eq 'https://schema.org/InStock') 'Product availability must remain InStock.'

$requiredLinks = @(
  'https://auto365.vn/den-tro-sang-titan-moto-m10-ultra',
  'https://auto365.vn/den-tro-sang-m10-ultra-v2',
  'https://auto365.vn/tac-gia/nguyen-quang-dao',
  'https://auto365.vn/den-gam-dang-roi',
  'https://auto365.vn/den-gam-dang-roi-o-to-gia-bao-nhieu'
)
foreach ($url in $requiredLinks) {
  Assert-Condition ($page.Contains($url)) "Missing required internal link: $url"
}

$faqCount = ([regex]::Matches($page, '<details><summary>C')).Count
Assert-Condition ($faqCount -eq 10) "FAQ count must remain 10; found $faqCount."

Write-Output 'M10 V3 content checks passed.'
