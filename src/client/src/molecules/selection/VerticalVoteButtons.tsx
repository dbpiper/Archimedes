import React, { useState } from 'react';
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

export enum Vote {
  Down,
  Up,
  None,
}

enum VoteDirection {
  Up,
  Down,
}

interface VoteButtonState {
  upOn: boolean;
  downOn: boolean;
}

const nextState = (
  newClick: VoteDirection,
  currentState: VoteButtonState,
): VoteButtonState => {
  if (newClick === VoteDirection.Up) {
    if (currentState.upOn) {
      return {
        upOn: false,
        downOn: false,
      };
    }
    return {
      upOn: true,
      downOn: false,
    };
  }
  if (currentState.downOn) {
    return {
      upOn: false,
      downOn: false,
    };
  }
  return {
    upOn: false,
    downOn: true,
  };
};

const generateInitialState = (vote: Vote): VoteButtonState => {
  switch (vote) {
    case Vote.Down:
      return {
        upOn: false,
        downOn: true,
      };
    case Vote.Up:
      return {
        upOn: true,
        downOn: false,
      };
    default:
      return {
        upOn: false,
        downOn: false,
      };
  }
};

export const VerticalVoteButtons = ({ vote }: { vote: Vote }) => {
  const [voteButtonState, setVoteButtonState] = useState(
    generateInitialState(vote),
  );
  const handleUpClick = () => {
    setVoteButtonState(nextState(VoteDirection.Up, voteButtonState));
  };
  const handleDownClick = () => {
    setVoteButtonState(nextState(VoteDirection.Down, voteButtonState));
  };
  return (
    <S.VerticalVoteButtons>
      <VoteButton onClick={handleUpClick} on={voteButtonState.upOn} />
      <VoteButton
        onClick={handleDownClick}
        down={true}
        on={voteButtonState.downOn}
      />
    </S.VerticalVoteButtons>
  );
};

VerticalVoteButtons.defaultProps = { vote: Vote.None };
