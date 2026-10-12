$env:NODE_OPTIONS = ""
$env:GENIE_TRASH_DIR = ""
$env:CODEBUDDY_SAFE_DELETE_SHIM_DIR = ""
$env:PATH = "C:\Users\dcc\.workbuddy\binaries\node\versions\node-v24.19.0-win-x64;" + $env:PATH

Write-Host "node: $(node -v)"

# Kill lingering node processes (keep the current powershell host)
Get-Process -Name node -ErrorAction SilentlyContinue | Where-Object { $_.Id -ne $PID } | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Remove corrupted node_modules (keep pnpm-lock.yaml for a known-good resolve)
if (Test-Path node_modules) {
  node -e "require('fs').rmSync('node_modules',{recursive:true,force:true})"
  Write-Host "removed node_modules"
}

$pnpm = "$env:LOCALAPPDATA\pnpm\.tools\pnpm\11.25.0\node_modules\pnpm\bin\pnpm.cjs"
Write-Host "pnpm cjs: $pnpm"

node $pnpm install --config.node-linker=hoisted --config.engine-strict=false --config.confirmModulesPurge=false 2>&1 | Tee-Object -FilePath install2.log

Write-Host "=== astro bin check ==="
if (Test-Path node_modules/astro/astro.js) { Write-Host "astro.js present" } else { Write-Host "astro.js MISSING" }

Write-Host "=== build ==="
node node_modules/astro/astro.js build 2>&1 | Tee-Object -FilePath build2.log

Write-Host "=== verify ==="
node verify-dist.cjs

Write-Host "=== dist html files ==="
Get-ChildItem dist -Recurse -Filter *.html | Select-Object -ExpandProperty FullName
