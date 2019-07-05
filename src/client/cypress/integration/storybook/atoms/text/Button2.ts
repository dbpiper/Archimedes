import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('Button2', () => {
  specify('it looks correct', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'Button2');
    cy.matchImageSnapshot();
  });
});

export {};
