// tslint:disable: no-magic-numbers

import { StorybookWrapper } from '@src/shared/helpers/StorybookWrapper';
import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { ProjectCard } from '../ProjectCard';

// tslint:disable-next-line: no-var-requires
const prismaLogo = require('./mock-data/prisma-logo.png') as string;

const componentName = getDisplayName(ProjectCard);

addStoryWithJsx(`organisms/cards/${componentName}/voting`, module)(
  componentName,
  () => (
    <StorybookWrapper>
      <ProjectCard
        userName="prisma"
        projectName="prisma"
        stars={14500}
        imageSrc={prismaLogo}
        language="Scala"
        description="💾 Database Tools incl. ORM, Migrations and
      Admin UI (Postgres, MySQL & MongoDB)"
      />
    </StorybookWrapper>
  ),
);

addStoryWithJsx(`organisms/cards/${componentName}/switch`, module)(
  componentName,
  () => (
    <StorybookWrapper>
      <ProjectCard
        userName="prisma"
        projectName="prisma"
        stars={14500}
        imageSrc={prismaLogo}
        language="Scala"
        voting={false}
        description="💾 Database Tools incl. ORM, Migrations and
      Admin UI (Postgres, MySQL & MongoDB)"
      />
    </StorybookWrapper>
  ),
);
