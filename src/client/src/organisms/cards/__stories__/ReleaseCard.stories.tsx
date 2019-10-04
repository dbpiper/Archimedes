// tslint:disable: no-magic-numbers

import { StorybookWrapper } from '@src/shared/helpers/StorybookWrapper';
import { SemVerCategory } from '@util/enums/SemVerCategory';
import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { ReleaseCard } from '../ReleaseCard';
import { ReactReleaseData } from './mock-data/react-release-data';

// tslint:disable-next-line: no-var-requires
const prismaLogo = require('./mock-data/prisma-logo.png') as string;

const componentName = getDisplayName(ReleaseCard);

addStoryWithJsx('organisms/cards', module)(componentName, () => (
  <StorybookWrapper>
    <ReleaseCard
      projectName="prisma"
      releaseVersion="16.8.6"
      releaseDate="20190327T130000Z"
      semVerCategory={SemVerCategory.Patch}
      imageSrc={prismaLogo}
      releaseDescriptionMarkdown={ReactReleaseData[0].description}
    />
  </StorybookWrapper>
));
