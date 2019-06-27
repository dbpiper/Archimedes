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
    secondary: '#880085',
    accent: '#FFBC20',
    error: '#EE204D',
    success: '#27A773',
    warning: '#FF6700',
    information: '#0066FF',
    primaryLight: '#FEFEFA',
    primaryDark: '#343434',
    secondaryDark: '#414A4C',
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
    logo: {
      fontFamily: "'Righteous', cursive",
    },
  }),
});

export default STYLE;
