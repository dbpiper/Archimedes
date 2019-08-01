import { storiesOf } from '@storybook/react';
import React from 'react';
import { Setting } from '../Setting';

storiesOf('molecules/selection/Setting/off', module).addWithJSX(
  'Setting',
  () => <Setting label="Global community" />,
);

storiesOf('molecules/selection/Setting/on', module).addWithJSX(
  'Setting',
  () => <Setting label="Global community" on={true} />,
);
