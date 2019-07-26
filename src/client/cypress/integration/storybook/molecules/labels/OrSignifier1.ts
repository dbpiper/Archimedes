import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('OrSignifier1 test suite', () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'OrSignifier1');
  });

  specify('it looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
