
@echo off

set folder=backup\backup_%date:~-4%-%date:~4,2%-%date:~7,2%_%time:~0,2%%time:~3,2%

mkdir %folder%

xcopy * %folder% /E /I /Y

echo Backup completed successfully!

pause
