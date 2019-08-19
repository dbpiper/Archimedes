import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
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

storiesOf(`molecules/selection`, module).addWithJSX(
  componentName,
  () => <Dropdown options={options} placeholder="Recent" />,
);
