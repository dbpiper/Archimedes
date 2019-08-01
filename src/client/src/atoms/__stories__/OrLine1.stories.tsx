import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { OrLine1 } from '../OrLine1';

storiesOf('atoms', module).addWithJSX(getDisplayName(OrLine1), () => (
  <OrLine1 />
));
