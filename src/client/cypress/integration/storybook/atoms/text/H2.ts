import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('H2', () => {
  specify('it looks correct', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'H2');
    cy.matchImageSnapshot();
  });
});

export {};
