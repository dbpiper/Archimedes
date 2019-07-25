import React from 'react';
import styled from 'styled-components';
import { OrLine2 } from '../../atoms/OrLine2';
import { H6 } from '../../atoms/text/H6';
// import STYLES from '../../STYLE';

const S = Object.freeze({
  __proto__: null,
  OrSignifier2: styled.div`
    width: 405px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
});

export const OrSignifier2 = ({ className }: { className?: string }) => (
  <S.OrSignifier2 className={className}>
    <OrLine2 />
    <H6>Or</H6>
    <OrLine2 />
  </S.OrSignifier2>
);
