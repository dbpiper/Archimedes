import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

// We don't need to test that the checkbox works, since it is tested
// in the checkbox tests. So we only test that the layout is correct here.

describe('LabeledCheckbox/unchecked test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      'LabeledCheckbox',
      'LabeledCheckbox/unchecked',
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

describe('LabeledCheckbox/checked test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      'LabeledCheckbox',
      'LabeledCheckbox/checked',
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
