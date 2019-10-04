import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { FeedSwitchesFrame } from '../FeedSwitchesFrame';

addStoryWithJsx('molecules/containers', module)(
  getDisplayName(FeedSwitchesFrame),
  () => (
    <FeedSwitchesFrame
      feeds={[
        {
          label: 'JavaScript',
          on: true,
        },
        {
          label: 'Python',
        },
      ]}
    />
  ),
);
