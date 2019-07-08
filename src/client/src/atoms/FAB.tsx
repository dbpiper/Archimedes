import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import STYLE from '../STYLE';

const S = Object.freeze({
  FAB: styled.button`
    display: table-cell;
    vertical-align: middle;
    width: 60px;
    height: 60px;
    background-color: ${STYLE.color.primary};
    color: ${STYLE.color.onPrimary};
    border-radius: 99px;
    border: none !important;
    outline: none !important;

    :hover {
      background-color: ${STYLE.color.primaryMedium};
    }

    :active {
      background-color: ${STYLE.color.primaryDark};
    }
  `,
  IconContainer: styled.div`
    display: inline-block;
    width: 18.67px;
    height: 18.67px;
    margin: auto;
  `,
});

export const FAB = (props: { icon: IconDefinition }) => (
  <S.FAB>
    <S.IconContainer>
      <FontAwesomeIcon icon={props.icon} size="lg" />
    </S.IconContainer>
  </S.FAB>
);

FAB.defaultProps = { icon: faPlus };
