// tslint:disable: no-magic-numbers
import { prisma } from '../../generated/prisma-client';
import { Release, User } from '../githubApi';
import { resolvers } from '../resolvers';

const exampleUser: User = {
  id: 'MKDNA341',
  name: 'Example User',
  login: 'exampleUser1',
};
const exampleRelease: Release = {
  id: 'AHLK243',
  name: 'v1.0.0',
  tagName: 'v1.0.0',
  url: 'https://github.com/billiob/terminology/releases/tag/v1.4.0',
  publishedAt: '2019-03-28T07:13:32Z',
  createdAt: '2019-03-28T07:13:32Z',
  updatedAt: '2019-03-28T07:13:32Z',
  isPrerelease: false,
  description: '# This is an example release',
  author: exampleUser,
};

describe('correctly gets the github releases for a specific project', () => {
  test('the data matches the correct format for a live project', async () => {
    // const data = await getReleasesAndLogin('facebook', 'react', 5);
    // expect(data).toMatchShapeOf(exampleRelease);
    const data = await resolvers.Query.releases(
      undefined,
      {
        owner: 'facebook',
        name: 'react',
        last: 5,
      },
      { prisma, request: undefined },
    );
    expect(data).toMatchShapeOf(exampleRelease);
  });
});
