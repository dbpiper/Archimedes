import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { Setting } from '../Setting';

addStoryWithJsx('molecules/selection/Setting/off', module)(
  getDisplayName(Setting),
  () => <Setting label="Global community" />,
);

addStoryWithJsx('molecules/selection/Setting/on', module)(
  getDisplayName(Setting),
  () => <Setting label="Global community" on={true} />,
);
