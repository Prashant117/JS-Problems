/**
 * Problem 64: Longest Palindromic Substring
 * Topic: String
 *
 * Description:
 * Given a string `s`, return the longest substring of `s` that is a palindrome.
 *
 * A palindrome is a string that reads the same backward as forward.
 * For example, "madam" and "racecar" are palindromes.
 *
 * Input:
 * - A string `s` of length n (1 <= n <= 1000).
 *
 * Output:
 * - A string representing the longest palindromic substring in `s`.
 * - If there are multiple answers, return any one of them.
 *
 * Examples:
 *
 * Example 1:
 *   Input: "babad"
 *   Output: "bab"
 *   Explanation: "aba" is also a valid answer.
 *
 * Example 2:
 *   Input: "cbbd"
 *   Output: "bb"
 *
 * Example 3:
 *   Input: "a"
 *   Output: "a"
 *
 * Example 4:
 *   Input: "ac"
 *   Output: "a"   (or "c")
 *
 * Instructions:
 * - Implement the solution inside the function below.
 * - Do not modify the function name.
 */


function solution(input) {
  let longestString = "";

  for(let i =0; i<input.length; i++){
    for(let j =i; j<input.length; j++){
      let currentString = input.substring(i, j+1)

      if(isPalindrome(currentString) && currentString.length > longestString.length){
        longestString = currentString
      }
    }
  }
  return longestString;
}


const isPalindrome = (str) => {
  const reversedString = str.split("").reverse().join("");
  if(str == reversedString){
    return true
  }
  return false
}

console.log(solution("babad"));


// module.exports = solution;
