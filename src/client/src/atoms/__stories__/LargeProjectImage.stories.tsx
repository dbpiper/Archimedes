import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { LargeProjectImage } from '../LargeProjectImage';

// tslint:disable-next-line: no-var-requires
const prismaLogo = require('./mock-data/prisma-logo.png') as string;

addStoryWithJsx('atoms', module)(getDisplayName(LargeProjectImage), () => (
  <LargeProjectImage src={prismaLogo} />
));
