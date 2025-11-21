# Script para copiar PDFs da Biblioteca Automotiva VHE
# Execute este script a partir da raiz do projeto

$origem = "c:\Users\felip\Downloads\Biblioteca Automotiva VHE-20251119T030131Z-1-001\Biblioteca Automotiva VHE"
$destino = "public\pdfs\biblioteca-vhe"

if (Test-Path $origem) {
    New-Item -ItemType Directory -Force -Path $destino | Out-Null
    Copy-Item -Path "$origem\*.pdf" -Destination $destino -Force
    Write-Host "✓ PDFs copiados com sucesso!"
    Write-Host "`nTotal de arquivos copiados: $((Get-ChildItem -Path $destino -Filter *.pdf).Count)"
} else {
    Write-Host "✗ Pasta não encontrada: $origem"
    Write-Host "Por favor, verifique o caminho da pasta."
}

Write-Host "`nConcluído! Verifique se todos os PDFs foram copiados corretamente."

