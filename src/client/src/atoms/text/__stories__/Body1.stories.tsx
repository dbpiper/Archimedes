import { storiesOf } from '@storybook/react';
import React from 'react';
import { Body1 } from '../Body1';

storiesOf('atoms/text/Body1', module).addWithJSX('Body1', () => (
  <Body1>Lorem ipsum</Body1>
));
