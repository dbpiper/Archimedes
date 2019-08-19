import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'Subsetting';
const subsettingPath = `molecules/selection/${componentName}`;

describe(`${componentName}/off test suite`, () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${subsettingPath}/off`,
      componentName,
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

describe(`${componentName}/on test suite`, () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${subsettingPath}/on`,
      componentName,
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
