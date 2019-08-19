import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'Icon';
const iconPath = `atoms/${componentName}`;

describe(`${componentName} test suite`, () => {
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
