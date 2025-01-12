import webp from 'gulp-webp';

export const webpImages = () => {
  return docs.gulp.src([`${docs.paths.srcImgFolder}/**/**.{jpg,jpeg,png}`], { encoding: false })
    .pipe(webp())
    .pipe(docs.gulp.dest(docs.paths.buildImgFolder))
};
