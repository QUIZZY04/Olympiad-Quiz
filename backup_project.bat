@echo off

mkdir backup\latest_backup

xcopy * backup\latest_backup /E /I /Y

echo Backup Completed
pause
