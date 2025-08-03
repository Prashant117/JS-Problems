/**
 * Problem 5: Find Largest Number in Array
 * Topic: Array
 *
 * Description:
 * Given an array of numbers, write a function that returns the largest number from the array.
 * 
 * Your function should:
 * - Return the largest element in the array
 * - Return `null` if the input is not an array or is empty
 * - Work with both positive and negative numbers
 * 
 * Constraints:
 * - Do not use built-in `Array.prototype.sort()`
 * - You may use `Math.max()` with the spread operator or a manual loop
 * 
 * Examples:
 * 
 * Example 1:
 * Input: [10, 5, 22, 8]
 * Output: 22
 * 
 * Example 2:
 * Input: [42]
 * Output: 42
 * 
 * Example 3:
 * Input: [-10, -20, -5]
 * Output: -5
 * 
 * Example 4:
 * Input: []
 * Output: null
 * 
 * Instructions:
 * - Implement the solution inside the `solution()` function.
 * - Do not rename or remove the function name.
 */

function solution(input) {
  if(input.length == 0){
    return null
  }
  let maxx = input[0];

  for(let i=1; i<input.length; i++){
    if(arr[i] > maxx){
      maxx = arr[i]
    }
  }
  return maxx;
}

const arr = [10, 5, 22, 8]

console.log(solution(arr));


// module.exports = solution;
