import styled from 'styled-components';
import STYLES from '../../STYLE';
import { Text } from './Text';

export const Overline = styled(Text)`
  font-family: ${STYLES.text.overline.fontFamily};
  font-weight: ${STYLES.text.overline.fontWeight};
  font-size: ${STYLES.text.overline.fontSize};
  line-height: ${STYLES.text.overline.lineHeight};
  letter-spacing: ${STYLES.text.overline.letterSpacing};
  text-transform: ${STYLES.text.overline.textTransform};
  color: ${STYLES.color.darkSecondary};
`;
