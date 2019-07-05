import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('H6', () => {
  specify('it looks correct', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'H6');
    cy.matchImageSnapshot();
  });
});

export {};
