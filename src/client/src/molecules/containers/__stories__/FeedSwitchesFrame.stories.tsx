import { storiesOf } from '@storybook/react';
import React from 'react';
import { FeedSwitchesFrame } from '../FeedSwitchesFrame';

storiesOf('molecules/containers', module).addWithJSX(
  'FeedSwitchesFrame',
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
