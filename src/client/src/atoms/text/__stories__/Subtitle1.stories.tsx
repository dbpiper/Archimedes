import { storiesOf } from '@storybook/react';
import React from 'react';
import { Subtitle1 } from '../Subtitle1';

storiesOf('atoms/text', module).addWithJSX('Subtitle1', () => (
  <Subtitle1>Lorem ipsum</Subtitle1>
));
