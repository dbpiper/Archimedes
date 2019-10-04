import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { Button2 } from '../Button2';

addStoryWithJsx('atoms/text', module)(getDisplayName(Button2), () => (
  <Button2>Lorem ipsum</Button2>
));
