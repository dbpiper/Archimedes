import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

describe('Accent', () => {
  specify('successfully loads', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'atoms', 'Accent');
  });

  describe('accent tests', () => {
    specify('it looks correct', () => {
      cy.matchImageSnapshot();
    });
  });
});

export {};
