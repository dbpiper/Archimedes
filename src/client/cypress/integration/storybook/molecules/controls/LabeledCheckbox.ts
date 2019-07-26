import { findElementRegex } from '../../../../util/archimedes';
import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('LabeledCheckbox test suite', () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'LabeledCheckbox');
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });

  specify('looks correct after click', () => {
    findElementRegex('div', 'Checkbox.{2}CheckboxContainer.*')
      .click()
      .then(() => {
        cy.matchImageSnapshot();
      });
  });
});

export {};
