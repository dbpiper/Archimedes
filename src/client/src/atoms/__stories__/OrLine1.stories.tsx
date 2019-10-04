import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { OrLine1 } from '../OrLine1';

addStoryWithJsx('atoms', module)(getDisplayName(OrLine1), () => <OrLine1 />);
