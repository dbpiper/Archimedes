import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { Body2 } from '../Body2';

addStoryWithJsx('atoms/text', module)(getDisplayName(Body2), () => (
  <Body2>Lorem ipsum</Body2>
));
