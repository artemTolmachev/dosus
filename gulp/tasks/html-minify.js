import htmlmin from "gulp-htmlmin";

export const htmlMinify = () => {
  return docs.gulp.src(`${docs.paths.base.build}/**/*.html`)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(docs.gulp.dest(docs.paths.base.build));
}
