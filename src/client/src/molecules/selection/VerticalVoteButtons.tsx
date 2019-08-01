import React from 'react';
import styled from 'styled-components';
import { VoteButton } from './VoteButton';

const S = Object.freeze({
  __proto__: null,
  VerticalVoteButtons: styled.div`
    display: grid;
    gap: 20px;
    grid: 1fr 1fr / 1fr;
  `,
});

export const VerticalVoteButtons = () => (
  <S.VerticalVoteButtons>
    <VoteButton />
    <VoteButton down={true} />
  </S.VerticalVoteButtons>
);
