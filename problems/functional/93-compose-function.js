/**
 * Problem 93: Compose Function
 * Topic: Functional
 *
 * Description:
 * Function composition is the process of combining two or more functions 
 * such that the output of one function becomes the input of the next.
 *
 * Your task is to implement a `compose` function that takes multiple 
 * functions as arguments and returns a new function. 
 *
 * The composed function should execute the given functions from **right to left**.
 *   - compose(f, g, h)(x) is equivalent to f(g(h(x))).
 *
 * Input:
 * - Multiple functions as arguments.
 *
 * Output:
 * - A new function representing the composition of the input functions.
 *
 * Examples:
 *
 * Example 1:
 *   Input:
 *     const double = x => x * 2;
 *     const square = x => x * x;
 *     const composedFn = compose(square, double);
 *     composedFn(3);
 *   Output:
 *     36   // square(double(3)) = square(6) = 36
 *
 * Example 2:
 *   Input:
 *     const add1 = x => x + 1;
 *     const double = x => x * 2;
 *     const subtract2 = x => x - 2;
 *     const composedFn = compose(subtract2, double, add1);
 *     composedFn(5);
 *   Output:
 *     10   // subtract2(double(add1(5))) = subtract2(double(6)) = subtract2(12) = 10
 *
 * Example 3:
 *   Input:
 *     const identity = x => x;
 *     const composedFn = compose(identity);
 *     composedFn("Hello");
 *   Output:
 *     "Hello"
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
