import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import STYLES from '../../STYLE';

const S = Object.freeze({
  VoteButton: styled.button<{ on: boolean; down: boolean }>`
    display: inline-grid;
    width: 25px;
    height: 25px;
    color: ${props =>
      props.on
        ? props.down
          ? STYLES.color.error
          : STYLES.color.success
        : STYLES.color.darkSecondary};
    border: 0;
    background: none;
    background-color: none;
    place-content: center;
    outline: none !important;
    appearance: none;

    &:active {
      color: ${props =>
        props.down ? STYLES.color.errorDark : STYLES.color.successDark};
    }
  `,
});

export const VoteButton = ({
  className,
  on,
  onClick,
  down,
}: {
  on: boolean;
  down: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  const [onInternal, setOnInternal] = useState(on);
  const icon = down ? faThumbsDown : faThumbsUp;
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setOnInternal(!onInternal);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <S.VoteButton
      onClick={handleClick}
      className={className}
      on={onInternal}
      down={down}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
    </S.VoteButton>
  );
};

VoteButton.defaultProps = { on: false, down: false };
