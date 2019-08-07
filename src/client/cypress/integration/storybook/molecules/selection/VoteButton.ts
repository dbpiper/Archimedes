import STYLES from '@src/STYLE';
import {
  CssProperty,
  verifyCssProperty,
  verifyCssPropertyAndClick,
} from '@util/cypress';
import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'VoteButton';
const voteButtonPath = `molecules/selection/${componentName}`;
const voteButtonRegex = /VoteButton.*/;

describe(`${componentName}/up test suite`, () => {
  describe('off test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${voteButtonPath}/up/off`,
        componentName,
      );
    });

    specify('default view looks correct', () => {
      verifyCssProperty(
        CssProperty.Color,
        STYLES.color.darkSecondary,
        voteButtonRegex,
      );
      cy.matchImageSnapshot();
    });

    specify('looks correct after click', () => {
      verifyCssPropertyAndClick(
        CssProperty.Color,
        STYLES.color.darkSecondary,
        STYLES.color.success,
        voteButtonRegex,
      );
      cy.matchImageSnapshot();
    });
  });

  describe('on test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${voteButtonPath}/up/on`,
        componentName,
      );
    });

    specify('default view looks correct', () => {
      verifyCssProperty(
        CssProperty.Color,
        STYLES.color.success,
        voteButtonRegex,
      );
      cy.matchImageSnapshot();
    });

    specify('looks correct after click', () => {
      verifyCssPropertyAndClick(
        CssProperty.Color,
        STYLES.color.success,
        STYLES.color.darkSecondary,
        voteButtonRegex,
      );
      cy.matchImageSnapshot();
    });
  });
});

describe(`${componentName}/down test suite`, () => {
  describe('off test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${voteButtonPath}/down/off`,
        componentName,
      );
    });

    specify('default view looks correct', () => {
      verifyCssProperty(
        CssProperty.Color,
        STYLES.color.darkSecondary,
        voteButtonRegex,
      );
      cy.matchImageSnapshot();
    });

    specify('looks correct after click', () => {
      verifyCssPropertyAndClick(
        CssProperty.Color,
        STYLES.color.darkSecondary,
        STYLES.color.error,
        voteButtonRegex,
      );
      cy.matchImageSnapshot();
    });
  });

  describe('on test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${voteButtonPath}/down/on`,
        componentName,
      );
    });

    specify('default view looks correct', () => {
      verifyCssProperty(CssProperty.Color, STYLES.color.error, voteButtonRegex);
      cy.matchImageSnapshot();
    });

    specify('looks correct after click', () => {
      verifyCssPropertyAndClick(
        CssProperty.Color,
        STYLES.color.error,
        STYLES.color.darkSecondary,
        voteButtonRegex,
      );
      cy.matchImageSnapshot();
    });
  });
});

export {};
