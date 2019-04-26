import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import getGithubRepoReleases from './queries/getGithubRepoReleases';
import { GithubRepoReleases } from './queries/types/GithubRepoReleases';

interface GithubRepoReleasesQueryResult {
  data: GithubRepoReleases;
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

const getGithubRelease = (
  owner: string,
  name: string,
): Promise<GithubRepoReleasesQueryResult> =>
  githubClient.query({
    // tslint:disable-next-line: no-unsafe-any
    query: getGithubRepoReleases,
    variables: {
      owner,
      name,
    },
  });

export default getGithubRelease;

export { loginToGithub };
