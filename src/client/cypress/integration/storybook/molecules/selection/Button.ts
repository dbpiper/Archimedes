import STYLES from '@src/STYLE';
import { CssProperty, verifyCssProperty } from '@util/cypress';
import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'Button';
const buttonPath = `molecules/selection/${componentName}`;
const buttonRegex = /Button.{2}BaseButton.*/;

// we don't test the hover or active states of the buttons
// as it appears that Cypress cannot do so properly at this time

describe(`${componentName}/contained test suite`, () => {
  describe('primary test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${buttonPath}/contained/primary`,
        componentName,
      );
    });

    specify('default view looks correct', () => {
      verifyCssProperty(
        CssProperty.BackgroundColor,
        STYLES.color.primary,
        buttonRegex,
      );
      cy.matchImageSnapshot();
    });

    describe('icon test suite', () => {
      before(() => {
        visitComponentStoryIframe(
          getStorybookUrl(),
          `${buttonPath}/contained/primary/icon`,
          componentName,
        );
      });

      specify('default view looks correct', () => {
        verifyCssProperty(
          CssProperty.BackgroundColor,
          STYLES.color.primary,
          buttonRegex,
        );
        cy.matchImageSnapshot();
      });
    });
  });

  describe('secondary test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${buttonPath}/contained/secondary`,
        componentName,
      );
    });

    specify('default view looks correct', () => {
      verifyCssProperty(
        CssProperty.BackgroundColor,
        STYLES.color.secondary,
        buttonRegex,
      );
      cy.matchImageSnapshot();
    });

    describe('icon test suite', () => {
      before(() => {
        visitComponentStoryIframe(
          getStorybookUrl(),
          `${buttonPath}/contained/secondary/icon`,
          componentName,
        );
      });

      specify('default view looks correct', () => {
        verifyCssProperty(
          CssProperty.BackgroundColor,
          STYLES.color.secondary,
          buttonRegex,
        );
        cy.matchImageSnapshot();
      });
    });
  });
});

describe(`${componentName}/outlined test suite`, () => {
  describe('primary test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${buttonPath}/outlined/primary`,
        componentName,
      );
    });

    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });
  });

  describe('secondary test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${buttonPath}/outlined/secondary`,
        componentName,
      );
    });

    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });
  });
});

describe(`${componentName}/text test suite`, () => {
  describe('primary test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${buttonPath}/text/primary`,
        componentName,
      );
    });

    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });
  });

  describe('secondary test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${buttonPath}/text/secondary`,
        componentName,
      );
    });

    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });
  });
});

export {};
