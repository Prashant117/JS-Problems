/**
 * Problem 8: Anagram Check
 * Topic: String
 *
 * Description:
 * Write a JavaScript function that checks if two given strings are anagrams of each other.
 * An anagram is formed by rearranging the letters of one word or phrase to create another,
 * using all the original letters exactly once.
 * 
 * Rules:
 * - Ignore letter case.
 * - Ignore spaces and non-alphanumeric characters.
 * - Both strings must use the same characters the same number of times.
 * 
 * Example:
 *   Input: "listen", "silent"
 *   Output: true
 * 
 *   Input: "Hello", "Olelh"
 *   Output: true
 * 
 *   Input: "test", "tent"
 *   Output: false
 * 
 * Instructions:
 * - Implement the solution inside the function.
 * - Do not modify the function name.
 * - Return true if the strings are anagrams, otherwise return false.
 */


function solution(str1, str2) {
  if(str1 === str2){
    return true
  }

  let sortedStr1 = str1.split("").sort().join("")
  let sortedStr2 = str2.split("").sort().join("")

  if(sortedStr1 === sortedStr2){
    return true
  }else{
    return false
  }

}


console.log(solution("listen", "silent"));

// module.exports = solution;
