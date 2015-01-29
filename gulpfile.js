var gulp = require('gulp'),
	sass = require('gulp-sass'),
	gutil = require('gulp-util'),
	connect = require('gulp-connect');


gulp.task('watch', function() {
	gulp.watch(['./builds/development/*.html'], ['html']);
	gulp.watch(['./components/sass/*.scss'], ['sass']);
});

gulp.task('connect', function() {
	connect.server({
		root: 'builds/development/',
		livereload: true
	});
});

gulp.task('html', function() {
	gulp.src('./builds/development/*.html')
	 .pipe(connect.reload())
});

gulp.task('sass', function() {
    gulp.src('components/sass/*.scss')
        .pipe(sass())
        .pipe(connect.reload())
        .on('error', gutil.log)
        .pipe(gulp.dest('builds/development/css'))
        
});


gulp.task('default', ['sass', 'connect', 'html', 'watch']);