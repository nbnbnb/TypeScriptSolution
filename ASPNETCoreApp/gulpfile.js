/// <binding AfterBuild='default' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');

var paths = {
    scripts: ['scripts/**/*.js', 'scripts/**/*.ts', 'scripts/**/*.map'],
    angular: 'node_modules/@angular/**/*',
    rxjs: 'node_modules/rxjs/**/*',
    libs: [
        'node_modules/systemjs/dist/system.js',
        'node_modules/zone.js/dist/zone.min.js',
        'node_modules/core-js/client/shim.min.js']
};

// angular 任务
// 拷贝 angular 库
gulp.task('angular', function () {
    gulp.src(paths.angular).pipe(gulp.dest('wwwroot/lib/node_modules/@angular'));
});

// rxjs 任务
// 拷贝 rxjs 库
gulp.task('rxjs', function () {
    gulp.src(paths.rxjs).pipe(gulp.dest('wwwroot/lib/node_modules/rxjs'));
});

// lib 任务
// 将 path.libs 中的文件复制到 wwwroot/scripts/lib 目录中
gulp.task('lib', function () {
    gulp.src(paths.libs).pipe(gulp.dest('wwwroot/lib/node_modules/'));
});

// clean 任务
// 清除 wwwroot/scripts/ 目录中的所有文件
gulp.task('clean', function () {
    del([
        'wwwroot/scripts/basicApp/**/*',
        'wwwroot/lib/node_modules/**/*']);
});

// default 任务
// 在运行之前，首先执行 lib 任务
// 将 path.scripts 中的文件复制到 wwwroot/scripts 目录中
gulp.task('default', [], function () {
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts/basicApp'));
    //gulp.src(paths.angular).pipe(gulp.dest('wwwroot/lib/node_modules/@angular'));
    //gulp.src(paths.rxjs).pipe(gulp.dest('wwwroot/lib/node_modules/rxjs'));
    //gulp.src(paths.libs).pipe(gulp.dest('wwwroot/lib/node_modules/'));
});