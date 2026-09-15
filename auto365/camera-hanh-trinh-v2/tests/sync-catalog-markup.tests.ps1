$syncScript = Join-Path (Get-Location) 'auto365\camera-hanh-trinh-v2\scripts\sync-catalog-markup.ps1'
$catalogPath = Join-Path (Get-Location) 'auto365\camera-hanh-trinh-v2\data\catalog.ssot.js'

Describe 'New-CatalogItemList' {
    BeforeAll {
        . $syncScript
        $records = Get-CatalogSsot -CatalogPath (Join-Path (Get-Location) 'auto365\camera-hanh-trinh-v2\data\catalog.ssot.js')
        $itemList = New-CatalogItemList -Records $records
    }

    It 'lists exactly the records permitted in the main catalogue' {
        $visible = @($records | Where-Object { $_.status -in @('active', 'available_on_request') })
        $itemList.numberOfItems | Should Be $visible.Count
        $itemList.itemListElement.Count | Should Be $visible.Count
    }

    It 'uses each product PDP as the item URL' {
        $itemList.itemListElement[0].url | Should Be 'https://auto365.vn/camera-hanh-trinh-70mai-a210'
    }

    It 'updates only the ItemList while preserving JSON-LD nodes without an id' {
        $tempPage = Join-Path ([System.IO.Path]::GetTempPath()) ('camera-hub-' + [guid]::NewGuid().ToString() + '.html')
        Copy-Item -LiteralPath (Join-Path (Get-Location) 'auto365\camera-hanh-trinh-v2\index.html') -Destination $tempPage

        try {
            Sync-CatalogMarkup -CatalogPath (Join-Path (Get-Location) 'auto365\camera-hanh-trinh-v2\data\catalog.ssot.js') -PagePath $tempPage -Write | Out-Null
            $updated = [System.IO.File]::ReadAllText($tempPage, [System.Text.Encoding]::UTF8)
            $updated | Should Match '"numberOfItems":81'
            $updated | Should Match 'FAQPage'
        } finally {
            Remove-Item -LiteralPath $tempPage -Force -ErrorAction SilentlyContinue
        }
    }
}
