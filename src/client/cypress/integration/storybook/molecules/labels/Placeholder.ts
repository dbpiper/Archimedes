import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('Placeholder test suite', () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'Placeholder');
  });

  specify('it looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
