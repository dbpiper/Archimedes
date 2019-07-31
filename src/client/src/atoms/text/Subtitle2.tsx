import styled from 'styled-components';
import { Text } from '../../helpers/Text';
import STYLES from '../../STYLE';

export const Subtitle2 = styled(Text)`
  font-family: ${STYLES.text.subtitle2.fontFamily};
  font-weight: ${STYLES.text.subtitle2.fontWeight};
  font-size: ${STYLES.text.subtitle2.fontSize};
  line-height: ${STYLES.text.subtitle2.lineHeight};
  letter-spacing: ${STYLES.text.subtitle2.letterSpacing};
  color: ${STYLES.color.darkPrimary};
`;
