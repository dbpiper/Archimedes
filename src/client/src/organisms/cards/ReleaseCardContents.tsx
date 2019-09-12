import React from 'react';
import styled from 'styled-components';

import { SmallProjectImage } from '@atoms/SmallProjectImage';
import { Subtitle1 } from '@atoms/text/Subtitle1';
import { ReleaseInfo } from '@molecules/output/ReleaseInfo';
import { SmallProjectDescription } from '@molecules/output/SmallProjectDescription';
import { SemVerCategory } from '@util/enums/SemVerCategory';

const S = Object.freeze({
  __proto__: null,
  ReleaseCardContents: styled.span`
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

export const ReleaseCardContents = ({
  projectName,
  imageSrc,
  description,
  className,
  releaseVersion,
  releaseDate,
  semVerCategory,
}: {
  imageSrc: string;
  className?: string;
  description: string;
  projectName: string;
  releaseVersion: string;
  releaseDate: string;
  semVerCategory: SemVerCategory;
}) => (
  <S.ReleaseCardContents className={className}>
    <SmallProjectImage src={imageSrc} />

    <S.TextContent>
      <Subtitle1>
        {projectName} v{releaseVersion}
      </Subtitle1>

      <br />

      <ReleaseInfo releaseDate={releaseDate} semVerCategory={semVerCategory} />

      <SmallProjectDescription>{description}</SmallProjectDescription>
    </S.TextContent>
  </S.ReleaseCardContents>
);
