/**
 * Problem 38: Debounce Implementation
 * Topic: Functional
 *
 * Description:
 * In JavaScript, debouncing is a technique to limit the rate at which a function
 * is executed. A debounced function delays the execution of the original function 
 * until after a specified delay has passed since the last time the debounced 
 * function was invoked.
 *
 * Your task is to implement a `debounce` function that takes two arguments:
 *   - `fn`: the function to debounce
 *   - `delay`: the number of milliseconds to wait before calling `fn`
 *
 * The returned debounced function should:
 *   - Postpone the execution of `fn` until after `delay` ms have elapsed
 *     since the last time the debounced function was called.
 *
 * Input:
 * - A function `fn` (the original function to debounce).
 * - An integer `delay` (in milliseconds).
 *
 * Output:
 * - A debounced version of the input function `fn`.
 *
 * Examples:
 *
 * Example 1:
 *   Input:
 *     const log = () => console.log("Hello");
 *     const debouncedLog = debounce(log, 1000);
 *     debouncedLog();
 *     debouncedLog();
 *     debouncedLog();
 *
 *   Output:
 *     // "Hello" is logged only once, after ~1000ms,
 *     // because the calls happened within the delay window.
 *
 * Example 2:
 *   Input:
 *     const search = (q) => console.log("Searching for:", q);
 *     const debouncedSearch = debounce(search, 500);
 *     debouncedSearch("a");
 *     debouncedSearch("ab");
 *     debouncedSearch("abc");
 *
 *   Output:
 *     // Only "Searching for: abc" is logged, after ~500ms.
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
