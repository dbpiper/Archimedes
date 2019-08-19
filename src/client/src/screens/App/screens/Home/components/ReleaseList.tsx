import { Query } from '@apollo/react-components';
import { ApolloError } from 'apollo-client';
import _ from 'lodash';
import marked from 'marked';
import React from 'react';
import styled from 'styled-components';
import getReleasesQuery from '../queries/getReleasesQuery';
import { Releases, Releases_releases } from '../queries/types/Releases';

const ScrollableSection = styled.section`
  overflow-y: auto !important;
  height: 800px;
  margin: auto;
  width: 70%;
  background-color: #f4eee7;
  margin-top: 50px;
`;

const ReleaseList = () => (
  <Query
    query={getReleasesQuery}
    variables={{
      owner: 'facebook',
      name: 'react',
      last: 5,
    }}
  >
    {({ error, data }: { data: Releases; error?: ApolloError }) => {
      let releases: Releases_releases[] = [];
      if (data && data.releases) {
        const nonNullReleases = _.filter(data.releases, element => {
          if (element) {
            return true;
          }

          return false;
        }) as Releases_releases[];
        releases = nonNullReleases;
      }

      if (releases) {
        console.log(releases);
      }

      if (error) {
        console.log(`error :( ${error}`);
      }

      return (
        <ScrollableSection>
          <ul>
            {releases
              .filter(release => !release.isPrerelease)
              .reverse()
              .map((release, key) => {
                let descriptionHtml = { __html: '' };
                if (release.description) {
                  const descriptionMarkdownHtml = marked(release.description);

                  if (descriptionMarkdownHtml) {
                    descriptionHtml = { __html: descriptionMarkdownHtml };
                  }
                }

                return (
                  <li key={key}>
                    <span>
                      React <a href={release.url}>{release.tagName}</a>{' '}
                      {release.updatedAt}
                    </span>
                    <p dangerouslySetInnerHTML={descriptionHtml} />
                  </li>
                );
              })}
          </ul>
        </ScrollableSection>
      );
    }}
  </Query>
);

export default ReleaseList;
