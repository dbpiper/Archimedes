// tslint:disable: no-magic-numbers
import { keyframes } from 'styled-components';
import { parseAnimationDuration } from '../animationDuration';
import {
  BinaryAnimation,
  BinaryAnimationKeyframes,
  BinaryAnimationOptions,
  createBinaryAnimation,
  currentBinaryAnimation,
} from '../animationHelpers';
import { createCubicBezier } from '../cubicBezier';

describe('animationHelpers test suite', () => {
  describe('currentBinaryAnimation test suite', () => {
    let binaryAnimationStartOff: BinaryAnimation;
    let binaryAnimationStartOn: BinaryAnimation;
    let keyframeObject: BinaryAnimationKeyframes;

    beforeAll(() => {
      keyframeObject = {
        on: keyframes`
          from {
            color: red;
          }

          to {
            color: blue;
          }
        `,
        off: keyframes`
          from {
            color: blue;
          }

          to {
            color: red;
          }
        `,
      };
      const optionsStartOff: BinaryAnimationOptions = {
        keyframes: keyframeObject,
        initialState: keyframeObject.off,
        duration: parseAnimationDuration('1s'),
        cubicBezier: createCubicBezier(0, 0, 1, 1),
      };
      const optionsStartOn: BinaryAnimationOptions = {
        keyframes: keyframeObject,
        initialState: keyframeObject.on,
        duration: parseAnimationDuration('1s'),
        cubicBezier: createCubicBezier(0, 0, 1, 1),
      };
      binaryAnimationStartOff = createBinaryAnimation(optionsStartOff);
      binaryAnimationStartOn = createBinaryAnimation(optionsStartOn);
    });

    describe('works if the initial state is off', () => {
      test('should work at the start', () => {
        expect(
          currentBinaryAnimation(0, binaryAnimationStartOff).keyframe,
        ).toEqual(keyframeObject.off);
      });

      test('should work after the first count', () => {
        expect(
          currentBinaryAnimation(1, binaryAnimationStartOff).keyframe,
        ).toEqual(keyframeObject.on);
      });

      test('should work after the second count', () => {
        expect(
          currentBinaryAnimation(2, binaryAnimationStartOff).keyframe,
        ).toEqual(keyframeObject.off);
      });

      test('should work after the hundredth count', () => {
        expect(
          currentBinaryAnimation(100, binaryAnimationStartOff).keyframe,
        ).toEqual(keyframeObject.off);
      });

      test('should work after the hundred and first count', () => {
        expect(
          currentBinaryAnimation(101, binaryAnimationStartOff).keyframe,
        ).toEqual(keyframeObject.on);
      });
    });

    describe('works if the initial state is on', () => {
      test('should work at the start', () => {
        expect(
          currentBinaryAnimation(0, binaryAnimationStartOn).keyframe,
        ).toEqual(keyframeObject.on);
      });

      test('should work after the first count', () => {
        expect(
          currentBinaryAnimation(1, binaryAnimationStartOn).keyframe,
        ).toEqual(keyframeObject.off);
      });

      test('should work after the second count', () => {
        expect(
          currentBinaryAnimation(2, binaryAnimationStartOn).keyframe,
        ).toEqual(keyframeObject.on);
      });

      test('should work after the hundredth count', () => {
        expect(
          currentBinaryAnimation(100, binaryAnimationStartOn).keyframe,
        ).toEqual(keyframeObject.on);
      });

      test('should work after the hundred and first count', () => {
        expect(
          currentBinaryAnimation(101, binaryAnimationStartOn).keyframe,
        ).toEqual(keyframeObject.off);
      });
    });
  });
});
