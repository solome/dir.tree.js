import gulp from 'gulp';
import babel from 'gulp-babel';
import watch from 'gulp-watch';

gulp.task('default', function () {
    return gulp.src('src/**/*.js')
        .pipe(watch('src/**/*.js'))
        .pipe(babel())
        .pipe(gulp.dest('./build/'));
});

