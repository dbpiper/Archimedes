import { getClientUrl } from '../../config/dotenvs';
import { findElementRegex } from '../../util/archimedes';

describe('Home screen', () => {
  specify('successfully loads', () => {
    cy.visit(getClientUrl());
  });

  describe('header tests', () => {
    specify('the title is correct', () => {
      findElementRegex(/Header.{2}Title.*/).contains('Archimedes');
    });
  });
});

export {};
