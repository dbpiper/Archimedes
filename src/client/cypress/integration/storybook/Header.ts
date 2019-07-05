import { findTitle } from '../../util/archimedes';
import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../util/storybook';

describe('Header', () => {
  specify('successfully loads', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'Header');
  });

  describe('header tests', () => {
    specify('the title is correct', () => {
      cy.reload(true);
      findTitle().contains('Archimedes');
    });
  });
});

export {};
