import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'ReleaseCard';

describe(`${componentName} test suite`, () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      'organisms/cards',
      componentName,
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
