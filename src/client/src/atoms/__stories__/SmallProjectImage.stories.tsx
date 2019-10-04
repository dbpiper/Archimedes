import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { SmallProjectImage } from '../SmallProjectImage';

// tslint:disable-next-line: no-var-requires
const prismaLogo = require('./mock-data/prisma-logo.png') as string;

addStoryWithJsx('atoms', module)(getDisplayName(SmallProjectImage), () => (
  <SmallProjectImage src={prismaLogo} />
));
