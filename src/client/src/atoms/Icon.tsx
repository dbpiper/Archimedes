import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const S = Object.freeze({
  IconContainer: styled.div`
    display: block;
    width: 16px;
    height: 16px;
  `,
});

export const Icon = (props: { icon: IconDefinition }) => (
  <S.IconContainer>
    <FontAwesomeIcon icon={props.icon} pull="right" size="1x" />
  </S.IconContainer>
);
