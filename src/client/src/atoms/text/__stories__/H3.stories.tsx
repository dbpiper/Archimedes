import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { H3 } from '../H3';

addStoryWithJsx('atoms/text', module)(getDisplayName(H3), () => (
  <H3>Lorem ipsum</H3>
));
