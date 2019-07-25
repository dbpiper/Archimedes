// tslint:disable: no-magic-numbers

import { storiesOf } from '@storybook/react';
import React from 'react';
import { Setting } from '../Setting';

storiesOf('molecules/controls', module).addWithJSX('Setting', () => (
  <Setting label="Global community" />
));
