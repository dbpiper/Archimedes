import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { ReleaseActions } from '../ReleaseActions';

storiesOf('molecules/containers', module).addWithJSX(
  getDisplayName(ReleaseActions),
  () => <ReleaseActions />,
);
