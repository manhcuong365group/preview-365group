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
}
