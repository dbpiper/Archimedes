import { findElementRegex } from '../../../../util/cypress';
import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

const TextFieldRegex = /TextField.*/;

describe('TextField test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      'molecules/input',
      'TextField',
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });

  specify('looks correct after typing', () => {
    findElementRegex(TextFieldRegex).type('hello world!');
    cy.matchImageSnapshot();
  });
});

export {};
