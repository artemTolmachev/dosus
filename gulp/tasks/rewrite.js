import revRewrite from "gulp-rev-rewrite";
import { readFileSync } from "fs";

export const rewrite = () => {
  const manifest = readFileSync('docs/rev.json');

  docs.gulp.src(`${docs.paths.buildCssFolder}/*.css`)
    .pipe(revRewrite({
      manifest
    }))
    .pipe(docs.gulp.dest(docs.paths.buildCssFolder));
    return docs.gulp.src(`${docs.paths.base.build}/**/*.html`)
    .pipe(revRewrite({
      manifest
    }))
    .pipe(docs.gulp.dest(docs.paths.base.build));
}

