import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { H4 } from '../H4';

storiesOf('atoms/text', module).addWithJSX(getDisplayName(H4), () => (
  <H4>Lorem ipsum</H4>
));
