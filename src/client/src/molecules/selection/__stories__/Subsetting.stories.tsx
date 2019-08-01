import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { Subsetting } from '../Subsetting';

storiesOf('molecules/selection/Subsetting/off', module).addWithJSX(
  getDisplayName(Subsetting),
  () => <Subsetting label="JavaScript" />,
);

storiesOf('molecules/selection/Subsetting/on', module).addWithJSX(
  getDisplayName(Subsetting),
  () => <Subsetting label="JavaScript" on={true} />,
);
