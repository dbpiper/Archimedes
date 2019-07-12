import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

import { findElementRegex } from '../../../util/archimedes';

describe('Switch2', () => {
  describe('Switch2 (no animation) tests', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        'Switch2 (no animation)',
        'Switch2',
      );
    });
    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });

    specify('looks good after click', () => {
      findElementRegex('button', 'Switch2.{2}Track.*')
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

  describe('Switch2 tests', () => {
    before(() => {
      visitComponentStoryIframe(getStorybookUrl(), 'Switch2');
    });
    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });

    specify('looks good after click', () => {
      // cypress.screenshot() will automatically stop animations
      // but this screenshot will look slightly different due to this behavior
      // (the thumb will not be on the right side)
      findElementRegex('button', 'Switch2.{2}Track.*')
        .click()
        .then(() => {
          cy.matchImageSnapshot();
        });
    });
  });
});

export {};
