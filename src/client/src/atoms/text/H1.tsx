import styled from 'styled-components';

import STYLES from '@src/STYLE';

export const H1 = styled.h1`
  font-family: ${STYLES.text.h1.fontFamily};
  font-weight: ${STYLES.text.h1.fontWeight};
  font-size: ${STYLES.text.h1.fontSize};
  line-height: ${STYLES.text.h1.lineHeight};
  letter-spacing: ${STYLES.text.h1.letterSpacing};
  color: ${STYLES.color.darkPrimary};
`;
