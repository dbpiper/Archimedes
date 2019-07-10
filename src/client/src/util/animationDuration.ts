export interface AnimationDuration extends String {
  __duration__: never;
}
const checkValidAnimationDurationStr = (str: string): boolean =>
  str.match(/^\d+((\.)?\d+)?(ms|s)$/) !== null;

export const parseAnimationDuration = (
  animationDuration: string,
): AnimationDuration => {
  if (checkValidAnimationDurationStr(animationDuration)) {
    return (animationDuration as unknown) as AnimationDuration;
  }

  throw new Error(
    `The animation duration string: ${animationDuration} is not valid!`,
  );
};

export const animationDurationToString = (
  animationDuration: AnimationDuration,
): string => (animationDuration as unknown) as string;
