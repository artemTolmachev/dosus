import rev from "gulp-rev";
import revDel from "gulp-rev-delete-original";

export const cacheTask = () => {
  return docs.gulp.src(`${docs.paths.base.build}/**/*.{css,js,svg,png,jpg,jpeg,webp,woff2}`, {
      base: docs.paths.base.build,
      encoding: false,
    })
    .pipe(rev())
    .pipe(revDel())
    .pipe(docs.gulp.dest(docs.paths.base.build))
    .pipe(rev.manifest('rev.json'))
    .pipe(docs.gulp.dest(docs.paths.base.build));
};
