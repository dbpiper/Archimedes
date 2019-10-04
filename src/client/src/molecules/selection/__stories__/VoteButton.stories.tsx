import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { StorybookWrapper } from '../../../shared/helpers/StorybookWrapper';
import { VoteButton } from '../VoteButton';

addStoryWithJsx('molecules/selection/VoteButton/up/off', module)(
  getDisplayName(VoteButton),
  () => (
    <StorybookWrapper>
      <VoteButton />
    </StorybookWrapper>
  ),
);

addStoryWithJsx('molecules/selection/VoteButton/up/on', module)(
  getDisplayName(VoteButton),
  () => (
    <StorybookWrapper>
      <VoteButton on={true} />
    </StorybookWrapper>
  ),
);

addStoryWithJsx('molecules/selection/VoteButton/down/off', module)(
  getDisplayName(VoteButton),
  () => (
    <StorybookWrapper>
      <VoteButton down={true} />
    </StorybookWrapper>
  ),
);

addStoryWithJsx('molecules/selection/VoteButton/down/on', module)(
  getDisplayName(VoteButton),
  () => (
    <StorybookWrapper>
      <VoteButton on={true} down={true} />
    </StorybookWrapper>
  ),
);
