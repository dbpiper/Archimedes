import { storiesOf } from '@storybook/react';
import React from 'react';
import { StorybookWrapper } from '../../helpers/StorybookWrapper';
import { Checkbox } from '../Checkbox';

storiesOf('atoms/Checkbox/unchecked', module).addWithJSX('Checkbox', () => (
  <StorybookWrapper>
    <Checkbox />
  </StorybookWrapper>
));

storiesOf('atoms/Checkbox/checked', module).addWithJSX('Checkbox', () => (
  <StorybookWrapper>
    <Checkbox checked={true} />
  </StorybookWrapper>
));
