let gulp = require('gulp'),
    sass = require('gulp-sass'),
    svgSprite = require('gulp-svg-sprite'),
    autoprefixer = require('gulp-autoprefixer'),
    cheerio = require('gulp-cheerio'),
    svgmin = require('gulp-svgmin'),
    browserSync = require('browser-sync'),
    pug = require('gulp-pug'),
    minify = require('gulp-minify'),
    assetsDir = 'src/',
    destDir = 'template/';

gulp.task('sass', function () {
    return gulp.src(assetsDir + 'scss/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(gulp.dest(destDir + 'css'))
});

gulp.task('minify', function(done) {
    gulp.src(assetsDir + 'js/script.js')
    .pipe(minify({
        ext: {
            min: '.min.js'
        }
    }
    ))
    .pipe(gulp.dest(destDir + 'js'))
    .pipe(browserSync.stream());
    done();
});

gulp.task('pug', function () {
    return gulp.src(assetsDir + 'pug/**/!(_)*.pug')
        .pipe(pug({
            pretty: true, //deprecated
            basedir: __dirname
        }))
        .pipe(gulp.dest(__dirname))
        .pipe(browserSync.stream())
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('svgSprite', function () {
    return gulp.src(assetsDir + 'img/svg/sprite/**/*.svg') // svg files for sprite
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(svgSprite({
                mode: {
                    symbol: {
                        sprite: "../sprite.svg"  //sprite file name
                    }
                },
            }
        ))
        .pipe(gulp.dest(destDir + 'img/svg/'));
});

gulp.task('watch', function () {
    gulp.watch(assetsDir + 'scss/*.scss', gulp.parallel('sass'));
    gulp.watch(assetsDir + 'pug/**/*.pug', gulp.parallel('pug'));
    gulp.watch(assetsDir + 'js/**/*.js', gulp.parallel('minify'));
    gulp.watch(assetsDir + 'js/**/*.js').on('change', browserSync.reload);
});
gulp.task('default', gulp.parallel('pug', 'sass', 'minify', 'browser-sync', 'watch'));