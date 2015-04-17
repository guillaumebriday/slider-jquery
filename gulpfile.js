var gulp = require('gulp');
var $ = require('gulp-load-plugins')();


/**
*   Prefixe le css et le minifie
*/
gulp.task('css', function(){

  gulp.src('css/js-slider.css')
        .pipe($.autoprefixer({
          browsers: ['last 2 version']
        }))
        .pipe($.minifyCss())
        .pipe($.rename({
          suffix: ".min"
        }))
        .pipe(gulp.dest('css'));   
});

/**
*   Minifie le js
*/
gulp.task('js', function(){

  gulp.src('js/js-slider.js')
        .pipe($.uglify())
        .pipe($.rename({
          suffix: ".min"
        }))
        .pipe(gulp.dest('js'));   
});



gulp.task('default', ['css', 'js'], function(){

});


