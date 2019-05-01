import _ from 'lodash';
import { getReleasesAndLogin } from '../githubApi';
import { Context } from '../utils/prisma-client';

export const Query = {
  async releases(
    _root: undefined,
    { owner, name, last }: { owner: string; name: string; last: number },
    _context: Context,
  ) {
    return getReleasesAndLogin(owner, name, last);
  },
};
