[CmdletBinding()]
param(
    [string]$InputPath,
    [string]$OutputPath,
    [switch]$Write
)

Set-StrictMode -Version Latest

function Resolve-CatalogStatus {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [pscustomobject]$Record
    )

    if ($Record.http_status -ne 200 -or [string]::IsNullOrWhiteSpace($Record.canonical) -or $Record.canonical.TrimEnd('/') -ne $Record.pdp_url.TrimEnd('/')) {
        return 'needs_verification'
    }

    if ($Record.availability -eq 'https://schema.org/InStock') {
        return 'active'
    }

    return 'available_on_request'
}

function Get-PdpAuditSnapshot {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]$PdpUrl
    )

    try {
        $response = Invoke-WebRequest -Uri $PdpUrl -MaximumRedirection 5 -TimeoutSec 25 -UseBasicParsing
        $html = $response.Content
        $canonicalMatch = [regex]::Match($html, '<link[^>]+rel=["'']canonical["''][^>]+href=["'']([^"'']+)["'']', 'IgnoreCase')
        $availabilityMatch = [regex]::Match($html, '["'']availability["'']\s*:\s*["'']([^"'']+)["'']', 'IgnoreCase')
        $priceMatch = [regex]::Match($html, '["'']price["'']\s*:\s*["'']?([0-9]+(?:\.[0-9]+)?)["'']?', 'IgnoreCase')

        return [pscustomobject]@{
            http_status = [int]$response.StatusCode
            canonical = if ($canonicalMatch.Success) { $canonicalMatch.Groups[1].Value } else { $null }
            availability = if ($availabilityMatch.Success) { $availabilityMatch.Groups[1].Value } else { $null }
            price = if ($priceMatch.Success) { [decimal]$priceMatch.Groups[1].Value } else { $null }
        }
    } catch {
        return [pscustomobject]@{ http_status = 0; canonical = $null; availability = $null; price = $null }
    }
}

function ConvertTo-CatalogSsotRecord {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [pscustomobject]$SourceRecord,
        [Parameter(Mandatory)]
        [pscustomobject]$Snapshot,
        [Parameter(Mandatory)]
        [string]$VerifiedDate
    )

    $auditRecord = [pscustomobject]@{
        pdp_url = $SourceRecord.pdp_url
        http_status = $Snapshot.http_status
        canonical = $Snapshot.canonical
        availability = $Snapshot.availability
    }

    return [ordered]@{
        product_id = $SourceRecord.product_id
        product_name = $SourceRecord.product_name
        brand = $SourceRecord.brand
        model = $SourceRecord.model
        variant = $SourceRecord.variant
        sku = $SourceRecord.sku
        pdp_url = $SourceRecord.pdp_url
        price = if ($null -ne $Snapshot.price) { $Snapshot.price } else { $SourceRecord.price }
        price_valid_date = $VerifiedDate
        availability = $Snapshot.availability
        status = Resolve-CatalogStatus -Record $auditRecord
        channels = $SourceRecord.channels
        resolution = $SourceRecord.resolution
        gps = $SourceRecord.gps
        wifi = $SourceRecord.wifi
        adas = $SourceRecord.adas
        parking_mode = $SourceRecord.parking_mode
        required_accessories = @($SourceRecord.required_accessories)
        official_source = $SourceRecord.official_source
        last_verified = $VerifiedDate
        image = $SourceRecord.image
        image_width = $SourceRecord.image_width
        image_height = $SourceRecord.image_height
    }
}

if ($MyInvocation.InvocationName -ne '.') {
    if ([string]::IsNullOrWhiteSpace($InputPath)) {
        throw 'Cần truyền -InputPath tới tệp JSON nguồn catalogue.'
    }

    $source = [System.IO.File]::ReadAllText($InputPath, [System.Text.Encoding]::UTF8) | ConvertFrom-Json
    $verifiedDate = (Get-Date).ToString('yyyy-MM-dd')
    $records = foreach ($record in $source) {
        $snapshot = Get-PdpAuditSnapshot -PdpUrl $record.pdp_url
        ConvertTo-CatalogSsotRecord -SourceRecord $record -Snapshot $snapshot -VerifiedDate $verifiedDate
    }

    $json = $records | ConvertTo-Json -Depth 6
    if ($Write) {
        if ([string]::IsNullOrWhiteSpace($OutputPath)) {
            throw 'Cần truyền -OutputPath khi dùng -Write.'
        }
        $javascript = "window.CATALOG_SSOT = $json;"
        $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($OutputPath, $javascript, $utf8NoBom)
    } else {
        $json
    }
}
