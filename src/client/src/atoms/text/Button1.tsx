import styled from 'styled-components';
import STYLES from '../../STYLE';
import { Text } from './Text';

export const Button1 = styled(Text)`
  font-family: ${STYLES.text.button1.fontFamily};
  font-weight: ${STYLES.text.button1.fontWeight};
  font-size: ${STYLES.text.button1.fontSize};
  line-height: ${STYLES.text.button1.lineHeight};
  letter-spacing: ${STYLES.text.button1.letterSpacing};
  color: ${STYLES.color.darkPrimary};
`;
