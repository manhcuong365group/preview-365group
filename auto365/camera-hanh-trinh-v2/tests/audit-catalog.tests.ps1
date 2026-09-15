$auditScript = Join-Path $PSScriptRoot '..\scripts\audit-catalog.ps1'

Describe 'Resolve-CatalogStatus' {
    BeforeAll {
        . $auditScript
    }

    It 'marks a canonical in-stock PDP as active' {
        $record = [pscustomobject]@{
            pdp_url = 'https://auto365.vn/camera-hanh-trinh-70mai-a510'
            http_status = 200
            canonical = 'https://auto365.vn/camera-hanh-trinh-70mai-a510'
            availability = 'https://schema.org/InStock'
        }

        Resolve-CatalogStatus -Record $record | Should Be 'active'
    }

    It 'marks a missing or mismatched PDP as needs_verification' {
        $record = [pscustomobject]@{
            pdp_url = 'https://auto365.vn/camera-hanh-trinh-70mai-a510'
            http_status = 404
            canonical = 'https://auto365.vn/camera-hanh-trinh-70mai-a510'
            availability = 'https://schema.org/InStock'
        }

        Resolve-CatalogStatus -Record $record | Should Be 'needs_verification'
    }
}
