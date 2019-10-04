import { SemVerCategory } from '@util/enums/SemVerCategory';
import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { ReleaseInfo } from '../ReleaseInfo';

addStoryWithJsx('molecules/output', module)(getDisplayName(ReleaseInfo), () => (
  <ReleaseInfo
    releaseDate="20190327T130000Z"
    semVerCategory={SemVerCategory.Patch}
  />
));
