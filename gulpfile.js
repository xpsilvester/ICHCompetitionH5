var gulp = require('gulp'),
	//sass = require('gulp-ruby-sass'),
    sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	babel = require('gulp-babel'),
	uglify = require('gulp-uglify'),
	notify = require('gulp-notify'),
	rename = require('gulp-rename');


gulp.task('scripts', function() {
	gulp.src('src/js/*.js')
		//.pipe(gulp.dest('js'))
		.pipe(babel())
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('static/js'))
		.pipe(notify({
		    message: 'js task complete'
		}));
});

gulp.task('styles', function() {
    gulp.src('src/scss/*.scss')
        .pipe(sass())
		.pipe(autoprefixer('last 2 version', 'safari 8', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        //.pipe(gulp.dest('css'))
		.pipe(minifycss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('static/css'))
		.pipe(notify({
		    message: 'css task complete'
		}));
    
});

gulp.task('auto', function() {
    gulp.watch(['src/js/*.js'], ['scripts']);
	gulp.watch(['src/scss/*.scss'], ['styles']);
});

gulp.task('default', ['styles', 'scripts', 'auto']);
