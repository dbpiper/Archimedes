import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { SearchField1 } from '../SearchField1';

const options = [
  'the',
  'thy',
  'tho',
  'that',
  'them',
  'thus',
  'they',
  'car',
  'cat',
  'canvas',
  'canary',
  'this',
  'pretty',
  'ugly',
  'so-so',
  'whatever',
  'somewhat',
];

storiesOf('molecules/input', module).addWithJSX(
  getDisplayName(SearchField1),
  () => <SearchField1 options={options} placeholder="Prisma" />,
);
