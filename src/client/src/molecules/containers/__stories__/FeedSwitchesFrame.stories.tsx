import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { FeedSwitchesFrame } from '../FeedSwitchesFrame';

storiesOf('molecules/containers', module).addWithJSX(
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
