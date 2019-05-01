import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

const getGithubRepoReleases = gql`
  query GithubRepoReleases($owner: String!, $name: String!, $last: Int!) {
    repository(owner: $owner, name: $name) {
      releases(last: $last) {
        edges {
          node {
            name
            publishedAt
            createdAt
            updatedAt
            isPrerelease
            tagName
            url
            id
            description
            author {
              name
              login
              id
            }
          }
        }
      }
    }
  }
` as DocumentNode;

export default getGithubRepoReleases;
