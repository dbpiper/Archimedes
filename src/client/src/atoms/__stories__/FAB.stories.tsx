import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { FAB } from '../FAB';

addStoryWithJsx('atoms', module)(getDisplayName(FAB), () => <FAB />);
