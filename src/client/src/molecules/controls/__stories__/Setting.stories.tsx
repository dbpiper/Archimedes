// tslint:disable: no-magic-numbers

import { storiesOf } from '@storybook/react';
import React from 'react';
import { Setting } from '../Setting';

storiesOf('molecules/controls/SettingSubsetting/off', module).addWithJSX(
  'Setting',
  () => <Setting label="Global community" />,
);

storiesOf('molecules/controls/Setting/on', module).addWithJSX('Setting', () => (
  <Setting label="Global community" on={true} />
));
