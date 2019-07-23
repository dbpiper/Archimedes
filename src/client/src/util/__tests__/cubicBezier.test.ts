// tslint:disable: no-magic-numbers

import { createCubicBezier, isCubicBezier } from '../cubicBezier';

const outOfRangeRegex = /^.*must be in the range \[0,1].*$/;

describe('cubicBezier test suite', () => {
  describe('createCubicBezier test suite', () => {
    describe('passing in valid values works', () => {
      test('all integer values works', () => {
        const cubicBezier = createCubicBezier(0, 0, 1, 1);

        expect(isCubicBezier(cubicBezier)).toBeTrue();
      });

      test('integer values for abscissas and floating values for ordinates works', () => {
        const cubicBezier = createCubicBezier(0, 0.18, 1, 0.8);

        expect(isCubicBezier(cubicBezier)).toBeTrue();
      });

      test('integer values for abscissas and floating values > 1 for ordinates works', () => {
        const cubicBezier = createCubicBezier(0, 1.5, 1, 2.9);

        expect(isCubicBezier(cubicBezier)).toBeTrue();
      });

      test('integer values for abscissas and floating values < 1 for ordinates works', () => {
        const cubicBezier = createCubicBezier(0, -1.5, 1, -2.9);

        expect(isCubicBezier(cubicBezier)).toBeTrue();
      });

      test('floating values for abscissas and floating values for ordinates works', () => {
        const cubicBezier = createCubicBezier(0.5, 0.18, 0.8, 0.8);

        expect(isCubicBezier(cubicBezier)).toBeTrue();
      });
    });

    describe('passing in invalid values fails', () => {
      test('abscissa values < 1 fail', () => {
        expect(() => {
          createCubicBezier(-3, 0.18, -3, 0.8);
        }).toThrowWithMessage(RangeError, outOfRangeRegex);
      });

      test('abscissa values > 1 fail', () => {
        expect(() => {
          createCubicBezier(3, 0.18, 3, 0.8);
        }).toThrowWithMessage(RangeError, outOfRangeRegex);
      });
    });
  });
});
