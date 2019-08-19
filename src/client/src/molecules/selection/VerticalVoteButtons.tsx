import React from 'react';
import styled from 'styled-components';

import { useVoteButtonsState, Vote } from '@util/hooks/useVoteButtonsState';
import { VoteButton } from './VoteButton';

const S = Object.freeze({
  __proto__: null,
  VerticalVoteButtons: styled.span`
    display: inline-flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  `,
  // we need to fake a gap between the elements since Flexbox doesn't
  // support this yet
  Gap: styled.span`
    margin-bottom: 10px;
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
      <S.Gap>
      <VoteButton onClick={handleUpClick} on={voteButtonsState.upOn} />
      </S.Gap>
      <VoteButton
        onClick={handleDownClick}
        down={true}
        on={voteButtonsState.downOn}
      />
    </S.VerticalVoteButtons>
  );
};

VerticalVoteButtons.defaultProps = { vote: Vote.None };
