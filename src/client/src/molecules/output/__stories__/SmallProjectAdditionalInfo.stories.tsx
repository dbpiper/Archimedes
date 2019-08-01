// tslint:disable: no-magic-numbers
import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { SmallProjectAdditionalInfo } from '../SmallProjectAdditionalInfo';

storiesOf('molecules/output', module).addWithJSX(
  getDisplayName(SmallProjectAdditionalInfo),
  () => <SmallProjectAdditionalInfo stars={14500} language="Scala" />,
);
