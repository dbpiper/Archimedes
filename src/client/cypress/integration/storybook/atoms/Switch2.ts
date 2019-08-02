import STYLES from '../../../../src/STYLE';
import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

import {
  CssProperty,
  findElementRegex,
  verifyCssProperty,
} from '../../../util/cypress';

import { translateX } from '../../../util/css';

const switch2Path = 'atoms/Switch2';

const switchTrackRegex = /Switch2.{2}Track.*/;
const thumbRegex = /Switch2.{2}Thumb.*/;

// the offset from the left, in pixels that the thumb is when in the on position
const offsetOnRightSide = 19;

describe('Switch2/off test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${switch2Path}/off`,
      'Switch2',
    );
  });
  specify('default view looks correct', () => {
    verifyCssProperty(
      CssProperty.BackgroundColor,
      STYLES.color.darkSecondary,
      switchTrackRegex,
    );
    cy.matchImageSnapshot();
  });

  specify('looks good after click', () => {
    verifyCssProperty(CssProperty.Transform, translateX(0), thumbRegex);
    findElementRegex(switchTrackRegex).click();
    verifyCssProperty(
      CssProperty.Transform,
      translateX(offsetOnRightSide),
      thumbRegex,
    );
    cy.matchImageSnapshot();
  });
});

describe('Switch2/on test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${switch2Path}/on`,
      'Switch2',
    );
  });
  specify('default view looks correct', () => {
    verifyCssProperty(
      CssProperty.BackgroundColor,
      STYLES.color.primary,
      switchTrackRegex,
    );
    cy.matchImageSnapshot();
  });

  specify('looks good after click', () => {
    verifyCssProperty(
      CssProperty.Transform,
      translateX(offsetOnRightSide),
      thumbRegex,
    );
    findElementRegex(switchTrackRegex).click();
    verifyCssProperty(CssProperty.Transform, translateX(0), thumbRegex);
    cy.matchImageSnapshot();
  });
});

export {};
