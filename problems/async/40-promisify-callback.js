/**
 * Problem 40: Promisify Callback
 * Topic: Async
 *
 * Description:
 * In JavaScript, many older APIs use the callback pattern, where a function 
 * takes a callback as its last argument. The callback is usually invoked as:
 *   callback(error, result)
 *
 * Your task is to write a function `promisify` that converts such a 
 * callback-based function into a function that returns a Promise instead.
 *
 * Input:
 * - A function `fn` that expects a callback as its last argument. 
 *   The callback follows the Node.js convention: callback(error, result).
 *
 * Output:
 * - A new function that returns a Promise. 
 *   - If the callback is called with an error, the Promise should reject. 
 *   - If the callback is called with a result, the Promise should resolve.
 *
 * Examples:
 *
 * Example 1:
 *   Input:
 *     function getData(callback) {
 *       setTimeout(() => callback(null, "Hello World"), 1000);
 *     }
 *     const promisedFn = promisify(getData);
 *     promisedFn().then(console.log); // "Hello World"
 *
 * Example 2:
 *   Input:
 *     function failTask(callback) {
 *       setTimeout(() => callback("Something went wrong", null), 1000);
 *     }
 *     const promisedFail = promisify(failTask);
 *     promisedFail().catch(console.error); // "Something went wrong"
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
