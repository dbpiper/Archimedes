import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

const getReleasesQuery = gql`
  query Releases($owner: String!, $name: String!, $last: Int!) {
    releases(owner: $owner, name: $name, last: $last) {
      id
      name
      tagName
      url
      publishedAt
      createdAt
      updatedAt
      isPrerelease
      description
      author {
        id
        name
        login
      }
    }
  }
` as DocumentNode;

export default getReleasesQuery;
