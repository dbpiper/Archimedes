import styled from 'styled-components';
import STYLES from '../STYLE';

// There is no storybook story for this component because it is purely
// here for programming purposes. Basically, I need this element so that
// I have a good starting point to make text elements. Since the HTML5 p tag
// has things that I don't like such as using display block and margin.
export const Text = styled.p`
  display: inline;
  margin: 0;
  padding: 0;
  font-family: ${STYLES.text.body1.fontFamily};
  font-weight: ${STYLES.text.body1.fontWeight};
  font-size: ${STYLES.text.body1.fontSize};
  line-height: ${STYLES.text.body1.lineHeight};
  letter-spacing: ${STYLES.text.body1.letterSpacing};
  color: ${STYLES.color.darkPrimary};
`;
