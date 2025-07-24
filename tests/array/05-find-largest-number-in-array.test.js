const solution = require('../../problems/array/05-find-largest-number-in-array');

test('Finds largest number in a normal array', () => {
  expect(solution([10, 5, 22, 8])).toBe(22);
});

test('Handles array with one element', () => {
  expect(solution([42])).toBe(42);
});

test('Handles negative numbers', () => {
  expect(solution([-10, -20, -5])).toBe(-5);
});

test('Returns null for empty array', () => {
  expect(solution([])).toBe(null);
});

