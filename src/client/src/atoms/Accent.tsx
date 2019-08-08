import React from 'react';
import styled from 'styled-components';

import STYLE from '@src/STYLE';

const S = Object.freeze({
  __proto__: null,
  Accent: styled.div`
    width: 250px;
    height: 662px;
    border-radius: 0 53px 0 0;
    background-color: ${STYLE.color.primary};
  `,
});

export const Accent = () => <S.Accent />;
