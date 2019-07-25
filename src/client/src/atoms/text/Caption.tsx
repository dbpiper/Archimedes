import styled from 'styled-components';
import STYLES from '../../STYLE';
import { Text } from './Text';

export const Caption = styled(Text)`
  font-family: ${STYLES.text.caption.fontFamily};
  font-weight: ${STYLES.text.caption.fontWeight};
  font-size: ${STYLES.text.caption.fontSize};
  line-height: ${STYLES.text.caption.lineHeight};
  letter-spacing: ${STYLES.text.caption.letterSpacing};
  color: ${STYLES.color.darkSecondary};
`;
