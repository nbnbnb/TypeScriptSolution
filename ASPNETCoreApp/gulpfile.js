/// <binding AfterBuild='default' Clean='clean_scripts' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');

var paths = {
    scripts: "scripts/**/*",

    npm_components: {
        angular: 'node_modules/@angular/**/*',
        axjs: 'node_modules/rxjs/**/*',
        corejs: 'node_modules/core-js/**/*',
        zonejs: 'node_modules/zone.js/**/*',
        systemjs: 'node_modules/systemjs/**/*',
        angularinmemorywebapi: 'node_modules/angular-in-memory-web-api/**/*'
    }
};

gulp.task('components', function (cb) {  // one    
    del(['npm_components/*']).then(deletedPaths => {
        gulp.src(paths.npm_components.angular).pipe(gulp.dest('wwwroot/npm_components/@angular'));
        gulp.src(paths.npm_components.axjs).pipe(gulp.dest('wwwroot/npm_components/rxjs'));
        gulp.src(paths.npm_components.corejs).pipe(gulp.dest('wwwroot/npm_components/core-js'));
        gulp.src(paths.npm_components.zonejs).pipe(gulp.dest('wwwroot/npm_components/zone.js'));
        gulp.src(paths.npm_components.systemjs).pipe(gulp.dest('wwwroot/npm_components/systemjs'));
        gulp.src(paths.npm_components.angularinmemorywebapi).pipe(gulp.dest('wwwroot/npm_components/angular-in-memory-web-api'));
    });
});


gulp.task('clean_scripts', function (cb) {  // one
    del(['wwwroot/scripts/**/*']).then(paths => { cb(); });
});

gulp.task('scripts', ['clean_scripts'], function (cb) {  // four
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts')).on('end', cb);
});

gulp.task('default', ['scripts']);