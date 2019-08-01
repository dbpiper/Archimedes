import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { H3 } from '../H3';

storiesOf('atoms/text', module).addWithJSX(getDisplayName(H3), () => (
  <H3>Lorem ipsum</H3>
));
