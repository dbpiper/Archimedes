import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { TextField } from '../TextField';

addStoryWithJsx('molecules/input', module)(getDisplayName(TextField), () => (
  <TextField placeholder="User name" />
));
