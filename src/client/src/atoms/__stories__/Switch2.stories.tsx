import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { Switch2 } from '../Switch2';

addStoryWithJsx('atoms/Switch2/off', module)(getDisplayName(Switch2), () => (
  <Switch2 />
));

addStoryWithJsx('atoms/Switch2/on', module)(getDisplayName(Switch2), () => (
  <Switch2 on={true} />
));
