import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { VerticalVoteButtons } from '../VerticalVoteButtons';

storiesOf('molecules/selection', module).addWithJSX(
  getDisplayName(VerticalVoteButtons),
  () => <VerticalVoteButtons />,
);
