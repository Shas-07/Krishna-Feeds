# Push complete KRISHNA FEEDS project to GitHub (includes src/ and public/)
$ErrorActionPreference = "Stop"
$git = "C:\Program Files\Git\cmd\git.exe"
$repoRoot = $PSScriptRoot

if (-not (Test-Path "$repoRoot\src\main.tsx")) {
    Write-Host "ERROR: src\main.tsx not found in $repoRoot" -ForegroundColor Red
    exit 1
}

Set-Location $repoRoot

if (-not (Test-Path ".git")) {
    & $git init
}

& $git add -A
& $git status --short

$srcCount = (& $git ls-files "src/*" 2>$null | Measure-Object).Count
$publicCount = (& $git ls-files "public/*" 2>$null | Measure-Object).Count

Write-Host "`nFiles staged — src: $srcCount, public: $publicCount" -ForegroundColor Cyan

if ($srcCount -lt 5) {
    Write-Host "ERROR: src/ files were not staged. Check .gitignore." -ForegroundColor Red
    exit 1
}

$remote = & $git remote get-url origin 2>$null
if (-not $remote) {
    & $git remote add origin "https://github.com/Shas-07/Krishna-Feeds.git"
}

& $git commit -m "Add complete website: src, public assets, and Vercel build" 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Nothing new to commit, or commit failed. Checking status..." -ForegroundColor Yellow
}

& $git branch -M main
Write-Host "`nPushing to GitHub..." -ForegroundColor Green
& $git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nSuccess! Redeploy on Vercel now." -ForegroundColor Green
} else {
    Write-Host "`nPush failed. Try GitHub Desktop or run: git push -u origin main" -ForegroundColor Yellow
}
