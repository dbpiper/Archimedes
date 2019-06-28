import { storiesOf } from '@storybook/react';
import React from 'react';
import { H1 } from '../H1';

storiesOf('atoms/text/H1', module).addWithJSX('H1', () => <H1>Lorem ipsum</H1>);
