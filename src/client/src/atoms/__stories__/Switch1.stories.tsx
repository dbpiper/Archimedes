import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { Switch1 } from '../Switch1';

storiesOf('atoms/Switch1/off', module).addWithJSX(
  getDisplayName(Switch1),
  () => <Switch1 />,
);

storiesOf('atoms/Switch1/on', module).addWithJSX(
  getDisplayName(Switch1),
  () => <Switch1 on={true} />,
);
