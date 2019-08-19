import React from 'react';
import styled from 'styled-components';

import { Caption } from '@atoms/text/Caption';
import { Button, ButtonStyle } from '@molecules/selection/Button';
import { HorizontalVoteButtons } from '@molecules/selection/HorizontalVoteButtons';
import { getDurationForLabel } from '@util/getDurationForLabel';

const S = Object.freeze({
  __proto__: null,
  CommentActions: styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  FlexGap: styled.div`
    margin-right: 13px;
  `,
});

/**
 *
 * All DateTimes are expected to be ISO 8601 formatted DateTime strings.
 *
 */
export const CommentActions = ({
  commentPostDateTime,
  comparisonDateTime,
}: {
  commentPostDateTime: string;
  comparisonDateTime?: string;
}) => (
    <S.CommentActions>
      <S.FlexGap>
        <HorizontalVoteButtons />
      </S.FlexGap>
      <S.FlexGap>
        <Button buttonStyle={ButtonStyle.Text}>reply</Button>
      </S.FlexGap>
      <S.FlexGap>
        <Button buttonStyle={ButtonStyle.Text}>message</Button>
      </S.FlexGap>
      <Caption>
        {getDurationForLabel(commentPostDateTime, comparisonDateTime)}
      </Caption>
    </S.CommentActions>
);
