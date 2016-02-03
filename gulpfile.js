
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var shell = require('gulp-shell');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/*.scss", ['sass']);
    //gulp.watch("html/*.html", ['index_html']);
    gulp.watch(["html/*.html","css/*.css"], ['index_html']).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        ;
});

// rebuild index.html
gulp.task('index_html', function() {
    return gulp.src("html/*.html")
        .pipe(shell([
            'python build_index.py',
            'echo "cat4" > test2.txt'
        ], {
            templateData: {
                f: function (s) {
                    return s
                }
        }
        }))
        ;
});

gulp.task('default', ['serve']);