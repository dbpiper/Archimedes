import githubColors from 'github-colors';
import numeral from 'numeral';
import React from 'react';
import styled from 'styled-components';

import { Caption } from '@atoms/text/Caption';

const S = Object.freeze({
  __proto__: null,
  SmallProjectAdditionalInfo: styled.div`
    width: 95px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  `,
  LanguageColorDot: styled.div<{ languageColor: string }>`
    background-color: ${props => props.languageColor};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
  `,
  StarBox: styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 42px;
  `,
  LanguageBox: styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 42px;
  `,
  StarText: styled.p`
    display: inline;
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
    <Caption>
      <S.StarBox>
        <S.StarText>★</S.StarText>
        {numeral(stars).format('0.0a')}
      </S.StarBox>
    </Caption>
    <Caption>
      <S.LanguageBox>
        <S.LanguageColorDot languageColor={githubColors.get(language).color} />
        {language}
      </S.LanguageBox>
    </Caption>
  </S.SmallProjectAdditionalInfo>
);
