import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('Caption', () => {
  specify('it looks correct', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'Caption');
    cy.matchImageSnapshot();
  });
});

export {};
