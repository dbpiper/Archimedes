import styled from 'styled-components';
import STYLES from '../../STYLE';

const H1 = styled.h1`
  font-family: ${STYLES.text.h1.fontFamily};
  font-weight: ${STYLES.text.h1.fontWeight};
  font-size: ${STYLES.text.h1.fontSize};
  line-height: ${STYLES.text.h1.lineHeight};
  letter-spacing: ${STYLES.text.h1.letterSpacing};
  color: ${STYLES.color.primaryDark};
`;

export default H1;
