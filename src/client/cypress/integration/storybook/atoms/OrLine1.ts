import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

describe('OrLine1', () => {
  specify('successfully loads', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'atoms', 'OrLine1');
  });

  describe('OrLine1 tests', () => {
    specify('it looks correct', () => {
      cy.matchImageSnapshot();
    });
  });
});

export {};
