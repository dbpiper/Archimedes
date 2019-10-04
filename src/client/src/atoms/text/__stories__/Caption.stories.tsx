import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { Caption } from '../Caption';

addStoryWithJsx('atoms/text', module)(getDisplayName(Caption), () => (
  <Caption>Lorem ipsum</Caption>
));
