import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { Subtitle1 } from '../Subtitle1';

addStoryWithJsx('atoms/text', module)(getDisplayName(Subtitle1), () => (
  <Subtitle1>Lorem ipsum</Subtitle1>
));
