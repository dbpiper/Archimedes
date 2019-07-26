import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('SmallProjectAdditionalInfo test suite', () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'SmallProjectAdditionalInfo');
  });

  specify('it looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
