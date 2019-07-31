import { storiesOf } from '@storybook/react';
import React from 'react';
import { Switch2 } from '../Switch2';

storiesOf('atoms/Switch2/off', module).addWithJSX('Switch2', () => <Switch2 />);

storiesOf('atoms/Switch2/on', module).addWithJSX('Switch2', () => (
  <Switch2 on={true} />
));
