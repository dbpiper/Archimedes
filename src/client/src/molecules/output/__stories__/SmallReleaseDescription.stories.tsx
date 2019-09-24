// tslint:disable: no-magic-numbers
import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';

import { SmallReleaseDescription } from '../SmallReleaseDescription';
import { ReactReleaseData } from './mock-data/react-release-data';

storiesOf('molecules/output', module).addWithJSX(
  getDisplayName(SmallReleaseDescription),
  () => (
    <SmallReleaseDescription
      releaseDescriptionMarkdown={ReactReleaseData[0].description}
    />
  ),
);
