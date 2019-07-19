export interface AnimationDuration extends String {
  __duration__: never;
}

const checkValidAnimationDurationStr = (str: string): boolean =>
  str.match(/^\d+((\.)?\d+)?(ms|s)$/) !== null;

export const isAnimationDuration = (
  arg: string | AnimationDuration,
): arg is AnimationDuration => {
  if (arg) {
    return checkValidAnimationDurationStr(arg as string);
  }

  return false;
};

export const parseAnimationDuration = (
  animationDuration: string,
): AnimationDuration => {
  if (isAnimationDuration(animationDuration)) {
    return animationDuration;
  }

  throw new Error(
    `The provided value ${animationDuration} is not a valid animation duration string!`,
  );
};

export const animationDurationToString = (
  animationDuration: AnimationDuration,
): string => (animationDuration as unknown) as string;
