import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

describe('Icon', () => {
  specify('Search Icon looks right', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'Search Icon', 'Icon');
    cy.matchImageSnapshot();
  });

  specify('Facebook Icon looks right', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'Facebook Icon', 'Icon');
    cy.matchImageSnapshot();
  });

  specify('Google Icon looks right', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'Google Icon', 'Icon');
    cy.matchImageSnapshot();
  });
});

export {};
