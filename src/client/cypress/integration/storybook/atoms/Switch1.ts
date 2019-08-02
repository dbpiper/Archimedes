import STYLES from '../../../../src/STYLE';
import { translateX } from '../../../util/css';
import {
  CssProperty,
  findElementRegex,
  verifyCssProperty,
} from '../../../util/cypress';
import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

const switch1Path = 'atoms/Switch1';

const switchTrackRegex = /Switch1.{2}Track.*/;
const thumbRegex = /Switch1.{2}Thumb.*/;

// the offset from the left, in pixels that the thumb is when in the on position
const offsetOnRightSide = 27;

describe('Switch1/off test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${switch1Path}/off`,
      'Switch1',
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

describe('Switch1/on test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      `${switch1Path}/on`,
      'Switch1',
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
