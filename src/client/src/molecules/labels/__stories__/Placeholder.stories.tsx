// tslint:disable: no-magic-numbers

import { storiesOf } from '@storybook/react';
import React from 'react';
import { Placeholder } from '../Placeholder';

storiesOf('molecules/labels', module).addWithJSX('Placeholder', () => (
  <Placeholder>User name</Placeholder>
));
