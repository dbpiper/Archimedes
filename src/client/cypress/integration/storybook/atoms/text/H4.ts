import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('H4', () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'atoms/text', 'H4');
  });

  specify('it looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
