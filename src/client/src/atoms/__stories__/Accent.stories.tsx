import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { Accent } from '../Accent';

storiesOf('atoms', module).addWithJSX(getDisplayName(Accent), () => <Accent />);
