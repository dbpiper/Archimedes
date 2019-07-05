import { storiesOf } from '@storybook/react';
import React from 'react';
import { Caption } from '../Caption';

storiesOf('atoms/text', module).addWithJSX('Caption', () => (
  <Caption>Lorem ipsum</Caption>
));
