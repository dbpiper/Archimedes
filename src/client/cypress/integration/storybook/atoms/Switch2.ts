import STYLES from '../../../../src/STYLE';
import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

import {
  findElementRegex,
  hexColorToRGBCssString,
} from '../../../util/archimedes';

const snapshotAfterVerifyBGColor = (color: string) => {
  findElementRegex('button', 'Switch2.{2}Track.*')
    .should('have.css', 'background-color', hexColorToRGBCssString(color))
    .then(() => {
      cy.matchImageSnapshot();
    });
};
const snapshotAfterClickAndVerifyBGColor = (
  beforeColor: string,
  afterColor: string,
) => {
  findElementRegex('button', 'Switch2.{2}Track.*')
    .should('have.css', 'background-color', hexColorToRGBCssString(beforeColor))
    .click()
    .should('have.css', 'background-color', hexColorToRGBCssString(afterColor))
    .then(() => {
      cy.matchImageSnapshot();
    });
};

describe('Switch2/off', () => {
  describe('Switch2 (no animation) tests', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        'Switch2 (no animation)',
        'Switch2/off',
      );
    });
    specify('default view looks correct', () => {
      snapshotAfterVerifyBGColor(STYLES.color.darkSecondary);
    });

    specify('looks good after click', () => {
      snapshotAfterClickAndVerifyBGColor(
        STYLES.color.darkSecondary,
        STYLES.color.primary,
      );
    });
  });

  describe('Switch2 tests', () => {
    before(() => {
      visitComponentStoryIframe(getStorybookUrl(), 'Switch2', 'Switch2/off');
    });
    specify('default view looks correct', () => {
      snapshotAfterVerifyBGColor(STYLES.color.darkSecondary);
    });

    specify('looks good after click', () => {
      snapshotAfterClickAndVerifyBGColor(
        STYLES.color.darkSecondary,
        STYLES.color.primary,
      );
    });
  });
});

describe('Switch2/on', () => {
  describe('Switch2 (no animation) tests', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        'Switch2 (no animation)',
        'Switch2/on',
      );
    });
    specify('default view looks correct', () => {
      snapshotAfterVerifyBGColor(STYLES.color.primary);
    });

    specify('looks good after click', () => {
      snapshotAfterClickAndVerifyBGColor(
        STYLES.color.primary,
        STYLES.color.darkSecondary,
      );
    });
  });

  describe('Switch2 tests', () => {
    before(() => {
      visitComponentStoryIframe(getStorybookUrl(), 'Switch2', 'Switch2/on');
    });
    specify('default view looks correct', () => {
      snapshotAfterVerifyBGColor(STYLES.color.primary);
    });

    specify('looks good after click', () => {
      snapshotAfterClickAndVerifyBGColor(
        STYLES.color.primary,
        STYLES.color.darkSecondary,
      );
    });
  });
});

export {};
