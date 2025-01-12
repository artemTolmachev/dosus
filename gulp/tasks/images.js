import gulpif from 'gulp-if';
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';
import newer from "gulp-newer";

export const images = () => {
  return docs.gulp.src([`${docs.paths.srcImgFolder}/**/**.{jpg,jpeg,png,svg}`], { encoding: false })
    // .pipe(newer(docs.paths.buildImgFolder))
    // .pipe(gulpif(docs.isProd, imagemin([
    //   gifsicle({ interlaced: true }),
    //   mozjpeg({ quality: 75, progressive: true }),
    //   optipng({ optimizationLevel: 2 }),
    // ])))
    .pipe(docs.gulp.dest(docs.paths.buildImgFolder))
};
