import { findTitle } from '../../util/archimedes';
import {
  getStorybookUrl,
  visitComponentStoryIFrame,
} from '../../util/storybook';

describe('Header', () => {
  specify('successfully loads', () => {
    visitComponentStoryIFrame(getStorybookUrl(), 'Header');
  });

  describe('header tests', () => {
    specify('the title is correct', () => {
      cy.reload(true);
      findTitle().contains('Archimedes');
    });
  });
});

export {};
