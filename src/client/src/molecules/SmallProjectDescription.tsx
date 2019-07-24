import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Body2 } from '../atoms/text/Body2';

const S = Object.freeze({
  __proto__: null,
  SmallProjectDescription: styled.div`
    width: 311px;
    height: 46px;
  `,
});

export const SmallProjectDescription = ({
  children,
}: {
  children: ReactNode;
}) => (
  <S.SmallProjectDescription>
    <Body2>{children}</Body2>
  </S.SmallProjectDescription>
);
