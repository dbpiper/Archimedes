import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { Body2 } from '../Body2';

storiesOf('atoms/text', module).addWithJSX(getDisplayName(Body2), () => (
  <Body2>Lorem ipsum</Body2>
));
