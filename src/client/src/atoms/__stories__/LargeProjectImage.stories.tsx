import { storiesOf } from '@storybook/react';
import React from 'react';
import { LargeProjectImage } from '../LargeProjectImage';

// tslint:disable-next-line: no-var-requires
const prismaLogo = require('./mock-data/prisma-logo.png') as string;

storiesOf('atoms/LargeProjectImage', module).addWithJSX(
  'LargeProjectImage',
  () => <LargeProjectImage src={prismaLogo} />,
);
