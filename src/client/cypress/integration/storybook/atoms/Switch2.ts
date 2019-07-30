import STYLES from '../../../../src/STYLE';
import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../util/storybook';

import {
  clickAndVerifyTransform,
  verifyBgColor,
} from '../../../util/archimedes';

import { translateX } from '../../../util/css';

const SwitchTrackRegex = /Switch2.{2}Track.*/;
const ThumbRegex = /Switch2.{2}Thumb.*/;

// the offset from the left, in pixels that the thumb is when in the on position
const offsetOnRightSide = 19;

describe('Switch2/off test suite', () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'Switch2', 'Switch2/off');
  });
  specify('default view looks correct', () => {
    verifyBgColor(STYLES.color.darkSecondary, SwitchTrackRegex);
  });

  specify('looks good after click', () => {
    clickAndVerifyTransform(
      translateX(0),
      translateX(offsetOnRightSide),
      ThumbRegex,
      SwitchTrackRegex,
    );
  });
});

describe('Switch2/on test suite', () => {
  before(() => {
    visitComponentStoryIframe(getStorybookUrl(), 'Switch2', 'Switch2/on');
  });
  specify('default view looks correct', () => {
    verifyBgColor(STYLES.color.primary, SwitchTrackRegex);
  });

  specify('looks good after click', () => {
    clickAndVerifyTransform(
      translateX(offsetOnRightSide),
      translateX(0),
      ThumbRegex,
      SwitchTrackRegex,
    );
  });
});

export {};
