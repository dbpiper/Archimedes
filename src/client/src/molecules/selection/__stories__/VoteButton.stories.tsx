import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { StorybookWrapper } from '../../../helpers/StorybookWrapper';
import { VoteButton } from '../VoteButton';

storiesOf('molecules/selection/VoteButton/up/off', module).addWithJSX(
  getDisplayName(VoteButton),
  () => (
    <StorybookWrapper>
      <VoteButton />
    </StorybookWrapper>
  ),
);

storiesOf('molecules/selection/VoteButton/up/on', module).addWithJSX(
  getDisplayName(VoteButton),
  () => (
    <StorybookWrapper>
      <VoteButton on={true} />
    </StorybookWrapper>
  ),
);

storiesOf('molecules/selection/VoteButton/down/off', module).addWithJSX(
  getDisplayName(VoteButton),
  () => (
    <StorybookWrapper>
      <VoteButton down={true} />
    </StorybookWrapper>
  ),
);

storiesOf('molecules/selection/VoteButton/down/on', module).addWithJSX(
  getDisplayName(VoteButton),
  () => (
    <StorybookWrapper>
      <VoteButton down={true} />
    </StorybookWrapper>
  ),
);
