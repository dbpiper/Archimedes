import { storiesOf } from '@storybook/react';
import React from 'react';
import { Subsetting } from '../Subsetting';

storiesOf('molecules/controls/Subsetting/off', module).addWithJSX(
  'Subsetting',
  () => <Subsetting label="JavaScript" />,
);

storiesOf('molecules/controls/Subsetting/on', module).addWithJSX(
  'Subsetting',
  () => <Subsetting label="JavaScript" on={true} />,
);
