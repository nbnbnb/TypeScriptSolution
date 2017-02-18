/// <binding AfterBuild='default' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');

var paths = {
    scripts: ['scripts/**/*.js', 'scripts/**/*.map'],
    angular2: 'node_modules/@angular/**/*',
    libs: [
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/core-js/client/shim.min.js',
        'node_modules/rxjs/bundles/Rx.js']
};

// angular 任务
// 拷贝 angular 库
gulp.task('angular', function () {
    gulp.src(paths.angular2).pipe(gulp.dest('wwwroot/lib/node_modules/@angular'))
});

// lib 任务
// 将 path.libs 中的文件复制到 wwwroot/scripts/lib 目录中
gulp.task('lib', function () {
    gulp.src(paths.libs).pipe(gulp.dest('wwwroot/lib/node_modules/'))
});

// clean 任务
// 清除 wwwroot/scripts/ 目录中的所有文件
gulp.task('clean', function () {
    return del([
        'wwwroot/scripts/basicApp/**/*',
        'wwwroot/lib/node_modules/**/*']);
});

// default 任务
// 在运行之前，首先执行 lib 任务
// 将 path.scripts 中的文件复制到 wwwroot/scripts 目录中
gulp.task('default', ['clean', 'lib', 'angular'], function () {
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts/basicApp'))
});