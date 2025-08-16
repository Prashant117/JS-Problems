/**
 * Problem 1: Reverse a String
 * Topic: String
 *
 * Description:
 * Write a JavaScript function that takes a string as input and returns the string reversed.
 * The reversal should maintain the case and spaces exactly as they are.
 * 
 * Example:
 *   Input: "hello"
 *   Output: "olleh"
 * 
 *   Input: "JavaScript"
 *   Output: "tpircSavaJ"
 * 
 *   Input: "A man a plan a canal Panama"
 *   Output: "amanaP lanac a nalp a nam A"
 * 
 * Instructions:
 * - Implement the solution inside the function.
 * - Do not modify the function name.
 * - Do not use built-in reverse() directly on strings (you may convert to an array if needed).
 * - Handle edge cases like empty strings and single-character strings.
 */


// ----------------------- Solution 1 ----------------------- //
// function solution(input) {
//   return input.split("").reverse().join("")
// }



// ----------------------- Solution 2 ----------------------- //
function solution(input) {
  if(input.length == 0){
    return "Empty input string "
  }else if(input.length == 1){
    return input
  }

  let arrayString = input.split("")
  let updatedReversedString = ""

  for(let i=arrayString.length - 1; i>=0; i--){
    updatedReversedString = updatedReversedString + arrayString[i]
  }

  return updatedReversedString;
}

console.log(solution("hello"));

// module.exports = solution;
