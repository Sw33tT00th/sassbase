var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
	gulp.src('.sass/**/*.scss')
		.pipe(sourcemaps.init())
			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
			.pipe(autoprefixer('lat 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./style.css'));
});