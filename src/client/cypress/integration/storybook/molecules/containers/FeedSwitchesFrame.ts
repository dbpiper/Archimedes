import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('FeedSwitchesFrame test suite', () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'FeedSwitchesFrame');
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
