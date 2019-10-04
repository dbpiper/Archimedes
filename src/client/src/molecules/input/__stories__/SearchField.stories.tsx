import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
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

addStoryWithJsx(`molecules/input/${componentName}/large`, module)(
  getDisplayName(SearchField),
  () => <SearchField options={options} placeholder="Prisma" />,
);

addStoryWithJsx(`molecules/input/${componentName}/small`, module)(
  getDisplayName(SearchField),
  () => <SearchField options={options} placeholder="Search" small={true} />,
);
