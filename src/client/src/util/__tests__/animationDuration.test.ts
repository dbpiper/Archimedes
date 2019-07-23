import {
  animationDurationToString,
  isAnimationDuration,
  parseAnimationDuration,
} from '../animationDuration';

const failureRegex = /^.*not a valid animation duration string.*$/;

describe('animationDuration tests', () => {
  describe('parseAnimationDuration suite', () => {
    describe('parse works when it should', () => {
      test('positive integer seconds works', () => {
        const duration = parseAnimationDuration('5s');
        const isDuration = isAnimationDuration(duration);

        expect(isDuration).toBeTrue();
      });
      test('positive float seconds works', () => {
        const duration = parseAnimationDuration('3.14s');
        const isDuration = isAnimationDuration(duration);

        expect(isDuration).toBeTrue();
      });

      test('positive integer milliseconds works', () => {
        const duration = parseAnimationDuration('300ms');
        const isDuration = isAnimationDuration(duration);

        expect(isDuration).toBeTrue();
      });

      test('positive float milliseconds works', () => {
        const duration = parseAnimationDuration('333.33ms');
        const isDuration = isAnimationDuration(duration);

        expect(isDuration).toBeTrue();
      });
    });

    describe('parse fails when it should', () => {
      describe('negative input fails', () => {
        test('negative integer seconds fails', () => {
          expect(() => {
            parseAnimationDuration('-5s');
          }).toThrowWithMessage(Error, failureRegex);
        });

        test('negative float seconds fails', () => {
          expect(() => {
            parseAnimationDuration('-3.14s');
          }).toThrowWithMessage(Error, failureRegex);
        });

        test('negative integer milliseconds fails', () => {
          expect(() => {
            parseAnimationDuration('-300ms');
          }).toThrowWithMessage(Error, failureRegex);
        });

        test('negative float milliseconds fails', () => {
          expect(() => {
            parseAnimationDuration('-333.33ms');
          }).toThrowWithMessage(Error, failureRegex);
        });
      });
      describe('invalid unit fails', () => {
        test('hour fails', () => {
          expect(() => {
            parseAnimationDuration('2h');
          }).toThrowWithMessage(Error, failureRegex);
        });
        test('minute fails', () => {
          expect(() => {
            parseAnimationDuration('2m');
          }).toThrowWithMessage(Error, failureRegex);
        });
        test('random string used as unit fails', () => {
          expect(() => {
            parseAnimationDuration('2hello');
          }).toThrowWithMessage(Error, failureRegex);
        });
      });
    });
  });
  describe('animationDurationToString suite', () => {
    test('works correctly', () => {
      const duration = parseAnimationDuration('5s');
      if (isAnimationDuration(duration)) {
        expect(animationDurationToString(duration)).toBeString();
      }
    });
  });
});

export {};
