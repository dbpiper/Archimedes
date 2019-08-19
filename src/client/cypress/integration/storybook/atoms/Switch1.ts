import STYLES from '@src/STYLE';
import { translateX } from '@util/css';
import {
  CssProperty,
  verifyCssProperty,
  verifyCssPropertyAndClick,
} from '@util/cypress';
import { getStorybookUrl, visitComponentStoryIframe } from '@util/storybook';

const componentName = 'Switch1';
const switch1Path = `atoms/${componentName}`;
const switchTrackRegex = /Switch1.{2}Track.*/;
const thumbRegex = /Switch1.{2}Thumb.*/;

// the offset from the left, in pixels that the thumb is when in the on position
const offsetOnRightSide = 27;

describe(`${componentName} test suite`, () => {
  describe('off test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${switch1Path}/off`,
        componentName,
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
      verifyCssPropertyAndClick(
        CssProperty.Transform,
        translateX(0),
        translateX(offsetOnRightSide),
        thumbRegex,
        switchTrackRegex,
      );
      cy.matchImageSnapshot();
    });
  });

  describe('on test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${switch1Path}/on`,
        componentName,
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
      verifyCssPropertyAndClick(
        CssProperty.Transform,
        translateX(offsetOnRightSide),
        translateX(0),
        thumbRegex,
        switchTrackRegex,
      );
      cy.matchImageSnapshot();
    });
  });
});

export {};
