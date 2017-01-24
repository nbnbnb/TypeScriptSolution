/// <binding AfterBuild='default' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');

var paths = {
    scripts: ['scripts/**/*.js', 'scripts/**/*.ts', 'scripts/**/*.map'],
    libs: ['node_modules/angular2/bundles/angular2.js',
           'node_modules/angular2/bundles/angular2-polyfills.js',
           'node_modules/systemjs/dist/system.src.js',
           'node_modules/rxjs/bundles/Rx.js']
};

// 依赖任务
gulp.task('lib', function () {
    // 将文件拷贝到 wwwroot/scripts/lib 目录中
    gulp.src(paths.libs).pipe(gulp.dest('wwwroot/scripts/lib'))
});

// 项目清理时执行
gulp.task('clean', function () {
    // 删除 wwwroot/scripts 中的所有文件
    return del(['wwwroot/scripts/**/*']);
});

// 项目生成后执行
gulp.task('default', ['lib'], function () {
    // 先执行 lib 任务
    // 将项目 scripts 目录中的脚本文件拷贝到 wwwroot/scripts 目录中
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts'))
});