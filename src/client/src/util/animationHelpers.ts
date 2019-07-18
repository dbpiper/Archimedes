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

type CSSAnimation = FlattenInterpolation<
  ThemedStyledProps<
    {},
    // this is from styled-components...
    // tslint:disable-next-line: no-any
    any
  >
>;

export interface AnimationWithKeyframe {
  animation: CSSAnimation;
  keyframe: Keyframes;
}

export interface BinaryAnimation {
  on: AnimationWithKeyframe;
  off: AnimationWithKeyframe;
  initialState: AnimationWithKeyframe;
}

interface BinaryAnimationOptions {
  keyframes: BinaryAnimationKeyframes;
  initialState: Keyframes;
  duration: AnimationDuration;
  cubicBezier: CubicBezier;
  other?: string;
}

export const createBinaryAnimation = (
  options: BinaryAnimationOptions,
): BinaryAnimation => {
  const binaryAnimation = Object.freeze({
    on: {
      animation: css`
        animation: ${options.keyframes.on}
          ${animationDurationToString(options.duration)}
          ${cubicBezierToString(options.cubicBezier)} forwards ${options.other};
      `,
      keyframe: options.keyframes.on,
    },
    off: {
      animation: css`
        animation: ${options.keyframes.off}
          ${animationDurationToString(options.duration)}
          ${cubicBezierToString(options.cubicBezier)} forwards ${options.other};
      `,
      keyframe: options.keyframes.off,
    },
    initialState: {
      animation: css`
        animation: ${options.initialState} 0s forwards running;
      `,
      keyframe: options.initialState,
    },
  });

  return binaryAnimation;
};

export const runBinaryAnimation = (
  animationCounter: number,
  binaryAnimation: BinaryAnimation,
): CSSAnimation => {
  const evenDivisor = 2;
  if (animationCounter === 0) {
    return binaryAnimation.initialState.animation;
  }

  // it was not checked at the start; this is the default state
  if (binaryAnimation.initialState.keyframe === binaryAnimation.off.keyframe) {
    if (animationCounter % evenDivisor === 0) {
      return binaryAnimation.off.animation;
    }

    return binaryAnimation.on.animation;
  }

  // it was checked from the start by the user
  if (animationCounter % evenDivisor === 0) {
    return binaryAnimation.on.animation;
  }
  return binaryAnimation.off.animation;
};
