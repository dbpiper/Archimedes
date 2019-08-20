// tslint:disable: no-magic-numbers

import { StorybookWrapper } from '@src/shared/helpers/StorybookWrapper';
import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { ProjectCard } from '../ProjectCard';

// tslint:disable-next-line: no-var-requires
const prismaLogo = require('./mock-data/prisma-logo.png') as string;

const componentName = getDisplayName(ProjectCard);

storiesOf(`organisms/cards/${componentName}/voting`, module).addWithJSX(
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

storiesOf(`organisms/cards/${componentName}/switch`, module).addWithJSX(
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
