import { storiesOf } from '@storybook/react';
import React from 'react';
import { SmallProjectImage } from '../SmallProjectImage';

// tslint:disable-next-line: no-var-requires
const prismaLogo = require('./mock-data/prisma-logo.png') as string;

storiesOf('atoms', module).addWithJSX('SmallProjectImage', () => (
  <SmallProjectImage src={prismaLogo} />
));
