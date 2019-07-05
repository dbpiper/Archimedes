import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button2 } from '../Button2';

storiesOf('atoms/text', module).addWithJSX('Button2', () => (
  <Button2>Lorem ipsum</Button2>
));
