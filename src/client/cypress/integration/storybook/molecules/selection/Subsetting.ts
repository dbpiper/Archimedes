import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

// We don't need to test that the switch works, since it is tested
// in the switch tests. So we only test that the layout is correct here.

const subsettingPath = 'molecules/selection/Subsetting';

describe('Subsetting/off test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${subsettingPath}/off`,
      'Subsetting',
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

describe('Subsetting/on test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${subsettingPath}/on`,
      'Subsetting',
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
