import { findElementRegex } from '@util/cypress';
import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'Dropdown';
const dropdownPath = 'molecules/selection';
const inputRegex = /.*Input-.*/;
const clearInputButtonRegex = /.*ClearInputButton.*/;

describe(`${componentName} test suite`, () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), dropdownPath, componentName);
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });

  specify('the menu looks correct', () => {
    findElementRegex(inputRegex).click({ force: true });
    cy.matchImageSnapshot({
      disableTimersAndAnimations: true,
    });
    findElementRegex(inputRegex).click({ force: true });
  });

  specify('correctly selects first result', () => {
    findElementRegex(inputRegex)
      .click({ force: true })
      .type('{downarrow}')
      .type('{enter}');
    cy.matchImageSnapshot({
      disableTimersAndAnimations: true,
    });
    findElementRegex(clearInputButtonRegex).click();
  });

  specify('correctly selects second result', () => {
    findElementRegex(inputRegex)
      .click({ force: true })
      .type('{downarrow}')
      .type('{downarrow}')
      .type('{enter}');
    cy.matchImageSnapshot({
      disableTimersAndAnimations: true,
    });
    findElementRegex(clearInputButtonRegex).click();
  });

  specify('correctly selects sixth result; and scrolls', () => {
    findElementRegex(inputRegex)
      .click({ force: true })
      .type('{downarrow}')
      .type('{downarrow}')
      .type('{downarrow}')
      .type('{downarrow}')
      .type('{downarrow}')
      .type('{downarrow}')
      .type('{enter}');
    cy.matchImageSnapshot({
      disableTimersAndAnimations: true,
    });
    findElementRegex(clearInputButtonRegex).click();
  });
});

export {};
