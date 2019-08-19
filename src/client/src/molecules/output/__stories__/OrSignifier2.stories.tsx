import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { OrSignifier2 } from '../OrSignifier2';

storiesOf('molecules/output', module).addWithJSX(
  getDisplayName(OrSignifier2),
  () => <OrSignifier2 />,
);
