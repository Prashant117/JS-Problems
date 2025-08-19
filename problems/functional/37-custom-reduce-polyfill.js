/**
 * Problem 37: Custom Reduce Polyfill
 * Topic: Functional
 *
 * Description:
 * In JavaScript, the `Array.prototype.reduce()` method executes a reducer 
 * function (that you provide) on each element of the array, resulting in 
 * a single output value.
 *
 * Your task is to implement a custom version (polyfill) of the `reduce` method 
 * and attach it to `Array.prototype`. The behavior should mimic the built-in `reduce()`:
 *   - It should execute the callback function once for each element in the array.
 *   - The callback takes four arguments:
 *       accumulator, currentValue, currentIndex, array
 *   - The initial value is optional:
 *       - If provided, it is used as the starting accumulator.
 *       - If not provided, the first element of the array is used as the initial accumulator.
 *
 * Input:
 * - An array of values and a reducer callback function `(acc, curr, i, arr) => newAcc`.
 * - An optional initial value for the accumulator.
 *
 * Output:
 * - A single accumulated result after processing all elements.
 *
 * Examples:
 *
 * Example 1:
 *   Input: [1, 2, 3, 4].customReduce((acc, curr) => acc + curr, 0)
 *   Output: 10
 *
 * Example 2:
 *   Input: [1, 2, 3, 4].customReduce((acc, curr) => acc * curr, 1)
 *   Output: 24
 *
 * Example 3:
 *   Input: ["a", "b", "c"].customReduce((acc, curr) => acc + curr)
 *   Output: "abc"
 *
 * Instructions:
 * - Implement the solution by defining a new method (e.g., `customReduce`) 
 *   on `Array.prototype`.
 * - Do not use the built-in `Array.prototype.reduce()` inside your implementation.
 */


function solution(input) {
  // Your code here
  return input;
}

module.exports = solution;
