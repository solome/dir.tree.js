const gulp = require('gulp')
const babel = require('gulp-babel')
const watch = require('gulp-watch')

gulp.task('dev', () => gulp.src('src/**/*.js')
  .pipe(watch('src/**/*.js'))
  .pipe(babel())
  .pipe(gulp.dest('./build/'))
)

gulp.task('default', () => gulp.src('src/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('./build/'))
)

