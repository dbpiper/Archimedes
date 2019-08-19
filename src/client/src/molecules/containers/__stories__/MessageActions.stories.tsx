import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { MessageActions } from '../MessageActions';

storiesOf('molecules/containers', module).addWithJSX(
  getDisplayName(MessageActions),
  () => (
    <MessageActions
      messageArrivalDateTime="2019-08-09T13:04:46Z"
      comparisonDateTime="2019-08-09T23:04:46Z"
    />
  ),
);
