import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'SmallReleaseDescription';

describe(`${componentName} test suite`, () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      'molecules/output',
      componentName,
    );
  });

  specify('it looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
