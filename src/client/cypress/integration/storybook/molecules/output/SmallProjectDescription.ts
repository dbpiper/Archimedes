import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('SmallProjectDescription test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      'molecules/output',
      'SmallProjectDescription',
    );
  });

  specify('it looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
