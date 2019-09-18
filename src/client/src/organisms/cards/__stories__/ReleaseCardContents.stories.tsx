// tslint:disable: no-magic-numbers

import { storiesOf } from '@storybook/react';
import { SemVerCategory } from '@util/enums/SemVerCategory';
import React from 'react';
import getDisplayName from 'react-display-name';
import { ReleaseCardContents } from '../ReleaseCardContents';
import { ReactReleaseData } from './mock-data/react-release-data';

// tslint:disable-next-line: no-var-requires
const prismaLogo = require('./mock-data/prisma-logo.png') as string;

storiesOf('organisms/cards', module).addWithJSX(
  getDisplayName(ReleaseCardContents),
  () => (
    <ReleaseCardContents
      projectName="prisma"
      releaseVersion="16.8.6"
      releaseDate="20190327T130000Z"
      semVerCategory={SemVerCategory.Patch}
      imageSrc={prismaLogo}
      releaseDescriptionMarkdown={ReactReleaseData[0].description}
    />
  ),
);
