[CmdletBinding()]
param(
    [string]$CatalogPath,
    [string]$PagePath,
    [switch]$Write
)

Set-StrictMode -Version Latest

function Get-CatalogSsot {
    [CmdletBinding()]
    param([Parameter(Mandatory)][string]$CatalogPath)

    $javascript = [System.IO.File]::ReadAllText($CatalogPath, [System.Text.Encoding]::UTF8)
    $json = $javascript -replace '^\s*window\.CATALOG_SSOT\s*=\s*', '' -replace ';\s*$', ''
    return @($json | ConvertFrom-Json)
}

function New-CatalogItemList {
    [CmdletBinding()]
    param([Parameter(Mandatory)][object[]]$Records)

    $visible = @($Records | Where-Object { $_.status -in @('active', 'available_on_request') })
    $items = for ($index = 0; $index -lt $visible.Count; $index++) {
        [ordered]@{
            '@type' = 'ListItem'
            position = $index + 1
            url = $visible[$index].pdp_url
            name = $visible[$index].product_name
        }
    }

    return [pscustomobject][ordered]@{
        '@type' = 'ItemList'
        '@id' = 'https://auto365.vn/camera-hanh-trinh-o-to#catalog-snapshot'
        name = 'Các model camera hành trình đang hiển thị trong danh mục Auto365'
        numberOfItems = $visible.Count
        itemListElement = @($items)
    }
}

function ConvertTo-NoscriptCatalogue {
    [CmdletBinding()]
    param([Parameter(Mandatory)][object[]]$Records)

    $visible = @($Records | Where-Object { $_.status -in @('active', 'available_on_request') })
    $rows = foreach ($record in $visible) {
        $price = if ($null -eq $record.price) { 'Liên hệ' } else { ('{0:N0}đ' -f [decimal]$record.price).Replace(',', '.') }
        '<li><a href="{0}">{1} — {2}</a></li>' -f [System.Web.HttpUtility]::HtmlAttributeEncode($record.pdp_url), [System.Web.HttpUtility]::HtmlEncode($record.product_name), $price
    }
    return @"
<noscript>
<section class="catalog-noscript">
<h2>Danh sách camera hành trình</h2>
<ul>
$($rows -join "`n")
</ul>
<p><a href="https://auto365.vn/camera-hanh-trinh-o-to">Mở danh mục camera hành trình Auto365</a></p>
</section>
</noscript>
"@
}

function Sync-CatalogMarkup {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)][string]$CatalogPath,
        [Parameter(Mandatory)][string]$PagePath,
        [switch]$Write
    )

    Add-Type -AssemblyName System.Web
    $records = Get-CatalogSsot -CatalogPath $CatalogPath
    $itemList = New-CatalogItemList -Records $records
    $html = [System.IO.File]::ReadAllText($PagePath, [System.Text.Encoding]::UTF8)
    $pattern = '<script type="application/ld\+json">(?<payload>.*?)</script>'
    $matches = [regex]::Matches($html, $pattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)

    for ($index = $matches.Count - 1; $index -ge 0; $index--) {
        $match = $matches[$index]
        try { $ld = $match.Groups['payload'].Value | ConvertFrom-Json } catch { continue }
        $graph = @($ld.'@graph')
        $catalogNode = @($graph | Where-Object { $_.PSObject.Properties['@id'] -and $_.PSObject.Properties['@id'].Value -eq $itemList.'@id' }) | Select-Object -First 1
        if ($null -eq $catalogNode) { continue }

        $catalogNode.numberOfItems = $itemList.numberOfItems
        $catalogNode.itemListElement = $itemList.itemListElement
        $replacement = '<script type="application/ld+json">' + ($ld | ConvertTo-Json -Depth 64 -Compress) + '</script>'
        $html = $html.Substring(0, $match.Index) + $replacement + $html.Substring($match.Index + $match.Length)
    }

    $noscriptPattern = '<noscript>\s*<section class="catalog-noscript">.*?</section>\s*</noscript>'
    $html = [regex]::Replace($html, $noscriptPattern, (ConvertTo-NoscriptCatalogue -Records $records), [System.Text.RegularExpressions.RegexOptions]::Singleline)

    if ($Write) {
        $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($PagePath, $html, $utf8NoBom)
    }
    return $html
}

if ($MyInvocation.InvocationName -ne '.') {
    if ([string]::IsNullOrWhiteSpace($CatalogPath) -or [string]::IsNullOrWhiteSpace($PagePath)) {
        throw 'Cần truyền -CatalogPath và -PagePath.'
    }
    Sync-CatalogMarkup -CatalogPath $CatalogPath -PagePath $PagePath -Write:$Write | Out-Null
}
