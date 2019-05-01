import _ from 'lodash';
import marked from 'marked';
import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import getReleasesQuery from '../queries/getReleasesQuery';
import {
  Releases,
  Releases_releases,
  ReleasesVariables,
} from '../queries/types/Releases';

class ReleasesQuery extends Query<Releases, ReleasesVariables> {}

const ScrollableSection = styled.section`
  overflow-y: auto !important;
  height: 800px;
  margin: auto;
  width: 70%;
  background-color: #f4eee7;
  margin-top: 50px;
`;

const ReleaseList = () => (
  <ReleasesQuery
    query={getReleasesQuery}
    variables={{
      owner: 'facebook',
      name: 'react',
      last: 5,
    }}
  >
    {({ error, data }) => {
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
  </ReleasesQuery>
);

export default ReleaseList;
