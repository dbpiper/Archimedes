import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { CommentActions } from '../CommentActions';

storiesOf('molecules/containers', module).addWithJSX(
  getDisplayName(CommentActions),
  () => (
    <CommentActions
      commentPostDateTime="2019-08-09T13:04:46Z"
      comparisonDateTime="2019-08-09T23:04:46Z"
    />
  ),
);
