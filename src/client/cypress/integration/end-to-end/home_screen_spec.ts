import { getClientUrl } from '../../config/dotenvs';
import { findTitle } from '../../util/archimedes';

describe('Home screen', () => {
  specify('successfully loads', () => {
    cy.visit(getClientUrl());
  });

  describe('header tests', () => {
    specify('the title is correct', () => {
      findTitle().contains('Archimedes');
    });
  });
});

export {};
