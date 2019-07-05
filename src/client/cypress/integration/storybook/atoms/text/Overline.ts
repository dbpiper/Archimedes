import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('Overline', () => {
  specify('it looks correct', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'Overline');
    cy.matchImageSnapshot();
  });
});

export {};
