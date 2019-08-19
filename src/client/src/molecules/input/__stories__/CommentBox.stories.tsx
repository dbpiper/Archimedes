import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { CommentBox } from '../CommentBox';

storiesOf('molecules/input', module).addWithJSX(
  getDisplayName(CommentBox),
  () => <CommentBox />,
);
