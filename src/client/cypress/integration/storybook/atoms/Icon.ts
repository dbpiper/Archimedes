import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

const iconPath = 'atoms/Icon';

describe('Icon', () => {
  specify('Search Icon looks right', () => {
    visitComponentStoryIframe(getStorybookUrl(), iconPath, 'Search Icon');
    cy.matchImageSnapshot();
  });

  specify('Facebook Icon looks right', () => {
    visitComponentStoryIframe(getStorybookUrl(), iconPath, 'Facebook Icon');
    cy.matchImageSnapshot();
  });

  specify('Google Icon looks right', () => {
    visitComponentStoryIframe(getStorybookUrl(), iconPath, 'Google Icon');
    cy.matchImageSnapshot();
  });
});

export {};
