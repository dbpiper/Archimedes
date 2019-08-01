import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

// We don't need to test that the switch works, since it is tested
// in the switch tests. So we only test that the layout is correct here.

const settingPath = 'molecules/selection/Setting';

describe('Setting/off test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${settingPath}/off`,
      'Setting',
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});
describe('Setting/on test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${settingPath}/on`,
      'Setting',
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
