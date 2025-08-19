/**
 * Problem 90: Throttle Implementation
 * Topic: Functional
 *
 * Description:
 * Throttling is a technique to control the rate at which a function is executed. 
 * A throttled function ensures that the original function `fn` is only called 
 * at most once in every given time interval (`limit`), even if it is triggered 
 * multiple times during that interval.
 *
 * Your task is to implement a `throttle` function that takes:
 *   - `fn`: the function to throttle
 *   - `limit`: the minimum time interval in milliseconds
 *
 * The returned throttled function should:
 *   - Call `fn` immediately on the first invocation.
 *   - Ignore subsequent calls until the `limit` time has passed.
 *
 * Input:
 * - A function `fn` (the original function to throttle).
 * - An integer `limit` (time in milliseconds).
 *
 * Output:
 * - A throttled version of the function `fn`.
 *
 * Examples:
 *
 * Example 1:
 *   Input:
 *     const log = () => console.log("Hello");
 *     const throttledLog = throttle(log, 2000);
 *     throttledLog(); // Executes immediately -> "Hello"
 *     throttledLog(); // Ignored (within 2s window)
 *     // After 2s, calling again executes -> "Hello"
 *
 * Example 2:
 *   Input:
 *     const resizeHandler = () => console.log("Window resized");
 *     const throttledResize = throttle(resizeHandler, 1000);
 *     window.addEventListener("resize", throttledResize);
 *
 *   Output:
 *     // Even if resize fires many times, "Window resized" logs at most once per second.
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
