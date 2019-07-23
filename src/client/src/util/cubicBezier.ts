export interface CubicBezier extends String {
  __duration__: never;
}
const checkValidCubicBezierStr = (str: string): boolean =>
  str.match(
    /^cubic-bezier\([\ ]*[0,1]+\.?\d*[\ ]*,[\ ]*-?\d+\.?\d*[\ ]*,[\ ]*[0,1]+\.?\d*[\ ]*,[\ ]*-?\d+\.?\d*[\ ]*\)$/,
  ) !== null;

export const isCubicBezier = (
  arg: string | CubicBezier | undefined | null,
): arg is CubicBezier => {
  if (arg) {
    return checkValidCubicBezierStr(arg as string);
  }

  return false;
};

const parseCubicBezier = (cubicBezier: string): CubicBezier => {
  if (isCubicBezier(cubicBezier)) {
    return cubicBezier;
  }

  throw new Error(
    `The provided value: ${cubicBezier} is not a valid cubic-bezier string!`,
  );
};

export const cubicBezierToString = (cubicBezier: CubicBezier): string =>
  (cubicBezier as unknown) as string;

export const createCubicBezier = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): CubicBezier => {
  if (x1 < 0 || x1 > 1) {
    throw new RangeError(
      `The value: ${x1} was outside the valid range, x1 must be in the range [0,1]!`,
    );
  }
  if (x2 < 0 || x2 > 1) {
    throw new RangeError(
      `The value: ${x2} was outside the valid range, x2 must be in the range [0,1]!`,
    );
  }

  return parseCubicBezier(`cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`);
};
