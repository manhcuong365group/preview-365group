[CmdletBinding()]
param(
    [string]$RawPath,
    [string]$OutputPath,
    [switch]$Write
)

Set-StrictMode -Version Latest

function Get-CatalogBrand {
    param([string]$Name, [int]$BrandId)

    $byId = @{ 72 = '70mai'; 40 = 'Vietmap'; 48 = 'BlackVue' }
    if ($byId.ContainsKey($BrandId)) { return $byId[$BrandId] }
    if ($Name -match '(?i)70mai') { return '70mai' }
    if ($Name -match '(?i)vietmap') { return 'Vietmap' }
    if ($Name -match '(?i)blackvue') { return 'BlackVue' }
    if ($Name -match '(?i)ddpai') { return 'DDPAI' }
    if ($Name -match '(?i)thinkware') { return 'Thinkware' }
    if ($Name -match '(?i)ellicam') { return 'Ellicam' }
    if ($Name -match '(?i)utour') { return 'UTOUR' }
    if ($Name -match '(?i)yuemi') { return 'YUEMI' }
    return 'Khác'
}

function Get-CatalogModel {
    param([string]$Name, [string]$Brand)

    $model = $Name -replace '(?i)camera\s+hành\s+trình(\s+ô\s+tô|\s+xe\s+hơi)?', ''
    $model = $model -replace [regex]::Escape($Brand), ''
    return ($model -replace '\s+', ' ').Trim(' ', '-', ':')
}

function Convert-LegacyRawToSource {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]$RawPath
    )

    $html = [System.IO.File]::ReadAllText($RawPath, [System.Text.Encoding]::UTF8)
    $match = [regex]::Match($html, 'const raw=\[(?<rows>.*?)\];\s*const BRAND_BY_ID', 'Singleline')
    if (-not $match.Success) {
        throw 'Không tìm thấy danh sách raw của catalogue trong tệp nguồn.'
    }

    $nodeSource = "const raw=[$($match.Groups['rows'].Value)]; process.stdout.write(JSON.stringify(raw));"
    $rows = (& node -e $nodeSource) | ConvertFrom-Json

    $records = foreach ($row in $rows) {
        $name = [string]$row[0]
        $slug = [string]$row[1]
        $brandId = if ($null -eq $row[5]) { 0 } else { [int]$row[5] }
        $brand = Get-CatalogBrand -Name $name -BrandId $brandId

        [pscustomobject][ordered]@{
            product_id = $slug
            product_name = $name
            brand = $brand
            model = Get-CatalogModel -Name $name -Brand $brand
            variant = $null
            sku = $null
            pdp_url = "https://auto365.vn/$slug"
            price = if ($null -eq $row[2]) { $null } else { [decimal]$row[2] }
            channels = [int]$row[4]
            resolution = $null
            gps = $null
            wifi = $null
            adas = $null
            parking_mode = $null
            required_accessories = @()
            official_source = $null
            image = [string]$row[3]
            image_width = 450
            image_height = 450
        }
    }

    return @($records)
}

if ($MyInvocation.InvocationName -ne '.') {
    if ([string]::IsNullOrWhiteSpace($RawPath)) {
        throw 'Cần truyền -RawPath tới index.html hiện hành.'
    }

    $json = (Convert-LegacyRawToSource -RawPath $RawPath) | ConvertTo-Json -Depth 5
    if ($Write) {
        if ([string]::IsNullOrWhiteSpace($OutputPath)) {
            throw 'Cần truyền -OutputPath khi dùng -Write.'
        }
        $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($OutputPath, $json, $utf8NoBom)
    } else {
        $json
    }
}
