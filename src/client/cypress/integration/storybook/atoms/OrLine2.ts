import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'OrLine2';

describe(`${componentName} test suite`, () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'atoms', componentName);
  });

  specify('it looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
