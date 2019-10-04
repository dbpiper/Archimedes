import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { MessageActions } from '../MessageActions';

addStoryWithJsx('molecules/containers', module)(
  getDisplayName(MessageActions),
  () => (
    <MessageActions
      messageArrivalDateTime="2019-08-09T13:04:46Z"
      comparisonDateTime="2019-08-09T23:04:46Z"
    />
  ),
);
