import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { ProjectActions } from '../ProjectActions';

storiesOf('molecules/containers', module).addWithJSX(
  getDisplayName(ProjectActions),
  () => <ProjectActions />,
);
