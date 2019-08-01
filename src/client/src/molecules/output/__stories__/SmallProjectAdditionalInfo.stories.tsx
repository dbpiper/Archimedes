// tslint:disable: no-magic-numbers

import { storiesOf } from '@storybook/react';
import React from 'react';
import { SmallProjectAdditionalInfo } from '../SmallProjectAdditionalInfo';

storiesOf('molecules/output', module).addWithJSX(
  'SmallProjectAdditionalInfo',
  () => <SmallProjectAdditionalInfo stars={14500} language="Scala" />,
);
