import { storiesOf } from '@storybook/react';
import React from 'react';
import { H2 } from '../H2';

storiesOf('atoms/text', module).addWithJSX('H2', () => <H2>Lorem ipsum</H2>);
