import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Button1 } from '@atoms/text/Button1';
import STYLES from '@src/STYLE';

export enum ButtonStyle {
  Contained,
  Outlined,
  Text,
}

const BaseButton = styled.button`
  padding: 15px 30px 15px 30px;
  border: 0;
  background: none;
  background-color: none;
  place-content: center;
  outline: none !important;
  appearance: none;
  border-radius: 5px;
`;

const S = Object.freeze({
  __proto__: null,
  ContainedButton: styled(BaseButton)<{ secondary?: boolean }>`
    background-color: ${props =>
      props.secondary ? STYLES.color.secondary : STYLES.color.primary};

    &:hover {
      background-color: ${props =>
        props.secondary
          ? STYLES.color.secondaryMedium
          : STYLES.color.primaryMedium};
    }

    &:active {
      background-color: ${props =>
        props.secondary
          ? STYLES.color.secondaryDark
          : STYLES.color.primaryDark};
    }
  `,
  OutlinedButton: styled(BaseButton)<{ secondary?: boolean }>`
    box-sizing: border-box;
    box-shadow: 0 0 0 1px
      ${props =>
        props.secondary ? STYLES.color.secondary : STYLES.color.primary};

    background-image: linear-gradient(
      0deg,
      ${STYLES.color.lightPrimary},
      ${STYLES.color.lightPrimary}
    );
    background-blend-mode: multiply;

    &:hover {
      background-color: ${props =>
        props.secondary
          ? STYLES.color.secondaryLightest
          : STYLES.color.primaryLightest};
    }
    &:active {
      background-color: ${props =>
        props.secondary
          ? STYLES.color.secondaryLighter
          : STYLES.color.primaryLighter};
    }
  `,
  TextButton: styled(BaseButton)<{ secondary?: boolean }>`
    background-image: linear-gradient(
      0deg,
      ${STYLES.color.lightPrimary},
      ${STYLES.color.lightPrimary}
    );
    background-blend-mode: multiply;

    &:hover {
      background-color: ${props =>
        props.secondary
          ? STYLES.color.secondaryLightest
          : STYLES.color.primaryLightest};
    }
    &:active {
      background-color: ${props =>
        props.secondary
          ? STYLES.color.secondaryLighter
          : STYLES.color.primaryLighter};
    }
  `,
});

const getSelectedButtonStyle = (style: ButtonStyle) => {
  switch (style) {
    case ButtonStyle.Contained:
      return S.ContainedButton;
    case ButtonStyle.Outlined:
      return S.OutlinedButton;
    default:
      return S.TextButton;
  }
};

export const Button = ({
  children,
  secondary,
  buttonStyle,
}: {
  children: ReactNode;
  secondary: boolean;
  buttonStyle: ButtonStyle;
}) => {
  const SelectedButton = getSelectedButtonStyle(buttonStyle);
  return (
    <SelectedButton secondary={secondary}>
      <Button1 buttonStyle={buttonStyle} secondary={secondary}>
        {children}
      </Button1>
    </SelectedButton>
  );
};

Button.defaultProps = { secondary: false, buttonStyle: ButtonStyle.Contained };
