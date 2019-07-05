import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button1 } from '../Button1';

storiesOf('atoms/text', module).addWithJSX('Button1', () => (
  <Button1>lorem ipsum</Button1>
));
