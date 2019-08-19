import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const S = Object.freeze({
  IconContainer: styled.div`
    display: inline-flex;
    width: 16px;
    height: 16px;
    padding: 0;
    margin: 0;
  `,
});

export const Icon = (props: { icon: IconDefinition }) => (
  <S.IconContainer>
    <FontAwesomeIcon icon={props.icon} pull="right" size="1x" />
  </S.IconContainer>
);

Icon.defaultProps = { icon: faSearch };
