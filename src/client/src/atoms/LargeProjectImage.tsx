import React from 'react';
import styled from 'styled-components';

const S = Object.freeze({
  __proto__: null,
  LargeProjectImage: styled.img`
    width: 250px;
    height: 222px;
  `,
});

export const LargeProjectImage = (props: { src: string }) => (
  <S.LargeProjectImage src={props.src} alt="Project image" />
);
