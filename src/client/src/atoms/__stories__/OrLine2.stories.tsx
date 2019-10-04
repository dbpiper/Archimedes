import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { OrLine2 } from '../OrLine2';

addStoryWithJsx('atoms', module)(getDisplayName(OrLine2), () => <OrLine2 />);
