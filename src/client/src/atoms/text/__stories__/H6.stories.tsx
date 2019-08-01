import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { H6 } from '../H6';

storiesOf('atoms/text', module).addWithJSX(getDisplayName(H6), () => (
  <H6>Lorem ipsum</H6>
));
