import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('Button1', () => {
  specify('it looks correct', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'Button1');
    cy.matchImageSnapshot();
  });
});

export {};
