import STYLES from '@src/STYLE';
import {
  CssProperty,
  findElementRegex,
  verifyCssProperty,
} from '@util/cypress';
import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'VerticalVoteButtons';
const verticalVoteButtonsPath = 'molecules/selection';
const voteButtonRegex = /^VoteButton.*/;

describe(`${componentName} test suite`, () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      verticalVoteButtonsPath,
      componentName,
    );
  });

  specify('default view looks correct', () => {
    verifyCssProperty(
      CssProperty.Color,
      STYLES.color.darkSecondary,
      voteButtonRegex,
    );
    verifyCssProperty(
      CssProperty.Color,
      STYLES.color.darkSecondary,
      voteButtonRegex,
      1,
    );
    cy.matchImageSnapshot();
  });

  specify('up vote works', () => {
    findElementRegex(voteButtonRegex, 0).click();
    verifyCssProperty(CssProperty.Color, STYLES.color.success, voteButtonRegex);
    verifyCssProperty(
      CssProperty.Color,
      STYLES.color.darkSecondary,
      voteButtonRegex,
      1,
    );
    cy.matchImageSnapshot();
  });

  specify('down vote works', () => {
    findElementRegex(voteButtonRegex, 1).click();
    verifyCssProperty(
      CssProperty.Color,
      STYLES.color.darkSecondary,
      voteButtonRegex,
    );
    verifyCssProperty(
      CssProperty.Color,
      STYLES.color.error,
      voteButtonRegex,
      1,
    );
    cy.matchImageSnapshot();
  });
});

export {};
