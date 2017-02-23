/// <binding AfterBuild='default' Clean='clean_scripts' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');

var paths = {
    scripts: "scripts/**/*",
    libs: [
        // angular js file
        'node_modules/@angular/core/bundles/core.umd.js',
        'node_modules/@angular/common/bundles/common.umd.js',
        'node_modules/@angular/compiler/bundles/compiler.umd.js',
        'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
        'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        'node_modules/@angular/http/bundles/http.umd.js',
        'node_modules/@angular/router/bundles/router.umd.js',
        'node_modules/@angular/forms/bundles/forms.umd.js',

        // npm normal libs
        'node_modules/angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.min.js',
        'node_modules/systemjs/dist/system.js'
    ],
    // pagekage
    rxjs: 'node_modules/rxjs/**/*'
};

gulp.task('clean_scripts', function (cb) {  // one
    del(['wwwroot/scripts/**/*']).then(paths => { cb(); });
});

gulp.task('libs', ['clean_scripts'], function (cb) { // two
    gulp.src(paths.libs).pipe(gulp.dest('wwwroot/scripts/libs')).on('end', cb);
});

gulp.task('rxjs', ['libs'], function (cb) { // three
    gulp.src(paths.rxjs).pipe(gulp.dest('wwwroot/scripts/libs/rxjs')).on('end', cb);
});

gulp.task('scripts', ['rxjs'], function (cb) {  // four
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts')).on('end', cb);
});

gulp.task('default', ['scripts']);