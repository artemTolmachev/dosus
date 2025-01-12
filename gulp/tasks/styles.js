import gulpif from 'gulp-if';
import browserSync from 'browser-sync';
import cleanCSS from 'gulp-clean-css';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import notify from 'gulp-notify';

const sass = gulpSass(dartSass);

export const styles = () => {
  return docs.gulp.src(docs.paths.srcScss, { sourcemaps: !docs.isProd })
    .pipe(plumber(
      notify.onError({
        title: "SCSS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false,
      grid: true,
      overrideBrowserslist: ["last 5 versions"]
    }))
    .pipe(gulpif(docs.isProd, cleanCSS({
      level: 2
    })))
    .pipe(docs.gulp.dest(docs.paths.buildCssFolder, { sourcemaps: '.' }))
    .pipe(browserSync.stream());
};
