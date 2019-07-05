import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('H5', () => {
  specify('it looks correct', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'H5');
    cy.matchImageSnapshot();
  });
});

export {};
