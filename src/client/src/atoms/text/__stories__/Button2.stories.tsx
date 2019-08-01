import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { Button2 } from '../Button2';

storiesOf('atoms/text', module).addWithJSX(getDisplayName(Button2), () => (
  <Button2>Lorem ipsum</Button2>
));
