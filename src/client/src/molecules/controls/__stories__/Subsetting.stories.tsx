// tslint:disable: no-magic-numbers

import { storiesOf } from '@storybook/react';
import React from 'react';
import { Subsetting } from '../Subsetting';

storiesOf('molecules/controls', module).addWithJSX('Subsetting', () => (
  <Subsetting label="JavaScript" />
));
