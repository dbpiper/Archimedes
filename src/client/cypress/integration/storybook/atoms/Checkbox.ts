import STYLES from '../../../../src/STYLE';
import {
  CssProperty,
  findElementRegex,
  verifyCssProperty,
} from '../../../util/cypress';
import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

const checkboxContainerRegex = /Checkbox.{2}CheckboxContainer.*/;
const boxDarkRegex = /Checkbox.{2}BoxDark.*/;

const checkboxPath = 'atoms/Checkbox';

describe('Checkbox/unchecked test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${checkboxPath}/unchecked`,
      'Checkbox',
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
    verifyCssProperty(
      CssProperty.BackgroundColor,
      STYLES.color.darkSecondary,
      boxDarkRegex,
    );
    findElementRegex(checkboxContainerRegex).click();
    verifyCssProperty(CssProperty.BackgroundColor, STYLES.color.primary, boxDarkRegex);
    cy.matchImageSnapshot();
  });
});

describe('Checkbox/checked test suite', () => {
  specify('successfully loads', () => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${checkboxPath}/checked`,
      'Checkbox',
    );
  });

  describe('Checkbox tests', () => {
    specify('default view looks correct', () => {
      verifyCssProperty(CssProperty.BackgroundColor, STYLES.color.primary, boxDarkRegex);
      cy.matchImageSnapshot();
    });

    specify('looks good after click', () => {
      verifyCssProperty(CssProperty.BackgroundColor, STYLES.color.primary, boxDarkRegex);
      findElementRegex(checkboxContainerRegex).click();
      verifyCssProperty(
        CssProperty.BackgroundColor,
        STYLES.color.darkSecondary,
        boxDarkRegex,
      );
      cy.matchImageSnapshot();
    });
  });
});

export {};
