import { findElementRegex } from '../../../../util/archimedes';
import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

describe('Subsetting test suite', () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'Subsetting');
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
