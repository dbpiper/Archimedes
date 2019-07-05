import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('H4', () => {
  specify('it looks correct', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'H4');
    cy.matchImageSnapshot();
  });
});

export {};
