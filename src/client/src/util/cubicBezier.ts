import invariant from 'invariant';

export interface CubicBezier extends String {
  __duration__: never;
}
const checkValidCubicBezierStr = (str: string): boolean =>
  str.match(
    /^cubic-bezier\([0,1]+\.?\d*, \d+\.?\d*, [0,1]+\.?\d*, \d+\.?\d*\)$/,
  ) !== null;

export const parseCubicBezier = (cubicBezier: string): CubicBezier => {
  if (checkValidCubicBezierStr(cubicBezier)) {
    return (cubicBezier as unknown) as CubicBezier;
  }

  throw new Error(`The cubic-bezier string: ${cubicBezier} is not valid!`);
};

export const cubicBezierToString = (cubicBezier: CubicBezier): string =>
  (cubicBezier as unknown) as string;

export const createCubicBezier = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): CubicBezier => {
  invariant(x1 >= 0 || x1 <= 1, 'x1 must be in the range [0,1]!');
  invariant(x2 >= 0 || x2 <= 1, 'x2 must be in the range [0,1]!');

  return parseCubicBezier(`cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`);
};
