import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { H5 } from '../H5';

addStoryWithJsx('atoms/text', module)(getDisplayName(H5), () => (
  <H5>Lorem ipsum</H5>
));
