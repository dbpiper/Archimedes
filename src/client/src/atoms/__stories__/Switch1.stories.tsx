import { storiesOf } from '@storybook/react';
import React from 'react';
import { parseAnimationDuration, Switch1 } from '../Switch1';

storiesOf('atoms/Switch1', module).addWithJSX('Switch1 (no animation)', () => (
  // disable animation for testing
  // see: https://test.io/blog/visual-regression-testing/
  // and https://blog.percy.io/freezing-animations-in-visual-regression-tests-e6db56a7b3a5
  // which both advocate turning off animation for doing visual regression testing
  <Switch1 animationDuration={parseAnimationDuration('0s')} />
));

storiesOf('atoms/Switch1', module).addWithJSX('Switch1', () => <Switch1 />);
