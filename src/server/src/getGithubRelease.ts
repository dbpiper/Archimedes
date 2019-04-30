import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import _ from 'lodash';
import getGithubRepoReleases from './queries/getGithubRepoReleases';
import {
  GithubRepoReleases,
  GithubRepoReleases_repository_releases_edges,
} from './queries/types/GithubRepoReleases';

interface GithubRepoReleasesQueryResult {
  data: GithubRepoReleases;
}

interface User {
  id: string;
  name: string;
  login: string;
}

interface Release {
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
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_API_PERSONAL_ACCESS_TOKEN}`,
  },
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

export default getGithubReleases;

export { loginToGithub };
