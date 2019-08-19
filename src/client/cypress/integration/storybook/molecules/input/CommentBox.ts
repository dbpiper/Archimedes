import { findElementRegex } from '@util/cypress';
import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'CommentBox';
const commentBoxRegex = /CommentBox.*/;

describe(`${componentName} test suite`, () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      'molecules/input',
      componentName,
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });

  specify('looks correct after typing', () => {
    findElementRegex(commentBoxRegex).type(
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    );
    cy.matchImageSnapshot();
  });
});

export {};
