'use strict';

const autoprefixer = require('gulp-autoprefixer');
const gulp = require('gulp');
const sass = require('gulp-sass');

const internals = {
    distDir: './dist',
    srcDir: './src',
    jsFiles: '/**/*.js',
    sassFiles: '/**/*.scss'
};


// --- Tasks

// sass

gulp.task('sass', () => {

    return gulp.src(internals.srcDir + internals.sassFiles)
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'iOS >= 6'],
            cascade: false
        }))
        .pipe(gulp.dest(internals.distDir));
});


// Watch

gulp.task('watch', () => {
    gulp.watch(internals.srcDir + internals.sassFiles, ['sass']);
});