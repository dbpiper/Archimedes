import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { Switch1 } from '../Switch1';

addStoryWithJsx('atoms/Switch1/off', module)(getDisplayName(Switch1), () => (
  <Switch1 />
));

addStoryWithJsx('atoms/Switch1/on', module)(getDisplayName(Switch1), () => (
  <Switch1 on={true} />
));
