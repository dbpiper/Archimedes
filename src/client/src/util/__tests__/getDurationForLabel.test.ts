// tslint:disable: no-magic-numbers

import { getDurationForLabel } from '../getDurationForLabel';

describe('getDurationForLabel test suite', () => {
  test('works for 10 seconds', () => {
    const result = getDurationForLabel(
      '2019-08-09T13:04:46Z',
      '2019-08-09T13:04:56Z',
    );

    expect(result).toEqualCaseInsensitive('a few seconds ago');
  });

  test('works for 10 minutes', () => {
    const result = getDurationForLabel(
      '2019-08-09T13:04:46Z',
      '2019-08-09T13:14:56Z',
    );

    expect(result).toEqualCaseInsensitive('10 minutes ago');
  });

  test('works for 40 minutes', () => {
    const result = getDurationForLabel(
      '2019-08-09T13:04:46Z',
      '2019-08-09T13:44:56Z',
    );

    expect(result).toEqualCaseInsensitive('40 minutes ago');
  });
  test('works for 50 minutes', () => {
    const result = getDurationForLabel(
      '2019-08-09T13:04:46Z',
      '2019-08-09T13:54:56Z',
    );

    // moment starts rounding around here
    expect(result).toEqualCaseInsensitive('an hour ago');
  });

  test('works for 3 hours', () => {
    const result = getDurationForLabel(
      '2019-08-09T13:04:46Z',
      '2019-08-09T16:04:56Z',
    );

    expect(result).toEqualCaseInsensitive('3 hours ago');
  });

  test('works for 3 days', () => {
    const result = getDurationForLabel(
      '2019-08-09T13:04:46Z',
      '2019-08-12T13:04:56Z',
    );

    expect(result).toEqualCaseInsensitive('3 days ago');
  });

  test('works for 3 weeks', () => {
    const result = getDurationForLabel(
      '2019-08-09T13:04:46Z',
      '2019-09-02T13:04:56Z',
    );

    // moment just displays the number of days in this case
    expect(result).toEqualCaseInsensitive('24 days ago');
  });

  test('works for 3 months', () => {
    const result = getDurationForLabel(
      '2019-08-09T13:04:46Z',
      '2019-11-09T13:04:56Z',
    );

    expect(result).toEqualCaseInsensitive('3 months ago');
  });

  test('works for 3 years', () => {
    const result = getDurationForLabel(
      '2016-08-09T13:04:46Z',
      '2019-08-09T13:04:56Z',
    );

    expect(result).toEqualCaseInsensitive('3 years ago');
  });
});

export {};
