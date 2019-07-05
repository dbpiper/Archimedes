import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('Body1', () => {
  specify('it looks correct', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'Body1');
    cy.matchImageSnapshot();
  });
});

export {};
