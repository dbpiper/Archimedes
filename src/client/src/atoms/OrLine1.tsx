import React from 'react';
import styled from 'styled-components';

import STYLE from '@src/STYLE';

const S = Object.freeze({
  OrLine1: styled.div`
    width: 328px;
    height: 2px;
    background-color: ${STYLE.color.darkPrimary};
    border-radius: 99px;
  `,
});

export const OrLine1 = () => <S.OrLine1 />;
