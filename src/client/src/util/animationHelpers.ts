import {
  css,
  FlattenInterpolation,
  Keyframes,
  ThemedStyledProps,
} from 'styled-components';
import {
  AnimationDuration,
  animationDurationToString,
} from './animationDuration';
import { CubicBezier, cubicBezierToString } from './cubicBezier';

export interface BinaryAnimationKeyframes {
  on: Keyframes;
  off: Keyframes;
}

export interface BinaryAnimation {
  on: FlattenInterpolation<
    ThemedStyledProps<
      {},
      // this is from styled-components...
      // tslint:disable-next-line: no-any
      any
    >
  >;
  off: FlattenInterpolation<
    ThemedStyledProps<
      {},
      // this is from styled-components...
      // tslint:disable-next-line: no-any
      any
    >
  >;
}

export const createBinaryAnimation = (
  keyframes: BinaryAnimationKeyframes,
  duration: AnimationDuration,
  cubicBezier: CubicBezier,
  other?: string,
) => {
  const binaryAnimation = Object.freeze({
    on: css`
      animation: ${keyframes.on} ${animationDurationToString(duration)}
        ${cubicBezierToString(cubicBezier)} forwards ${other};
    `,
    off: css`
      animation: ${keyframes.off} ${animationDurationToString(duration)}
        ${cubicBezierToString(cubicBezier)} forwards ${other};
    `,
  });

  return binaryAnimation;
};

export const runBinaryAnimationPaused = (
  animationCounter: number,
  binaryAnimation: BinaryAnimation,
) => {
  const evenDivisor = 2;
  if (animationCounter === 0) {
    return 'animation: none';
  }
  if (animationCounter % evenDivisor === 0) {
    return binaryAnimation.off;
  }
  return binaryAnimation.on;
};
