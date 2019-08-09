import React from 'react';
import styled from 'styled-components';

import { CommentBox } from '@molecules/input/CommentBox';
import { Button, ButtonStyle } from '@molecules/selection/Button';
import { HorizontalVoteButtons } from '@molecules/selection/HorizontalVoteButtons';

const S = Object.freeze({
  __proto__: null,
  ReleaseActions: styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
  `,
  FlexGap: styled.div`
    margin-bottom: 10px;
  `,
  ActionsBar: styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  ActionsBarFlexGap: styled.div`
    margin-right: 13px;
  `,
});

export const ReleaseActions = () => (
  <S.ReleaseActions>
    <S.FlexGap>
      <S.ActionsBar>
        <S.ActionsBarFlexGap>
          <HorizontalVoteButtons />
        </S.ActionsBarFlexGap>
        <S.ActionsBarFlexGap>
          <Button buttonStyle={ButtonStyle.Text}>expand</Button>
        </S.ActionsBarFlexGap>
        <Button buttonStyle={ButtonStyle.Text}>export</Button>
      </S.ActionsBar>
    </S.FlexGap>
    <CommentBox />
  </S.ReleaseActions>
);
