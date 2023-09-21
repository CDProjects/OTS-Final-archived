const replace = require('gulp-replace');
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

//Task to add images to dist
gulp.task('copy-images', function() {
    return gulp.src('./Images/**/*')
        .pipe(gulp.dest('./dist/images'));
});

//Task to replace minified css, javascript and image paths
gulp.task('adjust-paths', function() {
    return gulp.src('./index.html')
        .pipe(replace('href="styles.css"', 'href="css/styles.css"'))
        .pipe(replace('src="scripts.js"', 'src="js/scripts.js"'))
        .pipe(replace('src="Images/', 'src="images/'))
        .pipe(gulp.dest('./dist'));
});


// Default task that runs all the above tasks
gulp.task('default', gulp.parallel('minify-js', 'minify-css', 'minify-html', 'copy-images'));
