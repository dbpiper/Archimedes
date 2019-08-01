import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { TextField } from '../TextField';

storiesOf('molecules/input', module).addWithJSX(
  getDisplayName(TextField),
  () => <TextField placeholder="User name" />,
);
