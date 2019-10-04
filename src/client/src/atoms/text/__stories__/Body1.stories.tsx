import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { Body1 } from '../Body1';

addStoryWithJsx('atoms/text', module)(getDisplayName(Body1), () => (
  <Body1>Lorem ipsum</Body1>
));
