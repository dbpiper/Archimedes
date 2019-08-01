import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { OrSignifier1 } from '../OrSignifier1';

storiesOf('molecules/output', module).addWithJSX(
  getDisplayName(OrSignifier1),
  () => <OrSignifier1 />,
);
