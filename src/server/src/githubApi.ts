import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';
import _ from 'lodash';
// tslint:disable-next-line: no-var-requires
require('isomorphic-fetch');
import getGithubRepoReleases from './queries/getGithubRepoReleases';
import {
  GithubRepoReleases,
  GithubRepoReleases_repository_releases_edges,
} from './queries/types/GithubRepoReleases';

interface GithubRepoReleasesQueryResult {
  data: GithubRepoReleases;
}

export interface User {
  id: string;
  name: string;
  login: string;
}

export interface Release {
  id: string;
  name: string;
  tagName: string;
  url: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  isPrerelease: boolean;
  description: string;
  author: User;
}

const githubClient = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      }
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: 'https://api.github.com/graphql',
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_API_PERSONAL_ACCESS_TOKEN}`,
      },
    }),
  ]),
  cache: new InMemoryCache(),
});

const loginToGithub = () =>
  githubClient.query({
    // tslint:disable-next-line: no-unsafe-any
    query: gql`
      query Login {
        viewer {
          login
        }
      }
    `,
  });

const _itemHasValue = <T>(item: T | null): item is T => item != null;

const getGithubReleases = async (
  owner: string,
  name: string,
  last: number,
): Promise<Release[] | undefined> => {
  const githubResults: GithubRepoReleasesQueryResult = await githubClient.query(
    {
      // tslint:disable-next-line: no-unsafe-any
      query: getGithubRepoReleases,
      variables: {
        owner,
        name,
        last: Math.round(last),
      },
    },
  );
  if (githubResults.data.repository) {
    if (githubResults.data.repository.releases.edges) {
      const edges = githubResults.data.repository.releases.edges;
      const nonNullEdges = _.filter(edges, element =>
        _itemHasValue(element),
      ) as GithubRepoReleases_repository_releases_edges[];
      const releases = _.map(nonNullEdges, element => element.node);
      const nonNullReleases = _.filter(releases, element =>
        _itemHasValue(element),
      ) as Release[];

      return nonNullReleases;
    }
  }

  // we weren't able to fetch the data successfully for some reason
  return undefined;
};

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

export { loginToGithub, getGithubReleases, getReleasesAndLogin };
