import { storiesOf } from '@storybook/react';
import React from 'react';
import { LabeledCheckbox } from '../LabeledCheckbox';

storiesOf('molecules/selection/LabeledCheckbox/unchecked', module).addWithJSX(
  'LabeledCheckbox',
  () => <LabeledCheckbox label="Remember me?" />,
);

storiesOf('molecules/selection/LabeledCheckbox/checked', module).addWithJSX(
  'LabeledCheckbox',
  () => <LabeledCheckbox label="Remember me?" checked={true} />,
);
