import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { Button1 } from '../Button1';

addStoryWithJsx('atoms/text', module)(getDisplayName(Button1), () => (
  <Button1>lorem ipsum</Button1>
));
