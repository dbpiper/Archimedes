import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

// We don't need to test that the switch works, since it is tested
// in the switch tests. So we only test that the layout is correct here.

describe('Setting/off test suite', () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'Setting', 'Setting/off');
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});
describe('Setting/on test suite', () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'Setting', 'Setting/on');
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });
});

export {};
