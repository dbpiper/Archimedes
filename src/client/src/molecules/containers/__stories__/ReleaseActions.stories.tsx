import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { ReleaseActions } from '../ReleaseActions';

addStoryWithJsx('molecules/containers', module)(
  getDisplayName(ReleaseActions),
  () => <ReleaseActions />,
);
