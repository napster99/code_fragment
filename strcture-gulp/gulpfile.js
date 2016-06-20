var gulp = require('gulp');
var uglify = require('gulp-uglify');



gulp.task('compress', function() {
  return gulp.src('lib/*.js')
    .pipe(uglify({'compress' : true}))
    .pipe(gulp.dest('build'));
});

gulp.task('default', ['compress'], function() {
	gulp.src('src/index.js')
	.pipe(gulp.dest('build'));
});
