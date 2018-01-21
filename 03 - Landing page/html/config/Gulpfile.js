var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var imagemin = require('gulp-imagemin');

var jsSourceFiles = "../assets/src/js";
var jsOutputDirectory = "../assets/dist/js";

var imgSourceFiles = "../assets/src/img";
var imgOutputDirectory = "../assets/dist/img";

gulp.task('uglify-libraries', function () {
    gulp.src([
        jsSourceFiles + '/libraries/jquery.js',
        jsSourceFiles + "/libraries/**/*.js"
    ])
        .pipe(uglify())
        .pipe(concat('libraries.min.js'))
        .pipe(gulp.dest(jsOutputDirectory));
});

gulp.task('uglify-main', function () {
    gulp.src([
            jsSourceFiles + "/**/*.js",
            "!" + jsSourceFiles + "/libraries/**/*.js"
    ]) // path to your files
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest(jsOutputDirectory));
});

gulp.task('imagemin', () =>
    gulp.src(imgSourceFiles + '/*')
        .pipe(imagemin())
        .pipe(gulp.dest(imgOutputDirectory))
);

gulp.task('watch', function() {
	return watch([jsSourceFiles + "/**/*.js"], function () {
        gulp.start('uglify-libraries', 'uglify-main', 'imagemin');
    });
});


gulp.task('default', function() {
    gulp.start('uglify-libraries', 'uglify-main', 'imagemin');
});