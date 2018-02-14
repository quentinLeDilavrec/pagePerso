var pug = require('gulp-pug');
 
gulp.task('views', function buildHTML() {
  return gulp.src('*.pug')
  .pipe(pug({
    // Your options in here. 
  }))
});