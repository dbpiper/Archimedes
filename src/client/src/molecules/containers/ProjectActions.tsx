import React from 'react';
import styled from 'styled-components';

import { CommentBox } from '@molecules/input/CommentBox';
import { HorizontalVoteButtons } from '@molecules/selection/HorizontalVoteButtons';

const S = Object.freeze({
  __proto__: null,
  ProjectActions: styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
  `,
  FlexGap: styled.div`
    margin-bottom: 10px;
  `,
});

export const ProjectActions = () => (
  <S.ProjectActions>
    <S.FlexGap>
      <HorizontalVoteButtons />
    </S.FlexGap>
    <CommentBox />
  </S.ProjectActions>
);
