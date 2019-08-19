import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { SmallProjectImage } from '../SmallProjectImage';

// tslint:disable-next-line: no-var-requires
const prismaLogo = require('./mock-data/prisma-logo.png') as string;

storiesOf('atoms', module).addWithJSX(getDisplayName(SmallProjectImage), () => (
  <SmallProjectImage src={prismaLogo} />
));
