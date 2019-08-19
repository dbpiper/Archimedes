import styled from 'styled-components';

import { Text } from '@atoms/helpers/Text';
import { ButtonStyle } from '@molecules/selection/Button';
import STYLES from '@src/STYLE';

const getColor = (
  secondary: boolean = false,
  buttonStyle: ButtonStyle = ButtonStyle.Text,
) => {
  switch (buttonStyle) {
    case ButtonStyle.Contained:
      if (secondary) {
        return STYLES.color.onSecondary;
      }
      return STYLES.color.onPrimary;
    default:
      if (secondary) {
        return STYLES.color.secondary;
      }
      return STYLES.color.primary;
  }
};

export const Button1 = styled(Text)<{
  buttonStyle?: ButtonStyle;
  secondary?: boolean;
}>`
  font-family: ${STYLES.text.button1.fontFamily};
  font-weight: ${STYLES.text.button1.fontWeight};
  font-size: ${STYLES.text.button1.fontSize};
  line-height: ${STYLES.text.button1.lineHeight};
  letter-spacing: ${STYLES.text.button1.letterSpacing};
  color: ${props => getColor(props.secondary, props.buttonStyle)};
`;

Button1.defaultProps = { buttonStyle: ButtonStyle.Text };
