import { DateTime, NonNegativeInt, URL } from '@okgrow/graphql-scalars';
import _ from 'lodash';
import getGithubReleases, { loginToGithub } from './getGithubRelease';

const getReleasesAndLogin = async (
  owner: string,
  name: string,
  last: number,
) => {
  // We try to get the results first every time, this will usually work
  // except for the first time, when we'll need to login. Doing it this
  // way makes things much faster as we'll only login when we absolutely
  // have to.
  let githubResults = await getGithubReleases(owner, name, last);

  // we're already logged in and the got the items!
  // give them back to the caller
  if (githubResults) {
    return githubResults;
  }

  // assuming that we're not logged in yet; it could fail for other reasons
  // but this is definitely the major one
  await loginToGithub();
  githubResults = await getGithubReleases(owner, name, last);

  // we logged in successfully and got the items!
  // give them back to the caller
  if (githubResults) {
    return githubResults;
  }

  // something went wrong; we'll just return an empty list
  // looks like it might not have just been that we weren't logged in...
  return [];
};

export default {
  DateTime,
  NonNegativeInt,
  URL,
  Query: {
    async releases(_root: any, args: any, _context: any) {
      return getReleasesAndLogin(args.owner, args.name, args.last);
    },
  },
};
