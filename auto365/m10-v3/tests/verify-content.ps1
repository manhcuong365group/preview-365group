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
Assert-Condition ($product.offers.itemCondition -eq 'https://schema.org/NewCondition') 'Product offer must identify the item as new.'
Assert-Condition ($product.offers.seller.name -eq 'Auto365.vn') 'Product offer must identify Auto365.vn as seller.'
Assert-Condition ($page.Contains('driver')) 'Product bundle must name the driver.'

$requiredLinks = @(
  'https://auto365.vn/den-tro-sang-titan-moto-m10-ultra',
  'https://auto365.vn/den-tro-sang-m10-ultra-v2',
  'https://auto365.vn/den-gam-dang-roi',
  'https://auto365.vn/den-gam-dang-roi-o-to-gia-bao-nhieu'
)
foreach ($url in $requiredLinks) {
  Assert-Condition ($page.Contains($url)) "Missing required internal link: $url"
}
Assert-Condition (-not $page.Contains('class="related-links"')) 'Internal links must run naturally in article copy, not in a separate related-links block.'
Assert-Condition (-not $page.Contains('https://auto365.vn/tac-gia/nguyen-quang-dao')) 'Unrelated author profile link must not appear on this page.'
Assert-Condition ($page -notmatch 'tr.{1} s.{1}ng d.{1}ng r.{1}i') 'Page entity must use the product category only.'
$comparisonSection = [regex]::Match($page, '<section id="so-sanh">([\s\S]*?)</section>')
Assert-Condition ($comparisonSection.Success) 'Comparison section is missing.'
Assert-Condition ($comparisonSection.Groups[1].Value.Contains('https://auto365.vn/den-tro-sang-titan-moto-m10-ultra')) 'M10 Ultra family link must be in the comparison section.'
Assert-Condition ($comparisonSection.Groups[1].Value.Contains('https://auto365.vn/den-tro-sang-m10-ultra-v2')) 'M10 Ultra V2 link must be in the comparison section.'
Assert-Condition (-not $page.Contains('.m10-page #so-sanh{display:none')) 'Comparison section must remain visible.'
Assert-Condition ($page -match '<nav class="section-menu"[\s\S]*?href="#so-sanh"') 'Section menu must link to the comparison section.'
Assert-Condition ($page.Contains('260804_')) 'Page must include the Kia Sorento installation photo.'

$faqCount = ([regex]::Matches($page, '<details><summary>C')).Count
Assert-Condition ($faqCount -eq 10) "FAQ count must remain 10; found $faqCount."

Write-Output 'M10 V3 content checks passed.'
