// tslint:disable: no-magic-numbers
import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { SmallReleaseDescription } from '../SmallReleaseDescription';
import { ReactReleaseData } from './mock-data/react-release-data';

addStoryWithJsx('molecules/output', module)(
  getDisplayName(SmallReleaseDescription),
  () => (
    <SmallReleaseDescription
      releaseDescriptionMarkdown={ReactReleaseData[0].description}
    />
  ),
);
