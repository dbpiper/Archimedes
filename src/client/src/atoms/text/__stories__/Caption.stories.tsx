import { storiesOf } from '@storybook/react';
import React from 'react';
import { Caption } from '../Caption';

storiesOf('atoms/text/Caption', module).addWithJSX('Caption', () => (
  <Caption>Lorem ipsum</Caption>
));
