$testDirectory = Join-Path (Get-Location) 'auto365\camera-hanh-trinh-v2\tests'
$builderScript = Join-Path $testDirectory '..\scripts\build-catalog-source.ps1'
$rawPath = Join-Path $testDirectory '..\index.html'

Describe 'Convert-LegacyRawToSource' {
    BeforeAll {
        . $builderScript
        $records = Convert-LegacyRawToSource -RawPath (Join-Path (Get-Location) 'auto365\camera-hanh-trinh-v2\index.html')
    }

    It 'creates one source record for every legacy catalogue item' {
        $records.Count | Should Be 81
    }

    It 'includes the required SSOT field names without inventing technical values' {
        $required = @('product_id','product_name','brand','model','variant','sku','pdp_url','price','channels','resolution','gps','wifi','adas','parking_mode','required_accessories','official_source','image','image_width','image_height')
        $properties = @($records[0].PSObject.Properties.Name)

        foreach ($field in $required) {
            ($properties -contains $field) | Should Be $true
        }
        $records[0].resolution | Should BeNullOrEmpty
    }
}
