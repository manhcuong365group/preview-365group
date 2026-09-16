$pagePath = Join-Path (Get-Location) 'auto365\camera-hanh-trinh-v2\index.html'

Describe 'catalogue runtime' {
    $html = Get-Content -Raw -LiteralPath $pagePath

    It 'loads the verified catalogue source before application code' {
        $html | Should Match '<script src="data/catalog\.ssot\.js"></script>'
    }

    It 'renders only active or available-on-request SSOT records' {
        $html | Should Match "CATALOG_SSOT\.filter\(p => \['active', 'available_on_request'\]\.includes\(p\.status\)\)"
    }

    It 'uses concise product detail CTAs' {
        $html | Should Match "p\.url.*Xem chi"
    }

    It 'uses verified resolution data instead of product-name heuristics for 4K' {
        $html | Should Match 'RESOLUTION_MAP'
        $html | Should Match 'camera-hanh-trinh-70mai-m800.*4K'
        $html | Should Match 'camera-hanh-trinh-yuemi-q5.*4K'
        $html | Should Match 'camera-hanh-trinh-vietmap-c61-pro.*4K'
        $html | Should Match 'RESOLUTION_MAP\[p\.slug\]'
    }

    It 'does not treat every LTE-like model as having the same connectivity mode' {
        $html | Should Match 'LTE_MODE'
        $html | Should Match "'camera-hanh-trinh-han-quoc-blackvue-dr750x-2ch-lt': 'integrated'"
        $html | Should Match "'camera-hanh-trinh-70mai-dash-cam-a810-4k': 'accessory'"
        $html | Should Match 'Boolean\(LTE_MODE\[p\.slug\]\)'
    }

    It 'keeps the A510 catalogue price tied to the listed one-channel configuration' {
        $html | Should Match 'A510.{0,250}2\.690'
        $html | Should Match 'A510_CATALOG_ONE_CHANNEL_PRICE'
    }

    It 'shows branch phone and opening hours in the local section' {
        $html | Should Match 'location \.loc-hours,.location \.loc-phone\{display:flex'
        $html | Should Match 'id="dia-diem"'
        $html | Should Match 'Hotline:'
    }

    It 'labels the mailto form honestly' {
        $html | Should Match 'FORM_SUBMIT_MAILTO_LABEL'
        $html | Should Match 'lead-form-instruction'
        $html | Should Match 'window\.location\.href = mailto'
    }

    It 'renders explicit LTE comparison states' {
        $html | Should Match 'LTE_COMPARE_STATES'
        $html | Should Match "LTE_MODE\[p\.slug\] === 'integrated'"
        $html | Should Match "LTE_MODE\[p\.slug\] === 'accessory'"
        $html | Should Match "LTE_MODE\[p\.slug\]"
    }

    It 'labels bundle coverage and links the three brand hubs' {
        $html | Should Match 'function bundleLabel\(p\)'
        $html | Should Match 'price-block'
        $html | Should Match 'bundle-label'
        $html | Should Match 'camera-hanh-trinh-70mai'
        $html | Should Match 'camera-hanh-trinh-vietmap'
        $html | Should Match 'camera-hanh-trinh-blackvue'
        $html | Should Match 'BUNDLE_PRICE_NOTE'
    }
}
