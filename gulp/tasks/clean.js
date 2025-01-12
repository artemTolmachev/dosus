import { deleteAsync } from 'del';

export const clean = () => {
  return deleteAsync(docs.paths.base.build);
}
