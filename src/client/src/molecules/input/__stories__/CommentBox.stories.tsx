import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { CommentBox } from '../CommentBox';

addStoryWithJsx('molecules/input', module)(getDisplayName(CommentBox), () => (
  <CommentBox />
));
