import { findElementRegex } from '@util/cypress';
import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'SearchField1';
const searchField1InputRegex = /SearchField1.{2}Input*/;
const clearInputButtonRegex = /.*ClearInputButton.*/;

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
    findElementRegex(searchField1InputRegex).type('the');
    cy.matchImageSnapshot();
    findElementRegex(clearInputButtonRegex).click();
  });

  specify('correctly selects first result', () => {
    findElementRegex(searchField1InputRegex)
      .type('the')
      .type('{enter}');
    cy.matchImageSnapshot();
    findElementRegex(clearInputButtonRegex).click();
  });

  specify('correctly selects second result', () => {
    findElementRegex(searchField1InputRegex)
      .type('the')
      .type('{downarrow}')
      .type('{enter}');
    cy.matchImageSnapshot();
    findElementRegex(clearInputButtonRegex).click();
  });
});

export {};
