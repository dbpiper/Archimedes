import { storiesOf } from '@storybook/react';
import React from 'react';
import { TextField } from '../TextField';

storiesOf('molecules/input', module).addWithJSX('TextField', () => (
  <TextField placeholder="User name" />
));
