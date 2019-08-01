import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { Caption } from '../Caption';

storiesOf('atoms/text', module).addWithJSX(getDisplayName(Caption), () => (
  <Caption>Lorem ipsum</Caption>
));
