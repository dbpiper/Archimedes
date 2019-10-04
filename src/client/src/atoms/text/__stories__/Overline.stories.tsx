import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { Overline } from '../Overline';

addStoryWithJsx('atoms/text', module)(getDisplayName(Overline), () => (
  <Overline>Lorem ipsum</Overline>
));
