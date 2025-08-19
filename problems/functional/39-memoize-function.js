/**
 * Problem 39: Memoize Function
 * Topic: Functional
 *
 * Description:
 * Memoization is an optimization technique where the result of an expensive 
 * function call is cached, and subsequent calls with the same arguments 
 * return the cached result instead of recomputing.
 *
 * Your task is to implement a `memoize` function that takes another function `fn` 
 * as input and returns a new memoized version of that function.
 *
 * Input:
 * - A function `fn` that takes one or more arguments.
 *
 * Output:
 * - A new function that:
 *   - Returns cached results when called with the same arguments.
 *   - Calls the original function `fn` and caches the result if the arguments 
 *     have not been seen before.
 *
 * Examples:
 *
 * Example 1:
 *   Input:
 *     const add = (a, b) => a + b;
 *     const memoizedAdd = memoize(add);
 *     memoizedAdd(2, 3); // Computes and returns 5
 *     memoizedAdd(2, 3); // Returns 5 from cache
 *
 * Example 2:
 *   Input:
 *     const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));
 *     const memoizedFactorial = memoize(factorial);
 *     memoizedFactorial(5); // Computes and returns 120
 *     memoizedFactorial(5); // Returns 120 from cache
 *
 * Example 3:
 *   Input:
 *     const slowSquare = n => {
 *       for (let i = 0; i < 1e7; i++) {} // simulate heavy work
 *       return n * n;
 *     };
 *     const memoizedSquare = memoize(slowSquare);
 *     memoizedSquare(4); // Computes result after delay
 *     memoizedSquare(4); // Returns result instantly from cache
 *
 * Instructions:
 * - Implement the solution inside the function below.
 * - Do not modify the function name.
 */


function solution(input) {
  // Your code here
  return input;
}

module.exports = solution;
