import { storiesOf } from '@storybook/react';
import React from 'react';
import { parseAnimationDuration } from '../../util/animationDuration';
import { Checkbox } from '../Checkbox';

storiesOf('atoms/Checkbox', module).addWithJSX(
  'Checkbox (no animation)',
  () => <Checkbox animationDuration={parseAnimationDuration('0s')} />,
);

storiesOf('atoms/Checkbox', module).addWithJSX('Checkbox', () => <Checkbox />);
