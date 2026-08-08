@echo off
cd /d "%~dp0"
echo Auto365 Newsroom V2.6.4 local preview
echo Open: http://127.0.0.1:8088/
where py >nul 2>nul
if %errorlevel%==0 (
  start "Auto365 Preview Server" /min cmd /c "py -m http.server 8088 --bind 127.0.0.1"
) else (
  start "Auto365 Preview Server" /min cmd /c "python -m http.server 8088 --bind 127.0.0.1"
)
timeout /t 2 /nobreak >nul
start "" http://127.0.0.1:8088/
