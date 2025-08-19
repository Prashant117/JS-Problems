/**
 * Problem 92: Custom Bind Polyfill
 * Topic: Functional
 *
 * Description:
 * In JavaScript, the `Function.prototype.bind()` method creates a new function 
 * that, when called, has its `this` keyword set to the provided value, 
 * with a given sequence of arguments preceding any arguments provided when 
 * the new function is called.
 *
 * Your task is to implement a custom version (polyfill) of `bind`, 
 * and attach it to `Function.prototype`. 
 *
 * The behavior should mimic the built-in `bind()`:
 *   - It should allow binding a specific `this` context to a function.
 *   - It should allow passing in arguments during binding (partial application).
 *   - The returned function should accept additional arguments when invoked.
 *
 * Input:
 * - A function on which `.customBind()` will be called.
 * - A `thisArg` (the value to bind as `this`).
 * - Optional arguments to pre-fill.
 *
 * Output:
 * - A new function with the specified `this` context and arguments bound.
 *
 * Examples:
 *
 * Example 1:
 *   Input:
 *     function greet(greeting, punctuation) {
 *       return `${greeting}, ${this.name}${punctuation}`;
 *     }
 *     const person = { name: "Alice" };
 *     const greetAlice = greet.customBind(person, "Hello");
 *     greetAlice("!"); 
 *   Output:
 *     "Hello, Alice!"
 *
 * Example 2:
 *   Input:
 *     function add(a, b) {
 *       return a + b + this.extra;
 *     }
 *     const obj = { extra: 10 };
 *     const boundAdd = add.customBind(obj, 5);
 *     boundAdd(15);
 *   Output:
 *     30
 *
 * Instructions:
 * - Implement the solution by defining a new method (e.g., `customBind`) 
 *   on `Function.prototype`.
 * - Do not use the built-in `Function.prototype.bind()` inside your implementation.
 */


function solution(input) {
  // Your code here
  return input;
}

module.exports = solution;
