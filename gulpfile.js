var gulp = require("gulp");
var concat = require ('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require ('gulp-sass');
var minifyCss = require('gulp-minify-css');
var webServer = require('gulp-webserver');

gulp.task('script', function(){
	gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/materialize-css/dist/js/materialize.js', 'assets/js/*.js'])
	.pipe(concat('script.js'))
	.pipe(gulp.dest('dist/js/'))
})


gulp.task('style', function(){
	gulp.src(['assets/sass/main.scss'])
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCss())
	.pipe(concat('style.min.css'))
	.pipe(gulp.dest('dist/css/'));

})

gulp.task('webServer', function(){
	gulp.src('../pinterest/')
		.pipe(webServer({
			fallback: 'index.html',
			livereload: true,
			directorylisting: false,
			open: true
		}))
})


gulp.task('watch', function(){
	gulp.watch('assets/sass/*.scss', ['style']);
	gulp.watch('assets/js/*.js', ['script']);
})

gulp.task('default',['script', 'style', 'webServer', 'watch'])