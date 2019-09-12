import { storiesOf } from '@storybook/react';
import { SemVerCategory } from '@util/enums/SemVerCategory';
import React from 'react';
import getDisplayName from 'react-display-name';
import { ReleaseInfo } from '../ReleaseInfo';

storiesOf('molecules/output', module).addWithJSX(
  getDisplayName(ReleaseInfo),
  () => (
    <ReleaseInfo
      releaseDate="20190327T130000Z"
      semVerCategory={SemVerCategory.Patch}
    />
  ),
);
