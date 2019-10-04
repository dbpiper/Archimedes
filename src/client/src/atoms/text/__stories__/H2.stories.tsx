import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { H2 } from '../H2';

addStoryWithJsx('atoms/text', module)(getDisplayName(H2), () => (
  <H2>Lorem ipsum</H2>
));
