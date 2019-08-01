import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

describe('LargeProjectImage', () => {
  specify('successfully loads', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'atoms', 'LargeProjectImage');
  });

  describe('LargeProjectImage tests', () => {
    specify('it looks correct', () => {
      cy.matchImageSnapshot();
    });
  });
});

export {};
