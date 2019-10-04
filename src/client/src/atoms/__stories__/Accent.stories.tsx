import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { Accent } from '../Accent';

const addStory = addStoryWithJsx('atoms', module);

addStory(getDisplayName(Accent), () => <Accent />);
