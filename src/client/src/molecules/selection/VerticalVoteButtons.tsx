import React from 'react';
import styled from 'styled-components';

import { useVoteButtonsState, Vote } from '@util/hooks/useVoteButtonsState';
import { VoteButton } from './VoteButton';

const S = Object.freeze({
  __proto__: null,
  VerticalVoteButtons: styled.div`
    display: grid;
    gap: 10px;
    grid: 25px 25px / 25px;
  `,
});

export const VerticalVoteButtons = ({ vote }: { vote: Vote }) => {
  const [voteButtonsState, setVoteButtonsState] = useVoteButtonsState(vote);
  const handleUpClick = () => {
    setVoteButtonsState(Vote.Up);
  };
  const handleDownClick = () => {
    setVoteButtonsState(Vote.Down);
  };

  return (
    <S.VerticalVoteButtons>
      <VoteButton onClick={handleUpClick} on={voteButtonsState.upOn} />
      <VoteButton
        onClick={handleDownClick}
        down={true}
        on={voteButtonsState.downOn}
      />
    </S.VerticalVoteButtons>
  );
};

VerticalVoteButtons.defaultProps = { vote: Vote.None };
