import { storiesOf } from '@storybook/react';
import React from 'react';
import { StorybookWrapper } from '../../../helpers/StorybookWrapper';
import { VoteButton } from '../VoteButton';

storiesOf('molecules/selection/VoteButton/up/off', module).addWithJSX(
  'VoteButton',
  () => (
    <StorybookWrapper>
      <VoteButton />
    </StorybookWrapper>
  ),
);

storiesOf('molecules/selection/VoteButton/up/on', module).addWithJSX(
  'VoteButton',
  () => (
    <StorybookWrapper>
      <VoteButton on={true} />
    </StorybookWrapper>
  ),
);

storiesOf('molecules/selection/VoteButton/down/off', module).addWithJSX(
  'VoteButton',
  () => (
    <StorybookWrapper>
      <VoteButton down={true} />
    </StorybookWrapper>
  ),
);

storiesOf('molecules/selection/VoteButton/down/on', module).addWithJSX(
  'VoteButton',
  () => (
    <StorybookWrapper>
      <VoteButton down={true} />
    </StorybookWrapper>
  ),
);
