import STYLES from '@src/STYLE';
import {
  CssProperty,
  verifyCssProperty,
  verifyCssPropertyAndClick,
} from '@util/cypress';
import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'Checkbox';
const checkboxPath = `atoms/${componentName}`;
const checkboxContainerRegex = /Checkbox.{2}CheckboxContainer.*/;
const boxDarkRegex = /Checkbox.{2}BoxDark.*/;

describe(`${componentName} test suite`, () => {
  describe('unchecked test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${checkboxPath}/unchecked`,
        componentName,
      );
    });

    specify('default view looks correct', () => {
      verifyCssProperty(
        CssProperty.BackgroundColor,
        STYLES.color.darkSecondary,
        boxDarkRegex,
      );
      cy.matchImageSnapshot();
    });

    specify('looks good after click', () => {
      verifyCssPropertyAndClick(
        CssProperty.BackgroundColor,
        STYLES.color.darkSecondary,
        STYLES.color.primary,
        boxDarkRegex,
        checkboxContainerRegex,
      );
      cy.matchImageSnapshot();
    });
  });

  describe('checked test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${checkboxPath}/checked`,
        componentName,
      );
    });

    specify('default view looks correct', () => {
      verifyCssProperty(
        CssProperty.BackgroundColor,
        STYLES.color.primary,
        boxDarkRegex,
      );
      cy.matchImageSnapshot();
    });

    specify('looks good after click', () => {
      verifyCssPropertyAndClick(
        CssProperty.BackgroundColor,
        STYLES.color.primary,
        STYLES.color.darkSecondary,
        boxDarkRegex,
        checkboxContainerRegex,
      );
      cy.matchImageSnapshot();
    });
  });
});

export {};
