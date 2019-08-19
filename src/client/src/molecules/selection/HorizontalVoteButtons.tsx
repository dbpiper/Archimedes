import React from 'react';
import styled from 'styled-components';

import { useVoteButtonsState, Vote } from '@util/hooks/useVoteButtonsState';
import { VoteButton } from './VoteButton';

const S = Object.freeze({
  __proto__: null,
  HorizontalVoteButtons: styled.div`
    display: grid;
    gap: 10px;
    grid: 33px / 25px 25px;
    place-items: top;
  `,
  DownVoteWrapper: styled.div`
    padding-top: 8px;
  `,
});

export const HorizontalVoteButtons = ({ vote }: { vote: Vote }) => {
  const [voteButtonsState, setVoteButtonsState] = useVoteButtonsState(vote);
  const handleUpClick = () => {
    setVoteButtonsState(Vote.Up);
  };
  const handleDownClick = () => {
    setVoteButtonsState(Vote.Down);
  };

  return (
    <S.HorizontalVoteButtons>
      <VoteButton onClick={handleUpClick} on={voteButtonsState.upOn} />
      <S.DownVoteWrapper>
        <VoteButton
          onClick={handleDownClick}
          down={true}
          on={voteButtonsState.downOn}
        />
      </S.DownVoteWrapper>
    </S.HorizontalVoteButtons>
  );
};

HorizontalVoteButtons.defaultProps = { vote: Vote.None };
