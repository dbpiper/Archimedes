import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'OrSignifier2';

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
