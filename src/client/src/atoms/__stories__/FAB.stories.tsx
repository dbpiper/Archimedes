import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { FAB } from '../FAB';

storiesOf('atoms', module).addWithJSX(getDisplayName(FAB), () => <FAB />);
