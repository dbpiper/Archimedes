import React from 'react';
import styled from 'styled-components';

import { useVoteButtonsState, Vote } from '@util/hooks/useVoteButtonsState';
import { VoteButton } from './VoteButton';

const S = Object.freeze({
  __proto__: null,
  HorizontalVoteButtons: styled.span`
    display: inline-flex;
  `,
  Gap: styled.span`
    margin-right: 10px;
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
      <S.Gap>
        <VoteButton onClick={handleUpClick} on={voteButtonsState.upOn} />
      </S.Gap>
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
