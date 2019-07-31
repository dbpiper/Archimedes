import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Body1 } from '../../atoms/text/Body1';
import STYLES from '../../STYLE';

const S = Object.freeze({
  __proto__: null,
  Placeholder: styled(Body1)`
    color: ${STYLES.color.darkSecondary};
  `,
});

export const Placeholder = ({
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
}) => <S.Placeholder className={className}>{children}</S.Placeholder>;
