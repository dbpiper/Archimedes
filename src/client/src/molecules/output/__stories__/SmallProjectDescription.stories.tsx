import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { SmallProjectDescription } from '../SmallProjectDescription';

addStoryWithJsx('molecules/output', module)(
  getDisplayName(SmallProjectDescription),
  () => (
    <SmallProjectDescription>
      💾 Database Tools incl. ORM, Migrations and Admin UI (Postgres, MySQL &
      MongoDB)
    </SmallProjectDescription>
  ),
);
