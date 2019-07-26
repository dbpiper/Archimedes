import { findElementRegex } from '../../../../util/archimedes';
import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('Setting test suite', () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'Setting');
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });

  specify('looks correct after click', () => {
    findElementRegex('button', 'Switch2.{2}Track.*')
      .click()
      .then(() => {
        cy.matchImageSnapshot();
      });
  });
});

export {};
