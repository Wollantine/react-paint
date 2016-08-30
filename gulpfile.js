'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
// var open = require('gulp-open');
// var connect = require('gulp-connect');
var source = require('vinyl-source-stream');
// var buffer = require('vinyl-buffer');
// var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var exorcist = require('exorcist');
var browserSync = require('browser-sync').create();
var ghPages = require('gulp-gh-pages');
var importCss = require('gulp-import-css');
var concat = require('gulp-concat');

// Configure browserify
var options = {
	cache: {},
	packageCache: {},
	entries: ['./src/index.jsx'],
	debug: true
};
var bundler = watchify(browserify(options)); 

// Compile to JS with babel
bundler.transform(babelify.configure({
    sourceMapRelative: 'src'
}));

// Allow to require() CSS files
bundler.transform('browserify-css', { autoInject: true });

bundler.on('update', bundle);


function bundle() {

    return bundler.bundle()
        .on('error', function (err) {
            gutil.log(err.message);
            browserSync.notify("Browserify Error!");
            this.emit("end");
        })
        // Extracts the source map from a file
        .pipe(exorcist('dist/bundle.js.map'))
		// Takes bundle text stream and outputs a 
		//  gulp stream with the pretended name 'bundle.js'.
        .pipe(source('bundle.js'))
    	// Output file into destination folder
        .pipe(gulp.dest('./dist'))
        // Make browser-sync use this stream
        .pipe(browserSync.stream({once: true}));
}

function bundleForDeploy() {
    return bundler.bundle()
        .on('error', function (err) {
            gutil.log(err.message);
            browserSync.notify("Browserify Error!");
            this.emit("end");
        })
        .pipe(exorcist('dist/bundle.js.map'))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'));
}


gulp.task('bundle', function () {
	return bundle();
});

gulp.task('deployBundle', function () {
    return bundleForDeploy();
});

// TODO improve
gulp.task('bundleCss', function () {
    return gulp.src('./src/**/*.css')
        .pipe(concat('bundle.css'))
        // .pipe(importCss())
        .pipe(gulp.dest('./dist'))
});

gulp.task('deploy', ['deployBundle', 'bundleCss'], function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});


// Fires the server with browser-sync
gulp.task('default', ['bundle'], function () {
	browserSync.init({
        server: "./",
        files: ['src/*']
    });
});
