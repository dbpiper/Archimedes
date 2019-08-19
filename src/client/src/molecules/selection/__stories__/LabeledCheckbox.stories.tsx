import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { LabeledCheckbox } from '../LabeledCheckbox';

storiesOf('molecules/selection/LabeledCheckbox/unchecked', module).addWithJSX(
  getDisplayName(LabeledCheckbox),
  () => <LabeledCheckbox label="Remember me?" />,
);

storiesOf('molecules/selection/LabeledCheckbox/checked', module).addWithJSX(
  getDisplayName(LabeledCheckbox),
  () => <LabeledCheckbox label="Remember me?" checked={true} />,
);
