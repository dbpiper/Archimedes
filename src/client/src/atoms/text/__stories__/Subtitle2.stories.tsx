import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { Subtitle2 } from '../Subtitle2';

addStoryWithJsx('atoms/text', module)(getDisplayName(Subtitle2), () => (
  <Subtitle2>Lorem ipsum</Subtitle2>
));
