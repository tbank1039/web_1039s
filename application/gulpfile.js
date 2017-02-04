var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    return gulp.src('assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css/'))
});

//Watch task
gulp.task('watch',function() {
    return gulp.watch('assets/sass/*.scss',['styles']);
});