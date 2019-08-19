import { useState } from 'react';

export enum Vote {
  Down,
  Up,
  None,
}

export interface VoteButtonsState {
  upOn: boolean;
  downOn: boolean;
}

const nextState = (
  newVote: Vote,
  currentState: VoteButtonsState,
): VoteButtonsState => {
  switch (newVote) {
    case Vote.Up:
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
    case Vote.Down:
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
    default:
      return currentState;
  }
};

const generateInitialState = (vote: Vote): VoteButtonsState => {
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

export const useVoteButtonsState = (
  initialVote: Vote,
): [VoteButtonsState, (vote: Vote) => void] => {
  const [voteButtonsState, setVoteButtonState] = useState(
    generateInitialState(initialVote),
  );

  const setVoteButtonsState = (vote: Vote) => {
    setVoteButtonState(nextState(vote, voteButtonsState));
  };

  return [voteButtonsState, setVoteButtonsState];
};
