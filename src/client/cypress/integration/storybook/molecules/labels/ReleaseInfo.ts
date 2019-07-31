import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('ReleaseInfo test suite', () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'ReleaseInfo');
  });

  specify('it looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
