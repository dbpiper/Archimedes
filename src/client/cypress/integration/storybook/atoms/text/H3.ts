import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('H3', () => {
  specify('it looks correct', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'H3');
    cy.matchImageSnapshot();
  });
});

export {};
