import styled from 'styled-components';
import STYLES from '../../STYLE';
import { Text } from './Text';

export const Body1 = styled(Text)`
  font-family: ${STYLES.text.body1.fontFamily};
  font-weight: ${STYLES.text.body1.fontWeight};
  font-size: ${STYLES.text.body1.fontSize};
  line-height: ${STYLES.text.body1.lineHeight};
  letter-spacing: ${STYLES.text.body1.letterSpacing};
  color: ${STYLES.color.darkPrimary};
`;
