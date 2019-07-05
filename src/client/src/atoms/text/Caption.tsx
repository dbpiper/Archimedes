import styled from 'styled-components';
import STYLES from '../../STYLE';

export const Caption = styled.p`
  font-family: ${STYLES.text.caption.fontFamily};
  font-weight: ${STYLES.text.caption.fontWeight};
  font-size: ${STYLES.text.caption.fontSize};
  line-height: ${STYLES.text.caption.lineHeight};
  letter-spacing: ${STYLES.text.caption.letterSpacing};
  color: ${STYLES.color.primaryDark};
`;
