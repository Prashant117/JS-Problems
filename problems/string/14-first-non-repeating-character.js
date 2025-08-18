/**
 * Problem 14: First Non-Repeating Character
 * Topic: String
 *
 * Description:
 * Write a JavaScript function that finds the first non-repeating character in a string.
 * A non-repeating character is the one that appears only once in the string.
 * If all characters repeat, return a suitable message (e.g., "No unique character found").
 *
 * Rules:
 * - Consider letter case (e.g., "A" and "a" are different).
 * - The string may contain spaces, digits, or special characters, treat them as valid characters.
 * - Return only the first non-repeating character from left to right.
 *
 * Example:
 *   Input: "javascript"
 *   Output: "j"
 *
 *   Input: "aabbccdde"
 *   Output: "e"
 *
 *   Input: "aabbcc"
 *   Output: "No unique character found"
 *
 * Instructions:
 * - Implement the solution inside the function.
 * - Do not modify the function name.
 * - Return the first non-repeating character or a suitable message.
 */

function solution(input) {
  let inputArray = input.split("");

  for (let i = 0; i < inputArray.length; i++) {
    let currentChar = inputArray[i];

    const occurrencesCount = inputArray.filter((element) => element === currentChar).length;

    if(occurrencesCount == 1){
      return currentChar
    }
  }
  return "No unique character found";
}

console.log(solution("javascript"));

// module.exports = solution;
