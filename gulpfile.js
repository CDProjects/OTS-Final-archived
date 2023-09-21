const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

// Task to minify JavaScript
gulp.task('minify-js', function() {
    return gulp.src('./scripts.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

// Task to minify CSS
gulp.task('minify-css', function() {
    return gulp.src('./styles.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css'));
});

// Task to minify HTML
gulp.task('minify-html', function() {
    return gulp.src('./index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
});

// Default task that runs all the above tasks
gulp.task('default', gulp.parallel('minify-js', 'minify-css', 'minify-html'));
