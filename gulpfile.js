
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
    //gulp.watch(["html/*.html","css/*.css"]).on('change', browserSync.reload);
    gulp.watch(["html/*.html","css/*.css"]).on('change', function(file) {
        console.log('++ rebuilding local_index.html');
        gulp.start('index_html');
        browserSync.reload();
        //shell.task([
        //    'python build_index.py',
        //    'echo "cat7" > test2.txt'
        //]);
    });
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
    console.log('++ index_html');
    return gulp.src('')
        .pipe(shell([
            'python build_index.py',
            'echo "cat13" > test2.txt'
        ], {
            templateData: {
                f: function (s) {
                    return s
                }
        }
        })).pipe(shell([
            'git add -A; git commit -m "auto"; git push github master;'
        ]))
        ;
});

gulp.task('default', ['serve']);