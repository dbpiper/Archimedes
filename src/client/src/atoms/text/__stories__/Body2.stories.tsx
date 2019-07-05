import { storiesOf } from '@storybook/react';
import React from 'react';
import { Body2 } from '../Body2';

storiesOf('atoms/text', module).addWithJSX('Body2', () => (
  <Body2>Lorem ipsum</Body2>
));
