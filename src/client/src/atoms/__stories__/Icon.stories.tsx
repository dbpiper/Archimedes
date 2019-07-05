import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Icon } from '../Icon';

storiesOf('atoms/Icon', module).addWithJSX('Search Icon', () => <Icon />);

storiesOf('atoms/Icon', module).addWithJSX('Facebook Icon', () => (
  <Icon icon={faFacebookF} />
));

storiesOf('atoms/Icon', module).addWithJSX('Google Icon', () => (
  <Icon icon={faGoogle} />
));
