import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { Setting } from '../Setting';

storiesOf('molecules/selection/Setting/off', module).addWithJSX(
  getDisplayName(Setting),
  () => <Setting label="Global community" />,
);

storiesOf('molecules/selection/Setting/on', module).addWithJSX(
  getDisplayName(Setting),
  () => <Setting label="Global community" on={true} />,
);
