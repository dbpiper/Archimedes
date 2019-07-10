import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

import { findElementRegex } from '../../../util/archimedes';

describe('Switch1', () => {
  specify('successfully loads', () => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      'Switch1 (no animation)',
      'Switch1',
    );
  });

  describe('Checkbox tests', () => {
    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });

    specify('looks good after click', () => {
      findElementRegex('button', 'Switch1.{2}Track.*')
        .click()
        .then(() => {
          cy.wait(200).then(() => {
            findElementRegex('button', 'Switch1.{2}Track.*').then(() => {
              cy.matchImageSnapshot();
            });
          });
        });
    });
  });
});

export {};
