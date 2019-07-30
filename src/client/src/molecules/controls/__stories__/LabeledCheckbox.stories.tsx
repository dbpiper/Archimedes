import { storiesOf } from '@storybook/react';
import React from 'react';
import { LabeledCheckbox } from '../LabeledCheckbox';

storiesOf('molecules/controls/LabeledCheckbox/unchecked', module).addWithJSX(
  'LabeledCheckbox',
  () => <LabeledCheckbox label="Remember me?" />,
);

storiesOf('molecules/controls/LabeledCheckbox/checked', module).addWithJSX(
  'LabeledCheckbox',
  () => <LabeledCheckbox label="Remember me?" checked={true} />,
);
