import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('SmallProjectAdditionalInfo test suite', () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'molecules/output', 'SmallProjectAdditionalInfo');
  });

  specify('it looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
