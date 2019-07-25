// tslint:disable: no-magic-numbers

import { storiesOf } from '@storybook/react';
import React from 'react';
import { LabeledCheckbox } from '../LabeledCheckbox';

storiesOf('molecules/controls', module).addWithJSX('LabeledCheckbox', () => (
  <LabeledCheckbox label="Remember me?" />
));
