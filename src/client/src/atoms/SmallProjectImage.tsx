import React from 'react';
import styled from 'styled-components';

const S = Object.freeze({
  __proto__: null,
  SmallProjectImage: styled.img`
    width: 118px;
    height: 105px;

    margin-left: 15px;
    margin-right: 15px;
  `,
});

export const SmallProjectImage = (props: { src: string }) => (
  <S.SmallProjectImage src={props.src} alt="Project image" />
);
