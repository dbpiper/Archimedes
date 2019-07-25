import styled from 'styled-components';
import STYLES from '../../STYLE';
import { Text } from './Text';

export const Button2 = styled(Text)`
  font-family: ${STYLES.text.button2.fontFamily};
  font-weight: ${STYLES.text.button2.fontWeight};
  font-size: ${STYLES.text.button2.fontSize};
  line-height: ${STYLES.text.button2.lineHeight};
  letter-spacing: ${STYLES.text.button2.letterSpacing};
  color: ${STYLES.color.darkPrimary};
`;
