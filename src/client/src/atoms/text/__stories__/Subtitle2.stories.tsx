import { storiesOf } from '@storybook/react';
import React from 'react';
import { Subtitle2 } from '../Subtitle2';

storiesOf('atoms/text', module).addWithJSX('Subtitle2', () => (
  <Subtitle2>Lorem ipsum</Subtitle2>
));