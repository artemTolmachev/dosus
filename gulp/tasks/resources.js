export const resources = () => {
  return docs.gulp.src(`${docs.paths.resourcesFolder}/**`, { encoding: false })
    .pipe(docs.gulp.dest(docs.paths.base.build))
}
