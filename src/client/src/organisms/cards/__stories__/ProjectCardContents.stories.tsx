// tslint:disable: no-magic-numbers

import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { ProjectCardContents } from '../ProjectCardContents';

// tslint:disable-next-line: no-var-requires
const prismaLogo = require('./mock-data/prisma-logo.png') as string;

storiesOf('organisms/cards', module).addWithJSX(
  getDisplayName(ProjectCardContents),
  () => (
    <ProjectCardContents
      userName="prisma"
      projectName="prisma"
      stars={14500}
      imageSrc={prismaLogo}
      language="Scala"
      description="💾 Database Tools incl. ORM, Migrations and
      Admin UI (Postgres, MySQL & MongoDB)"
    />
  ),
);
