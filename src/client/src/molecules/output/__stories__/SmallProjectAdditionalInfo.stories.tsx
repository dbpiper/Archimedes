// tslint:disable: no-magic-numbers
import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { SmallProjectAdditionalInfo } from '../SmallProjectAdditionalInfo';

addStoryWithJsx('molecules/output', module)(
  getDisplayName(SmallProjectAdditionalInfo),
  () => <SmallProjectAdditionalInfo stars={14500} language="Scala" />,
);
