// pseudo-enum
const fontWeight = Object.freeze({
  __proto__: null,
  Light: 300,
  Regular: 400,
  Bold: 700,
});

/* creates a "fake medium" effect by slightly increasing the
 * font size (by 1/140) this is very similar to having a medium weight font
 * which Lato (as provided by Google fonts) doesn't have.
 */
const fakeMedium = (fontSize: number) => {
  const extraSizeDenominator = 140;
  const extraSize = 1 + 1 / extraSizeDenominator;
  const tenthsToOnesMultiplier = 10;
  // we want to round to the nearest tenth, so we multiply by
  // 10 and divide by 10 to treat the tenths place as the ones place
  return `${Math.round(fontSize * extraSize * tenthsToOnesMultiplier) /
    tenthsToOnesMultiplier}px`;
};

const STYLE = Object.freeze({
  __proto__: null,
  color: Object.freeze({
    __proto__: null,
    primary: '#2D4BC3',
    primaryMedium: '#2640A6',
    primaryDark: '#1F3589',
    secondary: '#880085',
    accent: '#FFBC20',
    error: '#EE204D',
    errorDark: '#A50021',
    success: '#27A773',
    successMedium: '#679267',
    successDark: '#006A4E',
    warning: '#FF6700',
    information: '#0066FF',
    lightPrimary: '#FEFEFA',
    darkPrimary: '#343434',
    darkSecondary: '#414A4C',
    onPrimary: '#FEFEFA',
    onSecondary: '#FEFEFA',
  }),
  text: Object.freeze({
    __proto__: null,
    h1: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: fontWeight.Light,
      fontSize: '96px',
      lineHeight: '144px',
      letterSpacing: '-0.015em',
    },
    h2: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: fontWeight.Light,
      fontSize: '60px',
      lineHeight: '90px',
      letterSpacing: '-0.005em',
    },
    h3: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: fontWeight.Regular,
      fontSize: '48px',
      lineHeight: '72px',
      letterSpacing: 'normal',
    },
    h4: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: fontWeight.Regular,
      fontSize: '34px',
      lineHeight: '51px',
      letterSpacing: '0.0025em',
    },
    h5: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: fontWeight.Regular,
      fontSize: '24px',
      lineHeight: '36px',
      letterSpacing: 'normal',
    },
    h6: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: fontWeight.Regular,
      // tslint:disable-next-line: no-magic-numbers
      fontSize: fakeMedium(20),
      lineHeight: '30px',
      letterSpacing: '0.0015em',
    },
    subtitle1: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: fontWeight.Regular,
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.0015em',
    },
    subtitle2: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: fontWeight.Regular,
      // tslint:disable-next-line: no-magic-numbers
      fontSize: fakeMedium(14),
      lineHeight: '21px',
      letterSpacing: '0.001em',
    },
    body1: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: fontWeight.Regular,
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.005em',
    },
    body2: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: fontWeight.Regular,
      fontSize: '14px',
      lineHeight: '21px',
      letterSpacing: '0.0025em',
    },
    button1: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: fontWeight.Regular,
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.005em',
    },
    button2: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: fontWeight.Regular,
      // tslint:disable-next-line: no-magic-numbers
      fontSize: fakeMedium(14),
      lineHeight: '21px',
      letterSpacing: '0.0125em',
    },
    caption: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: fontWeight.Regular,
      fontSize: '12px',
      lineHeight: '18px',
      letterSpacing: '0.004em',
    },
    overline: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: fontWeight.Regular,
      fontSize: '10px',
      lineHeight: '15px',
      letterSpacing: '0.0015em',
      textTransform: 'uppercase',
    },
    logo: {
      fontFamily: "'Righteous', cursive",
    },
  }),
});

export default STYLE;
