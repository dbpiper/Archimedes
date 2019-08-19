import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { H1 } from '../H1';

storiesOf('atoms/text', module).addWithJSX(getDisplayName(H1), () => (
  <H1>Lorem ipsum</H1>
));
