import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { HorizontalVoteButtons } from '../HorizontalVoteButtons';

storiesOf('molecules/selection', module).addWithJSX(
  getDisplayName(HorizontalVoteButtons),
  () => <HorizontalVoteButtons />,
);
