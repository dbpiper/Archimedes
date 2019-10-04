import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { LabeledCheckbox } from '../LabeledCheckbox';

addStoryWithJsx('molecules/selection/LabeledCheckbox/unchecked', module)(
  getDisplayName(LabeledCheckbox),
  () => <LabeledCheckbox label="Remember me?" />,
);

addStoryWithJsx('molecules/selection/LabeledCheckbox/checked', module)(
  getDisplayName(LabeledCheckbox),
  () => <LabeledCheckbox label="Remember me?" checked={true} />,
);
