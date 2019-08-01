import { storiesOf } from '@storybook/react';
import React from 'react';
import { Subsetting } from '../Subsetting';

storiesOf('molecules/selection/Subsetting/off', module).addWithJSX(
  'Subsetting',
  () => <Subsetting label="JavaScript" />,
);

storiesOf('molecules/selection/Subsetting/on', module).addWithJSX(
  'Subsetting',
  () => <Subsetting label="JavaScript" on={true} />,
);
