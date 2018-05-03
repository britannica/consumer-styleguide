
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const gulp = require('gulp');
const livingcss = require('gulp-livingcss');
const sass = require('gulp-sass');


// Build the style guide

gulp.task('guide:build', ['css:dist'], () => {
  const sourceFiles = './dist/*.css';
  const destination = './docs';

  return gulp.src(sourceFiles)
    .pipe(livingcss(destination, {
      template: './template/template.hbs',
      preprocess: (context, template, Handlebars) => {
        //context.sections.forEach(section => section.children && console.log(section.children));

        context.title = 'Britannica Style Guide';

        context.globalStylesheets.push('https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i');
        context.globalStylesheets.push('https://fonts.googleapis.com/css?family=Cinzel');
        context.globalStylesheets.push('https://fonts.googleapis.com/icon?family=Material+Icons');
        context.globalStylesheets.push('./britannica-styles.css');
      },
      sortOrder: ['atoms', 'molecules', 'organisms', 'templates', 'pages'],
    }))
    .pipe(gulp.dest(destination));
});


// Build the CSS from our Sass

gulp.task('css:dist', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('britannica-styles.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./docs'));
});


// Rebuild everything whenever changes to .scss files are made

gulp.task('watch', () => {
  gulp.watch('./src/**/*.scss', ['guide:build']);
});


// Start local server, `Ctrl + C` to stop

gulp.task('server:start', () => {
  connect.server({
    livereload: true,
    port: 3000,
    root: 'docs',
  });
});

gulp.task('server:stop', () => {
  connect.serverClose();
});
