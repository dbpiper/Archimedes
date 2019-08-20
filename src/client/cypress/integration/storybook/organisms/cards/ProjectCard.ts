import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'ProjectCard';
const componentPath = `organisms/cards/${componentName}`;

describe(`${componentName}/voting test suite`, () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${componentPath}/voting`,
      componentName,
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

describe(`${componentName}/switch test suite`, () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${componentPath}/switch`,
      componentName,
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
