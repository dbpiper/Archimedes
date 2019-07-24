import githubColors from 'github-colors';
import numeral from 'numeral';
import React from 'react';
import styled from 'styled-components';
import { Caption } from '../atoms/text/Caption';

const S = Object.freeze({
  __proto__: null,
  SmallProjectAdditionalInfo: styled.div`
    width: 100px;
    height: 16px;
  `,
  LanguageColorDot: styled.div<{ languageColor: string }>`
    background-color: ${props => props.languageColor};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 1px;
  `,
});

export const SmallProjectAdditionalInfo = ({
  stars,
  language,
}: {
  stars: number;
  language: string;
}) => (
  <S.SmallProjectAdditionalInfo>
    <Caption>★ {numeral(stars).format('0.0a')} </Caption>
    <Caption>
      <S.LanguageColorDot languageColor={githubColors.get(language).color} />{' '}
      {language}
    </Caption>
  </S.SmallProjectAdditionalInfo>
);
