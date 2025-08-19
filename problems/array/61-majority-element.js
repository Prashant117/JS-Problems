/**
 * Problem 61: Majority Element
 * Topic: Array
 *
 * Description:
 * Given an array of size `n`, find the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times 
 * in the array (i.e., strictly more than half of the array size).
 * You may assume that the array is non-empty and that the majority 
 * element always exists in the input.
 *
 * Input:
 * - An array of integers `nums` of length n (1 <= n <= 10^5).
 *
 * Output:
 * - An integer representing the majority element.
 *
 * Examples:
 *
 * Example 1:
 *   Input: [3, 2, 3]
 *   Output: 3
 *
 * Example 2:
 *   Input: [2, 2, 1, 1, 1, 2, 2]
 *   Output: 2
 *
 * Example 3:
 *   Input: [5, 5, 5, 5, 2, 3, 5]
 *   Output: 5
 *
 * Instructions:
 * - Implement the solution inside the function below.
 * - Do not modify the function name.
 */


function solution(input) {
  let myMap = new Map();

  for(let i=0; i<input.length; i++){
    if(myMap.has(input[i])){
      let currentValue = myMap.get(input[i])
      myMap.set(input[i], currentValue + 1)
    }else{
      myMap.set(input[i], 1)
    }
  }

  const majorityNumber = input.length / 2
  

  for (let [key, value] of myMap) {
    if(value > majorityNumber){
      return key
    }
  }
}

const inputArray = [5, 5, 5, 5, 2, 3, 5]
console.log(solution(inputArray));

// module.exports = solution;
