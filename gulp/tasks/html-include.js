import browserSync from 'browser-sync';
import fileInclude from "gulp-file-include";
import typograf from "gulp-typograf";

export const htmlInclude = () => {
  return docs.gulp.src([`${docs.paths.base.src}/*.html`])
    .pipe(fileInclude({
      prefix: '@',
      basepath: '@file',
      maxRecursion: 100
    }))
    .pipe(typograf({
      locale: ['ru', 'en-US']
    }))
    .pipe(docs.gulp.dest(docs.paths.base.build))
    .pipe(browserSync.stream());
}
