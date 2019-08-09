import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'ProjectActions';

describe(`${componentName} test suite`, () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      'molecules/containers',
      componentName,
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
