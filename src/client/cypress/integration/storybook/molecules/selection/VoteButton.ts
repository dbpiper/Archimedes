import STYLES from '../../../../../src/STYLE';
import {
  CssProperty,
  findElementRegex,
  verifyCssProperty,
} from '../../../../util/cypress';
import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

const voteButtonPath = 'molecules/selection/VoteButton';
const voteButtonRegex = /VoteButton.*/;

describe('VoteButton/up test suite', () => {
  describe('VoteButton/up/off test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${voteButtonPath}/up/off`,
        'VoteButton',
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
      verifyCssProperty(
        CssProperty.Color,
        STYLES.color.darkSecondary,
        voteButtonRegex,
      );
      findElementRegex(voteButtonRegex).click();
      verifyCssProperty(
        CssProperty.Color,
        STYLES.color.success,
        voteButtonRegex,
      );
      cy.matchImageSnapshot();
    });
  });

  describe('VoteButton/up/on test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${voteButtonPath}/up/on`,
        'VoteButton',
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
      verifyCssProperty(
        CssProperty.Color,
        STYLES.color.success,
        voteButtonRegex,
      );
      findElementRegex(voteButtonRegex).click();
      verifyCssProperty(
        CssProperty.Color,
        STYLES.color.darkSecondary,
        voteButtonRegex,
      );
      cy.matchImageSnapshot();
    });
  });
});

describe('VoteButton/down test suite', () => {
  describe('VoteButton/down/off test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${voteButtonPath}/down/off`,
        'VoteButton',
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
      verifyCssProperty(
        CssProperty.Color,
        STYLES.color.darkSecondary,
        voteButtonRegex,
      );
      findElementRegex(voteButtonRegex).click();
      verifyCssProperty(CssProperty.Color, STYLES.color.error, voteButtonRegex);
      cy.matchImageSnapshot();
    });
  });

  describe('VoteButton/down/on test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${voteButtonPath}/down/on`,
        'VoteButton',
      );
    });

    specify('default view looks correct', () => {
      verifyCssProperty(CssProperty.Color, STYLES.color.error, voteButtonRegex);
      cy.matchImageSnapshot();
    });

    specify('looks correct after click', () => {
      verifyCssProperty(CssProperty.Color, STYLES.color.error, voteButtonRegex);
      findElementRegex(voteButtonRegex).click();
      verifyCssProperty(
        CssProperty.Color,
        STYLES.color.darkSecondary,
        voteButtonRegex,
      );
      cy.matchImageSnapshot();
    });
  });
});

export {};
