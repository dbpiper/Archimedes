import { storiesOf } from '@storybook/react';
import React from 'react';
import { CommentBox } from '../CommentBox';

storiesOf('molecules/input', module).addWithJSX('CommentBox', () => (
  <CommentBox />
));
