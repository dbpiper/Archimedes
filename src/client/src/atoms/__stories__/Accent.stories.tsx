import { storiesOf } from '@storybook/react';
import React from 'react';
import { Accent } from '../Accent';

storiesOf('atoms/Accent', module).addWithJSX(
  'Accent',
  () => <Accent />,
);
