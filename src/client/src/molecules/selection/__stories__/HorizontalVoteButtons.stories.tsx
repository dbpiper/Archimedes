import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { HorizontalVoteButtons } from '../HorizontalVoteButtons';

addStoryWithJsx('molecules/selection', module)(
  getDisplayName(HorizontalVoteButtons),
  () => <HorizontalVoteButtons />,
);
