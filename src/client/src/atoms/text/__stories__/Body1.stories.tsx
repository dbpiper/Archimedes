import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { Body1 } from '../Body1';

storiesOf('atoms/text', module).addWithJSX(getDisplayName(Body1), () => (
  <Body1>Lorem ipsum</Body1>
));
