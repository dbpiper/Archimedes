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

describe('Checkbox', () => {
  describe('Checkbox (no animation) tests', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        'Checkbox (no animation)',
        'Checkbox',
      );
    });
    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });

    specify('looks good after click', () => {
      findElementRegex('div', 'Checkbox.{2}CheckboxContainer.*')
        .click()
        .then(() => {
          // we have to disable cypress' disabling of animations in this case
          // since here we have set the animations to have a 0s duration,
          // thus effectively disabling them; but in apparently a different
          // manner than cypress.
          cy.matchImageSnapshot({
            disableTimersAndAnimations: false,
          });
        });
    });
  });

  describe('Checkbox tests', () => {
    before(() => {
      visitComponentStoryIframe(getStorybookUrl(), 'Checkbox');
    });
    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });

    specify('looks good after click', () => {
      // cypress.screenshot() will automatically stop animations
      // but this screenshot will look slightly different due to this behavior
      // (the thumb will not be on the right side)
      findElementRegex('div', 'Checkbox.{2}CheckboxContainer.*')
        .click()
        .then(() => {
          cy.matchImageSnapshot();
        });
    });
  });
});

export {};
