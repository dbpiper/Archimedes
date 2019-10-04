import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { H6 } from '../H6';

addStoryWithJsx('atoms/text', module)(getDisplayName(H6), () => (
  <H6>Lorem ipsum</H6>
));
