/**
 * Problem 6: Remove Duplicates from Array
 * Topic: Array
 *
 * Description:
 * Given an array of elements, write a JavaScript function that returns a new array
 * containing only the unique elements, with all duplicates removed.
 * 
 * Your function should:
 * - Preserve the original order of first occurrences
 * - Handle arrays of numbers, strings, or mixed types
 * 
 * Constraints:
 * - Do not use external libraries like Lodash
 * - You may use ES6 features such as `Set` or filter/map
 * 
 * Examples:
 * 
 * Example 1:
 * Input: [1, 2, 2, 3, 4, 4, 5]
 * Output: [1, 2, 3, 4, 5]
 * 
 * Example 2:
 * Input: ['a', 'b', 'a', 'c', 'b']
 * Output: ['a', 'b', 'c']
 * 
 * Example 3:
 * Input: [true, false, true, true]
 * Output: [true, false]
 * 
 * Example 4:
 * Input: []
 * Output: []
 * 
 * Instructions:
 * - Implement the solution inside the `solution()` function.
 * - Do not rename or remove the function name.
 */


function solution(input) {

  // ************ SOLUTION 1 ************ //
  // ************ USING SET ************ //
  // const numSet = new Set(input)
  // const newArr = [...numSet]
  // return newArr
  
  
  // ************ SOLUTION 2 ************ //
  // *********** USING FILTER *********** //
  return input.filter((element, index, array) => {
    return array.indexOf(element) === index;
  })
}

const arr = [1, 2, 2, 3, 4, 4, 5]

console.log(solution(arr));

// module.exports = solution;
