import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'OrLine1';

describe(`${componentName} test suite`, () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'atoms', componentName);
  });

  specify('it looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
