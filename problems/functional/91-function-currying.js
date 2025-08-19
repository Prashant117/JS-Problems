/**
 * Problem 91: Function Currying
 * Topic: Functional
 *
 * Description:
 * Currying is a functional programming technique where a function that takes 
 * multiple arguments is transformed into a sequence of functions, 
 * each taking a single argument.
 *
 * Your task is to implement a `curry` function that takes a function `fn` 
 * as input and transforms it into its curried version.
 *
 * Input:
 * - A function `fn` that takes multiple arguments.
 *
 * Output:
 * - A curried version of the function `fn`.
 *   - The curried function should keep accepting arguments until 
 *     the number of arguments received matches the original function's arity.
 *   - Once enough arguments are provided, it should return the result 
 *     of calling the original function `fn`.
 *
 * Examples:
 *
 * Example 1:
 *   Input:
 *     function add(a, b, c) {
 *       return a + b + c;
 *     }
 *     const curriedAdd = curry(add);
 *     curriedAdd(1)(2)(3); // 6
 *     curriedAdd(1, 2)(3); // 6
 *     curriedAdd(1)(2, 3); // 6
 *
 * Example 2:
 *   Input:
 *     function multiply(a, b) {
 *       return a * b;
 *     }
 *     const curriedMultiply = curry(multiply);
 *     curriedMultiply(2)(5); // 10
 *
 * Example 3:
 *   Input:
 *     function greet(firstName, lastName) {
 *       return `Hello, ${firstName} ${lastName}`;
 *     }
 *     const curriedGreet = curry(greet);
 *     curriedGreet("John")("Doe"); // "Hello, John Doe"
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
