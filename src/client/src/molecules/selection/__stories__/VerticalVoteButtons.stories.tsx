import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { VerticalVoteButtons } from '../VerticalVoteButtons';

addStoryWithJsx('molecules/selection', module)(
  getDisplayName(VerticalVoteButtons),
  () => <VerticalVoteButtons />,
);
