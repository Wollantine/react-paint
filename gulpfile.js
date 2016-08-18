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

// Configure browserify
var options = { 
	cache: {},
	packageCache: {},
	entries: ['./src/index.js'],
	debug: true
};
var bundler = watchify(browserify(options)); 

bundler.transform(babelify.configure({
    sourceMapRelative: 'src'
}));

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


gulp.task('bundle', function() {
	return bundle();
});


// Fires the server with browser-sync
gulp.task('default', ['bundle'], function () {
	browserSync.init({
        server: "./",
        files: ['src/*']
    });
})
