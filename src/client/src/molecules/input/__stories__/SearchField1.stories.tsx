import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { SearchField1 } from '../SearchField1';

storiesOf('molecules/input', module).addWithJSX(
  getDisplayName(SearchField1),
  () => <SearchField1 placeholder="Prisma" />,
);
