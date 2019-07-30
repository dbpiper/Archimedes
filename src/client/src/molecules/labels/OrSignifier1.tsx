import React from 'react';
import styled from 'styled-components';
import { OrLine1 } from '../../atoms/OrLine1';
import { H6 } from '../../atoms/text/H6';

const S = Object.freeze({
  __proto__: null,
  OrSignifier1: styled.div`
    width: 735px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
});

export const OrSignifier1 = ({ className }: { className?: string }) => (
  <S.OrSignifier1 className={className}>
    <OrLine1 />
    <H6>Or</H6>
    <OrLine1 />
  </S.OrSignifier1>
);
