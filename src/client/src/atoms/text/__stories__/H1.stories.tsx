import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { H1 } from '../H1';

addStoryWithJsx('atoms/text', module)(getDisplayName(H1), () => (
  <H1>Lorem ipsum</H1>
));
