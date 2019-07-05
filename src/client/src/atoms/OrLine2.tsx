import React from 'react';
import styled from 'styled-components';
import STYLE from '../STYLE';

const S = Object.freeze({
  OrLine2: styled.div`
    width: 164px;
    height: 2px;
    background-color: ${STYLE.color.primaryDark};
    border-radius: 99px;
  `,
});

export const OrLine2 = () => <S.OrLine2 />;
