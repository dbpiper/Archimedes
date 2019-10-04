import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { OrSignifier2 } from '../OrSignifier2';

addStoryWithJsx('molecules/output', module)(
  getDisplayName(OrSignifier2),
  () => <OrSignifier2 />,
);
