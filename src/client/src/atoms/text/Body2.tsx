import styled from 'styled-components';

import { Text } from '@atoms/helpers/Text';
import STYLES from '@src/STYLE';

export const Body2 = styled(Text)`
  font-family: ${STYLES.text.body2.fontFamily};
  font-weight: ${STYLES.text.body2.fontWeight};
  font-size: ${STYLES.text.body2.fontSize};
  line-height: ${STYLES.text.body2.lineHeight};
  letter-spacing: ${STYLES.text.body2.letterSpacing};
  color: ${STYLES.color.darkPrimary};
`;
