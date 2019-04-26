import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

const getGithubRepoReleases = gql`
  query GithubRepoReleases($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      releases(last: 20) {
        edges {
          node {
            name
            publishedAt
            tagName
            url
            description
            author {
              name
              login
            }
          }
        }
      }
    }
  }
` as DocumentNode;

export default getGithubRepoReleases;
