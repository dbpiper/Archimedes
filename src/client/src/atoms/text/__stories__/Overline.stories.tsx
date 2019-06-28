import { storiesOf } from '@storybook/react';
import React from 'react';
import { Overline } from '../Overline';

storiesOf('atoms/text/Overline', module).addWithJSX('Overline', () => (
  <Overline>Lorem ipsum</Overline>
));
