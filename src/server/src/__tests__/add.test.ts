// tslint:disable: no-magic-numbers
import add from '../add';

describe('adds things as expected', () => {
  test('adds two positive integers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two negative integers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('adds one negative integer and one positive integer', () => {
    expect(add(-2, 3)).toBe(1);
  });

  test('adds two floats', () => {
    expect(add(2.5, 3.6)).toBeCloseTo(6.1);
  });
});

export {};
