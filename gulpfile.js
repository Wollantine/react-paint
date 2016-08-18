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

	// return bundler.bundle()
	// 	.pipe(source('bundle.js'))
		// Needed by source maps
    	// .pipe(buffer())
		// Initializes source maps
    	// .pipe(sourcemaps.init())

    	// other transforms here

    	// Finish source maps
    	// .pipe(sourcemaps.write('.'))
    	// .pipe(gulp.dest('./'));
});

// gulp.task('serve', function() {
//   	return connect.server({
// 	  	port: 5000,
// 	  	livereload: true
//   	});
// });

// gulp.task('default', ['bundle', 'serve'], function () {
// 	return gulp.src(__filename)
// 		.pipe(open({
// 			uri: 'localhost:5000',
// 		    app: 'chrome'
// 		}));
// });

// Fires the server with browser-sync
gulp.task('default', ['bundle'], function () {
	browserSync.init({
        server: "./"
    });
})
