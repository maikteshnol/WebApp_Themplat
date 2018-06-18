var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function(){
    return gulp.src([
    'node_modules/bootstrap/scss/bootstrap.scss',
    'src/scss/*.scss'
   ])
   .pipe(sass({outputStyle:'compressed'}))
   .pipe(gulp.dest('src/css'))
   .pipe(browserSync.stream());    
});
gulp.task('js', function(){
    return gulp.src([
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/jquery/dist/jquery.min.js'
   ])
  .pipe(gulp.dest('src/js'))
  .pipe(browserSync.stream());
});
gulp.task('serveappview', ['sass'], function(){
  browserSync.init({
    server:'./src'
  })
  gulp.watch([
    'node_modules/bootstrap/scss/bootstrap.scss',
    'src/scss/*.scss'],
    ['sass']);
  gulp.watch('src/*.html').on('change', browserSync.reload);
});
gulp.task('default' , ['js','serveappview']);