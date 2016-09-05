var gulp        = require('gulp');
    browserSync = require('browser-sync');
    sass        = require('gulp-sass');
    jade        = require('gulp-pug');
    prettify    = require('gulp-prettify');
    cssmin      = require('gulp-cssmin');
    rename      = require('gulp-rename');
    reload      = browserSync.reload;


// Compile Jade Files

gulp.task('templates', function() {
    return gulp.src('./src/jade/!(_)*.jade')
        .pipe(jade())
        .pipe(prettify({
            indent_size: 2
        }))
        .pipe(gulp.dest('./build'))
});

gulp.task('jade-watch', ['templates'], reload);

// Compile scss and live injecting

gulp.task('sass', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/css'))
        .pipe(reload({
            stream: true
        }));
});

/*gulp.task('css', function () {
    gulp.src('./build/css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/css'));
});*/

// Serve and watch jade/sass

gulp.task('default', ['sass', 'templates'], function(){
  browserSync({
    server: './build'
  });

  gulp.watch('./src/sass/*.scss', ['sass']);
  gulp.watch('./src/jade/*.jade', ['jade-watch']);
});
