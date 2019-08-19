import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { H5 } from '../H5';

storiesOf('atoms/text', module).addWithJSX(getDisplayName(H5), () => (
  <H5>Lorem ipsum</H5>
));
