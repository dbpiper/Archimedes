import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'H4';

describe(`${componentName} test suite`, () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'atoms/text', componentName);
  });

  specify('it looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
