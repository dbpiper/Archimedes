import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('OrSignifier2 test suite', () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'OrSignifier2');
  });

  specify('it looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
