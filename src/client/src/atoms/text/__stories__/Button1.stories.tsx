import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { Button1 } from '../Button1';

storiesOf('atoms/text', module).addWithJSX(getDisplayName(Button1), () => (
  <Button1>lorem ipsum</Button1>
));
