import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('OrSignifier2 test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      'molecules/output',
      'OrSignifier2',
    );
  });

  specify('it looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
