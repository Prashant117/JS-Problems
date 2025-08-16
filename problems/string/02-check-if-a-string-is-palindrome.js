/**
 * Problem 2: Check if a String is Palindrome
 * Topic: String
 *
 * Description:
 * Write a JavaScript function that checks whether a given string is a palindrome.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward,
 * ignoring spaces, punctuation, and letter case.
 * 
 * Example:
 *   Input: "racecar"
 *   Output: true
 * 
 *   Input: "hello"
 *   Output: false
 * 
 * Instructions:
 * - Implement the solution inside the function.
 * - Do not modify the function name.
 * - Ignore letter case and non-alphanumeric characters while checking.
 * - Return true if palindrome, false otherwise.
 */

function solution(input) {
  if(input.length == 0){
    return "Empty input string"
  }else if(input.length == 1){
    return true
  }

  let reversedString = input.split("").reverse().join("");
  if(input == reversedString){
    return true
  }else{
    return false
  }
  
}
console.log(solution("racecar"));

// module.exports = solution;
