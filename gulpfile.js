const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const concatCss = require('gulp-concat-css');
const entry = './app/assets/stylesheets/**/*.scss';
gulp.task('css', function () {
  return watch(entry, function() {
    gulp.src(entry)
    .pipe( sass().on('error', sass.logError) )
    .pipe( postcss([ require('precss'), require('autoprefixer') ]) )
    .pipe( concatCss('index.css') )
    .pipe( gulp.dest('dist/') );
  });
});