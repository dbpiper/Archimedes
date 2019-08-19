import React from 'react';
import styled from 'styled-components';

import { SmallProjectImage } from '@atoms/SmallProjectImage';
import { Subtitle1 } from '@atoms/text/Subtitle1';
import { SmallProjectAdditionalInfo } from '@molecules/output/SmallProjectAdditionalInfo';
import { SmallProjectDescription } from '@molecules/output/SmallProjectDescription';

const S = Object.freeze({
  __proto__: null,
  ProjectCardContents: styled.span`
    display: inline-flex;
    outline: none;
    border: 0;

    width: 444px;
    height: 105px;
  `,
  ProjectTitle: styled.span`
    display: inline-flex;
  `,
  ProjectName: styled.span`
    display: inline;
    font-weight: bold;
  `,
  TextContent: styled.span`
    display: inline-flex;
    height: 105px;
    flex-direction: column;
  `,
});

export const ProjectCardContents = ({
  userName,
  projectName,
  stars,
  language,
  imageSrc,
  description,
  className,
}: {
  stars: number;
  language: string;
  imageSrc: string;
  className?: string;
  description: string;
  userName: string;
  projectName: string;
}) => (
  <S.ProjectCardContents className={className}>
    <SmallProjectImage src={imageSrc} />

    <S.TextContent>
      <S.ProjectTitle>
        <Subtitle1>
          {userName}/<S.ProjectName>{projectName}</S.ProjectName>
        </Subtitle1>
      </S.ProjectTitle>

      <br />

      <SmallProjectAdditionalInfo stars={stars} language={language} />
      <SmallProjectDescription>{description}</SmallProjectDescription>
    </S.TextContent>
  </S.ProjectCardContents>
);
