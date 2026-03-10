@echo off

copy quiz.html backup\quiz_backup.html
copy dashboard.html backup\dashboard_backup.html
copy login.html backup\login_backup.html
copy result.html backup\result_backup.html
copy admin.html backup\admin_backup.html
copy leaderboard.html backup\leaderboard_backup.html

echo Backup created inside BACKUP folder successfully!
pause