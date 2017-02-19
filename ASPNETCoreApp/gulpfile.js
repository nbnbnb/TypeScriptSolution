/// <binding AfterBuild='default' Clean='clean_node_modules, clean_scripts' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');

var paths = {
    scripts: ['scripts/**/*.js', 'scripts/**/*.ts', 'scripts/**/*.map'],
    node_modules: 'node_modules/**/*'
};

// clean 任务
// 清除 wwwroot/scripts/ 目录中的所有文件
gulp.task('clean_scripts', function () {
    del(['wwwroot/scripts/**/*']);
});

// clean 任务
// 清除 wwwroot/lib/node_modules/ 目录中的所有文件
gulp.task('clean_node_modules', function () {
    del(['wwwroot/lib/node_modules/**/*']);
});

// node_modules 任务
// 拷贝 node_modules 包
gulp.task('node_modules', ['clean_node_modules'], function () {
    gulp.src(paths.node_modules).pipe(gulp.dest('wwwroot/lib/node_modules'));
});

// default 任务
// 在运行之前，首先执行 lib 任务
// 将 path.scripts 中的文件复制到 wwwroot/scripts 目录中
gulp.task('default', ['clean'], function () {
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts/'));
});