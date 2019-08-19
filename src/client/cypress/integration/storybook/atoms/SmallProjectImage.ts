import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'SmallProjectImage';

describe(`${componentName} test suite`, () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'atoms', componentName);
  });

  specify('it looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
