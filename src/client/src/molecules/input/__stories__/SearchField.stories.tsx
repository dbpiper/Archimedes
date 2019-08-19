import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { SearchField } from '../SearchField';

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

const componentName = getDisplayName(SearchField);

storiesOf(`molecules/input/${componentName}/large`, module).addWithJSX(
  getDisplayName(SearchField),
  () => <SearchField options={options} placeholder="Prisma" />,
);

storiesOf(`molecules/input/${componentName}/small`, module).addWithJSX(
  getDisplayName(SearchField),
  () => <SearchField options={options} placeholder="Search" small={true} />,
);
