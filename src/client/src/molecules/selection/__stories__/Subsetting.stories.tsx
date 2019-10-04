import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { Subsetting } from '../Subsetting';

addStoryWithJsx('molecules/selection/Subsetting/off', module)(
  getDisplayName(Subsetting),
  () => <Subsetting label="JavaScript" />,
);

addStoryWithJsx('molecules/selection/Subsetting/on', module)(
  getDisplayName(Subsetting),
  () => <Subsetting label="JavaScript" on={true} />,
);
