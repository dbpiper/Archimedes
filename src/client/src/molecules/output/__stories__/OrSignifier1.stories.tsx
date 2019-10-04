import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { OrSignifier1 } from '../OrSignifier1';

addStoryWithJsx('molecules/output', module)(
  getDisplayName(OrSignifier1),
  () => <OrSignifier1 />,
);
