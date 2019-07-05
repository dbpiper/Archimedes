import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

import { findElementRegex } from '../../../util/archimedes';

describe('Checkbox', () => {
  specify('successfully loads', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'Checkbox');
  });

  describe('Checkbox tests', () => {
    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });

    specify('looks good after click', () => {
      findElementRegex('div', 'Checkbox.{2}CheckboxContainer.*')
        .click()
        .then(() => {
          cy.matchImageSnapshot();
        });
    });
  });
});

export {};
