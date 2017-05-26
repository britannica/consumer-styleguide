'use strict';

const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const fs = require('fs');
const glob = require('glob');
const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');

const DIST_DIR = './dist';
const SRC_DIR = './src';
const SASS_GLOB = '/**/*.scss';


// --- Tasks

// Compile SCSS files

gulp.task('sass', () => {

    getFolders(SRC_DIR)
        .map(folder => {
            buildCss(path.join(SRC_DIR, folder, '/*.scss'), `${folder}.css`);
        });

    //buildCss(path.join(SRC_DIR, SASS_GLOB), 'styleguide.css');
});


// Watch

gulp.task('watch', () => {
    gulp.watch(SRC_DIR + SASS_GLOB, ['sass']);
});


/**
 * Get a list of folder names
 *
 * @param {String} dir          The directory in which to look for folders
 * @returns {Array<String>}     A list of the folder names within the specified directory
 */

function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(file => fs.statSync(path.join(dir, file)).isDirectory());
}


/**
 * Build the CSS
 *
 * @param {String} src          A glob that represents the CSS files to include in the task
 * @param {String} filename     The name of the file to output
 * @param {String} [dest]       Destination output directory
 */

function buildCss(src, filename, dest = DIST_DIR) {

    console.log(src, filename, dest);

    return gulp.src(src)
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(concat(filename))
        .pipe(autoprefixer({ browsers: ['last 2 versions', 'iOS >= 7'] }))
        .pipe(gulp.dest(dest));
}
