import { storiesOf } from '@storybook/react';
import React from 'react';
import { Switch1 } from '../Switch1';

storiesOf('atoms/Switch1/off', module).addWithJSX('Switch1', () => <Switch1 />);

storiesOf('atoms/Switch1/on', module).addWithJSX('Switch1', () => (
  <Switch1 on={true} />
));
