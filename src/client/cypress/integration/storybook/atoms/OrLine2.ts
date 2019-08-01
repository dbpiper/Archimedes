import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

describe('OrLine2', () => {
  specify('successfully loads', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'atoms', 'OrLine2');
  });

  describe('OrLine2 tests', () => {
    specify('it looks correct', () => {
      cy.matchImageSnapshot();
    });
  });
});

export {};
