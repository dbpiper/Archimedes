import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'LabeledCheckbox';
const labeledCheckboxPath = `molecules/selection/${componentName}`;

describe(`${componentName}/unchecked test suite`, () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${labeledCheckboxPath}/unchecked`,
      componentName,
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

describe(`${componentName}/checked test suite`, () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${labeledCheckboxPath}/unchecked`,
      componentName,
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
