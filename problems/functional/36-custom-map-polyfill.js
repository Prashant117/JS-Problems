/**
 * Problem 36: Custom Map Polyfill
 * Topic: Functional
 *
 * Description:
 * In JavaScript, the `Array.prototype.map()` method creates a new array 
 * populated with the results of calling a provided function on every 
 * element in the calling array.
 *
 * Your task is to implement a custom version (polyfill) of the `map` method 
 * and attach it to the `Array.prototype`. The behavior should mimic the 
 * built-in `map()`:
 *   - It should iterate over each element of the array.
 *   - It should apply the callback function to each element.
 *   - It should return a new array with the transformed values.
 *
 * Input:
 * - An array of values and a callback function `(element, index, array) => newValue`.
 *
 * Output:
 * - A new array containing the results of applying the callback on each element.
 *
 * Examples:
 *
 * Example 1:
 *   Input: [1, 2, 3].customMap(x => x * 2)
 *   Output: [2, 4, 6]
 *
 * Example 2:
 *   Input: ["a", "b", "c"].customMap((ch, i) => ch + i)
 *   Output: ["a0", "b1", "c2"]
 *
 * Example 3:
 *   Input: [10, 20, 30].customMap((num, i, arr) => num + arr.length)
 *   Output: [13, 23, 33]
 *
 * Instructions:
 * - Implement the solution by defining a new method (e.g., `customMap`) 
 *   on `Array.prototype`.
 * - Do not use the built-in `Array.prototype.map()` inside your implementation.
 */

Array.prototype.customMap = function(callback) {
  // TODO: Implement your logic here
  // this -> refers to the array
  // callback -> function(element, index, array)
  
  const result = [];
  
  // loop over the array and apply callback
  
  return result; // return the new array
};


// module.exports = solution;
