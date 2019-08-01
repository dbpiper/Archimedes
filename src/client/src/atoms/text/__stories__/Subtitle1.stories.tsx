import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { Subtitle1 } from '../Subtitle1';

storiesOf('atoms/text', module).addWithJSX(getDisplayName(Subtitle1), () => (
  <Subtitle1>Lorem ipsum</Subtitle1>
));
