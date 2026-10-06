@echo off
setlocal
cd /d %~dp0
where node >nul 2>nul
if %errorlevel% neq 0 (
  echo Node.js is not installed.
  echo Install Node.js LTS from https://nodejs.org and run this file again.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installing React website dependencies...
  call npm install
  if %errorlevel% neq 0 (
    echo Dependency installation failed. Check internet connection and run again.
    pause
    exit /b 1
  )
)
echo Starting Smart Solutions website...
start "" http://localhost:5173
call npm run dev
