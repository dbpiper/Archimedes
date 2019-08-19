import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { Overline } from '../Overline';

storiesOf('atoms/text', module).addWithJSX(getDisplayName(Overline), () => (
  <Overline>Lorem ipsum</Overline>
));
