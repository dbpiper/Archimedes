import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { Dropdown } from '../Dropdown';

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

const componentName = getDisplayName(Dropdown);

addStoryWithJsx(`molecules/selection`, module)(componentName, () => (
  <Dropdown options={options} placeholder="Recent" />
));
