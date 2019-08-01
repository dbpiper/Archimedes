import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { Subtitle2 } from '../Subtitle2';

storiesOf('atoms/text', module).addWithJSX(getDisplayName(Subtitle2), () => (
  <Subtitle2>Lorem ipsum</Subtitle2>
));
