// tslint:disable: no-magic-numbers

import { StorybookWrapper } from '@src/shared/helpers/StorybookWrapper';
import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { VotingProjectCard } from '../VotingProjectCard';

// tslint:disable-next-line: no-var-requires
const prismaLogo = require('./mock-data/prisma-logo.png') as string;

storiesOf('organisms/cards', module).addWithJSX(
  getDisplayName(VotingProjectCard),
  () => (
    <StorybookWrapper>
      <VotingProjectCard
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
