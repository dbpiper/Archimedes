import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'Setting';
const settingPath = `molecules/selection/${componentName}`;

describe(`${componentName}/off test suite`, () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${settingPath}/off`,
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
      `${settingPath}/on`,
      componentName,
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
