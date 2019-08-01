import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { StorybookWrapper } from '../../helpers/StorybookWrapper';
import { Checkbox } from '../Checkbox';

storiesOf('atoms/Checkbox/unchecked', module).addWithJSX(
  getDisplayName(Checkbox),
  () => (
    <StorybookWrapper>
      <Checkbox />
    </StorybookWrapper>
  ),
);

storiesOf('atoms/Checkbox/checked', module).addWithJSX(
  getDisplayName(Checkbox),
  () => (
    <StorybookWrapper>
      <Checkbox checked={true} />
    </StorybookWrapper>
  ),
);
