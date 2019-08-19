import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { H2 } from '../H2';

storiesOf('atoms/text', module).addWithJSX(getDisplayName(H2), () => (
  <H2>Lorem ipsum</H2>
));
