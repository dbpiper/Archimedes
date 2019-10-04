import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { H4 } from '../H4';

addStoryWithJsx('atoms/text', module)(getDisplayName(H4), () => (
  <H4>Lorem ipsum</H4>
));
