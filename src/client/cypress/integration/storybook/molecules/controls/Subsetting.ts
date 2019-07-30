import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

// We don't need to test that the switch works, since it is tested
// in the switch tests. So we only test that the layout is correct here.

describe('Subsetting/off test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      'Subsetting',
      'Subsetting/off',
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

describe('Subsetting/on test suite', () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'Subsetting', 'Subsetting/on');
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
