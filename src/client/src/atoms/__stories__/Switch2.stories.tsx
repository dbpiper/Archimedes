import { storiesOf } from '@storybook/react';
import React from 'react';
import { parseAnimationDuration, Switch2 } from '../Switch2';

storiesOf('atoms/Switch2/off', module).addWithJSX(
  'Switch2 (no animation)',
  () => (
    // disable animation for testing
    // see: https://test.io/blog/visual-regression-testing/
    // and https://blog.percy.io/freezing-animations-in-visual-regression-tests-e6db56a7b3a5
    // which both advocate turning off animation for doing visual regression testing
    <Switch2 animationDuration={parseAnimationDuration('0s')} />
  ),
);

storiesOf('atoms/Switch2/off', module).addWithJSX('Switch2', () => <Switch2 />);

storiesOf('atoms/Switch2/on', module).addWithJSX(
  'Switch2 (no animation)',
  () => (
    // disable animation for testing
    // see: https://test.io/blog/visual-regression-testing/
    // and https://blog.percy.io/freezing-animations-in-visual-regression-tests-e6db56a7b3a5
    // which both advocate turning off animation for doing visual regression testing
    <Switch2 on={true} animationDuration={parseAnimationDuration('0s')} />
  ),
);

storiesOf('atoms/Switch2/on', module).addWithJSX('Switch2', () => (
  <Switch2 on={true} />
));
