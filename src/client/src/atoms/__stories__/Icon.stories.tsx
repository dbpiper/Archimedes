import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { Icon } from '../Icon';

addStoryWithJsx('atoms/Icon', module)('Search Icon', () => <Icon />);

addStoryWithJsx('atoms/Icon', module)('Facebook Icon', () => (
  <Icon icon={faFacebookF} />
));

addStoryWithJsx('atoms/Icon', module)('Google Icon', () => (
  <Icon icon={faGoogle} />
));
