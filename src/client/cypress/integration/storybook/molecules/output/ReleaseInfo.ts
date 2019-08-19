import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'ReleaseInfo';

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
