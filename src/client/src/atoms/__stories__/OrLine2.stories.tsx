import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { OrLine2 } from '../OrLine2';

storiesOf('atoms', module).addWithJSX(getDisplayName(OrLine2), () => (
  <OrLine2 />
));
