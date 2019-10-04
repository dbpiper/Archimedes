import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { ProjectActions } from '../ProjectActions';

addStoryWithJsx('molecules/containers', module)(
  getDisplayName(ProjectActions),
  () => <ProjectActions />,
);
